import React, { useState } from "react";

export default function FolioCategories({
  categories,
  locale,
}: {
  categories: Set<string>;
  locale: string;
}): JSX.Element {
  const [selectedSection, setSelectedSection] = useState("");

  return (
    <section className="bg-black px-8 md:p-12 min-h-12 -mt-2">
      <div className="container mx-auto">
        <ul className="list-none lg:flex lg:justify-around py-2">
          {Array.from(categories).map((cat: string) => (
            <li
              key={cat}
              className="cat-link p-2 rounded-md me-2 border-2 border-light py-1 cursor-pointer text-white text-sm"
            >
              <a
                className=""
                onClick={() => {
                  selectedSection === cat
                    ? setSelectedSection("")
                    : setSelectedSection(cat);
                }}
              >
                {cat}
              </a>
            </li>
          ))}
        </ul>
        {selectedSection && (
          <div className="mt-6 mx-auto rounded-md border-l-gray-50 border-r-gray-50 p-16 text-white">
            <p className="text-white pb-4">
              Info about the {selectedSection} folio section
            </p>
            <a
              type="button"
              className="cat-link p-2 rounded-md me-2 border-2 border-light py-1 cursor-pointer text-white text-sm"
              href={`/folio/${selectedSection}`}
            >
              {locale !== "zh-CN" ? "work" : "工作"}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
