import Link from "next/link";
import { Container } from "@/components/Container";
import { WaitlistButton } from "@/components/WaitlistButton";

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
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
              Real-world connections{" "}
              <span className="text-accent">wherever you are.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted max-w-2xl">
              Go Mesh is the network for remote digital entrepreneurs.
              Member-hosted events, co-founder matching, and private circles
              with founders in your ARR bracket — wherever the world takes you.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <WaitlistButton className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-medium text-accent-foreground hover:bg-accent-hover transition-colors cursor-pointer">
              Join the waitlist
            </WaitlistButton>
            <Link
              href="/features"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium hover:bg-surface transition-colors"
            >
              See how it works
            </Link>
          </div>
        </Container>
      </section>

      {/* Three core value props */}
      <section className="border-t border-border bg-surface">
        <Container className="py-20">
          <div className="grid gap-10 md:grid-cols-3">
            <ValueProp
              title="Member-hosted events"
              body="Real-world gatherings put on by members, in the cities you actually pass through. Dinners, off-sites, working sessions, retreats."
            />
            <ValueProp
              title="Co-founder matching"
              body="Find your next collaborator. Match on stage, skills, and the kind of company you're building — not on a swipe deck."
            />
            <ValueProp
              title="Networking by ARR bracket"
              body="Connect with founders at your scale. Private circles, verified revenue tiers, no posturing."
            />
          </div>
        </Container>
      </section>

      {/* Feature tiles */}
      <section className="border-t border-border">
        <Container className="py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Inside Go Mesh
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
              Everything a remote founder needs to network in real life.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureTile
              title="Small business inspiration & courses"
              body="Learn from operators one or two rungs ahead. Bite-sized lessons curated for founders building lean."
            />
            <FeatureTile
              title="Local + global member-hosted events"
              body="Show up in person — wherever you land. Members host everywhere from Lisbon to Bali to your home city."
            />
            <FeatureTile
              title="ARR / MRR filtering"
              body="Filter members and rooms by revenue scale. Find peers, mentors, or the founder one stage past you."
            />
            <FeatureTile
              title="Verified members"
              body="Every profile is verified before joining. No bots, no recruiters in disguise, no inflated bios."
            />
            <FeatureTile
              title="Interest & business filters"
              body="Filter by industry, vertical, hobbies, and even faith — find the rooms that fit how you actually live."
            />
            <FeatureTile
              title="Private ARR-bracket group chats"
              body="Closed conversations with founders verified in your revenue tier. Pricing, hiring, hard stuff — off the record."
            />
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border bg-surface">
        <Container className="py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Be Among the First to Mesh.
          </h2>
          <div className="mt-8">
            <WaitlistButton className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-medium text-accent-foreground hover:bg-accent-hover transition-colors cursor-pointer">
              Join the waitlist
            </WaitlistButton>
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

function FeatureTile({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-border bg-background p-6">
      <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{body}</p>
    </article>
  );
}
