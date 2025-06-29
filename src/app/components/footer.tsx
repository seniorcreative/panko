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
                href="/10x"
                className="text-xs text-slate-100 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/folio/all"
                className="text-xs text-slate-100 hover:text-white transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/#about"
                className="text-xs text-slate-100 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/10x/#contact"
                className="inline-flex items-center px-3 py-1 bg-gradient-to-r text-xs from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded text-white font-semibold transition-all"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm text-right text-slate-300">
              build with <strong className="text-white">panko</strong> 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
