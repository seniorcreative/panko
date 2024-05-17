"use client";

// import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getCurrentLocale } from "../../actions";

import Gallery from "../../components/gallery";
const content = require("../../data/content.json");

export default function Page() {
  // const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState("en-US");

  useEffect(() => {
    const getLocale = async () => {
      const locale = await getCurrentLocale();
      setCurrentLocale(locale);
    };
    getLocale();
  }, []);

  return (
    <div className="mt-24 mx-auto py-6 sm:py-6 w-full">
      {/* <div className="max-w-2xl lg:mx-0">
        <h2 className="text-xl font-bold sm:ps-2 tracking-tight text-white sm:text-xl">
          {decodeURI(pathname).toLowerCase()}
        </h2>
      </div> */}

      {content[currentLocale].work.map((post: any) => (
        <article key={post.id} className="w-full">
          <Gallery
            images={post.meta.imageUrl}
            description={post.description}
            title={post.title}
            client={post.meta.client}
            locale={currentLocale}
            href={post.href}
          />
        </article>
      ))}
    </div>
  );
}
