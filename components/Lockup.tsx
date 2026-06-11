import { Mark } from "./Mark";

/**
 * The primary lockup — mark stacked above the wordmark, centred. Never
 * icon-left-of-text. The wordmark is lowercase Playfair Display (the brand's
 * high-contrast Didone). Brand Identity Kit · The Lockup.
 */
export function Lockup({
  className = "",
  centered = false,
  markColor = "text-aubergine",
  wordColor = "text-graphite",
  markHeight = 56,
  wordSize = 48,
}: {
  className?: string;
  centered?: boolean;
  markColor?: string;
  wordColor?: string;
  markHeight?: number;
  wordSize?: number;
}) {
  return (
    <div
      className={`flex flex-col ${centered ? "items-center" : "items-start"} ${className}`}
      style={{ gap: Math.round(markHeight * 0.3) }}
    >
      <Mark
        className={`block w-auto ${markColor}`}
        style={{ height: markHeight }}
        title="Mesh"
      />
      <span
        className={`font-display ${wordColor}`}
        style={{
          fontWeight: 600,
          fontSize: wordSize,
          lineHeight: 1,
          letterSpacing: "-0.01em",
        }}
      >
        mesh
      </span>
    </div>
  );
}
