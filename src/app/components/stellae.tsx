"use client";

import React, { useEffect } from "react";

import "./stellae.css";

export default function Stellae() {
  useEffect(() => {
    const max = 32;
    const min = 4;
    const count = 70;

    const canvas = document.querySelector("#campus-stellae");

    const estrellae = () => {
      const campusEstrellae = document.createElement("div");
      campusEstrellae.id = "estrella";

      for (let i = 0; i < count; i++) {
        const direction = document.createElement("div");
        direction.classList.add("estrella-angle");
        direction.style.rotate = `${i * (360 / count)}deg`;

        const estrella = document.createElement("div");
        const rdm = Math.random() * (max - min) + min;
        estrella.classList.add("estrella");
        estrella.style.animationDuration = `${rdm}s`;

        direction.appendChild(estrella);
        campusEstrellae.appendChild(direction);
      }

      return campusEstrellae;
    };

    canvas?.appendChild(estrellae());
  }, []);

  return (
    <div
      id="campus-stellae"
      className="flex isolation-auto absolute top-1/2 left-1/2 justify-center items-center -z-10"
    ></div>
  );
}
