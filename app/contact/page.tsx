import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { WaitlistButton } from "@/components/WaitlistButton";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Go Mesh team.",
};

const channels = [
  {
    label: "General",
    value: "hello@gomesh.app",
    href: "mailto:hello@gomesh.app",
  },
  {
    label: "Press & partnerships",
    value: "press@gomesh.app",
    href: "mailto:press@gomesh.app",
  },
  {
    label: "Founding host program",
    value: "hosts@gomesh.app",
    href: "mailto:hosts@gomesh.app",
  },
];

export default function ContactPage() {
  return (
    <>
      <section>
        <Container className="py-20 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
            Let&apos;s talk.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted max-w-2xl">
            Whether you want to host events, partner with us, or just say hi —
            we&apos;d love to hear from you.
          </p>
        </Container>
      </section>

      <section className="border-t border-border bg-surface">
        <Container className="py-16">
          <div className="grid gap-4 sm:grid-cols-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="block rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent"
              >
                <div className="text-xs font-medium uppercase tracking-widest text-muted">
                  {c.label}
                </div>
                <div className="mt-2 text-base font-medium">{c.value}</div>
                <div className="mt-4 inline-flex items-center gap-1 text-sm text-accent">
                  Send email
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-16">
          <div className="rounded-3xl border border-border bg-surface p-10 sm:p-14 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Or join the waitlist — that&apos;s the best way to stay in the loop.
            </h2>
            <div className="mt-6">
              <WaitlistButton className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground hover:bg-accent-hover transition-colors cursor-pointer">
                Join the waitlist
              </WaitlistButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
