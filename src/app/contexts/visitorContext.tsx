"use client";

import React, { createContext, useState } from "react";

export const VisitorContext = createContext({
  visitorType: "creative",
  setVisitorType: (visitorType: string) => {},
});

export default function VisitorContextProvider({ children }: any) {
  const [visitorType, setVisitorType] = useState("creative");
  return (
    <VisitorContext.Provider value={{ visitorType, setVisitorType }}>
      {children}
    </VisitorContext.Provider>
  );
}
