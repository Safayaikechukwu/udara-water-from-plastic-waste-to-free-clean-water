import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  soft?: boolean;
  "aria-labelledby"?: string;
};

export function Section({
  id,
  children,
  className = "",
  soft = false,
  "aria-labelledby": ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={[
        soft ? "bg-bg-soft" : "bg-bg",
        "w-full scroll-mt-24 px-4 py-12 sm:px-5 sm:py-24 md:py-28 lg:px-6",
        className,
      ].join(" ")}
    >
      <div className="mx-auto w-full max-w-[1252px]">{children}</div>
    </section>
  );
}
