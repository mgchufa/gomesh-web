import Link from "next/link";
import { Logo } from "./Logo";
import { SOCIAL_LINKS } from "./SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="bg-oceanic"
      style={{ borderTop: "3px solid var(--forsythia)" }}
    >
      <div className="flex flex-col gap-6 py-10 px-6 sm:px-10 sm:flex-row sm:items-center sm:justify-between">
        <Logo textClassName="text-forsythia" />

        <div className="flex flex-col items-start gap-3 sm:items-end">
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
            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-light-text"
            style={{ fontSize: "11px", letterSpacing: "0.06em" }}
          >
            <Link
              href="/privacy"
              className="hover:text-forsythia transition-colors"
            >
              Privacy
            </Link>
            <span aria-hidden className="text-light-text/40">
              ·
            </span>
            <Link
              href="/terms"
              className="hover:text-forsythia transition-colors"
            >
              Terms
            </Link>
            <span aria-hidden className="text-light-text/40">
              ·
            </span>
            <span>© {year} Mesh. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
