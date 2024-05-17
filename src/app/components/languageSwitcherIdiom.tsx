"use client";

import React from "react";

type languageButtonType = {
  language: string;
  icon: string;
  active: boolean;
  changeMethod: (lang: string) => void;
};

export default function LanguageSwitcherIdiom({
  language,
  icon,
  active,
  changeMethod,
}: languageButtonType) {
  return (
    <a
      role="button"
      className={`inline-flex items-center text-gray-800 text-xs mx-1 ${
        active ? "bg-black text-white" : ""
      }`}
      onClick={() => changeMethod(language)}
    >
      <span className="material-symbols-outlined">{icon}</span>
    </a>
  );
}
