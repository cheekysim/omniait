"use client";

import Image from "next/image";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  isDown?: boolean;
}

function Item(project: Project) {
  const ref = useRef(null);
  const [isDownTooltipOpen, setIsDownTooltipOpen] = useState(false);
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
            {project.isDown ? (
              <TooltipProvider>
                <Tooltip
                  open={isDownTooltipOpen}
                  onOpenChange={setIsDownTooltipOpen}
                >
                  <TooltipTrigger asChild>
                    <span
                      onPointerDown={(event) => {
                        event.preventDefault();
                        setIsDownTooltipOpen(true);
                      }}
                    >
                      <Button disabled>Visit Project</Button>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent className="border bg-popover text-primary [&>svg]:bg-popover [&>svg]:fill-popover">
                    The site is down.
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <Button asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Visit Project
                </a>
              </Button>
            )}
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
        "A multi-page website built with SvelteKit, covering everything The Passport Expert offers. It loads fast, navigates easily, and works just as well on a phone as on a computer. The SEO means people searching for passport help actually find the site, and it comes across as the kind of business you can trust with your documents.",
      imageUrl: "/PassportExpert.png",
      link: "https://thepassportexpert.co.uk",
    },
    {
      title: "The Friendly Fox",
      description:
        "A website for the local pub, built to feel as welcoming as the place itself. It keeps the essentials up front: an events calendar, the menu, and mobile-friendly booking so people can reserve a table from the sofa. Whatever you're there for, it's easy to find.",
      imageUrl: "/FriendlyFox.png",
      link: "https://friendly-fox.co.uk",
    },
    {
      title: "KissedToge",
      description:
        "A web app built to help people connect without the laggy, clunky feel that sinks so many platforms. Real-time tech keeps interactions instant, accounts are handled securely, and the interface stays simple. It's built to grow too, ready for more users as the community does.",
      imageUrl: "/KissedToge.png",
      link: "http://kissedtoge.omniait.co.uk/",
    },
    {
      title: "Conservatory Solutions Wales",
      description:
        "A website for a conservatory business that's all about getting enquiries. Photo galleries show real before-and-afters, and the service pages explain things clearly. It loads quickly and ranks for local searches, so the leads that come in are people actually looking for a conservatory. Quote requests take a couple of clicks, and it looks right on any screen.",
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
