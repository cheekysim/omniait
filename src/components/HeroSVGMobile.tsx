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

export default function HeroSVGMobile() {
  return (
    <svg
      viewBox="0 0 728 600"
      className="absolute inset-0 h-screen w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Top Left Line */}
      <motion.line
        className="stroke-white"
        x1="0"
        y1="20"
        x2="170"
        y2="80"
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
        cx="110"
        cy="80"
        r="7"
        fill="transparent"
        strokeWidth="1"
        strokeLinecap="round"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />

      {/* Upper Center Shapes */}
      {/* Center Triangle */}
      <motion.path
        className="stroke-white"
        d="M364 60 L394 120 L334 120 Z"
        fill="transparent"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />

      {/* Center scattered circles */}
      <motion.circle
        className="stroke-primary"
        cx="320"
        cy="145"
        r="5"
        fill="transparent"
        strokeWidth="1"
        variants={draw}
        custom={1}
        initial="hidden"
        animate="visible"
      />
      <motion.circle
        className="stroke-accent"
        cx="430"
        cy="70"
        r="4"
        fill="transparent"
        strokeWidth="1"
        variants={draw}
        custom={2}
        initial="hidden"
        animate="visible"
      />
      <motion.circle
        className="stroke-white"
        cx="350"
        cy="250"
        r="3"
        fill="transparent"
        strokeWidth="1"
        variants={draw}
        custom={3}
        initial="hidden"
        animate="visible"
      />

      {/* Diagonal lines in center */}
      <motion.line
        className="stroke-primary"
        x1="320"
        y1="145"
        x2="380"
        y2="260"
        strokeWidth="1"
        strokeLinecap="round"
        variants={draw}
        custom={1}
        initial="hidden"
        animate="visible"
      />

      {/* Top Right Line */}
      <motion.line
        className="stroke-white"
        x1="768"
        y1="40"
        x2="559"
        y2="100"
        strokeLinecap="round"
        fill="transparent"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />

      {/* Top Right Small Circle */}
      <motion.circle
        className="stroke-primary"
        cx="607"
        cy="120"
        r="7"
        fill="transparent"
        strokeWidth="1"
        strokeLinecap="round"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />

      {/* Left Wavy Line - Accent */}
      <motion.path
        className="stroke-accent"
        d="M0 180 Q30 160 60 180 T100 220 T100 260"
        fill="transparent"
        strokeLinecap="round"
        strokeWidth="1"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />

      {/* Left Wavy Line - White */}
      <motion.path
        className="stroke-white"
        d="M0 260 Q25 240 50 270 T90 310"
        fill="transparent"
        strokeLinecap="round"
        strokeWidth="1"
        variants={draw}
        custom={4}
        initial="hidden"
        animate="visible"
      />

      {/* Left X Mark */}
      <motion.line
        className="stroke-primary"
        x1="75"
        y1="290"
        x2="85"
        y2="300"
        fill="transparent"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />
      <motion.line
        className="stroke-primary"
        x1="85"
        y1="290"
        x2="75"
        y2="300"
        fill="transparent"
        variants={draw}
        custom={3}
        initial="hidden"
        animate="visible"
      />

      {/* Center Horizontal Lines */}
      <motion.line
        className="stroke-white"
        x1="291"
        y1="350"
        x2="437"
        y2="350"
        strokeLinecap="round"
        fill="transparent"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />
      <motion.line
        className="stroke-white"
        x1="437"
        y1="358"
        x2="291"
        y2="358"
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
        x1="291"
        y1="366"
        x2="437"
        y2="366"
        strokeLinecap="round"
        fill="transparent"
        variants={draw}
        custom={4}
        initial="hidden"
        animate="visible"
      />
      <motion.line
        className="stroke-white"
        x1="437"
        y1="374"
        x2="291"
        y2="374"
        strokeLinecap="round"
        strokeDashoffset="1.3"
        fill="transparent"
        variants={draw}
        custom={6}
        initial="hidden"
        animate="visible"
      />

      {/* Small circles around center */}
      <motion.circle
        className="stroke-accent"
        cx="220"
        cy="325"
        r="4"
        fill="transparent"
        strokeWidth="1"
        variants={draw}
        custom={1}
        initial="hidden"
        animate="visible"
      />
      <motion.circle
        className="stroke-primary"
        cx="520"
        cy="250"
        r="3"
        fill="transparent"
        strokeWidth="1"
        variants={draw}
        custom={2}
        initial="hidden"
        animate="visible"
      />
      <motion.circle
        className="stroke-white"
        cx="340"
        cy="340"
        r="4"
        fill="transparent"
        strokeWidth="1"
        variants={draw}
        custom={3}
        initial="hidden"
        animate="visible"
      />
      <motion.circle
        className="stroke-accent"
        cx="280"
        cy="410"
        r="3"
        fill="transparent"
        strokeWidth="1"
        variants={draw}
        custom={4}
        initial="hidden"
        animate="visible"
      />
      <motion.circle
        className="stroke-primary"
        cx="445"
        cy="430"
        r="3"
        fill="transparent"
        strokeWidth="1"
        variants={draw}
        custom={5}
        initial="hidden"
        animate="visible"
      />

      {/* Small connecting lines */}
      <motion.line
        className="stroke-accent"
        x1="220"
        y1="325"
        x2="280"
        y2="410"
        strokeWidth="1"
        strokeLinecap="round"
        variants={draw}
        custom={2}
        initial="hidden"
        animate="visible"
      />
      <motion.line
        className="stroke-primary"
        x1="520"
        y1="250"
        x2="445"
        y2="430"
        strokeWidth="1"
        strokeLinecap="round"
        variants={draw}
        custom={3}
        initial="hidden"
        animate="visible"
      />

      {/* Right Wavy Line - Accent */}
      <motion.path
        className="stroke-accent"
        d="M728 380 Q698 400 668 380 T628 420 T628 460"
        fill="transparent"
        strokeLinecap="round"
        strokeWidth="1"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />

      {/* Right Wavy Line - White */}
      <motion.path
        className="stroke-white"
        d="M728 310 Q703 330 678 300 T638 340"
        fill="transparent"
        strokeLinecap="round"
        strokeWidth="1"
        variants={draw}
        custom={4}
        initial="hidden"
        animate="visible"
      />

      {/* Right X Mark */}
      <motion.line
        className="stroke-primary"
        x1="655"
        y1="480"
        x2="665"
        y2="490"
        fill="transparent"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />
      <motion.line
        className="stroke-primary"
        x1="665"
        y1="480"
        x2="655"
        y2="490"
        fill="transparent"
        variants={draw}
        custom={3}
        initial="hidden"
        animate="visible"
      />

      {/* Center Diamond Shape */}
      <motion.path
        className="stroke-accent"
        d="M364 450 L390 480 L364 510 L338 480 Z"
        fill="transparent"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        variants={draw}
        custom={1}
        initial="hidden"
        animate="visible"
      />

      {/* Center scattered circles */}
      <motion.circle
        className="stroke-primary"
        cx="330"
        cy="525"
        r="4"
        fill="transparent"
        strokeWidth="1"
        variants={draw}
        custom={2}
        initial="hidden"
        animate="visible"
      />
      <motion.circle
        className="stroke-white"
        cx="410"
        cy="550"
        r="5"
        fill="transparent"
        strokeWidth="1"
        variants={draw}
        custom={3}
        initial="hidden"
        animate="visible"
      />
      <motion.circle
        className="stroke-accent"
        cx="370"
        cy="575"
        r="3"
        fill="transparent"
        strokeWidth="1"
        variants={draw}
        custom={4}
        initial="hidden"
        animate="visible"
      />

      {/* Connecting lines */}
      <motion.line
        className="stroke-primary"
        x1="330"
        y1="525"
        x2="200"
        y2="440"
        strokeWidth="1"
        strokeLinecap="round"
        variants={draw}
        custom={2}
        initial="hidden"
        animate="visible"
      />
      <motion.line
        className="stroke-white"
        x1="410"
        y1="550"
        x2="420"
        y2="470"
        strokeWidth="1"
        strokeLinecap="round"
        variants={draw}
        custom={3}
        initial="hidden"
        animate="visible"
      />

      {/* Bottom Left Line */}
      <motion.line
        className="stroke-white"
        x1="0"
        y1="520"
        x2="170"
        y2="580"
        strokeLinecap="round"
        fill="transparent"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />

      {/* Bottom Right Line */}
      <motion.line
        className="stroke-white"
        x1="768"
        y1="520"
        x2="559"
        y2="580"
        strokeLinecap="round"
        fill="transparent"
        variants={draw}
        custom={0}
        initial="hidden"
        animate="visible"
      />
    </svg>
  );
}
