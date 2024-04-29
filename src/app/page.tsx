"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import anime from "animejs";

import Waves from "./components/waves";
import { WindupChildren } from "windups";

import PankoLogoSVG from "../../public/Black logo - no swirl.svg";
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
      c: undefined,
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
    // Animation using Anime.js
    anime({
      targets: "#logo-img",
      scale: [0, 1.25],
      opacity: [0, 1],
      easing: "easeInOutElastic",
      duration: 1500,
      delay: 1500,
    });

    let container = document.querySelector(".anime-container");

    var a = 3.3;
    var l = 90;

    for (var i = 10; i <= l; i += 1) {
      var angle = 0.2 * i;
      var x = a * angle * Math.cos(angle) + window.innerWidth / 2;
      var y = a * angle * Math.sin(angle) + window.innerHeight / 2;

      var n = 24;

      for (var j = 0; j < n; j++) {
        var dot = document.createElement("div");
        dot.classList.add("dot");
        container?.appendChild(dot);

        var size = anime.random(4, 12);

        dot.style.width = size + "px";
        dot.style.height = size + "px";

        dot.style.left = x + anime.random(-15, 15) + "px";
        dot.style.top = y + anime.random(-15, 15) + "px";

        dot.style.opacity = "0";
      }
    }

    anime({
      loop: true,
      easing: "linear",
      opacity: [
        { value: 1, duration: 50, delay: anime.stagger(2) },
        {
          value: 0,
          duration: function () {
            return anime.random(500, 1500);
          },
        },
      ],
      width: { value: 2, duration: 500, delay: anime.stagger(2) },
      height: { value: 2, duration: 500, delay: anime.stagger(2) },

      targets: document.querySelectorAll(".dot"),

      translateX: {
        value: function () {
          return anime.random(-30, 30);
        },
        duration: 1500,
        delay: anime.stagger(2),
      },
      translateY: {
        value: function () {
          return anime.random(-30, 30);
        },
        duration: 1500,
        delay: anime.stagger(2),
      },
    });
  }, []);

  return (
    <>
      <section
        className="w-full flex items-center justify-center"
        style={{ height: "75vh", position: "relative", top: "12.5vh" }}
      >
        <Image
          className="opacity-100 flex"
          id="logo-img"
          src={PankoLogoSVG.src}
          alt="Panko Logo"
          width={281}
          height={317}
          priority
        />
        <div className="anime-container">{/* particles */}</div>
      </section>
      <Waves inverted={false} />
      <section className="bg-white px-8 md:px-24 text-slate-800">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-12 mb-48">
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
      <div className="-mt-48">
        <Waves inverted={true} />
      </div>
      {/* Categories list */}
      <section className=" bg-black px-8 md:p-12 min-h-12 -mt-2">
        <div className="container mx-auto">
          <ul className="list-none flex justify-between py-2">
            {Array.from(folioCategories).map((cat: string) => (
              <li
                key={cat}
                className="cat-link py-4 cursor-pointer text-white text-sm"
              >
                <a href={`/folio/${cat}`}>{cat}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* End categories list */}
      <section
        style={{
          backgroundImage: `url(${IsoBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className="min-h-96 py-96"
      ></section>
    </>
  );
}
