"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

/**
 * AuroraBackground — a full-page, motion-based backdrop for the About page.
 *
 * Deliberately distinct from GridBackground (grid + cursor glow): this one is a
 * slow, flowing "aurora" of soft blurred ribbons drifting over near-black, with
 * a handful of rising particle specks and a gentle scroll parallax.
 *
 * Performance: only transform/opacity are animated (GPU-friendly), and
 * prefers-reduced-motion collapses it to a static, dimmed layer.
 */

const RIBBONS: {
  cls: string;
  startX: number;
  x: number;
  y: number;
  opacity: [number, number];
  dur: number;
  delay: number;
}[] = [
  {
    cls: "h-[34vh] w-[130vw] bg-gradient-to-r from-transparent via-white/25 to-transparent",
    startX: -30,
    x: 160,
    y: 120,
    opacity: [0.12, 0.3],
    dur: 22,
    delay: 0,
  },
  {
    cls: "h-[26vh] w-[150vw] bg-gradient-to-r from-transparent via-white/20 to-transparent",
    startX: -80,
    x: 40,
    y: 240,
    opacity: [0.1, 0.24],
    dur: 28,
    delay: 2,
  },
  {
    cls: "h-[22vh] w-[120vw] bg-gradient-to-r from-transparent via-[rgba(255,168,110,0.16)] to-transparent",
    startX: -10,
    x: 200,
    y: 380,
    opacity: [0.08, 0.2],
    dur: 20,
    delay: 1,
  },
  {
    cls: "h-[20vh] w-[140vw] bg-gradient-to-r from-transparent via-white/14 to-transparent",
    startX: -60,
    x: -120,
    y: 520,
    opacity: [0.08, 0.18],
    dur: 34,
    delay: 4,
  },
];

// Deterministic particle field (positions repeat across reloads for SSR parity).
const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 71) % 100,
  top: (i * 53) % 100,
  cls: i % 2 === 0 ? "size-2" : "size-1",
  dur: 16 + (i % 5) * 4,
  delay: (i % 7) * 2.4,
}));

export default function AuroraBackground() {
  const prefersReduced = useReducedMotion();
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScroll();
  const yShift = useTransform(
    scrollY,
    [0, 1200],
    [0, prefersReduced ? 0 : -160]
  );
  const y = useSpring(yShift, { stiffness: 60, damping: 20, mass: 0.4 });

  const reduced = prefersReduced;

  return (
    <motion.div
      ref={parallaxRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ y }}
      aria-hidden="true"
    >
      {/* Flowing aurora ribbons */}
      {RIBBONS.map((r, i) => (
        <motion.div
          key={`r${i}`}
          className={`absolute top-[-8vh] -rotate-6 blur-3xl ${r.cls}`}
          style={{ left: `${r.startX}vw` }}
          initial={reduced ? undefined : { top: r.y }}
          animate={
            reduced
              ? { opacity: 0 }
              : {
                  x: [0, r.x],
                  top: [r.y, r.y + 60, r.y],
                  opacity: r.opacity,
                }
          }
          transition={
            reduced
              ? { duration: 0 }
              : {
                  x: {
                    duration: r.dur,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                  top: {
                    duration: r.dur * 1.6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: r.delay,
                  },
                  opacity: {
                    duration: r.dur * 1.3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: r.delay,
                  },
                }
          }
        />
      ))}

      {/* Rising particle specks */}
      {!reduced &&
        PARTICLES.map((p, i) => (
          <motion.div
            key={`p${i}`}
            className={`absolute ${p.cls} rounded-full bg-white/60`}
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
            animate={{
              y: [-140, 0],
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              y: {
                duration: p.dur,
                repeat: Infinity,
                ease: "linear",
                delay: p.delay,
              },
              opacity: {
                duration: p.dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              },
            }}
          />
        ))}

      {/* Soft global vignette so the glows stay moody, never washed out */}
      <div className="absolute inset-0 bg-radial-[circle] from-transparent via-transparent to-black/70" />
    </motion.div>
  );
}