import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

const supportWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Udara Global Limited collects, uses, and protects personal data for the Udara WhatsApp savings service. Covers NDPA 2023, GDPR principles, and Meta Platform Terms.",
  alternates: {
    canonical: "/privacy",
  },
};

function MidStage({
  tone = "warm",
  children,
}: {
  tone?: "warm" | "soft" | "oxblood";
  children: React.ReactNode;
}) {
  const tones = {
    warm: "bg-[#f1ebe3]",
    soft: "bg-[#f0efec]",
    oxblood: "bg-[#4a0508] text-white",
  } as const;

  return (
    <div className="mx-auto w-full max-w-[1000px] px-4 sm:px-6">
      <div
        className={`overflow-hidden rounded-[14px] sm:rounded-[20px] ${tones[tone]}`}
      >
        {children}
      </div>
    </div>
  );
}

function FeatureSection({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-12 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1000px] px-4 sm:px-6">
        <div className="max-w-[640px]">
          <h2 className="text-[clamp(1.75rem,6vw,3.375rem)] font-bold leading-[1.1] tracking-[-0.035em] text-[#37352f] text-balance">
            {title}
          </h2>
          <p className="mt-3 max-w-[520px] text-[16px] leading-[1.5] text-[#6b6b66] sm:mt-4 sm:text-[18px]">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="mt-6 sm:mt-10">{children}</div>
    </section>
  );
}

function PolicyCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-3 rounded-[12px] border border-black/[0.06] bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:mx-6 sm:rounded-[16px] sm:p-8">
      <div className="space-y-4 text-[15px] leading-[1.7] text-[#3f3f3c] sm:text-[16px]">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  const host = siteConfig.url.replace(/^https?:\/\//, "");

  return (
    <LegalShell>
      {/* Hero: Notion mobile = centered type + full-width primary CTA */}
      <section className="px-4 pb-8 pt-10 text-center sm:px-6 sm:pb-14 sm:pt-20">
        <div className="mx-auto w-full max-w-[1252px]">
          <h1 className="mx-auto max-w-[20ch] text-balance text-[clamp(2.15rem,8.5vw,5.5rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-[#37352f] sm:max-w-[900px]">
            So, how do we handle your data?
          </h1>
          <p className="mx-auto mt-4 max-w-[34rem] text-pretty text-[16px] leading-[1.5] text-[#6b6b66] sm:mt-6 sm:text-[20px]">
            Clear roles, clear bases for processing, and rights you can exercise
            anytime.
          </p>
          <div className="mx-auto mt-6 w-full max-w-[400px] sm:mt-8">
            <Button
              href={supportWhatsAppUrl}
              className="h-12 min-h-12 w-full rounded-[8px] px-5 text-[15px] sm:h-11 sm:min-h-11 sm:rounded-[6px]"
            >
              Contact support
            </Button>
          </div>
          <p className="mt-4 text-[13px] text-[#9b9a97] sm:mt-5">
            Last updated: August 11, 2026
          </p>
        </div>
      </section>

      {/* Mid-page contained stage: Notion product-panel rhythm */}
      <section className="pb-8 sm:pb-12">
        <MidStage tone="oxblood">
          <div className="relative px-5 py-8 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
            <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-white/50">
              Registration
            </p>
            <p className="mt-3 text-[clamp(1.5rem,6vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              NDPC/DCP/11710
            </p>
            <p className="mt-3 max-w-[560px] text-[15px] leading-[1.55] text-white/75 sm:mt-4 sm:text-[18px]">
              Udara Global Limited is a registered data controller/processor of
              major importance with the Nigeria Data Protection Commission.
            </p>
            <div className="mt-6 grid gap-2.5 sm:mt-8 sm:grid-cols-3 sm:gap-3">
              {[
                ["Entity", "Udara Global Limited"],
                ["Product", "Udara · Udara Technologies"],
                ["Channel", "WhatsApp + useudara.com"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[12px] border border-white/12 bg-white/[0.08] px-4 py-3 text-left backdrop-blur-sm"
                >
                  <p className="text-[11px] uppercase tracking-[0.08em] text-white/45">
                    {label}
                  </p>
                  <p className="mt-1 text-[14px] font-medium text-white sm:text-[15px]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MidStage>
      </section>

      <FeatureSection
        id="introduction"
        title="Who this covers."
        subtitle="Merchants of one: anyone using Udara on WhatsApp, on the site, or on our waitlist."
      >
        <MidStage tone="soft">
          <div className="py-6 sm:py-8">
            <PolicyCard>
              <p>
                This policy applies to people who use Udara through WhatsApp,
                visit {host}, join our waitlist or newsletter, use account
                block/unblock flows, or otherwise interact with Udara websites,
                applications, and connected channels (including WhatsApp where
                integrated).
              </p>
              <p>
                Udara Global Limited (&quot;Udara&quot;, &quot;we&quot;,
                &quot;us&quot;, or &quot;our&quot;) operates Udara as a Udara
                Technologies product. By using our services, you acknowledge the
                practices described herein.
              </p>
            </PolicyCard>
          </div>
        </MidStage>
      </FeatureSection>

      <FeatureSection
        id="roles"
        title="Roles & partners."
        subtitle="We are the controller for Udara account data. Rubies holds customer funds. Meta powers WhatsApp delivery."
      >
        <MidStage tone="warm">
          <div className="py-6 sm:py-8">
            <PolicyCard>
              <p>
                <strong className="font-semibold text-[#37352f]">
                  As a data controller:
                </strong>{" "}
                Udara is the controller for personal data we collect to operate
                the product: WhatsApp identifiers, preferences you share,
                waitlist emails, support messages, and website analytics.
              </p>
              <p>
                <strong className="font-semibold text-[#37352f]">
                  Banking partner:
                </strong>{" "}
                Customer funds related to Udara savings are held with Rubies
                Microfinance Bank. Rubies remains responsible for banking,
                settlement, and regulated financial records. We exchange
                information with Rubies only as needed to deliver the service
                and meet legal obligations.
              </p>
              <p>
                <strong className="font-semibold text-[#37352f]">
                  As a data processor:
                </strong>{" "}
                In limited cases where we process personal data solely on
                another organisation&apos;s documented instructions under a DPA,
                we act as a processor for that activity.
              </p>
            </PolicyCard>
          </div>
        </MidStage>
      </FeatureSection>

      <FeatureSection
        id="data"
        title="What we collect."
        subtitle="Only what we need to run strict savings on WhatsApp: identity, messages, and technical signals."
      >
        <MidStage tone="soft">
          <div className="space-y-4 py-6 sm:space-y-5 sm:py-8">
            <PolicyCard>
              <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#9b9a97]">
                3.1 Data you provide
              </p>
              <p>
                <strong className="font-semibold text-[#37352f]">
                  Identity data:
                </strong>{" "}
                full name and, where required for KYC or account recovery,
                government-issued ID details.
              </p>
              <p>
                <strong className="font-semibold text-[#37352f]">
                  Contact data:
                </strong>{" "}
                email address, WhatsApp-linked phone numbers, and other contact
                details you share.
              </p>
              <p>
                <strong className="font-semibold text-[#37352f]">
                  Savings preferences:
                </strong>{" "}
                goals, lock windows (for example the 7PM transfer lock), and
                instructions you send on WhatsApp.
              </p>
              <p>
                <strong className="font-semibold text-[#37352f]">
                  Financial data:
                </strong>{" "}
                where needed to open or operate a savings relationship,
                identifiers such as BVN/NIN and settlement or wallet account
                details may be processed with our banking partner.
              </p>
            </PolicyCard>
            <PolicyCard>
              <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#9b9a97]">
                3.2 Meta / WhatsApp
              </p>
              <p>
                <strong className="font-semibold text-[#37352f]">
                  Message metadata:
                </strong>{" "}
                timestamps, delivery/read status, and sender/receiver
                identifiers.
              </p>
              <p>
                <strong className="font-semibold text-[#37352f]">
                  Conversation content:
                </strong>{" "}
                temporary processing of text so Udara can understand intent,
                answer spending questions, and apply discipline features such as
                transfer locks.
              </p>
            </PolicyCard>
            <PolicyCard>
              <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#9b9a97]">
                3.3 Technical data
              </p>
              <p>
                Essential cookies for sessions; analytics (Google Analytics /
                Vercel Analytics where enabled); IP addresses, browser types,
                and OS versions for security and reliability.
              </p>
            </PolicyCard>
          </div>
        </MidStage>
      </FeatureSection>

      <FeatureSection
        id="legal-basis"
        title="Why we process it."
        subtitle="Contract, law, legitimate interests, and consent. Never more than the basis allows."
      >
        <MidStage tone="warm">
          <div className="py-6 sm:py-8">
            <PolicyCard>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <strong className="font-semibold text-[#37352f]">
                    Contractual necessity:
                  </strong>{" "}
                  to provide Udara savings and WhatsApp agent services.
                </li>
                <li>
                  <strong className="font-semibold text-[#37352f]">
                    Legal obligation:
                  </strong>{" "}
                  AML/CFT, NDPA, and obligations tied to regulated banking
                  partners.
                </li>
                <li>
                  <strong className="font-semibold text-[#37352f]">
                    Legitimate interests:
                  </strong>{" "}
                  fraud detection, platform security, and privacy-preserving
                  product improvement.
                </li>
                <li>
                  <strong className="font-semibold text-[#37352f]">Consent:</strong>{" "}
                  where required (for example certain marketing). You may
                  withdraw anytime.
                </li>
              </ul>
            </PolicyCard>
          </div>
        </MidStage>
      </FeatureSection>

      <FeatureSection
        id="ai"
        title="AI, carefully."
        subtitle="Models help with chat and discipline. We don’t sell your messages to AI labs."
      >
        <MidStage tone="soft">
          <div className="py-6 sm:py-8">
            <PolicyCard>
              <p>
                Udara uses proprietary and third-party AI models to power
                WhatsApp conversations, spending insights, and savings
                discipline features.
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <strong className="font-semibold text-[#37352f]">
                    No data sale:
                  </strong>{" "}
                  we do not sell personal data or message content to third-party
                  AI labs.
                </li>
                <li>
                  <strong className="font-semibold text-[#37352f]">
                    Privacy-first AI:
                  </strong>{" "}
                  systems are configured to identify and redact sensitive
                  financial information (such as full card numbers) before
                  processing where possible.
                </li>
              </ul>
            </PolicyCard>
          </div>
        </MidStage>
      </FeatureSection>

      <FeatureSection
        id="sharing"
        title="Who we share with."
        subtitle="Banks, Meta, infrastructure, and law enforcement only when required."
      >
        <MidStage tone="warm">
          <div className="py-6 sm:py-8">
            <PolicyCard>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <strong className="font-semibold text-[#37352f]">
                    Financial institutions:
                  </strong>{" "}
                  Rubies Microfinance Bank (and other regulated partners as
                  required).
                </li>
                <li>
                  <strong className="font-semibold text-[#37352f]">
                    Platform providers:
                  </strong>{" "}
                  Meta Platforms, Inc. for WhatsApp Business API / messaging.
                </li>
                <li>
                  <strong className="font-semibold text-[#37352f]">
                    Infrastructure & analytics:
                  </strong>{" "}
                  encrypted cloud hosting and analytics (for example Vercel,
                  Google Analytics).
                </li>
                <li>
                  <strong className="font-semibold text-[#37352f]">
                    Law enforcement:
                  </strong>{" "}
                  only with a valid legal order or mandatory AML/regulatory
                  reporting.
                </li>
              </ul>
              <p className="pt-2">
                Cross-border transfers follow Section 41 of the NDPA with
                safeguards such as Standard Contractual Clauses (SCCs).
              </p>
              <p>
                We use AES-256 at rest and TLS 1.3 in transit where supported.
                Transaction/KYC logs: 5 years. Marketing/waitlist: deleted within
                12 months of inactivity (unless law requires longer).
              </p>
            </PolicyCard>
          </div>
        </MidStage>
      </FeatureSection>

      <FeatureSection
        id="rights"
        title="Your rights."
        subtitle="Access, fix, delete, export, subject to Nigerian retention rules."
      >
        <MidStage tone="soft">
          <div className="py-6 sm:py-8">
            <PolicyCard>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <strong className="font-semibold text-[#37352f]">Access</strong>{" "}
                  : request a copy of your personal data.
                </li>
                <li>
                  <strong className="font-semibold text-[#37352f]">
                    Rectification
                  </strong>{" "}
                  : correct inaccurate data.
                </li>
                <li>
                  <strong className="font-semibold text-[#37352f]">Erasure</strong>{" "}
                  : request deletion, subject to regulatory retention.
                </li>
                <li>
                  <strong className="font-semibold text-[#37352f]">
                    Portability
                  </strong>{" "}
                  : export in a structured, machine-readable format.
                </li>
              </ul>
            </PolicyCard>
          </div>
        </MidStage>
      </FeatureSection>

      <FeatureSection
        id="contact"
        title="Talk to our DPO."
        subtitle="Questions, complaints, or rights requests. We respond. You can also escalate to the NDPC."
      >
        <MidStage tone="oxblood">
          <div className="px-5 py-8 sm:px-10 sm:py-12">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[12px] uppercase tracking-[0.08em] text-white/45">
                  Data protection officer
                </p>
                <p className="mt-2 text-[1.25rem] font-semibold tracking-[-0.02em] sm:text-[1.35rem]">
                  Ndubueze Ikechukwu Samuel
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-white/75 sm:mt-4">
                  25, Herbert Macaulay Way, Yaba, Lagos State, Nigeria.
                </p>
              </div>
              <div className="flex flex-col justify-end gap-3">
                <a
                  href="mailto:safayasamuelsikechukwu@gmail.com"
                  className="inline-flex h-12 min-h-12 items-center justify-center break-all rounded-[8px] bg-white px-4 text-center text-[13px] font-medium text-cta transition-opacity hover:opacity-90 sm:h-11 sm:min-h-11 sm:rounded-[6px] sm:text-[15px]"
                >
                  safayasamuelsikechukwu@gmail.com
                </a>
                <a
                  href={supportWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 min-h-12 items-center justify-center rounded-[8px] border border-white/20 bg-white/10 px-4 text-[15px] font-medium text-white transition-colors hover:bg-white/15 sm:h-11 sm:min-h-11 sm:rounded-[6px]"
                >
                  +234 707 706 9738
                </a>
              </div>
            </div>
          </div>
        </MidStage>
      </FeatureSection>

      <section className="border-t border-black/[0.06] px-4 py-12 text-center sm:px-6 sm:py-16">
        <p className="mx-auto max-w-[480px] text-[14px] leading-relaxed text-[#6b6b66]">
          If you are unsatisfied with our response, you may lodge a complaint
          with the Nigeria Data Protection Commission (NDPC).
        </p>
      </section>
    </LegalShell>
  );
}
