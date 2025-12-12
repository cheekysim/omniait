"use client";

import { useEffect, useRef } from "react";

import Hero from "@/components/sections/hero";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.25;
    }
  }, []);

  return (
    <>
      <Hero />
      <section className="flex min-h-screen flex-col items-center justify-between">
        Test
      </section>
    </>
  );
}
