"use client";

import React from "react";
import { cookies } from "next/headers";
import Link from "next/link";

import { setDefaultLocaleCookie, changeLanguageCookieValue } from "../actions";

const locales = ["en-US", "zh-CN", "fr", "es"];

export default function LanguageSwitcher() {
  //   setDefaultLocaleCookie();

  const currentLocaleFromCookie = "en-US"; // cookies().get("NEXT_LOCALE")?.value;

  return (
    <>
      <a
        className={`text-gray-800 text-sm ${
          currentLocaleFromCookie === "en-US" ? "underline" : ""
        }`}
        href="#"
        onClick={() => {
          changeLanguageCookieValue("en-US");
        }}
      >
        <span className="material-symbols-outlined">language_us</span>
      </a>
      <a
        className={`text-gray-800 text-sm ${
          currentLocaleFromCookie === "en-US" ? "underline" : ""
        }`}
        href="#"
        onClick={() => {
          changeLanguageCookieValue("zh-CN");
        }}
      >
        <span className="material-symbols-outlined">
          language_chinese_quick
        </span>
      </a>
    </>
  );
}
