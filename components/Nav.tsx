import Link from "next/link";
import { Mark } from "./Mark";
import { WaitlistButton } from "./WaitlistButton";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-graphite">
      <div className="flex h-20 items-center justify-between px-6 sm:px-10">
        <Link
          href="/"
          aria-label="Mesh home"
          className="hover:opacity-80 transition-opacity"
        >
          <Mark
            className="text-paper"
            style={{ height: 35, width: "auto" }}
            title="Mesh"
          />
        </Link>

        <WaitlistButton className="inline-flex items-center rounded-full bg-aubergine px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-paper hover:bg-aubergine-soft transition-colors">
          Join the Waitlist
        </WaitlistButton>
      </div>
    </header>
  );
}
