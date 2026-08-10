import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

type SharedProps = {
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & {
    href?: undefined;
  };

type ButtonAsLink = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<Variant, string> = {
  primary: "bg-cta text-white hover:bg-cta-hover",
  secondary: "bg-[#f6eaea] text-cta hover:bg-[#ecd4d6]",
  ghost: "bg-transparent text-cta hover:underline",
};

const baseClass =
  "inline-flex min-h-11 items-center justify-center rounded-[6px] px-4 py-2.5 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = [baseClass, variants[variant], className].join(" ");

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
