import Image from "next/image";
import Link from "next/link";

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
      <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-[30%] sm:h-10 sm:w-10">
        <Image
          src="/udara-mark.png"
          alt=""
          width={40}
          height={40}
          priority
          className="h-full w-full scale-[1.08] object-cover"
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
