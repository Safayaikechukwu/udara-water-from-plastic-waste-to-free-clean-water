import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { NavMobileMenu } from "@/components/NavMobileMenu";

type LegalShellProps = {
  children: React.ReactNode;
};

/**
 * Same nav as the homepage (Nav + NavMobileMenu).
 */
export function LegalShell({ children }: LegalShellProps) {
  return (
    <div className="legal-shell flex min-h-full flex-col bg-bg">
      <Nav />
      <NavMobileMenu />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
