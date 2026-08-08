import { copy } from "@/lib/copy";
import { Reveal } from "@/components/ui/Reveal";

function SecurityIcon({ tone }: { tone: "coral" | "blue" | "gold" }) {
  if (tone === "coral") {
    return (
      <svg viewBox="0 0 120 88" className="h-full w-full" aria-hidden="true">
        <circle cx="28" cy="54" r="18" fill="#fdecec" />
        <circle cx="92" cy="30" r="14" fill="#eadffb" />
        <rect x="48" y="22" width="36" height="48" rx="10" fill="#0d0d0d" />
        <circle cx="66" cy="42" r="6" fill="#4a0508" />
        <path d="M58 56h16v8a8 8 0 0 1-16 0v-8Z" fill="#f7d070" />
      </svg>
    );
  }

  if (tone === "blue") {
    return (
      <svg viewBox="0 0 120 88" className="h-full w-full" aria-hidden="true">
        <circle cx="26" cy="28" r="16" fill="#f6eaea" />
        <circle cx="96" cy="58" r="18" fill="#fbf3db" />
        <path
          d="M38 24h44a12 12 0 0 1 12 12v20a12 12 0 0 1-12 12H54l-14 10v-10H38a12 12 0 0 1-12-12V36a12 12 0 0 1 12-12Z"
          fill="#0d0d0d"
        />
        <circle cx="60" cy="46" r="7" fill="#e03e3e" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 88" className="h-full w-full" aria-hidden="true">
      <circle cx="30" cy="58" r="16" fill="#e8f8f0" />
      <circle cx="94" cy="26" r="14" fill="#fdecec" />
      <circle cx="62" cy="44" r="22" stroke="#0d0d0d" strokeWidth="4" fill="none" />
      <path
        d="M62 30v14l10 6"
        stroke="#4a0508"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Security() {
  return (
    <section
      id="security"
      aria-labelledby="security-heading"
      className="w-full scroll-mt-24 bg-[#f7d070] px-4 py-14 sm:px-5 sm:py-24 lg:px-6 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1252px]">
        <Reveal>
          <div className="max-w-[40rem] text-left">
            <h2
              id="security-heading"
              className="text-[2rem] font-bold tracking-[-0.03em] text-ink sm:text-4xl md:text-[2.75rem]"
            >
              {copy.security.headline}
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink/70 sm:mt-4 sm:text-[18px]">
              {copy.security.subhead}
            </p>
          </div>
        </Reveal>

        {/* Mobile: horizontal snap scroll. Desktop: 3-up grid. */}
        <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:-mx-5 sm:mt-12 sm:gap-4 sm:px-5 [&::-webkit-scrollbar]:hidden md:mx-0 md:mt-14 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
          {copy.security.cards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 70}
              className="w-[min(82vw,320px)] shrink-0 snap-center sm:w-[min(70vw,340px)] md:w-auto md:snap-align-none"
            >
              <article className="h-full rounded-[18px] bg-white px-6 pb-7 pt-6 text-left sm:rounded-[20px] sm:px-7 sm:pb-8 sm:pt-7">
                <div className="mb-6 h-[88px] w-[120px]">
                  <SecurityIcon tone={card.tone} />
                </div>
                <h3 className="text-[1.2rem] font-bold leading-[1.2] tracking-[-0.025em] text-ink sm:text-[1.35rem]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted sm:text-[16px]">
                  {card.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
