import Image from "next/image";
import { copy } from "@/lib/copy";
import { BrowserFrame } from "@/components/ui/BrowserFrame";

const chats = [
  {
    name: "Kedu",
    preview: "It's 7:42PM. Transfers reopen at 6AM.",
    active: true,
    avatar: "/kedu-mark.png",
    brand: true,
  },
  {
    name: "Mum",
    preview: "Send the school fees when…",
    active: false,
    avatar: "/avatars/mum.jpg",
    brand: false,
  },
  {
    name: "Chioma",
    preview: "Are we still on for Saturday?",
    active: false,
    avatar: "/avatars/chioma.jpg",
    brand: false,
  },
  {
    name: "Tunde",
    preview: "Just sent the transfer 👍",
    active: false,
    avatar: "/avatars/tunde.jpg",
    brand: false,
  },
  {
    name: "Ada",
    preview: "Voice message",
    active: false,
    avatar: "/avatars/ada.jpg",
    brand: false,
  },
  {
    name: "FoodPlace",
    preview: "Your order is ready 👀",
    active: false,
    avatar: "/avatars/foodplace.jpg",
    brand: false,
  },
];

function ChatAvatar({
  src,
  brand,
  size = 44,
}: {
  src: string;
  brand?: boolean;
  size?: number;
}) {
  return (
    <span
      className={[
        "relative shrink-0 overflow-hidden rounded-full bg-[#f0f2f5]",
        brand ? "rounded-[30%]" : "rounded-full",
      ].join(" ")}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt=""
        width={size}
        height={size}
        className={[
          "h-full w-full object-cover",
          brand ? "scale-[1.08]" : "",
        ].join(" ")}
      />
    </span>
  );
}

export function HeroProduct() {
  return (
    <BrowserFrame url="web.whatsapp.com">
      <div className="grid h-[640px] md:h-[760px] md:grid-cols-[280px_1fr] lg:h-[820px]">
        <aside className="hidden h-full flex-col border-r border-black/[0.08] bg-[#fff] md:flex">
          <div className="flex items-center justify-between border-b border-black/[0.06] px-4 py-3">
            <p className="text-[16px] font-semibold text-ink">Chats</p>
            <div className="flex gap-2 text-muted" aria-hidden="true">
              <span className="text-lg leading-none">⋮</span>
            </div>
          </div>
          <div className="px-3 py-2">
            <div className="flex h-9 items-center rounded-lg bg-[#f0f2f5] px-3 text-[13px] text-muted">
              Search or start a new chat
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            {chats.map((chat) => (
              <div
                key={chat.name}
                className={[
                  "flex items-center gap-3 px-3 py-3",
                  chat.active ? "bg-[#f0f2f5]" : "hover:bg-[#f5f6f6]",
                ].join(" ")}
              >
                <ChatAvatar src={chat.avatar} brand={chat.brand} size={44} />
                <div className="min-w-0 flex-1 border-b border-black/[0.04] pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-[15px] font-medium text-ink">
                      {chat.name}
                    </p>
                    <p className="shrink-0 text-[11px] text-muted">7:42 PM</p>
                  </div>
                  <p className="mt-0.5 truncate text-[13px] text-muted">
                    {chat.preview}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <div className="flex h-full flex-col bg-[#efeae2]">
          <div className="flex items-center gap-3 border-b border-black/5 bg-[#f0f2f5] px-4 py-2.5">
            <ChatAvatar src="/kedu-mark.png" brand size={40} />
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-semibold leading-tight text-ink">
                Kedu
              </p>
              <p className="text-[12px] text-muted">online</p>
            </div>
            <div className="hidden gap-4 text-muted sm:flex" aria-hidden="true">
              <span>🔍</span>
              <span>⋮</span>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-end gap-2.5 overflow-hidden px-4 py-5 sm:px-8 sm:py-6">
            <div className="mx-auto mb-2 rounded-lg bg-white/80 px-3 py-1 text-[11px] font-medium text-muted shadow-sm">
              TODAY
            </div>

            <div className="max-w-[78%] rounded-lg rounded-tl-none bg-white px-3 py-2 text-[14.5px] leading-snug text-ink shadow-sm sm:max-w-[62%]">
              Transfer ₦15,000 to FoodPlace?
              <p className="mt-1 text-right text-[10px] text-muted">7:41 PM</p>
            </div>

            <div className="ml-auto max-w-[82%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-3 py-2 text-[14.5px] leading-snug text-ink shadow-sm sm:max-w-[64%]">
              <p className="font-semibold">{copy.whatsappMock.blockMessage}</p>
              <p className="mt-1 text-[13px] text-[#3b4a54]">
                No override. No exceptions. Your land fund stays untouched.
              </p>
              <p className="mt-1 text-right text-[10px] text-muted">7:42 PM ✓✓</p>
            </div>

            <div className="max-w-[78%] rounded-lg rounded-tl-none bg-white px-3 py-2 text-[14.5px] leading-snug text-ink shadow-sm sm:max-w-[62%]">
              Okay… show me what I spent this week instead.
              <p className="mt-1 text-right text-[10px] text-muted">7:42 PM</p>
            </div>

            <div className="ml-auto max-w-[84%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-3 py-2 text-[14.5px] leading-snug text-ink shadow-sm sm:max-w-[66%]">
              Food ₦18.4k · Transfers ₦6.2k · The rest went to noise. Want the
              full breakdown?
              <p className="mt-1 text-right text-[10px] text-muted">7:42 PM ✓✓</p>
            </div>

            <div className="max-w-[70%] rounded-lg rounded-tl-none bg-white px-3 py-2 text-[14.5px] leading-snug text-ink shadow-sm sm:max-w-[55%]">
              Yes. And lock snacks after 7PM too.
              <p className="mt-1 text-right text-[10px] text-muted">7:43 PM</p>
            </div>

            <div className="ml-auto max-w-[80%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-3 py-2 text-[14.5px] leading-snug text-ink shadow-sm sm:max-w-[60%]">
              Done. Snacks locked with the 7PM rule. Strict mode is on.
              <p className="mt-1 text-right text-[10px] text-muted">7:43 PM ✓✓</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#f0f2f5] px-3 py-2.5">
            <div className="flex h-10 flex-1 items-center rounded-full bg-white px-4 text-[14px] text-muted shadow-sm">
              Type a message
            </div>
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00a884] text-white"
              aria-hidden="true"
            >
              ▶
            </span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
