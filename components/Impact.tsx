import Image from "next/image";
import { copy } from "@/lib/copy";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import {
  CarbonMark,
  ChildrenMark,
  ImpressionsMark,
  OpenMark,
  RecallMark,
  RoiMark,
  ScanMark,
  VibeMark,
} from "@/components/ui/ImpactIcons";

const tile =
  "rounded-[16px] border border-ink/[0.06] bg-white sm:rounded-[20px]";

const title = "font-semibold tracking-[-0.03em] text-ink";
const body = "mt-1 text-[13px] leading-snug text-muted sm:text-[14px]";

export function Impact() {
  const { impact } = copy;

  return (
    <Section id="impact" aria-labelledby="impact-heading">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <h2
          id="impact-heading"
          className="max-w-[40rem] text-left text-[2rem] font-bold leading-[1.12] tracking-[-0.04em] text-ink sm:text-[2.75rem] md:text-[3.15rem]"
        >
          {impact.headline}
          <br />
          {impact.headlineLine2}
        </h2>
        <Button href={impact.ctaHref} className="shrink-0">
          {impact.cta}
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:gap-3.5 lg:grid-cols-6 lg:grid-rows-[auto_minmax(11.5rem,1fr)_minmax(11.5rem,1fr)_auto]">
        <article
          className={`${tile} flex items-center gap-5 px-5 py-5 sm:gap-7 sm:px-7 sm:py-6 lg:col-span-3`}
        >
          <Image
            src="/water/bottle.png"
            alt=""
            width={72}
            height={160}
            className="h-[88px] w-auto shrink-0 object-contain sm:h-[104px]"
            draggable={false}
          />
          <div>
            <h3 className={`${title} text-[1.15rem] sm:text-[1.35rem]`}>
              {impact.inHand.title}
            </h3>
            <p className={body}>{impact.inHand.body}</p>
          </div>
        </article>

        <article
          className={`${tile} relative flex items-center justify-center px-5 py-5 pr-16 sm:px-8 sm:py-6 sm:pr-24 lg:col-span-3`}
        >
          <div className="max-w-[22rem] text-center">
            <h3 className={`${title} text-[1.15rem] sm:text-[1.35rem]`}>
              {impact.recall.title}
            </h3>
            <p className={body}>{impact.recall.body}</p>
          </div>
          <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 sm:right-8">
            <RecallMark />
          </div>
        </article>

        <article
          className={`${tile} flex flex-col items-center justify-center px-6 py-8 text-center lg:col-span-2 lg:min-h-[11.5rem]`}
        >
          <VibeMark />
          <h3 className={`${title} mt-4 text-[1.1rem] sm:text-[1.2rem]`}>
            {impact.vibe.title}
          </h3>
          <p className={body}>{impact.vibe.body}</p>
        </article>

        <article className={`${tile} relative flex h-[280px] items-center justify-center overflow-hidden bg-[#efefed] sm:h-[340px] lg:col-span-2 lg:row-span-2 lg:h-full`}>
          <Image
            src={impact.photo.src}
            alt={impact.photo.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-contain object-center p-5 sm:p-7"
            priority
            draggable={false}
          />
        </article>

        <article
          className={`${tile} flex flex-col items-center justify-center px-6 py-8 text-center lg:col-span-2 lg:min-h-[11.5rem]`}
        >
          <OpenMark />
          <h3 className={`${title} mt-4 text-[1.1rem] sm:text-[1.2rem]`}>
            {impact.openRate.title}
          </h3>
          <p className={body}>{impact.openRate.body}</p>
        </article>

        <article
          className={`${tile} flex flex-col items-center justify-center px-6 py-8 text-center lg:col-span-2 lg:min-h-[11.5rem]`}
        >
          <ImpressionsMark />
          <h3 className={`${title} mt-4 text-[1.1rem] sm:text-[1.2rem]`}>
            {impact.impressions.title}
          </h3>
          <p className={body}>{impact.impressions.body}</p>
        </article>

        <article
          className={`${tile} flex flex-col items-center justify-center px-6 py-8 text-center lg:col-span-2 lg:min-h-[11.5rem]`}
        >
          <RoiMark />
          <h3 className={`${title} mt-4 text-[1.1rem] sm:text-[1.2rem]`}>
            {impact.roi.title}
          </h3>
          <p className={body}>{impact.roi.body}</p>
        </article>

        <article
          className={`${tile} flex min-h-[6.75rem] items-center gap-4 px-5 py-5 sm:px-6 lg:col-span-2`}
        >
          <ScanMark />
          <div className="min-w-0">
            <h3 className={`${title} text-[1.05rem] sm:text-[1.15rem]`}>
              {impact.scan.title}
            </h3>
            <p className={body}>{impact.scan.body}</p>
          </div>
        </article>

        <article
          className={`${tile} flex min-h-[6.75rem] items-center justify-between gap-4 px-5 py-5 sm:px-6 lg:col-span-2`}
        >
          <div className="min-w-0">
            <h3 className={`${title} text-[1.05rem] sm:text-[1.15rem]`}>
              {impact.carbon.title}
            </h3>
            <p className={body}>{impact.carbon.body}</p>
          </div>
          <CarbonMark />
        </article>

        <article
          className={`${tile} flex min-h-[6.75rem] items-center justify-between gap-4 px-5 py-5 sm:px-6 lg:col-span-2`}
        >
          <div className="min-w-0">
            <h3 className={`${title} text-[1.05rem] sm:text-[1.15rem]`}>
              {impact.children.title}
            </h3>
            <p className={body}>{impact.children.body}</p>
          </div>
          <ChildrenMark />
        </article>
      </div>
    </Section>
  );
}
