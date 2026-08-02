import { copy } from "@/lib/copy";

function PhoneFrame({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        "w-[210px] overflow-hidden rounded-[28px] border-[3px] border-[#1a1a1a] bg-[#1a1a1a] shadow-2xl sm:w-[230px]",
        className,
      ].join(" ")}
    >
      <div className="rounded-[24px] bg-wa-bg">
        <div className="flex items-center gap-2 bg-[#075e54] px-3 py-2.5 text-white">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-xs font-bold">
            K
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold leading-tight">Kedu</p>
            <p className="text-[10px] text-white/80">online</p>
          </div>
        </div>
        <div className="space-y-2 px-2.5 py-3">{children}</div>
      </div>
    </div>
  );
}

export function WhatsAppMock() {
  return (
    <div
      className="relative mx-auto flex h-[320px] w-full max-w-[420px] items-end justify-center sm:h-[360px]"
      aria-hidden="true"
    >
      <div className="absolute left-[8%] top-6 rotate-[-10deg] opacity-80 sm:left-[12%]">
        <PhoneFrame>
          <div className="max-w-[90%] rounded-lg rounded-tl-sm bg-white px-2 py-1.5 text-[11px] leading-snug shadow-sm">
            Send ₦8,000 for dinner?
          </div>
          <div className="ml-auto max-w-[92%] rounded-lg rounded-tr-sm bg-wa-green px-2 py-1.5 text-[11px] leading-snug shadow-sm">
            Not tonight. Land fund stays locked.
          </div>
        </PhoneFrame>
      </div>
      <div className="relative z-10 rotate-[3deg]">
        <PhoneFrame>
          <div className="max-w-[90%] rounded-lg rounded-tl-sm bg-white px-2 py-1.5 text-[11px] leading-snug shadow-sm">
            Transfer ₦15,000 to FoodPlace?
          </div>
          <div className="ml-auto max-w-[95%] rounded-lg rounded-tr-sm bg-wa-green px-2 py-1.5 text-[11px] leading-snug shadow-sm">
            <p className="font-semibold">{copy.whatsappMock.blockMessage}</p>
            <p className="mt-1 text-[10px] text-muted">No override. No exceptions.</p>
          </div>
          <p className="text-right text-[10px] text-muted">7:42 PM</p>
        </PhoneFrame>
      </div>
    </div>
  );
}

export function WhatsAppMockInline() {
  return (
    <div className="flex justify-center py-2" aria-hidden="true">
      <PhoneFrame className="rotate-[-2deg]">
        <div className="max-w-[90%] rounded-lg rounded-tl-sm bg-white px-2 py-1.5 text-[11px] leading-snug shadow-sm">
          Transfer ₦15,000 to FoodPlace?
        </div>
        <div className="ml-auto max-w-[95%] rounded-lg rounded-tr-sm bg-wa-green px-2 py-1.5 text-[11px] leading-snug shadow-sm">
          <p className="font-semibold">{copy.whatsappMock.blockMessage}</p>
        </div>
        <p className="text-right text-[10px] text-muted">7:42 PM</p>
      </PhoneFrame>
    </div>
  );
}
