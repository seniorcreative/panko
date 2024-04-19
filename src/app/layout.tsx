import type { Metadata } from "next";
import Image from "next/image";
import {
  Inter,
  Press_Start_2P,
  Nunito_Sans,
  Roboto_Serif,
  Roboto_Slab,
} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const press_start = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});
const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Panko Digital",
  description:
    "Precision digital engineering for software projects and systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <nav className="fixed top-0 left-0 p4 w-full px-12 shadow-opacity-50 bg-opacity-50 backdrop-blur">
          <ul className="list-none flex">
            <li className="mr-8">
              <a href="/">
                <Image
                  className="relative"
                  src="/Black logo - no background.png"
                  alt="Panko Logo Mono"
                  width={70}
                  height={79}
                  priority
                />
              </a>
            </li>
            <li className="flex mx-4 items-center h-100">
              <a className="text-black uppercase" href="/about">
                About
              </a>
            </li>
          </ul>
        </nav>
        <main className="flex min-h-screen flex-col w-full">{children}</main>
      </body>
    </html>
  );
}
