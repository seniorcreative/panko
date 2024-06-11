"use client";

export type wavesProps = {
  lighten?: boolean;
  flipped?: boolean;
};

export default function Waves({ lighten, flipped }: wavesProps) {
  return (
    <section>
      <div
        className={`${flipped ? "-scale-x-100" : ""} ${
          lighten ? "" : "bg-slate-200"
        }`}
      >
        <svg
          id="visual"
          viewBox="0 0 1200 120"
          width="100%"
          height="25%"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path
            d="M0 218L16.7 212.3C33.3 206.7 66.7 195.3 100 201.3C133.3 207.3 166.7 230.7 200 233.2C233.3 235.7 266.7 217.3 300 203.2C333.3 189 366.7 179 400 183.8C433.3 188.7 466.7 208.3 500 212C533.3 215.7 566.7 203.3 600 207.5C633.3 211.7 666.7 232.3 700 242.8C733.3 253.3 766.7 253.7 800 247.7C833.3 241.7 866.7 229.3 900 225.3C933.3 221.3 966.7 225.7 1000 223.2C1033.3 220.7 1066.7 211.3 1100 203.3C1133.3 195.3 1166.7 188.7 1183.3 185.3L1200 182L1200 301L1183.3 301C1166.7 301 1133.3 301 1100 301C1066.7 301 1033.3 301 1000 301C966.7 301 933.3 301 900 301C866.7 301 833.3 301 800 301C766.7 301 733.3 301 700 301C666.7 301 633.3 301 600 301C566.7 301 533.3 301 500 301C466.7 301 433.3 301 400 301C366.7 301 333.3 301 300 301C266.7 301 233.3 301 200 301C166.7 301 133.3 301 100 301C66.7 301 33.3 301 16.7 301L0 301Z"
            className={lighten ? "fill-slate-200" : "fill-black"}
            stroke-linecap="round"
            stroke-linejoin="miter"
            transform="translate(0, -180)"
          ></path>
        </svg>
      </div>
    </section>
  );
}
