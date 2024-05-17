"use client";

import React from "react";
import "./gallery.css";

export default function Gallery({
  images,
  description,
  title,
  client,
  href,
  locale,
}: {
  images: string[];
  description: string;
  title: string;
  client: string;
  href: string;
  locale: string;
}) {
  return (
    <section className="relative h-auto gallerySection">
      <div
        className="opacity-60 blur-md bl w-full flex absolute gallerySectionBg"
        style={{
          backgroundImage: `url(${images[0]})`,
          top: "0",
        }}
      ></div>

      <div className="md:absolute grid md:flex top-0 left-5 z-1 p-4 items-center bg-black text-white">
        <div>
          <h3 className="text-xl font-semibold leading-6">{title}</h3>
          <small className="text-sm text-nowrap">
            {locale === "en-US" ? "For" : "为了"}&nbsp;<strong>{client}</strong>
          </small>
        </div>
        {href && (
          <div className="h-fit md:ms-8 cat-link">
            <a
              href={`${href}`}
              target="_blank"
              role="Button"
              className="ps-2 text underline"
              title={
                locale === "en-US"
                  ? `View ${title} in a new window`
                  : `在新窗口中查看 ${title}`
              }
            >
              {locale === "en-US" ? "Launch" : "发射"} {href}
            </a>
          </div>
        )}
      </div>

      <div className="md:absolute md:flex md:overflow-x-auto me-4 imagesWrapper">
        <div className="md:inline-flex flex-nowrap text-sm ms-2 first:ms-0 bg-white text-slate-900 p-4 descWrapper">
          {description}
        </div>
        {images.map((image: string) => (
          <div
            key={image}
            className="md:inline-flex md:flex-nowrap md:ms-1 first:ms-0 imgContainer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} className="object-cover imgClass" alt="..." />
          </div>
        ))}
      </div>
    </section>
  );
}
