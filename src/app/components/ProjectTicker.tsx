"use client";

import Link from "next/link";
import { aldrich } from "../fonts";
import { useEffect, useRef, useState } from "react";

interface Project {
  title: string;
  client: string;
  href: string | null;
  year: string;
}

interface ProjectTickerProps {
  projects: Project[];
}

export default function ProjectTicker({ projects }: ProjectTickerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showFirstItem, setShowFirstItem] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (project: Project) => {
    if (project.href) {
      window.open(project.href, '_blank');
    }
  };

  const sortedProjects = [...projects].sort((a, b) => {
    const yearA = parseInt(a.year);
    const yearB = parseInt(b.year);
    return yearB - yearA;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Wait 2 seconds before showing the first item
          setTimeout(() => {
            setShowFirstItem(true);
          }, 2000);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before fully in view
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className="w-full py-3 my-6">
      <div className="mb-6">
        <h2 className={`${aldrich.className} text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4`}>
          <strong>Recent Projects</strong>
        </h2>
      </div>

      <div className="space-y-2">
        <div className={`flex items-center justify-between p-4 bg-gray-100 border-2 border-dashed border-gray-300 rounded transition-all duration-700 ease-out transform ${
          showFirstItem 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex items-center">
            <span className="text-gray-500 font-mono text-sm uppercase tracking-wide mr-3">
              You
            </span>
            <span className="text-gray-500 font-mono text-lg uppercase tracking-wider">
              Your Project
            </span>
          </div>
          <Link href="#contact" className="bg-blue-900 font-sans rounded-full text-white px-4 py-2 hover:bg-blue-800 transition-colors text-sm uppercase tracking-wide">
            Be next, contact me
          </Link>
        </div>

        {sortedProjects.map((project, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 bg-white border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow ${project.href ? 'cursor-pointer' : ''
              }`}
            onClick={() => handleClick(project)}
          >
            <div className="flex items-center">
              <span className="text-blue-900 font-mono text-sm mr-3 uppercase tracking-wide min-w-[80px]">
                {project.client}
              </span>
              <span className="text-blue-900 font-mono text-lg uppercase tracking-wider font-bold">
                {project.title}
              </span>
              {project.href && (
                <svg
                  className="w-4 h-4 text-blue-900 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              )}
            </div>
            <span className="text-blue-900 font-mono text-sm font-bold">
              {project.year}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-around items-center mx-auto max-w-md">
        <Link
          href="/folio"
          className={`${aldrich.className} text-blue-900 text-sm uppercase tracking-wide underline border-2 border-blue-900 rounded-full px-4 py-2 hover:bg-blue-900 hover:text-white transition-all duration-300`}
        >
          View older work
        </Link>
        <Link
          href="https://github.com/seniorcreative"
          target="_blank"
          rel="noopener noreferrer"
          className={`${aldrich.className} text-blue-900 text-sm uppercase tracking-wide underline border-2 border-blue-900 rounded-full px-4 py-2 hover:bg-blue-900 hover:text-white transition-all duration-300`}
        >
          View code experiments
        </Link>
      </div>
    </div>
  );
}