"use client";

import React, { useContext, type JSX } from "react";
import { LanguageContext } from "../contexts/languageContext";
import Link from "next/link";

export default function Footer({ fonts }: { fonts: any[] }): JSX.Element {
  const content = require("../data/content.json");

  const { language } = useContext(LanguageContext);

  // Non standard fonts are used in the footer for the initiative links
  const pac = fonts[0];
  const ral = fonts[1];

  const { contactBtn } = content[language].home.sections.intro;

  return (
    <footer className="fixed w-full bottom-0 py-2 px-4 backdrop-blur-sm bg-slate-500 bg-opacity-40 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex md:flex-row justify-between items-center gap-4">
          <div className="flex-1">
            <div className="flex gap-4 items-center">
              <Link
                href="/services"
                className="text-xs text-slate-800 hover:text-slate-900 transition-colors"
              >
                {language !== "zh-CN" ? "Services" : "副驾驶"}
              </Link>
              <Link
                href="/#work"
                className="text-xs text-slate-800 hover:text-slate-900 transition-colors"
              >
                {language !== "zh-CN" ? "Work" : "工作"}
              </Link>
              <Link
                href="/services/#contact"
                className="inline-flex items-center px-3 py-1 bg-gradient-to-r text-xs from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded text-white font-semibold transition-all"
              >
                {language !== "zh-CN" ? "Contact" : "工作"}
              </Link>
            </div>
          </div>
          <div className="flex-0">
            <a
              href="https://github.com/seniorcreative/panko"
              target="_blank"
              rel="noopener noreferrer"
              className=" inline text-sm text-right text-slate-300"
            >
              site by <strong className="font-bold text-white">panko</strong>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
