import type { Metadata } from "next";
import Link from "next/link";
import {
  FeatureSection,
  MidStage,
  PolicyCard,
} from "@/components/legal/LegalBlocks";
import { LegalShell } from "@/components/legal/LegalShell";
import { Button } from "@/components/ui/Button";
import { supportWhatsAppUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Udara, the WhatsApp-based strict savings service operated by Udara Global Limited.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  const host = siteConfig.url.replace(/^https?:\/\//, "");

  return (
    <LegalShell>
      <section className="px-4 pb-8 pt-10 text-center sm:px-6 sm:pb-14 sm:pt-20">
        <div className="mx-auto w-full max-w-[1252px]">
          <h1 className="mx-auto max-w-[18ch] text-balance text-[clamp(2.15rem,8.5vw,5.5rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-ink sm:max-w-[900px]">
            So, what are the terms?
          </h1>
          <p className="mx-auto mt-4 max-w-[34rem] text-pretty text-[16px] leading-[1.5] text-muted sm:mt-6 sm:text-[20px]">
            The rules for using Udara on WhatsApp, this website, and related
            services.
          </p>
          <div className="mx-auto mt-6 w-full max-w-[400px] sm:mt-8">
            <Button href={supportWhatsAppUrl} className="w-full">
              Contact support
            </Button>
          </div>
          <p className="mt-4 text-[13px] text-muted sm:mt-5">
            Last updated: August 11, 2026
          </p>
        </div>
      </section>

      <section className="pb-8 sm:pb-12">
        <MidStage tone="oxblood">
          <div className="relative px-5 py-8 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
            <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ink/50">
              Entity
            </p>
            <p className="mt-3 text-[clamp(1.5rem,6vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              Udara Global Limited
            </p>
            <p className="mt-3 max-w-[560px] text-[15px] leading-[1.55] text-ink/70 sm:mt-4 sm:text-[18px]">
              (&quot;Udara&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
              Registered office: 25, Herbert Macaulay Way, Yaba, Lagos State,
              Nigeria.
            </p>
            <div className="mt-6 grid gap-2.5 sm:mt-8 sm:grid-cols-3 sm:gap-3">
              {[
                ["Product", "Udara · Udara Technologies"],
                ["Channel", `WhatsApp + ${host}`],
                ["Law", "Federal Republic of Nigeria"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[12px] border border-black/10 bg-black/[0.05] px-4 py-3 text-left backdrop-blur-sm"
                >
                  <p className="text-[11px] uppercase tracking-[0.08em] text-ink/45">
                    {label}
                  </p>
                  <p className="mt-1 text-[14px] font-medium text-ink sm:text-[15px]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MidStage>
      </section>

      <FeatureSection
        id="acceptance"
        title="1. Acceptance of terms."
        subtitle="Using Udara means you agree to these Terms of Service."
      >
        <MidStage tone="soft">
          <div className="py-6 sm:py-8">
            <PolicyCard>
              <p>
                By accessing or using the Udara platform, website, WhatsApp
                experience, waitlist, or related tools (&quot;the Service&quot;),
                you agree to be bound by these Terms of Service.
              </p>
              <p>
                If you are using the Service on behalf of another person or
                organisation, you represent that you have authority to bind that
                person or organisation to these terms.
              </p>
            </PolicyCard>
          </div>
        </MidStage>
      </FeatureSection>

      <FeatureSection
        id="service"
        title="2. The service and AI disclaimer."
        subtitle="Udara is a WhatsApp-based strict savings AI agent, not a perfect oracle."
      >
        <MidStage tone="warm">
          <div className="py-6 sm:py-8">
            <PolicyCard>
              <p>
                <strong className="font-semibold text-ink">Scope:</strong> Udara
                provides Artificial Intelligence (AI) and Natural Language
                Processing (NLP) features to help people understand spending,
                apply discipline rules such as transfer locks, and build savings
                habits on WhatsApp, operated as a Udara Technologies product.
              </p>
              <p>
                <strong className="font-semibold text-ink">AI nature:</strong> You
                acknowledge that Udara uses large language models and related AI
                systems. While we strive for accuracy, AI can occasionally
                generate incorrect, incomplete, biased, or &quot;hallucinated&quot;
                responses.
              </p>
              <p>
                <strong className="font-semibold text-ink">Your responsibility:</strong>{" "}
                You remain responsible for decisions you make based on Udara
                outputs, including savings choices and payment instructions. We
                are not liable for losses arising solely from reliance on an
                incorrect AI response.
              </p>
            </PolicyCard>
          </div>
        </MidStage>
      </FeatureSection>

      <FeatureSection
        id="funds"
        title="3. Bank and funds."
        subtitle="Udara is the discipline layer. Customer funds sit with a licensed bank."
      >
        <MidStage tone="soft">
          <div className="py-6 sm:py-8">
            <PolicyCard>
              <p>
                <strong className="font-semibold text-ink">Not a bank:</strong>{" "}
                Udara Global Limited is a technology provider. We are not a
                deposit-taking bank by ourselves. Customer funds related to Udara
                savings are held with Rubies Microfinance Bank (and other
                licensed banks as required).
              </p>
              <p>
                <strong className="font-semibold text-ink">Bank terms:</strong>{" "}
                Banking, settlement, and related financial operations are subject
                to the terms, policies, and regulatory obligations of those
                licensed banks. Where you use banking features, you may also
                be bound by their terms.
              </p>
              <p>
                <strong className="font-semibold text-ink">No liability for bank failures:</strong>{" "}
                To the extent permitted by law, Udara is not liable for payment
                failures, settlement delays, or disputes that arise solely
                between you and a bank or payment provider, except where caused
                by our own wilful misconduct or negligence as determined under
                Nigerian law.
              </p>
            </PolicyCard>
          </div>
        </MidStage>
      </FeatureSection>

      <FeatureSection
        id="obligations"
        title="4. Your obligations and KYC."
        subtitle="Be eligible, be accurate, and keep your account secure."
      >
        <MidStage tone="warm">
          <div className="py-6 sm:py-8">
            <PolicyCard>
              <p>
                <strong className="font-semibold text-ink">Eligibility:</strong> You
                must be at least 18 years old to use Udara.
              </p>
              <p>
                <strong className="font-semibold text-ink">Verification (KYC):</strong>{" "}
                You agree to provide accurate information when requested for
                identity verification, including government IDs and other details
                required under applicable Anti-Money Laundering (AML) rules and
                bank requirements.
              </p>
              <p>
                <strong className="font-semibold text-ink">Account security:</strong>{" "}
                You are responsible for maintaining the confidentiality of your
                WhatsApp access, PINs, passcodes, and any credentials used with
                Udara. Notify us promptly if you suspect unauthorised access, and
                use account block tools where available.
              </p>
            </PolicyCard>
          </div>
        </MidStage>
      </FeatureSection>

      <FeatureSection
        id="acceptable-use"
        title="5. Acceptable use policy."
        subtitle="Use Udara lawfully. Do not abuse Meta, WhatsApp, or our systems."
      >
        <MidStage tone="soft">
          <div className="py-6 sm:py-8">
            <PolicyCard>
              <p>You agree not to use Udara for:</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  Any illegal activities, fraud, or prohibited financial activity.
                </li>
                <li>
                  Sending unsolicited spam or violating Meta / WhatsApp Business
                  policies.
                </li>
                <li>
                  Reverse engineering, scraping, probing, or attempting to
                  compromise the security of our systems or AI models.
                </li>
                <li>
                  Impersonating others, misrepresenting identity, or providing
                  false KYC information.
                </li>
              </ul>
            </PolicyCard>
          </div>
        </MidStage>
      </FeatureSection>

      <FeatureSection
        id="ip"
        title="6. Intellectual property."
        subtitle="Our software and brand stay ours. You get a limited license to use the Service."
      >
        <MidStage tone="warm">
          <div className="py-6 sm:py-8">
            <PolicyCard>
              <p>
                <strong className="font-semibold text-ink">Ownership:</strong> All
                software, proprietary AI models, documentation, and brand assets
                remain the exclusive property of Udara Global Limited (and its
                licensors).
              </p>
              <p>
                <strong className="font-semibold text-ink">License:</strong> We grant
                you a limited, non-exclusive, non-transferable license to use the
                Service for your personal (or authorised) savings and related use,
                subject to these Terms.
              </p>
            </PolicyCard>
          </div>
        </MidStage>
      </FeatureSection>

      <FeatureSection
        id="data"
        title="7. Data protection."
        subtitle="Privacy details live in our Privacy Policy."
      >
        <MidStage tone="soft">
          <div className="py-6 sm:py-8">
            <PolicyCard>
              <p>
                Your use of the Service is also governed by our{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-ink underline decoration-cta/40 underline-offset-[3px] hover:opacity-80"
                >
                  Privacy Policy
                </Link>
                . That policy explains how we collect, use, and protect personal
                data for Udara.
              </p>
            </PolicyCard>
          </div>
        </MidStage>
      </FeatureSection>

      <FeatureSection
        id="liability"
        title="8. Limitation of liability."
        subtitle="Nigerian law caps apply. Read this carefully."
      >
        <MidStage tone="warm">
          <div className="py-6 sm:py-8">
            <PolicyCard>
              <p className="uppercase tracking-[0.02em]">
                To the maximum extent permitted by Nigerian law, Udara Global
                Limited shall not be liable for any indirect, incidental, special,
                or consequential damages. Our total liability arising out of or
                relating to the Service shall not exceed the total fees (if any)
                paid by you to us in the six months preceding the claim, or ₦50,000
                if you have paid no fees, whichever is greater, except where
                liability cannot be limited under applicable law.
              </p>
            </PolicyCard>
          </div>
        </MidStage>
      </FeatureSection>

      <FeatureSection
        id="termination"
        title="9. Termination."
        subtitle="You can leave. We can suspend for risk, fraud, or policy breaches."
      >
        <MidStage tone="soft">
          <div className="py-6 sm:py-8">
            <PolicyCard>
              <p>
                <strong className="font-semibold text-ink">By you:</strong> You may
                stop using Udara at any time and request account closure through
                support channels.
              </p>
              <p>
                <strong className="font-semibold text-ink">By us:</strong> We may
                suspend or terminate access if we suspect a violation of these
                Terms, fraudulent activity, risk to users or to us, or at the
                lawful request of the bank we use or regulators.
              </p>
            </PolicyCard>
          </div>
        </MidStage>
      </FeatureSection>

      <FeatureSection
        id="law"
        title="10. Governing law and dispute resolution."
        subtitle="Nigerian law. Try mediation in Lagos first."
      >
        <MidStage tone="warm">
          <div className="py-6 sm:py-8">
            <PolicyCard>
              <p>
                These Terms are governed by the laws of the Federal Republic of
                Nigeria. Any disputes shall first be attempted to be resolved
                through good-faith mediation in Lagos State, without prejudice to
                rights that cannot be waived under applicable law.
              </p>
            </PolicyCard>
          </div>
        </MidStage>
      </FeatureSection>

      <FeatureSection
        id="contact"
        title="11. Contact."
        subtitle="Legal questions go to the same support line you already know."
      >
        <MidStage tone="oxblood">
          <div className="px-5 py-8 sm:px-10 sm:py-12">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[12px] uppercase tracking-[0.08em] text-ink/45">
                  Attn
                </p>
                <p className="mt-2 text-[1.25rem] font-semibold tracking-[-0.02em] sm:text-[1.35rem]">
                  Legal Department, Udara Global Limited
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/70 sm:mt-4">
                  25, Herbert Macaulay Way, Yaba, Lagos State, Nigeria.
                </p>
              </div>
              <div className="flex flex-col justify-end gap-3">
                <a
                  href="mailto:safayasamuelsikechukwu@gmail.com"
                  className="inline-flex h-12 min-h-12 items-center justify-center break-all rounded-[8px] bg-white px-4 text-center text-[13px] font-medium text-ink transition-opacity hover:opacity-90 sm:h-11 sm:min-h-11 sm:rounded-[6px] sm:text-[15px]"
                >
                  safayasamuelsikechukwu@gmail.com
                </a>
                <a
                  href={supportWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 min-h-12 items-center justify-center rounded-[8px] border border-black/20 bg-black/5 px-4 text-[15px] font-medium text-ink transition-colors hover:bg-black/10 sm:h-11 sm:min-h-11 sm:rounded-[6px]"
                >
                  +234 707 706 9738
                </a>
              </div>
            </div>
          </div>
        </MidStage>
      </FeatureSection>

      <section className="border-t border-black/[0.06] px-4 py-12 text-center sm:px-6 sm:py-16">
        <p className="mx-auto max-w-[480px] text-[14px] leading-relaxed text-muted">
          Legal / Terms: safayasamuelsikechukwu@gmail.com · +234 707 706 9738.
          General product contact: safayasamuelsikechukwu@gmail.com.
        </p>
      </section>
    </LegalShell>
  );
}
