"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";

const content = require("../../data/content.json");

export default function Page() {
  const pathname = usePathname();

  return (
    <div className="mt-24 mx-auto py-6 sm:py-6">
      <div className="max-w-2xl lg:mx-0">
        <h2 className="text-xl font-bold sm:ps-2 tracking-tight text-white sm:text-xl">
          {decodeURI(pathname).toLowerCase()}
        </h2>
      </div>

      {content.en.work.map((post: any) => (
        <article key={post.id} className="mb-4 p-4">
          <div className="flex w-full justify-between">
            <h3 className="text-xl font-semibold leading-6 text-slate-900">
              {post.title}
            </h3>
            <div className="text-end text-lg">
              <small className="px-3 text-slate-900">{post.meta.client}</small>
              <time dateTime={post.date} className="text-xs text-white">
                {post.date}
              </time>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {post.meta.imageUrl.map((img: any) => (
              <div key={img} className="flex justify-center">
                <Image
                  src={img}
                  alt=""
                  width={640}
                  height={320}
                  className="rounded-2xl mb-4"
                />
              </div>
            ))}
          </div>

          <section className="w-full">
            <p className="md:w-3/4 mt-2 line-clamp-2 text-lg leading-6 text-slate-900">
              {post.description}
            </p>
          </section>
        </article>
      ))}
    </div>
  );
}
