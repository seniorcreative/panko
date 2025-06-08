"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect, useContext } from "react";

import { LanguageContext } from "./contexts/languageContext";
import { getCurrentLocale } from "./actions";
import { sendGTMEvent } from "@next/third-parties/google";

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
import { usePathname } from "next/navigation";

export type LogoObj = { t: string; i: StaticImageData; c: string | undefined };

export default function Home() {
  const [currentLocale, setCurrentLocale] = useState("en-US");
  const pathName = usePathname();

  // Get the locale for translation.
  useEffect(() => {
    const getLocale = async () => {
      const locale = await getCurrentLocale();
      setCurrentLocale(locale);
      sendGTMEvent({ event: "pageView", value: pathName });
    };

    getLocale();
  }, [pathName]);

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

  const catInfo = content[language].categoryInfo;

  const buttonStyle =
    "px-4 py-2 rounded-md me-2 border-2 border-dark bg-white bg-opacity-75 backdrop-blur";

  return (
    <>
      <section
        className="min-h-96 w-full flex-col items-center justify-center"
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
          <h3 className="text-lg mb-4">
            {content[language].home.sections.intro.one}
          </h3>
          <h4 className="text-xl">
            {content[language].home.sections.intro.two}
          </h4>
            <p 
            className="lg:w-1/2 lg:mx-auto my-3 mb-8"
            dangerouslySetInnerHTML={{
              __html: content[language].home.sections.intro.three
            }}
          ></p>
          <a className={buttonStyle} href={"/10x"}>
            How I can help
          </a>
          <h1 className="hidden">
            {content[language].home.sections.intro.four}
          </h1>
        </div>
      </section>
      <Waves lighten />
      <section
        className="px-8 md:px-24 text-slate-800 bg-slate-200 pt-8 pb-4"
        style={{ marginTop: "-1px" }}
      >
        <h3 className="text-xl text-center block mt-1 mb-4">
          Clients I&rsquo;ve built for
        </h3>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-4 pb-12">
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
      <Waves flipped />
      <FolioCategories
        categories={folioCategories}
        locale={language}
        categoryInfo={catInfo}
      />
      <About locale={language} />
      {/* <Shuffler></Shuffler> */}
      {/* <Services locale={language} /> */}
    </>
  );
}
