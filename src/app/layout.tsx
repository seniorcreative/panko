import type { Metadata } from "next";
import { Varela, Pacifico, Raleway } from "next/font/google";
import { aldrich } from "./fonts";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import "./globalIcons.css";

import Link from "next/link";
import Image from "next/image";
import LanguageContextProvider from "./contexts/languageContext";
import VisitorContextProvider from "./contexts/visitorContext";

const varela = Varela({ weight: "400", style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Developer Who Makes Technology Simple - Panko",
  description:
    "Turn your ideas into websites and apps that actually work for your business. No confusing tech jargon - just clear communication, fair pricing, and results that help you succeed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageContextProvider>
      <VisitorContextProvider>
        <html lang="en">
          <body className={varela.className}>
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
                  <strong>Panko Digital | AI Engineer</strong>
                </Link>
                <a
                  href="#contact"
                  className="px-4 py-2 border-2 border-gray-800 text-gray-800 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all"
                >
                  Contact
                </a>
              </div>
            </nav>
            <main className="flex min-h-screen flex-col w-full">
              {children}
            </main>
            <GoogleTagManager gtmId="G-XLHERYSSZ1" />
            <GoogleAnalytics gaId="G-XLHERYSSZ1" />
          </body>
        </html>
      </VisitorContextProvider>
    </LanguageContextProvider>
  );
}
