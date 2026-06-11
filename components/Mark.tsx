import type { CSSProperties } from "react";

/**
 * The Mesh "Threshold" mark — a broad, grounded stone with a passage cut
 * clean through. A single flat silhouette; it inherits `currentColor`, so set
 * the colour with a text utility (e.g. `text-aubergine`, `text-paper`).
 * Brand Identity Kit · The Mark.
 */
export function Mark({
  className = "",
  style,
  title,
}: {
  className?: string;
  style?: CSSProperties;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      style={style}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path
        fill="currentColor"
        d="M40 196 L40 74 Q40 66 48 66 L192 66 Q200 66 200 74 L200 196 L150 196 L150 116 Q150 112 146 112 L94 112 Q90 112 90 116 L90 196 Z"
      />
    </svg>
  );
}
