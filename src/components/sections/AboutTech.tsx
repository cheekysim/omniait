"use client";

import { motion, useReducedMotion } from "motion/react";

const TAGS = [
  "Next.js",
  "SvelteKit",
  "Vercel",
  "TypeScript",
  "Tailwind CSS",
  "Responsive Design",
  "SEO",
  "Node.js",
  "Git & GitHub",
];

export default function AboutTech() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[45vh] px-6 md:px-10 overflow-hidden py-24">
      <p className="text-primary text-sm tracking-widest uppercase">The toolkit</p>
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
        Clean, modern, fast
      </h2>

      {/* Infinite marquee */}
      <div className="relative w-full max-w-5xl mt-12 overflow-hidden" aria-hidden="true">
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 bg-radial-[circle] from-transparent to-background" />
        <motion.div
          className="flex gap-4 whitespace-nowrap w-max"
          style={{ x: reduced ? 0 : "-50%" }}
          animate={reduced ? undefined : { x: ["0%", "-50%"] }}
          transition={
            reduced
              ? { duration: 0 }
              : { x: { duration: 26, repeat: Infinity, ease: "linear" } }
          }
        >
          {[...TAGS, ...TAGS].map((tag, i) => (
            <span
              key={i}
              className="rounded-full border border-border px-4 py-2 text-base whitespace-nowrap text-white/80"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}