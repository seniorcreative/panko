import React, { useContext } from "react";
import { VisitorContext } from "../contexts/visitorContext";
import { LanguageContext } from "../contexts/languageContext";

export default function VisitorSelector() {
  const { visitorType, setVisitorType } = useContext(VisitorContext);
  const { language } = useContext(LanguageContext);
  const buttonStyle = "p-2 rounded-md me-2 border-2 border-dark";

  return (
    <>
      <h3 className="font-bold">
        {language === "zh-CN" ? "你是谁" : "Who are you"}?
      </h3>
      <div className="flex my-4">
        <button
          onClick={() => setVisitorType("creative")}
          className={`${buttonStyle}  ${
            visitorType === "creative"
              ? "border-green-800 bg-green-700 text-white"
              : " text-green-700 border-green-500"
          }`}
        >
          Creative
        </button>
        <button
          onClick={() => setVisitorType("techie")}
          className={`${buttonStyle}  ${
            visitorType === "techie"
              ? "border-green-800 bg-green-700 text-white"
              : " text-green-700 border-green-500"
          }`}
        >
          Techie
        </button>
      </div>
    </>
  );
}
