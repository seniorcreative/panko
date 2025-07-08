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
                I&rsquo;m a human with 20+ years of experience. Let&rsquo;s build something great together.
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
            <div className="grifd md:grid-cols-2 gap-8">
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
                  <span className="font-semibold text-white">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Service Packages */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            How I Can Help
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Quick Fix */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-white">Quick Fix</h3>
              <p className="text-3xl font-bold mb-4 text-blue-400">$500-$1K</p>
              <ul className="text-slate-300 space-y-2 mb-6">
                <li>• Bug fixes and small features</li>
                <li>• Performance optimization</li>
                <li>• Quick consultation calls</li>
                <li>• Same-day turnaround</li>
              </ul>
              <a
                href="#contact"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-3 rounded-lg font-semibold transition-all inline-block text-center"
              >
                Get Quote
              </a>
            </div>

            {/* Project Development */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/50 transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Full Project</h3>
              <p className="text-3xl font-bold mb-4 text-purple-400">$2K-$10K</p>
              <ul className="text-slate-300 space-y-2 mb-6">
                <li>• Complete website or app build</li>
                <li>• Custom features and integrations</li>
                <li>• Mobile-responsive design</li>
                <li>• 2-8 week delivery</li>
              </ul>
              <a
                href="#contact"
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all inline-block text-center"
              >
                Get Quote
              </a>
            </div>

            {/* Technical Partner */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-white">Technical Partner</h3>
              <p className="text-3xl font-bold mb-4 text-green-400">$10K+</p>
              <ul className="text-slate-300 space-y-2 mb-6">
                <li>• Long-term development partnership</li>
                <li>• Architecture planning and reviews</li>
                <li>• Team training and mentoring</li>
                <li>• Ongoing support and maintenance</li>
              </ul>
              <a
                href="#contact"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-6 py-3 rounded-lg font-semibold transition-all inline-block text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
        </section>

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

                <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                  <div>
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
                  </div>
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
