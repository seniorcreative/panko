"use client";

import React from "react";
import Stellae from "../components/stellae";

import { Pacifico, Raleway } from "next/font/google";

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
  return (
    <section
      className={`${ral.className} min-h-screen flex items-center bg-black`}
    >
      <div className="w-1/2 mx-auto overflow-hidden">
        <Stellae invert />
        <span className="text-white text-5xl material-symbols-outlined">
          raven
        </span>{" "}
        <h1 className={`${pac.className} text-xl text-white`}>
          Rewild the WWW
        </h1>
        <p className="text-white my-4 leading-4">
          Info to be added here about rewilding the www - and all the benefits
          that could bring.
        </p>
        <br />
        <a href="https://www.noemamag.com/we-need-to-rewild-the-internet/">
          Inspiration
        </a>
      </div>
    </section>
  );
}
