import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="text-sm text-muted max-w-xs">
            Real-world connections. By interest.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/features" className="text-muted hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/about" className="text-muted hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/faq" className="text-muted hover:text-foreground transition-colors">
            FAQ
          </Link>
          <Link href="/contact" className="text-muted hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>
      </Container>
      <Container className="border-t border-border py-4">
        <p className="text-xs text-muted">© {year} Go Mesh. All rights reserved.</p>
      </Container>
    </footer>
  );
}
