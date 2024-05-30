"use client";

import React, { useRef, useEffect, useState } from "react";
import anime from "animejs";

const content = require("../data/content.json");

export type servicesType = {
  locale: string;
};

export default function Services({ locale }: servicesType) {
  const [visitorType, setVisitorType] = useState("creative");
  const [servicesList, setServicesList] = useState<string[]>([]);
  // const pageContent = useRef<HTMLDivElement>(null);
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

    setServicesList(content[locale].home.sections.services.body[visitorType]);
  }, [locale, visitorType]);

  const buttonStyle = "p-2 rounded-md me-2 border-2 border-dark";

  return (
    // Todo: Animate these across using AnimeJS
    <section className="relative h-screen flex items-center justify-center text-green-500 leading-8">
      <a id="services" className="absolute top-0"></a>
      <div className="w-3/4 md:w-1/3">
        <div>
          <h2 className="text-lg">
            <strong>{content[locale].home.sections.services.title}</strong>
          </h2>
          <h3>Who are you?</h3>
          <div className="flex">
            <button
              onClick={() => setVisitorType("creative")}
              className={`${buttonStyle}  ${
                visitorType === "creative"
                  ? "border-green-800 bg-green-700 text-white"
                  : " text-green-700 border-green-500"
              }`}
            >
              Creative
            </button>
            <button
              onClick={() => setVisitorType("techie")}
              className={`${buttonStyle}  ${
                visitorType === "techie"
                  ? "border-green-800 bg-green-700 text-white"
                  : " text-green-700 border-green-500"
              }`}
            >
              Techie
            </button>
          </div>
        </div>
        <br />
        <h3 className="text-md font-bold mb-3">panko can help you with</h3>
        {/* <div id="content" ref={pageContent}></div> */}
        <ul>
          {servicesList.map((service: string) => (
            <li key={service}>&bull;&nbsp;{service}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
