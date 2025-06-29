"use client";

import React, { useRef, useEffect } from 'react';

interface LavaLampBlobsProps {
  className?: string;
}

export default function LavaLampBlobs({ className = '' }: LavaLampBlobsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) {
      console.warn('WebGL not supported, falling back to 2D canvas');
      return;
    }

    const vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;

      float smoothCircle(vec2 uv, vec2 center, float radius) {
        float dist = length(uv - center);
        return 1.0 - smoothstep(radius - 0.1, radius + 0.1, dist);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;
        vec3 finalColor = vec3(0.0);

        // Pink blob
        vec2 center1 = vec2(sin(u_time * 0.3) * 0.4, cos(u_time * 0.2) * 0.3);
        float circle1 = smoothCircle(uv, center1, 0.3 + sin(u_time * 0.4) * 0.1);
        vec3 pink = vec3(1.0, 0.4, 0.7);
        finalColor += pink * circle1;

        // Blue blob
        vec2 center2 = vec2(cos(u_time * 0.25) * 0.5, sin(u_time * 0.35) * 0.4);
        float circle2 = smoothCircle(uv, center2, 0.25 + cos(u_time * 0.3) * 0.08);
        vec3 blue = vec3(0.3, 0.6, 1.0);
        finalColor += blue * circle2;

        // Light pink blob
        vec2 center3 = vec2(sin(u_time * 0.15) * 0.6, cos(u_time * 0.45) * 0.2);
        float circle3 = smoothCircle(uv, center3, 0.2 + sin(u_time * 0.5) * 0.05);
        vec3 lightPink = vec3(1.0, 0.7, 0.9);
        finalColor += lightPink * circle3;

        // Periwinkle blob
        vec2 center4 = vec2(cos(u_time * 0.4) * 0.3, sin(u_time * 0.2) * 0.5);
        float circle4 = smoothCircle(uv, center4, 0.15 + cos(u_time * 0.6) * 0.03);
        vec3 periwinkle = vec3(0.6, 0.7, 1.0);
        finalColor += periwinkle * circle4;

        gl_FragColor = vec4(finalColor, 0.4);
      }
    `;

    function createShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type);
      if (!shader) return null;
      
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      
      return shader;
    }

    function createProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) {
      const program = gl.createProgram();
      if (!program) return null;
      
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program link error:', gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
      }
      
      return program;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    
    if (!vertexShader || !fragmentShader) return;
    
    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) return;

    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
    const timeUniformLocation = gl.getUniformLocation(program, 'u_time');
    const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    
    const positions = [
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    function resizeCanvas() {
      if (!canvas || !gl) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    function render(time: number) {
      if (!canvas || !gl) return;
      
      resizeCanvas();
      
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      gl.useProgram(program);

      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform1f(timeUniformLocation, time * 0.001);
      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameRef.current = requestAnimationFrame(render);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ zIndex: -1 }}
    />
  );
}