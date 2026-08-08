import Image from "next/image";
import { copy } from "@/lib/copy";
import { Reveal } from "@/components/ui/Reveal";

function Marker({ children }: { children: React.ReactNode }) {
  return (
    <mark className="marker-highlight mx-[0.06em] rounded-[2px] bg-transparent px-[0.18em] py-[0.08em] text-inherit [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
      {children}
    </mark>
  );
}

export function WhyItWorks() {
  return (
    <section
      id="why-it-works"
      aria-labelledby="why-heading"
      className="w-full bg-[#0b0b0c] px-4 pb-14 pt-8 sm:px-5 sm:pb-24 sm:pt-12 lg:px-6 lg:pb-28 lg:pt-14"
    >
      <div className="mx-auto grid w-full max-w-[1252px] items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16 xl:gap-20">
        <Reveal variant="zoom">
          <div className="relative aspect-[4/5] min-h-[420px] overflow-hidden rounded-[18px] sm:aspect-[5/6] sm:min-h-0 sm:rounded-[22px] lg:min-h-[560px] lg:aspect-auto lg:h-full">
            <Image
              src="/why-it-works.jpg"
              alt="Quiet night routine, phone open, systems over willpower"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="max-w-[34rem] lg:max-w-none">
            <h2
              id="why-heading"
              className="text-[1.85rem] font-medium leading-[1.45] tracking-[-0.035em] text-white/[0.94] sm:text-[2.4rem] sm:leading-[1.4] lg:text-[2.75rem] lg:leading-[1.38] xl:text-[3rem]"
            >
              <Marker>
                Financial discipline doesn&apos;t come from willpower. It comes
                from systems.
              </Marker>
            </h2>
            <div className="mt-7 space-y-5 text-[1.05rem] font-medium leading-[1.45] tracking-[-0.02em] text-white/72 sm:mt-8 sm:space-y-6 sm:text-[1.2rem] sm:leading-[1.4] lg:text-[1.35rem] lg:leading-[1.38]">
              <p>{copy.whyItWorks.body}</p>
              <p>{copy.whyItWorks.contrast}</p>
              <p className="text-white/[0.92]">{copy.whyItWorks.closer}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
