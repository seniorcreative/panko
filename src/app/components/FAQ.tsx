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

  const faqData: FAQItem[] =
    language !== "zh-CN"
      ? [
          {
            question: "How much does web development cost in Geelong?",
            answer:
              "Costs vary on complexity but generally costing is time based. A landing page with a sign up form doesn't take long, whereas set up of an ecommerce store and theming, product import and payment integration can take weeks. I will have a free consult with you and then provide a detailed costing so you know before we start.",
          },
          {
            question: "How long does it take to build a business website?",
            answer:
              "Simple sites can be done in 1-2 weeks, while complex e-commerce or custom applications may take several weeks. I'll give you a clear timeline following our initial consultation, and once I have performed enough of a requirements analysis to know that we are building the right thing. I will always recommend getting to a minimum viable product first and not going for completeness from the outset.",
          },
          {
            question:
              "What's the difference between Squarespace and custom development?",
            answer:
              "Squarespace is great for small businesses and portfolios - it's cost-effective and easy to use and has some great integrations (third party ready made tools that extend it's capabilities). Custom development gives you complete control and unique functionality but can cost more. I'll recommend the best approach based on your business goals and budget.",
          },
          {
            question: "Do you fix broken websites or just build new ones?",
            answer:
              "I absolutely fix broken websites. Common issues I solve include: sites loading slowly, security vulnerabilities, broken contact forms, mobile display problems, and SEO issues, such as SEO needing to be adapted to visits from AI agents. Fix durations are difficult to estimate and sometime diagnose, and vary depending on complexity.",
          },
          {
            question: "Can you help with mobile apps for small businesses?",
            answer:
              "Yes, I love building React Native apps as they can be built once and then work on both iPhone and Android. Perfect for businesses wanting to increase customer engagement like loyalty programs, utilise phone hardware that is not possible from a website, or streamline operations out in the field. App projects may typically take 8-16 weeks depending on features.",
          },
          {
            question:
              "What makes Panko Digital different from other web developers in Geelong?",
            answer:
              "I combine a unique history as a creative technologist with 20+ years of software development both in Australia and The UK, with cutting-edge AI tools to deliver faster results. I have lots of experience liaising with with business owners and project stakeholders (bypassing account managers), speak plain English and minimise or clarify any technical language nuances. I focus on solutions that aim to increase your revenue where applicable, combining marketing techniques and User Experience Design skills.",
          },
          {
            question:
              "Do you provide ongoing support after my website launches?",
            answer:
              "Yes, I offer maintenance packages including security updates, content changes, performance monitoring, and technical support. I offer mentoring, software training and coaching about the innovation framework which can be so helpful removing blockers and barriers to launch anything. Many clients prefer peace of mind knowing their website is professionally maintained.",
          },
          {
            question:
              "Can you help integrate my website with accounting software or any CRMs?",
            answer:
              "Absolutely. I have industry experience of integrating websites with things like Xero, MYOB, Quickbooks, HubSpot, Salesforce, and other business systems. This eliminates double data entry and streamlines your workflow. Integration projects vary based on requirements such as frequency, data structure complexity and security considerations.",
          },
        ]
      : [
          {
            question:
              "What is your typical process for web development projects?",
            answer:
              "I follow a structured process that includes discovery, design, development, testing, and launch. I prioritize clear communication and collaboration with clients throughout the project to ensure their vision is realized.",
          },
          {
            question:
              "How do you ensure the websites you build are user-friendly?",
            answer:
              "I employ user-centered design principles, conduct usability testing, and iterate on feedback to create websites that are intuitive and easy to navigate.",
          },
          {
            question: "What kind of businesses do you typically work with?",
            answer:
              "I work with a diverse range of businesses, from startups to established enterprises, across various industries. My focus is on helping businesses (first and foremost here in Geelong) that are looking to enhance their online presence and drive results.",
          },
        ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-300 to-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2
            className={`${aldrich.className} text-3xl md:text-4xl font-bold text-slate-800 mb-4`}
          >
            {language !== "zh-CN" ? "Frequently Asked Questions" : "常见问题"}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {language !== "zh-CN"
              ? "Get answers to common questions about web development, costs, and how I can help your business succeed online."
              : "获取有关网站开发、成本以及我如何帮助您的企业在线成功的常见问题的答案。"}
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
                  <div
                    itemProp="text"
                    className="text-slate-600 leading-relaxed"
                  >
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
              : "对您的项目有具体问题吗？"}
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
