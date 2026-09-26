/** Canonical site URL for metadata, sitemap, and structured data. */
export const siteConfig = {
  name: "Udara",
  legalName: "Udara Technologies",
  legalEntity: "Udara Global Limited",
  tagline: "From plastic waste to free clean water",
  description:
    "Udara turns plastic waste into free clean drinking water across Africa. Brands sponsor batches, people drink for free, bottles return to recycling, and 10% of profits builds water hubs in communities.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.useudara.com",
  locale: "en_NG",
  twitterHandle: "@useudara",
  /** E.164 without + - support line */
  whatsappNumber: "2347077069738",
  /** E.164 without + - Join Udara CTA opens this line */
  whatsappJoinNumber: "2349066842645",
  whatsappJoinMessage: "HI UDARA",
  supportPhoneDisplay: "+234 707 706 9738",
  supportHours: "Mon-Fri, 9AM-6PM WAT",
  bank: "Rubies Microfinance Bank",
  ndpcRegistration: "NDPC/DCP/11710",
  address: {
    streetAddress: "25 Herbert Macaulay Way",
    addressLocality: "Yaba",
    addressRegion: "Lagos State",
    addressCountry: "NG",
  },
  sameAs: [
    "https://x.com/useudara",
    "https://vt.tiktok.com/ZSbdo29QB/",
    "https://www.linkedin.com/company/udara-tech/",
  ],
  /**
   * Hero browser video. Paste any YouTube watch / youtu.be / shorts / embed URL.
   * Override with NEXT_PUBLIC_HERO_YOUTUBE_URL.
   */
  heroYoutubeUrl:
    process.env.NEXT_PUBLIC_HERO_YOUTUBE_URL ??
    "https://youtu.be/uc3Fx9VqaZM",
  brand: {
    black: "#1C1B17",
    yellow: "#E4F222",
    white: "#F4F4F4",
  },
} as const;

/** Opens WhatsApp to 07077069738 with a pre-filled message. */
export function whatsappIntentUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappJoinUrl = whatsappIntentUrl(
  "Hi, I pressed Join Udara. I want to get started with Udara.",
);

export const supportWhatsAppUrl = whatsappIntentUrl(
  "Hi, I pressed WhatsApp. I want to contact Udara.",
);
