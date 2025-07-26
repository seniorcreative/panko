import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Web Development Projects Geelong Melbourne | Panko Digital",
  description:
    "View web development and app projects for major brands like Kmart, BMW, Telstra. 24+ years creating websites and apps for business success in Geelong and Melbourne.",
};

export default function FolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}