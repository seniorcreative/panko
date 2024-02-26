"use client";

import waves from "../../../public/waves.svg";

export default function Waves() {
  return (
    <section>
      <div
        className="min-h-56 invert"
        style={{
          backgroundImage: `url(${waves.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </section>
  );
}
