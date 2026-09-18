import { copy } from "@/lib/copy";
import { Logo } from "@/components/ui/Logo";

/**
 * Header bar only. Mobile menu lives in NavMobileMenu.
 */
export function Nav() {
  return (
    <>
      <div className="h-[60px] sm:h-[68px] lg:h-[72px]" aria-hidden="true" />

      <header className="fixed inset-x-0 top-0 z-[80] w-full border-b border-black/[0.06] bg-bg">
        <div className="relative flex h-[60px] w-full items-center justify-between gap-3 px-4 sm:h-[68px] sm:px-5 lg:h-[72px] lg:px-6">
          <Logo markOnly />

          <nav
            className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 items-center justify-center gap-7 md:flex"
            aria-label="Primary"
          >
            {copy.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="pointer-events-auto rounded-sm text-[14px] font-medium text-[#5a5a5a] transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="relative z-10 ml-auto flex shrink-0 items-center justify-end pr-14 md:pr-0">
            <a
              href={copy.nav.joinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-join inline-flex h-10 min-h-10 items-center justify-center rounded-[6px] bg-cta px-3.5 text-[13px] font-medium text-ink hover:bg-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 sm:h-11 sm:min-h-11 sm:px-5 sm:text-[15px]"
            >
              {copy.hero.cta}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
