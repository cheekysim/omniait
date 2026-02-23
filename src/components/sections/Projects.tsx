"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";

import SideAnimations from "../SideAnimations";

const MotionCard = motion.create(Card);

import { Button } from "@/components/ui/button";

export default function Description() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    // Animate the path as the section enters and leaves the viewport
    target: scrollRef,
    offset: ["start 0.5", "end 1"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 0.95], [0, 1]);
  const pathOpacity = useTransform(scrollYProgress, [0, 0.01], [0, 1]);
  const buttonLength = useTransform(scrollYProgress, [0.95, 1], [0, 1]);
  const buttonOpacity = useTransform(scrollYProgress, [0.955, 0.956], [0, 1]);

  return (
    <section
      ref={scrollRef}
      className="relative flex md:min-h-[220dvh] flex-col items-center justify-start md:mb-0 mb-16"
      id="description"
    >
      <motion.svg
        viewBox="0 0 200 850"
        className="md:h-[200dvh] w-full max-w-[75dvw] absolute z-20 top-0 left-1/2 -translate-x-1/2 pointer-events-none hidden md:block"
      >
        <motion.path
          d="M0 0 L0 360 Q0 425 50 425 L150 425 Q200 425 200 465 L200 760 Q200 800 140 800 Q100 800 100 840 L100 850"
          stroke="white"
          fill="transparent"
          preserveAspectRatio="xMidYMid slice"
          strokeLinecap="round"
          strokeWidth="5"
          initial={{ pathLength: 0 }}
          style={{ pathLength, opacity: pathOpacity }}
        />
      </motion.svg>
      <div className="grid grid-rows-2 md:h-[200dvh]">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-1 place-items-center z-10">
          {/* Card Content */}
          <MotionCard
            className="col-span-2 col-start-3 p-4 xl:m-32 lg:m-24 h-fit md:m-16 m-8"
            initial={{ rotate: 0 }}
            whileInView={{
              rotateZ: 2,
            }}
            viewport={{ amount: 0.8 }}
            whileHover={{ rotateZ: 0 }}
          >
            <CardHeader>
              <CardTitle className="text-4xl mb-4">
                The Passport Expert
              </CardTitle>
              <CardDescription>Our first client</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                We were approached by Passport Expert with an idea to create a
                simple platform for UK Passports.
              </p>
              <Image
                src="/PassportExpert.png"
                width={1280}
                height={800}
                alt="The Passport Expert"
                className="rounded-md"
              />
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/projects">Learn More</Link>
              </Button>
            </CardFooter>
          </MotionCard>
          {/* Side Animations */}
          <SideAnimations
            className="col-end-3 col-start-1 row-start-1 hidden md:block"
            reverse
          />
        </div>
        <div className="grid md:grid-cols-4 grid-rows-1 place-items-center z-10">
          {/* Card Content */}
          <MotionCard
            className="col-span-2 p-4 xl:m-32 lg:m-24 h-fit md:m-16 m-8"
            initial={{ rotate: 0 }}
            whileInView={{ rotateZ: -2 }}
            viewport={{ amount: 0.8 }}
            whileHover={{ rotateZ: 0 }}
          >
            <CardHeader>
              <CardTitle className="text-4xl mb-4">The Friendly Fox</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                Our latest project is with The Friendly Fox, a pub based in
                Newport looking to start fresh!
              </p>
              <Image
                src="/FriendlyFox.png"
                width={1280}
                height={800}
                alt="The Friendly Fox"
                className="rounded-md"
              />
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/projects">Learn More</Link>
              </Button>
            </CardFooter>
          </MotionCard>
          {/* Side Animations */}
          <SideAnimations
            className="col-end-5 col-start-3 row-start-1 hidden md:block"
            seed={53}
          />
          <div></div>
        </div>
      </div>
      <motion.a
        href="/projects"
        className="text-white text-lg font-semibold px-6 py-4 relative"
      >
        <svg viewBox="0 0 12 4" className="absolute inset-0">
          {/* Left Side */}
          <motion.path
            d="M6 0.25
            L2 0.25 
            Q0.25 0.25 0.25 2
            Q0.25 3.75 2 3.75
            L7 3.75
            "
            fill="transparent"
            strokeWidth="0.5"
            stroke="white"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            style={{ pathLength: buttonLength, opacity: buttonOpacity }}
          />
          {/* Right Side */}
          <motion.path
            d="M6 0.25
            L10 0.25 
            Q11.75 0.25 11.75 2
            Q11.75 3.75 10 3.75
            L5 3.75
            "
            fill="transparent"
            strokeWidth="0.5"
            stroke="white"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            style={{ pathLength: buttonLength, opacity: buttonOpacity }}
          />
        </svg>
        See More Projects
      </motion.a>
    </section>
  );
}
