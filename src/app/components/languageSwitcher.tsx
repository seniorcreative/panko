"use client";

import React from "react";
import { useState, useEffect } from "react";
import { setDefaultLocaleCookie, changeLanguageCookieValue } from "../actions";

import LanguageSwitcherIdiom from "./languageSwitcherIdiom";
import Link from "next/link";

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

  return (
    <>
      <ul className="list-none w-3/4 flex basis-1 py-2">
        <li className="flex mx-2 items-center h-100">
          <Link
            className={`${font.className} text-gray-800 text-sm`}
            href="/folio/all"
          >
            {currentLocaleFromCookie !== "zh-CN" ? "work" : "工作"}
          </Link>
        </li>
        <li className="flex mx-2 items-center h-100">
          <Link
            className={`${font.className} text-gray-800 text-sm`}
            href="/#about"
          >
            {currentLocaleFromCookie !== "zh-CN" ? "about" : "关于"}
          </Link>
        </li>
        <li className="flex mx-2 items-center h-100">
          <Link
            className={`${font.className} text-gray-800 text-sm`}
            href="/#services"
          >
            {currentLocaleFromCookie !== "zh-CN" ? "services" : "服务"}
          </Link>
        </li>
        <li className="flex ms-2 items-center h-100">
          {languageMap.map(({ lang, icon }) => (
            <LanguageSwitcherIdiom
              key={lang}
              language={lang}
              active={currentLocaleFromCookie === lang}
              icon={icon}
              changeMethod={(lang) => {
                changeLanguageCookieValue(lang);
                setCurrentLocaleFromCookie(lang);
                window.location.reload();
              }}
            />
          ))}
        </li>
      </ul>
    </>
  );
}
