import Image from "next/image";
import Link from "next/link";

/** Canonical brand mark — bump when the asset changes to bust caches. */
export const UDARA_LOGO_SRC = "/brand/udara-logo.png";

type LogoProps = {
  className?: string;
  /** Light wordmark for dark backgrounds */
  inverted?: boolean;
  /** Icon only, no "Udara" text */
  markOnly?: boolean;
};

export function Logo({
  className = "",
  inverted = false,
  markOnly = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={[
        "inline-flex items-center rounded-sm",
        markOnly ? "" : "gap-2.5 sm:gap-3",
        inverted ? "text-white" : "text-ink",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2",
        inverted ? "focus-visible:ring-offset-[#0b0b0c]" : "",
        className,
      ].join(" ")}
      aria-label="Udara home"
    >
      <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-[22%] sm:h-10 sm:w-10">
        <Image
          src={UDARA_LOGO_SRC}
          alt=""
          width={80}
          height={80}
          priority
          unoptimized
          className="h-full w-full object-cover"
        />
      </span>
      {markOnly ? null : (
        <span className="text-[19px] font-semibold tracking-[-0.02em] sm:text-[21px]">
          Udara
        </span>
      )}
    </Link>
  );
}
