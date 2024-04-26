"use client";

import Image from "next/image";
import React from "react";

export default function Gallery({
  images,
  description,
  title,
  client,
  href,
}: {
  images: string[];
  description: string;
  title: string;
  client: string;
  href: string;
}) {
  return (
    <section
      className="relative"
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

      <div className="absolute flex top-0 left-5 z-1 p-4 items-center bg-black text-white">
        <div>
          <h3 className="text-xl font-semibold leading-6">{title}</h3>
          <small className="text-sm text-nowrap">
            For&nbsp;<strong>{client}</strong>
          </small>
        </div>
        {href && (
          <div className="h-fit ms-8">
            Launch
            <a
              href={`${href}`}
              target="_blank"
              role="Button"
              className="ps-2 text underline"
              title={`View ${title} in a new window`}
            >
              {href}
            </a>
          </div>
        )}
      </div>

      <div
        className="absolute flex overflow-x-auto me-4"
        style={{ height: "320px", top: "80px", left: "20px" }}
      >
        <div
          className="inline-flex flex-nowrap text-xs ms-2 first:ms-0 bg-white p-4"
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
