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
      className="fixed top-0 left-0 w-full px-4 md:px-8 py-4 bg-white/80 backdrop-blur-md"
    >
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className={`${aldrich.className} text-black text-lg flex items-center hover:opacity-80 transition-opacity`}
        >
          <div className="w-14 h-14 mr-3 flex items-center justify-center shadow-lg rounded-full bg-black">
            <Image
              src="/animated-loop-circle.svg"
              alt="Panko Logo"
              width={32}
              height={32}
            />
          </div>
          <strong>
            Panko Digital | AI Engineer
            {isOnFolioPage && (
              <span className="hidden md:inline text-gray-500 font-light">
                {" "}
                | Older Work
              </span>
            )}
          </strong>
        </Link>
        <a
          href="/#contact"
          className="px-4 py-2 border-2 border-gray-800 text-gray-800 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
