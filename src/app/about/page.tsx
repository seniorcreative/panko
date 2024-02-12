"use client";

import { useEffect } from "react";
import anime from "animejs";
import React, { useRef } from "react";

const pageData = { content: "Cooking on gas" };
const content = require("../data/content.json");

export default function Page() {
  const pageIntroElement = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Animation using Anime.js
    anime({
      targets: "#intro-content",
      translateX: [-100, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: 500,
    });

    if (pageIntroElement === null) return;
    (pageIntroElement.current as unknown as HTMLDivElement).innerHTML =
      content.en.home.sections.intro;
  }, []);

  return (
    <main className="h-screen flex items-center justify-center">
      {/* <h1>{pageData.content}</h1> */}
      {/* <div className="animate-logo">Move this.</div> */}
      <div id="intro-content" className="w-1/2" ref={pageIntroElement}></div>
    </main>
  );
}
