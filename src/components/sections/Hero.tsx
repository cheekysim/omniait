"use client";

import { useEffect, useState } from "react";
import HeroSVG from "../HeroSVG";
import HeroSVGMobile from "../HeroSVGMobile";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-around text-sm flex h-full grow flex-col">
        <p className="text-center lg:text-9xl md:text-8xl text-6xl tracking-wide font-semibold">
          Omnia IT
          <a
            className="text-sm block text-primary"
            href="mailto:euan@omniait.co.uk"
          >
            Euan@omniait.co.uk
          </a>
        </p>
      </div>
      {isMobile ? <HeroSVGMobile /> : <HeroSVG />}
    </section>
  );
}
