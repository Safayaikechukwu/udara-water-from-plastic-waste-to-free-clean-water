import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SnapCarousel } from "@/components/ui/SnapCarousel";

const cards = [
  {
    tag: "Event organizer",
    tagBg: "#e4f222",
    tagDot: "#1c1b17",
    quote:
      "As an event organizer and consultant to the biggest events in Nigeria, I believe in Udara because it provides another way to monetize the audience whilst solving the biggest problem of plastic waste that comes after it. Events would like this because it reduces the operating cost.",
    name: "Saamu Eleja",
    role: "The Event King",
    overlay: "bg-[#1c1b17]/25",
    image: "/reviews/saamu.png",
    alt: "Saamu Eleja, The Event King",
  },
  {
    tag: "Sponsor",
    tagBg: "#d7eef0",
    tagDot: "#0b5c5c",
    quote:
      "Our brand sponsored the batch for the very first event because it was a room filled with investors and founders and I believe deeply in the idea. It’s mad. Customers trust products when they get to see it in multiple ways, from billboards to Facebook ads and now a bottled water.",
    name: "Fasanya Pelumi",
    role: "Sponsor, Founder Awaschool",
    overlay: "bg-[#1c1b17]/35",
    image: "/reviews/pelumi.png",
    alt: "Fasanya Pelumi, Udara sponsor",
  },
  {
    tag: "Product leader",
    tagBg: "#e8f0d8",
    tagDot: "#3d5a1f",
    quote:
      "I like this sponsorship idea because it shows that product thinking isn’t only about technology. It’s about seeing an opportunity and creating value from it. We definitely need more founders thinking this way.",
    name: "Nsisong Uko",
    role: "Product leader, Uyo, Akwa Ibom, Nigeria",
    overlay: "bg-[#1c1b17]/35",
    image: "/reviews/nsisong.png",
    alt: "Nsisong Uko, product leader in Uyo, Akwa Ibom",
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
