import Image from "next/image";
import { copy } from "@/lib/copy";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function HowUdaraHelps() {
  return (
    <Section id="work-with-udara" aria-labelledby="work-heading">
      <h2
        id="work-heading"
        className="max-w-[720px] text-[2rem] font-bold tracking-[-0.035em] text-ink sm:text-4xl md:text-[2.75rem]"
      >
        {copy.workWithUdara.headline}
      </h2>

      <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-2">
        {copy.workWithUdara.cards.map((card) => (
          <article
            key={card.title}
            className="group flex h-full min-h-[547px] flex-col overflow-hidden rounded-[16px] border border-ink/[0.06] bg-bg sm:min-h-[592px] sm:rounded-[20px] lg:min-h-[636px]"
          >
            <div className="relative min-h-[339px] flex-1 overflow-hidden sm:min-h-[387px]">
              <Image
                src={card.photo}
                alt={card.photoAlt}
                fill
                priority
                draggable={false}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <div className="flex shrink-0 items-end justify-between gap-4 bg-ink px-5 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-6 lg:px-9">
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-medium text-white/60 sm:text-[14px]">
                  {card.label}
                </p>
                <h3 className="mt-1.5 text-[1.35rem] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:mt-2 sm:text-[1.85rem] sm:leading-[1.12]">
                  {card.title}
                  <br />
                  {card.titleLine2}
                </h3>
              </div>
              <Button href={card.href} className="shrink-0 focus-visible:ring-offset-ink">
                {card.cta}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
