"use client";

import React, { createContext, useState } from "react";

export const LanguageContext = createContext({
  language: "en-US",
  setLanguage: (language: string) => {},
});

export default function LanguageContextProvider({ children }: any) {
  const [language, setLanguage] = useState("en-US");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
