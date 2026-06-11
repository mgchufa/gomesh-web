import Link from "next/link";
import { Lockup } from "./Lockup";
import { SOCIAL_LINKS } from "./SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="bg-graphite"
      style={{ borderTop: "1px solid rgba(244, 241, 234, 0.12)" }}
    >
      <div className="flex flex-col gap-10 py-14 px-6 sm:px-10 sm:flex-row sm:items-end sm:justify-between">
        <Lockup
          markHeight={48}
          wordSize={40}
          markColor="text-paper"
          wordColor="text-paper"
        />

        <div className="flex flex-col items-start gap-4 sm:items-end">
          <ul className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="block transition-transform hover:-translate-y-0.5"
                >
                  <Icon className="h-7 w-7" />
                </a>
              </li>
            ))}
          </ul>
          <div
            className="font-mono flex flex-wrap items-center gap-x-3 gap-y-1 text-warm-gray uppercase"
            style={{ fontSize: "10.5px", letterSpacing: "0.12em" }}
          >
            <Link href="/privacy" className="hover:text-paper transition-colors">
              Privacy
            </Link>
            <span aria-hidden className="text-warm-gray/40">
              ·
            </span>
            <Link href="/terms" className="hover:text-paper transition-colors">
              Terms
            </Link>
            <span aria-hidden className="text-warm-gray/40">
              ·
            </span>
            <span>© {year} Mesh · Est. 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
