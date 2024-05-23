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
      const wordIndex = Math.round(Math.random() * wordArrayLen);
      console.log(wordArrayLen, wordIndex);
      const wordSelection = words[wordIndex];
      if (wordSelection) {
        const ws: string[] = wordSelection.split(" ");
        const keys = ["p", "a", "n", "k", "o"];
        return { letters: ws, keyMap: keys };
      }
    };

    const defaultAnimeProps = {
      rotateX: [180, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 400,
    };

    // Animation using Anime.js
    anime({
      targets: "#p",
      delay: 200,
      ...defaultAnimeProps,
    });
    anime({
      targets: "#a",
      delay: 300,
      ...defaultAnimeProps,
    });
    anime({
      targets: "#n",
      delay: 400,
      ...defaultAnimeProps,
    });
    anime({
      targets: "#k",
      delay: 500,
      ...defaultAnimeProps,
    });
    anime({
      targets: "#o",
      delay: 600,
      ...defaultAnimeProps,
    });

    const { letters, keyMap } = getRandomWord() || { letters: [], keyMap: [] };
    setLetters(letters as []);
    setKeyMap(keyMap as []);
  }, [shuffles]);

  if (!letters) return null;

  return (
    <div className="md:flex container mx-auto px-4">
      {letters?.map((word, i) => {
        return (
          <div
            key={keyMap[i]}
            id={keyMap[i]}
            style={{ transform: "perspective(70px)" }}
            className="border rounded-md p-2 me-2 w-1/2 text-emerald-900"
          >
            <strong>{keyMap[i]}</strong>{" "}
            {String(word).substring(1, String(word).length)}
          </div>
        );
      })}
      <button
        type="button"
        className="p-2 me-2 text-emerald-900"
        onClick={() => setShuffles(shuffles + 1)}
      >
        <span className="material-symbols-outlined">refresh</span>
      </button>
    </div>
  );
}
