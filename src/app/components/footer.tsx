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
              <li className="text-sm flex align-middle">
                Social Media Free
                <span className="ms-2 material-symbols-outlined">
                  check_circle
                </span>
              </li>
              <li className="text-sm flex align-middle">
                Rewild The Web
                <span className="ms-2 material-symbols-outlined">
                  check_circle
                </span>
              </li>
              <li className="text-sm">
                &copy;&nbsp;<strong>panko</strong> {new Date().getFullYear()}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
