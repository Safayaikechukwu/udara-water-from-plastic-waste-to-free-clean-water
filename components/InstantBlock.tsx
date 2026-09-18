import { copy } from "@/lib/copy";
import { Button } from "@/components/ui/Button";

export function InstantBlock() {
  return (
    <section
      id="invest"
      aria-labelledby="invest-heading"
      className="instant-block relative z-0 w-full bg-[#f4f8c8]"
    >
      <div className="relative mx-auto w-full max-w-[1252px] px-4 pb-16 pt-14 sm:px-5 sm:pb-20 sm:pt-16 md:px-6 md:pb-24 md:pt-20 lg:pb-28 lg:pt-24">
        <div
          data-ib="copy"
          className="instant-block__copy relative z-[1] mx-auto max-w-[700px] text-center md:mx-0 md:max-w-[640px] md:text-start"
        >
          <p className="text-sm font-medium uppercase tracking-[0.04em] text-ink">
            {copy.instantBlock.eyebrow}
          </p>
          <h2
            id="invest-heading"
            className="mt-3 text-[1.75rem] font-bold tracking-[-0.01em] text-ink sm:text-3xl md:text-[48px] md:leading-[56px]"
          >
            {copy.instantBlock.headline}
          </h2>
          <p className="mt-4 text-[16px] font-normal leading-[1.6] text-ink/75 md:text-[17px]">
            {copy.instantBlock.body}
          </p>
          <div className="mt-5 flex items-center justify-center md:justify-start">
            <Button href={copy.instantBlock.ctaHref}>{copy.instantBlock.cta}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
