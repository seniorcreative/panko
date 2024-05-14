"use client";

import React from "react";
import { useState, useEffect } from "react";
import { setDefaultLocaleCookie, changeLanguageCookieValue } from "../actions";

import LanguageSwitcherIdiom from "./languageSwitcherIdiom";

export default function LanguageSwitcher() {
  const [currentLocaleFromCookie, setCurrentLocaleFromCookie] = useState<
    string | undefined
  >();
  useEffect(() => {
    const getLocale = async () => {
      debugger;
      const locale = await setDefaultLocaleCookie();
      setCurrentLocaleFromCookie(locale);
    };
    getLocale();
  }, []);

  // const currentLocaleFromCookie = cookies().get("NEXT_LOCALE")?.value as string;

  const languageMap = [
    { lang: "en-US", icon: "language_us" },
    { lang: "zh-CN", icon: "language_chinese_quick" },
  ];

  return (
    <>
      {languageMap.map(({ lang, icon }) => (
        <LanguageSwitcherIdiom
          key={lang}
          language={lang}
          currentLanguage={currentLocaleFromCookie}
          icon={icon}
          changeMethod={changeLanguageCookieValue}
        />
      ))}
    </>
  );
}
