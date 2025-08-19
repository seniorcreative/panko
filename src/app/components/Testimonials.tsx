"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "../contexts/languageContext";
import { aldrich } from "../fonts";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  initials: string;
  business: string;
  location: string;
  avatar: string | null;
}

export default function Testimonials() {
  const { language } = useContext(LanguageContext);
  const content = require("../data/content.json");

  const testimonials: Testimonial[] = content["en-US"].testimonials || [];

  // Create skeleton testimonials for the last 2 slots
  const skeletonTestimonials = [
    {
      id: 5,
      quote: "",
      name: "",
      initials: "",
      business: "",
      location: "",
      avatar: null,
    },
    {
      id: 6,
      quote: "",
      name: "",
      initials: "",
      business: "",
      location: "",
      avatar: null,
    },
  ];

  const allTestimonials = [...testimonials, ...skeletonTestimonials];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-8">
          <h2
            className={`${aldrich.className} text-3xl md:text-4xl font-bold text-slate-800 mt-4 mb-4`}
          >
            {language !== "zh-CN" ? "What My Clients Say" : "客户评价"}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {language !== "zh-CN"
              ? "Real feedback from businesses I've helped succeed online"
              : "来自我们帮助成功上线的企业的真实反馈"}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-md transition-all duration-300 ${
                  testimonial.quote === "" ? "animate-pulse" : ""
                }`}
              >
                {testimonial.quote ? (
                  <div className="flex flex-col flex-grow-1 h-full">
                    {/* Quote */}
                    <div className="mb-6 flex flex-1">
                      <p className="text-slate-700 text-md leading-relaxed italic">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      {/* Avatar or Initials */}
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        {testimonial.avatar ? (
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <span className="text-white font-semibold text-sm">
                            {testimonial.initials}
                          </span>
                        )}
                      </div>

                      {/* Name and Business */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-slate-800 text-sm truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-slate-600 text-xs">
                          {testimonial.business}
                        </p>
                        <p className="text-slate-500 text-xs">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Skeleton Content */
                  <>
                    <div className="mb-6">
                      <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-slate-200 rounded w-4/5 mb-2"></div>
                      <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-slate-200 rounded-full flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-slate-200 rounded w-3/4 mb-1"></div>
                        <div className="h-3 bg-slate-200 rounded w-1/2 mb-1"></div>
                        <div className="h-3 bg-slate-200 rounded w-2/3"></div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              {language !== "zh-CN" ? (
                <>
                  Ready to join our satisfied clients? Let's{" "}
                  <a
                    href="/#contact"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    discuss
                  </a>{" "}
                  your project.
                </>
              ) : (
                <>
                  准备加入我们满意的客户吗？让我们
                  <a
                    href="/#contact"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    讨论
                  </a>
                  您的项目。
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
