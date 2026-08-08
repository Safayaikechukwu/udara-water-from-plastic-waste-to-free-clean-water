"use client";

import { useSyncExternalStore } from "react";
import {
  FAMILY_THREAD,
  KEDU_THREAD,
} from "@/components/ui/heroWhatsAppData";

export type HeroPhase = "list" | "family" | "kedu";

export type HeroAnimState = {
  phase: HeroPhase;
  activeId: string;
  familyCount: number;
  keduCount: number;
  typing: boolean;
  done: boolean;
};

const INITIAL: HeroAnimState = {
  phase: "list",
  activeId: "family",
  familyCount: 0,
  keduCount: 0,
  typing: false,
  done: false,
};

const DONE: HeroAnimState = {
  phase: "kedu",
  activeId: "kedu",
  familyCount: FAMILY_THREAD.length,
  keduCount: KEDU_THREAD.length,
  typing: false,
  done: true,
};

/** List beat — short so family/Kedu arrive while the user is looking */
const LIST_MS = 600;
const FAMILY_STEP_MS = 300;
const FAMILY_HOLD_MS = 550;
const KEDU_USER_MS = 320;
const KEDU_TYPE_MS = 200;
const KEDU_REPLY_MS = 500;
const KEDU_GAP_MS = 260;

type Keyframe = { at: number; state: HeroAnimState };

function buildKeyframes(): Keyframe[] {
  const frames: Keyframe[] = [
    { at: 0, state: { ...INITIAL } },
    {
      at: LIST_MS,
      state: {
        phase: "family",
        activeId: "family",
        familyCount: 1,
        keduCount: 0,
        typing: false,
        done: false,
      },
    },
  ];

  let t = LIST_MS;
  for (let i = 2; i <= FAMILY_THREAD.length; i += 1) {
    t += FAMILY_STEP_MS;
    frames.push({
      at: t,
      state: {
        phase: "family",
        activeId: "family",
        familyCount: i,
        keduCount: 0,
        typing: false,
        done: false,
      },
    });
  }

  t += FAMILY_HOLD_MS;
  frames.push({
    at: t,
    state: {
      phase: "kedu",
      activeId: "kedu",
      familyCount: FAMILY_THREAD.length,
      keduCount: 0,
      typing: false,
      done: false,
    },
  });

  for (let i = 0; i < KEDU_THREAD.length; i += 1) {
    const msg = KEDU_THREAD[i];
    const n = i + 1;
    if (msg.from === "kedu") {
      t += KEDU_TYPE_MS;
      frames.push({
        at: t,
        state: {
          phase: "kedu",
          activeId: "kedu",
          familyCount: FAMILY_THREAD.length,
          keduCount: n - 1,
          typing: true,
          done: false,
        },
      });
      t += KEDU_REPLY_MS;
      frames.push({
        at: t,
        state: {
          phase: "kedu",
          activeId: "kedu",
          familyCount: FAMILY_THREAD.length,
          keduCount: n,
          typing: false,
          done: false,
        },
      });
      t += KEDU_GAP_MS;
    } else {
      t += KEDU_USER_MS;
      frames.push({
        at: t,
        state: {
          phase: "kedu",
          activeId: "kedu",
          familyCount: FAMILY_THREAD.length,
          keduCount: n,
          typing: false,
          done: false,
        },
      });
    }
  }

  t += 200;
  frames.push({ at: t, state: { ...DONE } });
  return frames;
}

const KEYFRAMES = buildKeyframes();
const TOTAL_MS = KEYFRAMES[KEYFRAMES.length - 1]?.at ?? 0;

function stateAt(elapsedMs: number): HeroAnimState {
  if (elapsedMs < 0) return INITIAL;
  let current = KEYFRAMES[0]!.state;
  for (const frame of KEYFRAMES) {
    if (elapsedMs >= frame.at) current = frame.state;
    else break;
  }
  return current;
}

/* ── Module store (remount-safe) ── */

let startTs: number | null = null;
let state: HeroAnimState = INITIAL;
let rafId = 0;
let intervalId = 0;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function setState(next: HeroAnimState) {
  const prev = state;
  if (
    prev.phase === next.phase &&
    prev.activeId === next.activeId &&
    prev.familyCount === next.familyCount &&
    prev.keduCount === next.keduCount &&
    prev.typing === next.typing &&
    prev.done === next.done
  ) {
    return;
  }
  state = next;
  emit();
}

function advance() {
  if (startTs == null) return;
  const elapsed = performance.now() - startTs;
  if (elapsed >= TOTAL_MS) {
    setState(DONE);
    stopLoop();
    return;
  }
  setState(stateAt(elapsed));
}

function stopLoop() {
  if (rafId) {
    window.cancelAnimationFrame(rafId);
    rafId = 0;
  }
  if (intervalId) {
    window.clearInterval(intervalId);
    intervalId = 0;
  }
}

function startLoop() {
  stopLoop();
  // rAF for smooth foreground playback
  const rafLoop = () => {
    advance();
    if (startTs != null && !state.done) {
      rafId = window.requestAnimationFrame(rafLoop);
    }
  };
  rafId = window.requestAnimationFrame(rafLoop);
  // Interval backup — rAF is throttled in background tabs / some WebViews
  intervalId = window.setInterval(advance, 80);
}

/** Clear clock so a new mount / hard navigation can replay. */
export function resetHeroAnim() {
  stopLoop();
  startTs = null;
  state = { ...INITIAL };
  emit();
}

/**
 * Begin (or resume) the hero clock. Safe to call multiple times —
 * only the first call arms startTs.
 */
export function startHeroAnim() {
  if (typeof window === "undefined") return;
  if (startTs != null) {
    setState(stateAt(performance.now() - startTs));
    if (!state.done && !intervalId) startLoop();
    return;
  }

  startTs = performance.now();
  setState(INITIAL);
  startLoop();
}

/** Force finished Kedu (visibility failsafe). */
export function forceHeroAnimDone() {
  stopLoop();
  startTs = typeof performance !== "undefined" ? performance.now() - TOTAL_MS : 0;
  setState(DONE);
}

/** Only jump to done if still frozen on the empty list. */
export function forceHeroAnimDoneIfStuck() {
  if (state.done) return;
  if (state.phase === "list" && state.familyCount === 0) {
    forceHeroAnimDone();
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return state;
}

function getServerSnapshot(): HeroAnimState {
  return INITIAL;
}

/**
 * Shared hero WhatsApp animation. Clock is started explicitly when the
 * mock enters the viewport (see HeroProduct) — not on subscribe.
 */
export function useHeroAnim(): HeroAnimState {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Dev-only QA hooks (cold-load / remount checks). */
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  (window as unknown as { __heroAnim?: object }).__heroAnim = {
    reset: resetHeroAnim,
    start: startHeroAnim,
    get: getSnapshot,
    forceDone: forceHeroAnimDone,
    totalMs: TOTAL_MS,
  };
}
