import Link from "next/link";
import { Container } from "@/components/Container";
import { TallyButton } from "@/components/TallyButton";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--accent) 18%, transparent) 0%, transparent 70%)",
          }}
        />
        <Container className="py-24 sm:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
              <span className="mesh-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Now joining the waitlist
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight">
              Real-world connections.
              <br />
              <span className="text-accent">By interest.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted max-w-2xl">
              Go Mesh matches you with people and member-hosted events around
              what you love — from Saturday runs to your next collaborator.
              One app for the meetups you&apos;d actually show up to and the
              network you&apos;d actually want to know.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <TallyButton className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-medium text-accent-foreground hover:bg-accent-hover transition-colors cursor-pointer">
              Join the waitlist
            </TallyButton>
            <Link
              href="/features"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium hover:bg-surface transition-colors"
            >
              See how it works
            </Link>
          </div>
          <p className="mt-3 text-xs text-muted">
            Early members get priority access in their city. No spam, ever.
          </p>
        </Container>
      </section>

      {/* Value props */}
      <section className="border-t border-border bg-surface">
        <Container className="py-20">
          <div className="grid gap-10 md:grid-cols-3">
            <ValueProp
              title="Match on what matters"
              body="Tell Go Mesh what you're into — running, jazz, AI tooling, startup mentorship. We surface members and events that line up with your interests and ambitions."
            />
            <ValueProp
              title="Member-hosted events"
              body="Anyone can host. Anyone can RSVP. Discover dinners, runs, workshops, and meetups put on by people in your community — not algorithmic noise."
            />
            <ValueProp
              title="One profile, two modes"
              body="Toggle between social and professional. The same Go Mesh profile can match you with a hiking group on Saturday and a co-founder on Monday."
            />
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="border-t border-border">
        <Container className="py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              How Go Mesh works
            </h2>
            <p className="mt-4 text-muted">
              A simple loop — designed for real-world follow-through, not endless scrolling.
            </p>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            <Step
              n={1}
              title="Build your mesh profile"
              body="Pick your interests, intentions, and the kinds of people you'd like to meet."
            />
            <Step
              n={2}
              title="Match with members + events"
              body="See people and member-hosted events in your area that fit what you're looking for."
            />
            <Step
              n={3}
              title="Show up. Connect."
              body="RSVP, message, meet. Your mesh grows every time you do."
            />
          </ol>

          <div className="mt-12">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover"
            >
              Explore all features
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border bg-surface">
        <Container className="py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Be among the first to mesh.
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            We&apos;re opening Go Mesh city by city. Join the waitlist and
            we&apos;ll let you know the moment we land in yours.
          </p>
          <div className="mt-8">
            <TallyButton className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-medium text-accent-foreground hover:bg-accent-hover transition-colors cursor-pointer">
              Join the waitlist
            </TallyButton>
          </div>
        </Container>
      </section>
    </>
  );
}

function ValueProp({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-muted leading-relaxed">{body}</p>
    </div>
  );
}

function Step({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <li className="rounded-2xl border border-border bg-background p-6">
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-semibold">
        {n}
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{body}</p>
    </li>
  );
}
