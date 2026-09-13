"use client";

import AuroraBackground from "@/components/AuroraBackground";

import AboutHero from "@/components/sections/AboutHero";
import AboutStory from "@/components/sections/AboutStory";
import AboutServices from "@/components/sections/AboutServices";
import AboutTech from "@/components/sections/AboutTech";
import AboutCTA from "@/components/sections/AboutCTA";

export default function About() {
  return (
    <>
      <AuroraBackground />

      <AboutHero />
      <AboutStory />
      <AboutServices />
      <AboutTech />
      <AboutCTA />
    </>
  );
}