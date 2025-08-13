"use client";

import React, { useContext } from "react";
import { MessageSquare, FileText, Code, Rocket, CheckCircle } from "lucide-react";
import { LanguageContext } from "../contexts/languageContext";
import { aldrich } from "../fonts";

export default function ProcessSteps() {
  const { language } = useContext(LanguageContext);

  const steps = language !== "zh-CN" ? [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Discovery Call (FREE)",
      description: "We discuss your business goals, target audience, and technical requirements. I'll explain options in plain English and provide an honest assessment of what's possible within your timeline and budget.",
      duration: "30-60 minutes",
      deliverable: "Project proposal & timeline"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Planning & Strategy",
      description: "I create detailed wireframes, user flow diagrams, and technical specifications. You'll see exactly what we're building before any code is written, ensuring we're aligned on the vision.",
      duration: "3-5 days",
      deliverable: "Wireframes & project roadmap"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development",
      description: "Using AI-accelerated development tools combined with proven best practices, I build your solution with regular progress updates. You'll see working versions throughout the process.",
      duration: "1-8 weeks",
      deliverable: "Working prototype updates"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch & Testing",
      description: "Thorough testing across devices and browsers, performance optimization, SEO setup, and smooth deployment. I handle all technical aspects so you can focus on your business.",
      duration: "2-3 days",
      deliverable: "Live website/app"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Support & Growth",
      description: "Optional ongoing maintenance, security updates, performance monitoring, and feature additions. Many clients prefer the peace of mind of professional ongoing support.",
      duration: "Ongoing",
      deliverable: "Monthly reports & updates"
    }
  ] : [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "发现通话（免费)",
      description: "我们讨论您的业务目标、目标受众和技术要求。我会用简单的英语解释选项并诚实评估在您的时间线和预算内可能实现的目标。",
      duration: "30-60 分钟",
      deliverable: "项目提案和时间线"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "规划与策略",
      description: "我创建详细的线框图、用户流程图和技术规范。在编写任何代码之前，您将确切地看到我们正在构建什么。",
      duration: "3-5 天",
      deliverable: "线框图和项目路线图"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "开发",
      description: "使用 AI 加速开发工具结合经过验证的最佳实践，我构建您的解决方案并定期更新进度。",
      duration: "1-8 周",
      deliverable: "工作原型更新"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "启动和测试",
      description: "跨设备和浏览器的彻底测试、性能优化、SEO 设置和平稳部署。",
      duration: "2-3 天",
      deliverable: "实时网站/应用程序"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "支持与成长",
      description: "可选的持续维护、安全更新、性能监控和功能添加。",
      duration: "持续",
      deliverable: "月度报告和更新"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className={`${aldrich.className} text-3xl md:text-4xl font-bold text-slate-800 mb-4`}>
            {language !== "zh-CN" ? "How I Will Work With You" : "我如何与您合作"}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {language !== "zh-CN"
              ? "A transparent, step-by-step process that keeps you informed and ensures we build exactly what your business needs."
              : "透明的分步流程，让您随时了解情况，确保我们构建的正是您的企业所需的。"
            }
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200"></div>

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Mobile connection line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute top-20 left-8 w-0.5 h-16 bg-gradient-to-b from-blue-200 to-purple-200"></div>
                )}

                <div className="bg-white rounded-xl p-3 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 relative z-10 lg:min-h-[500px] flex flex-col items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
                      {step.icon}
                    </div>

                    <div className="mb-2">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        {language !== "zh-CN" ? "Step" : "步骤"} {index + 1}
                      </span>
                    </div>

                    <h3 className={`${aldrich.className} text-xl text-center font-bold text-slate-800 mb-3`}>
                      {step.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4 text-left">
                      {step.description}
                    </p>

                    <div className="border-t border-slate-200 pt-4 w-full">
                      <div className="flex justify-between text-xs text-slate-500">
                        <span className="font-medium">
                          {language !== "zh-CN" ? "Duration:" : "持续时间:"} {step.duration}
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-blue-600 font-medium">
                        {language !== "zh-CN" ? "You get:" : "您获得:"} {step.deliverable}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
            <h3 className={`${aldrich.className} text-2xl font-bold text-slate-800 mb-4`}>
              {language !== "zh-CN" ? "Why This Process Works" : "为什么这个流程有效"}
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">
                  {language !== "zh-CN" ? "No Surprises" : "没有意外"}
                </h4>
                <p className="text-slate-600 text-sm">
                  {language !== "zh-CN"
                    ? "You know exactly what to expect, when to expect it, and what it costs upfront."
                    : "您确切地知道会发生什么、何时发生以及前期成本。"
                  }
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">
                  {language !== "zh-CN" ? "Regular Updates" : "定期更新"}
                </h4>
                <p className="text-slate-600 text-sm">
                  {language !== "zh-CN"
                    ? "See progress as it happens with regular demos and updates, not just at the end."
                    : "通过定期演示和更新查看进度，而不仅仅是在最后。"
                  }
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">
                  {language !== "zh-CN" ? "Built for Growth" : "为增长而建"}
                </h4>
                <p className="text-slate-600 text-sm">
                  {language !== "zh-CN"
                    ? "Every solution is designed to scale with your business and adapt to future needs."
                    : "每个解决方案都旨在随着您的业务扩展并适应未来需求。"
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}