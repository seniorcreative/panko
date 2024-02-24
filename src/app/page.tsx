"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";
import anime from "animejs";

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

export type LogoObj = { t: string; i: StaticImageData; c: string | undefined };

export default function Home() {
  const Logos: LogoObj[] = [
    { t: "Nine Network: Graphics", i: NineLogo, c: undefined },
    { t: "BankFirst: Finance Application", i: BankFirst, c: undefined },
    { t: "Buildxact: Building Project Estimation", i: Buildxact, c: undefined },
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
  ];

  useEffect(() => {
    // Animation using Anime.js
    anime({
      targets: "#logo-img",
      scale: [0, 1],
      opacity: [0, 1],
      easing: "easeInOutElastic",
      duration: 1000,
      delay: 500,
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <section className="h-screen w-full flex items-center justify-center">
        <Image
          className="flex"
          id="logo-img"
          src="/Black logo - no background.png"
          alt="Panko Logo"
          width={281}
          height={317}
          priority
        />
      </section>
      <div>
        <p>Panko Digital.</p>
      </div>
      <section className="h-screen bg-white my-12 px-8 md:px-24 min-h-52 text-slate-800">
        <div className="grid grid-cols-3 gap-4 my-12">
          {Logos.map((logo: LogoObj) => (
            <div
              key={logo.t}
              title={logo.t}
              className={logo.c || "grayscale opacity-60"}
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
    </main>
  );
}
