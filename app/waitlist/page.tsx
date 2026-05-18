import type { Metadata } from "next";
import Script from "next/script";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Join the waitlist",
  description:
    "Sign up for early access to Go Mesh — real-world connections, by interest.",
};

export default function WaitlistPage() {
  return (
    <>
      <section>
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Waitlist
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
              Join the Go Mesh waitlist.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Tell us where you are and what you&apos;re into. We&apos;ll let
              you know the moment Go Mesh opens in your city.
            </p>
          </div>

          <div className="mt-10 max-w-2xl overflow-hidden rounded-2xl border border-border bg-white">
            <iframe
              src="https://tally.so/embed/dW88DK?alignLeft=1&hideTitle=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="500"
              title="Go Mesh waitlist"
              style={{ border: "none", display: "block", width: "100%" }}
            />
          </div>

          <p className="mt-6 text-xs text-muted max-w-2xl">
            Early members get priority access in their city. No spam, ever.
          </p>
        </Container>
      </section>

      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
