"use client";

import AuroraBackground from "@/components/AuroraBackground";
import AboutCTA from "@/components/sections/AboutCTA";
import AboutHero from "@/components/sections/AboutHero";
import AboutServices from "@/components/sections/AboutServices";
import AboutStory from "@/components/sections/AboutStory";
import AboutTech from "@/components/sections/AboutTech";

export default function AboutPage() {
  return (
    <>
      <AuroraBackground />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutServices />
        <AboutTech />
        <AboutCTA />
      </main>
    </>
  );
}
