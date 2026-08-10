/** Canonical site URL for metadata, sitemap, and structured data. */
export const siteConfig = {
  name: "Udara",
  legalName: "Udara Technologies",
  tagline: "Strict savings on WhatsApp",
  description:
    "Udara is a WhatsApp-based strict savings AI agent by Udara Technologies. It helps you understand spending, hard-locks transfers from 7PM, and grows money with Rubies Microfinance Bank in Nigeria. NDPC-certified privacy protections.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://udara.app",
  locale: "en_NG",
  twitterHandle: "@udara",
} as const;
