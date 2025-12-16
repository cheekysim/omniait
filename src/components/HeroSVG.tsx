"use client";

import { motion, Variants } from "motion/react";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.1;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.2, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function HeroSVG() {
  return (
    <svg
      viewBox="0 0 400 225"
      className="absolute inset-0 h-screen w-full mx-auto"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Top Left Line */}
      <motion.line
        className="stroke-white"
        x1="50"
        y1="0"
        x2="100"
        y2="60"
        strokeLinecap="round"
        fill="transparent"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />

      {/* Top Left Small Circle */}
      <motion.circle
        className="stroke-primary"
        cx="70"
        cy="50"
        r="3"
        fill="transparent"
        strokeWidth="1"
        strokeLinecap="round"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />

      {/* Center Concentric Circles */}
      <motion.circle
        className="stroke-white"
        cx="130"
        cy="80"
        r="20"
        fill="transparent"
        strokeWidth="1"
        strokeLinecap="round"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />
      <motion.circle
        className="stroke-white"
        cx="130"
        cy="80"
        r="16"
        fill="transparent"
        strokeWidth="1"
        strokeLinecap="round"
        variants={draw}
        custom={2}
        initial="hidden"
        animate="visible"
      />
      <motion.circle
        className="stroke-white"
        cx="130"
        cy="80"
        r="12"
        fill="transparent"
        strokeWidth="1"
        strokeLinecap="round"
        variants={draw}
        custom={3}
        initial="hidden"
        animate="visible"
      />
      <motion.circle
        className="stroke-white"
        cx="130"
        cy="80"
        r="8"
        fill="transparent"
        strokeWidth="1"
        strokeLinecap="round"
        variants={draw}
        custom={4}
        initial="hidden"
        animate="visible"
      />
      <motion.circle
        className="stroke-white"
        cx="130"
        cy="80"
        r="4"
        fill="transparent"
        strokeWidth="1"
        strokeLinecap="round"
        variants={draw}
        custom={5}
        initial="hidden"
        animate="visible"
      />

      {/* Middle Left Line */}
      <motion.line
        className="stroke-white"
        x1="10"
        y1="100"
        x2="10"
        y2="120"
        strokeLinecap="round"
        fill="transparent"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />

      {/* Bottom Wavy Lines - Accent */}
      <motion.path
        className="stroke-accent"
        d="M0 80 Q40 70 60 80 T60 140 T100 140 T150 140 T170 180 T200 225"
        fill="transparent"
        strokeLinecap="round"
        strokeWidth="1"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />
      {/* Bottom Wavy Lines - White */}
      <motion.path
        className="stroke-white"
        d="M0 140 Q40 120 60 150 T100 180 T150 160 T230 180 T250 225"
        fill="transparent"
        strokeLinecap="round"
        strokeWidth="1"
        variants={draw}
        custom={4}
        initial="hidden"
        animate="visible"
      />

      {/* Bottom Left X */}
      <motion.line
        className="stroke-primary"
        x1="40"
        y1="180"
        x2="45"
        y2="185"
        fill="transparent"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />
      <motion.line
        className="stroke-primary"
        x1="45"
        y1="180"
        x2="40"
        y2="185"
        fill="transparent"
        variants={draw}
        custom={3}
        initial="hidden"
        animate="visible"
      />

      {/* Top Wavy Lines - Accent */}
      <motion.path
        className="stroke-accent"
        d="M250 0 Q250 50 280 60 T320 50 T360 50 T400 80"
        fill="transparent"
        strokeLinecap="round"
        strokeWidth="1"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />

      {/* Top Wavy Lines - White */}
      <motion.path
        className="stroke-white"
        d="M290 0 Q270 50 290 80 T330 100 T400 120"
        fill="transparent"
        strokeLinecap="round"
        strokeWidth="1"
        variants={draw}
        custom={4}
        initial="hidden"
        animate="visible"
      />

      {/* Top Right X */}
      <motion.line
        className="stroke-primary"
        x1="340"
        y1="60"
        x2="345"
        y2="65"
        fill="transparent"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />
      <motion.line
        className="stroke-primary"
        x1="345"
        y1="60"
        x2="340"
        y2="65"
        fill="transparent"
        variants={draw}
        custom={3}
        initial="hidden"
        animate="visible"
      />

      {/* Bottom Right Line */}
      <motion.line
        className="stroke-white"
        x1="400"
        y1="180"
        x2="360"
        y2="140"
        strokeLinecap="round"
        fill="transparent"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />

      {/* Bottom Right Small Circle */}
      <motion.circle
        className="stroke-primary"
        cx="380"
        cy="180"
        r="3"
        fill="transparent"
        strokeWidth="1"
        strokeLinecap="round"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />

      {/* Horizontal Lines */}
      <motion.line
        className="stroke-white"
        x1="280"
        y1="160"
        x2="340"
        y2="160"
        strokeLinecap="round"
        fill="transparent"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />
      <motion.line
        className="stroke-white"
        x1="340"
        y1="165"
        x2="280"
        y2="165"
        strokeLinecap="round"
        strokeDashoffset="1.3"
        fill="transparent"
        variants={draw}
        custom={2}
        initial="hidden"
        animate="visible"
      />
      <motion.line
        className="stroke-white"
        x1="280"
        y1="170"
        x2="340"
        y2="170"
        strokeLinecap="round"
        fill="transparent"
        variants={draw}
        custom={4}
        initial="hidden"
        animate="visible"
      />
      <motion.line
        className="stroke-white"
        x1="340"
        y1="175"
        x2="280"
        y2="175"
        strokeLinecap="round"
        strokeDashoffset="1.3"
        fill="transparent"
        variants={draw}
        custom={6}
        initial="hidden"
        animate="visible"
      />
    </svg>
  );
}
