"use client";

import React, { useEffect } from "react";

import "./stellae.css";

export default function Stellae({ invert }: { invert?: boolean }) {
  useEffect(() => {
    const max = 4;
    const min = 0.5;
    const count = 75;

    const canvas = document.querySelector("#campus-stellae");

    const estrellae = () => {
      const campusEstrellae =
        document.getElementById("estrella") || document.createElement("div");
      campusEstrellae.id = "estrella";

      for (let i = 0; i < count; i++) {
        const direction = document.createElement("div");
        direction.classList.add("estrella-angle");
        direction.style.rotate = `${i * (360 / count)}deg`;

        const estrella = document.createElement("div");
        const rdm = Math.random() * (max - min) + min;
        estrella.classList.add("estrella");

        const styleDec: any = estrella.style;

        if (invert) {
          styleDec["backgroundColor"] = "rgba(255, 255, 255, 0.25)";
        }

        // styleDec["animationRangeStart"] = Math.round(Math.random() * 100) + "%";
        styleDec["animationDuration"] = `${rdm}s`;
        styleDec["animationDelay"] = Math.random() * 5 + "s";

        Array(styleDec).map((styleKey: any) => {
          estrella.style[styleKey] = styleDec[styleKey];
        });

        direction.appendChild(estrella);

        campusEstrellae.appendChild(direction);
      }

      return campusEstrellae;
    };

    canvas?.appendChild(estrellae());
  }, [invert]);

  return (
    <div
      id="campus-stellae"
      className="flex isolation-auto h-screen absolute xs:top-1/2 md:top-1/3 left-1/2 justify-center w-full items-center -z-10 "
    ></div>
  );
}
