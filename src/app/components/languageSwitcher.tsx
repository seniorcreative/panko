"use client";

import React, { useState, useEffect, useContext } from "react";
import { setDefaultLocaleCookie, changeLanguageCookieValue } from "../actions";

import LanguageSwitcherIdiom from "./languageSwitcherIdiom";
import Link from "next/link";
import LanguageContextProvider, { LanguageContext } from "../languageContext";

export default function LanguageSwitcher({ font }: { font: any }) {
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

  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <ul className="list-none flex py-2">
      <li className="flex mx-2 items-center h-100">
        <Link
          className={`${font.className} text-gray-800 text-sm`}
          href="/folio/all"
        >
          {language !== "zh-CN" ? "work" : "工作"}
        </Link>
      </li>
      <li className="flex mx-2 items-center h-100">
        <Link
          className={`${font.className} text-gray-800 text-sm`}
          href="/#about"
        >
          {language !== "zh-CN" ? "about" : "关于"}
        </Link>
      </li>
      <li className="flex mx-2 items-center h-100">
        <Link
          className={`${font.className} text-gray-800 text-sm`}
          href="/#services"
        >
          {language !== "zh-CN" ? "services" : "服务"}
        </Link>
      </li>
      <li className="flex ms-2 items-center h-100">
        {languageMap.map(({ lang, icon }) => (
          <LanguageSwitcherIdiom
            key={lang}
            language={lang}
            active={language === lang}
            icon={icon}
            changeMethod={(lang) => {
              changeLanguageCookieValue(lang);
              // setCurrentLocaleFromCookie(lang);
              setLanguage(lang);
              // window.location.reload();
            }}
          />
        ))}
      </li>
    </ul>
  );
}
