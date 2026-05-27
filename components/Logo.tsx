export function Logo({
  className = "",
  textClassName = "text-forsythia",
}: {
  className?: string;
  textClassName?: string;
}) {
  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span
        className={`font-display font-black ${textClassName}`}
        style={{
          fontSize: "1.6rem",
          letterSpacing: "-0.05em",
          lineHeight: 0.85,
        }}
      >
        Mesh
      </span>
    </span>
  );
}
