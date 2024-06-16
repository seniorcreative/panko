import React, { useContext, useEffect, useState } from "react";
import { VisitorContext } from "../contexts/visitorContext";
import { LanguageContext } from "../contexts/languageContext";

export default function VisitorSelector({ mono }: { mono?: boolean }) {
  const { visitorType, setVisitorType } = useContext(VisitorContext);
  const { language } = useContext(LanguageContext);
  const buttonStyle = "p-2 rounded-md me-2 border-2 border-dark";

  const color = mono ? "slate" : "green";

  const [offStyle, setOffStyle] = useState("");
  const [onStyle, setOnStyle] = useState("");

  useEffect(() => {
    setOffStyle(`border-${color}-800 bg-${color}-400 text-white underline`);
    setOnStyle(`text-${color}-700 border-${color}-500`);
  }, [color]);

  return (
    <div className="flex my-4 items-center">
      <h3 className="font-bold me-4">
        {language === "zh-CN" ? "你是谁" : "Who are you"}?
      </h3>
      <button
        onClick={() => setVisitorType("creative")}
        className={`${buttonStyle}  ${
          visitorType === "creative" ? offStyle : onStyle
        }`}
      >
        {language !== "zh-CN" ? "Creative" : "创意"}
      </button>
      <button
        onClick={() => setVisitorType("techie")}
        className={`${buttonStyle}  ${
          visitorType === "techie" ? offStyle : onStyle
        }`}
      >
        {language !== "zh-CN" ? "Techie" : "技术人员"}
      </button>
    </div>
  );
}
