"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";

export default function CarouselReactComponent({
  images,
}: {
  images: string[];
}) {
  return (
    <div className="h-80 sm:h-80 xl:h-96">
      <Carousel slideInterval={4000 + Math.random() * 2000}>
        {images.map((image: string) => (
          <Image key={image} src={image} width="512" height="512" alt="..." />
        ))}
      </Carousel>
    </div>
  );
}
