"use client";

import React from "react";

type languageButtonType = {
  language: string;
  icon: string;
  currentLanguage: string | undefined;
  changeMethod: (language: string) => {};
};

export default function LanguageSwitcherIdiom({
  language,
  icon,
  currentLanguage,
  changeMethod,
}: languageButtonType) {
  return (
    <a
      className={`text-gray-800 text-sm mx-1 ${
        currentLanguage === language ? "bg-black text-white" : ""
      }`}
      href="#"
      onClick={() => {
        changeMethod(language);
      }}
    >
      <span className="material-symbols-outlined">{icon}</span>
    </a>
  );
}
