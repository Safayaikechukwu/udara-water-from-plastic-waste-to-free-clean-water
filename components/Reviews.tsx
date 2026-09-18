import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SnapCarousel } from "@/components/ui/SnapCarousel";

const cards = [
  {
    tag: "Drinker",
    tagBg: "#e4f222",
    tagDot: "#1c1b17",
    quote:
      "They handed me cold water at a campus event and I didn’t pay a kobo. I drank it, I saw the brand, and the bottle was still in my hand an hour later. That’s how you actually reach people.",
    name: "Amaka Okonkwo",
    role: "21 · Student, Lagos",
    overlay: "bg-[#0b5c5c]/45",
    image: "/reviews/host.jpg",
    alt: "Amaka holding a bottle of drinking water at a campus gathering",
  },
  {
    tag: "Sponsor",
    tagBg: "#d7eef0",
    tagDot: "#0b5c5c",
    quote:
      "Our brand sponsored a batch for an activation in Abuja. Udara put clean water in people’s hands all day with our name on it. Not a banner they walked past. A bottle they held.",
    name: "Tunde Balogun",
    role: "Brand lead, Abuja",
    overlay: "bg-[#123c4a]/48",
    image: "/reviews/sponsor.jpg",
    alt: "Tunde at a sponsored water activation",
  },
  {
    tag: "Climate activist",
    tagBg: "#e8f0d8",
    tagDot: "#3d5a1f",
    quote:
      "I campaign against plastic in the gutter. Udara was the first setup that recovered the bottles after people drank, instead of leaving the waste for us to shout about. Clean water in, plastic out.",
    name: "Chioma Eze",
    role: "Climate activist, Port Harcourt",
    overlay: "bg-[#3d5a1f]/48",
    image: "/reviews/recycle.jpg",
    alt: "Chioma holding collected PET bottles after a cleanup",
  },
] as const;

export function Reviews() {
  return (
    <Section id="reviews" aria-labelledby="reviews-heading">
      <h2
        id="reviews-heading"
        className="text-left text-[2rem] font-bold tracking-[-0.03em] text-ink sm:text-4xl md:text-[2.75rem]"
      >
        Testimonials
      </h2>

      {/* Mobile: horizontal snap carousel + dots. Desktop: 3-up grid. */}
      <SnapCarousel
        count={cards.length}
        label="Testimonials"
        trackClassName="mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] sm:gap-4 [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:pb-0"
      >
        {cards.map((card) => (
          <figure
            key={card.name}
            className="relative h-[560px] w-[min(calc(100vw-2.5rem),352px)] shrink-0 snap-start overflow-hidden rounded-[18px] sm:h-[620px] sm:w-[min(calc(100vw-2.75rem),374px)] md:w-auto md:snap-align-none lg:h-[680px]"
          >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(max-width: 768px) 82vw, 33vw"
                className="pointer-events-none object-cover object-[center_20%] select-none"
                priority
                draggable={false}
              />
              <div
                className={[
                  "pointer-events-none absolute inset-0 mix-blend-multiply",
                  card.overlay,
                ].join(" ")}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

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
                <figcaption className="select-text">
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
        ))}
      </SnapCarousel>
    </Section>
  );
}
