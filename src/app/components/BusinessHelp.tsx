"use client";

import React, { useContext, type JSX } from "react";
import { LanguageContext } from "../contexts/languageContext";

export default function BusinessHelp(): JSX.Element {
  const { language } = useContext(LanguageContext);

  const helpItems = [
    {
      title: language !== "zh-CN" ? "Improve Your Digital Fitness" : "提升您的数字健康",
      description: language !== "zh-CN" 
        ? "I'll help you build a business service website or app, fix existing issues."
        : "我会帮助您构建业务服务网站或应用程序，修复现有问题。"
    },
    {
      title: language !== "zh-CN" ? "Sell More Online" : "在线销售更多",
      description: language !== "zh-CN"
        ? "Set up an online store that makes it simple for customers to buy from you, with secure payments and easy checkout."
        : "建立在线商店，让客户轻松购买，安全支付，简单结账。"
    },
    {
      title: language !== "zh-CN" ? "Save Time with Apps" : "用应用程序节省时间",
      description: language !== "zh-CN"
        ? "Custom apps and tools that handle the technical stuff automatically, so you can focus on growing your business."
        : "定制应用程序和工具自动处理技术事务，让您专注于发展业务。"
    }
  ];

  return (
    <section className="bg-black pt-16 pb-0 px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-4">
            {language !== "zh-CN" ? "How I Help Your Business" : "我如何帮助您的企业"}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {language !== "zh-CN" 
              ? "I've worked with businesses from startups to major brands. Here's how I can help yours succeed online."
              : "我与从初创企业到大品牌的企业合作过。以下是我如何帮助您的企业在线成功。"}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {helpItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-800"
            >
              <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-lg p-6 mt-12 text-center border border-gray-800">
          <p className="text-gray-300 mb-4">
            {language !== "zh-CN" 
              ? "I'll make sure your digital services work on all devices and are secure, and your customers can find them easily. Free up your time to focus on everything else."
              : "我会确保您的数字服务在所有设备上都能运行且安全，客户能够轻松找到。让您腾出时间专注于其他一切。"}
          </p>
        </div>

        <div className="text-center mt-12 pb-16">
          <p className="text-gray-300 mb-6">
            {language !== "zh-CN" 
              ? "Ready to get started? Let's talk about your project."
              : "准备开始了吗？让我们谈谈您的项目。"}
          </p>
          <a 
            href="/services/#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 rounded-lg text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            {language !== "zh-CN" ? "Let's Build Something" : "让我们建设一些东西"}
          </a>
        </div>
      </div>
    </section>
  );
}