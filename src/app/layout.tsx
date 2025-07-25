import type { Metadata } from "next";
import { Varela, Pacifico, Raleway } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import "./globalIcons.css";

import LanguageSwitcher from "../app/components/languageSwitcher";
import Footer from "../app/components/footer";
import Link from "next/link";
import LanguageContextProvider from "./contexts/languageContext";
import VisitorContextProvider from "./contexts/visitorContext";

const varela = Varela({ weight: "400", style: "normal", subsets: ["latin"] });
const pacifico = Pacifico({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
const raleway = Raleway({ weight: "400", style: "normal", subsets: ["latin"] });

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
              className="fixed top-0 left-0 w-full px-4 md:px-8 py-2 shadow-opacity-50 shadow-sm bg-white bg-opacity-50 backdrop-blur"
            >
              <div className="flex justify-between items-center">
                <Link
                  href="/"
                  className={`${varela.className} text-black text-lg`}
                  locale="zh-CN"
                >
                  <strong>Panko Digital | AI Engineer</strong>
                </Link>
                <LanguageSwitcher font={varela}></LanguageSwitcher>
              </div>
            </nav>
            <main className="flex min-h-screen flex-col w-full">
              {children}
            </main>
            <Footer fonts={[pacifico, raleway]}></Footer>
            <GoogleTagManager gtmId="G-XLHERYSSZ1" />
            <GoogleAnalytics gaId="G-XLHERYSSZ1" />
          </body>
        </html>
      </VisitorContextProvider>
    </LanguageContextProvider>
  );
}
