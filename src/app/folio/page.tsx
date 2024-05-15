"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Page() {
  const pathname = usePathname();
  return (
    <section>
      <p>
        You&rsquo;re a bit short of the mark. Head on to a folio category eg{" "}
        <Link href={"/folio/E-commerce"}>E-commerce</Link>...
      </p>
    </section>
  );
}
