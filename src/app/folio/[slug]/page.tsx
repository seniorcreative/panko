"use client";

import React, { useEffect, useState, useContext } from "react";
import { usePathname } from "next/navigation";

import Gallery from "../../components/gallery";
import { LanguageContext } from "../../contexts/languageContext";
import FolioCategories from "@/app/components/folioCategories";
import Shuffler from "@/app/components/shuffler";
const content = require("../../data/content.json");

export default function Page() {
  const pathName = usePathname();
  const [folioSection, setFolioSection] = useState("");
  const { language, setLanguage } = useContext(LanguageContext);
  const [filteredWork, setFilteredWork] = useState([]);

  const folioCategories = new Set<string>();

  content[language].work.forEach((workItem: any) => {
    workItem.category.forEach((cat: string) => {
      folioCategories.add(cat);
    });
  });

  const catInfo = content[language].categoryInfo;

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

      <FolioCategories
      categories={folioCategories}
      locale={language}
      categoryInfo={catInfo}
      ></FolioCategories>
      {/* <Shuffler></Shuffler> */}

      {folioSection && (
        <div className="p-5 mb-4">
          <h3 className="text-center text-xl my-4 text-neutral-900">
            {language !== "zh-CN"
              ? `Viewing ${folioSection.toLowerCase()} retro work`
              : `观看
          ${folioSection.toLowerCase()} 作品`}
          </h3>
          {/* <p className="text-center text-slate-400">
            {language !== "zh-CN"
              ? `More recent works coming soon when launched`
              : `更多最新作品即将推出`}
          </p> */}
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
