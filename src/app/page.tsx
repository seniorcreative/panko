"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useContext, useRef, useState } from "react";

import { LanguageContext } from "./contexts/languageContext";
import { sendGTMEvent } from "@next/third-parties/google";
import { aldrich } from "./fonts";
import { Pacifico, Raleway } from "next/font/google";
import {
  CheckCircle,
} from "lucide-react";

// Components
import Work from "./components/Work";
import BusinessHelp from "./components/BusinessHelp";
import Stellae from "./components/stellae";
import FAQ from "./components/FAQ";
import ProcessSteps from "./components/ProcessSteps";

import {
  PankoLogoSVG,
  NineLogo,
  KmartLogo,
  // BankFirst,
  // Telstra,
  Buildxact,
  // Worksafe,
  // BMW,
  ASM,
  Sportsyear,
  // Mini,
  RevitCourse,
  BBC,
  HendrysLogo
} from "../../public/logoIndex";
import { usePathname } from "next/navigation";

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

export type LogoObj = { t: string; i: StaticImageData; c: string | undefined };

export default function Home() {
  interface FormSubmitEvent extends React.FormEvent<HTMLFormElement> {
    target: HTMLFormElement;
  }

  const [formSuccess, setFormSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [visibleTimelineItems, setVisibleTimelineItems] = useState<Set<number>>(new Set());

  const pathName = usePathname();
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const timelineItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Send analytics event
  useEffect(() => {
    sendGTMEvent({ event: "pageView", value: pathName });
  }, [pathName]);

  // Smooth scroll to section
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const stellae = document.getElementById("campus-stellae");
      if (stellae) {
        stellae.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Timeline items animation with intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-timeline-index') || '0');
            setVisibleTimelineItems(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    timelineItemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const content = require("./data/content.json");

  const Logos: LogoObj[] = [
    { t: "Kmart Australia: Floorplan Heatmap", i: KmartLogo, c: undefined },
    // { t: "BankFirst: Finance Application", i: BankFirst, c: undefined },
    {
      t: "Buildxact: Quote Estimation Software",
      i: Buildxact,
      c: "_grayscale scale-125 opacity-75",
    },
    // { t: "Telstra: Resume Generator", i: Telstra, c: undefined },
    { t: "Australian Sports Museum: Touchscreen", i: ASM, c: undefined },
    // { t: "Worksafe: Pilot App", i: Worksafe, c: undefined },
    // { t: "BMW: Finance Application", i: BMW, c: "invert _grayscale" },
    { t: "Nine Network: Video Graphics Software", i: NineLogo, c: "scale-30 opacity-50" },
    {
      t: "Sportsyear: E-Commerce",
      i: Sportsyear,
      c: "invert _grayscale opacity-60",
    },
    { t: "Hendrys: Custom Ecommerce Inventory Syncing Software", i: HendrysLogo, c: undefined },
    // { t: "Mini: Asia Pac Site Dev for Monkii", i: Mini, c: undefined },
    {
      t: "RevitCourse: Booking System",
      i: RevitCourse,
      c: "invert _grayscale opacity-60 scale-75",
    },
    {
      t: "BBC: E-Learning Games",
      i: BBC,
      c: "_grayscale opacity-60 scale-75",
    },
  ];

  const { language } = useContext(LanguageContext);

  const colorButtonStyle = `px-6 py-3 rounded-lg ms-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg font-semibold`;

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        return value.trim().length < 2
          ? "Name must be at least 2 characters"
          : "";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value)
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

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const requiredFields = ["name", "email", "message"];

    requiredFields.forEach((field) => {
      const value = (formData.get(field) as string) || "";
      const error = validateField(field, value);
      if (error) {
        newErrors[field] = error;
      }
    });

    return newErrors;
  };

  const handleFieldChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;
    const error = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    setTouched((prev) => ({
      ...prev,
      [name]: true,
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Panko Digital",
    alternateName: "Panko",
    description: "Expert web developer and app development services in Geelong and Melbourne. Helping business owners launch websites, fix technical issues, and build custom applications that drive real results.",
    url: "https://panko.digital",
    email: "stesmi+panko@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Geelong",
      addressRegion: "Victoria",
      postalCode: "3220",
      addressCountry: "Australia"
    },
    areaServed: [
      {
        "@type": "City",
        name: "Geelong",
        "@id": "https://www.wikidata.org/wiki/Q181427"
      },
      {
        "@type": "City",
        name: "Melbourne",
        "@id": "https://www.wikidata.org/wiki/Q3141"
      },
      {
        "@type": "State",
        name: "Victoria",
        "@id": "https://www.wikidata.org/wiki/Q36687"
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Service",
          name: "Website Development",
          description: "Custom business websites that convert visitors into customers",
          provider: {
            "@type": "Organization",
            name: "Panko Digital"
          }
        },
        {
          "@type": "Service",
          name: "Mobile App Development",
          description: "React Native apps for iOS and Android that engage customers",
          provider: {
            "@type": "Organization",
            name: "Panko Digital"
          }
        },
        {
          "@type": "Service",
          name: "E-commerce Development",
          description: "Online stores with secure payments and inventory management",
          provider: {
            "@type": "Organization",
            name: "Panko Digital"
          }
        },
        {
          "@type": "Service",
          name: "Website Troubleshooting",
          description: "Fix broken websites, security issues, and performance problems",
          provider: {
            "@type": "Organization",
            name: "Panko Digital"
          }
        }
      ]
    },
    founder: {
      "@type": "Person",
      name: "Steven Smith",
      jobTitle: "Senior Web Developer & Technical Consultant",
      worksFor: {
        "@type": "Organization",
        name: "Panko Digital"
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "Web Developer",
        occupationLocation: {
          "@type": "City",
          name: "Geelong"
        }
      },
      alumniOf: "Digital Pictures Melbourne",
      knowsAbout: [
        "React Development",
        "Next.js",
        "E-commerce Solutions",
        "Mobile App Development",
        "Website Security",
        "Performance Optimization"
      ]
    },
    sameAs: [
      "https://github.com/seniorcreative",
      "https://www.linkedin.com/in/seniorcreative"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "12",
      bestRating: "5",
      worstRating: "1"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section with Starfield */}
      <section
        ref={heroRef}
        className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
      >
        <Stellae />
        <div className="relative z-50 text-center px-8 max-w-4xl mx-auto">
          <Image
            className="mx-auto mb-8 mt-20 animate-pulse"
            id="logo-img"
            src={PankoLogoSVG.src}
            alt="Panko Logo"
            width={281 * 0.75}
            height={317 * 0.75}
          />
          <h1
            className={`${aldrich.className} text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}
          >
            {language !== "zh-CN" ? "Expert Web Developer in Geelong & Melbourne" : content[language].home.sections.intro.one}
          </h1>
          <h2
            className={`${aldrich.className} text-xl md:text-2xl text-slate-700 mb-8`}
          >
            {language !== "zh-CN" ? "Helping business owners launch websites, fix technical issues & build apps that drive real results" : content[language].home.sections.intro.two}
          </h2>
          <p
            className="text-lg text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto"
            dangerouslySetInnerHTML={{
              __html: content[language].home.sections.intro.three,
            }}
          ></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection(contactRef)}
              className={colorButtonStyle}
            >
              Get Started
            </button>
            <button
              onClick={() => scrollToSection(timelineRef)}
              className="px-6 py-3 rounded-lg border-2 border-slate-300 text-slate-700 hover:bg-slate-50 transition-all font-semibold"
            >
              My Experience
            </button>
          </div>
        </div>

      </section>

      {/* Client Logos Section */}
      <section
        ref={aboutRef}
        className="py-16 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="container mx-auto px-8">
          <h3
            className={`${aldrich.className} text-2xl md:text-3xl font-bold text-center mb-4 text-slate-800`}
          >
            Some of the companies I have worked with
          </h3>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            From small businesses and boutique agencies to large corporations, I&apos;ve been proud to help businesses of
            all sizes succeed in the digital space.
          </p>
          <div className="overflow-hidden">
            <div className="carousel-container">
              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }

                .carousel-track {
                  animation: scroll 25s linear infinite;
                  width: 200%;
                }

                .carousel-track:hover {
                  animation-play-state: paused;
                }
              `}</style>
              <div className="carousel-track flex items-center">
                {[...Logos, ...Logos].map((logo: LogoObj, index: number) => (
                  <div
                    key={`${logo.t}-${index}`}
                    title={logo.t}
                    className={`flex-shrink-0 w-48 h-24 mx-8 opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer ${logo.c}`}
                    style={{
                      backgroundImage: `url(${logo.i.src})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* <section ref={servicesRef} className="py-0">
        <BusinessHelp />
      </section> */}

      {/* Work Section */}
      <section
        ref={workRef}
        className="py-16 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="container mx-auto px-8">
          <Work locale={language} />
        </div>
      </section>

      {/* Timeline Section */}
      <section
        ref={timelineRef}
        className={`${ral.className} py-20 bg-black text-white`}
      >
        <style jsx>{`
          .timeline-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }
          
          .timeline-item.visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          .timeline-item:nth-child(1) { transition-delay: 0ms; }
          .timeline-item:nth-child(2) { transition-delay: 150ms; }
          .timeline-item:nth-child(3) { transition-delay: 300ms; }
          .timeline-item:nth-child(4) { transition-delay: 450ms; }
          .timeline-item:nth-child(5) { transition-delay: 600ms; }
          .timeline-item:nth-child(6) { transition-delay: 750ms; }
          .timeline-item:nth-child(7) { transition-delay: 900ms; }
        `}</style>
        <div className="container mx-auto px-6">
          <h2
            className={`${aldrich.className} text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}
          >
            My evolution as a website and app pro
          </h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                ref={(el) => { timelineItemRefs.current[index] = el; }}
                data-timeline-index={index}
                className={`timeline-item flex gap-6 mb-8 last:mb-0 ${
                  visibleTimelineItems.has(index) ? 'visible' : ''
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs text-center px-2">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-600 mt-4"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3
                    className={`${aldrich.className} text-xl font-semibold mb-2 text-white`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <ProcessSteps />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Form Section */}
      <section
        ref={contactRef}
        id="contact"
        className={`${ral.className} py-20 bg-black text-white`}
      >
        <div className="container mx-auto px-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 max-w-4xl mx-auto">
            <h2
              className={`${aldrich.className} text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}
            >
              Book a Free Consultation
            </h2>
            <p className="text-md text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&rsquo;s discuss how I can help you navigate technical
              decisions, fix your site or launch your product with confidence. Let's get something up and running!
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
                      className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${errors.name && touched.name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-slate-600 focus:border-blue-500 focus:ring-blue-500/20"
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
                      className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${errors.email && touched.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-slate-600 focus:border-blue-500 focus:ring-blue-500/20"
                        }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && touched.email && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>


                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="industry"
                      className="block text-slate-300 font-medium mb-2"
                    >
                      Your Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      onChange={handleFieldChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    >
                      <option value="">Select your industry</option>
                      <option value="creative">Creative - artists, photographers</option>
                      <option value="finance">Finance - advisors, investors, bankers</option>
                      <option value="health">Health - GPs, counsellors, support workers</option>
                      <option value="media">Media - advertising, signage, entertainment</option>
                      <option value="leisure">Leisure - sports, fitness</option>
                      <option value="trades">Trades - builders, business owners</option>
                      <option value="science">Science - astronomers, technologists</option>
                      <option value="entrepreneurs">Entrepreneurs</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
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
                      <option value="website">Website</option>
                      <option value="app">App </option>
                      <option value="e-commerce">
                        E-Commerce
                      </option>
                      <option value="technical-issues">Technical Issues</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

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
                    rows={4}
                    minLength={50}
                    onChange={handleFieldChange}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-vertical ${errors.message && touched.message
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      : "border-slate-600 focus:border-blue-500 focus:ring-blue-500/20"
                      }`}
                  // placeholder={`Please describe:\n• What specific technical problem are you trying to solve?\n• What is the current state of your project?`}
                  />
                  {errors.message && touched.message && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    Send Your Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
