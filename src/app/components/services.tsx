"use client";

import { useEffect } from "react";
import anime from "animejs";
import React, { useRef } from "react";

const content = require("../data/content.json");

export type servicesType = {
  locale: string;
};

export default function Services({ locale }: servicesType) {
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
      content[locale].home.sections.services.body;
  }, [locale]);

  const buttonStyle = "p-2 rounded-md me-2 border-2 border-dark";

  return (
    // Todo: Animate these across using AnimeJS
    <section className="relative h-screen flex items-center justify-center text-green-500 leading-8">
      <a id="services" className="absolute top-0"></a>
      <div className="w-3/4 md:w-1/3">
        <div>
          <h2 className="text-lg">
            {content[locale].home.sections.services.title}
          </h2>
          <h3>Who are you?</h3>
          <div className="flex">
            <button className={`${buttonStyle} border-green-700`}>
              Techie
            </button>
            <button className={`${buttonStyle} border-green-700`}>
              Creative
            </button>
          </div>
        </div>
        <div id="content" ref={pageContent}></div>
      </div>
    </section>
  );
}
