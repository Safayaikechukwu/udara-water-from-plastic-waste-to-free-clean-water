import Image from "next/image";
import { copy } from "@/lib/copy";

export function WhyItWorks() {
  return (
    <section
      id="why-it-works"
      aria-labelledby="why-heading"
      className="w-full bg-ink px-4 py-14 sm:px-5 sm:py-24 lg:px-6 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-[1252px] items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16 xl:gap-20">
        <div className="relative aspect-[4/5] min-h-[420px] overflow-hidden rounded-[18px] sm:aspect-[5/6] sm:min-h-0 sm:rounded-[22px] lg:min-h-[560px] lg:aspect-auto lg:h-full">
          <Image
            src="/why-it-works.png"
            alt="Udara bottle with ad space, beside recovered plastic and a water line"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            priority
            draggable={false}
          />
        </div>

        <div className="max-w-[34rem] lg:max-w-none">
            <h2
              id="why-heading"
              className="text-[1.85rem] font-medium uppercase leading-[1.12] tracking-[-0.035em] text-white underline decoration-cta decoration-[3px] underline-offset-[8px] sm:text-[2.4rem] lg:text-[2.75rem] xl:text-[3rem]"
            >
              {copy.whyItWorks.lead}
            </h2>
            <div className="mt-7 space-y-5 text-[1.05rem] font-medium leading-[1.45] tracking-[-0.02em] text-white/72 sm:mt-8 sm:space-y-6 sm:text-[1.2rem] sm:leading-[1.4] lg:text-[1.35rem] lg:leading-[1.38]">
              <p>{copy.whyItWorks.body}</p>
              <p>{copy.whyItWorks.body2}</p>
              <p>{copy.whyItWorks.question}</p>
              <p>{copy.whyItWorks.contrast}</p>
              <p className="text-white/[0.92]">{copy.whyItWorks.closer}</p>
            </div>
        </div>
      </div>
    </section>
  );
}
