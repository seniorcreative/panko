"use client";

import React, { useEffect, useState, useContext } from "react";
import { usePathname } from "next/navigation";

import Gallery from "../../components/gallery";
import { LanguageContext } from "../../contexts/languageContext";
const content = require("../../data/content.json");

export default function Page() {
  const pathName = usePathname();
  const [folioSection, setFolioSection] = useState("");
  const { language, setLanguage } = useContext(LanguageContext);
  const [filteredWork, setFilteredWork] = useState([]);

  useEffect(() => {
    const currentPath: string = pathName.split("/folio/")[1];
    if (pathName) setFolioSection(currentPath);
    console.log("Current Path", currentPath);
    setFilteredWork(
      currentPath === "all"
        ? content[language].work
        : content[language].work.filter((workItem: any) =>
            workItem.category.includes(currentPath)
          )
    );
  }, [pathName, language]);

  return (
    <div className="mt-8 mx-auto py-6 sm:py-6 w-full">
      {folioSection && (
        <h3 className="text-lg px-4 my-4">
          Viewing {folioSection.toLowerCase()} work
        </h3>
      )}
      {filteredWork.length &&
        filteredWork.map((post: any) => (
          <article key={post.id} className="w-full">
            <Gallery
              images={post.meta.imageUrl}
              description={post.description}
              title={post.title}
              client={post.meta.client}
              locale={language}
              href={post.href}
            />
          </article>
        ))}
    </div>
  );
}
