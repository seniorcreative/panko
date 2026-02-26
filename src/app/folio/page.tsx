"use client";

import Link from "next/link";
import { aldrich } from "../fonts";
import { Raleway } from "next/font/google";

const ral = Raleway({ weight: ["400", "600"], subsets: ["latin"] });

export default function Page() {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-12 lg:px-24 pb-20 bg-white">
      <div className="max-w-3xl">
        <Link
          href="/"
          className={`${aldrich.className} text-sm text-gray-400 hover:text-gray-900 transition-colors mb-8 inline-block`}
        >
          &larr; Back to home
        </Link>
        <h1
          className={`${aldrich.className} text-3xl md:text-4xl text-gray-900 mb-4`}
        >
          Older Work
        </h1>
        <p className={`${ral.className} text-lg text-gray-500 mb-12`}>
          A selection of past projects. For recent work, see the{" "}
          <Link
            href="/#work"
            className="underline hover:text-gray-900 transition-colors"
          >
            homepage
          </Link>
          .
        </p>
        <div className="space-y-8">
          {[
            {
              title: "Bridge Alert",
              date: "2016–2019",
              desc: "React Native app with Firebase, geofencing, maps, and push notifications.",
            },
            {
              title: "WorkSafe Victoria",
              date: "2021",
              desc: "AWS Lambda and Cognito passwordless sign-in app piloted by Victorian government.",
            },
            {
              title: "MCG AFL Scoreboard System",
              date: "2007",
              desc: "Interactive scoring system generating video signals for large sports stadium crowds.",
            },
            {
              title: "MCG Club Songs",
              date: "2011",
              desc: "Kiosk system for Australian Sports Museum with club songs and IoT messaging.",
            },
            {
              title: "Milk Skincare",
              date: "2011",
              desc: "Custom e-commerce system with Popcorn CMS for Michael Klim's skincare startup.",
            },
            {
              title: "Carlton Natural Blonde",
              date: "2010",
              desc: "Retro Galaga clone with original SFX, built in 6 days for marketing.",
            },
          ].map((project, i) => (
            <div
              key={i}
              className="border-b border-gray-200 pb-8 last:border-0"
            >
              <div className="flex items-baseline justify-between mb-2">
                <h3 className={`${aldrich.className} text-lg text-gray-900`}>
                  {project.title}
                </h3>
                <span className={`${aldrich.className} text-sm text-gray-300`}>
                  {project.date}
                </span>
              </div>
              <p className={`${ral.className} text-gray-500`}>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
