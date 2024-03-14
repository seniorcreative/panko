"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function Page() {
  const pathname = usePathname();
  return (
    <section className="mx-auto container my-24">
      <p>Category: {decodeURI(pathname)}</p>
    </section>
  );
}
