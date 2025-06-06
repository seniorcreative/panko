"use client";

import { useEffect } from "react";
import { animate } from "animejs";
import React, { useRef } from "react";

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
    <section className="relative min-h-screen py-8 flex items-center justify-center text-red-500 leading-8">
      <a id="about" className="absolute top-0"></a>
      <div className="w-3/4 md:w-1/3">
        <h2 className="text-xl mb-2 -ms-4">
          <strong>{content[locale].home.sections.about.title}</strong>
        </h2>
        <div id="content" ref={pageContent}></div>
      </div>
    </section>
  );
}
