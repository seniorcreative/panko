"use client";

import { usePathname, useParams } from "next/navigation";
import React, { useState, useEffect, useContext } from "react";
import { setDefaultLocaleCookie, changeLanguageCookieValue } from "../actions";

import LanguageSwitcherIdiom from "./languageSwitcherIdiom";
import Link from "next/link";
import { LanguageContext } from "../contexts/languageContext";

const getHash = () =>
  typeof window !== "undefined" ? window.location.hash : undefined;

export default function LanguageSwitcher({ font }: { font: any }) {
  const [currentLocaleFromCookie, setCurrentLocaleFromCookie] = useState<
    string | undefined
  >();

  const pathname = usePathname();
  const params = useParams();

  const [hash, setHash] = useState(getHash());

  const languageMap = [
    { lang: "en-US", icon: "language_us" },
    { lang: "zh-CN", icon: "language_chinese_quick" },
  ];

  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    setHash(getHash());
  }, [params]);

  useEffect(() => {
    const getLocale = async () => {
      const locale = await setDefaultLocaleCookie();
      setCurrentLocaleFromCookie(locale);
    };
    getLocale();
  }, []);

  return (
    <ul className="list-none flex py-2">
      <li className="flex me-3 items-center h-100">
        <Link
          className={`${font.className} text-gray-800 text-sm ${
            decodeURI(pathname) == "/10x" ? "underline" : ""
          }`}
          href="/10x"
        >
{language !== "zh-CN" ? "Services" : "副驾驶"}
        </Link>
      </li>
      <li className="flex me-3 items-center h-100">
        <Link
          className={`${font.className} text-gray-800 text-sm ${
            decodeURI(pathname).includes("/folio/all") ? "underline" : ""
          }`}
          href="/folio/all"
        >
{language !== "zh-CN" ? "Portfolio" : "工作"}
        </Link>
      </li>
      <li className="flex me-3 items-center h-100">
        <Link
          className={`${font.className} text-gray-800 text-sm ${
            hash?.includes("about") ? "underline" : ""
          }`}
          href="/#about"
        >
          {language !== "zh-CN" ? "About" : "关于"}
        </Link>
      </li>
      <li className="flex me-3 items-center h-100">
        <Link
          className={`${font.className} inline-flex items-center px-4 py-2 bg-gradient-to-r text-xs from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all transform hover:scale-105 shadow-lg ${
            decodeURI(pathname).includes("/folio/all") ? "underline" : ""
          }`}
          href="/10x/#contact"
        >
          {language !== "zh-CN" ? "Contact" : "工作"}
        </Link>
      </li>
    </ul>
  );
}
