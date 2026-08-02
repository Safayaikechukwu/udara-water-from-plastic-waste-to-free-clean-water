"use client";

import Image from "next/image";
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
      className="w-full overflow-hidden bg-[#DCE6FF]"
    >
      {/*
        Mobile: text first, illustration below (no overlay).
        Desktop: single CSS background with text on the left.
      */}
      <div className="instant-block-bg flex flex-col md:relative md:min-h-[450px] lg:min-h-[500px]">
        <div className="relative z-[1] mx-auto w-full max-w-[1252px] px-4 pb-8 pt-14 text-center sm:px-5 sm:pb-10 sm:pt-16 md:absolute md:inset-0 md:flex md:items-center md:px-6 md:py-20 md:pl-32 md:text-start lg:pl-32 2xl:pl-16">
          <div
            data-ib="copy"
            className="instant-block__copy mx-auto max-w-[700px] md:mx-0"
          >
            <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#2970FF]">
              {copy.instantBlock.eyebrow}
            </p>
            <h2
              id="instant-block-heading"
              className="mt-3 text-[1.75rem] font-bold tracking-[-0.01em] text-[#00359E] sm:text-3xl md:text-[48px] md:leading-[56px]"
            >
              {copy.instantBlock.headline}
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[1.6] text-[#0A0D14] md:text-[17px]">
              {copy.instantBlock.body}
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-start">
              <Link
                href="/account/unblock"
                className="inline-flex items-center justify-center rounded-[8px] bg-white px-4 py-3 text-[14px] font-normal text-black transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2970FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#DCE6FF]"
              >
                {copy.instantBlock.secondary}
              </Link>
              <Link
                href="/account/block"
                className="inline-flex items-center justify-center rounded-[8px] bg-[#20232D] px-4 py-3 text-[14px] font-normal text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2970FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#DCE6FF]"
              >
                {copy.instantBlock.primary}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile-only illustration under the copy */}
        <div className="relative mx-auto w-full max-w-[1252px] md:hidden">
          <div className="relative aspect-[16/10] w-full sm:aspect-[2/1]">
            <Image
              src="/instant-block/footer-bg.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-right"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
