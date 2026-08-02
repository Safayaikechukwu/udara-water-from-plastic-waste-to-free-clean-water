export type HighlightWord = {
  text: string;
  bg: string;
  dot: string;
};

type RotatingHighlightProps = {
  words: readonly HighlightWord[];
  /** Seconds each word stays visible */
  holdSeconds?: number;
};

/**
 * CSS-only rotator - works on mobile without React hydration / timers.
 */
export function RotatingHighlight({
  words,
  holdSeconds = 2.2,
}: RotatingHighlightProps) {
  const count = Math.max(words.length, 1);
  const cycleSeconds = count * holdSeconds;

  const longest = words.reduce(
    (max, word) => (word.text.length > max.length ? word.text : max),
    words[0]?.text ?? "",
  );

  return (
    <span
      className="rotating-highlight relative mx-[0.08em] inline-grid translate-y-[-0.02em] align-middle leading-none"
      aria-label={words.map((word) => word.text).join(", ")}
    >
      <span
        className="invisible col-start-1 row-start-1 inline-flex items-center gap-[0.28em] whitespace-nowrap rounded-full px-[0.34em] py-[0.1em]"
        aria-hidden="true"
      >
        <span className="inline-block h-[0.26em] w-[0.26em] rounded-full" />
        {longest}
      </span>

      {words.map((word, index) => (
        <span
          key={word.text}
          className="rotating-highlight__word col-start-1 row-start-1 inline-flex items-center justify-center gap-[0.28em] whitespace-nowrap rounded-full px-[0.34em] py-[0.1em]"
          style={{
            backgroundColor: word.bg,
            animationDuration: `${cycleSeconds}s`,
            animationDelay: `${index * holdSeconds}s`,
          }}
          aria-hidden={index !== 0}
        >
          <span
            className="inline-block h-[0.26em] w-[0.26em] shrink-0 rounded-full"
            style={{ backgroundColor: word.dot }}
          />
          <span className="leading-[1.05]">{word.text}</span>
        </span>
      ))}
    </span>
  );
}
