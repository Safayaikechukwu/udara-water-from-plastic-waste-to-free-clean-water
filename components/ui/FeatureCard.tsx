import type { ReactNode } from "react";

type Tone = "blue" | "coral" | "gold" | "gray";

const tones: Record<Tone, string> = {
  blue: "bg-card-blue",
  coral: "bg-card-coral",
  gold: "bg-card-gold",
  gray: "bg-card-gray",
};

type FeatureCardProps = {
  title: string;
  body: string;
  tone?: Tone;
  icon?: ReactNode;
  className?: string;
  illustration?: ReactNode;
};

export function FeatureCard({
  title,
  body,
  tone = "gray",
  icon,
  className = "",
  illustration,
}: FeatureCardProps) {
  return (
    <article
      className={[
        "flex h-full flex-col justify-between rounded-[16px] p-7 sm:p-8",
        tones[tone],
        className,
      ].join(" ")}
    >
      <div className="max-w-[85%]">
        {icon ? (
          <div className="mb-4 text-2xl" aria-hidden="true">
            {icon}
          </div>
        ) : null}
        <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          {title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted sm:text-base">
          {body}
        </p>
      </div>
      {illustration ? (
        <div className="mt-8 flex justify-end" aria-hidden="true">
          {illustration}
        </div>
      ) : null}
    </article>
  );
}
