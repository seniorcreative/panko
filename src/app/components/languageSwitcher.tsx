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
      const locale = await setDefaultLocaleCookie();
      setCurrentLocaleFromCookie(locale);
    };
    getLocale();
  }, []);

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
          active={currentLocaleFromCookie === lang}
          icon={icon}
          changeMethod={(lang) => {
            changeLanguageCookieValue(lang), setCurrentLocaleFromCookie(lang);
          }}
        />
      ))}
    </>
  );
}
