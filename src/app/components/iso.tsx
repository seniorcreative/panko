"use client";

import React from "react";
import IsoBg from "../../../public/Panko-Iso-Bg-Tile.png";

export default function Iso() {
  return (
    <section
      style={{
        backgroundImage: `url(${IsoBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
        height: "100vh",
      }}
      className="hover:animate-pulse"
    ></section>
  );
}
