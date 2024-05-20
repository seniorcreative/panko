"use client";

import React, { useEffect, useState, useContext } from "react";
import { getCurrentLocale } from "../../actions";

import Gallery from "../../components/gallery";
import { LanguageContext } from "../../languageContext";
const content = require("../../data/content.json");

export default function Page() {
  const [currentLocale, setCurrentLocale] = useState("en-US");

  useEffect(() => {
    const getLocale = async () => {
      const locale = await getCurrentLocale();
      setCurrentLocale(locale);
    };
    getLocale();
  }, []);

  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="mt-8 mx-auto py-6 sm:py-6 w-full">
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
