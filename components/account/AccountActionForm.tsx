"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export type AccountMode = "block" | "unblock";

const copyByMode: Record<
  AccountMode,
  {
    title: string;
    subhead: string;
    cta: string;
    success: string;
    confirmTitle: string;
    confirmBody: string;
    confirmCta: string;
  }
> = {
  block: {
    title: "Block Account",
    subhead: "Protect your funds with a quick account freeze",
    cta: "Block Account",
    success: "Your account freeze request was received. We'll confirm shortly.",
    confirmTitle: "Are you sure?",
    confirmBody:
      "This will freeze your Udara account and pause payment activity until you unblock it. Only continue if you mean to lock the account now.",
    confirmCta: "Yes, block account",
  },
  unblock: {
    title: "Unblock Account",
    subhead: "Restore access after verifying your WhatsApp number and PIN",
    cta: "Unblock Account",
    success: "Your unblock request was received. We'll confirm shortly.",
    confirmTitle: "Are you sure?",
    confirmBody:
      "This will restore access to your Udara account. Only continue if you recognize this request.",
    confirmCta: "Yes, unblock account",
  },
};

type AccountActionFormProps = {
  mode: AccountMode;
};

export function AccountActionForm({ mode }: AccountActionFormProps) {
  const meta = copyByMode[mode];
  const isBlock = mode === "block";
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "confirm" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  function validate() {
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 7) {
      setStatus("error");
      setError("Enter a valid WhatsApp phone number.");
      return false;
    }
    if (!/^\d{4}$/.test(pin)) {
      setStatus("error");
      setError("PIN must be 4 digits.");
      return false;
    }
    return true;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!validate()) return;
    setStatus("confirm");
  }

  async function confirmSubmit() {
    setStatus("loading");
    // UI-only for now — wire to backend when ready
    await new Promise((resolve) => window.setTimeout(resolve, 650));
    setStatus("success");
  }

  return (
    <div>
      <p className="text-[13px] font-medium text-muted">
        <Link href="/" className="hover:text-ink">
          Udara
        </Link>
        <span className="mx-1.5 text-black/25">/</span>
        <span className="text-ink">Account</span>
      </p>

      {/* Segmented control — Block tab reads blue when active */}
      <div className="mt-6 rounded-[12px] bg-[#ebebea] p-1">
        <div className="grid grid-cols-2 gap-1">
          <Link
            href="/account/block"
            className={[
              "rounded-[10px] px-3 py-2.5 text-center text-[14px] font-semibold transition-colors",
              mode === "block"
                ? "bg-cta text-white shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
                : "text-muted hover:text-ink",
            ].join(" ")}
            aria-current={mode === "block" ? "page" : undefined}
          >
            Block Account
          </Link>
          <Link
            href="/account/unblock"
            className={[
              "rounded-[10px] px-3 py-2.5 text-center text-[14px] font-semibold transition-colors",
              mode === "unblock"
                ? "bg-white text-ink shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
                : "text-muted hover:text-ink",
            ].join(" ")}
            aria-current={mode === "unblock" ? "page" : undefined}
          >
            Unblock Account
          </Link>
        </div>
      </div>

      <div className="mt-5 rounded-[16px] border border-black/[0.06] bg-white px-5 py-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:px-8 sm:py-8">
        <h1
          className={[
            "text-center text-[1.5rem] font-bold tracking-[-0.03em] sm:text-[1.75rem]",
            isBlock ? "text-[#e03e3e]" : "text-ink",
          ].join(" ")}
        >
          {meta.title}
        </h1>
        <p className="mx-auto mt-2 max-w-[28ch] text-center text-[14px] leading-relaxed text-muted sm:text-[15px]">
          {meta.subhead}
        </p>

        {status === "success" ? (
          <div
            className="mt-8 rounded-[10px] border border-black/[0.06] bg-[#f7f6f3] px-4 py-4 text-center"
            role="status"
          >
            <p className="text-[15px] font-medium text-ink">{meta.success}</p>
            <Link
              href="/"
              className="mt-3 inline-block text-[14px] font-medium text-cta hover:underline"
            >
              Back to home
            </Link>
          </div>
        ) : status === "confirm" ? (
          <div
            className="mt-8 rounded-[12px] border border-black/[0.08] bg-[#f7f6f3] px-4 py-5 text-center sm:px-5"
            role="alertdialog"
            aria-labelledby="confirm-title"
            aria-describedby="confirm-body"
          >
            <p
              id="confirm-title"
              className={[
                "text-[1.15rem] font-bold tracking-[-0.02em]",
                isBlock ? "text-[#e03e3e]" : "text-ink",
              ].join(" ")}
            >
              {meta.confirmTitle}
            </p>
            <p
              id="confirm-body"
              className="mx-auto mt-2 max-w-[36ch] text-[14px] leading-relaxed text-muted"
            >
              {meta.confirmBody}
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="inline-flex h-11 items-center justify-center rounded-[8px] border border-black/10 bg-white px-4 text-[14px] font-medium text-ink transition-colors hover:bg-[#f3f3f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmSubmit}
                className={[
                  "inline-flex h-11 items-center justify-center rounded-[8px] px-4 text-[14px] font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                  isBlock
                    ? "bg-[#e03e3e] focus-visible:ring-[#e03e3e]"
                    : "bg-cta focus-visible:ring-cta",
                ].join(" ")}
              >
                {meta.confirmCta}
              </button>
            </div>
          </div>
        ) : (
          <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
            <div>
              <label
                htmlFor="whatsapp-phone"
                className="block text-left text-[13px] font-semibold text-ink"
              >
                Whatsapp Phone Number
              </label>
              <div className="mt-2 flex overflow-hidden rounded-[8px] border border-black/[0.12] bg-white focus-within:border-cta focus-within:ring-2 focus-within:ring-cta/25">
                <div className="flex shrink-0 items-center gap-1.5 border-r border-black/[0.08] bg-[#fafafa] px-3 text-[14px] text-ink">
                  <span aria-hidden="true">🇳🇬</span>
                  <span>+234</span>
                  <svg
                    viewBox="0 0 12 12"
                    className="h-3 w-3 text-muted"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 4.5 6 7.5 9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <input
                  id="whatsapp-phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  required
                  placeholder="(555) 000-0000"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  className="h-11 min-w-0 flex-1 bg-transparent px-3 text-[15px] text-ink outline-none placeholder:text-[#9b9a97]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="account-pin"
                className="block text-left text-[13px] font-semibold text-ink"
              >
                PIN
              </label>
              <div className="relative mt-2">
                <input
                  id="account-pin"
                  name="pin"
                  type={showPin ? "text" : "password"}
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  required
                  maxLength={4}
                  placeholder="••••"
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value.replace(/\D/g, "").slice(0, 4));
                    if (status === "error") setStatus("idle");
                  }}
                  className="h-11 w-full rounded-[8px] border border-black/[0.12] bg-white px-3 pr-11 text-[15px] tracking-[0.2em] text-ink outline-none placeholder:tracking-[0.35em] placeholder:text-[#9b9a97] focus:border-cta focus:ring-2 focus:ring-cta/25"
                />
                <button
                  type="button"
                  onClick={() => setShowPin((v) => !v)}
                  className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta"
                  aria-label={showPin ? "Hide PIN" : "Show PIN"}
                >
                  {showPin ? (
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                      <path
                        d="M2 10s3.5-5 8-5 8 5 8 5-3.5 5-8 5-8-5-8-5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="10"
                        cy="10"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                      <path
                        d="M3 3l14 14M8.5 8.6A2.5 2.5 0 0 0 11.4 11.5M6.2 6.4C4.1 7.5 2.5 10 2.5 10s3.5 5 7.5 5c1.2 0 2.3-.3 3.3-.8M10.8 6.1A7.6 7.6 0 0 1 14 6.5c4 0 7.5 5 7.5 5a13 13 0 0 1-2.4 2.7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {status === "error" && error ? (
              <p className="text-[13px] text-[#c23b3b]" role="alert">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "loading"}
              className={[
                "flex h-12 w-full items-center justify-center rounded-[8px] text-[15px] font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60",
                isBlock
                  ? "bg-[#e03e3e] focus-visible:ring-[#e03e3e]"
                  : "bg-cta focus-visible:ring-cta",
              ].join(" ")}
            >
              {status === "loading" ? "Submitting…" : meta.cta}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
