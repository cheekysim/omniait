"use client";

import Hero from "@/components/sections/Hero";
import Description from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full h-2 bg-white"></div>
      <Description />
    </>
  );
}
