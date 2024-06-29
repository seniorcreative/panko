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
        <p className="text-white my-4 leading-4">
          panko has a social media safety policy in place.
          <br />
          <br />
          We will not work with companies that do not value the privacy and
          mental health safety of minors and vulnerable digital content
          consumers. A minimum age limit is only one step of the journey. We
          will advocate for screen time awareness and healthy habits about what
          is and is not appropriate to be shared. Technology and connectedness
          can be amazing but dont always occupy the same space with self respect
          and the respect of other humans from all walks of life. So be human
          and care about who is watching and listening.
          <br />
          <br />
          我们不会与不重视未成年人和弱势数字内容消费者的隐私和心理健康安全的公司合​​作。最低年龄限制只是这一过程的第一步。我们将倡导人们对屏幕时间的认识和健康习惯，了解什么是适合分享的，什么是不适合分享的。技术和连通性
          可能会令人惊奇，但不要总是以自尊和各行各业其他人的尊重占据同一个空间。因此，要人性化，关心谁在观看和聆听。
          <br />
          <br />
          stay socially safe.
        </p>
      </div>
    </section>
  );
}
