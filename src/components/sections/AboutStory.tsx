"use client";

import { motion, Variants } from "motion/react";

const heading = "Who we are";
const lead =
  "Omnia IT is an independent web development agency founded by Euan Bell, working from Caldicot in South Wales. We build modern, high-performance websites and web applications for businesses.";
const follow =
  "From our first client, The Passport Expert, to The Friendly Fox, KissedToge and Conservatory Solutions Wales — every project gets the same hands-on care. Because for us, it's personal.";

// One span per word; each fades/rises in after the previous (stagger reveal).
const wordVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      opacity: { delay: i * 0.016, duration: 0.4, ease: "easeOut" },
      y: { delay: i * 0.016, type: "spring", stiffness: 220, damping: 24 },
    },
  }),
};

function Staggered({ text }: { text: string }) {
  const words = text.split(/\s+/);
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          custom={i}
          className="inline-block whitespace-pre"
        >
          {w}{" "}
        </motion.span>
      ))}
    </motion.p>
  );
}

export default function AboutStory() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] px-6 md:px-10">
      <motion.p
        className="text-primary text-sm tracking-widest uppercase"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {heading}
      </motion.p>

      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
        A small team with big standards
      </h2>

      <p className="text-lg md:text-xl text-white max-w-3xl text-center mt-10">
        <Staggered text={lead} />
      </p>

      <motion.p
        className="text-muted-foreground text-base md:text-lg max-w-3xl text-center mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      >
        {follow}
      </motion.p>
    </section>
  );
}