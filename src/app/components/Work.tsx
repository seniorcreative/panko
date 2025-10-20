"use client";

import { useEffect } from "react";
import { animate } from "animejs";
import React, { useRef } from "react";
// import LavaLampBlobs from "./LavaLampBlobs";
import ProjectTicker from "./ProjectTicker";
import { aldrich } from "../fonts";

const content = require("../data/content.json");

export type workType = {
  locale: string;
};

export default function Work({ locale }: workType) {
  const pageContent = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Animation using Anime.js
    animate("#content", {
      translateX: [-100, 0],
      rotateX: [-10, 10],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: 500,
    });

    if (pageContent === null) return;
    (pageContent.current as unknown as HTMLDivElement).innerHTML =
      content[locale].home.sections.about.body;
  }, [locale]);

  return (
    <section className="relative min-h-screen py-8 flex items-center justify-center leading-8 overflow-hidden">
      <div className="container relative z-10">
        <h2
          className={`${aldrich.className} text-4xl bg-gradient-to-r from-blue-400 to-purple-400 mx-auto bg-clip-text text-transparent mb-4`}
        >
          <strong>{content[locale].home.sections.about.title}</strong>
        </h2>

        <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-start mb-8">
          {/* Image Container - appears first on mobile, right on desktop */}
          <div className="flex justify-center lg:justify-end flex-shrink-0 mb-8 lg:mb-0 order-first lg:order-last">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
              <img
                src="/profile/SAND_250820_0767_400x400.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div
            id="content"
            className="text-indigo-800 flex-1 lg:flex-initial"
            ref={pageContent}
          ></div>
        </div>

        <div className="border-t border-gray-300 pt-2">
          <ProjectTicker
            projects={content[locale].home.sections.about.recentProjects}
          />
        </div>
      </div>
    </section>
  );
}
