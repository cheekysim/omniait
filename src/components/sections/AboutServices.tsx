"use client";

import { Code2, Gauge, MonitorSmartphone, Search } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  { title: "Web Development", description: "Business websites that are clear and fast, and feel like they belong to you.", icon: Code2 },
  { title: "Responsive Design", description: "Layouts that earn their place on every screen, from the first mobile tap to desktop detail.", icon: MonitorSmartphone },
  { title: "SEO & Performance", description: "Search visibility and quick loading are part of the build, not a layer added afterwards.", icon: Search },
  { title: "Web Applications", description: "Useful, focused web applications for ideas that need more than a brochure site.", icon: Gauge },
];

const MotionCard = motion.create(Card);

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 220, damping: 22 });
  const Icon = service.icon;

  return (
    <MotionCard
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 34, rotateX: prefersReducedMotion ? 0 : 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.01 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 130, damping: 18, delay: index * 0.08 }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onPointerMove={(event) => {
        if (prefersReducedMotion) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        rotateY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 8);
        rotateX.set(-((event.clientY - bounds.top) / bounds.height - 0.5) * 8);
      }}
      onPointerLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      className="h-full border-border/80 bg-card/75 py-0 backdrop-blur-sm"
    >
      <CardHeader className="pt-6">
        <Icon className="mb-5 size-6 text-primary" strokeWidth={1.6} />
        <CardTitle className="text-2xl">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-7">{service.description}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto pb-6 text-xs font-semibold tracking-[0.18em] text-primary uppercase">Built around your goal</CardFooter>
    </MotionCard>
  );
}

export default function AboutServices() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="mb-12 flex max-w-2xl flex-col gap-4">
        <p className="text-sm font-semibold tracking-[0.24em] text-primary uppercase">What we do</p>
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Digital work with a practical point of view.</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}
      </div>
    </section>
  );
}
