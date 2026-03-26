import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Older Work | Panko Digital",
  description:
    "A selection of past web development and app projects from Panko Digital.",
  alternates: {
    canonical: "https://panko.digital/folio",
  },
};

export default function FolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
