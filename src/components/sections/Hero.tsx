"use client";

import HeroSVG from "../HeroSVG";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-around text-sm flex h-full grow">
        <p className="text-center lg:text-9xl md:text-8xl text-6xl tracking-wide font-semibold">
          Omnia IT
        </p>
      </div>
      <HeroSVG />
    </section>
  );
}
