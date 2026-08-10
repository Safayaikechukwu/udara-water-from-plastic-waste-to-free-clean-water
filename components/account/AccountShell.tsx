import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { copy } from "@/lib/copy";
import { whatsappJoinUrl } from "@/lib/site";

type AccountShellProps = {
  children: React.ReactNode;
};

/** Notion-style subpage chrome: soft canvas, sticky white nav, site footer. */
export function AccountShell({ children }: AccountShellProps) {
  return (
    <div className="flex min-h-full flex-col bg-[#f7f6f3]">
      <header className="sticky top-0 z-50 w-full border-b border-black/[0.06] bg-white">
        <div className="mx-auto flex h-[60px] w-full max-w-[1252px] items-center justify-between px-4 sm:h-[68px] sm:px-5 lg:px-6">
          <Logo markOnly />
          <div className="flex items-center gap-3">
            <Link
              href="/#instant-block"
              className="hidden text-[14px] font-medium text-muted transition-colors hover:text-ink sm:inline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 rounded-sm"
            >
              Back
            </Link>
            <Button
              href={whatsappJoinUrl}
              className="h-10 min-h-10 px-4 text-[14px] sm:h-11 sm:min-h-11 sm:px-5"
            >
              {copy.hero.cta}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 py-10 sm:px-5 sm:py-14 lg:px-6 lg:py-16">
        <div className="mx-auto w-full max-w-[560px]">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
