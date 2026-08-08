import Image from "next/image";
import { copy } from "@/lib/copy";
import { HowItWorks } from "@/components/HowItWorks";
import {
  LockScene,
  SaveScene,
  TrackScene,
  TruthScene,
} from "@/components/ui/FeatureSceneIllustrations";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const fallbackScenes = [
  <TruthScene key="truth" />,
  <LockScene key="lock" />,
  <TrackScene key="track" />,
  <SaveScene key="save" />,
];

function PhoneCrop({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mt-auto -mx-5 h-[360px] overflow-hidden sm:-mx-8 sm:h-[380px] md:h-[420px] lg:-mx-9 lg:h-[480px]">
      {/* Phone is designed at real iPhone width, then uniformly scaled in PhoneShell */}
      <div className="absolute inset-x-0 top-0 flex justify-center pt-2 md:pt-4 lg:pt-5">
        {children}
      </div>
    </div>
  );
}

function FeatureMockup({
  mockup,
  mockupAlt,
  fallback,
}: {
  mockup: string;
  mockupAlt: string;
  fallback: React.ReactNode;
}) {
  if (mockup) {
    return (
      <div className="relative h-[420px] w-[260px] sm:h-[400px] sm:w-[240px] lg:h-[460px] lg:w-[280px]">
        <Image
          src={mockup}
          alt={mockupAlt}
          fill
          sizes="(max-width: 768px) 70vw, 280px"
          className="object-contain object-top"
        />
      </div>
    );
  }

  return fallback;
}

export function HowKeduHelps() {
  return (
    <Section id="how-kedu-helps" aria-labelledby="helps-heading">
      <Reveal>
        <h2
          id="helps-heading"
          className="max-w-[720px] text-[2rem] font-bold tracking-[-0.035em] text-ink sm:text-4xl md:text-[2.75rem]"
        >
          {copy.howKeduHelps.headline}
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-2">
        {copy.howKeduHelps.cards.map((card, index) => (
          <Reveal key={card.title} delay={index * 70}>
            <article className="group relative flex h-full min-h-[480px] flex-col overflow-hidden rounded-[16px] bg-[#f1f1ef] px-5 pb-0 pt-6 sm:min-h-[520px] sm:rounded-[20px] sm:px-8 sm:pt-9 lg:min-h-[580px] lg:px-9 lg:pt-10">
              <div className="min-h-[6.75rem] sm:min-h-[7.75rem]">
                <p className="text-[13px] font-medium text-[#6b6b6b] sm:text-[14px]">
                  {card.label}
                </p>
                <h3 className="mt-1.5 text-[1.35rem] font-bold leading-[1.15] tracking-[-0.03em] text-ink sm:mt-2 sm:text-[1.85rem] sm:leading-[1.12]">
                  {card.title}
                </h3>
              </div>

              <PhoneCrop>
                <FeatureMockup
                  mockup={card.mockup}
                  mockupAlt={card.mockupAlt}
                  fallback={fallbackScenes[index]}
                />
              </PhoneCrop>
            </article>
          </Reveal>
        ))}
      </div>

      <HowItWorks />
    </Section>
  );
}
