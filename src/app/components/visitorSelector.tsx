import React, { useContext } from "react";
import { VisitorContext } from "../contexts/visitorContext";
import { LanguageContext } from "../contexts/languageContext";

export default function VisitorSelector({ mono }: { mono?: boolean }) {
  const { visitorType, setVisitorType } = useContext(VisitorContext);
  const { language } = useContext(LanguageContext);
  const buttonStyle = "p-2 rounded-md me-2 border-2 border-dark";

  const color = mono ? "slate" : "green";

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
              ? `border-${color}-800 bg-${color}-700 text-white underline`
              : `text-${color}-700 border-${color}-500`
          }`}
        >
          Creative
        </button>
        <button
          onClick={() => setVisitorType("techie")}
          className={`${buttonStyle}  ${
            visitorType === "techie"
              ? `border-${color}-800 bg-${color}-700 text-white`
              : `text-${color}-700 border-${color}-500`
          }`}
        >
          Techie
        </button>
      </div>
    </>
  );
}
