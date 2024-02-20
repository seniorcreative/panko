import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex h-full">
        <Image
          className=""
          src="/Black logo - no background.png"
          alt="Panko Logo"
          width={281}
          height={317}
          priority
        />
      </div>
      <section className="h-1/2 w-full bg-white my-12 px-24 min-h-52">
        Section
      </section>
    </main>
  );
}
