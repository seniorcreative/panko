"use client";

import { useEffect, useState } from "react";
import anime from "animejs";
import React, { useRef } from "react";

export default function Shuffler() {
  const [letters, setLetters] = useState([]);
  const [keyMap, setKeyMap] = useState([]);
  const [shuffles, setShuffles] = useState(0);

  useEffect(() => {
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

    const getRandomWord = () => {
      const wordArrayLen = words.length;
      const wordIndex = Math.round(Math.random() * wordArrayLen) - 1;
      console.log(wordArrayLen, wordIndex);
      const wordSelection = words[wordIndex];
      if (wordSelection) {
        const ws: string[] = wordSelection.split(" ");
        const keys = ["p", "a", "n", "k", "o"];
        return { letters: ws, keyMap: keys };
      }
    };

    // Animation using Anime.js
    anime({
      targets: "#p",
      translateY: [-40, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: 2000,
    });
    anime({
      targets: "#a",
      translateY: [40, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: 2000,
    });
    anime({
      targets: "#n",
      translateY: [-40, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: 2000,
    });
    anime({
      targets: "#k",
      translateY: [40, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: 2000,
    });
    anime({
      targets: "#o",
      translateY: [-40, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: 2000,
    });

    const { letters, keyMap } = getRandomWord() || { letters: [], keyMap: [] };
    setLetters(letters as []);
    setKeyMap(keyMap as []);
  }, [shuffles]);

  if (!letters) return null;

  return (
    <div className="flex container mx-auto">
      {letters?.map((word, i) => {
        return (
          <div
            key={keyMap[i]}
            id={keyMap[i]}
            className="border rounded-md p-2 me-2 text-emerald-900"
          >
            {word}
          </div>
        );
      })}
      <button
        type="button"
        className="text-emerald-900"
        onClick={() => setShuffles(shuffles + 1)}
      >
        Shuffle
      </button>
    </div>
  );
}
