"use client";

import { useEffect } from "react";
import anime from "animejs";
import React, { useRef } from "react";

const content = require("../data/content.json");

export type aboutType = {
  locale: string;
};

export default function About({ locale }: aboutType) {
  const pageContent = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Animation using Anime.js
    anime({
      targets: "#content",
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
    <section className="h-screen flex items-center justify-center text-red-500 leading-8">
      <a id="about"></a>
      <h2>About Panko</h2>
      <div id="content" className="w-3/4 md:w-1/3" ref={pageContent}></div>
    </section>
  );
}
