"use client";

import React from "react";
import { Raleway } from "next/font/google";
import Stellae from "../components/stellae";

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
      <Stellae invert />
      <div className="w-1/2 mx-auto">
        <span className="text-5xl material-symbols-outlined text-white">
          wb_sunny
        </span>
        <h1 className="text-xl text-white">Socially safe</h1>
        <p className="text-white my-4 leading-3">
          Info coming here about our social media safety policy.
        </p>
      </div>
    </section>
  );
}
