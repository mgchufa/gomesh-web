/**
 * Inline wordmark — lowercase "mesh" set in Playfair Display 600. Used where a
 * single-line lockup is needed (nav, footer). The mark never sits left of the
 * word, so inline contexts carry the wordmark alone; use <Lockup> when the
 * stacked mark-over-word is wanted.
 */
export function Logo({
  className = "",
  textClassName = "text-aubergine",
}: {
  className?: string;
  textClassName?: string;
}) {
  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span
        className={`font-display ${textClassName}`}
        style={{
          fontWeight: 600,
          fontSize: "1.6rem",
          letterSpacing: "-0.01em",
          lineHeight: 1,
        }}
      >
        mesh
      </span>
    </span>
  );
}
