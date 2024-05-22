"use client";

import React, { useContext } from "react";
import { LanguageContext } from "../languageContext";

export default function Footer(): JSX.Element {
  const content = require("../data/content.json");

  const { language } = useContext(LanguageContext);

  const { contactLink, contactBtn } = content[language].home.sections.intro;

  return (
    <footer className="py-12 px-8 bg-black text-white">
      <div className="container">
        <div className="grid">
          <div className="row-span-3">
            <h3>
              <strong>{language === "zh-CN" ? "接触" : "Contact"}</strong>
            </h3>
            <ul className="list-none">
              <li>
                <a href={contactLink}>{contactBtn}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
