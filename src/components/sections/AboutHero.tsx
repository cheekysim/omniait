"use client";

import { motion, useReducedMotion } from "motion/react";

import BackHome from "@/components/BackHome";

const title = "About Us".split("");

export default function AboutHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative z-10 flex min-h-[76dvh] items-center justify-center overflow-hidden px-6 pt-16">
      <BackHome />
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-sm font-semibold tracking-[0.24em] text-primary uppercase"
        >
          Nice to meet you
        </motion.p>
        <h1 className="text-6xl font-semibold tracking-tight sm:text-8xl md:text-9xl">
          {title.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              className="inline-block"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 52, rotateX: prefersReducedMotion ? 0 : -70 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ type: "spring", stiffness: 165, damping: 18, delay: 0.22 + index * 0.06 }}
            >
              {letter === " " ? "\u00a0" : letter}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.78 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl"
        >
          We build websites and web applications that are fast, clear, and genuinely
          useful &mdash; so your business comes across online the way it deserves to.
        </motion.p>
      </div>
      <motion.svg viewBox="0 0 200 200" className="absolute bottom-8 right-[8%] hidden size-40 text-white/35 md:block" aria-hidden="true">
        <motion.circle cx="100" cy="100" r="66" fill="none" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 7" initial={{ pathLength: 0 }} animate={{ pathLength: 1, rotate: prefersReducedMotion ? 0 : 360 }} transition={{ pathLength: { duration: 1.6 }, rotate: { duration: 20, repeat: Infinity, ease: "linear" } }} style={{ transformOrigin: "50% 50%" }} />
        <motion.path d="M36 118 C63 45 137 45 164 118" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.2, delay: 0.7 }} />
        <motion.circle cx="164" cy="118" r="4" fill="currentColor" animate={prefersReducedMotion ? undefined : { scale: [1, 1.45, 1] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} />
      </motion.svg>
    </section>
  );
}
