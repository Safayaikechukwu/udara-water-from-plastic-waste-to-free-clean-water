import { whatsappIntentUrl, supportWhatsAppUrl } from "@/lib/site";

export const copy = {
  brand: "Udara",
  tagline: "We turn plastic waste into free clean water.",

  hero: {
    line1: "From plastic waste",
    line2: "to free clean water.",
    subtext:
      "Udara converts plastic waste to free clean drinking water across Africa, powered by sponsors, with 10% of profits going to the construction of water hubs in communities.",
    cta: "Sponsor a batch",
    ctaHref: whatsappIntentUrl(
      "Hi, I pressed Sponsor a batch. I want to sponsor a batch of Udara water.",
    ),
  },

  nav: {
    /** Desktop text links + mobile list links - hrefs match real section ids */
    links: [
      { label: "How Udara Works", href: "#how-it-works" },
      { label: "Work with us", href: "#work-with-udara" },
      { label: "Impact", href: "#impact" },
      { label: "Testimonials", href: "#reviews" },
      { label: "FAQ", href: "#faq" },
    ],
    /** Primary CTA - opens WhatsApp with a pre-filled join message */
    joinHref: whatsappIntentUrl(
      "Hi, I pressed Sponsor a batch. I want to sponsor a batch of Udara water.",
    ),
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },

  joinPrompt: {
    title: "Your money is leaking tonight.",
    body: "Late-night transfers, food runs, and “just this once” add up fast. Udara locks the door at 7PM and helps you keep what you meant to save.",
    primary: "Join Udara",
    secondary: "Not now",
  },

  trust: [
    { icon: "whatsapp", text: "Lives on WhatsApp. No new app" },
    { icon: "lock", text: "Hard lock from 7PM to morning" },
    { icon: "bank", text: "Powered by Rubies Microfinance Bank" },
    { icon: "naira", text: "Built for Nigerian money habits" },
    { icon: "shield", text: "Strict savings, not soft reminders" },
    { icon: "target", text: "Made for salary leaks and SAPA" },
  ],

  /** Notion-style logo wall under the hero CTA */
  scienceProof: {
    line: "Backed by science",
    labs: [
      { name: "Stanford", mark: "stanford" },
      { name: "MIT", mark: "mit" },
      { name: "Chicago Booth", mark: "booth" },
      { name: "LSE", mark: "lse" },
      { name: "Yale", mark: "yale" },
      { name: "Harvard", mark: "harvard" },
      { name: "UCL", mark: "ucl" },
      { name: "Oxford", mark: "oxford" },
    ],
  },

  whyItWorks: {
    title: "Why It Works",
    lead: "Two problems. One big opportunity.",
    body: "Every day millions of Nigerians drink packaged water with questionable production hygiene.",
    body2:
      "At the same time, millions of plastic packagings are discarded in gutters, adding to Africa's growing waste problem.",
    question: "What if we connected the two?",
    contrast:
      "Udara creates a network where brands sponsor clean drinking water, plastic is recovered and recycled, and people get clean water for free.",
    closer: "Less waste. More water. More opportunity.",
  },

  /** Research-backed pillars - real authors, real papers */
  scienceBehind: {
    eyebrow: "The science behind Udara",
    headline: "ADHD brains don’t fail at money. They fail at remembering to protect it.",
    support:
      "Udara is built around what research already shows: impulse, delay aversion, and weak follow-through beat willpower, so the system has to sit where your habits already live.",
    pillars: [
      {
        label: "01",
        title: "Impulse isn’t a character flaw",
        body: "Adults with ADHD are more likely to buy on impulse, struggle to save, and make weaker “future-facing” money decisions, even when they care about money. That’s what standardized financial decision-making studies keep finding.",
        udara:
          "Udara surfaces spends in plain language on WhatsApp, so “I thought I had money” stops hiding in your balance.",
        linkLabel: "Bangma et al., Neuropsychology",
        href: "https://doi.org/10.1037/neu0000571",
        secondaryLinkLabel: "PLOS ONE community sample",
        secondaryHref:
          "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0239343",
      },
      {
        label: "02",
        title: "Future-you needs a lock",
        body: "Present bias makes “just this once” feel cheaper than tomorrow’s goal. Behavioral economists show people will voluntarily precommit, and that those constraints help when willpower fails.",
        udara:
          "The 7PM hard lock is that precommitment: you decide while calm; the system holds you when impulse is loudest.",
        linkLabel: "Ariely & Wertenbroch on self-imposed deadlines",
        href: "https://doi.org/10.1111/1467-9280.00441",
        secondaryLinkLabel: "Laibson on hyperbolic discounting",
        secondaryHref: "https://doi.org/10.1162/003355397555253",
      },
      {
        label: "03",
        title: "Presence beats lonely willpower",
        body: "Body doubling (doing hard tasks with another presence nearby) is widely used in ADHD communities. Early accessibility research is starting to study it for real: safe, promising for some ADHD adults, still early as hard science.",
        udara:
          "Udara acts like a money body double on WhatsApp: always there for the night window, without a new app to remember.",
        linkLabel: "ACM ASSETS body-doubling EEG study",
        href: "https://dl.acm.org/doi/10.1145/3663547.3759743",
        secondaryLinkLabel: "Neurodivergent body-doubling survey (PDF)",
        secondaryHref: "https://leyabreanna.com/papers/body_double_taccess.pdf",
      },
      {
        label: "04",
        title: "Savings collapse without systems",
        body: "Long ADHD outcome work linked to Barkley and colleagues tracks weaker saving, more financial dependence, and the “ADHD tax” of late fees and forgotten bills: executive function gaps, not laziness.",
        udara:
          "WhatsApp is the external scaffold: locks, clarity, and accountability happen where your habits already live.",
        linkLabel: "Altszuler et al. on financial dependence",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4887412/",
        secondaryLinkLabel: "ADHD money tips (Tuckman / CHADD context)",
        secondaryHref:
          "https://www.healthcentral.com/condition/adhd/money-managing-tips-when-you-live-with-adhd",
      },
    ],
    disclaimer:
      "Udara is not medical treatment. Research informs product design. We map mechanisms (impulse control, precommitment, external scaffolding, accountability), not cures.",
  },

  workWithUdara: {
    headline: "How can you work with Udara?",
    cards: [
      {
        label: "Host us",
        title: "Bring Udara to",
        titleLine2: "your people.",
        cta: "Host",
        photo: "/work-with/host.jpg",
        photoAlt: "A professional venue ready to host people",
        href: whatsappIntentUrl(
          "Hi, I pressed Host. I want to host Udara at my venue or event.",
        ),
      },
      {
        label: "Sponsor us",
        title: "Put your brand",
        titleLine2: "in their hands.",
        cta: "Sponsor",
        photo: "/work-with/sponsor.png",
        photoAlt: "Branded Udara water bottles with sponsor labels in people's hands",
        href: whatsappIntentUrl(
          "Hi, I pressed Sponsor. I want to sponsor a batch of Udara water.",
        ),
      },
    ],
  },

  impact: {
    headline: "ROI that actually",
    headlineLine2: "makes sense.",
    cta: "Sponsor a batch",
    ctaHref: whatsappIntentUrl(
      "Hi, I pressed Sponsor a batch. I want to sponsor a batch of Udara water.",
    ),
    inHand: {
      title: "30+ min in hand",
      body: "The bottle stays with them.",
    },
    recall: {
      title: "90% ad recall",
      body: "The brand stays in their head.",
    },
    vibe: {
      title: "100% positive vibe",
      body: "Water, not an interruption.",
    },
    photo: {
      src: "/impact/bottle.png",
      alt: "Sponsored Udara bottle with a Chowdeck label.",
    },
    openRate: {
      title: "100% open rate",
      body: "If they drink it, they see it.",
    },
    impressions: {
      title: "10× more impressions",
      body: "One bottle, many looks.",
    },
    roi: {
      title: "29% ROI",
      body: "Return on every batch.",
    },
    scan: {
      title: "1-3% scan rate",
      body: "QR codes people actually use.",
    },
    carbon: {
      title: "79% less CO₂e",
      body: "Recycled plastic, not virgin.",
    },
    children: {
      title: "70k+ children/year",
      body: "Water reaching kids, every year.",
    },
  },

  water: {
    eyebrow: "How clean is Udara water?",
    headline: "Clean water starts",
    headlineLine2: "with us.",
    lead: "We bottle licensed, NAFDAC-approved drinking water that meets the required standards for safety.",
    cards: [
      {
        icon: "water",
        title: "We bottle licensed water.",
        body: "The water we bottle is registered and licensed, with the required NAFDAC approvals and regulatory certifications for drinking water.",
        cta: "Sponsor a batch",
        href: whatsappIntentUrl(
          "Hi, I pressed Sponsor a batch. I want to sponsor a batch of Udara water.",
        ),
      },
      {
        icon: "registered",
        title: "Udara is registered.",
        body: "Udara is a formally registered Nigerian company, operating with the appropriate business and regulatory requirements. Registered with the Corporate Affairs Commission (CAC).",
        cta: "Learn More About Udara →",
        href: "/about",
      },
      {
        icon: "recycle",
        title: "Responsible recycling.",
        body: "The journey doesn’t end when the water is finished. We collect and recover plastic bottles so they can be processed and returned to the recycling chain instead of becoming waste.",
        cta: "See Our Recycling Process →",
        href: "#how-it-works",
        steps: ["Drink", "Collect", "Recycle", "Reuse"],
        closer: "Better water access. Better waste management.",
      },
    ],
  },

  howItWorks: {
    eyebrow: "How Udara Works",
    headline: "The Udara Cycle",
    headlineLine2: "from plastic to free water.",
    steps: [
      {
        n: "01",
        title: "Recover.",
        body: "We recover plastic that would otherwise become waste.",
        icon: "recover",
      },
      {
        n: "02",
        title: "Bottle.",
        body: "We bottle clean and safe drinking water.",
        icon: "bottle",
      },
      {
        n: "03",
        title: "Sponsor.",
        body: "Brands sponsor the water and put their message in people’s hands.",
        icon: "sponsor",
      },
      {
        n: "04",
        title: "Distribute.",
        body: "Free water at events, campuses, churches, workplaces and communities.",
        icon: "distribute",
      },
      {
        n: "05",
        title: "Reward.",
        body: "Each month one drinker gets a surprise: extra water, a frame, or rent.",
        icon: "reward",
      },
      {
        n: "06",
        title: "Give back.",
        body: "10% of profits funds water and wifi hubs across Africa.",
        icon: "giveback",
      },
    ],
  },

  faq: {
    headline: "FAQ",
    blurb:
      "Clear answers about Udara, how plastic becomes free clean water, how brands sponsor batches, and how you can host, donate, or join the network.",
    contactLabel: "Still have questions?",
    phone: "+234 707 706 9738",
    phoneNote: "WhatsApp support · Mon-Fri, 9AM-6PM WAT",
    items: [
      {
        question: "What is Udara?",
        answer:
          "Udara turns plastic waste into free clean drinking water across Africa. Brands sponsor the water, people drink it for free, plastic is recovered and recycled, and 10% of profits supports water and wifi hubs in communities.",
      },
      {
        question: "Is the water really free?",
        answer:
          "Yes. People do not pay at the point of drinking. Brands sponsor each batch and put their message directly in people’s hands, so the water can be given away at events, campuses, churches, workplaces, gyms and public spaces.",
      },
      {
        question: "How does the Udara Cycle work?",
        answer:
          "We recover plastic, bottle clean water, let brands sponsor the batch, distribute it where people already gather, reward drinkers, and give 10% of profits back to water and wifi hubs.",
      },
      {
        question: "How clean is Udara water?",
        answer:
          "We bottle licensed, NAFDAC-approved drinking water that meets the required standards for safety.",
      },
      {
        question: "Is Udara a registered company?",
        answer:
          "Yes. Udara is a formally registered Nigerian company with the Corporate Affairs Commission (CAC), operating with the appropriate business and regulatory requirements.",
      },
      {
        question: "How can I work with Udara?",
        answer:
          "You can host Udara at a venue, event, campus, workplace, church, gym or community; sponsor a batch of water; help us distribute; donate funds; or give large batches of plastic bottles for recycling. Message us on WhatsApp to start.",
      },
      {
        question: "What happens to the plastic bottles?",
        answer:
          "The journey does not end when the water is finished. We collect and recover bottles so they can be processed and returned to the recycling chain instead of becoming waste: drink, collect, recycle, reuse.",
      },
      {
        question: "Where does 10% of profits go?",
        answer:
          "10% of Udara’s profits supports construction of water and wifi hubs in African communities, and the Udara Inclusive Livelihoods Fund helps Nigerians with disabilities build sustainable livelihoods.",
      },
    ],
  },

  instantBlock: {
    eyebrow: "For investors",
    headline: "Invest in the future of free, clean water.",
    body: "Udara turns plastic waste into sponsored drinking water across Africa. People drink for free, bottles come back to recycling, and 10% of profits builds water hubs in communities. Back the network that makes that future scale.",
    cta: "Invest in Udara",
    ctaHref: whatsappIntentUrl(
      "Hi, I pressed Invest in Udara. I want to invest in the future of free, clean water.",
    ),
  },

  security: {
    headline: "How clean is",
    headlineLine2: "Udara water.",
    subhead:
      "We bottle licensed drinking water that meets the standard for safety.",
    cta: "Sponsor a batch",
    ctaHref: whatsappIntentUrl(
      "Hi, I pressed Sponsor a batch. I want to sponsor a batch of Udara water.",
    ),
    cards: [
      {
        title: "We bottle licensed water",
        body: "We bottle licensed water, with NAFDAC approvals for drinking water.",
        icon: "drop" as const,
      },
      {
        title: "Udara is registered",
        body: "Udara is CAC-registered, a formal Nigerian company.",
        icon: "registered" as const,
      },
      {
        title: "Responsible recycling",
        body: "We collect empty bottles and return them to recycling.",
        icon: "recycle" as const,
      },
    ],
  },

  closing: {
    headline: "Stop Negotiating with Your Financial Security",
    subtext:
      "Udara already knows what you want. Let it help you actually get there.",
    cta: "Join Udara",
  },

  footer: {
    brandLine: "From plastic waste to free table water.",
    brandCloser: "Free water. Less waste. More opportunity.",
    work: [
      { label: "Host Udara", href: whatsappIntentUrl("Hi, I pressed Host Udara. I want to host Udara at my venue or event.") },
      { label: "Sponsor Udara", href: whatsappIntentUrl("Hi, I pressed Sponsor Udara. I want to sponsor a batch of Udara water.") },
      { label: "Join the network", href: whatsappIntentUrl("Hi, I pressed Join the network. I want to work with Udara.") },
    ],
    support: [
      { label: "Donate", href: whatsappIntentUrl("Hi, I pressed Donate. I want to donate funds or support Udara.") },
      {
        label: "Give Plastic",
        href: whatsappIntentUrl("Hi, I pressed Give Plastic. I want to donate plastic bottles for recycling."),
      },
      { label: "Our Impact", href: "/#impact" },
    ],
    explore: [
      { label: "How Udara Works", href: "/#how-it-works" },
      { label: "Udara Impact", href: "/#impact" },
      { label: "Testimonials", href: "/#reviews" },
    ],
    contact: [
      { label: "WhatsApp", href: supportWhatsAppUrl },
      { label: "Email", href: "mailto:safayasamuelsikechukwu@gmail.com" },
      { label: "Instagram", href: "https://www.instagram.com/useudara" },
    ],
    product: [
      { label: "How Udara Works", href: "/#how-it-works" },
      { label: "Testimonials", href: "/#reviews" },
      { label: "Security", href: "/#water" },
      { label: "Science", href: "/science" },
      { label: "FAQ", href: "/#faq" },
      { label: "About", href: "/about" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Science", href: "/science" },
      { label: "Contact", href: "/#faq" },
    ],
    legal: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
    newsletter: {
      title: "Get early access updates",
      blurb: "Drop your email. We’ll tell you when Udara opens, and how to join first.",
      placeholder: "Enter your email",
      cta: "Subscribe",
      success: "You're on the list. We’ll be in touch.",
      error: "Please enter a valid email.",
    },
    social: [
      { label: "X", href: "https://x.com/useudara", icon: "x" },
      { label: "TikTok", href: "https://www.tiktok.com/@udarahq", icon: "tiktok" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/udara-tech/", icon: "linkedin" },
    ],
    poweredBy: "Registered with the Corporate Affairs Commission (CAC).",
    copyright: "© 2026 Udara. A Udara Technologies product.",
  },

  whatsappMock: {
    blockMessage: "It's 7:42PM. Transfers reopen at 6AM.",
  },
} as const;
