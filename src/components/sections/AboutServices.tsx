"use client";

import { motion, useReducedMotion } from "motion/react";

import { Code, Smartphone, Rocket, Layers } from "lucide-react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const MotionCard = motion.create(Card);

const SERVICES: {
  icon: typeof Code;
  title: string;
  body: string;
  accent?: boolean;
}[] = [
  {
    icon: Code,
    title: "Web Development",
    body: "Custom-built sites and apps on modern frameworks like Next.js and SvelteKit — fast, maintainable, and built to grow.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    body: "Every layout is crafted to look and feel right on any screen, from the smallest phone to the biggest desktop.",
  },
  {
    icon: Rocket,
    title: "SEO & Performance",
    body: "Pages that load quickly and are built to be found, with solid foundations in search and core web vitals.",
  },
  {
    icon: Layers,
    title: "Web Applications",
    body: "Interactive, scalable web apps with real features — secure, smooth, and ready for real users.",
    accent: true,
  },
];

export default function AboutServices() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] px-6 md:px-10">
      <p className="text-primary text-sm tracking-widest uppercase">What we do</p>
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
        Built on the modern web
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl place-items-stretch mt-10">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <MotionCard
              key={s.title}
              className="flex flex-col gap-3 p-6 h-full"
              style={{ transformPerspective: 900 }}
              initial={{ opacity: 0, y: 36, rotateX: 18 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ amount: 0.4, once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
              whileHover={
                reduced ? undefined : { rotateX: 8, rotateY: -8, scale: 1.02 }
              }
            >
              <CardHeader className="flex flex-col items-center gap-3">
                <span
                  className={`grid place-items-center size-12 rounded-full border border-border ${
                    s.accent ? "text-primary" : "text-white"
                  }`}
                >
                  <Icon className="size-6" />
                </span>
                <CardTitle className="font-semibold text-lg text-center">
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm text-center">
                {s.body}
              </CardContent>
            </MotionCard>
          );
        })}
      </div>
    </section>
  );
}