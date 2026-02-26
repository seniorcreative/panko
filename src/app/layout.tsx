import type { Metadata } from "next";
import { Varela } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import "./globalIcons.css";

import Navigation from "./components/Navigation";
import Footer from "./components/footer";

const varela = Varela({ weight: "400", style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Panko Digital — Web Development, AI, LMS & CRM Services | Geelong & Melbourne",
  description:
    "I help businesses launch products, modernise systems, and make technology decisions with confidence. Web development, AI productionisation, LMS, CRM migrations. Based in Geelong.",
  openGraph: {
    title: "Panko Digital — Technology that works for your business",
    description:
      "Web development, AI productionisation, LMS course builds, CRM migrations, and technical consulting. Based in Geelong, serving Melbourne and Victoria.",
    url: "https://panko.digital",
    siteName: "Panko Digital",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panko Digital — Technology that works for your business",
    description:
      "Web development, AI productionisation, LMS course builds, CRM migrations, and technical consulting.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
    <html lang="en">
      <body className={varela.className}>
        <Navigation />
        <main className="flex min-h-screen flex-col w-full">{children}</main>
        <Footer />
        <GoogleTagManager gtmId="G-XLHERYSSZ1" />
        <GoogleAnalytics gaId="G-XLHERYSSZ1" />
      </body>
    </html>
  );
}
