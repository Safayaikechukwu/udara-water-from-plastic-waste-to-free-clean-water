import Link from "next/link";
import { siteConfig } from "@/lib/site";

/** Crawlable facts - compact black band for the home footer area. */
export function SiteFacts() {
  return (
    <aside
      id="about-udara"
      className="w-full border-t border-white/10 pt-8"
      aria-label="About Udara"
    >
      <h2 className="text-[12px] font-semibold tracking-[-0.01em] text-white/80">
        About {siteConfig.name}
      </h2>
      <p className="mt-2 max-w-[70ch] text-[11px] leading-relaxed text-white/45">
        {siteConfig.description}{" "}
        <Link
          href="/about"
          className="text-white/70 underline underline-offset-2 hover:text-white"
        >
          Full about page
        </Link>
        .
      </p>
      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-[11px] lg:grid-cols-4">
        <div>
          <dt className="font-semibold text-white/70">Product</dt>
          <dd className="mt-0.5 text-white/40">Plastic waste to free clean water</dd>
        </div>
        <div>
          <dt className="font-semibold text-white/70">Company</dt>
          <dd className="mt-0.5 text-white/40">{siteConfig.legalName}</dd>
        </div>
        <div>
          <dt className="font-semibold text-white/70">Model</dt>
          <dd className="mt-0.5 text-white/40">Brand-sponsored batches</dd>
        </div>
        <div>
          <dt className="font-semibold text-white/70">Market</dt>
          <dd className="mt-0.5 text-white/40">Africa</dd>
        </div>
      </dl>
    </aside>
  );
}
