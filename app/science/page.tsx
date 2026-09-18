import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/legal/LegalShell";
import { copy } from "@/lib/copy";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "The science behind Udara",
  description:
    "Research that shaped Udara: ADHD financial decision-making, precommitment devices, body doubling, and why systems beat willpower for WhatsApp savings in Nigeria.",
  alternates: {
    canonical: "/science",
  },
  openGraph: {
    title: "The science behind Udara",
    description:
      "Real papers on ADHD money habits, precommitment, and body doubling, and how Udara maps them into a WhatsApp hard lock.",
    url: "/science",
  },
};

const scienceJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "The science behind Udara",
  url: `${siteConfig.url}/science`,
  description:
    "Research that shaped how Udara locks funds and builds accountability on WhatsApp.",
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  about: {
    "@type": "Thing",
    name: "ADHD financial decision-making and precommitment savings systems",
  },
};

function ResearchLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink underline decoration-cta/40 underline-offset-[3px] sm:text-[15px]"
    >
      {children}
      <span aria-hidden="true" className="translate-y-px text-[12px]">
        ↗
      </span>
    </a>
  );
}

export default function SciencePage() {
  const { eyebrow, headline, support, pillars, disclaimer } = copy.scienceBehind;

  return (
    <LegalShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scienceJsonLd) }}
      />

      <article className="px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16">
        <div className="mx-auto w-full max-w-[720px]">
          <p className="text-[13px] font-medium text-[#6b6b6b] sm:text-[14px]">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-balance text-[2.15rem] font-semibold leading-[1.12] tracking-[-0.04em] text-ink sm:text-[2.75rem]">
            {headline}
          </h1>
          <p className="mt-5 text-pretty text-[17px] leading-relaxed text-muted sm:text-[18px]">
            {support}
          </p>

          <div className="mt-10 divide-y divide-black/[0.08] border-y border-black/[0.08]">
            {pillars.map((pillar) => (
              <section key={pillar.title} className="py-8 sm:py-10">
                <h2 className="text-[1.35rem] font-bold leading-[1.2] tracking-[-0.03em] text-ink sm:text-[1.55rem]">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted sm:text-[16px]">
                  {pillar.body}
                </p>
                <p className="mt-3 text-[15px] font-medium leading-relaxed text-ink/90 sm:text-[16px]">
                  {pillar.udara}
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <ResearchLink href={pillar.href}>
                    {pillar.linkLabel}
                  </ResearchLink>
                  {pillar.secondaryHref ? (
                    <ResearchLink href={pillar.secondaryHref}>
                      {pillar.secondaryLinkLabel}
                    </ResearchLink>
                  ) : null}
                </div>
              </section>
            ))}
          </div>

          <p className="mt-8 text-[13px] leading-relaxed text-ink/45 sm:text-[14px]">
            {disclaimer}
          </p>

          <p className="mt-8 text-[15px] text-muted">
            Learn more about the product on{" "}
            <Link
              href="/about"
              className="font-medium text-ink underline decoration-cta/40 underline-offset-[3px]"
            >
              About Udara
            </Link>{" "}
            or go back to the{" "}
            <Link
              href="/"
              className="font-medium text-ink underline decoration-cta/40 underline-offset-[3px]"
            >
              home page
            </Link>
            .
          </p>
        </div>
      </article>
    </LegalShell>
  );
}
