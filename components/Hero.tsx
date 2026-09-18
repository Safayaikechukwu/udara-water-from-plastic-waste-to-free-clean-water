import { copy } from "@/lib/copy";
import { ScienceProof } from "@/components/ScienceProof";
import { Button } from "@/components/ui/Button";
import { HeroProduct } from "@/components/ui/HeroProduct";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="w-full bg-bg px-4 pb-16 pt-14 sm:px-5 sm:pb-20 lg:px-6 lg:pb-24 lg:pt-20"
    >
      <div className="mx-auto w-full max-w-[1252px] text-center">
        <h1
          id="hero-heading"
          className="mx-auto w-full text-[2.4rem] font-bold uppercase leading-[1.08] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[80px] lg:leading-[1.05] xl:text-[88px] xl:leading-[1.04]"
        >
          <span className="block">{copy.hero.line1}</span>
          <span className="mt-[0.06em] block">{copy.hero.line2}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[720px] text-[18px] leading-[1.45] text-[#5a5a5a] lg:mt-7 lg:text-[20px]">
          {copy.hero.subtext}
        </p>

        <div id="hero-cta" className="mt-9 flex justify-center sm:mt-10">
            <Button
              href={copy.hero.ctaHref}
            >
            {copy.hero.cta}
          </Button>
        </div>

        <ScienceProof />
      </div>

      <div className="relative mx-auto mt-8 w-full max-w-[1252px] sm:mt-14 lg:mt-16">
        <HeroProduct />
      </div>
    </section>
  );
}
