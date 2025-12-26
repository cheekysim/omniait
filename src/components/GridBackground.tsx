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

  const mouseElRef = useRef<HTMLDivElement | null>(null);

  // Mouse-follow glow via CSS variables to avoid frequent React state updates
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!mouseElRef.current) return;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Update position directly to avoid stacking zero-duration WAAPI animations
      // mouseElRef.current.style.left = `${mouseX}px`;
      // mouseElRef.current.style.top = `${mouseY}px`;

      mouseElRef.current.animate(
        {
          transform: `translate3d(${mouseX}px, ${mouseY}px, 0)`,
        },
        { duration: 1000, fill: "forwards", easing: "ease-out" }
      );
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      {/* Follow Mouse / Glow */}
      <div
        ref={mouseElRef}
        className="fixed z-0 size-42 bg-radial-[circle] from-white to-white/50 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-0 md:opacity-30"
      ></div>
      <motion.div
        ref={containerRef}
        className="pointer-events-none fixed h-[120dvh] inset-0 z-0 overflow-hidden grid-overlay"
        style={{ y }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 grid-pattern" />
      </motion.div>

      <style jsx>{`
        .grid-overlay,
        .grid-pattern {
          --mx: 50%;
          --my: 50%;
          --grid-color: rgba(255, 255, 255, 0.1);
        }

        :global(.light) .grid-overlay,
        .grid-pattern .grid-glow {
          --grid-color: rgba(0, 0, 0, 0.1);
        }

        .grid-pattern {
          background-image: repeating-linear-gradient(
              0deg,
              rgba(100, 100, 100, 0.1) 0px,
              rgba(100, 100, 100, 0.1) 1px,
              transparent 1px,
              transparent 40px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(100, 100, 100, 0.1) 0px,
              rgba(100, 100, 100, 0.1) 1px,
              transparent 1px,
              transparent 40px
            );
        }
        @media (prefers-reduced-motion: reduce) {
          .grid-pattern {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
