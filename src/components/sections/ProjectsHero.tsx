"use client";
import BackHome from "../BackHome";

export default function Hero() {
  return (
    <section className="flex min-h-64 flex-col items-center justify-between relative">
      <BackHome />
      <div className="z-10 w-full max-w-5xl items-center justify-around text-sm flex h-full grow">
        <p className="text-center lg:text-8xl md:text-6xl text-4xl tracking-wide font-semibold">
          Projects
        </p>
      </div>
    </section>
  );
}
