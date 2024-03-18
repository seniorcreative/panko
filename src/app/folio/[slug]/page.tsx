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
      client: "Emote Digital Melbourne",
      category: "Marketing Agency",
      href: "#",
      imageUrl: [
        "/work/carltonnaturalblonde~4~1.jpg",
        "/work/carltonnaturalblonde~4~4.jpg",
      ],
    },
  },
  {
    id: 2,
    title: "SLSA Surf Lifesaving Squad",
    href: "#",
    description:
      "Teamed up with this cool Sydney agency, and went to what is arguably the best office in Australia, the HQ of SLSA at Bondi Beach. When I made these games I decided to focus on some more hardcore software engineering principles. So I read a lot about MVC design patterns and that was fully utilised throughout the codebase. I think as the project code scaled it paid dividends even though it felt slower at first.",
    date: "2012",
    category: { title: "Marketing", href: "#" },
    meta: {
      client: "Ink Project Sydney",
      category: "Marketing Agency",
      href: "#",
      imageUrl: ["/work/slsa_games~10~1.jpg", "/work/slsa_games~10~3.jpg"],
    },
  },
  // More posts...
];

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
      {posts.map((post) => (
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
