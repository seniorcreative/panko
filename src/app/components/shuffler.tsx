"use client";

import { useEffect } from "react";
import anime from "animejs";
import React, { useRef } from "react";

export default function Shuffler() {
  const words = [
    "Precision App Nouse Knockout Offerings",
    "Press A New Key Object",
    "Potential Activated Nurturing Knowhow Openly",
    "Philosopher And Naturally Knowledgeable Ordinator",
    "Pushing Against Normal Known Obstacles",
    "Processing Actual Numbers Keeping Open-minded",
    "Programming Advanced Nominal Keeping Open",
    "Pursuing Adaptable New Knowledge Output",
    "Providing A Nuanced Kind Organisation",
  ];

  useEffect(() => {
    // Animation using Anime.js
    anime({
      targets: "#p",
      translateY: [-40, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 500,
      delay: 1000,
    });
    anime({
      targets: "#a",
      translateY: [40, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 500,
      delay: 1000,
    });
    anime({
      targets: "#n",
      translateY: [-40, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 500,
      delay: 1000,
    });
    anime({
      targets: "#k",
      translateY: [40, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 500,
      delay: 1000,
    });
    anime({
      targets: "#o",
      translateY: [-40, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 500,
      delay: 1000,
    });
  }, []);

  const getRandomWord = () => {
    const wordArrayLen = words.length;
    const wordSelection = words[Math.round(Math.random() * wordArrayLen)];
    const ws = wordSelection.split(" ");
    return {
      p: ws[0],
      a: ws[1],
      n: ws[2],
      k: ws[3],
      o: ws[4],
    };
  };

  const letters = getRandomWord();

  return (
    <div className="flex container mx-auto">
      <div id="p" className="border rounded rounded-md p-2 me-2">
        {letters["p"]}
      </div>
      <div id="a" className="border rounded rounded-md p-2 me-2">
        {letters["a"]}
      </div>
      <div id="n" className="border rounded rounded-md p-2 me-2">
        {letters["n"]}
      </div>
      <div id="k" className="border rounded rounded-md p-2 me-2">
        {letters["k"]}
      </div>
      <div id="o" className="border rounded rounded-md p-2 me-2">
        {letters["o"]}
      </div>
    </div>
  );
}
