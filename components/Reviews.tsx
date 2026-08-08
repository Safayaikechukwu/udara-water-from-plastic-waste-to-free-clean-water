import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const cards = [
  {
    tag: "ADHD",
    tagBg: "#fdecec",
    tagDot: "#e03e3e",
    quote:
      "As somebody with ADHD and dyslexia, Kedu helps because I never remember to actually go into a savings app to lock funds or ever use a budgeting app. Kedu is the real deal.",
    name: "Safaya Ikechukwu",
    role: "21 · Product manager, Lagos",
    overlay: "bg-[#c23b3b]/75",
    image: "/reviews/adhd.jpg",
  },
  {
    tag: "Emotional eating",
    tagBg: "#fbf3db",
    tagDot: "#cb912f",
    quote:
      "I was eating my feelings away and gained 30 kg because of how depressed I was. Kedu helped me not only lose weight but also save the money I've been spending on food.",
    name: "Chioma Eze",
    role: "Founder, Port Harcourt",
    overlay: "bg-[#c46a1b]/75",
    image:
      "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=900&q=80",
  },
  {
    tag: "Properties",
    tagBg: "#f6eaea",
    tagDot: "#4a0508",
    quote:
      "I'm 34, and I could not believe it when I went through my transaction history and saw that I've spent millions of naira but could not even account for shishi. Now Kedu helps me with stuff like that, and I was able to get my first property this year.",
    name: "Tunde Balogun",
    role: "Engineer, Abuja",
    overlay: "bg-[#4a0508]/75",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
  },
] as const;

export function Reviews() {
  return (
    <Section id="reviews" aria-labelledby="reviews-heading">
      <Reveal>
        <h2
          id="reviews-heading"
          className="text-left text-[2rem] font-bold tracking-[-0.03em] text-ink sm:text-4xl md:text-[2.75rem]"
        >
          What customers are saying
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {cards.map((card, index) => (
          <Reveal key={card.name} delay={index * 80} variant="zoom">
            <figure className="relative min-h-[560px] overflow-hidden rounded-[18px] sm:min-h-[620px] lg:min-h-[680px]">
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top"
              />
              <div
                className={["absolute inset-0 mix-blend-multiply", card.overlay].join(
                  " ",
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/20" />

              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7 lg:p-8">
                <span
                  className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-[13px] font-semibold tracking-[-0.01em] text-ink"
                  style={{ backgroundColor: card.tagBg }}
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: card.tagDot }}
                    aria-hidden="true"
                  />
                  {card.tag}
                </span>
                <figcaption>
                  <blockquote className="text-[1.05rem] leading-[1.4] tracking-[-0.01em] text-white [font-family:var(--font-serif),ui-serif,Georgia,serif] sm:text-[1.15rem] lg:text-[1.2rem]">
                    “{card.quote}”
                  </blockquote>
                  <p className="mt-5 text-[14px] font-semibold text-white">
                    {card.name}
                  </p>
                  <p className="mt-1 text-[13px] text-white/80">{card.role}</p>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
