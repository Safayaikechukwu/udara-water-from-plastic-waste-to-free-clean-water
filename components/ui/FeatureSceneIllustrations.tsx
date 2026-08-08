/**
 * WhatsApp dark-mode chat mockups.
 *
 * Designed at real iPhone logical width (390px) with WhatsApp-like metrics,
 * then uniformly scaled for the feature cards so proportions stay locked —
 * like a real screenshot resized, not hand-tweaked UI pieces.
 */

import Image from "next/image";
import { CHATS } from "@/components/ui/heroWhatsAppData";

/** iPhone logical width — design canvas for true UI proportions */
const DESIGN_W = 390;
/** Default display scale for feature cards */
const FEATURE_SCALE = 0.72;
/** Feature-card phone height (slightly cropped for cards) */
const DESIGN_H = 780;
/** Hero phone — closer to iPhone 14/15 Pro logical height */
const HERO_DESIGN_W = 393;
const HERO_DESIGN_H = 852;

function SignalIcon() {
  return (
    <svg width="17" height="11" viewBox="0 0 16 10" fill="none" aria-hidden>
      <rect x="0" y="6.5" width="2.2" height="3.5" rx="0.4" fill="currentColor" />
      <rect x="3.5" y="4.5" width="2.2" height="5.5" rx="0.4" fill="currentColor" />
      <rect x="7" y="2.2" width="2.2" height="7.8" rx="0.4" fill="currentColor" />
      <rect x="10.5" y="0" width="2.2" height="10" rx="0.4" fill="currentColor" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="15" height="11" viewBox="0 0 14 10" fill="none" aria-hidden>
      <path
        d="M7 8.6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2.6-1.7a3.7 3.7 0 0 1 5.2 0l-.9.9a2.4 2.4 0 0 0-3.4 0l-.9-.9Zm-1.9-1.9a6.3 6.3 0 0 1 9 0l-.9.9a5 5 0 0 0-7.2 0l-.9-.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden>
      <rect
        x="0.5"
        y="0.75"
        width="21"
        height="10.5"
        rx="2.5"
        stroke="currentColor"
        strokeOpacity="0.4"
      />
      <rect x="2" y="2.25" width="16.5" height="7.5" rx="1.5" fill="currentColor" />
      <path
        d="M23 4v4c.8-.4.8-1.2 0-1.6V4Z"
        fill="currentColor"
        fillOpacity="0.4"
      />
    </svg>
  );
}

function BackChevron() {
  return (
    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" aria-hidden>
      <path
        d="M10 2 3 10l7 8"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VideoCallIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden>
      <rect
        x="1"
        y="2"
        width="13"
        height="12"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M15.5 5.5 21 3v10l-5.5-2.5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneCallIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M4.1 2.2c.4-.4 1.1-.4 1.5 0l1.7 1.7c.4.4.4.9.2 1.4L6.6 7c.8 1.6 2.2 3 3.8 3.8l1.7-.9c.5-.2 1-.2 1.4.2l1.7 1.7c.4.4.4 1.1 0 1.5l-1 1c-.5.5-1.2.7-1.9.6C7.3 15.3 2.7 10.7 2.1 5.6c-.1-.7.1-1.4.6-1.9l1.4-1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M11 5v12M5 11h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" aria-hidden>
      <rect
        x="5.5"
        y="2"
        width="7"
        height="11"
        rx="3.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3 11a6 6 0 0 0 12 0M9 17v3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DoubleTick({ read = true }: { read?: boolean }) {
  return (
    <svg
      width="16"
      height="11"
      viewBox="0 0 16 11"
      className={read ? "text-[#53bdeb]" : "text-[#8696a0]"}
      aria-hidden
    >
      <path
        d="M1.2 5.6 3.8 8.2 9.4 1.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.4 5.6 8 8.2 14.2 1.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WaDoodleWallpaper({ patternId }: { patternId: string }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <pattern
          id={patternId}
          width="84"
          height="84"
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke="#fff" strokeWidth="1.1" strokeLinecap="round">
            <path d="M10 18c4-6 12-6 14 0" />
            <circle cx="62" cy="16" r="3.2" />
            <path d="M22 46h10M27 41v10" />
            <path d="M48 38c6 2 8 10 2 14" />
            <path d="M12 68l6-4 6 4-2-7 5-4h-7l-2-6-2 6H5l5 4z" />
            <path d="M58 62c0-5 4-8 8-8" />
            <circle cx="40" cy="14" r="1.2" fill="#fff" stroke="none" />
            <circle cx="70" cy="48" r="1.2" fill="#fff" stroke="none" />
            <path d="M36 70c3-4 9-3 10 2" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

export function PhoneShell({
  children,
  wallpaperId,
  scale = FEATURE_SCALE,
  variant = "feature",
}: {
  children: React.ReactNode;
  wallpaperId: string;
  /** Uniform scale of the design canvas */
  scale?: number;
  /** Hero = taller iPhone Pro chassis with thicker bezels / island */
  variant?: "feature" | "hero";
}) {
  const hero = variant === "hero";
  const canvasW = hero ? HERO_DESIGN_W : DESIGN_W;
  const canvasH = hero ? HERO_DESIGN_H : DESIGN_H;
  const patternId = `wa-doodle-${wallpaperId}`;
  const displayW = canvasW * scale;
  const displayH = canvasH * scale;

  const outerR = hero ? 58 : 55;
  const midR = hero ? 54 : 52;
  const innerR = hero ? 51 : 50.5;
  const framePad = hero ? 5.5 : 3;

  return (
    <div
      className="relative mx-auto select-none"
      style={{ width: displayW, height: displayH }}
      aria-hidden="true"
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: canvasW,
          height: canvasH,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {/* Hardware buttons */}
        <div
          className={[
            "pointer-events-none absolute z-50 rounded-l-full bg-gradient-to-b from-[#5a5a5e] via-[#2a2a2c] to-[#141416]",
            hero
              ? "-left-[4px] top-[148px] h-[36px] w-[4px] shadow-[-1px_0_2px_rgba(0,0,0,0.45)]"
              : "-left-[3px] top-[140px] h-[32px] w-[3px]",
          ].join(" ")}
        />
        <div
          className={[
            "pointer-events-none absolute z-50 rounded-l-full bg-gradient-to-b from-[#5a5a5e] via-[#2a2a2c] to-[#141416]",
            hero
              ? "-left-[4px] top-[198px] h-[68px] w-[4px] shadow-[-1px_0_2px_rgba(0,0,0,0.45)]"
              : "-left-[3px] top-[186px] h-[62px] w-[3px]",
          ].join(" ")}
        />
        <div
          className={[
            "pointer-events-none absolute z-50 rounded-l-full bg-gradient-to-b from-[#5a5a5e] via-[#2a2a2c] to-[#141416]",
            hero
              ? "-left-[4px] top-[276px] h-[68px] w-[4px] shadow-[-1px_0_2px_rgba(0,0,0,0.45)]"
              : "-left-[3px] top-[256px] h-[62px] w-[3px]",
          ].join(" ")}
        />
        <div
          className={[
            "pointer-events-none absolute z-50 rounded-r-full bg-gradient-to-b from-[#5a5a5e] via-[#2a2a2c] to-[#141416]",
            hero
              ? "-right-[4px] top-[230px] h-[96px] w-[4px] shadow-[1px_0_2px_rgba(0,0,0,0.45)]"
              : "-right-[3px] top-[210px] h-[88px] w-[3px]",
          ].join(" ")}
        />

        {/* Outer titanium / graphite chassis */}
        <div
          className="relative h-full shadow-[0_32px_72px_-14px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.06)_inset]"
          style={{
            borderRadius: outerR,
            padding: framePad,
            background: hero
              ? "linear-gradient(145deg, #8a8a90 0%, #4a4a4e 18%, #1c1c1f 42%, #3a3a3e 68%, #0e0e10 100%)"
              : "linear-gradient(155deg, #6a6a6e 0%, #2c2c2e 28%, #1a1a1c 55%, #3a3a3c 78%, #111113 100%)",
          }}
        >
          {/* Glass rim highlight */}
          <div
            className="relative h-full overflow-hidden"
            style={{
              borderRadius: midR,
              padding: hero ? 2.5 : 1.5,
              background: hero
                ? "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 35%, rgba(0,0,0,0.55) 100%)"
                : "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.04) 45%, rgba(0,0,0,0.5) 100%)",
              boxShadow: hero
                ? "inset 0 0 0 1px rgba(0,0,0,0.65)"
                : undefined,
            }}
          >
            <div
              className="relative flex h-full flex-col overflow-hidden bg-black font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]"
              style={{ borderRadius: innerR }}
            >
              {/* Dynamic Island */}
              <div
                className={[
                  "absolute left-1/2 z-50 -translate-x-1/2 rounded-full bg-black",
                  hero
                    ? "top-[12px] h-[37px] w-[126px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14),0_1px_2px_rgba(0,0,0,0.5)]"
                    : "top-[11px] h-[34px] w-[120px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]",
                ].join(" ")}
              >
                {/* Camera / sensors */}
                <span
                  className={[
                    "absolute top-1/2 -translate-y-1/2 rounded-full",
                    hero
                      ? "right-[18px] h-[11px] w-[11px] bg-[#0b1520] shadow-[inset_0_0_0_1.5px_#1a3a5c,0_0_0_1px_rgba(0,0,0,0.8)]"
                      : "right-[16px] h-[10px] w-[10px] bg-[#0a1628] shadow-[inset_0_0_0_1.5px_#1a3a5c]",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute rounded-full bg-[#4a90b8]/55",
                    hero ? "right-[21px] top-[12px] h-[2.5px] w-[2.5px]" : "right-[19px] top-[11px] h-[2px] w-[2px]",
                  ].join(" ")}
                />
                {hero ? (
                  <span className="absolute left-[22px] top-1/2 h-[9px] w-[9px] -translate-y-1/2 rounded-full bg-[#111] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />
                ) : null}
              </div>

              {/* Status bar */}
              <div
                className={[
                  "relative z-40 flex shrink-0 items-end justify-between bg-[#1f2c34] font-semibold tracking-[-0.01em] text-white",
                  hero
                    ? "h-[59px] px-[30px] pb-[11px] text-[15px]"
                    : "h-[54px] px-[28px] pb-[10px] text-[15px]",
                ].join(" ")}
              >
                <span className="w-[64px]">9:41</span>
                <div className="flex w-[78px] items-center justify-end gap-[6px]">
                  <SignalIcon />
                  <WifiIcon />
                  <BatteryIcon />
                </div>
              </div>

              <div className="relative flex min-h-0 flex-1 flex-col bg-[#0b141a]">
                <div className="absolute inset-0 bg-[#0b141a]" />
                <WaDoodleWallpaper patternId={patternId} />
                <div className="relative z-20 flex min-h-0 flex-1 flex-col">
                  {children}
                </div>
              </div>

              {/* Home indicator */}
              <div
                className={[
                  "pointer-events-none absolute inset-x-0 z-50 flex justify-center",
                  hero ? "bottom-[10px]" : "bottom-[8px]",
                ].join(" ")}
              >
                <div
                  className={[
                    "rounded-full bg-white/90",
                    hero ? "h-[5px] w-[140px]" : "h-[5px] w-[134px]",
                  ].join(" ")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Chat header — sized like WhatsApp iOS at 390pt:
 * ~56pt row, ~36pt avatar, ~17pt name, ~13pt status.
 * Sits on the same #1f2c34 as the status bar in real WA.
 */
export function WaHeader({ subtitle = "online" }: { subtitle?: string }) {
  return (
    <div className="relative z-30 flex h-[56px] shrink-0 items-center bg-[#1f2c34] px-[4px] shadow-[0_1px_0_rgba(0,0,0,0.28)]">
      <span className="flex h-[44px] w-[34px] shrink-0 items-center justify-center text-[#53bdeb]">
        <BackChevron />
      </span>

      <div className="relative mr-[10px] h-[36px] w-[36px] shrink-0 overflow-hidden rounded-full bg-[#4a0508]">
        <Image
          src="/kedu-mark.png"
          alt=""
          width={36}
          height={36}
          className="h-full w-full scale-[1.08] object-cover"
        />
      </div>

      <div className="min-w-0 flex-1 pr-2">
        <p className="truncate text-[17px] font-semibold leading-[20px] tracking-[-0.2px] text-[#e9edef]">
          Kedu
        </p>
        <p className="truncate text-[13px] leading-[16px] text-[#8696a0]">
          {subtitle}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-[22px] pr-[14px] text-[#aebac1]">
        <VideoCallIcon />
        <PhoneCallIcon />
      </div>
    </div>
  );
}

export function WaComposer() {
  return (
    <div className="relative z-30 mt-auto flex shrink-0 items-end gap-[8px] bg-[#1f2c34] px-[8px] pb-[28px] pt-[8px]">
      <div className="mb-[2px] flex h-[40px] w-[40px] shrink-0 items-center justify-center text-[#aebac1]">
        <PlusIcon />
      </div>
      <div className="flex min-h-[40px] flex-1 items-center rounded-full bg-[#2a3942] px-[16px] py-[9px]">
        <span className="text-[16px] leading-none text-[#8696a0]">Message</span>
      </div>
      <div className="mb-[2px] flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#00a884] text-white">
        <MicIcon />
      </div>
    </div>
  );
}

export function DatePill({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center py-[8px]">
      <span className="rounded-[7.5px] bg-[#182229] px-[10px] py-[5px] text-[12.5px] font-medium uppercase tracking-[0.02em] text-[#8696a0] shadow-[0_1px_0.5px_rgba(0,0,0,0.22)]">
        {children}
      </span>
    </div>
  );
}

export function Bubble({
  from,
  time,
  children,
}: {
  from: "kedu" | "user";
  time: string;
  children: React.ReactNode;
}) {
  const isKedu = from === "kedu";

  return (
    <div
      className={`relative flex px-[6px] ${isKedu ? "justify-start" : "justify-end"}`}
    >
      <svg
        className={`absolute bottom-0 h-[12px] w-[11px] ${
          isKedu ? "left-[1px] text-[#202c33]" : "right-[1px] text-[#005c4b]"
        }`}
        viewBox="0 0 10 11"
        aria-hidden
      >
        {isKedu ? (
          <path d="M10 0C6 3 2.5 6.5 0 11L10 8V0Z" fill="currentColor" />
        ) : (
          <path d="M0 0C4 3 7.5 6.5 10 11L0 8V0Z" fill="currentColor" />
        )}
      </svg>

      <div
        className={[
          "relative max-w-[82%] px-[10px] pb-[6px] pt-[6px] text-[16px] leading-[21px] tracking-[-0.2px] text-[#e9edef] shadow-[0_1px_0.5px_rgba(0,0,0,0.15)]",
          isKedu
            ? "rounded-[7.5px] rounded-bl-[0] bg-[#202c33]"
            : "rounded-[7.5px] rounded-br-[0] bg-[#005c4b]",
        ].join(" ")}
      >
        <div className="whitespace-pre-wrap">{children}</div>
        <div className="-mb-px mt-[2px] flex items-center justify-end gap-[3px]">
          <span className="text-[11px] leading-none text-[#8696a0]">{time}</span>
          {!isKedu ? <DoubleTick read /> : null}
        </div>
      </div>
    </div>
  );
}

export function ChatBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-20 flex flex-1 flex-col justify-start gap-[8px] overflow-hidden px-[6px] pb-[8px] pt-[6px]">
      {children}
    </div>
  );
}

/** Spending truth - breakdown as a real WhatsApp message. */
export function TruthScene() {
  return (
    <PhoneShell wallpaperId="truth">
      <WaHeader subtitle="online" />
      <ChatBody>
        <DatePill>Today</DatePill>
        <Bubble from="user" time="9:38 PM">
          Where did my money go this week?
        </Bubble>
        <Bubble from="kedu" time="9:38 PM">
          <span className="font-semibold">This week&apos;s truth</span>
          {"\n\n"}
          Food — ₦48,200 (52%)
          {"\n"}
          Transfers — ₦31,000
          {"\n"}
          Noise — ₦12,450
          {"\n\n"}
          Food alone ate most of what you moved.
        </Bubble>
        <Bubble from="user" time="9:39 PM">
          That food number is crazy
        </Bubble>
        <Bubble from="kedu" time="9:39 PM">
          Most of it hit after 7PM. Want me to lock snacks with the night rule?
        </Bubble>
        <Bubble from="user" time="9:40 PM">
          Yes. Do it.
        </Bubble>
        <Bubble from="kedu" time="9:40 PM">
          Done. I&apos;ll send tomorrow&apos;s breakdown at 9AM.
        </Bubble>
      </ChatBody>
      <WaComposer />
    </PhoneShell>
  );
}

/** 7PM lock - the signature product moment. */
export function LockScene() {
  return (
    <PhoneShell wallpaperId="lock">
      <WaHeader subtitle="online" />
      <ChatBody>
        <DatePill>Today</DatePill>
        <Bubble from="user" time="7:42 PM">
          Transfer ₦15,000 to FoodPlace?
        </Bubble>
        <Bubble from="kedu" time="7:42 PM">
          It&apos;s 7:42PM.
          {"\n\n"}
          Transfers reopen at 6AM.
          {"\n\n"}
          <span className="font-semibold">Transfer blocked.</span>
          {"\n"}
          No override. No exceptions.
        </Bubble>
        <Bubble from="user" time="7:43 PM">
          Please, just this once?
        </Bubble>
        <Bubble from="kedu" time="7:43 PM">
          Still no.
          {"\n"}
          Your land fund stays locked until morning.
        </Bubble>
        <Bubble from="user" time="7:44 PM">
          Fine. Show me what I have left for food tomorrow.
        </Bubble>
        <Bubble from="kedu" time="7:44 PM">
          ₦6,200 left in today&apos;s food budget.
          {"\n"}
          Resets at 6AM with the lock.
        </Bubble>
        <Bubble from="user" time="7:45 PM">
          Okay. Goodnight then.
        </Bubble>
        <Bubble from="kedu" time="7:45 PM">
          Sleep. The money will still be there.
        </Bubble>
      </ChatBody>
      <WaComposer />
    </PhoneShell>
  );
}

/** Live accountability feed — exact WhatsApp message style. */
export function TrackScene() {
  return (
    <PhoneShell wallpaperId="track">
      <WaHeader subtitle="online" />
      <ChatBody>
        <DatePill>Today</DatePill>
        <Bubble from="kedu" time="4:12 PM">
          <span className="font-semibold">Live spend update</span>
          {"\n"}
          <span className="text-[#8696a0]">Today so far</span>
          {"\n\n"}
          FoodPlace · Food
          {"\n"}
          ₦15,000
          {"\n\n"}
          Bolt · Transit
          {"\n"}
          ₦2,400
          {"\n\n"}
          Shoprite · Groceries
          {"\n"}
          ₦18,650
          {"\n\n"}
          ₦36,050 spent · ₦14,000 left today
        </Bubble>
        <Bubble from="user" time="4:13 PM">
          Keep watching it.
        </Bubble>
        <Bubble from="kedu" time="4:13 PM">
          Already am. I&apos;ll ping you before 7PM if food climbs again.
        </Bubble>
        <Bubble from="user" time="5:02 PM">
          Just took another Bolt
        </Bubble>
        <Bubble from="kedu" time="5:02 PM">
          Logged. Transit is ₦4,800 today.
          {"\n"}
          Still within range.
        </Bubble>
        <Bubble from="user" time="5:03 PM">
          Cool. Tell me if I get close.
        </Bubble>
        <Bubble from="kedu" time="5:03 PM">
          I will. That&apos;s the job.
        </Bubble>
      </ChatBody>
      <WaComposer />
    </PhoneShell>
  );
}

/** Save while you spend - auto tuck-away. */
export function SaveScene() {
  return (
    <PhoneShell wallpaperId="save">
      <WaHeader subtitle="online" />
      <ChatBody>
        <DatePill>Today</DatePill>
        <Bubble from="user" time="2:08 PM">
          Just paid Bolt ₦2,400
        </Bubble>
        <Bubble from="kedu" time="2:08 PM">
          <span className="font-semibold">Saved ₦200 for you.</span>
          {"\n\n"}
          Tucked into Land Fund while you spent.
          {"\n\n"}
          Land Fund — ₦186,400
          {"\n"}
          +₦200 just now
        </Bubble>
        <Bubble from="user" time="2:09 PM">
          Keep doing that.
        </Bubble>
        <Bubble from="kedu" time="2:09 PM">
          Every spend can grow the goal. That&apos;s the point.
        </Bubble>
        <Bubble from="user" time="3:41 PM">
          Paid Shoprite ₦12,000
        </Bubble>
        <Bubble from="kedu" time="3:41 PM">
          Saved another ₦600.
          {"\n"}
          Land Fund — ₦187,000
        </Bubble>
        <Bubble from="user" time="3:42 PM">
          We&apos;re actually moving
        </Bubble>
        <Bubble from="kedu" time="3:42 PM">
          Quietly. That&apos;s how it sticks.
        </Bubble>
      </ChatBody>
      <WaComposer />
    </PhoneShell>
  );
}

function CameraIcon() {
  return (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" aria-hidden>
      <path
        d="M8 3.5 9.2 2h3.6L14 3.5h3.5A2.5 2.5 0 0 1 20 6v9.5A2.5 2.5 0 0 1 17.5 18h-13A2.5 2.5 0 0 1 2 15.5V6a2.5 2.5 0 0 1 2.5-2.5H8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="11" r="3.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function NewChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M4 16.5V18l1.8-.5L17.2 6.1a1.4 1.4 0 0 0 0-2l-.3-.3a1.4 1.4 0 0 0-2 0L3.5 15.2 4 16.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 18.5H9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10.5 10.5 14 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** WhatsApp Chats tab — same roster / pins / unreads as the hero mobile mock. */
export function ChatsListScene({ scale = 0.78 }: { scale?: number }) {
  const rows = CHATS.filter((c) => c.id !== "tunde" && c.id !== "funke").map(
    (chat) => ({
      ...chat,
      active: chat.id === "kedu",
    }),
  );

  return (
    <PhoneShell wallpaperId="chats" scale={scale}>
      <div className="relative z-30 flex h-full flex-col bg-[#111b21]">
        <div className="flex items-center justify-between bg-[#1f2c34] px-[16px] pb-[10px] pt-[4px]">
          <p className="text-[22px] font-semibold tracking-[-0.3px] text-[#e9edef]">
            Chats
          </p>
          <div className="flex items-center gap-[18px] text-[#aebac1]">
            <CameraIcon />
            <NewChatIcon />
          </div>
        </div>

        <div className="bg-[#1f2c34] px-[12px] pb-[10px]">
          <div className="flex h-[36px] items-center gap-[8px] rounded-[10px] bg-[#2a3942] px-[12px] text-[#8696a0]">
            <SearchIcon />
            <span className="text-[15px]">Ask Meta AI or Search</span>
          </div>
        </div>

        <div className="flex gap-[8px] overflow-hidden bg-[#111b21] px-[12px] py-[10px]">
          {["All", "Unread", "Favorites", "Groups"].map((filter, i) => (
            <span
              key={filter}
              className={[
                "rounded-full px-[12px] py-[6px] text-[13px] font-medium",
                i === 0
                  ? "bg-[#0a332c] text-[#00a884]"
                  : "bg-[#1f2c34] text-[#8696a0]",
              ].join(" ")}
            >
              {filter}
            </span>
          ))}
        </div>

        <div className="min-h-0 flex-1 overflow-hidden bg-[#111b21] pb-[28px]">
          {rows.map((chat) => (
            <div
              key={chat.id}
              className={[
                "flex items-center gap-[12px] px-[12px] py-[10px]",
                chat.active ? "bg-[#2a3942]/55" : "",
              ].join(" ")}
            >
              {chat.collage ? (
                <span className="grid h-[52px] w-[52px] shrink-0 grid-cols-2 grid-rows-2 gap-px overflow-hidden rounded-full bg-[#dfe5e7]">
                  {chat.collage.map((src) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ))}
                </span>
              ) : chat.avatar ? (
                <span
                  className={[
                    "relative h-[52px] w-[52px] shrink-0 overflow-hidden bg-[#2a3942]",
                    chat.brand ? "rounded-[30%]" : "rounded-full",
                  ].join(" ")}
                >
                  <Image
                    src={chat.avatar}
                    alt=""
                    width={52}
                    height={52}
                    className={[
                      "h-full w-full object-cover",
                      chat.brand ? "scale-[1.08]" : "",
                    ].join(" ")}
                  />
                </span>
              ) : (
                <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#cfd4d6]">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    {chat.group ? (
                      <>
                        <circle cx="9" cy="8" r="3.2" fill="#fff" />
                        <circle cx="16.5" cy="9" r="2.6" fill="#fff" />
                        <path
                          d="M2.5 19.5c0-3 3-5.2 6.5-5.2s6.5 2.2 6.5 5.2"
                          fill="#fff"
                        />
                        <path
                          d="M13 19.5c.4-2.2 2.4-3.8 5-3.8 2.2 0 4 1.1 4.6 2.8"
                          fill="#fff"
                        />
                      </>
                    ) : (
                      <>
                        <circle cx="12" cy="8" r="4" fill="#fff" />
                        <path
                          d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6"
                          fill="#fff"
                        />
                      </>
                    )}
                  </svg>
                </span>
              )}

              <div className="flex min-w-0 flex-1 gap-2 border-b border-white/[0.06] pb-[10px]">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[16px] font-medium text-[#e9edef]">
                    {chat.name}
                  </p>
                  <p className="mt-[2px] truncate text-[14px] leading-[18px] text-[#8696a0]">
                    {chat.preview}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col items-end justify-between gap-1 self-stretch py-0.5">
                  <p
                    className={[
                      "text-[12px]",
                      chat.unread > 0 ? "text-[#00a884]" : "text-[#8696a0]",
                    ].join(" ")}
                  >
                    {chat.time}
                  </p>
                  <div className="flex items-center gap-1.5">
                    {chat.pinned ? (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="#8696a0"
                        aria-hidden
                      >
                        <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z" />
                      </svg>
                    ) : null}
                    {chat.unread > 0 ? (
                      <span className="flex h-[20px] min-w-[20px] shrink-0 items-center justify-center rounded-full bg-[#00a884] px-[5px] text-[11px] font-semibold text-[#111b21]">
                        {chat.unread}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PhoneShell>
  );
}

/** Hero conversation — sounds like a real late-night WhatsApp thread. */
export function HeroScene({ scale = 0.88 }: { scale?: number }) {
  return (
    <PhoneShell wallpaperId="hero" scale={scale}>
      <WaHeader subtitle="online" />
      <ChatBody>
        <DatePill>Today</DatePill>
        <Bubble from="user" time="7:41 PM">
          FoodPlace just dropped their account
        </Bubble>
        <Bubble from="user" time="7:41 PM">
          transfer 15k?
        </Bubble>
        <Bubble from="kedu" time="7:42 PM">
          It&apos;s 7:42PM. Transfers reopen at 6AM.
          {"\n\n"}
          <span className="font-semibold">Transfer blocked.</span>
        </Bubble>
        <Bubble from="user" time="7:42 PM">
          ah come on. please
        </Bubble>
        <Bubble from="kedu" time="7:42 PM">
          No. Land fund stays locked till morning.
          {"\n"}
          No override.
        </Bubble>
        <Bubble from="user" time="7:43 PM">
          fine. what did I even spend this week
        </Bubble>
        <Bubble from="kedu" time="7:43 PM">
          Food ₦18.4k · Transfers ₦6.2k · Noise ₦4.1k
        </Bubble>
        <Bubble from="user" time="7:43 PM">
          lock snacks after 7 too
        </Bubble>
        <Bubble from="kedu" time="7:44 PM">
          Done. Strict mode is on. Sleep — the money will still be there.
        </Bubble>
      </ChatBody>
      <WaComposer />
    </PhoneShell>
  );
}
