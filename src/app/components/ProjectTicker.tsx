"use client";

import { useState } from "react";

interface Project {
  title: string;
  client: string;
  href: string | null;
}

interface ProjectTickerProps {
  projects: Project[];
}

export default function ProjectTicker({ projects }: ProjectTickerProps) {
  const [isPaused, setIsPaused] = useState(false);
  
  // Duplicate projects for seamless loop
  const duplicatedProjects = [...projects, ...projects];
  
  const handleClick = (project: Project) => {
    if (project.href) {
      window.open(project.href, '_blank');
    }
  };

  return (
    <div className="w-full overflow-hidden py-3 my-6">
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .ticker-content {
          animation: ticker 60s linear infinite;
          animation-play-state: ${isPaused ? 'paused' : 'running'};
        }
        
        .ticker-content:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div 
        className="ticker-content flex items-center whitespace-nowrap"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedProjects.map((project, index) => (
          <div
            key={index}
            className={`inline-flex items-center mx-8 ${
              project.href ? 'cursor-pointer' : ''
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
  );
}