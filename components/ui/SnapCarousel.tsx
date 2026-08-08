"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type SnapCarouselProps = {
  children: ReactNode;
  count: number;
  /** Classes for the scroll track (mobile) / grid (desktop) */
  trackClassName: string;
  /** Accessible name for the pagination dots */
  label?: string;
};

/**
 * Horizontal snap track + mobile-only page dots.
 * Desktop keeps the track classes (usually a grid); dots hide at md+.
 */
export function SnapCarousel({
  children,
  count,
  trackClassName,
  label = "Slides",
}: SnapCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const updateActive = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const slides = Array.from(el.children) as HTMLElement[];
    if (slides.length === 0) return;

    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;

    slides.forEach((slide, i) => {
      const mid = slide.offsetLeft + slide.offsetWidth / 2;
      const dist = Math.abs(center - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });

    setActive(best);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updateActive();
    el.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      el.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [updateActive, count]);

  function goTo(index: number) {
    const el = trackRef.current;
    const slide = el?.children[index] as HTMLElement | undefined;
    if (!slide) return;
    slide.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  return (
    <div>
      <div ref={trackRef} className={trackClassName}>
        {children}
      </div>

      <div
        className="mt-4 flex items-center justify-center gap-2 md:hidden"
        role="tablist"
        aria-label={label}
      >
        {Array.from({ length: count }, (_, i) => {
          const selected = i === active;
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-label={`Go to slide ${i + 1} of ${count}`}
              onClick={() => goTo(i)}
              className={[
                "h-2 rounded-full transition-[width,background-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2",
                selected ? "w-6 bg-ink" : "w-2 bg-ink/25 hover:bg-ink/40",
              ].join(" ")}
            />
          );
        })}
      </div>
    </div>
  );
}
