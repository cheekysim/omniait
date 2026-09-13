"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

const particles = Array.from({ length: 24 }, (_, index) => ({
  cx: ((index * 37) % 94) + 3,
  cy: ((index * 53) % 88) + 6,
  radius: index % 5 === 0 ? 1.1 : 0.65,
  duration: 9 + (index % 6) * 2,
  delay: (index % 7) * -1.4,
}));

export default function AuroraBackground() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const yShift = useTransform(scrollY, [0, 1400], [0, prefersReducedMotion ? 0 : -110]);
  const y = useSpring(yShift, { stiffness: 55, damping: 22, mass: 0.45 });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background"
      style={{ y }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.055),transparent_38%)]" />
      <motion.svg
        viewBox="0 0 1440 1080"
        preserveAspectRatio="xMidYMid slice"
        className="absolute -inset-[12%] size-[124%] opacity-80"
      >
        <defs>
          <filter id="aurora-blur" x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur stdDeviation="28" />
          </filter>
          <linearGradient id="aurora-light" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="rgba(255,255,255,0)" offset="0" />
            <stop stopColor="rgba(255,255,255,0.3)" offset="0.5" />
            <stop stopColor="rgba(251,146,60,0.16)" offset="1" />
          </linearGradient>
        </defs>
        <motion.g
          filter="url(#aurora-blur)"
          animate={prefersReducedMotion ? undefined : { x: [0, 55, -20, 0], y: [0, -18, 16, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M-140 290 C 160 85, 385 500, 710 285 S 1230 80, 1580 270" fill="none" stroke="url(#aurora-light)" strokeWidth="82" opacity="0.6" />
          <path d="M-160 700 C 120 475, 350 850, 660 650 S 1190 440, 1590 675" fill="none" stroke="url(#aurora-light)" strokeWidth="58" opacity="0.46" />
        </motion.g>
        <motion.g
          filter="url(#aurora-blur)"
          animate={prefersReducedMotion ? undefined : { x: [0, -40, 30, 0], y: [0, 22, -14, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M-100 480 C 190 300, 460 690, 745 470 S 1230 255, 1540 475" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="34" opacity="0.48" />
        </motion.g>
        {particles.map((particle, index) => (
          <motion.circle
            key={index}
            cx={particle.cx * 14.4}
            cy={particle.cy * 10.8}
            r={particle.radius}
            fill="white"
            initial={{ opacity: 0.12 }}
            animate={prefersReducedMotion ? { opacity: 0.12 } : { x: [0, index % 2 === 0 ? 14 : -14, 0], y: [0, -18, 0], opacity: [0.08, 0.38, 0.08] }}
            transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </motion.svg>
      <div className="absolute inset-0 bg-linear-to-b from-background/20 via-transparent to-background" />
    </motion.div>
  );
}
