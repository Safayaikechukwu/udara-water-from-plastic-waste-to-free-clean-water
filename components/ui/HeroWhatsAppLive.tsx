"use client";

import Image from "next/image";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { PhoneShell } from "@/components/ui/FeatureSceneIllustrations";
import {
  CHATS,
  FAMILY_THREAD,
  KEDU_THREAD,
  familyChat,
  keduChat,
  type Bubble,
  type ChatRow,
} from "@/components/ui/heroWhatsAppData";
import type { HeroAnimState } from "@/components/ui/useHeroAnim";

/* ── UI bits ── */

function DefaultPersonIcon({ size }: { size: number }) {
  return (
    <svg
      width={size * 0.62}
      height={size * 0.62}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle cx="12" cy="8" r="4" fill="#fff" />
      <path d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6" fill="#fff" />
    </svg>
  );
}

function DefaultGroupIcon({ size }: { size: number }) {
  return (
    <svg
      width={size * 0.68}
      height={size * 0.68}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle cx="9" cy="8" r="3.2" fill="#fff" />
      <circle cx="16.5" cy="9" r="2.6" fill="#fff" />
      <path d="M2.5 19.5c0-3 3-5.2 6.5-5.2s6.5 2.2 6.5 5.2" fill="#fff" />
      <path
        d="M13 19.5c.4-2.2 2.4-3.8 5-3.8 2.2 0 4 1.1 4.6 2.8"
        fill="#fff"
      />
    </svg>
  );
}

function PinIcon() {
  // WhatsApp-style pushpin (upright), sits under the timestamp on the right
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="#8696a0"
      aria-hidden
      className="shrink-0"
    >
      <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z" />
    </svg>
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
        d="M15 6.2 20.5 3.5v9L15 9.8V6.2Z"
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
        d="M15.5 12.2v2a1.5 1.5 0 0 1-1.6 1.5 14.8 14.8 0 0 1-6.5-2.3A14.6 14.6 0 0 1 3.6 9.6 14.8 14.8 0 0 1 1.3 3.1 1.5 1.5 0 0 1 2.8 1.5h2A1.5 1.5 0 0 1 6.3 2.8c.1.8.3 1.6.6 2.3a1.5 1.5 0 0 1-.3 1.6L5.5 7.8a12 12 0 0 0 4.7 4.7l1.1-1.1a1.5 1.5 0 0 1 1.6-.3c.7.3 1.5.5 2.3.6a1.5 1.5 0 0 1 1.3 1.5Z"
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
        d="M11 4v14M4 11h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V21h2v-3.1A7 7 0 0 0 19 11h-2z" />
    </svg>
  );
}

function GroupCollage({ srcs, size }: { srcs: string[]; size: number }) {
  const tiles = srcs.slice(0, 4);
  return (
    <span
      className="grid shrink-0 grid-cols-2 grid-rows-2 overflow-hidden rounded-full bg-[#dfe5e7]"
      style={{ width: size, height: size, gap: 1 }}
    >
      {tiles.map((src) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={src} src={src} alt="" className="h-full w-full object-cover" />
      ))}
    </span>
  );
}

function Avatar({
  chat,
  size = 44,
}: {
  chat: Pick<ChatRow, "avatar" | "brand" | "group" | "collage">;
  size?: number;
}) {
  if (chat.brand && chat.avatar) {
    return (
      <span
        className="relative shrink-0 overflow-hidden rounded-[30%] bg-[#4a0508]"
        style={{ width: size, height: size }}
      >
        <Image
          src={chat.avatar}
          alt=""
          width={size}
          height={size}
          className="h-full w-full scale-[1.08] object-cover"
        />
      </span>
    );
  }

  if (chat.collage && chat.collage.length >= 4) {
    return <GroupCollage srcs={chat.collage} size={size} />;
  }

  if (!chat.avatar) {
    return (
      <span
        className="flex shrink-0 items-center justify-center rounded-full bg-[#cfd4d6]"
        style={{ width: size, height: size }}
      >
        {chat.group ? (
          <DefaultGroupIcon size={size} />
        ) : (
          <DefaultPersonIcon size={size} />
        )}
      </span>
    );
  }

  return (
    <span
      className="relative shrink-0 overflow-hidden rounded-full bg-[#ddd]"
      style={{ width: size, height: size }}
    >
      <Image
        src={chat.avatar}
        alt=""
        width={size}
        height={size}
        className="h-full w-full object-cover"
      />
    </span>
  );
}

function Unread({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <span className="flex h-[19px] min-w-[19px] shrink-0 items-center justify-center rounded-full bg-[#25d366] px-[5px] text-[11px] font-semibold text-white">
      {count > 99 ? "99+" : count}
    </span>
  );
}

function BubbleView({
  bubble,
  dark,
}: {
  bubble: Bubble;
  dark?: boolean;
}) {
  const mine = bubble.from === "user";
  return (
    <div
      className={[
        "hero-wa-bubble px-3 py-2 text-[15px] leading-[20px] shadow-sm",
        dark
          ? mine
            ? "ml-auto max-w-[88%] rounded-[8px] rounded-br-[0] bg-[#005c4b] text-[#e9edef]"
            : "max-w-[88%] rounded-[8px] rounded-bl-[0] bg-[#202c33] text-[#e9edef]"
          : mine
            ? "ml-auto max-w-[70%] rounded-lg rounded-tr-none bg-[#d9fdd3] text-ink"
            : "max-w-[72%] rounded-lg rounded-tl-none bg-white text-ink",
      ].join(" ")}
    >
      {bubble.name && !mine ? (
        <p
          className={[
            "mb-0.5 text-[13px] font-semibold",
            dark ? "text-[#53bdeb]" : "text-[#027eb5]",
          ].join(" ")}
        >
          {bubble.name}
        </p>
      ) : null}
      <p className="whitespace-pre-line">{bubble.text}</p>
      {bubble.bold ? (
        <p className="mt-1.5 font-semibold">{bubble.bold}</p>
      ) : null}
      <p
        className={[
          "mt-1 text-right text-[11px]",
          dark ? "text-[#8696a0]" : "text-muted",
        ].join(" ")}
      >
        {bubble.time}
        {mine ? " ✓✓" : ""}
      </p>
    </div>
  );
}

function ChatRowView({
  chat,
  active,
  dark,
  mobile,
}: {
  chat: ChatRow;
  active: boolean;
  dark?: boolean;
  mobile?: boolean;
}) {
  return (
    <div
      className={[
        "flex items-center gap-3 px-3 transition-colors duration-200",
        mobile ? "py-[10px]" : "py-2.5",
        active ? (dark ? "bg-[#2a3942]" : "bg-[#f0f2f5]") : "",
      ].join(" ")}
    >
      <Avatar chat={chat} size={mobile ? 52 : 44} />
      <div
        className={[
          "flex min-w-0 flex-1 gap-2 pb-2",
          dark
            ? "border-b border-white/[0.06]"
            : "border-b border-black/[0.04]",
        ].join(" ")}
      >
        <div className="min-w-0 flex-1">
          <p
            className={[
              "truncate font-medium",
              mobile ? "text-[17px]" : "text-[15px]",
              dark ? "text-[#e9edef]" : "text-ink",
            ].join(" ")}
          >
            {chat.name}
          </p>
          <p
            className={[
              "mt-0.5 truncate",
              mobile ? "text-[14.5px]" : "text-[13px]",
              dark ? "text-[#8696a0]" : "text-muted",
            ].join(" ")}
          >
            {chat.preview}
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-end justify-between gap-1 self-stretch py-0.5">
          <p
            className={[
              "text-[12px]",
              chat.unread > 0
                ? "font-medium text-[#25d366]"
                : dark
                  ? "text-[#8696a0]"
                  : "text-muted",
            ].join(" ")}
          >
            {chat.time}
          </p>
          <div className="flex items-center gap-1.5">
            {chat.pinned ? <PinIcon /> : null}
            <Unread count={chat.unread} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Sidebar({
  activeId,
  dark,
  mobile,
}: {
  activeId: string;
  dark?: boolean;
  mobile?: boolean;
}) {
  const pinned = CHATS.filter((c) => c.pinned);
  const rest = CHATS.filter((c) => !c.pinned);

  return (
    <div
      className={[
        "flex h-full flex-col",
        dark ? "bg-[#111b21]" : "bg-white",
      ].join(" ")}
    >
      {mobile ? (
        <>
          <div className="relative z-30 flex items-center justify-between bg-[#1f2c34] px-4 pb-2.5 pt-1 text-[#e9edef]">
            <p className="text-[28px] font-bold leading-none tracking-tight">
              Chats
            </p>
            <div className="flex items-center gap-[18px] text-[#aebac1]">
              <CameraIcon />
              <NewChatIcon />
            </div>
          </div>
          <div className="relative z-30 bg-[#1f2c34] px-3 pb-3">
            <div className="flex h-9 items-center gap-2 rounded-[10px] bg-[#2a3942] px-3 text-[15px] text-[#8696a0]">
              <SearchIcon />
              <span>Ask Meta AI or Search</span>
            </div>
            <div className="mt-3 flex gap-2 overflow-hidden">
              {["All", "Unread", "Favorites", "Groups"].map((tab, i) => (
                <span
                  key={tab}
                  className={[
                    "rounded-full px-3 py-1.5 text-[13px] font-medium",
                    i === 0
                      ? "bg-[#0b463a] text-[#25d366]"
                      : "bg-[#2a3942] text-[#8696a0]",
                  ].join(" ")}
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={[
              "flex items-center justify-between px-4 py-3",
              dark
                ? "bg-[#1f2c34] text-[#e9edef]"
                : "border-b border-black/[0.06]",
            ].join(" ")}
          >
            <p className="text-[17px] font-semibold">Chats</p>
            <span className={dark ? "text-[#aebac1]" : "text-muted"}>⋮</span>
          </div>
          <div className={["px-3 pb-2 pt-2", dark ? "bg-[#1f2c34]" : ""].join(" ")}>
            <div
              className={[
                "flex h-9 items-center rounded-lg px-3 text-[13px]",
                dark
                  ? "bg-[#2a3942] text-[#8696a0]"
                  : "bg-[#f0f2f5] text-muted",
              ].join(" ")}
            >
              Search or start a new chat
            </div>
          </div>
        </>
      )}

      <div className="min-h-0 flex-1 overflow-hidden">
        {[...pinned, ...rest].map((chat) => (
          <ChatRowView
            key={chat.id}
            chat={chat}
            active={activeId === chat.id}
            dark={dark}
            mobile={mobile}
          />
        ))}
      </div>
    </div>
  );
}

function Thread({
  chat,
  bubbles,
  typing,
  dark,
  showBack,
  /** Pin bubbles to top — required for hard-cropped hero phone */
  pinTop,
  hideComposer,
}: {
  chat: ChatRow;
  bubbles: Bubble[];
  typing: boolean;
  dark?: boolean;
  showBack?: boolean;
  pinTop?: boolean;
  hideComposer?: boolean;
}) {
  return (
    <div
      className={[
        "flex h-full min-h-0 flex-col",
        dark ? "bg-transparent" : "bg-[#efeae2]",
      ].join(" ")}
    >
      <div
        className={[
          "relative z-30 flex shrink-0 items-center gap-1 px-1 shadow-[0_1px_0_rgba(0,0,0,0.28)]",
          dark
            ? "h-[56px] bg-[#1f2c34] text-[#e9edef]"
            : "border-b border-black/5 bg-[#f0f2f5] py-2.5 pl-3 pr-3",
        ].join(" ")}
      >
        {showBack ? (
          <span className="flex h-11 w-9 shrink-0 items-center justify-center text-[#53bdeb]">
            <svg width="12" height="21" viewBox="0 0 12 21" fill="currentColor">
              <path d="M10.5 1.5 2 10.5l8.5 9" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        ) : null}
        <Avatar chat={chat} size={dark ? 36 : 40} />
        <div className="min-w-0 flex-1 px-2">
          <p
            className={[
              "truncate font-semibold",
              dark ? "text-[17px] leading-5" : "text-[15px]",
            ].join(" ")}
          >
            {chat.name}
          </p>
          <p
            className={[
              dark ? "text-[13px] text-[#8696a0]" : "text-[12px] text-muted",
            ].join(" ")}
          >
            {typing
              ? "typing…"
              : chat.id === "family"
                ? "tap here for group info"
                : "online"}
          </p>
        </div>
        {dark ? (
          <div className="flex shrink-0 items-center gap-[22px] pr-3.5 text-[#aebac1]">
            <VideoCallIcon />
            <PhoneCallIcon />
          </div>
        ) : null}
      </div>

      <div
        className={[
          "relative z-20 flex min-h-0 flex-1 flex-col gap-[6px] overflow-hidden px-3 py-3",
          pinTop ? "justify-start" : "justify-end",
          dark ? "px-[10px]" : "sm:px-5",
        ].join(" ")}
      >
        <div
          className={[
            "mx-auto mb-1 rounded-md px-2.5 py-1 text-[11px] font-medium uppercase",
            dark
              ? "bg-[#182229] text-[#8696a0] shadow-sm"
              : "bg-white/80 text-muted shadow-sm",
          ].join(" ")}
        >
          Today
        </div>
        {bubbles.map((b) => (
          <BubbleView key={b.id} bubble={b} dark={dark} />
        ))}
        {typing ? (
          <div
            className={[
              "hero-wa-bubble max-w-[70px] px-3 py-2.5",
              dark
                ? "rounded-[8px] rounded-bl-[0] bg-[#202c33]"
                : "rounded-lg rounded-tl-none bg-white shadow-sm",
            ].join(" ")}
          >
            <span className="hero-wa-typing" aria-hidden>
              <i />
              <i />
              <i />
            </span>
          </div>
        ) : null}
      </div>

      {hideComposer ? null : (
        <div
          className={[
            "relative z-30 flex shrink-0 items-end gap-2",
            dark ? "bg-[#1f2c34] px-2 pb-7 pt-2" : "bg-[#f0f2f5] px-3 py-2",
          ].join(" ")}
        >
          {dark ? (
            <span className="mb-1 flex h-10 w-10 items-center justify-center text-[#aebac1]">
              <PlusIcon />
            </span>
          ) : null}
          <div
            className={[
              "flex h-10 flex-1 items-center rounded-full px-4 text-[15px]",
              dark
                ? "bg-[#2a3942] text-[#8696a0]"
                : "bg-white text-muted shadow-sm",
            ].join(" ")}
          >
            {dark ? "Message" : "Type a message"}
          </div>
          <span className="mb-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#00a884] text-white">
            {dark ? <MicIcon /> : "▶"}
          </span>
        </div>
      )}
    </div>
  );
}

export function HeroWhatsAppLive({ anim }: { anim: HeroAnimState }) {
  const { phase, activeId, familyCount, keduCount, typing, done } = anim;
  const viewPhase = done || phase === "kedu" ? "kedu" : phase;

  return (
    <BrowserFrame url="web.whatsapp.com">
      <div className="grid h-[640px] md:h-[720px] md:grid-cols-[300px_1fr] lg:h-[780px]">
        <aside className="h-full border-r border-black/[0.08]">
          <Sidebar activeId={done ? "kedu" : activeId} />
        </aside>
        <div className="h-full min-h-0">
          {viewPhase === "kedu" ? (
            <Thread
              chat={keduChat}
              bubbles={KEDU_THREAD.slice(0, Math.max(keduCount, 0))}
              typing={done ? false : typing}
            />
          ) : viewPhase === "list" ? (
            <Thread
              chat={familyChat}
              bubbles={FAMILY_THREAD.slice(0, 3)}
              typing={false}
            />
          ) : (
            <Thread
              chat={familyChat}
              bubbles={FAMILY_THREAD.slice(0, Math.max(familyCount, 1))}
              typing={false}
            />
          )}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function HeroPhoneLive({
  anim,
  scale = 0.82,
}: {
  anim: HeroAnimState;
  scale?: number;
}) {
  const { phase, activeId, familyCount, keduCount, typing, done } = anim;
  const viewPhase = done || phase === "kedu" ? "kedu" : phase;

  return (
    <div className="mx-auto w-full max-w-[340px]">
      <PhoneShell wallpaperId="hero-live" scale={scale} variant="hero">
        <div className="relative z-20 flex h-full min-h-0 flex-1 flex-col overflow-hidden bg-[#111b21]">
          {viewPhase === "list" ? (
            <Sidebar activeId={activeId} dark mobile />
          ) : viewPhase === "family" ? (
            <Thread
              chat={familyChat}
              bubbles={FAMILY_THREAD.slice(0, Math.max(familyCount, 1))}
              typing={false}
              dark
              showBack
              pinTop
              hideComposer
            />
          ) : (
            <Thread
              chat={keduChat}
              bubbles={KEDU_THREAD.slice(0, Math.max(keduCount, 0))}
              typing={done ? false : typing}
              dark
              showBack
              pinTop
              hideComposer
            />
          )}
        </div>
      </PhoneShell>
    </div>
  );
}
