"use client";

import React, { useState, useEffect } from "react";
import { getCurrentLocale } from "../actions";

export default function Footer(): JSX.Element {
  const [currentLocale, setCurrentLocale] = useState("en-US");

  // Get the locale for translation.
  useEffect(() => {
    const getLocale = async () => {
      const locale = await getCurrentLocale();
      setCurrentLocale(locale);
    };
    getLocale();
  }, []);

  const content = require("../data/content.json");

  const { contactLink, contactBtn } =
    content[currentLocale].home.sections.intro;

  return (
    <footer className="py-12 px-8 bg-black text-white">
      <div className="container">
        <div className="grid">
          <div className="row-span-3">
            <h3>
              <strong>{currentLocale === "zh-CN" ? "接触" : "Contact"}</strong>
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
