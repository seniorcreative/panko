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
    // console.log("Current Path", currentPath);
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
        <div className="p-5 mb-4">
          <h3 className="text-center text-xl my-4 text-neutral-900">
            {language !== "zh-CN"
              ? `Viewing ${folioSection.toLowerCase()} work`
              : `观看
          ${folioSection.toLowerCase()} 作品`}
          </h3>
          <p className="text-center text-slate-400">
            {language !== "zh-CN"
              ? `More recent works coming soon when launched`
              : `更多最新作品即将推出`}
          </p>
        </div>
      )}
      {filteredWork.length ? (
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
        ))
      ) : (
        <p className="px-4 text-neutral-900">
          {language !== "zh-CN"
            ? "Sorry, no work to show"
            : "抱歉，没有作品可展示"}
        </p>
      )}
    </div>
  );
}
