import { copy } from "@/lib/copy";
import { Reveal } from "@/components/ui/Reveal";

const iconColors: Record<string, string> = {
  chat: "bg-[#3171f6]",
  goal: "bg-[#f2a93c]",
  fund: "bg-[#e03e3e]",
  lock: "bg-[#0f7b6c]",
  progress: "bg-[#5b4dc7]",
};

function StepIcon({ type }: { type: string }) {
  const common = "h-5 w-5 lg:h-6 lg:w-6";

  switch (type) {
    case "chat":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <path
            d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v7A2.5 2.5 0 0 1 16.5 16H12l-4 3v-3H7.5A2.5 2.5 0 0 1 5 13.5v-7Z"
            fill="white"
          />
        </svg>
      );
    case "goal":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="7" stroke="white" strokeWidth="2" />
          <circle cx="12" cy="12" r="3.5" stroke="white" strokeWidth="2" />
          <circle cx="12" cy="12" r="1.4" fill="white" />
        </svg>
      );
    case "fund":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <text
            x="12"
            y="16.5"
            textAnchor="middle"
            fill="white"
            fontSize="14"
            fontWeight="800"
            fontFamily="Inter, system-ui, sans-serif"
          >
            ₦
          </text>
        </svg>
      );
    case "lock":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <rect x="6" y="11" width="12" height="9" rx="2" fill="white" />
          <path
            d="M8.5 11V8.5a3.5 3.5 0 0 1 7 0V11"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <path d="M5 17V7l4 5 3-4 4 6 3-3v6H5Z" fill="white" />
        </svg>
      );
  }
}

/**
 * Notion mobile: compact horizontal rows (icon + title), thin 1px border, 8px gaps.
 * Notion desktop: tall vertical cards, same thin border treatment.
 */
export function HowItWorks() {
  return (
    <div id="how-it-works" className="mt-8 scroll-mt-24 sm:mt-11 lg:mt-14">
      <Reveal>
        <h2
          id="how-it-works-heading"
          className="text-[14px] font-normal leading-5 tracking-normal text-black/55"
        >
          {copy.howItWorks.headline}
        </h2>
      </Reveal>

      <div className="mt-2 flex flex-col gap-2 lg:grid lg:grid-cols-5">
        {copy.howItWorks.steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 55}>
            <article className="flex h-[69px] flex-row items-center gap-4 rounded-[12px] border border-black/10 bg-white p-4 lg:h-[161px] lg:flex-col lg:items-stretch lg:justify-between lg:gap-0 lg:p-6">
              <div
                className={[
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 lg:h-14 lg:w-14",
                  iconColors[step.icon] ?? "bg-ink",
                ].join(" ")}
              >
                <StepIcon type={step.icon} />
              </div>
              <p className="text-[16px] font-bold leading-6 tracking-normal text-black">
                {step.title}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
