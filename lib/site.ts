/** Canonical site URL for metadata, sitemap, and structured data. */
export const siteConfig = {
  name: "Kedu",
  legalName: "Udara Technologies",
  tagline: "Strict savings on WhatsApp",
  description:
    "Kedu is a WhatsApp-based strict savings AI agent by Udara Technologies. It helps you understand spending, hard-locks transfers from 7PM, and grows money with Rubies Microfinance Bank in Nigeria. NDPC-certified privacy protections.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://kedu.app",
  locale: "en_NG",
  twitterHandle: "@kedu",
} as const;
