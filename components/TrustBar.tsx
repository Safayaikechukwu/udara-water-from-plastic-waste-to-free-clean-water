import { copy } from "@/lib/copy";

function TrustIcon({ type }: { type: string }) {
  const common = "h-[15px] w-[15px] shrink-0 text-[#9b9a97]";

  switch (type) {
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <path
            d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L4 20.5l4.4-.7A8.5 8.5 0 1 0 12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M9.2 9.4c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.3l.7 1.7c.1.2 0 .4-.1.6l-.4.5c-.1.1-.1.3 0 .5.3.5 1 1.2 1.6 1.6.2.1.4.1.5 0l.5-.4c.2-.1.4-.1.6 0l1.6.8c.2.1.3.3.3.5v.5c0 .3 0 .5-.4.7-.4.2-1 .4-1.6.2-1.5-.4-3.2-1.8-4.2-3.3-.9-1.4-1.2-2.8-.8-4.1Z"
            fill="currentColor"
          />
        </svg>
      );
    case "lock":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <rect x="6" y="11" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M8.5 11V8.5a3.5 3.5 0 0 1 7 0V11"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "bank":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <path
            d="M4 10h16M6 10v8M10 10v8M14 10v8M18 10v8M3 18h18M12 4l9 6H3l9-6Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "naira":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <path
            d="M8 5v14M16 5v14M7 9.5h10M7 14.5h10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <path
            d="M12 3.5 5.5 6.2v5.3c0 4 2.8 7.3 6.5 8.5 3.7-1.2 6.5-4.5 6.5-8.5V6.2L12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      );
  }
}

function TrustItem({ icon, text }: { icon: string; text: string }) {
  return (
    <li className="flex shrink-0 items-center gap-2.5 px-6 sm:px-8">
      <TrustIcon type={icon} />
      <span className="whitespace-nowrap text-[13px] font-medium tracking-[-0.01em] text-[#787774] sm:text-[14px]">
        {text}
      </span>
    </li>
  );
}

export function TrustBar() {
  const items = copy.trust;
  const loop = [...items, ...items];

  return (
    <section
      aria-label="Why people trust Udara"
      className="w-full border-y border-black/[0.06] bg-bg py-4"
    >
      <div className="trust-marquee relative overflow-hidden">
        <ul className="trust-marquee-track flex w-max items-center">
          {loop.map((item, index) => (
            <TrustItem
              key={`${item.text}-${index}`}
              icon={item.icon}
              text={item.text}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
