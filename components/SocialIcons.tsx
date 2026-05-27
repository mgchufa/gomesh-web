type IconProps = { className?: string };

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="6" fill="#1877F2" />
      <path
        d="M13.6 12.5h1.9l.3-2.3h-2.2V8.7c0-.67.2-1.13 1.16-1.13H16V5.5a16.5 16.5 0 0 0-1.85-.1c-1.83 0-3.08 1.12-3.08 3.16v1.64H9v2.3h2.07v6h2.53v-6Z"
        fill="#fff"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#FEDA77" />
          <stop offset="0.45" stopColor="#F58529" />
          <stop offset="0.75" stopColor="#DD2A7B" />
          <stop offset="1" stopColor="#8134AF" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
      <rect
        x="6.5"
        y="6.5"
        width="11"
        height="11"
        rx="3.2"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="12"
        r="2.7"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
      />
      <circle cx="15.4" cy="8.6" r="0.85" fill="#fff" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="6" fill="#000" />
      <path
        d="M15.2 6h-2.05v9.3a1.95 1.95 0 1 1-1.95-1.95c.18 0 .36.02.53.07v-2.07a4 4 0 1 0 3.47 3.95V9.65a4.78 4.78 0 0 0 2.8.9V8.5a2.78 2.78 0 0 1-2.8-2.5Z"
        fill="#fff"
      />
    </svg>
  );
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="6" fill="#FF0000" />
      <path d="M10 8L10 16L16.5 12Z" fill="#fff" />
    </svg>
  );
}

export const SOCIAL_LINKS = [
  {
    href: "https://facebook.com/gomeshapp",
    label: "Mesh on Facebook",
    Icon: FacebookIcon,
  },
  {
    href: "https://www.instagram.com/gomesh.app/",
    label: "Mesh on Instagram",
    Icon: InstagramIcon,
  },
  {
    href: "https://www.tiktok.com/@gomesh.app",
    label: "Mesh on TikTok",
    Icon: TikTokIcon,
  },
  {
    href: "https://www.youtube.com/@gomeshapp",
    label: "Mesh on YouTube",
    Icon: YouTubeIcon,
  },
] as const;
