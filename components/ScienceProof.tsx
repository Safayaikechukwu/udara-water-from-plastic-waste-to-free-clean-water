import { copy } from "@/lib/copy";

type LabVisual =
  | { kind: "svg"; src: string; width: number }
  | { kind: "lockup"; icon: string; label: string };

/**
 * Notion logo wall:
 * - monochrome SVG/wordmark logos ~24px tall
 * - item height ~36px with soft padding
 * - optional featured pill + blue dot
 */
const visuals: Record<string, LabVisual> = {
  stanford: { kind: "svg", src: "/science-logos/stanford.svg", width: 112 },
  mit: { kind: "svg", src: "/science-logos/mit.svg", width: 72 },
  yale: { kind: "svg", src: "/science-logos/yale.svg", width: 70 },
  harvard: { kind: "svg", src: "/science-logos/harvard.svg", width: 104 },
  oxford: { kind: "svg", src: "/science-logos/oxford.svg", width: 100 },
  booth: { kind: "lockup", icon: "/science-logos/booth.png", label: "Chicago Booth" },
  lse: { kind: "lockup", icon: "/science-logos/lse.png", label: "LSE" },
  ucl: { kind: "lockup", icon: "/science-logos/ucl.png", label: "UCL" },
};

function LogoMark({
  mark,
  name,
  featured = false,
}: {
  mark: string;
  name: string;
  featured?: boolean;
}) {
  const visual = visuals[mark];
  if (!visual) return null;

  const content =
    visual.kind === "svg" ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={visual.src}
        alt={name}
        width={visual.width}
        height={24}
        className="h-6 w-auto object-contain object-left brightness-0"
        draggable={false}
      />
    ) : (
      <span className="inline-flex items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={visual.icon}
          alt=""
          width={22}
          height={22}
          className="h-[22px] w-[22px] rounded-[3px] object-contain"
          draggable={false}
        />
        <span className="text-[14px] font-semibold tracking-[-0.01em] text-[#111]">
          {visual.label}
        </span>
      </span>
    );

  if (featured) {
    return (
      <span className="inline-flex h-9 items-center gap-2 rounded-full bg-[#efefed] px-3">
        {content}
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cta" aria-hidden="true" />
      </span>
    );
  }

  return (
    <span className="inline-flex h-9 items-center px-2" aria-label={name}>
      {content}
    </span>
  );
}

function Dot() {
  return (
    <span
      className="mx-2.5 h-[3px] w-[3px] shrink-0 rounded-full bg-[#cfcfc9] sm:mx-3.5"
      aria-hidden="true"
    />
  );
}

export function ScienceProof() {
  const { line, labs } = copy.scienceProof;
  const loop = [...labs, ...labs];

  return (
    <div id="science" className="w-full scroll-mt-24 pt-14 sm:pt-16" aria-label={line}>
      <p className="text-center text-[14px] font-normal leading-5 text-black/55">
        {line}
      </p>

      <div className="science-logo-marquee relative mt-3.5 overflow-hidden sm:mt-4">
        <ul className="science-logo-marquee-track flex w-max items-center py-0.5">
          {loop.map((lab, index) => (
            <li key={`${lab.name}-${index}`} className="flex shrink-0 items-center">
              {index > 0 ? <Dot /> : null}
              <LogoMark
                mark={lab.mark}
                name={lab.name}
                featured={"featured" in lab ? Boolean(lab.featured) : false}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
