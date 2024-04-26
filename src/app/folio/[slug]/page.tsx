"use client";

import { usePathname } from "next/navigation";
import React from "react";

// import CarouselReactComponent from "../../components/carouselreact"
import Gallery from "../../components/gallery";
const content = require("../../data/content.json");

export default function Page() {
  const pathname = usePathname();

  return (
    <div className="mt-24 mx-auto py-6 sm:py-6 w-full">
      {/* <div className="max-w-2xl lg:mx-0">
        <h2 className="text-xl font-bold sm:ps-2 tracking-tight text-white sm:text-xl">
          {decodeURI(pathname).toLowerCase()}
        </h2>
      </div> */}

      {content.en.work.map((post: any) => (
        <article key={post.id} className="w-full">
          <Gallery
            images={post.meta.imageUrl}
            description={post.description}
            title={post.title}
            client={post.meta.client}
            href={post.href}
          />
        </article>
      ))}
    </div>
  );
}
