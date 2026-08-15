import { ReactNode } from "react";

export function MidStage({
  tone = "warm",
  children,
}: {
  tone?: "warm" | "soft" | "oxblood";
  children: ReactNode;
}) {
  const tones = {
    warm: "bg-[#f1ebe3]",
    soft: "bg-[#f0efec]",
    oxblood: "bg-[#4a0508] text-white",
  } as const;

  return (
    <div className="mx-auto w-full max-w-[1000px] px-4 sm:px-6">
      <div
        className={`overflow-hidden rounded-[14px] sm:rounded-[20px] ${tones[tone]}`}
      >
        {children}
      </div>
    </div>
  );
}

export function FeatureSection({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-8 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1000px] px-4 sm:px-6">
        <div className="max-w-[640px]">
          <h2 className="text-balance text-[clamp(1.75rem,6vw,3.375rem)] font-bold leading-[1.1] tracking-[-0.035em] text-ink">
            {title}
          </h2>
          <p className="mt-3 max-w-[520px] text-[16px] leading-[1.5] text-muted sm:mt-4 sm:text-[18px]">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="mt-6 sm:mt-10">{children}</div>
    </section>
  );
}

export function PolicyCard({ children }: { children: ReactNode }) {
  return (
    <div className="mx-3 rounded-[12px] border border-black/[0.06] bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:mx-6 sm:rounded-[16px] sm:p-8">
      <div className="space-y-4 text-[15px] leading-[1.7] text-ink sm:text-[16px]">
        {children}
      </div>
    </div>
  );
}
