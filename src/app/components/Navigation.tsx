"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { aldrich } from "../fonts";

export default function Navigation() {
  const pathname = usePathname();
  const isOnFolioPage = pathname === "/folio";

  return (
    <nav
      style={{ zIndex: 9999 }}
      className="fixed top-0 left-0 w-full px-2 md:px-8 py-4 bg-white/80 backdrop-blur-md"
    >
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className={`${aldrich.className} text-black text-lg flex items-center hover:opacity-80 transition-opacity`}
        >
          <div className="w-12 h-12 xs:w-14 xs:h-14 mr-2 xs:mr-3 flex items-center justify-center shadow-lg rounded-full bg-black flex-shrink-0">
            <Image
              src="/animated-loop-circle.svg"
              alt="Panko Logo"
              width={28}
              height={28}
              className="xs:w-8 xs:h-8"
            />
          </div>
          <strong style={{ marginTop: "6px", lineHeight: "1em" }}>
            Panko Digital
            {isOnFolioPage && (
              <span className="hidden md:inline text-gray-500 font-light">
                {" "}
                | Older Work
              </span>
            )}
          </strong>
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            href="/#faq"
            className="py-2 text-gray-800 text-sm md:text-md font-semibold underline transition-all"
          >
            FAQ
          </Link>
          <Link
            href="/#testimonials"
            className="md:px-4 py-2 text-gray-800 text-sm md:text-md font-semibold underline ransition-all"
          >
            Testimonials
          </Link>
          <Link
            href="/#contact"
            className="px-2 md:px-4 py-1 md:py-2 border-2 text-sm md:text-md  border-gray-800 text-gray-800 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
