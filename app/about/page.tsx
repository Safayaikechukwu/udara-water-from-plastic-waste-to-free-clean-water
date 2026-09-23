import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/legal/LegalShell";
import { Button } from "@/components/ui/Button";
import { copy } from "@/lib/copy";
import { siteConfig, supportWhatsAppUrl, whatsappIntentUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "About Udara | From plastic waste to free clean water",
  },
  description:
    "Udara turns plastic waste into free clean drinking water across Africa. Brands sponsor batches, people drink for free, bottles return to recycling, and 10% of profits builds water hubs.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Udara | From plastic waste to free clean water",
    description:
      "Udara turns plastic waste into free clean drinking water across Africa.",
    url: "/about",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Udara",
  url: `${siteConfig.url}/about`,
  description: siteConfig.description,
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
  },
};

export default function AboutPage() {
  return (
    <LegalShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <section className="px-4 pb-8 pt-10 sm:px-6 sm:pb-12 sm:pt-16">
        <div className="mx-auto w-full max-w-[720px]">
          <p className="text-[13px] font-medium text-[#6b6b6b] sm:text-[14px]">
            About Udara
          </p>
          <h1 className="mt-2 text-balance text-[2.25rem] font-semibold leading-[1.1] tracking-[-0.04em] text-ink sm:text-[3rem]">
            Udara turns plastic waste into free clean water.
          </h1>
          <p className="mt-5 text-pretty text-[17px] leading-relaxed text-muted sm:text-[19px]">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappIntentUrl("Hi, I pressed Sponsor a batch. I want to sponsor a batch of Udara water.")}>
              Sponsor a batch
            </Button>
            <Button href={supportWhatsAppUrl}>
              Contact support
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.08] px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto grid w-full max-w-[720px] gap-10">
          <div>
            <h2 className="text-[1.35rem] font-bold tracking-[-0.03em] text-ink sm:text-[1.5rem]">
              What Udara is
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              {copy.faq.items[0].answer}
            </p>
          </div>

          <div>
            <h2 className="text-[1.35rem] font-bold tracking-[-0.03em] text-ink sm:text-[1.5rem]">
              Company
            </h2>
            <dl className="mt-4 grid gap-4 text-[15px] sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-ink">Company</dt>
                <dd className="mt-1 text-muted">
                  {siteConfig.legalName} ({siteConfig.legalEntity})
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Market</dt>
                <dd className="mt-1 text-muted">Africa</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-semibold text-ink">Registered office</dt>
                <dd className="mt-1 text-muted">
                  {siteConfig.address.streetAddress},{" "}
                  {siteConfig.address.addressLocality},{" "}
                  {siteConfig.address.addressRegion}, Nigeria
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="text-[1.35rem] font-bold tracking-[-0.03em] text-ink sm:text-[1.5rem]">
              How clean is Udara water?
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              {copy.faq.items[3].answer}
            </p>
          </div>

          <div>
            <h2 className="text-[1.35rem] font-bold tracking-[-0.03em] text-ink sm:text-[1.5rem]">
              How can I work with Udara?
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              {copy.faq.items[5].answer}
            </p>
          </div>

          <div>
            <h2 className="text-[1.35rem] font-bold tracking-[-0.03em] text-ink sm:text-[1.5rem]">
              What happens to the plastic?
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              {copy.faq.items[6].answer}
            </p>
          </div>

          <div className="rounded-[12px] border border-ink/[0.06] bg-bg px-5 py-5 sm:px-6">
            <p className="text-[15px] leading-relaxed text-ink/80">
              Privacy details:{" "}
              <Link
                href="/privacy"
                className="font-medium text-ink underline decoration-cta/40 underline-offset-[3px]"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <p className="mt-3 text-[14px] text-muted">
              Support:{" "}
              <a
                href={supportWhatsAppUrl}
                className="font-medium text-ink underline underline-offset-[3px]"
              >
                {siteConfig.supportPhoneDisplay}
              </a>{" "}
              · {siteConfig.supportHours}
            </p>
          </div>
        </div>
      </section>
    </LegalShell>
  );
}
