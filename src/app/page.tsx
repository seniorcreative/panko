"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect, useContext } from "react";

import { LanguageContext } from "./languageContext";
import { getCurrentLocale } from "./actions";

// Components
import About from "./components/about";
import Services from "./components/services";
import FolioCategories from "./components/folioCategories";
import Waves from "./components/waves";
import Stellae from "./components/stellae";
import Shuffler from "./components/shuffler";

import {
  PankoLogoSVG,
  NineLogo,
  BankFirst,
  Telstra,
  Buildxact,
  Worksafe,
  BMW,
  ASM,
  Sportsyear,
  Mini,
  RevitCourse,
  BBC,
} from "../../public/logoIndex";

export type LogoObj = { t: string; i: StaticImageData; c: string | undefined };

export default function Home() {
  const [currentLocale, setCurrentLocale] = useState("en-US");

  // Get the locale for translation.
  useEffect(() => {
    const getLocale = async () => {
      const locale = await getCurrentLocale();
      setCurrentLocale(locale);
    };
    getLocale();
  }, []);

  const content = require("./data/content.json");

  const Logos: LogoObj[] = [
    { t: "Nine Network: Video Graphics Software", i: NineLogo, c: undefined },
    { t: "BankFirst: Finance Application", i: BankFirst, c: undefined },
    {
      t: "Buildxact: Building Quote Estimation Software",
      i: Buildxact,
      c: "grayscale scale-125 opacity-75",
    },
    { t: "Telstra: Resume Generator", i: Telstra, c: undefined },
    { t: "Australian Sports Museum: Touchscreen", i: ASM, c: undefined },
    { t: "Worksafe: Pilot App", i: Worksafe, c: undefined },
    { t: "BMW: Finance Application", i: BMW, c: "invert grayscale" },
    {
      t: "Sportsyear: E-Commerce",
      i: Sportsyear,
      c: "invert scale-50 grayscale opacity-60",
    },
    { t: "Mini: Asia Pac Site Dev for Monkii", i: Mini, c: undefined },
    {
      t: "RevitCourse: Booking System",
      i: RevitCourse,
      c: "invert grayscale opacity-60 scale-75",
    },
    {
      t: "BBC: E-Learning Games",
      i: BBC,
      c: "grayscale opacity-60 scale-75",
    },
  ];

  const folioCategories = new Set<string>();
  const { language, setLanguage } = useContext(LanguageContext);

  content[language].work.forEach((workItem: any) => {
    workItem.category.forEach((cat: string) => {
      folioCategories.add(cat);
    });
  });

  const buttonStyle = "p-2 rounded-md me-2 border-2 border-dark";

  return (
    <>
      <section
        className="h-screen w-full flex-col items-center justify-center"
        style={{ position: "relative" }}
      >
        <Stellae />
        <Image
          className="flex z-50 mx-auto mt-28"
          id="logo-img"
          src={PankoLogoSVG.src}
          alt="Panko Logo"
          width={281 * 0.75}
          height={317 * 0.75}
        />
        <div className="mt-12 p-8 md:p-24 text-slate-900 text-center">
          <h3 className="text-lg">
            {content[language].home.sections.intro.one}
          </h3>
          <h4 className="text-xl">
            {content[language].home.sections.intro.two}
          </h4>
          <p className="lg:w-1/3 lg:mx-auto my-3">
            {content[language].home.sections.intro.three}
          </p>
          <a
            className={buttonStyle}
            href={content[language].home.sections.intro.contactLink}
          >
            {content[language].home.sections.intro.contactBtn}
          </a>
          <h1 className="hidden">
            {content[language].home.sections.intro.four}
          </h1>
        </div>
      </section>
      <Waves lighten />
      <section
        className="px-8 md:px-24 text-slate-800 pt-8 pb-4"
        style={{ background: `rgba(0,0,0,0.1)` }}
      >
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-4 mb-24">
          {Logos.map((logo: LogoObj) => (
            <div
              key={logo.t}
              title={logo.t}
              className={`${logo.c}rounded-full grayscale opacity-60 scale-75 hover:scale-125 transition-all`}
              style={{
                backgroundImage: `url(${logo.i.src})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                width: "100%",
                height: "100%",
                minHeight: "32px",
              }}
            />
          ))}
        </div>
      </section>
      <div className="-mt-48">
        <Waves flipped />
      </div>
      <FolioCategories categories={folioCategories} locale={language} />
      <About locale={language} />
      <Shuffler></Shuffler>
      <Services locale={language} />
    </>
  );
}
