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
    <footer className="py-12 px-8 bg-black text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex md:flex-row justify-between items-center gap-8">
          <div className="flex-1">
            <div>
              <Link
                href="/#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                {contactBtn}
              </Link>
            </div>
          </div>
          <div className="flex-1 text-center md:text-right">
            <p className="text-sm text-slate-300">
              <strong className="text-white">panko</strong> is your technical dev partner
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
