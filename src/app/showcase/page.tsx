"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { aldrich } from "../fonts";
import { Raleway } from "next/font/google";

const ral = Raleway({ weight: ["400", "600"], subsets: ["latin"] });

const content = require("../data/content.json");

interface ShowcaseProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  industry: string;
  technologies: string[];
  tags: string[];
  color: string;
  accent: string;
  image: string;
}

const projects: ShowcaseProject[] = content["en-US"].showcase;

export default function ShowcasePage() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(
    new Set(),
  );
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = parseInt(entry.target.getAttribute("data-index") || "0");
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.3 },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black">
      {/* Hero intro */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-6">
        <Link
          href="/"
          className={`${aldrich.className} absolute top-28 left-6 md:left-12 text-sm text-gray-600 hover:text-white transition-colors`}
        >
          &larr; Home
        </Link>
        <h1
          className={`${aldrich.className} text-5xl md:text-7xl lg:text-8xl text-white text-center leading-tight mb-6`}
        >
          Showcase
        </h1>
        <p
          className={`${ral.className} text-lg md:text-xl text-gray-500 text-center max-w-lg mb-16`}
        >
          Experiments, prototypes, and creative technology.
        </p>
        <div className="animate-bounce text-gray-600">
          <ArrowDown size={24} />
        </div>
      </section>

      {/* Project sections */}
      {projects.map((project, i) => {
        const isVisible = visibleSections.has(i);
        const isEven = i % 2 === 0;

        return (
          <section
            key={project.id}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            data-index={i}
            className="min-h-screen relative flex items-center overflow-hidden"
            style={{ backgroundColor: project.color }}
          >
            {/* Placeholder visual — animated geometric shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Large accent circle */}
              <div
                className="absolute rounded-full transition-all duration-[1.5s] ease-out"
                style={{
                  width: "60vw",
                  height: "60vw",
                  maxWidth: "700px",
                  maxHeight: "700px",
                  background: `radial-gradient(circle, ${project.accent}15, transparent 70%)`,
                  right: isEven ? "-10vw" : "auto",
                  left: isEven ? "auto" : "-10vw",
                  top: "50%",
                  transform: isVisible
                    ? "translateY(-50%) scale(1)"
                    : "translateY(-50%) scale(0.5)",
                  opacity: isVisible ? 1 : 0,
                }}
              />
              {/* Floating accent line */}
              <div
                className="absolute transition-all duration-[1.2s] ease-out delay-300"
                style={{
                  width: isVisible ? "30vw" : "0",
                  height: "2px",
                  background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)`,
                  top: "30%",
                  left: isEven ? "10%" : "60%",
                  opacity: isVisible ? 1 : 0,
                }}
              />
              {/* Small floating dot */}
              <div
                className="absolute rounded-full transition-all duration-[2s] ease-out delay-500"
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: project.accent,
                  opacity: isVisible ? 0.6 : 0,
                  top: "25%",
                  right: isEven ? "20%" : "auto",
                  left: isEven ? "auto" : "20%",
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                }}
              />
              {/* Accent ring */}
              <div
                className="absolute rounded-full border transition-all duration-[1.8s] ease-out delay-200"
                style={{
                  width: "20vw",
                  height: "20vw",
                  maxWidth: "250px",
                  maxHeight: "250px",
                  borderColor: `${project.accent}20`,
                  bottom: "15%",
                  right: isEven ? "15%" : "auto",
                  left: isEven ? "auto" : "15%",
                  transform: isVisible
                    ? "scale(1) rotate(0deg)"
                    : "scale(0) rotate(90deg)",
                  opacity: isVisible ? 1 : 0,
                }}
              />
            </div>

            {/* Content */}
            <div
              className={`relative z-10 w-full px-6 md:px-12 lg:px-24 flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12 md:gap-20`}
            >
              {/* Text side */}
              <div
                className="flex-1 max-w-xl transition-all duration-[1s] ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(60px)",
                }}
              >
                <p
                  className={`${aldrich.className} text-sm uppercase tracking-widest mb-4`}
                  style={{ color: project.accent }}
                >
                  {project.subtitle}
                </p>
                <h2
                  className={`${aldrich.className} text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 flex flex-wrap`}
                >
                  {project.title.split(" ").map((word: string, wi: number) => (
                    <span
                      key={wi}
                      className="inline-block overflow-hidden mr-[0.3em]"
                    >
                      <span
                        className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{
                          transform: isVisible
                            ? "translateY(0)"
                            : "translateY(110%)",
                          transitionDelay: `${wi * 80 + 200}ms`,
                        }}
                      >
                        {word}
                      </span>
                    </span>
                  ))}
                </h2>
                <p
                  className={`${ral.className} text-lg text-gray-400 leading-relaxed mb-8`}
                >
                  {project.description}
                </p>
                <div className="mb-6 space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`${aldrich.className} text-xs uppercase tracking-widest text-gray-600`}
                    >
                      Category
                    </span>
                    <span className={`${ral.className} text-sm text-gray-400`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`${aldrich.className} text-xs uppercase tracking-widest text-gray-600`}
                    >
                      Industry
                    </span>
                    <span className={`${ral.className} text-sm text-gray-400`}>
                      {project.industry}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`${aldrich.className} text-xs uppercase tracking-widest text-gray-600 flex-shrink-0`}
                    >
                      Tech
                    </span>
                    <span className={`${ral.className} text-sm text-gray-400`}>
                      {project.technologies.join(" · ")}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`${ral.className} text-xs px-3 py-1 rounded-full border`}
                      style={{
                        borderColor: `${project.accent}30`,
                        color: `${project.accent}cc`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual placeholder side */}
              <div
                className="flex-1 flex items-center justify-center transition-all duration-[1.2s] ease-out delay-200"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateX(0)"
                    : `translateX(${isEven ? "80px" : "-80px"})`,
                }}
              >
                <div
                  className="relative w-full aspect-[4/3] max-w-lg rounded-2xl overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}, ${project.accent}10)`,
                    border: `1px solid ${project.accent}15`,
                  }}
                >
                  {/* Placeholder animated content — replace with real images later */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="text-center"
                      style={{ color: `${project.accent}40` }}
                    >
                      <div
                        className="w-16 h-16 mx-auto mb-4 rounded-xl border-2 flex items-center justify-center"
                        style={{ borderColor: `${project.accent}30` }}
                      >
                        <span className={`${aldrich.className} text-2xl`}>
                          {i + 1}
                        </span>
                      </div>
                      <p
                        className={`${aldrich.className} text-sm uppercase tracking-widest`}
                      >
                        Image coming soon
                      </p>
                    </div>
                  </div>
                  {/* Decorative grid overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `linear-gradient(${project.accent} 1px, transparent 1px), linear-gradient(90deg, ${project.accent} 1px, transparent 1px)`,
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Footer CTA */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center px-6 bg-black">
        <h2
          className={`${aldrich.className} text-3xl md:text-4xl text-white text-center mb-6`}
        >
          Got a project in mind?
        </h2>
        <Link
          href="/#contact"
          className={`${aldrich.className} px-8 py-4 bg-white text-black rounded-lg text-lg hover:bg-gray-200 transition-colors`}
        >
          Get in touch
        </Link>
      </section>
    </div>
  );
}
