import type { ReactNode } from "react";

const ink = "#1c1b17";
const yellow = "#e4f222";

const stroke = {
  stroke: ink,
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-11 w-11 shrink-0 sm:h-12 sm:w-12"
      fill="none"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/** Ad recall - megaphone, the message that sticks. */
export function RecallMark() {
  return (
    <Svg>
      <path
        d="M10 19.5h6.5L34 10v28L16.5 28.5H10A2.5 2.5 0 0 1 7.5 26v-4A2.5 2.5 0 0 1 10 19.5Z"
        fill={yellow}
        {...stroke}
      />
      <path d="M34.5 17.5c3.4 2.4 3.4 10.6 0 13" {...stroke} />
      <path d="M38.5 13c6.2 4.2 6.2 17.8 0 22" {...stroke} />
    </Svg>
  );
}

/** Positive vibe - warm smile. */
export function VibeMark() {
  return (
    <Svg>
      <circle cx="24" cy="24" r="14.5" fill={yellow} {...stroke} />
      <circle cx="18.5" cy="20.5" r="2" fill={ink} />
      <circle cx="29.5" cy="20.5" r="2" fill={ink} />
      <path d="M16.5 28.5c2.4 3.6 5.6 5.2 7.5 5.2s5.1-1.6 7.5-5.2" {...stroke} />
    </Svg>
  );
}

/** Open rate - envelope opened. */
export function OpenMark() {
  return (
    <Svg>
      <path d="M8 20.5 24 10l16 10.5V36a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V20.5Z" fill="white" {...stroke} />
      <path d="M8 20.5 24 29.5 40 20.5" fill={yellow} {...stroke} />
      <path d="M8 20.5 24 29.5 40 20.5" {...stroke} />
    </Svg>
  );
}

/** Impressions - seen, many times. */
export function ImpressionsMark() {
  return (
    <Svg>
      <path
        d="M7 24c4.8-8 10.4-12 17-12s12.2 4 17 12c-4.8 8-10.4 12-17 12S11.8 32 7 24Z"
        fill={yellow}
        {...stroke}
      />
      <circle cx="24" cy="24" r="6.5" fill="white" {...stroke} />
      <circle cx="24" cy="24" r="3.1" fill={ink} />
    </Svg>
  );
}

/** ROI - return climbing. */
export function RoiMark() {
  return (
    <Svg>
      <path d="M10 34h28" {...stroke} />
      <path d="M10 30 20 22l7 5 11-13" {...stroke} />
      <path d="M10 30 20 22l7 5 11-13V34H10V30Z" fill={yellow} opacity="0.9" />
      <path d="M10 30 20 22l7 5 11-13" {...stroke} />
      <path d="M31 12h7v7" {...stroke} />
    </Svg>
  );
}

/** Scan rate - QR code. */
export function ScanMark() {
  return (
    <Svg>
      <rect x="8" y="8" width="13" height="13" rx="2" fill={yellow} {...stroke} />
      <rect x="27" y="8" width="13" height="13" rx="2" fill="white" {...stroke} />
      <rect x="8" y="27" width="13" height="13" rx="2" fill="white" {...stroke} />
      <rect x="12.2" y="12.2" width="4.6" height="4.6" rx="0.6" fill={ink} />
      <rect x="31.2" y="12.2" width="4.6" height="4.6" rx="0.6" fill={ink} />
      <rect x="12.2" y="31.2" width="4.6" height="4.6" rx="0.6" fill={ink} />
      <rect x="27" y="27" width="5.5" height="5.5" rx="0.8" {...stroke} />
      <rect x="34.5" y="27" width="5.5" height="5.5" rx="0.8" fill={ink} />
      <rect x="27" y="34.5" width="5.5" height="5.5" rx="0.8" fill={ink} />
      <rect x="34.5" y="34.5" width="5.5" height="5.5" rx="0.8" {...stroke} />
    </Svg>
  );
}

/** Less CO₂e - leaf. */
export function CarbonMark() {
  return (
    <Svg>
      <path
        d="M14 32c0-11 8.5-20 22-22-1 12-8 22-22 22Z"
        fill={yellow}
        {...stroke}
      />
      <path d="M16 30c5-4 10-12 12-20" {...stroke} />
      <path d="M12 36c4-1.5 7-4 8-7" {...stroke} />
    </Svg>
  );
}

/** Children reached each year. */
export function ChildrenMark() {
  return (
    <Svg>
      <circle cx="17.5" cy="14" r="5.6" fill={yellow} {...stroke} />
      <path d="M8 36c1-7.4 4.6-11.2 9.5-11.2S26 28.6 27 36" {...stroke} />
      <circle cx="32.5" cy="16.5" r="4.6" fill="white" {...stroke} />
      <path d="M25 36c.8-6 3.6-9 7.5-9s6.7 3 7.5 9" {...stroke} />
    </Svg>
  );
}
