type EyebrowPillProps = {
  children: React.ReactNode;
  className?: string;
};

export function EyebrowPill({ children, className = "" }: EyebrowPillProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full bg-card-gray px-3 py-1 text-sm font-medium text-muted",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
