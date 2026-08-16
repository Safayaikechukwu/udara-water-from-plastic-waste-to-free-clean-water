import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { NavMobileMenu } from "@/components/NavMobileMenu";

type LegalShellProps = {
  children: React.ReactNode;
};

/**
 * Same nav rules as the homepage (Nav + NavMobileMenu).
 * Join stays visible via `.legal-shell .nav-join` (no html class mutation,
 * which would cause SSR hydration mismatches).
 */
export function LegalShell({ children }: LegalShellProps) {
  return (
    <div className="legal-shell flex min-h-full flex-col bg-white">
      <Nav />
      <NavMobileMenu />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
