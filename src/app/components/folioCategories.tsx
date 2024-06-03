import React, { useContext, useState } from "react";
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

  return (
    <section className="bg-black px-8 md:p-12 min-h-12 -mt-2">
      <div className="container w-3/4 mx-auto">
        <ul className="list-none lg:flex lg:justify-around py-2 mb-4">
          {Array.from(categories).map((cat: string) => (
            <li
              key={cat}
              className="cat-link p-2 rounded-md me-2 mb-2 border-2 border-light py-1 cursor-pointer text-white text-sm"
            >
              <a
                className=""
                onClick={() => {
                  setSelectedSection(cat);
                }}
              >
                {cat}
              </a>
            </li>
          ))}
        </ul>
        {selectedSection && (
          <div className="container relative my-6 rounded-md border-2 border-dotted border-t-black border-b-black border-l-gray-50 border-r-gray-50 p-6 md:p-16 text-white">
            <button
              className="absolute text-white top-4 right-4"
              type="button"
              role="button"
              onClick={() => {
                setSelectedSection("");
              }}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <VisitorSelector />
            <p className="text-white pb-4">
              {categoryInfo[selectedSection][visitorType]}
            </p>
            <a
              type="button"
              className="cat-link p-2 rounded-md me-2 border-2 border-light py-1 cursor-pointer text-white text-sm"
              href={`/folio/${selectedSection}`}
            >
              {locale !== "zh-CN" ? "view work" : "查看工作"}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
