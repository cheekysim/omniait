"use client";

import { motion } from "motion/react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function AboutCTA() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] px-6 md:px-10 text-center">
      <motion.h2
        className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Have a project in mind?
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-white max-w-xl mt-6"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        Let&rsquo;s build something great together. Tell us what you need and
        we&rsquo;ll get back to you.
      </motion.p>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ type: "spring", stiffness: 140, damping: 16, delay: 0.2 }}
      >
        <Button size="lg" asChild>
          <Link href="/contact">Start your project</Link>
        </Button>
      </motion.div>

      <motion.p
        className="mt-4 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Or email us directly at{" "}
        <a href="mailto:euan@omniait.co.uk" className="text-primary underline">
          euan@omniait.co.uk
        </a>
      </motion.p>
    </section>
  );
}