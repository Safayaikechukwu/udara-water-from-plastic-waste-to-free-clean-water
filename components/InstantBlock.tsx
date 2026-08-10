"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { copy } from "@/lib/copy";

export function InstantBlock() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const target = root.querySelector<HTMLElement>("[data-ib]");
    const show = () => {
      target?.classList.add("is-in");
      root.classList.remove("instant-block--armed");
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      show();
      return;
    }

    const failsafe = window.setTimeout(show, 1200);
    let observer: IntersectionObserver | null = null;
    let raf2 = 0;

    const raf1 = window.requestAnimationFrame(() => {
      root.classList.add("instant-block--armed");
      raf2 = window.requestAnimationFrame(() => {
        observer = new IntersectionObserver(
          ([entry]) => {
            if (!entry?.isIntersecting) return;
            window.clearTimeout(failsafe);
            target?.classList.add("is-in");
            observer?.disconnect();
          },
          { threshold: 0.05, rootMargin: "0px 0px 10% 0px" },
        );
        observer.observe(root);
      });
    });

    return () => {
      window.clearTimeout(failsafe);
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
      observer?.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="instant-block"
      aria-labelledby="instant-block-heading"
      className="instant-block relative z-0 w-full bg-[#ecd4d6]"
    >
      <div className="relative mx-auto w-full max-w-[1252px] px-4 pb-16 pt-14 sm:px-5 sm:pb-20 sm:pt-16 md:px-6 md:pb-24 md:pt-20 lg:pb-28 lg:pt-24">
        <div
          data-ib="copy"
          className="instant-block__copy relative z-[1] mx-auto max-w-[700px] text-center md:mx-0 md:max-w-[640px] md:text-start"
        >
          <p className="text-sm font-medium uppercase tracking-[0.04em] text-cta">
            {copy.instantBlock.eyebrow}
          </p>
          <h2
            id="instant-block-heading"
            className="mt-3 text-[1.75rem] font-bold tracking-[-0.01em] text-cta sm:text-3xl md:text-[48px] md:leading-[56px]"
          >
            {copy.instantBlock.headline}
          </h2>
          <p className="mt-4 text-[16px] font-normal leading-[1.6] text-[#2a1214] md:text-[17px]">
            {copy.instantBlock.body}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-start">
            <Link
              href="/account/unblock"
              className="inline-flex items-center justify-center rounded-[8px] bg-white px-4 py-3 text-[14px] font-normal text-cta transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 focus-visible:ring-offset-[#ecd4d6]"
            >
              {copy.instantBlock.secondary}
            </Link>
            <Link
              href="/account/block"
              className="inline-flex items-center justify-center rounded-[8px] bg-cta px-4 py-3 text-[14px] font-normal text-white transition-colors hover:bg-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 focus-visible:ring-offset-[#ecd4d6]"
            >
              {copy.instantBlock.primary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
