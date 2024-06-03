"use client";

import React, { useEffect, useState, useContext } from "react";
import { usePathname } from "next/navigation";
import { getCurrentLocale } from "../../actions";

import Gallery from "../../components/gallery";
import { LanguageContext } from "../../contexts/languageContext";
const content = require("../../data/content.json");

export default function Page() {
  // const [currentLocale, setCurrentLocale] = useState("en-US");

  const pathName = usePathname();
  const [folioSection, setFolioSection] = useState("");
  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    // const getLocale = async () => {
    //   const locale = await getCurrentLocale();
    //   setCurrentLocale(locale);
    // };
    // getLocale();

    console.log(`pathname`, pathName);
    setFolioSection(pathName.split("/folio/")[1]);
  }, [pathName]);

  return (
    <div className="mt-8 mx-auto py-6 sm:py-6 w-full">
      <h3 className="text-lg px-4 my-4">Viewing {folioSection}</h3>
      {content[language].work.map((post: any) => (
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
