import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { TallyButton } from "@/components/TallyButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "Go Mesh is building the social layer for real-world connections — by interest, not by algorithm.",
};

export default function AboutPage() {
  return (
    <>
      <section>
        <Container className="py-20 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            About
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
            We&apos;re building the social layer for showing up in person.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted max-w-2xl">
            Apps got better at keeping us scrolling. They got worse at helping
            us meet. Go Mesh exists to fix that — to make it easy to find the
            people and events worth leaving the house for.
          </p>
        </Container>
      </section>

      <section className="border-t border-border bg-surface">
        <Container className="py-20 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Why now</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Most networking apps optimize for swipes or DMs. Most event apps
              feel like a billboard with an RSVP button. Neither helps you
              build a network you&apos;d actually want to know. Go Mesh treats
              people and events as part of the same fabric — your interests
              and intentions are the thread.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">What we believe</h2>
            <ul className="mt-4 space-y-3 text-muted leading-relaxed">
              <li>
                <strong className="text-foreground">Interest beats algorithm.</strong>{" "}
                Match on what people actually do and care about.
              </li>
              <li>
                <strong className="text-foreground">Members host the best events.</strong>{" "}
                The community is the programming.
              </li>
              <li>
                <strong className="text-foreground">In-person is the point.</strong>{" "}
                The app is a means; the meet-up is the end.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-20">
          <div className="rounded-3xl border border-border bg-surface p-10 sm:p-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              Want to mesh with us?
            </h2>
            <p className="mt-4 text-muted max-w-xl mx-auto">
              We&apos;re onboarding early members and founding hosts now.
              Join the waitlist or send us a note.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <TallyButton className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground hover:bg-accent-hover transition-colors cursor-pointer">
                Join the waitlist
              </TallyButton>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium hover:bg-surface transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
