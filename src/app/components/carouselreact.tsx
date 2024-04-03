"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";

export default function CarouselReactComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <Image
          key="img1"
          src="/work/flux~4~1.jpg"
          width="1024"
          height="512"
          alt="..."
        />
        <Image
          key="img2"
          src="/work/flux~4~2.jpg"
          width="1024"
          height="512"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
