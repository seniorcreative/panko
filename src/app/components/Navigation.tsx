"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { X } from "lucide-react";
import { aldrich } from "../fonts";

const PROMO_DISMISSED_KEY = "panko_promo_dismissed";

export default function Navigation() {
  const [promoDismissed, setPromoDismissed] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (localStorage.getItem(PROMO_DISMISSED_KEY) === "true") {
      setPromoDismissed(true);
    }
  }, []);

  // Keep --top-offset in sync with the actual rendered height of the nav (+ banner, if shown)
  // so page content padding never sits under or too far below the fixed header.
  useEffect(() => {
    const updateOffset = () => {
      const bannerHeight =
        !promoDismissed && bannerRef.current
          ? bannerRef.current.offsetHeight
          : 0;
      document.documentElement.style.setProperty(
        "--top-offset",
        `calc(6rem + ${bannerHeight}px)`,
      );
    };
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, [promoDismissed]);

  const dismissPromo = () => {
    setPromoDismissed(true);
    localStorage.setItem(PROMO_DISMISSED_KEY, "true");
  };

  const handlePromoClick = () => {
    sendGTMEvent({
      event: "promoBannerClick",
      value: "free_coworking_session",
    });
  };

  return (
    <div style={{ zIndex: 9999 }} className="fixed top-0 left-0 w-full">
      {!promoDismissed && (
        <div
          ref={bannerRef}
          className={`${aldrich.className} relative flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-gray-900 px-10 py-2.5 text-center text-sm text-white`}
        >
          <span>
            First 10 people to book get a{" "}
            <span className="font-semibold">
              free half-day co-working session
            </span>{" "}
            — I sit down and work alongside you
          </span>
          <Link
            href="/?promo=coworking#contact"
            onClick={handlePromoClick}
            className="whitespace-nowrap underline underline-offset-2 transition-colors hover:text-gray-200"
          >
            Claim your spot &rarr;
          </Link>
          <button
            type="button"
            onClick={dismissPromo}
            aria-label="Dismiss promo banner"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-white"
          >
            <X size={16} />
          </button>
        </div>
      )}
      <nav className="w-full px-6 md:px-12 lg:px-24 py-5 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className={`${aldrich.className} text-gray-900 text-lg flex items-center hover:opacity-70 transition-opacity`}
          >
            <div className="w-10 h-10 mr-3 flex items-center justify-center rounded-full bg-gray-900 flex-shrink-0">
              <Image
                src="/animated-loop-circle.svg"
                alt="Panko Logo"
                width={22}
                height={22}
              />
            </div>
            Panko
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/#services"
              className={`${aldrich.className} text-gray-500 text-sm hover:text-gray-900 transition-colors hidden md:block`}
            >
              Services
            </Link>
            <Link
              href="/#work"
              className={`${aldrich.className} text-gray-500 text-sm hover:text-gray-900 transition-colors hidden md:block`}
            >
              Work
            </Link>
            <Link
              href="/#testimonials"
              className={`${aldrich.className} text-gray-500 text-sm hover:text-gray-900 transition-colors hidden md:block`}
            >
              Testimonials
            </Link>
            <Link
              href="/#faq"
              className={`${aldrich.className} text-gray-500 text-sm hover:text-gray-900 transition-colors hidden md:block`}
            >
              FAQ
            </Link>
            <Link
              href="/#contact"
              className={`${aldrich.className} px-5 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
