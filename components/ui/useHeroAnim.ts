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

/**
 * Module-level store so the timeline survives React Strict Mode remounts
 * and any parent re-creation that would otherwise clear in-component timers.
 */
let state: HeroAnimState = { ...INITIAL };
let started = false;
let timers: number[] = [];
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function patch(partial: Partial<HeroAnimState>) {
  state = { ...state, ...partial };
  emit();
}

function clearTimers() {
  timers.forEach((id) => window.clearTimeout(id));
  timers = [];
}

function startTimeline() {
  if (typeof window === "undefined" || started) return;
  started = true;

  let t = 0;
  const at = (delayMs: number, fn: () => void) => {
    t += delayMs;
    timers.push(window.setTimeout(fn, t));
  };

  at(800, () => {
    patch({ phase: "family", activeId: "family", familyCount: 1 });
  });

  for (let i = 2; i <= FAMILY_THREAD.length; i += 1) {
    at(320, () => patch({ familyCount: i }));
  }

  at(650, () => {
    patch({
      phase: "kedu",
      activeId: "kedu",
      keduCount: 0,
      typing: false,
    });
  });

  for (let i = 0; i < KEDU_THREAD.length; i += 1) {
    const msg = KEDU_THREAD[i];
    const n = i + 1;
    if (msg.from === "kedu") {
      at(200, () => patch({ typing: true }));
      at(520, () => patch({ typing: false, keduCount: n }));
      at(280, () => {});
    } else {
      at(340, () => patch({ keduCount: n }));
    }
  }

  at(250, () => {
    patch({
      phase: "kedu",
      activeId: "kedu",
      keduCount: KEDU_THREAD.length,
      familyCount: FAMILY_THREAD.length,
      typing: false,
      done: true,
    });
  });
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  startTimeline();
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
 * Shared hero WhatsApp animation. Timers live outside React so remounts
 * can't cancel the sequence mid-flight.
 */
export function useHeroAnim(): HeroAnimState {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
