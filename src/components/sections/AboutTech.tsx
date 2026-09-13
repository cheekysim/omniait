"use client";

import { motion, useReducedMotion } from "motion/react";

const technologies = ["Next.js", "SvelteKit", "TypeScript", "Tailwind CSS", "Responsive Design", "SEO", "Vercel", "Zoho Email"];

export default function AboutTech() {
  const prefersReducedMotion = useReducedMotion();
  const tags = [...technologies, ...technologies];

  return (
    <section className="relative z-10 overflow-hidden border-y border-border/70 py-6">
      <motion.div className="flex w-max gap-4" animate={prefersReducedMotion ? undefined : { x: ["0%", "-50%"] }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}>
        {tags.map((technology, index) => <span key={`${technology}-${index}`} className="rounded-full border border-border bg-card/60 px-5 py-2 text-sm font-medium whitespace-nowrap text-muted-foreground backdrop-blur-sm">{technology}</span>)}
      </motion.div>
    </section>
  );
}
