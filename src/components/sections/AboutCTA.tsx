"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";

export default function AboutCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <motion.div initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.65 }} className="relative overflow-hidden rounded-3xl border border-border bg-card/70 px-7 py-12 text-center backdrop-blur-md sm:px-16 sm:py-16">
        <Sparkles className="mx-auto mb-5 size-6 text-primary" strokeWidth={1.5} />
        <p className="text-sm font-semibold tracking-[0.24em] text-primary uppercase">Start a conversation</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">Have a project taking shape?</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted-foreground">Whatever stage you&apos;re at, tell us about what you need and we&apos;ll help you figure out the next step.</p>
        <Button asChild variant="outline" size="lg" className="mt-8 border-white/30 bg-transparent text-foreground hover:bg-white hover:text-background">
          <Link href="/contact">Get in touch <ArrowUpRight /></Link>
        </Button>
      </motion.div>
    </section>
  );
}
