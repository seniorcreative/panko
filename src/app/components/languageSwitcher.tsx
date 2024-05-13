"use server";

import React from "react";
import { cookies } from "next/headers";
import Link from "next/link";

import { setDefaultLocaleCookie, changeLanguageCookieValue } from "../actions";

import LanguageSwitcherIdiom from "./languageSwitcherIdiom";

const locales = ["en-US", "zh-CN", "fr", "es"];

export default async function LanguageSwitcher() {
  //   setDefaultLocaleCookie();

  const currentLocaleFromCookie = cookies().get("NEXT_LOCALE")?.value as string;

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
