export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="6" cy="6" r="2.5" fill="currentColor" />
        <circle cx="22" cy="6" r="2.5" fill="currentColor" />
        <circle cx="14" cy="14" r="3" fill="currentColor" />
        <circle cx="6" cy="22" r="2.5" fill="currentColor" />
        <circle cx="22" cy="22" r="2.5" fill="currentColor" />
        <path
          d="M6 6L14 14L22 6M6 22L14 14L22 22M6 6V22M22 6V22"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>
      <span className="font-semibold tracking-tight text-base">Go Mesh</span>
    </span>
  );
}
