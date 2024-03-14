"use client";

import waves from "../../../public/wave-haikei.svg";

export type wavesProps = {
  inverted: boolean;
};

export default function Waves({ inverted }: wavesProps) {
  return (
    <section>
      <div
        className={`min-h-48 ${
          inverted
            ? "invert rotate-1 scale-x-125 scale-y-75 relative top-12"
            : ""
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
