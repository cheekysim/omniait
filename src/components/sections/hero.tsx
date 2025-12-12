"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.25;
    }
  }, []);

  return (
    <section className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-around font-8bit text-sm flex h-full grow">
        <p className="text-center lg:text-9xl md:text-8xl text-6xl tracking-wide">
          Omnia IT
        </p>
      </div>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
      >
        <source src="/VHSGlitchEffect.mp4" type="video/mp4" />
      </video>
      <Image
        src="/crv_monitor.png"
        alt="CRV Monitor"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-15 h-full w-full object-cover"
      />
    </section>
  );
}
