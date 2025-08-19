"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { LanguageContext } from "./contexts/languageContext";
import { aldrich } from "./fonts";

export default function NotFound() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200">
          {/* 404 Number */}
          <div className="mb-6">
            <h1
              className={`${aldrich.className} text-6xl md:text-8xl font-bold text-slate-800 mb-4`}
            >
              404
            </h1>
          </div>

          {/* Main Message */}
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">
            {language !== "zh-CN" ? "Page Not Found" : "页面未找到"}
          </h2>

          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            {language !== "zh-CN"
              ? "Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL."
              : "抱歉，您要查找的页面不存在。它可能已被移动、删除，或者您输入了错误的网址。"}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              {language !== "zh-CN" ? "Go Home" : "返回首页"}
            </Link>

            <Link
              href="/folio"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              {language !== "zh-CN" ? "View Portfolio" : "查看作品集"}
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              {language !== "zh-CN"
                ? "Need help? Get in touch and I'll help you find what you're looking for."
                : "需要帮助？联系我，我将帮助您找到您要查找的内容。"}
            </p>
            <Link
              href="/#contact"
              className="text-blue-600 hover:text-blue-800 underline text-sm font-medium mt-2 inline-block"
            >
              {language !== "zh-CN" ? "Contact Support" : "联系支持"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
