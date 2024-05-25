"use client";

import waves from "../../../public/wave-haikei.svg";

export type wavesProps = {
  lighten?: boolean;
  flipped?: boolean;
};

export default function Waves({ lighten, flipped }: wavesProps) {
  return (
    <section>
      <div
        className={`min-h-48 ${lighten ? "invert opacity-10" : "invert"} ${
          flipped ? "-scale-x-100" : ""
        }`}
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
