import { copy } from "@/lib/copy";
import { Section } from "@/components/ui/Section";

function WaterIcon({ type }: { type: string }) {
  const common = "h-7 w-7";
  const stroke = {
    stroke: "#1c1b17",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "water") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path d="M12 3.5c2.6 2.8 4 5 4 8a4 4 0 1 1-8 0c0-3 1.4-5.2 4-8Z" {...stroke} />
        <path d="M9 20.5h6M12 17.5v3" {...stroke} />
      </svg>
    );
  }

  if (type === "registered") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path d="M6 20.5V8.5L12 4l6 4.5v12" {...stroke} />
        <path d="M9.5 20.5v-5h5v5" {...stroke} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
      <path d="M5 12a7 7 0 0 1 12-4.6L19 5v6h-6" {...stroke} />
      <path d="M19 12a7 7 0 0 1-12 4.6L5 19v-6h6" {...stroke} />
    </svg>
  );
}

export function WaterTrust() {
  return (
    <Section id="water" aria-labelledby="water-heading" soft>
      <p className="text-[15px] font-medium tracking-[-0.02em] text-ink">
        {copy.water.eyebrow}
      </p>
      <h2
        id="water-heading"
        className="mt-4 max-w-[36rem] text-[2rem] font-bold leading-[1.12] tracking-[-0.035em] text-ink sm:text-[2.6rem] md:text-[2.85rem]"
      >
        {copy.water.headline}
        <br />
        {copy.water.headlineLine2}
      </h2>
      <p className="mt-4 max-w-[42rem] text-[16px] leading-relaxed text-muted sm:text-[18px]">
        {copy.water.lead}
      </p>

      <div className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-3">
        {copy.water.cards.map((card) => (
          <article key={card.title} className="flex h-full flex-col rounded-[22px] border border-ink/[0.06] bg-bg p-6 sm:rounded-[24px] sm:p-7">
              <div className="flex h-8 w-8 items-center">
                <WaterIcon type={card.icon} />
              </div>
              <h3 className="mt-5 text-[1.15rem] font-semibold tracking-[-0.02em] text-ink sm:text-[1.25rem]">
                {card.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{card.body}</p>
              {"steps" in card && card.steps ? (
                <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink">
                  {card.steps.join(" → ")}
                </p>
              ) : null}
              {"closer" in card && card.closer ? (
                <p className="mt-2 text-[14px] font-medium text-ink">{card.closer}</p>
              ) : null}
              <a
                href={card.href}
                {...(/^https?:\/\//.test(card.href)
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="mt-6 inline-flex text-[15px] font-medium text-ink transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2"
              >
                {card.cta}
              </a>
            </article>
        ))}
      </div>
    </Section>
  );
}
