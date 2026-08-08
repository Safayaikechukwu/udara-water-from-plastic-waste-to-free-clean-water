"use client";

import {
  HeroPhoneLive,
  HeroWhatsAppLive,
} from "@/components/ui/HeroWhatsAppLive";
import { useHeroAnim } from "@/components/ui/useHeroAnim";

/** Hero phone canvas (must match PhoneShell hero variant × scale) */
const PHONE_SCALE = 0.82;
const PHONE_DESIGN_H = 852;
const PHONE_VISIBLE = 0.78; // top portion — hard-crop the rest

const cropH = Math.round(PHONE_DESIGN_H * PHONE_SCALE * PHONE_VISIBLE);

/**
 * One shared timeline drives both mocks.
 * CSS toggles which shell is visible — never gate on JS media queries.
 */
export function HeroProduct() {
  const anim = useHeroAnim();
  const viewPhase = anim.done || anim.phase === "kedu" ? "kedu" : anim.phase;

  return (
    <div
      data-hero-phase={viewPhase}
      data-hero-kedu={anim.keduCount}
      data-hero-fam={anim.familyCount}
    >
      <div className="hidden md:block">
        <HeroWhatsAppLive anim={anim} />
      </div>
      <div className="flex justify-center px-2 md:hidden">
        <div
          className="mx-auto w-full max-w-[340px] overflow-hidden"
          style={{ height: cropH }}
        >
          <HeroPhoneLive anim={anim} scale={PHONE_SCALE} />
        </div>
      </div>
    </div>
  );
}
