import { copy } from "@/lib/copy";
import { ScienceProof } from "@/components/ScienceProof";
import { Button } from "@/components/ui/Button";
import { HeroProduct } from "@/components/ui/HeroProduct";
import { Reveal } from "@/components/ui/Reveal";
import { RotatingHighlight } from "@/components/ui/RotatingHighlight";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="w-full bg-bg px-4 pb-16 pt-14 sm:px-5 sm:pb-20 lg:px-6 lg:pb-24 lg:pt-20"
    >
      <div className="mx-auto w-full max-w-[1252px] text-center">
        <Reveal>
          <h1
            id="hero-heading"
            className="mx-auto w-full text-[2.75rem] font-bold leading-[1.1] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[80px] lg:leading-[1.08] xl:text-[96px] xl:leading-[1.06]"
          >
            <span className="inline-block">
              {copy.hero.line1Prefix}{" "}
              <RotatingHighlight words={copy.hero.rotatingWords} />
            </span>
            <span className="mt-[0.06em] block">{copy.hero.line2}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[680px] text-[18px] leading-[1.45] text-[#5a5a5a] lg:mt-7 lg:text-[20px]">
            {copy.hero.subtext}
          </p>

          <div id="hero-cta" className="mt-9 flex justify-center sm:mt-10">
            <Button className="h-11 min-h-11 px-6 text-[15px] sm:min-w-[180px]">
              {copy.hero.cta}
            </Button>
          </div>
        </Reveal>

        {/* Outside Reveal so scroll detection isn't affected by transforms */}
        <ScienceProof />
      </div>

      {/* Outside Reveal — transforms/opacity were blocking the mobile chat animation */}
      <div className="relative mx-auto mt-8 w-full max-w-[1252px] sm:mt-14 lg:mt-16">
        <HeroProduct />
      </div>
    </section>
  );
}
