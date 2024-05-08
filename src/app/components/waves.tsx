"use client";

import waves from "../../../public/wave-haikei.svg";

export type wavesProps = {
  lighten?: boolean;
};

export default function Waves({ lighten }: wavesProps) {
  return (
    <section>
      <div
        className={`min-h-48 ${lighten ? "invert opacity-10" : "invert"}`}
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
