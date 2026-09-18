import { copy } from "@/lib/copy";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

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

/**
 * Server-rendered native <details> menu.
 * Behavior (open/scroll/CTA) lives in app/layout.tsx boot script.
 */
export function NavMobileMenu() {
  return (
      <details className="nav-mobile-menu fixed right-3 top-2 z-[10002] md:hidden">
        <summary
          className="nav-mobile-menu__summary flex h-12 w-12 cursor-pointer list-none items-center justify-center bg-transparent text-ink shadow-none [-webkit-tap-highlight-color:transparent] marker:content-none [&::-webkit-details-marker]:hidden"
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
          className="fixed inset-0 z-[10001] flex flex-col bg-bg"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex h-[60px] shrink-0 items-center px-4 pr-16">
            <Logo markOnly />
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-1">
            <nav className="flex flex-col" aria-label="Mobile">
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
              <Button href={copy.nav.joinHref} className="w-full">
                {copy.hero.cta}
              </Button>
            </div>
          </div>
        </div>
      </details>
  );
}
