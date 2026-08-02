import { copy } from "@/lib/copy";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ClosingCta() {
  return (
    <section
      id="closing"
      aria-labelledby="closing-heading"
      className="w-full scroll-mt-24 bg-[#0b0b0c] px-4 py-20 sm:px-5 sm:py-28 lg:px-6 lg:py-32"
    >
      <Reveal>
        <div className="mx-auto max-w-[720px] text-center">
          <h2
            id="closing-heading"
            className="text-[2.25rem] font-bold tracking-[-0.035em] text-white sm:text-5xl md:text-[3.25rem] md:leading-[1.1]"
          >
            <mark className="marker-highlight mx-[0.06em] rounded-[2px] bg-transparent px-[0.18em] py-[0.08em] text-white [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
              {copy.closing.headline}
            </mark>
          </h2>
          <p className="mx-auto mt-5 max-w-[34rem] text-[17px] leading-relaxed text-white/65 sm:mt-6 sm:text-[19px]">
            {copy.closing.subtext}
          </p>
          <div className="mt-9 flex justify-center sm:mt-10">
            <Button className="h-12 min-h-12 min-w-[180px] px-6 text-[16px]">
              {copy.closing.cta}
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
