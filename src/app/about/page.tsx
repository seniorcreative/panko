"use client";

import anime from "animejs";
import React, { useRef, useEffect, useState } from "react";
import { getCurrentLocale } from "../actions";

const content = require("../data/content.json");

export default function Page() {
  const pageIntroElement = useRef<HTMLDivElement>(null);
  const [currentLocale, setCurrentLocale] = useState("en-US");

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

    const getLocale = async () => {
      const locale = await getCurrentLocale();
      setCurrentLocale(locale);
      console.log("Got your default language", locale);
    };
    getLocale();

    // Way of setting innerHTML if you want to be using tags
    if (pageIntroElement === null) return;
    if (!currentLocale) return;

    (pageIntroElement.current as unknown as HTMLDivElement).innerHTML =
      content[currentLocale].home.sections.about;
  }, []);

  return (
    <main className="h-screen flex items-center justify-center text-red-500 leading-8">
      <div id="content" className="w-3/4 md:w-1/3" ref={pageIntroElement}></div>
    </main>
  );
}
