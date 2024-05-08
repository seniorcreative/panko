"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import Waves from "./components/waves";

import PankoLogoSVG from "../../public/Black logo - no background.svg";
import NineLogo from "../../public/Nine-Network-Logo.png";
import BankFirst from "../../public/bankfirst.png";
import Buildxact from "../../public/Buildxact-Logo-SVG.svg";
import Telstra from "../../public/telstra.png";
import Worksafe from "../../public/WorkSafe-logo-BW-grey-approved-PNG-2017.png";
import ASM from "../../public/ASM-White-on-black.png";
import BMW from "../../public/BMW-Logo.png";
import Sportsyear from "../../public/Sportsyear-logo-lod@2x.png";
import Mini from "../../public/mini-logo-06.jpg";
import RevitCourse from "../../public/autodesk-revit-course-logo@2x.png";
import BBC from "../../public/BBC_Logo_2021.svg";
import IsoBg from "../../public/Panko-Iso-Bg-Tile.png";
import { relative } from "path";

export type LogoObj = { t: string; i: StaticImageData; c: string | undefined };

export default function Home() {
  const Logos: LogoObj[] = [
    { t: "Nine Network: Video Graphics Software", i: NineLogo, c: undefined },
    { t: "BankFirst: Finance Application", i: BankFirst, c: undefined },
    {
      t: "Buildxact: Building Project Estimation",
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

  const content = require("./data/content.json");
  const folioCategories = new Set<string>();
  content.en.work.forEach((workItem: any) => {
    workItem.category.forEach((cat: string) => {
      folioCategories.add(cat);
    });
  });

  const [folioSelected, setFolioSelected] = useState(false);

  useEffect(() => {
    const max = 24;
    const min = 4;
    const count = 120;

    const canvas = document.querySelector("#campus-stellae");

    const estrellae = () => {
      const campusEstrellae = document.createElement("div");
      campusEstrellae.id = "estrella";

      for (let i = 0; i < count; i++) {
        const direction = document.createElement("div");
        direction.classList.add("estrella-angle");
        direction.style.rotate = `${i * (360 / count)}deg`;

        const estrella = document.createElement("div");
        const rdm = Math.random() * (max - min) + min;
        estrella.classList.add("estrella");
        estrella.style.animationDuration = `${rdm}s`;

        direction.appendChild(estrella);
        campusEstrellae.appendChild(direction);
      }

      return campusEstrellae;
    };

    canvas?.appendChild(estrellae());
  }, []);

  return (
    <>
      <section
        className="w-full flex items-center justify-center"
        style={{ height: "30vh", position: "relative", top: "20vh" }}
      >
        <div
          id="campus-stellae"
          className="flex isolation-auto absolute justify-center items-center -z-10"
        ></div>
        <Image
          className="opacity-100 flex z-50"
          id="logo-img"
          src={PankoLogoSVG.src}
          alt="Panko Logo"
          width={281 * 0.75}
          height={317 * 0.75}
        />
      </section>
      <section className="mt-12 p-8 md:p-24 text-slate-900 text-center">
        <h3 className="text-lg">
          Melbourne&nbsp;&bull;&nbsp;Sydney&nbsp;&bull;&nbsp;Geelong
        </h3>
        <h4 className="text-xl">
          Efficient, Affordable, Freelance Web Services
        </h4>
        <p className="lg:w-1/3 lg:mx-auto my-3">
          Industry standard digital software maintenance and development for
          web, stores, apps &amp; business systems.
        </p>
        <h1 className="hidden">
          Melbourne freelance e-commerce, web and mobile application developer.
        </h1>
      </section>
      <Waves lighten />
      <section
        className="bg-white px-8 md:px-24 text-slate-800 pt-12"
        style={{ background: `rgba(0,0,0,0.1)` }}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-12 mb-48">
          {Logos.map((logo: LogoObj) => (
            <div
              key={logo.t}
              title={logo.t}
              className={`${logo.c} grayscale opacity-60 bg-blend-multiply scale-75 hover:scale-125 transition-all`}
              style={{
                backgroundImage: `url(${logo.i.src})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                width: "100%",
                height: "100%",
                minHeight: "50px",
              }}
            />
          ))}
        </div>
      </section>
      <div className="-mt-48">
        <Waves />
      </div>
      {/* Categories list */}
      <section className=" bg-black px-8 md:p-12 min-h-12 -mt-2">
        <div className="container mx-auto">
          <ul className="list-none lg:flex lg:justify-between py-2">
            {Array.from(folioCategories).map((cat: string) => (
              <li
                key={cat}
                className="cat-link py-1 cursor-pointer text-white text-sm"
              >
                <a href={`/folio/${cat}`}>{cat}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* End categories list */}
      {/* <div className="">
        <Waves inverted={false} />
      </div> */}
      <section
        style={{
          backgroundImage: `url(${IsoBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "contain",
          height: "100vh",
        }}
        className="hover:animate-pulse"
      ></section>
    </>
  );
}
