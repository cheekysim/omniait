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
  // const isInView = false;

  return (
    <motion.div
      className={`grid place-items-center grid-flow-row lg:grid-cols-1 gap-4 lg:gap-0 mx-6 lg:h-86.25 ${
        isInView ? "lg:grid-cols-2" : "lg:grid-cols-1"
      }`}
      layout
    >
      {/* Image */}
      <motion.div
        className={`relative col-start-1 row-start-1 z-10 grid place-items-center lg:h-86.25 ${
          isInView ? "lg:w-full lg:mr-2" : "lg:w-1/2"
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
        className={`lg:row-start-1 col-start-1 z-0 lg:h-86.25 ${
          isInView ? "lg:col-start-2 lg:ml-2" : "lg:col-start-1 lg:w-1/2"
        }`}
        layout
      >
        <Card className="h-full gap-4 justify-between">
          <CardHeader>
            <CardTitle className="font-bold text-lg">{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <ScrollArea className={`lg:h-40 ${isInView ? "h-auto" : "h-16"}`}> */}
            {project.description}
            {/* </ScrollArea> */}
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
      description:
        "A comprehensive multi-page website built with SvelteKit, delivering lightning-fast performance and seamless user experience. Features intuitive navigation, responsive design across all devices, and optimized SEO to help clients discover passport services effortlessly. The modern tech stack ensures quick load times and smooth transitions, converting visitors into customers with a professional, trustworthy online presence.",
      imageUrl: "/PassportExpert.png",
      link: "https://thepassportexpert.co.uk",
    },
    {
      title: "The Friendly Fox",
      description:
        "A vibrant, engaging website designed to bring a local community together. Built with modern web technologies, this site features an attractive, welcoming design that reflects the pub's warm atmosphere. Includes event calendars, menu displays, and mobile-optimized booking functionality to drive foot traffic and increase reservations. The responsive layout ensures customers can easily find information whether they're at home or on the go.",
      imageUrl: "/FriendlyFox.png",
      link: "https://friendly-fox.co.uk",
    },
    {
      title: "KissedToge",
      description:
        "A sophisticated web application engineered for seamless user interactions and meaningful connections. Leveraging cutting-edge frameworks and real-time technologies, this platform delivers instant responsiveness and fluid animations. Features secure user authentication, intuitive interface design, and scalable architecture built to handle growing user bases. The sleek, modern aesthetic creates an inviting digital space that encourages engagement and retention.",
      imageUrl: "/KissedToge.png",
      link: "https://kissedtoge.live",
    },
    {
      title: "Conservatory Solutions Wales",
      description:
        "A professional, conversion-focused website showcasing premium conservatory services with stunning visual galleries and detailed service descriptions. Built with performance optimization in mind, the site loads quickly and ranks well in local search results, bringing qualified leads directly to the business. Features include before-and-after galleries, customer testimonials, easy quote request forms, and mobile-responsive design that looks impeccable on every device.",
      imageUrl: "/ConservatorySolutionsWales.png",
      link: "https://conservatorysolutionswales.co.uk",
    },
  ];

  return (
    <>
      <section className="grid grid-cols-1 max-w-6xl mx-auto lg:gap-8 gap-16 snap-y mb-48">
        {/* Grid of project cards */}
        {projects.map((project) => (
          <Item key={project.title} {...project} />
        ))}
      </section>
    </>
  );
}
