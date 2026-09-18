import type { ReactNode } from "react";

type BrowserFrameProps = {
  children: ReactNode;
  url?: string;
  className?: string;
  /** Real UI (video player) instead of a decorative mock. */
  live?: boolean;
};

export function BrowserFrame({
  children,
  url = "web.whatsapp.com",
  className = "",
  live = false,
}: BrowserFrameProps) {
  return (
    <div
      className={[
        "overflow-hidden rounded-t-[12px] border border-b-0 border-black/10 bg-white",
        "shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_28px_80px_-16px_rgba(0,0,0,0.35)]",
        className,
      ].join(" ")}
      {...(live ? {} : { "aria-hidden": true as const })}
    >
      <div className="flex items-center gap-3 border-b border-black/[0.06] bg-[#ececec] px-4 py-2.5">
        <div className="flex shrink-0 items-center gap-2">
          <span className="h-[12px] w-[12px] rounded-full bg-[#ff5f57] shadow-[inset_0_-0.5px_0.5px_rgba(0,0,0,0.2)]" />
          <span className="h-[12px] w-[12px] rounded-full bg-[#febc2e] shadow-[inset_0_-0.5px_0.5px_rgba(0,0,0,0.2)]" />
          <span className="h-[12px] w-[12px] rounded-full bg-[#28c840] shadow-[inset_0_-0.5px_0.5px_rgba(0,0,0,0.2)]" />
        </div>
        <div className="mx-auto flex h-8 w-full max-w-[520px] items-center gap-2 rounded-md bg-white px-3 text-[12px] text-muted shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
          <svg
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5 shrink-0 text-[#34c759]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm-.75 3.75a.75.75 0 0 1 1.5 0v3.19l1.78 1.78a.75.75 0 1 1-1.06 1.06l-2-2A.75.75 0 0 1 7.25 8.5V5.25Z" />
          </svg>
          <span className="truncate">{url}</span>
        </div>
        <div className="hidden w-[54px] shrink-0 sm:block" />
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}
