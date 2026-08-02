"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
  /** fade = soft rise; zoom = soft scale settle (images) */
  variant?: "fade" | "zoom";
};

/**
 * Subtle enter animation when scrolled into view.
 * SSR-safe: content stays visible until JS arms the effect, with a failsafe
 * so mobile never gets stuck blank.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "fade",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      node.classList.add("is-visible");
      return;
    }

    const show = () => {
      node.classList.add("is-visible");
    };

    // Failsafe: never leave content hidden on flaky mobile browsers
    const failsafe = window.setTimeout(show, 1400);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        window.clearTimeout(failsafe);
        show();
        observer.disconnect();
      },
      {
        root: null,
        // Trigger a bit before fully in view; generous margin for mobile
        rootMargin: "0px 0px -6% 0px",
        threshold: 0.08,
      },
    );

    // Arm after a frame so the starting transform applies, then observe.
    // Above-the-fold blocks still animate in softly on first paint.
    let raf2 = 0;
    const raf1 = window.requestAnimationFrame(() => {
      node.classList.add("reveal--armed");
      raf2 = window.requestAnimationFrame(() => {
        observer.observe(node);
      });
    });

    return () => {
      window.clearTimeout(failsafe);
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "reveal",
        variant === "zoom" ? "reveal--zoom" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        delay
          ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}
