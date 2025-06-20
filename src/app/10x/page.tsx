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

const testimonials = [{ name: "TBC", quote: "TBC" }];
//   {
//     name: "Sarah Chen",
//     quote: "Working with them was like having a technical co-founder. They saw problems I didn't even know existed and saved us months of technical debt."
//   },
//   {
//     name: "Marcus Rivera",
//     quote: "Not just fast coding - they completely transformed our architecture. Our deployment time went from hours to minutes."
//   },
//   {
//     name: "Emily Watson",
//     quote: "The perfect balance of speed and quality. They helped us launch on time without cutting corners on best practices."
//   },
//   {
//     name: "David Park",
//     quote: "Their debugging skills are unreal. What would have taken our team days, they solved in hours."
//   }
// ];

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

  const handleFormSubmit = async (event: FormSubmitEvent): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    });
    // Success and error handling ...
    setFormSuccess(true);
  };

  return (
    <section
      className={`${ral.className} min-h-screen flex items-center bg-black`}
    >
      <div className="mx-auto overflow-hidden">
        <Stellae invert />

        {/* Header */}
        {/* <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            panko.digital
          </div>
          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </nav>
      </header> */}

        {/*User who might want panko*/}
        <section className="container mx-auto px-6 py-20 text-left">
          <h2 className="w-full md:w-3/4 text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto bg-clip-text text-transparent">
            Hi, I&rsquo;m Panko.
          </h2>
            <div className="min-h-screen flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-xl text-slate-300 mb-6">
              Got a prototype that works... until it doesn&rsquo;t? 
              <br />
              Spending more time debugging than building?
              </p>
              <p className="text-xl text-slate-300 mb-8">
              You don&rsquo;t have to struggle alone.
              <br />
              <span className="text-blue-300 font-medium">
                I&rsquo;m a human. Let&rsquo;s build something great together.
              </span>
              </p>
            </div>
            </div>
          <p className="w-full md:w-3/4 text-md text-slate-300 mx-auto mb-2 px-2">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 mb-4 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              Get in touch <ArrowRight size={20} />
            </a>
          </p>
        </section>

        <section>
          <p className="text-white text-xl text-center">Take that leap...</p>
        </section>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mt-8 mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Develop with a technical co-pilot
          </h1>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              An experienced software developer, using AI greatly enhances my abilities, bringing more than just coding speed. I offer
              architectural insight, best practice advice, debugging expertise,
              and the ability to anticipate problems before they become costly.
              If you&rsquo;re trying to launch something quickly, I can work
               with you, be your co-author and navigate technical decisions.
              <span className="text-blue-300 font-medium">
                <br />
                We&rsquo;ll code together so you learn while we build.
              </span>
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
            The Journey to 10x
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

        {/* Development Pillars - Full Width Row */}
        <section className="w-full px-6 py-20">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Four Pillars of Development
          </h2>
          <div className="w-full">
            {/* Four equal columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Data Layer */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all group min-h-[220px] flex flex-col justify-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
                  <Database className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-white">
                  Data Layer
                </h3>
                <p className="text-slate-300 text-center min-h-[80px]">
                  Database design, optimization, and data architecture that
                  scales with your business needs.
                </p>
              </div>

              {/* APIs */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all group min-h-[220px] flex flex-col justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-white">
                  APIs
                </h3>
                <p className="text-slate-300 text-center  min-h-[80px]">
                  RESTful and GraphQL APIs built for performance, security, and
                  developer experience.
                </p>
              </div>

              {/* Server Side */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all group min-h-[220px] flex flex-col justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
                  <Server className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-white">
                  Server Side
                </h3>
                <p className="text-slate-300 text-center min-h-[80px]">
                  Robust backend systems with proper error handling, monitoring,
                  and scalability patterns.
                </p>
              </div>

              {/* Front-end */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-pink-500/50 transition-all group min-h-[220px] flex flex-col justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
                  <Globe className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-white">
                  Front-end
                </h3>
                <p className="text-slate-300 text-center  min-h-[80px]">
                  UIs with modern frameworks, responsive design, and
                  performance-first principles.
                </p>
              </div>
            </div>

            {/* Bottom connecting line showing interconnectedness */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center text-slate-400 text-sm">
                <div className="w-32 h-0.5 bg-gradient-to-r from-blue-500/30 to-pink-500/30"></div>
                <span className="mx-6 text-blue-300 font-medium">
                  Interconnected, Secure Architecture
                </span>
                <div className="w-32 h-0.5 bg-gradient-to-r from-pink-500/30 to-blue-500/30"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Real Impact for Real Clients
          </h2>
          <h4 className="text-xl font-bold text-center mb-8 text-transparent text-white">
            Examples of track record benefits delivered
          </h4>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-green-400" size={24} />
                  <h3 className="text-xl font-semibold text-slate-100">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fun Projects Section */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Fun Projects in Progress
          </h2>
          <p className="text-xl text-center mb-12 text-slate-300">
            Experimental side projects where I explore new tech and creative
            ideas
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* JWST Spectral Analyzer */}
              <a
                href="https://github.com/seniorcreative/spectral-analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🔭</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 group-hover:text-blue-300 transition-colors">
                    JWST Spectral Analyzer
                  </h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Analyzing spectral data from the James Webb Space Telescope to
                  identify exoplanet atmospheres and stellar compositions. Built
                  with Python, NumPy, and data visualization libraries.
                </p>
                <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span className="text-sm font-medium">View on GitHub</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </a>

              {/* Cor-D */}
              <a
                href="https://github.com/seniorcreative/cor-D"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🎵</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 group-hover:text-purple-300 transition-colors">
                    Cor-D
                  </h3>
                </div>
                <p className="text-slate-300 mb-4">
                  An experimental tool that extracts chord progressions from
                  YouTube clips using audio analysis. Perfect for musicians who
                  want to play along to their favorite songs.
                </p>
                <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="text-sm font-medium">View on GitHub</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </a>
            </div>

            {/* Bottom note */}
            <div className="text-center mt-8">
              <p className="text-slate-400 text-sm">
                These projects showcase my passion for exploring new
                technologies and creative problem-solving
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {/* <section id="testimonials" className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all"
              >
                <Quote className="text-blue-400 mb-4" size={24} />
                <p className="text-slate-300 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="font-semibold">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Contact Form Section */}
        <section
          id="contact"
          className="container mx-auto px-6 py-20 text-center"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Ship Faster?
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      placeholder="Your name"
                    />
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="project"
                    className="block text-slate-300 font-medium mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  >
                    <option value="">Select project type</option>
                    <option value="new-app">New App Development</option>
                    <option value="migration">Legacy System Migration</option>
                    <option value="optimization">
                      Performance Optimization
                    </option>
                    <option value="architecture">
                      Technical Architecture Review
                    </option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block text-slate-300 font-medium mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-vertical"
                    placeholder="Tell me about your project, timeline, and how I can help..."
                  />
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

        {/* Footer */}
        {/* <footer className="container mx-auto px-6 py-8 border-t border-slate-700/50">
          <div className="text-center text-slate-400">
            <p>&copy; 2024 panko.digital - Your Technical Co-pilot</p>
          </div>
        </footer> */}
      </div>
    </section>
  );
}
