import Image from "next/image";
import { copy } from "@/lib/copy";
import { Section } from "@/components/ui/Section";

const steps = copy.howItWorks.steps;

function CycleIcon({ type, className = "h-7 w-7" }: { type: string; className?: string }) {
  const stroke = {
    stroke: "#1c1b17",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "recover":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path d="M5 12a7 7 0 0 1 12-4.6L19 5v6h-6" {...stroke} />
          <path d="M19 12a7 7 0 0 1-12 4.6L5 19v-6h6" {...stroke} />
        </svg>
      );
    case "bottle":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path d="M12 3.5c2.6 2.8 4 5 4 8a4 4 0 1 1-8 0c0-3 1.4-5.2 4-8Z" {...stroke} />
        </svg>
      );
    case "sponsor":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path d="M4.5 10v4h3.4L13 17.5V6.5L7.9 10H4.5Z" {...stroke} />
          <path d="M16 9a3.6 3.6 0 0 1 0 6M18.7 7a6.2 6.2 0 0 1 0 10" {...stroke} />
        </svg>
      );
    case "distribute":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path d="M12 20.5s6-5.4 6-9.4a6 6 0 1 0-12 0c0 4 6 9.4 6 9.4Z" {...stroke} />
          <circle cx="12" cy="11" r="1.8" fill="#1c1b17" />
        </svg>
      );
    case "reward":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <rect x="4.5" y="10" width="15" height="9.5" rx="1.6" {...stroke} />
          <path d="M12 10v9.5M4.5 13.2h15" {...stroke} />
          <path d="M8.2 10V7.8c0-1.3 1.5-2.2 2.7-1.5L12 7l1.1-.7c1.2-.7 2.7.2 2.7 1.5V10" {...stroke} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="7.2" {...stroke} />
          <path d="M8.8 12.3 11 14.5l4.2-5" {...stroke} />
        </svg>
      );
  }
}

function polar(index: number, count: number, radius: number) {
  const angle = ((-90 + (index * 360) / count) * Math.PI) / 180;
  return {
    x: 50 + radius * Math.cos(angle),
    y: 50 + radius * Math.sin(angle),
    angle,
  };
}

function CycleRing({ count }: { count: number }) {
  const r = 34;
  const gap = 10;
  const arcs = Array.from({ length: count }, (_, i) => {
    const a0 = ((-90 + (i * 360) / count + gap) * Math.PI) / 180;
    const a1 = ((-90 + ((i + 1) * 360) / count - gap) * Math.PI) / 180;
    const x0 = 50 + r * Math.cos(a0);
    const y0 = 50 + r * Math.sin(a0);
    const x1 = 50 + r * Math.cos(a1);
    const y1 = 50 + r * Math.sin(a1);
    return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
  });

  return (
    <svg
      viewBox="0 0 100 100"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <marker
          id="udara-cycle-arrow"
          markerWidth="4"
          markerHeight="4"
          refX="3.2"
          refY="2"
          orient="auto"
        >
          <path d="M0 0 L4 2 L0 4 Z" fill="#1c1b17" />
        </marker>
      </defs>
      <circle cx="50" cy="50" r={r} fill="none" stroke="#1c1b17" strokeOpacity="0.08" strokeWidth="0.55" />
      {arcs.map((d) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="#1c1b17"
          strokeOpacity="0.45"
          strokeWidth="0.55"
          markerEnd="url(#udara-cycle-arrow)"
        />
      ))}
    </svg>
  );
}

function DesktopCycle() {
  const count = steps.length;

  return (
    <div className="relative mx-auto mt-16 hidden aspect-square w-full max-w-[820px] lg:block">
      <CycleRing count={count} />

      <div className="absolute left-1/2 top-1/2 h-[13.5rem] w-[13.5rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-cta">
        <div className="absolute inset-[9%]">
          <Image
            src="/water/bottle-cycle.png"
            alt="Udara drinking water"
            fill
            sizes="216px"
            className="object-contain object-center"
            draggable={false}
          />
        </div>
      </div>

      {steps.map((step, i) => {
        const { x, y } = polar(i, count, 34);
        const place =
          i === 0
            ? "bottom-full mb-3 left-1/2 w-[14rem] -translate-x-1/2 text-center"
            : i === 1 || i === 2
              ? "left-full ml-3 top-1/2 w-[13.5rem] -translate-y-1/2 text-left"
              : i === 3
                ? "top-full mt-3 left-1/2 w-[14rem] -translate-x-1/2 text-center"
                : "right-full mr-3 top-1/2 w-[13.5rem] -translate-y-1/2 text-right";

        return (
          <article
            key={step.n}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full border border-ink/[0.08] bg-white shadow-[0_0_0_6px_#f4f4f4]">
              <CycleIcon type={step.icon} className="h-7 w-7" />
            </div>
            <div className={`absolute ${place}`}>
              <h3 className="text-[1.15rem] font-semibold tracking-[-0.02em] text-ink">
                {step.title}
              </h3>
              <p className="mt-1 text-[13px] leading-snug text-muted">{step.body}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function MobileCycle() {
  return (
    <div className="mt-10 lg:hidden">
      <div className="mb-8 flex justify-center">
        <div className="flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-full bg-cta text-center">
          <p className="text-[12px] font-bold leading-[1.15] tracking-[-0.03em] text-ink">
            The Udara
            <br />
            Cycle
          </p>
        </div>
      </div>

      <ol className="relative mx-auto max-w-[28rem]">
        <span
          className="absolute bottom-16 left-[21px] top-5 w-px bg-ink/15"
          aria-hidden="true"
        />
        {steps.map((step, i) => (
          <li key={step.n} className="relative flex items-start gap-3.5 pb-5 last:pb-0">
            <div className="relative z-[1] flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-ink/[0.08] bg-white">
              <CycleIcon type={step.icon} className="h-5 w-5" />
            </div>
            <article className="min-w-0 flex-1 rounded-[16px] border border-ink/[0.06] bg-white px-4 py-3.5">
              <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-ink">
                {step.title}
              </h3>
              <p className="mt-1 text-[14px] leading-relaxed text-muted">{step.body}</p>
            </article>
            {i < steps.length - 1 ? (
              <span className="sr-only">then</span>
            ) : null}
          </li>
        ))}
      </ol>

      <p className="mt-1 flex items-center justify-center gap-2 pb-1 text-[13px] font-medium text-ink/70">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M5 12a7 7 0 0 1 12-4.6L19 5v6h-6"
            stroke="#1c1b17"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 12a7 7 0 0 1-12 4.6L5 19v-6h6"
            stroke="#1c1b17"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Then it loops back to Recover.
      </p>
    </div>
  );
}

export function HowItWorks() {
  return (
    <Section id="how-it-works" aria-labelledby="how-it-works-heading">
      <h2
        id="how-it-works-heading"
        className="max-w-[36rem] text-[2rem] font-bold leading-[1.12] tracking-[-0.035em] text-ink sm:text-[2.6rem] md:text-[2.85rem] lg:mx-auto lg:max-w-none lg:text-center"
      >
        {copy.howItWorks.headline}
        <br />
        {copy.howItWorks.headlineLine2}
      </h2>

      <DesktopCycle />
      <MobileCycle />
    </Section>
  );
}
