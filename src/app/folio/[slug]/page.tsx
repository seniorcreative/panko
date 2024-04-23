"use client";

import { usePathname } from "next/navigation";
import React from "react";

// import CarouselReactComponent from "../../components/carouselreact"
import Gallery from "../../components/gallery";
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
          <div className="my-4 align-middle">
            <div className="">
              <h3 className="text-xl font-semibold leading-6 text-slate-900">
                {post.title}
              </h3>
              {post.href && (
                <div className="w-full my-2">
                  Launch this
                  <a
                    href={`/${post.href}`}
                    role="Button"
                    className="ps-2 text underline"
                    title={`View ${post.title} in a new window`}
                  >
                    {post.href}
                  </a>
                </div>
              )}
            </div>
          </div>

          <Gallery images={post.meta.imageUrl} />

          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 align-middle">
            <section className="w-full mt-8 col-span-2">
              <p className="m-4 text-md leading-6 border-t-2 border-slate-300 pt-4  text-slate-900">
                {post.description}
              </p>
              <small className="text-slate-900 text-sm ms-4 ps-4 border-s-2 border-slate-300">
                For&nbsp;<strong>{post.meta.client}</strong>
              </small>
            </section>
          </div>
        </article>
      ))}
    </div>
  );
}
