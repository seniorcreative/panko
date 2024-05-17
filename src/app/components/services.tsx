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
      content[locale].home.sections.services;
  }, [locale]);

  return (
    // Todo: Animate these across using AnimeJS
    <section className="h-screen flex items-center justify-center text-green-500 leading-8">
      <a id="services"></a>
      <div>
        <h2>Services</h2>
        <h3>Who are you?</h3>
        <button>Techie</button>
        <button>Creative</button>
      </div>
      <div id="content" className="w-3/4 md:w-1/3" ref={pageContent}></div>
      {/* <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul> */}
    </section>
  );
}
