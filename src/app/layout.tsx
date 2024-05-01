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
        <nav className="fixed top-0 left-0 z-10 w-full px-8 py-2 shadow-opacity-50 shadow-sm bg-white  bg-opacity-25 backdrop-blur">
          <div className="flex justify-between items-center">
            <a href="/" className="text-black font-bold">
              Panko
            </a>
            <ul className="list-none flex py-2">
              <li className="flex mx-4 items-center h-100">
                <a className="text-black" href="/folio">
                  Retrospective
                </a>
              </li>
              <li className="flex mx-4 items-center h-100">
                <a className="text-black" href="/about">
                  About
                </a>
              </li>
              <li className="flex mx-4 items-center h-100">
                <a className="text-black" href="/about">
                  AI Statement
                </a>
              </li>
              <li className="flex mx-4 items-center h-100">
                <a className="text-black" href="/about">
                  Quantum
                </a>
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
                    <a href="#">Email us at Panko</a>
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
