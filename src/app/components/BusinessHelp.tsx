"use client";

import React, { useContext, type JSX } from "react";
import Link from "next/link";
import { LanguageContext } from "../contexts/languageContext";
import { aldrich } from "../fonts";

export default function BusinessHelp(): JSX.Element {
  const { language } = useContext(LanguageContext);

  const helpItems = [
    {
      title:
        language !== "zh-CN"
          ? "Improve Your Digital Fitness"
          : "提升您的数字健康",
      description:
        language !== "zh-CN"
          ? "I'll help you build a business service website or app, fix existing issues."
          : "我会帮助您构建业务服务网站或应用程序，修复现有问题。",
    },
    {
      title: language !== "zh-CN" ? "Sell More Online" : "在线销售更多",
      description:
        language !== "zh-CN"
          ? "Set up an online store that makes it simple for customers to buy from you, with secure payments and easy checkout."
          : "建立在线商店，让客户轻松购买，安全支付，简单结账。",
    },
    {
      title:
        language !== "zh-CN" ? "Set up your web platform" : "建立您的网络平台",
      description:
        language !== "zh-CN"
          ? "Let me register and sort out your wix or squarespace or other no-code / lo-code site so you can just do the easy bits"
          : "让我注册并整理您的 Wix 或 Squarespace 或其他无代码/低代码网站，这样您就可以只做简单的部分",
    },
    {
      title:
        language !== "zh-CN" ? "Save Time with Apps" : "用应用程序节省时间",
      description:
        language !== "zh-CN"
          ? "Custom apps and tools that handle the technical stuff automatically, so you can focus on growing your business."
          : "定制应用程序和工具自动处理技术事务，让您专注于发展业务。",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 pt-20 pb-20 px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2
            className={`${aldrich.className} text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-4`}
          >
            {language !== "zh-CN"
              ? "How I Will Help Your Business"
              : "我如何帮助您的企业"}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {language !== "zh-CN"
              ? "I've worked with businesses from startups to major brands. Here's how I can help yours succeed online."
              : "我与从初创企业到大品牌的企业合作过。以下是我如何帮助您的企业在线成功。"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600 transform hover:scale-105"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
              </div>
              <h3
                className={`${aldrich.className} text-xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-4`}
              >
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 mb-8">
          <div className="max-w-4xl mx-auto">
            <h3
              className={`${aldrich.className} text-2xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent`}
            >
              {language !== "zh-CN" ? "My Promise to You" : "我对您的承诺"}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {(language !== "zh-CN"
                ? [
                    "Make sure your digital services work on all devices and are secure",
                    "Ensure your customers can find you easily",
                    "Free up your time to focus on everything else",
                  ]
                : [
                    "确保您的数字服务在所有设备上都能运行且安全",
                    "确保客户能够轻松找到",
                    "让您腾出时间专注于其他一切",
                  ]
              ).map((promise, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {promise}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {language !== "zh-CN"
              ? "Ready to transform your business with technology that actually works? Let's make it happen."
              : "准备用真正有效的技术来改变您的业务吗？让我们实现它。"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 rounded-lg text-white font-bold transition-all transform hover:scale-105 shadow-xl text-lg"
            >
              {language !== "zh-CN" ? "Start Your Project" : "开始您的项目"}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            {/* <Link 
              href="/folio"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-400 text-gray-300 hover:border-white hover:text-white rounded-lg font-semibold transition-all"
            >
              {language !== "zh-CN" ? "See Case Studies" : "查看案例研究"}
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
