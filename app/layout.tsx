import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/JsonLd";
import { PwaRegister } from "@/components/PwaRegister";
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e4f222" },
    { media: "(prefers-color-scheme: dark)", color: "#e4f222" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Udara | From plastic waste to free clean water",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  appleWebApp: {
    capable: true,
    title: "Udara",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  keywords: [
    "Udara",
    "free clean water",
    "plastic waste",
    "sponsored water",
    "recycling Africa",
    "water hubs",
    "Udara Technologies",
    "NAFDAC",
    "sponsor a batch",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Udara | From plastic waste to free clean water",
    description: siteConfig.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Udara | From plastic waste to free clean water",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Udara | From plastic waste to free clean water",
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
      { url: "/favicon.ico?v=8", sizes: "48x48" },
      { url: "/favicon-32.png?v=8", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png?v=8", type: "image/png", sizes: "192x192" },
      { url: "/udara-mark.png?v=8", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png?v=8", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=8",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
  category: "environment",
};

/**
 * Boot script: scroll-to-top on refresh, mobile Join CTA reveal,
 * and in-page nav scrolling (menu + desktop links). Inlined early so
 * it never depends on React hydration / stale HMR bundles.
 */
const bootScript = `
(function () {
  try {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then(function (regs) {
        var had = regs && regs.length > 0;
        Promise.all((regs || []).map(function (reg) { return reg.unregister(); })).then(function () {
          var finish = function () {
            if (!had) return;
            try {
              if (sessionStorage.getItem("udara-sw-cleared")) return;
              sessionStorage.setItem("udara-sw-cleared", "1");
              location.reload();
            } catch (e2) {}
          };
          if ("caches" in window) {
            caches.keys().then(function (keys) {
              return Promise.all(keys.map(function (k) { return caches.delete(k); }));
            }).then(finish, finish);
          } else {
            finish();
          }
        });
      });
    }
  } catch (e0) {}

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
    window.scrollTo(0, Math.max(0, top));
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
    // Subpages (e.g. /privacy): section lives on home - navigate there.
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

  function bindPageHashes() {
    if (window.__udaraHashBound) return;
    window.__udaraHashBound = true;
    document.addEventListener(
      "click",
      function (event) {
        var link =
          event.target && event.target.closest
            ? event.target.closest("a[href]")
            : null;
        if (!link) return;
        var href = link.getAttribute("href") || "";
        if (href.indexOf("#") === -1) return;
        if (/^https?:\\/\\//i.test(href) && href.indexOf(location.origin) !== 0) {
          return;
        }
        if (!goToHash(href)) return;
        event.preventDefault();
        var details = document.querySelector("details.nav-mobile-menu");
        if (details && details.contains(link)) closeMenu(details);
        updateCta();
      },
      true
    );
  }

  function bootNav() {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
      el.classList.remove("reveal--armed");
    });
    document.querySelectorAll(".instant-block").forEach(function (el) {
      el.classList.remove("instant-block--armed");
    });
    updateCta();
    bindMenu();
    bindPageHashes();
    window.addEventListener("scroll", updateCta, { passive: true });
    window.addEventListener("resize", updateCta);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootNav);
  } else {
    bootNav();
  }
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
      <body className="flex min-h-full flex-col bg-bg font-sans text-ink select-text">
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
        <PwaRegister />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
