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
