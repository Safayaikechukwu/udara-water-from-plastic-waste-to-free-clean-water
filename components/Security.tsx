import Image from "next/image";
import { copy } from "@/lib/copy";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

function WaterIcon({ type }: { type: string }) {
  const stroke = {
    stroke: "#1c1b17",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  let mark = (
    <path d="M12 3.5c2.6 2.8 4 5 4 8a4 4 0 1 1-8 0c0-3 1.4-5.2 4-8Z" {...stroke} />
  );

  if (type === "registered") {
    mark = (
      <>
        <path d="M6 20.5V8.5L12 4l6 4.5v12" {...stroke} />
        <path d="M9.5 20.5v-5h5v5" {...stroke} />
        <path d="M9.2 12.2 11 14l3.8-4" {...stroke} />
      </>
    );
  }

  if (type === "recycle") {
    mark = (
      <>
        <path d="M5 12a7 7 0 0 1 12-4.6L19 5v6h-6" {...stroke} />
        <path d="M19 12a7 7 0 0 1-12 4.6L5 19v-6h6" {...stroke} />
      </>
    );
  }

  return (
    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/80">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        {mark}
      </svg>
    </span>
  );
}

function SponsorCta() {
  return <Button href={copy.security.ctaHref}>{copy.security.cta}</Button>;
}

export function Security() {
  return (
    <Section id="water" aria-labelledby="water-heading">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-16">
        <div className="w-full max-w-[34rem] shrink-0">
          <h2
            id="water-heading"
            className="text-[2.05rem] font-bold leading-[1.08] tracking-[-0.045em] text-ink sm:text-[2.75rem] md:text-[3.25rem]"
          >
            {copy.security.headline}
            <br />
            {copy.security.headlineLine2}
          </h2>
          <p className="mt-4 max-w-[28rem] text-[15px] leading-[1.55] text-muted sm:mt-5 sm:text-[16px]">
            {copy.security.subhead}
          </p>

          <ul className="mt-8 flex flex-col items-start gap-2.5 sm:mt-9">
            {copy.security.cards.map((card) => (
              <li
                key={card.title}
                className="inline-flex max-w-full items-center gap-2.5 rounded-full bg-[#ebebe8] py-2 pl-2 pr-4 sm:gap-3 sm:py-2.5 sm:pl-2.5 sm:pr-5"
              >
                <WaterIcon type={card.icon} />
                <p className="text-[13px] font-normal leading-snug tracking-[-0.01em] text-ink/80 sm:text-[14px]">
                  {card.body}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 hidden lg:block">
            <SponsorCta />
          </div>
        </div>

        <div className="flex justify-center lg:justify-start">
          <Image
            src="/water/bottle.png"
            alt="Udara water bottle with space for a sponsor brand"
            width={418}
            height={1020}
            priority
            draggable={false}
            className="h-auto w-[210px] object-contain drop-shadow-[0_28px_50px_rgba(28,27,23,0.12)] sm:w-[250px] lg:w-[320px]"
          />
        </div>

        <div className="lg:hidden">
          <SponsorCta />
        </div>
      </div>
    </Section>
  );
}
