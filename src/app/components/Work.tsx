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
      {/* <LavaLampBlobs className="opacity-40" /> */}
      <div className="container relative z-10">
        <h2 className={`${aldrich.className} text-4xl bg-gradient-to-r from-blue-400 to-purple-400 mx-auto bg-clip-text text-transparent mb-4`}>
          <strong>{content[locale].home.sections.about.title}</strong>
        </h2>
        <div id="content" className="text-indigo-800 mb-8" ref={pageContent}></div>
        
        <div className="border-t border-gray-300 pt-2">
          <ProjectTicker projects={content[locale].home.sections.about.recentProjects} />
        </div>
      </div>
    </section>
  );
}
