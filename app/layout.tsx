import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#4a0508",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Udara | Strict savings on WhatsApp",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  keywords: [
    "Udara",
    "WhatsApp savings",
    "strict savings",
    "AI savings agent",
    "Nigeria fintech",
    "Rubies Microfinance Bank",
    "Udara Technologies",
    "money lock",
    "NDPC",
    "financial discipline",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Udara | Strict savings on WhatsApp",
    description: siteConfig.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Udara | Strict savings on WhatsApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Udara | Strict savings on WhatsApp",
    description: siteConfig.description,
    images: ["/og.png"],
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "48x48" },
      { url: "/favicon-32.png?v=3", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png?v=3", type: "image/png", sizes: "192x192" },
      { url: "/udara-mark.png?v=3", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png?v=3", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico?v=3",
  },
  category: "finance",
};

/**
 * Boot script: scroll-to-top on refresh, mobile Join CTA reveal,
 * and in-page nav scrolling (menu + desktop links). Inlined early so
 * it never depends on React hydration / stale HMR bundles.
 */
const bootScript = `
(function () {
  try {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  } catch (e) {}

  function toTop() {
    window.scrollTo(0, 0);
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }

  function isReload() {
    try {
      var entry = performance.getEntriesByType("navigation")[0];
      if (entry) return entry.type === "reload";
    } catch (e) {}
    try {
      return performance.navigation && performance.navigation.type === 1;
    } catch (e2) {}
    return false;
  }

  if (isReload()) {
    if (location.hash) {
      try {
        history.replaceState(null, "", location.pathname + location.search);
      } catch (e) {}
    }
    toTop();
    document.addEventListener("DOMContentLoaded", toTop);
    window.addEventListener("load", toTop);
  } else if (!location.hash) {
    toTop();
  }

  function updateCta() {
    var hero = document.getElementById("hero-cta");
    if (!hero) return;
    document.documentElement.classList.toggle(
      "past-hero-cta",
      hero.getBoundingClientRect().bottom < 80
    );
  }

  function unlockScroll() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  function closeMenu(details) {
    if (details) details.open = false;
    unlockScroll();
  }

  function scrollToId(id) {
    var target = document.getElementById(id);
    if (!target) return false;
    var top = target.getBoundingClientRect().top + window.pageYOffset - 72;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    try {
      history.replaceState(null, "", location.pathname + location.search);
    } catch (e) {}
    return true;
  }

  function goToHash(href) {
    if (!href) return false;
    var hashIndex = href.indexOf("#");
    if (hashIndex === -1) return false;
    var id = href.slice(hashIndex + 1);
    if (!id) return false;
    if (/^https?:\\/\\//i.test(href) && href.indexOf(location.origin) !== 0) {
      return false;
    }
    if (scrollToId(id)) return true;
    // Subpages (e.g. /privacy): section lives on home — navigate there.
    if (location.pathname !== "/") {
      window.location.assign("/#" + id);
      return true;
    }
    return false;
  }

  // Never set data-* on React-managed nodes before hydration: that
  // causes attribute mismatches. Track binding on window instead.
  function bindMenu() {
    if (window.__udaraMenuBound) return;
    var details = document.querySelector("details.nav-mobile-menu");
    if (!details) return;
    window.__udaraMenuBound = true;

    details.addEventListener("toggle", function () {
      if (details.open) {
        document.body.style.overflow = "hidden";
      } else {
        unlockScroll();
      }
    });

    details.addEventListener(
      "click",
      function (event) {
        var link =
          event.target && event.target.closest
            ? event.target.closest("a[href]")
            : null;
        if (!link || !details.contains(link)) return;

        var href = link.getAttribute("href") || "";

        if (/^https?:\\/\\//i.test(href)) {
          closeMenu(details);
          return;
        }

        if (href.indexOf("#") !== -1) {
          event.preventDefault();
          event.stopPropagation();
          closeMenu(details);
          window.setTimeout(function () {
            goToHash(href);
            updateCta();
          }, 50);
        }
      },
      true
    );
  }

  function bindDesktopNav() {
    if (window.__udaraHeaderBound) return;
    var header = document.querySelector("header");
    if (!header) return;
    window.__udaraHeaderBound = true;

    header.addEventListener("click", function (event) {
      var link =
        event.target && event.target.closest
          ? event.target.closest("a[href]")
          : null;
      if (!link || !header.contains(link)) return;
      var href = link.getAttribute("href") || "";
      if (href.indexOf("#") === -1) return;
      if (/^https?:\\/\\//i.test(href)) return;
      event.preventDefault();
      goToHash(href);
      updateCta();
    });
  }

  function bootNav() {
    updateCta();
    bindMenu();
    bindDesktopNav();
    window.addEventListener("scroll", updateCta, { passive: true });
    window.addEventListener("resize", updateCta);
  }

  // Run after React hydration so class/attr mutations don't mismatch SSR HTML.
  function afterHydration(fn) {
    function run() {
      window.setTimeout(fn, 0);
    }
    if (document.readyState === "complete") run();
    else window.addEventListener("load", run);
  }

  afterHydration(bootNav);
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-bg font-sans text-ink">
        <Script id="udara-boot" strategy="beforeInteractive">
          {bootScript}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RGD2GPEVRR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RGD2GPEVRR');
          `}
        </Script>
        <JsonLd />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
