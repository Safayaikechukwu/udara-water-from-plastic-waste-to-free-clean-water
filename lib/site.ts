/** Canonical site URL for metadata, sitemap, and structured data. */
export const siteConfig = {
  name: "Udara",
  legalName: "Udara Technologies",
  legalEntity: "Udara Global Limited",
  tagline: "Strict savings on WhatsApp",
  description:
    "Udara is a WhatsApp-based strict savings AI agent by Udara Technologies. It helps you understand spending, hard-locks transfers from 7PM, and grows money with Rubies Microfinance Bank in Nigeria. NDPC-certified privacy protections.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.useudara.com",
  locale: "en_NG",
  twitterHandle: "@useudara",
  /** E.164 without + — support line */
  whatsappNumber: "2347077069738",
  /** E.164 without + — Join Udara CTA opens this line */
  whatsappJoinNumber: "2349066842645",
  whatsappJoinMessage: "HI UDARA",
  supportPhoneDisplay: "+234 707 706 9738",
  supportHours: "Mon-Fri, 9AM-6PM WAT",
  bankingPartner: "Rubies Microfinance Bank",
  ndpcRegistration: "NDPC/DCP/11710",
  address: {
    streetAddress: "25 Herbert Macaulay Way",
    addressLocality: "Yaba",
    addressRegion: "Lagos State",
    addressCountry: "NG",
  },
  sameAs: [
    "https://x.com/useudara",
    "https://www.tiktok.com/@keduhq",
    "https://www.linkedin.com/company/udara-tech/",
  ],
} as const;

/** Opens WhatsApp with a pre-filled join message (Join Udara buttons). */
export const whatsappJoinUrl = `https://wa.me/${siteConfig.whatsappJoinNumber}?text=${encodeURIComponent(siteConfig.whatsappJoinMessage)}`;

export const supportWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}`;
