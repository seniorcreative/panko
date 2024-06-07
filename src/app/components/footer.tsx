"use client";

import React, { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";

export default function Footer({ fonts }: { fonts: any[] }): JSX.Element {
  const content = require("../data/content.json");

  const { language } = useContext(LanguageContext);

  // Non standard fonts are used in the footer for the initiative links
  const pac = fonts[0];
  const ral = fonts[1];

  const { contactLink, contactBtn } = content[language].home.sections.intro;

  return (
    <footer className="py-12 px-8 bg-black text-white">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <h3>
            <strong>{language === "zh-CN" ? "接触" : "Contact"}</strong>
          </h3>
          <ul className="list-none">
            <li>
              <a href={contactLink}>{contactBtn}</a>
            </li>
          </ul>
        </div>
        <div className="col-span-6 mt-4 text-right">
          <ul className="xs:mt-4 list-none">
            <li
              className={`${ral.className} text-sm flex align-middle justify-end`}
            >
              Socially Safe
              <span className="ms-2 material-symbols-outlined">wb_sunny</span>
            </li>
            <li
              className={`${pac.className} mt-2 text-sm flex align-middle justify-end`}
            >
              Rewild The Web
              <span className="ms-2 material-symbols-outlined">raven</span>
            </li>
            <li className="text-sm mt-4 flex align-middle justify-end">
              &copy;&nbsp;<strong>panko</strong>&nbsp;
              {new Date().getFullYear()}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
