import type { Metadata } from "next";
// import Image from "next/image";
import { Nunito_Sans, Press_Start_2P } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"], weight: "400", style: "normal" });
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
// const shareTech = Share_Tech({
//   subsets: ["latin"],
// });

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
        <nav className="fixed top-0 left-0 z-10 p-4 w-full px-12 shadow-opacity-50 bg-orange-500 bg-opacity-50 backdrop-blur">
          <ul className="list-none flex py-5">
            <li className="flex mx-4 items-center h-100">
              <a className="text-black uppercase" href="/">
                Work
              </a>
            </li>
            <li className="flex mx-4 items-center h-100">
              <a className="text-black uppercase" href="/about">
                About
              </a>
            </li>
            <li className="flex mx-4 items-center h-100">
              <a className="text-black uppercase" href="/about">
                AI Statement
              </a>
            </li>
            <li className="flex mx-4 items-center h-100">
              <a className="text-black uppercase" href="/about">
                Quantum
              </a>
            </li>
          </ul>
        </nav>
        <main className="flex min-h-screen flex-col w-full">{children}</main>
      </body>
    </html>
  );
}
