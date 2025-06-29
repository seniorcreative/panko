"use client";

import { useEffect } from "react";
import { animate } from "animejs";
import React, { useRef } from "react";
import LavaLampBlobs from "./LavaLampBlobs";

const content = require("../data/content.json");

export type aboutType = {
  locale: string;
};

export default function About({ locale }: aboutType) {
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
      <LavaLampBlobs className="opacity-40" />
      <div className="w-3/4 md:w-1/3 relative z-10">
        <h2 className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 mx-auto bg-clip-text text-transparent mb-2 -ms-4">
          <strong>{content[locale].home.sections.about.title}</strong>
        </h2>
        <div id="content" className="text-indigo-800" ref={pageContent}></div>
      </div>
    </section>
  );
}
