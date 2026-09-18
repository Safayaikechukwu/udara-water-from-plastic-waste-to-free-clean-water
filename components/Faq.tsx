import { copy } from "@/lib/copy";
import { Section } from "@/components/ui/Section";
import { whatsappIntentUrl } from "@/lib/site";

const faqWhatsAppUrl = whatsappIntentUrl(
  "Hi, I pressed the FAQ number. I have a question about Udara.",
);

export function Faq() {
  return (
    <Section id="faq" soft aria-labelledby="faq-heading">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16 xl:gap-24">
        <div className="lg:sticky lg:top-24 lg:self-start">
            <h2
              id="faq-heading"
              className="text-[2rem] font-bold tracking-[-0.03em] text-ink sm:text-4xl md:text-[2.75rem]"
            >
              {copy.faq.headline}
            </h2>
            <p className="mt-4 max-w-[28rem] text-[16px] leading-relaxed text-muted sm:text-[17px]">
              {copy.faq.blurb}
            </p>

            <div className="mt-10 border-t border-black/[0.08] pt-8">
              <p className="text-[14px] font-medium text-muted">
                {copy.faq.contactLabel}
              </p>
              <a
                href={faqWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block rounded-sm text-[1.35rem] font-semibold tracking-[-0.02em] text-ink underline decoration-cta decoration-2 underline-offset-[6px] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2"
              >
                {copy.faq.phone}
              </a>
              <p className="mt-2 text-[13px] text-muted">{copy.faq.phoneNote}</p>
            </div>
        </div>

        <div className="border-y border-black/[0.08]">
            {copy.faq.items.map((item) => (
              <details
                key={item.question}
                name="udara-faq"
                className="group border-b border-black/[0.08] py-5 open:pb-6 last:border-b-0 sm:py-6"
                // Don't set `open` in React - browsers with exclusive
                // accordion (`name`) mutate it before hydration and crash client JS.
                suppressHydrationWarning
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left text-[1.05rem] font-semibold tracking-[-0.02em] text-ink marker:content-none [&::-webkit-details-marker]:hidden sm:text-[1.15rem]">
                  <span>{item.question}</span>
                  <span
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-ink transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                      <path
                        d="M8 2v12M2 8h12"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed text-muted sm:text-[16px]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
      </div>
    </Section>
  );
}
