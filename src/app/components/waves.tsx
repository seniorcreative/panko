"use client";

import waves from "../../../public/wave-haikei.svg";

export default function Waves() {
  return (
    <section>
      <div
        className="min-h-48"
        style={{
          backgroundImage: `url(${waves.src})`,
          backgroundPositionY: "bottom",
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </section>
  );
}
