"use client";

import { motion, useReducedMotion } from "motion/react";

import BackHome from "../BackHome";

const TITLE: { word: string; accent?: boolean }[] = [
  { word: "About" },
  { word: "Us", accent: true },
];

export default function AboutHero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-between">
      <BackHome />

      <div className="relative z-10 w-full max-w-5xl items-center justify-around text-sm flex h-full grow flex-col gap-8">
        {/* Looping orbit ornament */}
        <div className="h-24 w-24 hidden sm:grid place-items-center">
          {reduced ? (
            <svg viewBox="0 0 100 100" className="size-24 text-white">
              <circle
                className="stroke-primary"
                cx="50"
                cy="50"
                r="38"
                fill="none"
                strokeWidth="1.5"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 100 100" className="size-24 text-white">
              {/* Breathing ring — draws in, then unwinds */}
              <motion.circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                strokeWidth="1.5"
                className="stroke-primary"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1] }}
                transition={{
                  pathLength: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                }}
              />
              {/* Orbiting dot */}
              <motion.g
                animate={{ rotate: 360 }}
                transition={{
                  rotate: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                style={{ transformOrigin: "50px 50px" }}
              >
                <circle cx="50" cy="12" r="3" fill="currentColor" />
              </motion.g>
            </svg>
          )}
        </div>

        {/* Title — words rise and fade in on load */}
        <h1 className="w-full text-center tracking-wide font-semibold lg:text-9xl md:text-8xl text-6xl">
          {TITLE.map((t, i) => (
            <motion.span
              key={i}
              className={t.accent ? "text-primary" : "text-white"}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { duration: 0.7, delay: i * 0.18, ease: "easeOut" },
                y: { type: "spring", stiffness: 140, damping: 18, delay: i * 0.18 },
              }}
            >
              {t.word}
              {i === 0 ? "\u00a0" : ""}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          className="text-center text-white text-lg max-w-xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          The independent web agency behind the sites you{" "}
          <span className="text-primary">already love</span> — built in South
          Wales.
        </motion.p>
      </div>
    </section>
  );
}