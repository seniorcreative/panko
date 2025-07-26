import type { Metadata } from "next";
import { Varela, Pacifico, Raleway } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import "./globalIcons.css";

import LanguageContextProvider from "./contexts/languageContext";
import VisitorContextProvider from "./contexts/visitorContext";
import Navigation from "./components/Navigation";

const varela = Varela({ weight: "400", style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Business Web Developer Geelong | App Development Melbourne | Panko Digital",
  description:
    "Helping business owners in Geelong & Melbourne launch websites, fix technical issues & build apps that drive results. 24+ years experience with major brands. Technical co-pilot for your business.",
  openGraph: {
    title: "Business Web Developer Geelong | App Development Melbourne | Panko Digital",
    description: "Helping business owners in Geelong & Melbourne launch websites, fix technical issues & build apps that drive results. 24+ years experience with major brands.",
    url: "https://panko.digital",
    siteName: "Panko Digital",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Web Developer Geelong | App Development Melbourne | Panko Digital",
    description: "Helping business owners in Geelong & Melbourne launch websites, fix technical issues & build apps that drive results.",
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
            <GoogleTagManager gtmId="G-XLHERYSSZ1" />
            <GoogleAnalytics gaId="G-XLHERYSSZ1" />
          </body>
        </html>
      </VisitorContextProvider>
    </LanguageContextProvider>
  );
}
