"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import {
  HeroPhoneLive,
  HeroWhatsAppLive,
} from "@/components/ui/HeroWhatsAppLive";
import {
  forceHeroAnimDoneIfStuck,
  resetHeroAnim,
  startHeroAnim,
  useHeroAnim,
} from "@/components/ui/useHeroAnim";

/** Hero phone canvas (must match PhoneShell hero variant × scale) */
const PHONE_SCALE = 0.82;
const PHONE_DESIGN_H = 852;
const PHONE_VISIBLE = 0.8; // top portion; bottom fades via .hero-phone-dissolve

const cropH = Math.round(PHONE_DESIGN_H * PHONE_SCALE * PHONE_VISIBLE);

const DESKTOP_MQ = "(min-width: 768px)";

function subscribeDesktop(callback: () => void) {
  const mq = window.matchMedia(DESKTOP_MQ);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getDesktopSnapshot() {
  return window.matchMedia(DESKTOP_MQ).matches;
}

/** SSR / first paint: phone (mobile-first). */
function getDesktopServerSnapshot() {
  return false;
}

function useIsDesktop() {
  return useSyncExternalStore(
    subscribeDesktop,
    getDesktopSnapshot,
    getDesktopServerSnapshot,
  );
}

/**
 * Single visible shell + visibility-gated hero clock.
 */
export function HeroProduct() {
  const anim = useHeroAnim();
  const isDesktop = useIsDesktop();
  const rootRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);
  const seqRef = useRef<string[]>([]);

  const viewPhase = anim.done || anim.phase === "kedu" ? "kedu" : anim.phase;

  // Compact transition log for cold-load QA (data-hero-seq)
  const seqKey = anim.done
    ? "done"
    : anim.phase === "list"
      ? "list"
      : anim.phase === "family"
        ? `family${anim.familyCount}`
        : `kedu${anim.keduCount}${anim.typing ? "t" : ""}`;
  if (seqRef.current[seqRef.current.length - 1] !== seqKey) {
    seqRef.current = [...seqRef.current, seqKey];
  }

  // Start clock the first time the mock is meaningfully on screen
  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    // Fresh mount — drop any leftover module state from HMR / prior visits
    resetHeroAnim();
    startedRef.current = false;
    seqRef.current = [];

    const arm = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      startHeroAnim();
    };

    const visiblyOnScreen = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const visiblePx = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
      if (visiblePx <= 0) return false;
      const ratio = visiblePx / Math.min(rect.height || 1, vh);
      return ratio >= 0.3;
    };

    // Sync check — IO alone can miss "already visible" on first paint
    if (visiblyOnScreen()) {
      arm();
      return;
    }

    if (!("IntersectionObserver" in window)) {
      arm();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) arm();
      },
      { threshold: [0.25, 0.4] },
    );

    observer.observe(node);
    // Re-check after layout settles (fonts / images)
    const retry = window.setTimeout(() => {
      if (visiblyOnScreen()) arm();
    }, 120);

    return () => {
      observer.disconnect();
      window.clearTimeout(retry);
    };
  }, []);

  // Visible but truly frozen on empty list → finished Kedu (never empty/black)
  useEffect(() => {
    if (!startedRef.current) return;
    if (anim.done) return;
    if (anim.phase !== "list" || anim.familyCount > 0) return;

    const id = window.setTimeout(() => {
      forceHeroAnimDoneIfStuck();
    }, 2500);

    return () => window.clearTimeout(id);
  }, [anim.done, anim.phase, anim.familyCount]);

  return (
    <div
      ref={rootRef}
      data-hero-phase={viewPhase}
      data-hero-kedu={anim.keduCount}
      data-hero-fam={anim.familyCount}
      {...(process.env.NODE_ENV === "development"
        ? { "data-hero-seq": seqRef.current.join(">") }
        : {})}
    >
      {isDesktop ? (
        <div className="hero-phone-dissolve">
          <HeroWhatsAppLive anim={anim} />
        </div>
      ) : (
        <div className="flex justify-center px-2">
          <div
            className="hero-phone-dissolve mx-auto w-full max-w-[340px] overflow-hidden"
            style={{ height: cropH }}
          >
            <HeroPhoneLive anim={anim} scale={PHONE_SCALE} />
          </div>
        </div>
      )}
    </div>
  );
}
