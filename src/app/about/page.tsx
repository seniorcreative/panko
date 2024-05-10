"use client";

import { useEffect } from "react";
import anime from "animejs";
import React, { useRef } from "react";

const content = require("../data/content.json");

export default function Page() {
  const pageIntroElement = useRef<HTMLDivElement>(null);
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

    if (pageIntroElement === null) return;
    (pageIntroElement.current as unknown as HTMLDivElement).innerHTML =
      content.en.home.sections.about;
  }, []);

  return (
    <main className="h-screen flex items-center justify-center text-red-500 leading-8">
      <div id="content" className="w-3/4 md:w-1/3" ref={pageIntroElement}></div>
    </main>
  );
}
