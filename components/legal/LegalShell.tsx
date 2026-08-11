"use client";

import { useLayoutEffect } from "react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { NavMobileMenu } from "@/components/NavMobileMenu";

type LegalShellProps = {
  children: React.ReactNode;
};

/**
 * Same nav rules as the homepage (Nav + NavMobileMenu).
 * Subpages have no #hero-cta, so Join stays visible (Notion mobile pattern).
 */
export function LegalShell({ children }: LegalShellProps) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.add("past-hero-cta");
    return () => {
      root.classList.remove("past-hero-cta");
    };
  }, []);

  return (
    <div className="flex min-h-full flex-col bg-white">
      <Nav />
      <NavMobileMenu />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
