import { useEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

export default function GridBackground() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Gentle parallax tied to scroll
  const { scrollY } = useScroll();
  const yShift = useTransform(
    scrollY,
    [0, 1000],
    [0, prefersReduced ? 0 : -100]
  );
  const y = useSpring(yShift, { stiffness: 60, damping: 20, mass: 0.4 });

  // Mouse-follow glow via CSS variables to avoid frequent React state updates
  useEffect(() => {
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = containerRef.current!;
        // Use pixels for precision; CSS falls back to 50% if unset
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={containerRef}
        className="pointer-events-none fixed h-[120dvh] inset-0 z-0 overflow-hidden grid-overlay"
        style={{ y }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 grid-glow" />
      </motion.div>

      <style jsx>{`
        .grid-overlay,
        .grid-pattern .grid-glow {
          --mx: 50%;
          --my: 50%;
          --grid-color: rgba(255, 255, 255, 0.1);
          --glow-color: 255, 255, 255;
        }

        :global(.light) .grid-overlay,
        .grid-pattern .grid-glow {
          --grid-color: rgba(0, 0, 0, 0.1);
        }

        .grid-pattern {
          background-image: repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.1) 0px,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px,
              transparent 40px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.1) 0px,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px,
              transparent 40px
            );
        }

        .grid-glow {
          background: radial-gradient(
            circle at var(--mx) var(--my),
            rgba(var(--glow-color), 0.15) 0%,
            rgba(var(--glow-color), 0.05) 30%,
            rgba(var(--glow-color), 0) 60%
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .grid-pattern,
          .grid-glow {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
