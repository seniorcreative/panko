"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import { useEffect } from "react";
import { CheckCircle, ArrowUpRight } from "lucide-react";
import { aldrich } from "./fonts";
import { Raleway } from "next/font/google";

const content = require("./data/content.json");

const ral = Raleway({
  weight: ["400", "600"],
  style: "normal",
  subsets: ["latin"],
});

export default function Home() {
  const [formSuccess, setFormSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const pathName = usePathname();
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    sendGTMEvent({ event: "pageView", value: pathName });
  }, [pathName]);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        return value.trim().length < 2
          ? "Name must be at least 2 characters"
          : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Please enter a valid email address"
          : "";
      case "message":
        return value.trim().length < 50
          ? "Message must be at least 50 characters"
          : "";
      default:
        return "";
    }
  };

  const handleFieldChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newErrors: Record<string, string> = {};
    ["name", "email", "message"].forEach((field) => {
      const error = validateField(field, (formData.get(field) as string) || "");
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    });
    setFormSuccess(true);
  };

  const { sections } = content["en-US"].home;
  const testimonials = content["en-US"].testimonials;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Panko Digital",
    description:
      "Technology consulting, web development, AI productionisation, LMS and CRM services in Geelong and Melbourne.",
    url: "https://panko.digital",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Geelong",
      addressRegion: "Victoria",
      addressCountry: "Australia",
    },
    areaServed: [
      { "@type": "City", name: "Geelong" },
      { "@type": "City", name: "Melbourne" },
      { "@type": "State", name: "Victoria" },
    ],
    founder: {
      "@type": "Person",
      name: "Steven Smith",
      jobTitle: "Senior Software Engineer & Technical Consultant",
    },
    sameAs: [
      "https://github.com/seniorcreative",
      "https://www.linkedin.com/in/seniorcreative",
    ],
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
      errors[field] && touched[field]
        ? "border-red-400 focus:border-red-400 focus:ring-red-200"
        : "border-gray-300 focus:border-gray-900 focus:ring-gray-200"
    }`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-16 bg-white">
        <div className="max-w-3xl">
          <h1
            className={`${aldrich.className} text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 flex flex-wrap`}
          >
            {sections.intro.headline
              .split(" ")
              .map((word: string, i: number) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden mr-[0.3em]"
                >
                  <span
                    className="inline-block animate-word-reveal"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    {word}
                  </span>
                </span>
              ))}
          </h1>
          <p
            className={`${ral.className} text-xl md:text-2xl text-gray-500 leading-relaxed mb-10 max-w-2xl`}
          >
            {sections.intro.subheadline}
          </p>
          <button
            onClick={scrollToContact}
            className={`${aldrich.className} inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg text-lg hover:bg-gray-800 transition-colors`}
          >
            {sections.intro.contactBtn}
          </button>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 border-t border-gray-200"
      >
        <div className="max-w-6xl">
          <h2
            className={`${aldrich.className} text-sm uppercase tracking-widest text-gray-400 mb-12`}
          >
            What I do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {sections.services.map((service: any, i: number) => (
              <div key={i}>
                <h3
                  className={`${aldrich.className} text-xl text-gray-900 mb-3`}
                >
                  {service.title}
                </h3>
                <p className={`${ral.className} text-gray-500 leading-relaxed`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section
        id="work"
        className="py-20 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-200"
      >
        <div className="max-w-6xl">
          <h2
            className={`${aldrich.className} text-sm uppercase tracking-widest text-gray-400 mb-12`}
          >
            Recent work
          </h2>
          <div className="space-y-0 divide-y divide-gray-200">
            {sections.recentWork.map((project: any, i: number) => (
              <div key={i} className="py-8 first:pt-0 last:pb-0 group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        className={`${aldrich.className} text-xl text-gray-900`}
                      >
                        {project.title}
                      </h3>
                      {project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-900 transition-colors"
                          aria-label={`Visit ${project.title}`}
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      )}
                    </div>
                    <p
                      className={`${ral.className} text-gray-500 leading-relaxed max-w-xl`}
                    >
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 md:text-right flex-shrink-0">
                    <span className={`${ral.className} text-sm text-gray-400`}>
                      {project.client}
                    </span>
                    <span
                      className={`${aldrich.className} text-sm text-gray-300`}
                    >
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 border-t border-gray-200"
      >
        <div className="max-w-6xl">
          <h2
            className={`${aldrich.className} text-sm uppercase tracking-widest text-gray-400 mb-12`}
          >
            What clients say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t: any) => (
              <div
                key={t.id}
                className="bg-white rounded-lg p-8 border border-gray-200"
              >
                <p
                  className={`${ral.className} text-gray-600 leading-relaxed mb-6`}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  {t.avatar ? (
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-500">
                      {t.initials}
                    </div>
                  )}
                  <div>
                    <p className={`${aldrich.className} text-sm text-gray-900`}>
                      {t.name}
                    </p>
                    <p className={`${ral.className} text-xs text-gray-400`}>
                      {t.business}, {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        ref={contactRef}
        id="contact"
        className={`${ral.className} py-20 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-200`}
      >
        <div className="max-w-2xl">
          <div className="flex items-center gap-5 mb-10">
            <Image
              src="/profile/SAND_250820_0767_400x400.jpg"
              alt="Steve Smith"
              width={72}
              height={72}
              className="rounded-full grayscale flex-shrink-0"
            />
            <div>
              <h2
                className={`${aldrich.className} text-sm uppercase tracking-widest text-gray-400 mb-1`}
              >
                Get in touch
              </h2>
              <p className={`${ral.className} text-xl text-gray-500`}>
                I&rsquo;m Steve — tell me about your project and I&rsquo;ll get
                back to you within a day.
              </p>
            </div>
          </div>

          {formSuccess && (
            <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 border border-green-200">
              <CheckCircle className="inline mr-2" size={20} />
              Thank you — I&rsquo;ll be in touch soon.
            </div>
          )}
          {!formSuccess && (
            <form
              name="contact"
              onSubmit={handleFormSubmit}
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-600 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    onChange={handleFieldChange}
                    className={inputClass("name")}
                    placeholder="Your name"
                  />
                  {errors.name && touched.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-600 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    onChange={handleFieldChange}
                    className={inputClass("email")}
                    placeholder="you@company.com"
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="industry"
                    className="block text-sm text-gray-600 mb-2"
                  >
                    Your industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                  >
                    <option value="">Select</option>
                    <option value="education">Education & Training</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="finance">Finance & Insurance</option>
                    <option value="health">Health & Wellbeing</option>
                    <option value="creative">Creative & Media</option>
                    <option value="trades">Trades & Services</option>
                    <option value="tech">Technology & SaaS</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm text-gray-600 mb-2"
                  >
                    Project type
                  </label>
                  <select
                    id="project"
                    name="project"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                  >
                    <option value="">Select</option>
                    <option value="website">Website or Web App</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ai">
                      AI Prototyping / Productionisation
                    </option>
                    <option value="lms">LMS / Course Development</option>
                    <option value="crm">CRM Migration</option>
                    <option value="fix">Fix or Maintenance</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-600 mb-2"
                >
                  Tell me about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  minLength={50}
                  onChange={handleFieldChange}
                  className={inputClass("message")}
                  placeholder="What are you working on? What problem are you trying to solve?"
                />
                {errors.message && touched.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className={`${aldrich.className} px-8 py-4 bg-gray-900 text-white rounded-lg text-lg hover:bg-gray-800 transition-colors`}
              >
                Send enquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
