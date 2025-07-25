"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [viewMode, setViewMode] = useState<'ticker' | 'list'>('ticker');
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = (project: Project) => {
    if (project.href) {
      window.open(project.href, '_blank');
    }
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsAutoScrolling(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  
  const scrollToCenter = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const projectWidth = container.scrollWidth / projects.length;
      const targetScroll = currentIndex * projectWidth - (container.clientWidth / 2) + (projectWidth / 2);

      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {

    scrollToCenter();
  }, [currentIndex]);

  useEffect(() => {
    if (isAutoScrolling) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoScrolling, projects.length]);

  const sortedProjects = [...projects].sort((a, b) => {
    const yearA = parseInt(a.year);
    const yearB = parseInt(b.year);
    return yearB - yearA;
  });

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'ticker' ? 'list' : 'ticker');
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsAutoScrolling(false);
  };

  if (viewMode === 'list') {
    return (
      <div className="w-full py-3 my-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 mx-auto bg-clip-text text-transparent mb-4 -ms-4">
            <strong>Recent Projects</strong>
          </h2>
          <button
            onClick={toggleViewMode}
            className="text-blue-900 bg-white p-3 rounded hover:bg-blue-800 hover:text-white transition-colors relative overflow-hidden"
            aria-label="Switch to Ticker view"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
                className="animate-pulse"
                style={{
                  animation: 'slideRight 2s ease-in-out infinite',
                  opacity: '0.6'
                }}
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7"
                style={{
                  animation: 'slideRight 2s ease-in-out infinite 0.5s',
                  opacity: '0.8'
                }}
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 5l7 7-7 7"
                style={{
                  animation: 'slideRight 2s ease-in-out infinite 1s'
                }}
              />
            </svg>
            <style jsx>{`
              @keyframes slideRight {
                0% { opacity: 0; transform: translateX(-10px); }
                50% { opacity: 1; transform: translateX(0px); }
                100% { opacity: 0; transform: translateX(10px); }
              }
            `}</style>
          </button>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between p-4 bg-gray-100 border-2 border-dashed border-gray-300 rounded">
            <div className="flex items-center">
              <span className="text-gray-500 font-mono text-sm uppercase tracking-wide mr-3">
                You
              </span>
              <span className="text-gray-500 font-mono text-lg uppercase tracking-wider">
                Your Project
              </span>
            </div>
            <Link href="/services/#contact" className="bg-blue-900 font-sans rounded rounded-full text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors text-sm uppercase tracking-wide">
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

        <div className="mt-6 text-center">
          <Link
            href="/folio/all"
            className="text-blue-900 text-sm uppercase tracking-wide hover:underline transition-all hover:text-blue-700"
          >
            View older work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-3 my-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-blue-900">Recent Projects</h2>
        <button
          onClick={toggleViewMode}
          className="text-blue-900 bg-white p-3 rounded hover:bg-blue-800 hover:text-white transition-colors"
          aria-label="Switch to List view"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center">
        <div className="flex-1 mx-8 overflow-hidden relative">
          <div
            ref={containerRef}
            className="flex items-center overflow-x-hidden scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex-shrink-0 inline-flex items-center mx-8 min-w-fit ${project.href ? 'cursor-pointer' : ''
                  }`}
                onClick={() => handleClick(project)}
              >
                <span className="text-blue-900 font-mono text-sm ml-2 me-3 uppercase tracking-wide">
                  {project.client}
                </span>
                <span className="text-white font-mono text-lg uppercase tracking-wider font-bold bg-blue-900 text-white px-3 py-1 rounded-sm shadow-sm border-2 border-gray-800">
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
                <span className="text-blue-900 mx-4">•</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextProject}
          className="ml-4 bg-blue-900 text-white p-3 rounded-full hover:bg-blue-800 transition-colors shadow-lg flex-shrink-0"
          aria-label="Next project"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="mt-6 text-left">
        <Link
          href="/folio"
          className="text-blue-900 text-sm uppercase tracking-wide hover:underline transition-all hover:text-blue-700"
        >
          View older work
        </Link>
      </div>
    </div>
  );
}