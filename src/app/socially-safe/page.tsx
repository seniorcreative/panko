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
      <div className="w-10/12 md:w-1/2 mx-auto">
	<div className="flex items-center">
        <span className="text-5xl material-symbols-outlined text-white">
         wb_sunny
        </span>
        <h1 className="ms-3 text-xl text-white font-bold">Socially safe</h1>
	</div>
        <p className="text-white my-4 leading-4">
          panko has a social media safety policy
          <br />
          <br />
          We will not work with companies that do not value the privacy and
          mental health safety of vulnerable digital content
          consumers. We will advocate for screen time awareness and healthy online habits as well as accessibility. 
          We are human and care about all who are reading, watching or listening.
        </p>
      </div>
    </section>
  );
}
