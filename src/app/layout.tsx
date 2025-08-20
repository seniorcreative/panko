import type { Metadata } from "next";
import { Varela, Pacifico, Raleway } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import "./globalIcons.css";

import LanguageContextProvider from "./contexts/languageContext";
import VisitorContextProvider from "./contexts/visitorContext";
import Navigation from "./components/Navigation";
import Footer from "./components/footer";

const varela = Varela({ weight: "400", style: "normal", subsets: ["latin"] });
const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
const raleway = Raleway({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Digital Business Services Software Developer Geelong | Website & App Development Melbourne | Panko Digital",
  description:
    "Websites, apps, fixes—fast. Geelong developer with 20+ years’ experience. AI-powered, jargon-free, focused on one thing: growing your business.",
  openGraph: {
    title:
      "Digital Business Services Software Developer Geelong | Website & App Development Melbourne | Panko Digital",
    description:
      "Websites, apps, fixes—fast. Geelong developer with 20+ years’ experience. AI-powered, jargon-free, focused on one thing: growing your business.",
    url: "https://panko.digital",
    siteName: "Panko Digital",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Digital Business Services Software Developer Geelong | Website & App Development Melbourne | Panko Digital",
    description:
      "Websites, apps, fixes—fast. Geelong developer with 20+ years’ experience. AI-powered, jargon-free, focused on one thing: growing your business.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://panko.digital",
  },
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
            <Navigation />
            <main className="flex min-h-screen flex-col w-full">
              {children}
            </main>
            <Footer fonts={[pacifico, raleway]} />
            <GoogleTagManager gtmId="G-XLHERYSSZ1" />
            <GoogleAnalytics gaId="G-XLHERYSSZ1" />
          </body>
        </html>
      </VisitorContextProvider>
    </LanguageContextProvider>
  );
}
