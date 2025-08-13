"use client";

import React, { useState, useContext } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { LanguageContext } from "../contexts/languageContext";
import { aldrich } from "../fonts";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const { language } = useContext(LanguageContext);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = language !== "zh-CN" ? [
    {
      question: "How much does web development cost in Geelong?",
      answer: "Website costs vary based on complexity. A simple single page business website package can start from $1000 if you provide design, while custom e-commerce solutions range upward from $5,000. I provide detailed quotes after understanding your specific needs and always discuss budget upfront to avoid surprises."
    },
    {
      question: "How long does it take to build a business website?",
      answer: "Most business websites take 2-4 weeks from start to launch. Simple sites can be done in 1-2 weeks, while complex e-commerce or custom applications may take 6-12 weeks. I'll give you a clear timeline during our initial consultation."
    },
    {
      question: "What's the difference between Squarespace and custom development?",
      answer: "Squarespace is great for small businesses and portfolios - it's cost-effective and easy to use. Custom development gives you complete control and unique functionality but costs more. I'll recommend the best approach based on your business goals and budget."
    },
    {
      question: "Do you fix broken websites or just build new ones?",
      answer: "I absolutely fix broken websites! Common issues I solve include: site loading slowly, security vulnerabilities, broken contact forms, mobile display problems, and SEO issues. Most fixes take 1-3 days depending on complexity."
    },
    {
      question: "Can you help with mobile apps for small businesses?",
      answer: "Yes, I build React Native apps that work on both iPhone and Android. Perfect for businesses wanting to increase customer engagement, loyalty programs, or streamline operations. App projects typically take 8-16 weeks depending on features."
    },
    {
      question: "What makes you different from other web developers in Melbourne?",
      answer: "I combine 20+ years of experience with cutting-edge AI tools to deliver faster results. I work directly with business owners (no account managers), speak plain English instead of tech jargon, and focus on solutions that actually increase your revenue."
    },
    {
      question: "Do you provide ongoing support after my website launches?",
      answer: "Yes, I offer maintenance packages including security updates, content changes, performance monitoring, and technical support. Many clients prefer peace of mind knowing their website is professionally maintained."
    },
    {
      question: "Can you help integrate my website with accounting software or CRM?",
      answer: "Absolutely. I have industry experience of integrating websites with Xero, MYOB, Quickbooks, HubSpot, Salesforce, and other business systems. This eliminates double data entry and streamlines your workflow. Integration projects typically take 1-2 weeks."
    }
  ] : [
    {
      question: "在吉朗开发网站需要多少钱？",
      answer: "网站成本因复杂性而异。简单的商业网站起价 1000 澳元，定制电子商务解决方案价格在 5,000+ 澳元之间。我会在了解您的具体需求后提供详细报价。"
    },
    {
      question: "建立商业网站需要多长时间？",
      answer: "大多数商业网站从开始到上线需要 2-4 周时间。简单网站可以在 1-2 周内完成，而复杂的电子商务或定制应用程序可能需要 6-12 周。"
    },
    {
      question: "Squarespace 和定制开发有什么区别？",
      answer: "Squarespace 非常适合内容丰富的网站和博客 - 成本效益高且易于更新。定制开发为您提供完全控制和独特功能，但成本更高。"
    },
    {
      question: "您修复损坏的网站还是只构建新网站？",
      answer: "我绝对修复损坏的网站！我解决的常见问题包括：网站加载缓慢、安全漏洞、联系表单损坏、移动显示问题和SEO问题。"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className={`${aldrich.className} text-3xl md:text-4xl font-bold text-slate-800 mb-4`}>
            {language !== "zh-CN" ? "Frequently Asked Questions" : "常见问题"}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {language !== "zh-CN"
              ? "Get answers to common questions about web development, costs, and how I can help your business succeed online."
              : "获取有关网站开发、成本以及我如何帮助您的企业在线成功的常见问题的答案。"
            }
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              itemScope
              itemType="https://schema.org/Question"
              className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 rounded-lg transition-colors"
              >
                <h3
                  itemProp="name"
                  className={`${aldrich.className} text-lg font-semibold text-slate-800 pr-4`}
                >
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                  className="px-6 pb-4"
                >
                  <div itemProp="text" className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            {language !== "zh-CN"
              ? "Have a specific question about your project?"
              : "对您的项目有具体问题吗？"
            }
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all transform hover:scale-105"
          >
            {language !== "zh-CN" ? "Book a Free Consultation" : "预约免费咨询"}
          </a>
        </div>
      </div>
    </section>
  );
}