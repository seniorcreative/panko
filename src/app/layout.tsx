import type { Metadata } from "next";
import { Nunito_Sans, Varela, Aladin } from "next/font/google";

import "./globals.css";
import "./globalIcons.css";

import Link from "next/link";

import LanguageSwitcher from "../app/components/languageSwitcher";

const nunito = Nunito_Sans({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
const varela = Varela({ weight: "400", style: "normal", subsets: ["latin"] });
const aladin = Aladin({ weight: "400", style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panko Digital",
  description:
    "Melbourne, Sydney, Geelong freelance e-commerce, web and mobile software application developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={varela.className}>
        <nav className="fixed top-0 left-0 z-10 w-full px-8 py-2 shadow-opacity-50 shadow-sm bg-white bg-opacity-25 backdrop-blur">
          <div className="flex justify-between items-center">
            <a href="/" className={`${varela.className} text-black text-lg`}>
              panko
            </a>
            <ul className="list-none md:flex py-2">
              <li className="flex mx-4 items-center h-100">
                <Link
                  className={`${varela.className} text-gray-800 text-sm`}
                  href="/folio/all"
                >
                  work
                </Link>
              </li>
              <li className="flex mx-4 items-center h-100">
                <Link
                  className={`${varela.className} text-gray-800 text-sm`}
                  href="/#about"
                >
                  about
                </Link>
              </li>
              <li className="flex mx-4 items-center h-100">
                <Link
                  className={`${varela.className} text-gray-800 text-sm`}
                  href="/#services"
                >
                  services
                </Link>
              </li>
              <li className="flex mx-4 items-center h-100">
                <LanguageSwitcher></LanguageSwitcher>
              </li>
            </ul>
          </div>
        </nav>
        <main className="flex min-h-screen flex-col w-full">{children}</main>
        <footer className="py-12 px-8 bg-black text-white">
          <div className="container">
            <div className="grid">
              <div className="row-span-3">
                <h3>
                  <strong>Contact</strong>
                </h3>
                <ul className="list-none">
                  <li>
                    <a href="mailto:stesmi+panko@gmail.com?subject=Panko%20Enquiry">
                      Email us at Panko
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
