import type { Metadata } from "next";
// import Image from "next/image";
import { Nunito_Sans, Press_Start_2P, Varela_Round } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
const varela = Varela_Round({
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
      <body className={varela.className}>
        <nav className="fixed top-0 left-0 z-10 w-full px-8 py-2 shadow-opacity-50 shadow-sm bg-white bg-opacity-25 backdrop-blur">
          <div className="flex justify-between items-center">
            <a href="/" className={`${varela.className} text-black text-lg`}>
              panko
            </a>
            <ul className="list-none md:flex py-2">
              <li className="flex mx-4 items-center h-100">
                <Link
                  className={`${varela.className} text-gray-800 text-sm`}
                  href="/folio"
                >
                  work
                </Link>
              </li>
              <li className="flex mx-4 items-center h-100">
                <Link
                  className={`${varela.className} text-gray-800 text-sm`}
                  href="#about"
                >
                  about
                </Link>
              </li>
              <li className="flex mx-4 items-center h-100">
                <Link
                  className={`${varela.className} text-gray-800 text-sm`}
                  href="#services"
                >
                  services
                </Link>
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
                    <a href="mailto:stesmi+panko@gmail.com?subject=Panko%20Enquiry">
                      Email us at Panko
                    </a>
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
