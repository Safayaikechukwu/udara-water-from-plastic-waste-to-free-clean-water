export const copy = {
  brand: "Kedu",
  tagline: "Your strict savings partner, on WhatsApp.",

  hero: {
    line1Prefix: "End",
    line2: "with a strict partner.",
    rotatingWords: [
      { text: "overspending", bg: "#fdecec", dot: "#e03e3e" },
      { text: "SAPA", bg: "#e8f8f0", dot: "#0f7b6c" },
      { text: "overeating", bg: "#fbf3db", dot: "#cb912f" },
      { text: "money leaks", bg: "#eadffb", dot: "#6940a5" },
      { text: "cravings", bg: "#e8f0fe", dot: "#3171f6" },
    ],
    subtext:
      "Kedu is an AI agent that makes sense of your finances, locks funds, and grows your money through smart savings, strict financial habits, and financial education.",
    cta: "Join Kedu",
  },

  nav: {
    /** Desktop text links + mobile list links — hrefs match real section ids */
    links: [
      { label: "Features", href: "#how-kedu-helps" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Reviews", href: "#reviews" },
      { label: "Security", href: "#security" },
      { label: "FAQ", href: "#faq" },
    ],
    /** Mobile featured cards — Notion Product mega-menu style (art on top) */
    featured: [
      {
        label: "Testimonials",
        blurb: "Hear how people stay disciplined with Kedu.",
        href: "#reviews",
        tone: "blue" as const,
      },
      {
        label: "Learn",
        blurb: "Short money videos on TikTok.",
        href: "https://www.tiktok.com/@kedu",
        tone: "coral" as const,
        external: true,
      },
      {
        label: "The science behind Kedu",
        blurb: "Research that shaped how Kedu locks and saves.",
        href: "#science",
        tone: "gold" as const,
      },
    ],
    /** Primary CTA — closing section has the join action on-page */
    joinHref: "#closing",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },

  joinPrompt: {
    title: "Your money is leaking tonight.",
    body: "Late-night transfers, food runs, and “just this once” add up fast. Kedu locks the door at 7PM and helps you keep what you meant to save.",
    primary: "Join Kedu",
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
    lead: "Financial discipline doesn't come from willpower. It comes from systems.",
    body: "You've tried budgeting apps, Excel trackers, and savings apps. But after seven days, you forget to open the tracker. Before you know it, you've spent more than you can even remember.",
    contrast:
      "Kedu is the opposite. It lives on WhatsApp, locks funds, and holds you accountable so you can reach your goals.",
    closer:
      "Saving isn't something you remember to do. It's something the system helps you do.",
  },

  howKeduHelps: {
    headline: "Money where your habits live.",
    cards: [
      {
        label: "See the truth",
        title: "Know where every naira actually goes.",
        body: "Kedu breaks down your spends in plain language, so food, transfers, and noise stop hiding in your balance.",
        // Swap later: put a file in /public/mockups and set e.g. "/mockups/truth.png"
        mockup: "",
        mockupAlt: "Kedu spend breakdown on WhatsApp",
      },
      {
        label: "Hard time-lock",
        title: "Block transfers from 7PM to morning.",
        body: "When impulse is loudest, Kedu closes the door. No override. No “just this once.” Funds reopen in the morning.",
        mockup: "",
        mockupAlt: "Kedu 7PM transfer lock on WhatsApp",
      },
      {
        label: "Stay accountable",
        title: "Track every spend as it happens.",
        body: "Every transfer gets caught in the chat. You always know what you spent today, and what’s left before 7PM.",
        mockup: "",
        mockupAlt: "Kedu live spend tracking on WhatsApp",
      },
      {
        label: "Save while you spend",
        title: "Grow your goal with every transfer out.",
        body: "Each spend can tuck a little away automatically, so saving happens in the same moment as spending.",
        mockup: "",
        mockupAlt: "Kedu save-while-you-spend on WhatsApp",
      },
    ],
  },

  howItWorks: {
    headline: "How it works",
    steps: [
      { title: "Say hello on WhatsApp", icon: "chat" },
      { title: "Set your savings goal", icon: "goal" },
      { title: "Move your money in", icon: "fund" },
      { title: "Live with the 7PM lock", icon: "lock" },
      { title: "Watch the goal get closer", icon: "progress" },
    ],
  },

  faq: {
    headline: "FAQ",
    blurb:
      "Clear answers about Kedu, the WhatsApp savings agent from Udara Technologies, how the hard lock works, and how your money stays protected with Rubies Microfinance Bank.",
    contactLabel: "Still have questions?",
    phone: "+234 900 000 0000",
    phoneNote: "WhatsApp support · Mon-Fri, 9AM-6PM WAT",
    items: [
      {
        question: "What is Kedu?",
        answer:
          "Kedu is a strict savings AI agent built by Udara Technologies that runs entirely on WhatsApp in Nigeria. It helps you understand spending, hard-locks outbound transfers when you are most likely to overspend, and keeps you accountable to savings goals. You do not need a separate banking app to talk to Kedu.",
      },
      {
        question: "How does the 7PM lock work?",
        answer:
          "Kedu's hard lock blocks outbound transfers from 7PM until morning. You can still check balances and chat with Kedu during that window. The goal is to stop late-night impulse transfers, food runs, and \"just this once\" spending when willpower is weakest.",
      },
      {
        question: "Do I need to download another app?",
        answer:
          "No. Kedu is a WhatsApp savings agent, so there is nothing new to install, remember, or abandon after a week. If you already use WhatsApp, you already have the surface Kedu lives on.",
      },
      {
        question: "Is my money safe with Kedu?",
        answer:
          "Yes. Customer funds are held with Rubies Microfinance Bank. Kedu is the discipline and accountability layer on top of that banking relationship, not a place where money disappears into a black box. Kedu also supports WhatsApp privacy features and NDPC-aligned data protection practices.",
      },
      {
        question: "Who is Kedu for?",
        answer:
          "Kedu is for people in Nigeria who know they should save but keep negotiating with themselves: ADHD spenders, emotional spenders, salary burners, and anyone tired of budgeting apps they forget to open. If WhatsApp is already where your habits live, Kedu meets you there.",
      },
      {
        question: "What if I lose my phone?",
        answer:
          "You can freeze your Kedu account instantly from the Block Account page on this site, using your WhatsApp phone number and PIN, from any WhatsApp-capable device. Kedu pauses payment activity and guides you through recovery before you unblock.",
      },
      {
        question: "How do I join Kedu?",
        answer:
          "Tap Join Kedu on this site, start a WhatsApp chat with Kedu, complete a short setup, set a savings goal, and move money in. After that, Kedu handles the hard lock and accountability so you do not have to rely on willpower alone.",
      },
      {
        question: "Is Kedu an app or a bank?",
        answer:
          "Kedu is not a standalone mobile app store download. It is a WhatsApp-based savings agent. Banking services and fund holding are provided through Rubies Microfinance Bank, while Udara Technologies builds the Kedu product experience.",
      },
    ],
  },

  instantBlock: {
    eyebrow: "INSTANT BLOCK",
    headline: "Lost Your Phone? Secure Your Accounts Instantly",
    body: "If your device is stolen or compromised, don't worry you can freeze your Kedu account right from any WhatsApp device. We'll pause all payment activity and guide you through recovery.",
    secondary: "Unblock Account",
    primary: "Block Account Now",
  },

  security: {
    headline: "Banking-grade security",
    subhead:
      "WhatsApp encryption, NDPC certification, and device-level locks so your money and chats stay yours.",
    cards: [
      {
        title: "Passcode for Every Payment",
        body: "Every payment through Kedu is protected by a PIN you create during setup. You're in control: set custom limits for when your passcode is required.",
        tone: "coral" as const,
      },
      {
        title: "NDPC-Certified & Private Chat Security",
        body: "Kedu is certified by the Nigeria Data Protection Commission (NDPC), ensuring world-class security standards. Secure your Kedu chat by hiding it in a locked folder that only you can access using your phone's password or biometric ID.",
        tone: "blue" as const,
      },
      {
        title: "Biometric Login for Extra Safety",
        body: "Your Kedu activity is protected by your phone's unlock. Want even more privacy? Lock individual conversations with a single tap.",
        tone: "gold" as const,
      },
    ],
  },

  closing: {
    headline: "Stop Negotiating with Your Financial Security",
    subtext:
      "Kedu already knows what you want. Let it help you actually get there.",
    cta: "Join Kedu",
  },

  footer: {
    brandLine: "Kedu. Your strict savings partner, on WhatsApp.",
    product: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Reviews", href: "/#reviews" },
      { label: "Security", href: "/#security" },
      { label: "FAQ", href: "/#faq" },
      { label: "About", href: "/#about-kedu" },
    ],
    company: [
      { label: "About", href: "/#about-kedu" },
      { label: "Contact", href: "/#faq" },
    ],
    legal: [
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
    ],
    newsletter: {
      title: "Get early access updates",
      blurb: "Drop your email. We’ll tell you when Kedu opens, and how to join first.",
      placeholder: "Enter your email",
      cta: "Subscribe",
      success: "You're on the list. We’ll be in touch.",
      error: "Please enter a valid email.",
    },
    social: [
      { label: "Instagram", href: "#", icon: "instagram" },
      { label: "X", href: "#", icon: "x" },
      { label: "LinkedIn", href: "#", icon: "linkedin" },
      { label: "YouTube", href: "#", icon: "youtube" },
      { label: "Facebook", href: "#", icon: "facebook" },
    ],
    poweredBy: "Powered by Rubies Microfinance Bank.",
    copyright: "© 2026 Kedu. A Udara Technologies product.",
  },

  whatsappMock: {
    blockMessage: "It's 7:42PM. Transfers reopen at 6AM.",
  },
} as const;
