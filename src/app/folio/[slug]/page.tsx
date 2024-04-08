"use client";

import { usePathname } from "next/navigation";
import React from "react";

import CarouselReactComponent from "../../components/carouselreact";
const content = require("../../data/content.json");

export default function Page() {
  const pathname = usePathname();

  return (
    <div className="mt-24 mx-auto py-6 sm:py-6">
      {/* <div className="max-w-2xl lg:mx-0">
        <h2 className="text-xl font-bold sm:ps-2 tracking-tight text-white sm:text-xl">
          {decodeURI(pathname).toLowerCase()}
        </h2>
      </div> */}

      {content.en.work.map((post: any) => (
        <article key={post.id} className="mb-4 p-4">
          <h3 className="text-xl font-semibold leading-6 text-slate-900">
            {post.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <CarouselReactComponent images={post.meta.imageUrl} />
          </div>
          <section className="w-full mb-4">
            <p className="md:w-3/4 mt-2 line-clamp-5 text-sm leading-6 text-slate-900">
              {post.description}
            </p>
          </section>
          <small className="text-slate-900 text-sm">
            <strong>Client</strong> {post.meta.client}
          </small>
        </article>
      ))}
    </div>
  );
}
