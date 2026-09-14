"use client";

import { motion, useReducedMotion } from "motion/react";

const story = "Omnia IT is a small, hands-on web development agency run by Euan Bell in Caldicot, South Wales. It started with a single job — helping The Passport Expert turn an idea into a website that genuinely worked for them — and grew from there. Since then we have built for local businesses like The Friendly Fox in Newport, as well as web applications and specialist businesses across Wales.".split(" ");

export default function AboutStory() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid gap-10 md:grid-cols-[0.72fr_1.28fr] md:gap-20">
        <motion.div initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold tracking-[0.24em] text-primary uppercase">Our story</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Small team. Close attention.</h2>
        </motion.div>
        <p className="max-w-3xl text-xl leading-9 text-muted-foreground sm:text-2xl sm:leading-10">
          {story.map((word, index) => (
            <motion.span key={`${word}-${index}`} className="mr-[0.28em] inline-block" initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.34, delay: prefersReducedMotion ? 0 : Math.min(index * 0.018, 0.85) }}>
              {word}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
}
