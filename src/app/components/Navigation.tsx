"use client";

import Link from "next/link";
import Image from "next/image";
import { aldrich } from "../fonts";

export default function Navigation() {
  return (
    <nav
      style={{ zIndex: 9999 }}
      className="fixed top-0 left-0 w-full px-6 md:px-12 lg:px-24 py-5 bg-white/90 backdrop-blur-md border-b border-gray-100"
    >
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
            href="/showcase"
            className={`${aldrich.className} text-gray-500 text-sm hover:text-gray-900 transition-colors hidden md:block`}
          >
            Showcase
          </Link>
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
            href="/#contact"
            className={`${aldrich.className} px-5 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
