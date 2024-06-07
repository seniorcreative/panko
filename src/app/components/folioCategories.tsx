import React, { useContext, useState, useEffect } from "react";
import anime from "animejs";

import VisitorSelector from "./visitorSelector";
import { VisitorContext } from "../contexts/visitorContext";

export default function FolioCategories({
  categories,
  locale,
  categoryInfo,
}: {
  categories: Set<string>;
  locale: string;
  categoryInfo: any;
}): JSX.Element {
  const [selectedSection, setSelectedSection] = useState("");
  const { visitorType, setVisitorType } = useContext(VisitorContext);

  useEffect(() => {
    const filteredTargets = Array.from(categories).filter(
      (cat: string) => cat !== selectedSection
    );
    const addedFilteredIds = filteredTargets.map((t) => "#" + t);

    const defaultAnimeProps = {
      rotateX: [180, 130],
      scaleY: [1, 0.25],
      paddingTop: ["0.5em", 0],
      marginBottom: ["0.5em", 0],
      paddingBottom: ["0.5em", 0],
      perspective: [125, 125],
      easing: "easeInOutQuad",
      duration: 300,
    };

    const resetAnimeProps = {
      rotateX: [130, 0],
      scaleY: [0.25, 1],
      paddingTop: [0, "0.5em"],
      marginBottom: [0, "0.5em"],
      paddingBottom: [0, "0.5em"],
      perspective: [125, 125],
      easing: "easeInOutQuad",
      duration: 300,
    };

    // Animation using Anime.js
    if (selectedSection !== "") {
      anime({
        targets: addedFilteredIds,
        delay: 50,
        ...defaultAnimeProps,
      });
    } else {
      anime({
        targets: addedFilteredIds,
        delay: 50,
        ...resetAnimeProps,
      });
    }
  }, [selectedSection, categories]);

  return (
    <section className="bg-black px-8 md:p-12 min-h-12 -mt-2">
      <div className="container w-3/4 mx-auto">
        <ul className="list-none lg:flex lg:justify-around py-2 mb-4">
          {Array.from(categories).map((cat: string) => (
            <li
              key={cat}
              id={cat}
              onClick={() => {
                setSelectedSection(cat);
              }}
              style={{ transform: "perspective(70px)" }}
              className="cat-link p-2 rounded-md me-2 mb-2 border-2 border-light py-1 cursor-pointer text-white text-sm"
            >
              <a>{cat}</a>
            </li>
          ))}
        </ul>
      </div>
      {selectedSection && (
        <div className="container relative my-6 rounded-md border-2 border-dotted border-t-black border-b-black border-l-gray-50 border-r-gray-50 p-4 md:p-12 text-white">
          <button
            className="absolute text-white top-2 right-2"
            type="button"
            role="button"
            onClick={() => {
              setSelectedSection("");
            }}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <VisitorSelector mono />
          <p className="text-white pb-4">
            {categoryInfo[selectedSection][visitorType]}
          </p>
          <p className="cat-link p-2 rounded-md me-2 border-2 border-light py-1 cursor-pointer inline-block">
            <a
              type="button"
              className="text-white text-sm"
              href={`/folio/${selectedSection}`}
            >
              {locale !== "zh-CN" ? "view work" : "查看工作"}
            </a>
          </p>
        </div>
      )}
    </section>
  );
}
