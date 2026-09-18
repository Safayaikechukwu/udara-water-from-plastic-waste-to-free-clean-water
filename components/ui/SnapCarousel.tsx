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
  /** Persona-style prev/next chevrons. Hides dots when set. */
  arrows?: boolean;
  /** When set with `arrows`, chevrons sit on the right of this heading row. */
  heading?: ReactNode;
  /** Light pagination dots for dark section backgrounds. */
  light?: boolean;
};

/**
 * Horizontal snap track + mobile-only page dots.
 * Desktop keeps the track classes (usually a grid); dots hide at md+.
 * Pass `arrows` for always-on prev/next controls instead of dots.
 */
function ChevronPair({
  atStart,
  atEnd,
  onPrev,
  onNext,
}: {
  atStart: boolean;
  atEnd: boolean;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <button
        type="button"
        aria-label="Previous slide"
        disabled={atStart}
        onClick={onPrev}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ececec] text-ink/55 transition-opacity hover:text-ink disabled:opacity-30"
      >
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
          <path
            d="M10 3.5 5.5 8 10 12.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        disabled={atEnd}
        onClick={onNext}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ececec] text-ink/55 transition-opacity hover:text-ink disabled:opacity-30"
      >
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
          <path
            d="M6 3.5 10.5 8 6 12.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export function SnapCarousel({
  children,
  count,
  trackClassName,
  label = "Slides",
  arrows = false,
  heading,
  light = false,
}: SnapCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateActive = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const slides = Array.from(el.children) as HTMLElement[];
    if (slides.length === 0) return;

    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= maxScroll - 4);

    if (arrows) {
      let best = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      slides.forEach((slide, i) => {
        const dist = Math.abs(slide.offsetLeft - el.scrollLeft);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive(best);
      return;
    }

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
  }, [arrows]);

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
    if (!el || !slide) return;
    const left = arrows
      ? slide.offsetLeft
      : slide.offsetLeft - (el.clientWidth - slide.offsetWidth) / 2;
    el.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }

  function goBy(direction: -1 | 1) {
    const el = trackRef.current;
    const slide = el?.children[0] as HTMLElement | undefined;
    if (!el || !slide) return;
    const styles = getComputedStyle(el);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
    el.scrollBy({ left: direction * (slide.offsetWidth + gap), behavior: "smooth" });
  }

  const chevrons = (
    <ChevronPair
      atStart={atStart}
      atEnd={atEnd}
      onPrev={() => goBy(-1)}
      onNext={() => goBy(1)}
    />
  );

  return (
    <div>
      {heading ? (
        <div className="flex items-end justify-between gap-10">
          <div className="min-w-0 flex-1">{heading}</div>
          {arrows ? <div className="hidden lg:block">{chevrons}</div> : null}
        </div>
      ) : null}

      <div ref={trackRef} className={trackClassName}>
        {children}
      </div>

      {arrows && heading ? (
        <div className="mt-6 flex justify-start lg:hidden">{chevrons}</div>
      ) : null}

      {arrows && !heading ? (
        <div className="mt-6 flex items-center justify-center">{chevrons}</div>
      ) : null}

      {!arrows ? (
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
                  selected
                    ? light
                      ? "w-6 bg-white"
                      : "w-6 bg-ink"
                    : light
                      ? "w-2 bg-white/30 hover:bg-white/50"
                      : "w-2 bg-ink/25 hover:bg-ink/40",
                ].join(" ")}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
