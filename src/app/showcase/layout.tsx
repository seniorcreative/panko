import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showcase | Panko Digital",
  description:
    "A visual showcase of multimedia projects, experiments, and creative technology work by Panko Digital.",
};

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
