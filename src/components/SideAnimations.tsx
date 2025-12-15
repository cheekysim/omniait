import { motion, Variants } from "motion/react";

import { cn } from "@/lib/utils";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.1;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.2, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

type Props = { className?: string; seed?: number; reverse?: boolean };

function regularPolygonPoints(
  cx: number,
  cy: number,
  r: number,
  sides: number
): string {
  const pts: Array<[number, number]> = [];
  const startAngle = -Math.PI / 2; // point upwards
  for (let k = 0; k < sides; k++) {
    const a = startAngle + (k * 2 * Math.PI) / sides;
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  return pts.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(" ");
}

// Deterministic pseudo-random in [0,1) based on an integer seed.
function seededRandom(n: number): number {
  const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453123;
  return x - Math.floor(x);
}

function randomIntFromSeed(seed: number, min: number, max: number): number {
  const r = seededRandom(seed);
  return min + Math.floor(r * (max - min + 1));
}

export default function SideAnimations({ className, seed, reverse }: Props) {
  // Layout: 4 rows x 5 columns = 20 shapes, evenly spread
  const rows = 4;
  const cols = 5;
  const margin = 10; // viewBox padding
  const width = 100;
  const height = 100;
  const stepX = (width - margin * 2) / (cols - 1);
  const stepY = (height - margin * 2) / (rows - 1);
  const radius = 5; // all shapes same size

  const items = Array.from({ length: rows * cols }, (_, i) => i);

  return (
    <div className={cn("w-full h-full", className)}>
      <motion.svg viewBox="0 0 100 100" className="w-full h-full p-4">
        {items.map((i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          const cx = margin + col * stepX;
          const cy = margin + row * stepY;
          // Randomize sides per shape between 3 and 8 (deterministic for SSR)
          const sides = randomIntFromSeed((seed ?? 42) + i * 97, 3, 8);

          return (
            <motion.g
              key={i}
              initial={{ y: 0 }}
              animate={{ y: [0, -2, 0] }}
              transition={{
                duration: 3 + (i % 5),
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <motion.polygon
                points={regularPolygonPoints(cx, cy, radius, sides)}
                fill="transparent"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                variants={draw}
                custom={reverse ? 4 - (i % 5) : i % 5}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.8, once: false }}
                className="stroke-accent"
              />
            </motion.g>
          );
        })}
      </motion.svg>
    </div>
  );
}
