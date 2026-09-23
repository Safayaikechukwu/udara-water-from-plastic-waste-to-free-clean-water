"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy } from "@/lib/copy";
import { SiteFacts } from "@/components/SiteFacts";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

function FooterLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const isPlaceholder = href === "#";
  const className =
    "text-[13px] text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm";

  if (isPlaceholder) {
    return (
      <a
        href={href}
        className={className}
        aria-disabled="true"
        onClick={(event) => {
          event.preventDefault();
        }}
      >
        {label}
      </a>
    );
  }

  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

function SocialIcon({ type }: { type: string }) {
  const common = "h-[18px] w-[18px]";

  switch (type) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden="true">
          <path d="M13.6 10.5 19.4 4h-1.6l-5 5.7L8.7 4H4.2l6.1 8.7L4.5 20h1.6l5.3-6 4.5 6H20.5l-6.9-9.5Zm-1.9 2.1-.6-.9L6.3 5.2h2.2l3.7 5.3.6.9 5.1 7.2h-2.2l-4-5.8Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden="true">
          <path d="M19.6 7.4a6.3 6.3 0 0 1-3.7-1.2v7.2a5.7 5.7 0 1 1-4.9-5.6v2.5a3.2 3.2 0 1 0 2.3 3.1V2.5h2.5c.2 1.5 1.2 2.9 2.6 3.6A6.2 6.2 0 0 0 19.6 7v.4Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden="true">
          <path d="M6.2 9.2H3.7V20h2.5V9.2ZM4.9 4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM20.3 12.4c0-2.5-1.6-3.7-3.5-3.7-1.4 0-2.3.7-2.7 1.4h-.1V9.2h-2.4c0 .6 0 10.8 0 10.8h2.5v-6c0-.3 0-.7.1-1 .3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.7V20h2.5v-7.6Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden="true">
          <path d="M21.6 7.8a2.5 2.5 0 0 0-1.8-1.8C18.2 5.6 12 5.6 12 5.6s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.8 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.2 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.2ZM10.2 15V9l5.2 3-5.2 3Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden="true">
          <path d="M13.5 20v-7h2.3l.4-2.6h-2.7V8.8c0-.8.2-1.3 1.4-1.3h1.4V5.1A19 19 0 0 0 14 5c-2.2 0-3.7 1.3-3.7 3.8v2.1H8v2.6h2.3V20h3.2Z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer() {
  const pathname = usePathname();
  const showSiteFacts = pathname === "/";
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error || copy.footer.newsletter.error);
        return;
      }

      setStatus("success");
      setMessage(copy.footer.newsletter.success);
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <footer className="relative z-10 isolate w-full bg-ink px-4 py-14 text-white sm:px-5 lg:px-6">
      <div className="mx-auto grid w-full max-w-[1252px] gap-12 lg:grid-cols-[1fr_1.4fr_1fr]">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-white/55">
            {copy.footer.brandLine}
          </p>
          <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-white/55">
            {copy.footer.brandCloser}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {copy.footer.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 transition-colors hover:border-white/30 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                <SocialIcon type={item.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <p className="text-[13px] font-semibold text-white">Work with us</p>
            <ul className="mt-3 space-y-2.5">
              {copy.footer.work.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-white">Support</p>
            <ul className="mt-3 space-y-2.5">
              {copy.footer.support.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-white">Explore</p>
            <ul className="mt-3 space-y-2.5">
              {copy.footer.explore.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-white">Contact</p>
            <ul className="mt-3 space-y-2.5">
              {copy.footer.contact.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="newsletter">
          <p className="text-[13px] font-semibold text-white">
            {copy.footer.newsletter.title}
          </p>
          <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-white/55">
            {copy.footer.newsletter.blurb}
          </p>

          <div className="relative mt-5 min-h-[44px]">
            {status === "success" ? (
              <div
                className="subscribe-success flex min-h-[44px] items-center gap-3 rounded-[8px] border border-white/12 bg-white/[0.07] px-3.5 py-3"
                role="status"
              >
                <span
                  className="subscribe-success__icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cta text-ink"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                    <path
                      d="M3.5 8.2 6.6 11.3 12.5 4.8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="text-[13px] font-medium leading-snug text-white">
                  {message}
                </p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-2 sm:flex-row sm:items-center"
                onSubmit={handleSubscribe}
                noValidate
              >
                <label className="sr-only" htmlFor="footer-email">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (status === "error") {
                      setStatus("idle");
                      setMessage("");
                    }
                  }}
                  placeholder={copy.footer.newsletter.placeholder}
                  className="h-11 w-full min-w-0 rounded-[8px] border-[3px] border-double border-cta bg-transparent px-3.5 text-[14px] text-white outline-none placeholder:text-white/40 focus:border-cta focus-visible:ring-0 disabled:opacity-60 sm:flex-1"
                  disabled={status === "loading" ? true : undefined}
                />
                <Button
                  type="submit"
                  className="h-11 shrink-0 rounded-[8px] px-5"
                  disabled={status === "loading" ? true : undefined}
                >
                  {status === "loading" ? "Sending…" : copy.footer.newsletter.cta}
                </Button>
              </form>
            )}
          </div>

          {status === "error" && message ? (
            <p className="mt-2 text-[12px] text-[#ff8f8f]" role="alert">
              {message}
            </p>
          ) : null}
        </div>
      </div>

      {showSiteFacts ? (
        <div className="mx-auto mt-10 max-w-[1252px]">
          <SiteFacts />
        </div>
      ) : null}

      <div className="mx-auto mt-8 flex max-w-[1252px] flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-white/45">{copy.footer.poweredBy}</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {copy.footer.legal.map((link) => (
            <FooterLink key={link.label} href={link.href} label={link.label} />
          ))}
          <p className="text-[13px] text-white/45">{copy.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
