import type { Metadata } from "next";
import Script from "next/script";
import { Varela } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

import "./globals.css";
import "./globalIcons.css";

import Navigation from "./components/Navigation";
import Footer from "./components/footer";

const varela = Varela({ weight: "400", style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panko Digital — Web Software Development Geelong",
  description:
    "I help individuals, startups and businesses across Geelong and Australia launch products, fix what's broken, and make confident technology decisions — without big agency price tags. Web development, AI productionisation, LMS, CRM migrations. Based in Geelong.",
  openGraph: {
    title: "Panko Digital — Technology that works for you",
    description:
      "Web software development, AI productionisation, LMS course builds, CRM migrations, and technical consulting. Based in Geelong, serving Melbourne and Victoria.",
    url: "https://panko.digital",
    siteName: "Panko Digital",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panko Digital — Technology that works for you",
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
        {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
        {/* Google Ads gtag config — GoogleAnalytics above already loads the
            gtag.js library and defines window.gtag, so we only need to add
            the Ads config here for the conversion event to send to. */}
        {GOOGLE_ADS_ID && (
          <Script id="google-ads-config" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
          </Script>
        )}
      </body>
    </html>
  );
}
