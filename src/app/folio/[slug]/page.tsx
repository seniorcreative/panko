"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";

const posts = [
  {
    id: 1,
    title: "Carlton Natural Blonde",
    href: "#",
    description:
      "Retro galaga with original sound effect. Great times. Took 6 days to code.",
    date: "2010",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Panko Digital",
      role: "Marketing Website Game",
      href: "#",
      imageUrl: [
        "/work/carltonnaturalblonde~4~1.jpg",
        "/work/carltonnaturalblonde~4~4.jpg",
      ],
    },
  },
  // More posts...
];

export default function Page() {
  const pathname = usePathname();

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {decodeURI(pathname)}
          </h2>
          {/* <p className="mt-2 text-lg leading-8 text-slate-900">
            Learn how to grow your business with our expert advice.
          </p> */}
        </div>
        <div className="mx-auto mt-10 border-t border-gray-200 pt-10">
          {posts.map((post) => (
            <article key={post.id} className="">
              <div className="grid grid-cols-2 gap-4">
                {post.author.imageUrl.map((img) => (
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

              <section className="w-1/2">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-white">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-slate-900 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-slate-900">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-900">
                    {post.description}
                  </p>
                </div>
              </section>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
