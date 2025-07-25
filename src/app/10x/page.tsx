"use client";

import React, { useState } from "react";
import Stellae from "../components/stellae";
import { Pacifico, Raleway } from "next/font/google";
import {
  CheckCircle,
  Code,
  Database,
  Server,
  Globe,
  ArrowRight,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    quote: "Working with panko was like having a technical co-founder. They saw problems I didn't even know existed and saved us months of headaches."
  },
  {
    name: "Marcus Rivera", 
    quote: "Not just fast coding - they completely transformed our website. What used to take forever now loads instantly."
  },
  {
    name: "Emily Watson",
    quote: "Perfect balance of speed and quality. They helped us launch on time without any technical issues."
  },
  {
    name: "David Park",
    quote: "Their problem-solving skills are incredible. What would have taken our team days, they solved in hours."
  }
];

const benefits = [
  {
    title: "50+ App Migration Pipeline",
    description:
      "Architected and delivered a pipeline to migrate 50+ legacy finance apps from Cordova to React Native at Iress, delivered on-time for 1M+ users.",
  },
  {
    title: "40% Faster Pipeline Builds",
    description:
      "Key collaborator in front-end council consultant work on Iress' internal design system, achieving 40% quicker pipeline builds for 200+ engineers company-wide.",
  },
  {
    title: "20K+ Users in 3 Months",
    description:
      "Prototyped and engineered a new 'Request for Quote' business module in VueJS and C# at Buildxact, reaching 20K+ users within first 3 months and becoming integral to the SaaS.",
  },
  {
    title: "Government-Piloted Innovation",
    description:
      "Designed and engineered a VueJS app with AWS Cognito passwordless login for injured workers at WorkSafe Victoria, piloted by the Victorian Government.",
  },
];

const timeline = [
  {
    year: "2001-06",
    title: "Interactive Foundation",
    description:
      "Cut my teeth on DVD menus, game development, and interactive TV at Digital Pictures Melbourne - learning that user experience drives everything.",
  },
  {
    year: "2006-11",
    title: "Startup Catalyst",
    description:
      "Freelanced launching multiple Melbourne startups with custom e-commerce systems. First taste of turning code into business results.",
  },
  {
    year: "2011-14",
    title: "Technical Leadership",
    description:
      "Digital Technical Lead at various Melbourne Agencies, building e-commerce and UI platforms that drove donations and property sales uplifts across clients.",
  },
  {
    year: "2015",
    title: "Innovation & Patents",
    description:
      "Lead Software Engineer in HealthTech - architected HealthTech systems, secured patents, and pitched to government and investors.",
  },
  {
    year: "2016-21",
    title: "Scale Mastery",
    description:
      "Led front-end teams across finance, automotive, and construction sectors. Built systems for international expansion and million-dollar sales uplifts.",
  },
  {
    year: "2021-24",
    title: "Enterprise Excellence",
    description:
      "Senior Engineer at Iress facilitating 1M+ user deployments. Mastered security, component libraries, and large-scale mobile migrations.",
  },
  {
    year: "2025",
    title: "Innovation Advisor",
    description:
      "Prototyping with AI as product designer for Kmart Innovation. App development, data engineering and advising on software best practices. The complete technical co-pilot.",
  },
];

const pac = Pacifico({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const ral = Raleway({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function Page() {
  interface FormSubmitEvent extends React.FormEvent<HTMLFormElement> {
    target: HTMLFormElement;
  }

  const [formSuccess, setFormSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'budget':
        return value.trim().length < 2 ? 'Budget must be at least 2 digits' : '';
      // case 'timeline':
      //   return ''; // Optional field
      // case 'company':
      //   return ''; // Optional field
      case 'message':
        return value.trim().length < 50 ? 'Message must be at least 50 characters' : '';
      default:
        return '';
    }
  };

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const requiredFields = ['name', 'email', 'message'];
    
    requiredFields.forEach(field => {
      const value = formData.get(field) as string || '';
      const error = validateField(field, value);
      if (error) {
        newErrors[field] = error;
      }
    });
    
    return newErrors;
  };

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const error = validateField(name, value);
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleFormSubmit = async (event: FormSubmitEvent): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    const formErrors = validateForm(formData);
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length > 0) {
      return;
    }
    
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    });
    setFormSuccess(true);
  };

  return (
    <section
      className={`${ral.className} min-h-screen flex items-center bg-black`}
    >
      <div className="mx-auto overflow-hidden">
        <Stellae invert />

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mt-8 mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Launch quickly with an AI Developer
          </h1>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              An experienced software developer, using AI greatly enhances my abilities, bringing more than just coding speed. I offer
              architectural insight, best practice advice, debugging expertise and the experience to anticipate problems before they become costly.
              If you&rsquo;re trying to launch something quickly, I'll be your technical co-pilot. I can help you get it off the ground.
            </p>
          </div>
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center gap-2"
          >
            Let&rsquo;s Build Something <ArrowRight size={20} />
          </a>
        </section>

        {/* Career Timeline */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My evolution as a website and app pro
          </h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs text-center px-2">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-600 mt-4"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          id="contact"
          className="container mx-auto px-6 py-20 text-left"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Are you ready? 
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&rsquo;s discuss how I can help you navigate technical
              decisions and launch your product with confidence.
            </p>

            {formSuccess && (
              <div className="bg-green-500/20 text-green-500 p-4 rounded-lg mb-6">
                <CheckCircle className="inline mr-2" size={20} />
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {!formSuccess && (
              <form
                name="contact"
                // method="POST"
                // data-netlify="true"
                onSubmit={handleFormSubmit}
                className="max-w-2xl mx-auto text-left"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-slate-300 font-medium mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      onChange={handleFieldChange}
                      className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.name && touched.name
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-slate-600 focus:border-blue-500 focus:ring-blue-500/20'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && touched.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-slate-300 font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      onChange={handleFieldChange}
                      className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.email && touched.email
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-slate-600 focus:border-blue-500 focus:ring-blue-500/20'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && touched.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-1 gap-6 mb-6">
                  <div>
                  <label
                    htmlFor="project"
                    className="block text-slate-300 font-medium mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    onChange={handleFieldChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  >
                    <option value="">Select project type</option>
                    <option value="new-app">New App Development</option>
                    <option value="migration">Customer Capture Website</option>
                    <option value="optimization">
                    My Website Is Broken Please Help
                    </option>
                    <option value="architecture">
                    E-Commerce Assitance
                    </option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="other">Other</option>
                  </select>
                  </div>
                  {/* <div>
                  <label
                    htmlFor="budget"
                    className="block text-slate-300 font-medium mb-2"
                  >
                    Budget (USD) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                    <input
                    type="number"
                    id="budget"
                    name="budget"
                    required
                    onBlur={handleFieldChange}
                    min="0"
                    step="any"
                    inputMode="decimal"
                    pattern="^\d+(\.\d{1,2})?$"
                    onChange={handleFieldChange}
                    className={`w-full pl-8 pr-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.budget && touched.budget
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-slate-600 focus:border-blue-500 focus:ring-blue-500/20'
                    }`}
                    placeholder="Enter your approx budget"
                    />
                  </div>
                  {errors.budget && touched.budget && (
                    <p className="mt-1 text-sm text-red-400">{errors.budget}</p>
                  )}
                  </div> */}
                </div>

                {/* <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-slate-300 font-medium mb-2"
                    >
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      onChange={handleFieldChange}
                      className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all ${
                        errors.timeline && touched.timeline
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-slate-600 focus:border-blue-500 focus:ring-blue-500/20'
                      }`}
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (Rush project)</option>
                      <option value="1-2months">1-2 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6plus-months">6+ months</option>
                      <option value="planning">Just planning</option>
                    </select>
                    {errors.timeline && touched.timeline && (
                      <p className="mt-1 text-sm text-red-400">{errors.timeline}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-slate-300 font-medium mb-2"
                    >
                      Company & Role
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      onChange={handleFieldChange}
                      className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.company && touched.company
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-slate-600 focus:border-blue-500 focus:ring-blue-500/20'
                      }`}
                      placeholder="Company Name, Your Role"
                    />
                    {errors.company && touched.company && (
                      <p className="mt-1 text-sm text-red-400">{errors.company}</p>
                    )}
                  </div>
                </div> */}

                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block text-slate-300 font-medium mb-2"
                  >
                   Description *
                  </label>
                    <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    minLength={50}
                    onChange={handleFieldChange}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-vertical ${
                      errors.message && touched.message
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-slate-600 focus:border-blue-500 focus:ring-blue-500/20'
                    }`}
                    placeholder={`Please describe:\n• What specific technical problem are you trying to solve?\n• What is the current state of your project?`}
                    />
                  {errors.message && touched.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    Send Message <ArrowRight size={20} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}
