"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { copy } from "@/lib/copy";

/** Bump to force the prompt to show again for returning visitors. */
const STORAGE_KEY = "udara-join-prompt-v1";
const COOLDOWN_HOURS = 24;
/** After the sheet appears, wait before X / "Not now" unlock. */
const UNLOCK_AFTER_MS = 8000;
/** Hero section root — prompt waits until this has scrolled off-screen. */
const HERO_SECTION_ID = "top";

function isCoolingDown() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    if (raw === "1") return true;
    const ts = Number.parseInt(raw, 10);
    if (!Number.isFinite(ts)) return false;
    return Date.now() - ts < COOLDOWN_HOURS * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

function persistDismiss() {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    /* private mode */
  }
}

/**
 * Bottom join prompt. Portaled to document.body so iOS Safari
 * position:fixed is not trapped by transformed ancestors.
 *
 * Shows only after the hero has scrolled off — while the phone mock
 * is on screen, the product demo is the pitch.
 */
export function JoinPrompt() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [canDismiss, setCanDismiss] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isCoolingDown()) return;

    const hero = document.getElementById(HERO_SECTION_ID);
    if (!hero) return;

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setVisible(true);
    };

    // Already past hero (deep link / restored scroll)
    if (hero.getBoundingClientRect().bottom <= 0) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        // Scrolled past: section left the viewport upward
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    setCanDismiss(false);
    const unlockTimer = window.setTimeout(() => {
      setCanDismiss(true);
    }, UNLOCK_AFTER_MS);

    // Prevent background scroll jump on iOS while sheet is open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(unlockTimer);
      document.body.style.overflow = prev;
    };
  }, [visible]);

  function dismiss() {
    if (!canDismiss) return;
    persistDismiss();
    setVisible(false);
  }

  function join() {
    persistDismiss();
    setVisible(false);
  }

  if (!mounted || !visible) return null;

  return createPortal(
    <div
      id="udara-join-prompt"
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-prompt-title"
      aria-describedby="join-prompt-body"
      className="udara-join-prompt fixed inset-x-0 bottom-0 z-[9999] text-center text-white sm:inset-x-auto sm:bottom-8 sm:left-1/2 sm:w-[min(440px,calc(100vw-2rem))] sm:-translate-x-1/2 sm:rounded-[20px] sm:border sm:border-white/10 sm:shadow-[0_24px_80px_rgba(74,5,8,0.45)]"
      style={{
        // Pixel-matched to logo mark background (public/oxblood-swatch.png)
        backgroundColor: "#4a0508",
        backgroundImage: "url('/oxblood-swatch.png')",
        backgroundSize: "cover",
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",
        paddingTop: "2.75rem",
        paddingBottom: "max(1.9rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <button
        type="button"
        onClick={dismiss}
        disabled={!canDismiss}
        aria-label={canDismiss ? "Dismiss" : "Dismiss available in a few seconds"}
        className={[
          "absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4a0508] sm:right-5 sm:top-5",
          canDismiss ? "opacity-100" : "cursor-not-allowed opacity-35",
        ].join(" ")}
      >
        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M4 4l8 8M12 4l-8 8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="mx-auto w-full max-w-[520px] px-0 sm:max-w-none sm:px-3 sm:pb-1">
        <h2
          id="join-prompt-title"
          className="pr-10 text-[1.35rem] font-bold tracking-[-0.03em] text-white sm:pr-8 sm:text-[1.5rem]"
        >
          {copy.joinPrompt.title}
        </h2>
        <p
          id="join-prompt-body"
          className="mx-auto mt-3 text-[14px] leading-relaxed text-white/75 sm:text-[15px]"
        >
          {copy.joinPrompt.body}
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={join}
            className="inline-flex h-12 min-h-12 flex-1 items-center justify-center rounded-full bg-white px-5 text-[15px] font-semibold text-[#4a0508] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4a0508] sm:flex-none sm:min-w-[150px]"
          >
            {copy.joinPrompt.primary}
          </button>
          <button
            type="button"
            onClick={dismiss}
            disabled={!canDismiss}
            className={[
              "inline-flex h-12 min-h-12 flex-1 items-center justify-center rounded-full border border-white/35 bg-transparent px-5 text-[15px] font-semibold text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4a0508] sm:flex-none sm:min-w-[150px]",
              canDismiss ? "" : "cursor-not-allowed opacity-35",
            ].join(" ")}
          >
            {copy.joinPrompt.secondary}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
