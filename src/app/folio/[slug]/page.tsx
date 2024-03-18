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
      "Retro Galaga. I can remember having a wicked time smashing out the code for this in 6 days. It needed to be embedded into a larger marketing site. I was able to find all the original SFX online. It was not the full game and was not meant to be but it was a lot of fun and I later hosted it seperately with it's own scoreboard API.",
    date: "2010",
    category: { title: "Marketing", href: "#" },
    meta: {
      client: "Emote Digital",
      category: "Marketing Agency",
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
      <div className="bg-white mx-auto max-w-7xl p-6 lg:p-8">
        <div className="max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {decodeURI(pathname)}
          </h2>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-10">
          {posts.map((post) => (
            <article key={post.id} className="">
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
                  <time dateTime={post.date} className="text-slate-400">
                    {post.date}
                  </time>
                </div>
                <p className="w-3/4 mt-5 line-clamp-8 text-sm leading-6 text-slate-900">
                  {post.description}
                </p>
                <div className="w-full flex justify-end">
                  <small className="rounded-full bg-slate-300 px-3 py-1.5 text-slate-900">
                    {post.meta.client}
                  </small>
                </div>
              </section>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
