"use client";

import Image from "next/image";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

function Item(project: Project) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.9 });

  return (
    <motion.div
      className={`grid place-items-center grid-rows-1 ${
        isInView ? "grid-cols-2" : "grid-cols-1"
      }`}
      layout
    >
      {/* Image */}
      <motion.div
        className={`relative col-start-1 row-start-1 z-10 ${
          isInView ? "w-full" : "w-1/2"
        }`}
        ref={ref}
        layout
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={1280}
          height={800}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
      {/* Description */}
      <motion.div
        className={`p-4 row-start-1 z-0 ${
          isInView ? "col-start-2" : "col-start-1"
        }`}
        layout
      >
        <Card>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{project.description}</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit Project
              </a>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function Showcase() {
  const projects: Project[] = [
    {
      title: "The Passport Expert",
      description: "A comprehensive guide to passport services.",
      imageUrl: "/PassportExpert.png",
      link: "https://thepassportexpert.co.uk",
    },
    {
      title: "The Friendly Fox",
      description: "A pub and community hub for locals.",
      imageUrl: "/FriendlyFox.png",
      link: "https://friendly-fox.co.uk",
    },
    {
      title: "KissedToge",
      description: "A modern app for meaningful connections.",
      imageUrl: "/KissedToge.png",
      link: "https://kissedtoge.live",
    },
    {
      title: "Conservatory Solutions Wales",
      description: "Expert conservatory installation services.",
      imageUrl: "/ConservatorySolutionsWales.png",
      link: "https://conservatorysolutionswales.co.uk",
    },
  ];

  return (
    <section className="grid grid-cols-1 max-w-5xl mx-auto gap-8 snap-y">
      {/* Grid of project cards */}
      {projects.map((project) => (
        <Item key={project.title} {...project} />
      ))}
    </section>
  );
}
