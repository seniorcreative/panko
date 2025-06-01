"use client";

import React, { useRef, useEffect, useState, useContext } from "react";
import { animate } from "animejs";
import VisitorSelector from "../components/visitorSelector";
import { VisitorContext } from "../contexts/visitorContext";

const content = require("../data/content.json");

export type servicesType = {
  locale: string;
};

export default function Services({ locale }: servicesType) {
  const { visitorType, setVisitorType } = useContext(VisitorContext);
  const [servicesList, setServicesList] = useState<string[]>([]);
  // const pageContent = useRef<HTMLDivElement>(null);
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

    setServicesList(content[locale].home.sections.services.body[visitorType]);
  }, [locale, visitorType]);

  return (
    // Todo: Animate these across using AnimeJS
    <section className="relative min-h-screen py-8 flex items-center justify-center text-green-500 leading-8">
      <a id="services" className="absolute top-0"></a>
      <div className="w-3/4 md:w-1/3">
        <h2 className="text-xl mb-2 -ms-4">
          <strong>{content[locale].home.sections.services.title}</strong>
        </h2>
        <VisitorSelector />
        <h3 className="text-md font-bold mb-3">
          {locale !== "zh-CN" ? "panko can help you with" : "panko可以帮助你"}
        </h3>
        <ul>
          {servicesList.map((service: string) => (
            <li key={service}>&bull;&nbsp;{service}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
