/** Canonical site URL for metadata, sitemap, and structured data. */
export const siteConfig = {
  name: "Udara",
  legalName: "Udara Technologies",
  tagline: "Strict savings on WhatsApp",
  description:
    "Udara is a WhatsApp-based strict savings AI agent by Udara Technologies. It helps you understand spending, hard-locks transfers from 7PM, and grows money with Rubies Microfinance Bank in Nigeria. NDPC-certified privacy protections.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.useudara.com",
  locale: "en_NG",
  twitterHandle: "@useudara",
  /** E.164 without + — Nigerian line 070-77-069-738 */
  whatsappNumber: "2347077069738",
  whatsappJoinMessage:
    "Hi! I’d like to join Udara’s weekly early-access list. Please add me and notify me when I can get started.",
} as const;

/** Opens WhatsApp with a pre-filled join / waitlist message. */
export const whatsappJoinUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappJoinMessage)}`;
