import Link from "next/link";
import { Logo } from "./Logo";
import { WaitlistButton } from "./WaitlistButton";

export function Nav() {
  return (
    <header
      className="sticky top-0 z-40 bg-oceanic"
      style={{ borderBottom: "3px solid var(--forsythia)" }}
    >
      <div className="flex h-14 items-center justify-between px-6 sm:px-10">
        <Link
          href="/"
          className="hover:opacity-90 transition-opacity"
        >
          <Logo textClassName="text-forsythia" />
        </Link>

        <WaitlistButton className="inline-flex items-center bg-forsythia px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-oceanic hover:opacity-90 transition-opacity">
          Join the Waitlist
        </WaitlistButton>
      </div>
    </header>
  );
}
