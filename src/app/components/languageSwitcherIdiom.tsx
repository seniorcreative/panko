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
    <button
      type="button"
      className={`text-gray-800 text-sm mx-1 ${
        active ? "bg-black text-white" : ""
      }`}
      onClick={() => changeMethod(language)}
    >
      <span className="material-symbols-outlined">{icon}</span>
    </button>
  );
}
