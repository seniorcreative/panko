"use client";

import Image from "next/image";
import React from "react";

export default function Gallery({
  images,
  description,
}: {
  images: string[];
  description: string;
}) {
  return (
    <section
      className="relative mb-12"
      style={{ height: "480px", paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div
        className="opacity-60 blur-md bl w-full flex absolute"
        style={{
          backgroundImage: `url(${images[0]})`,
          height: "480px",
          top: "0",
        }}
      ></div>
      <div
        className="absolute flex overflow-x-auto"
        style={{ height: "320px", top: "80px", left: "20px" }}
      >
        <div
          className="inline-flex flex-nowrap ms-2 first:ms-0 bg-white p-4"
          style={{ minWidth: "320px", width: "320px", height: "320px" }}
        >
          {description}
        </div>
        {images.map((image: string) => (
          <div
            key={image}
            className="inline-flex flex-nowrap ms-2 first:ms-0"
            style={{ height: "320px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              style={{ width: "auto", height: "320px" }}
              className="object-cover"
              alt="..."
            />
          </div>
        ))}
      </div>
    </section>
  );
}
