import { copy } from "@/lib/copy";
import { Logo } from "@/components/ui/Logo";

function HamburgerIcon() {
  return (
    <span className="relative block h-[14px] w-[18px]" aria-hidden="true">
      <span className="absolute left-0 top-0 h-[1.5px] w-full rounded-full bg-ink" />
      <span className="absolute left-0 top-[6.25px] h-[1.5px] w-full rounded-full bg-ink" />
      <span className="absolute left-0 top-[12.5px] h-[1.5px] w-full rounded-full bg-ink" />
    </span>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M3 3l12 12M15 3 3 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Notion-style card art — sits above the title inside each featured tile */
function FeaturedArt({ tone }: { tone: "blue" | "coral" | "gold" }) {
  if (tone === "coral") {
    return (
      <svg viewBox="0 0 120 96" className="h-full w-full" aria-hidden="true">
        <rect x="28" y="18" width="52" height="62" rx="10" fill="#fff" />
        <rect x="38" y="28" width="28" height="4" rx="2" fill="#f5c4c4" />
        <rect x="38" y="38" width="36" height="4" rx="2" fill="#f5c4c4" />
        <rect x="38" y="48" width="22" height="4" rx="2" fill="#f5c4c4" />
        <circle cx="86" cy="30" r="16" fill="#f7d070" />
        <path
          d="M80 30h12M86 24v12"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (tone === "gold") {
    return (
      <svg viewBox="0 0 120 96" className="h-full w-full" aria-hidden="true">
        <rect x="30" y="16" width="48" height="58" rx="12" fill="#fff" />
        <circle cx="54" cy="40" r="14" fill="none" stroke="#cb912f" strokeWidth="3" />
        <ellipse
          cx="54"
          cy="40"
          rx="22"
          ry="8"
          fill="none"
          stroke="#cb912f"
          strokeWidth="2.5"
          transform="rotate(-32 54 40)"
        />
        <circle cx="54" cy="40" r="3.5" fill="#cb912f" />
        <circle cx="82" cy="26" r="14" fill="#f7d070" />
        <path
          d="M82 20v12M76 26h12"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 96" className="h-full w-full" aria-hidden="true">
      <rect x="22" y="20" width="58" height="52" rx="12" fill="#fff" />
      <circle cx="42" cy="40" r="8" fill="#4a0508" />
      <circle cx="62" cy="40" r="8" fill="#8eb4ff" />
      <path
        d="M32 58c6-8 20-8 28 0"
        stroke="#0d0d0d"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="88" cy="28" r="16" fill="#4a0508" />
      <path
        d="M88 22v12M82 28h12"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const featuredToneClass = {
  blue: "bg-[#f6eaea]",
  coral: "bg-[#fdecec]",
  gold: "bg-[#fbf3db]",
} as const;

/**
 * Server-rendered native <details> menu.
 * Featured tiles match Notion Product mega-menu: 3-up, art on top.
 * Behavior (open/scroll/CTA) lives in app/layout.tsx boot script.
 */
export function NavMobileMenu() {
  return (
      <details className="nav-mobile-menu fixed right-3 top-2 z-[10002] md:hidden">
        <summary
          className="nav-mobile-menu__summary flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-[6px] bg-white text-ink shadow-sm [-webkit-tap-highlight-color:rgba(0,0,0,0.08)] marker:content-none [&::-webkit-details-marker]:hidden active:bg-black/[0.06]"
          aria-label={copy.nav.menuOpen}
        >
          <span className="nav-mobile-menu__burger">
            <HamburgerIcon />
          </span>
          <span className="nav-mobile-menu__x hidden">
            <CloseIcon />
          </span>
        </summary>

        <div
          className="fixed inset-0 z-[10001] flex flex-col bg-white"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex h-[60px] shrink-0 items-center px-4 pr-16">
            <Logo markOnly />
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-1">
            {/* Notion Product-style 3-up cards: illustration on top, copy below */}
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
              {copy.nav.featured.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...("external" in item && item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={[
                    "flex min-h-[200px] flex-col overflow-hidden rounded-[16px] active:opacity-90 sm:min-h-[220px] sm:rounded-[18px]",
                    featuredToneClass[item.tone],
                  ].join(" ")}
                >
                  <div className="flex flex-1 items-center justify-center px-1.5 pt-3">
                    <div className="aspect-[5/4] w-full max-w-[110px]">
                      <FeaturedArt tone={item.tone} />
                    </div>
                  </div>
                  <div className="px-2.5 pb-3.5 pt-1 text-left sm:px-3 sm:pb-4">
                    <p className="text-[13px] font-bold leading-tight tracking-[-0.02em] text-ink sm:text-[15px]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-[#5a5a5a] sm:text-[12px]">
                      {item.blurb}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <nav className="mt-6 flex flex-col" aria-label="Mobile">
              {copy.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="border-b border-black/[0.06] py-4 text-[1.65rem] font-semibold tracking-[-0.03em] text-ink active:opacity-70"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-10">
              <a
                href={copy.nav.joinHref}
                className="inline-flex h-12 min-h-12 w-full items-center justify-center rounded-[12px] bg-cta text-[16px] font-medium text-white transition-colors hover:bg-cta-hover active:opacity-90"
              >
                {copy.hero.cta}
              </a>
            </div>
          </div>
        </div>
      </details>
  );
}
