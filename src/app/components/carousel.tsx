"use client";
import { useEffect } from "react";
import { Carousel } from "flowbite";
import type {
  CarouselItem,
  CarouselOptions,
  CarouselInterface,
} from "flowbite";
import type { InstanceOptions } from "flowbite";
import Image from "next/image";
import React, { useRef } from "react";

export default function CarouselComponent() {
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const carouselItem1Ref = useRef<HTMLDivElement>(null);
  const carouselItem2Ref = useRef<HTMLDivElement>(null);
  const carouselPrevButtonRef = useRef<HTMLButtonElement>(null);
  const carouselNextButtonRef = useRef<HTMLButtonElement>(null);
  const carouselIndicator1Ref = useRef<HTMLButtonElement>(null);
  const carouselIndicator2Ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const items: CarouselItem[] = [
      {
        position: 0,
        el: carouselItem1Ref?.current as HTMLElement,
      },
      {
        position: 1,
        el: carouselItem2Ref?.current as HTMLElement,
      },
    ];

    // object options with default values
    const options: CarouselOptions = {
      defaultPosition: 1,
      interval: 3000,

      indicators: {
        activeClasses: "bg-white dark:bg-gray-800",
        inactiveClasses:
          "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
        items: [
          {
            position: 0,
            el: carouselIndicator1Ref?.current as HTMLElement,
          },
          {
            position: 1,
            el: carouselIndicator2Ref?.current as HTMLElement,
          },
        ],
      },

      // callback functions
      onNext: () => {
        console.log("next slider item is shown");
      },
      onPrev: () => {
        console.log("previous slider item is shown");
      },
      onChange: () => {
        console.log("new slider item has been shown");
      },
    };

    // instance options object
    const instanceOptions: InstanceOptions = {
      id: "carousel-example",
      override: true,
    };

    const carousel: CarouselInterface = new Carousel(
      carouselWrapperRef?.current,
      items,
      options,
      instanceOptions
    );
    carousel.cycle();
    // set event listeners for prev and next buttons
    //const $prevButton = document.getElementById("data-carousel-prev");
    // const $nextButton = document.getElementById("data-carousel-next");
    carouselPrevButtonRef?.current?.addEventListener("click", () => {
      carousel.prev();
    });
    carouselNextButtonRef?.current?.addEventListener("click", () => {
      carousel.next();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Carousel]);

  return (
    <div
      id="carousel-example"
      ref={carouselWrapperRef}
      className="relative w-full"
      data-carousel="slide"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        {/* <!-- Item 1 --> */}
        <div
          ref={carouselItem1Ref}
          className={`duration-700 ease-in-out`}
          data-carousel-item="active"
        >
          <Image
            src="/work/flux~4~1.jpg"
            width="1024"
            height="512"
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        {/* Item 2 */}
        <div
          ref={carouselItem2Ref}
          className={`duration-700 ease-in-out`}
          data-carousel-item
        >
          <Image
            src="/work/flux~4~2.jpg"
            width="1024"
            height="512"
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
        <button
          ref={carouselIndicator1Ref}
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          ref={carouselIndicator2Ref}
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
      </div>
      {/* <!-- Slider controls --> */}
      <button
        ref={carouselPrevButtonRef}
        type="button"
        className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        ref={carouselNextButtonRef}
        type="button"
        className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
