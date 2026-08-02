/** Faithful WhatsApp dark-mode chat mockups for feature cards. */

import Image from "next/image";

function SignalIcon() {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden>
      <rect x="0" y="6.5" width="2.2" height="3.5" rx="0.4" fill="currentColor" />
      <rect x="3.5" y="4.5" width="2.2" height="5.5" rx="0.4" fill="currentColor" />
      <rect x="7" y="2.2" width="2.2" height="7.8" rx="0.4" fill="currentColor" />
      <rect x="10.5" y="0" width="2.2" height="10" rx="0.4" fill="currentColor" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
      <path
        d="M7 8.6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2.6-1.7a3.7 3.7 0 0 1 5.2 0l-.9.9a2.4 2.4 0 0 0-3.4 0l-.9-.9Zm-1.9-1.9a6.3 6.3 0 0 1 9 0l-.9.9a5 5 0 0 0-7.2 0l-.9-.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="22" height="11" viewBox="0 0 22 11" fill="none" aria-hidden>
      <rect
        x="0.5"
        y="0.5"
        width="18"
        height="10"
        rx="2.2"
        stroke="currentColor"
        strokeOpacity="0.45"
      />
      <rect x="2" y="2" width="14" height="7" rx="1.2" fill="currentColor" />
      <path
        d="M19.5 3.2c.8.4.8 1.4 0 1.8V7c.8-.4.8-1.4 0-1.8V3.2Z"
        fill="currentColor"
        fillOpacity="0.45"
      />
    </svg>
  );
}

function BackChevron() {
  return (
    <svg width="10" height="17" viewBox="0 0 10 17" fill="none" aria-hidden>
      <path
        d="M8.5 1.5 1.8 8.5l6.7 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VideoCallIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
      <rect x="0.75" y="1.5" width="11.5" height="11" rx="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M13.2 5.2 17 3.4v7.2l-3.8-1.8V5.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneCallIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
      <path
        d="M3.2 1.6c.4-.4 1-.4 1.3 0l1.5 1.5c.3.3.4.8.2 1.2L5.5 5.7c.7 1.4 1.9 2.6 3.3 3.3l1.4-.7c.4-.2.9-.1 1.2.2l1.5 1.5c.4.3.4.9 0 1.3l-.9.9c-.4.4-1 .6-1.6.5C6.2 13.2 1.8 8.8 1.3 4.6c-.1-.6.1-1.2.5-1.6l1.4-1.4Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AttachIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M9 3.2v11.6M3.2 9h11.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden>
      <rect x="4.5" y="1.5" width="7" height="11" rx="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M2.5 9.5a5.5 5.5 0 0 0 11 0M8 15v3.2"
        stroke="currentColor"
        strokeWidth="1.5"
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
  /* Approximates WhatsApp dark doodle tile without external assets */
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <pattern id={patternId} width="84" height="84" patternUnits="userSpaceOnUse">
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

function PhoneShell({
  children,
  wallpaperId,
}: {
  children: React.ReactNode;
  wallpaperId: string;
}) {
  const patternId = `wa-doodle-${wallpaperId}`;

  return (
    <div
      className="relative mx-auto w-[242px] select-none sm:w-[248px] lg:w-[268px]"
      aria-hidden="true"
    >
      {/* Outer titanium-style frame */}
      <div className="relative overflow-hidden rounded-[40px] bg-[#1c1c1e] p-[3px] shadow-[0_28px_60px_rgba(0,0,0,0.32)]">
        <div className="relative overflow-hidden rounded-[37px] border border-white/10 bg-[#0b141a]">
          {/* Screen */}
          <div className="relative min-h-[500px] sm:min-h-[480px] lg:min-h-[520px]">
            <div className="absolute inset-0 bg-[#0b141a]" />
            <WaDoodleWallpaper patternId={patternId} />

            {/* Status bar */}
            <div className="relative z-40 flex items-center justify-between px-[18px] pb-1 pt-[14px] text-[11px] font-semibold text-white">
              <span className="w-[42px] tracking-tight">9:41</span>
              {/* Dynamic Island */}
              <div className="absolute left-1/2 top-[10px] h-[24px] w-[96px] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />
              <div className="flex items-center gap-[5px] text-white">
                <SignalIcon />
                <WifiIcon />
                <BatteryIcon />
              </div>
            </div>

            <div className="relative z-20 flex min-h-[460px] flex-col">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WaHeader({ subtitle = "online" }: { subtitle?: string }) {
  return (
    <div className="relative z-30 flex items-center gap-1.5 bg-[#1f2c34] px-1.5 pb-2 pt-1.5 shadow-[0_1px_0_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-0.5 text-[#aebac1]">
        <span className="flex h-8 w-7 items-center justify-center text-[#53bdeb]">
          <BackChevron />
        </span>
        <span className="relative h-[34px] w-[34px] shrink-0 overflow-hidden rounded-[30%] bg-[#3171F6]">
          <Image
            src="/kedu-mark.png"
            alt=""
            width={34}
            height={34}
            className="h-full w-full scale-[1.08] object-cover"
          />
        </span>
      </div>

      <div className="min-w-0 flex-1 pl-0.5">
        <p className="truncate text-[14px] font-medium leading-tight text-[#e9edef]">
          Kedu
        </p>
        <p className="truncate text-[11px] leading-tight text-[#8696a0]">{subtitle}</p>
      </div>

      <div className="flex items-center gap-3.5 pr-2 text-[#aebac1]">
        <VideoCallIcon />
        <PhoneCallIcon />
      </div>
    </div>
  );
}

function WaComposer() {
  return (
    <div className="relative z-30 mt-auto flex items-end gap-1.5 bg-[#1f2c34] px-1.5 pb-2.5 pt-1.5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#8696a0]">
        <AttachIcon />
      </div>
      <div className="flex min-h-9 flex-1 items-center rounded-full bg-[#2a3942] px-3.5 py-2">
        <span className="text-[12.5px] text-[#8696a0]">Message</span>
      </div>
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00a884] text-white">
        <MicIcon />
      </div>
    </div>
  );
}

function DatePill({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center py-1.5">
      <span className="rounded-[7px] bg-[#182229] px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.02em] text-[#8696a0] shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
        {children}
      </span>
    </div>
  );
}

function Bubble({
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
    <div className={`relative flex ${isKedu ? "justify-start" : "justify-end"}`}>
      {/* Tail */}
      <svg
        className={`absolute bottom-0 h-[11px] w-[10px] ${
          isKedu ? "-left-[5px] text-[#202c33]" : "-right-[5px] text-[#005c4b]"
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
          "relative max-w-[82%] px-[9px] pb-[5px] pt-[5px] text-[12.5px] leading-[1.35] text-[#e9edef] shadow-[0_1px_0.5px_rgba(0,0,0,0.18)]",
          isKedu
            ? "rounded-[7.5px] rounded-bl-[0] bg-[#202c33]"
            : "rounded-[7.5px] rounded-br-[0] bg-[#005c4b]",
        ].join(" ")}
      >
        <div className="whitespace-pre-wrap pr-1">{children}</div>
        <div className="mt-0.5 flex items-center justify-end gap-[3px]">
          <span className="text-[10px] leading-none text-[#8696a0]">{time}</span>
          {!isKedu ? <DoubleTick read /> : null}
        </div>
      </div>
    </div>
  );
}

function ChatBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-20 flex-1 space-y-[3px] px-2 pb-2 pt-1.5">{children}</div>
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
      </ChatBody>
      <WaComposer />
    </PhoneShell>
  );
}
