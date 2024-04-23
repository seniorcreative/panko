"use client";

import Image from "next/image";
import React from "react";

export default function Gallery({ images }: { images: string[] }) {
  return (
    <section className="relative p-10 overflow-auto">
      <div
        className="h-96 blur-lg opacity-80 flex-grow flex"
        style={{ backgroundImage: `url(${images[0]})` }}
      ></div>
      <div className="flex absolute top-10">
        {images.map((image: string) => (
          <div key={image} className="flex-1 me-2" style={{ width: "512px" }}>
            <Image src={image} width="512" height="512" alt="..." />
          </div>
        ))}
      </div>
    </section>
  );
}
