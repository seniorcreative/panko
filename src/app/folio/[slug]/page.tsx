"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";

const content = require("../../data/content.json");

export default function Page() {
  const pathname = usePathname();

  return (
    <>
      <div className="mt-24 py-6 sm:py-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl lg:mx-0">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-xl">
              {decodeURI(pathname)}
            </h2>
          </div>
        </div>
      </div>
      {content.en.work.map((post: any) => (
        <div
          key={post.id}
          className="rounded-lg my-4  bg-white mx-auto max-w-7xl p-12 lg:p-16"
        >
          <article className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {post.meta.imageUrl.map((img) => (
                <div key={img}>
                  <Image
                    src={img}
                    alt=""
                    width={700}
                    height={448}
                    className="rounded-2xl mb-4"
                  />
                </div>
              ))}
            </div>

            <section className="w-full">
              <div className="group flex justify-between align-middle">
                <h3 className="text-xl font-semibold leading-6 white group-hover:text-slate-900">
                  {post.title}
                </h3>
                <div>
                  <small className="px-3 text-xs text-slate-400">
                    {post.meta.client}
                  </small>
                  <time dateTime={post.date} className="text-xs text-slate-400">
                    {post.date}
                  </time>
                </div>
              </div>
              <p className="w-3/4 mt-5 line-clamp-1 text-sm leading-6 text-slate-900">
                {post.description}
              </p>
            </section>
          </article>
        </div>
      ))}
    </>
  );
}
