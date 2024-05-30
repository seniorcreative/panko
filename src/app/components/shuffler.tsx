"use client";

import anime from "animejs";
import React, { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../languageContext";

export default function Shuffler() {
  const [letters, setLetters] = useState([]);
  const [keyMap, setKeyMap] = useState([]);
  const [shuffles, setShuffles] = useState(0);

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const words: any = {
      "en-US": [
        "Precision App Nouse Knockout Offerings",
        "Press A New Key Object",
        "Potential Activated Nurturing Knowhow Openly",
        "Philosophy And Natural Knowledge Ordinated",
        "Pushing Against Normal Known Obstacles",
        "Processing Actual Numbers Keeping Open-minded",
        "Programming Advanced Nominal Keenly Organised",
        "Pursuing Adaptable New Knowledgable Output",
        "Providing A Nuanced, Kind Organisation",
      ],
      "zh-CN": ["按 一个 新的 钥匙 目的", "推动 反对 普通的 已知 障碍"],
    };

    const getRandomWord = (wordIndex: number) => {
      let wordSelection = words[language][wordIndex];
      if (!wordSelection) {
        setShuffles(0);
        wordSelection = words[language][0];
      }

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

    const { letters, keyMap } = getRandomWord(shuffles) || {
      letters: [],
      keyMap: [],
    };
    setLetters(letters as []);
    setKeyMap(keyMap as []);
  }, [shuffles, language]);

  if (!letters) return null;

  return (
    <div className="md:flex container mx-auto px-4">
      {letters?.map((word, i) => {
        return (
          <div
            key={keyMap[i]}
            id={keyMap[i]}
            style={{ transform: "perspective(70px)" }}
            className="border rounded-md p-2 me-2 w-1/2 text-emerald-900 text-center"
          >
            <strong>{keyMap[i]}</strong>{" "}
            {language === "en-US"
              ? String(word).substring(1, String(word).length)
              : word}
          </div>
        );
      })}
      <button
        type="button"
        style={{ lineHeight: 0 }}
        className="p-2 me-2 mt-3 md:mt-0 bg-slate-300 text-emerald-900 text-center rounded-full"
        onClick={() => setShuffles(shuffles + 1)}
      >
        <span className="material-symbols-outlined">refresh</span>
      </button>
    </div>
  );
}
