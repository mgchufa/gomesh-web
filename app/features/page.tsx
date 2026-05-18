import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { TallyButton } from "@/components/TallyButton";

export const metadata: Metadata = {
  title: "Features",
  description:
    "How Go Mesh works — member matching, member-hosted events, and one profile for social and professional life.",
};

const features = [
  {
    title: "Interest matching",
    body: "Pick your interests, intentions, and the kinds of people you want to meet. Go Mesh surfaces members and events that fit — no random swiping.",
  },
  {
    title: "Member-hosted events",
    body: "Any member can host. From a Sunday run to an industry roundtable, the community programs itself. RSVP, comment, and meet in person.",
  },
  {
    title: "Social + professional modes",
    body: "One profile, two contexts. Toggle between meeting people for activities and meeting people for work, mentorship, or collaboration.",
  },
  {
    title: "Local-first discovery",
    body: "Go Mesh prioritizes people and events in your area, so the matches you see are ones you can actually meet this week.",
  },
  {
    title: "Trust signals, not just photos",
    body: "Mutual interests, shared events, and member endorsements give you real signal before you reach out.",
  },
  {
    title: "Lightweight messaging",
    body: "Direct chat for one-on-ones; event threads for group plans. Designed to lead to a meet-up, not to live in your inbox.",
  },
];

const journey = [
  {
    label: "Discover",
    body: "Browse member matches and member-hosted events tuned to your interests and location.",
  },
  {
    label: "Connect",
    body: "Send a message, RSVP to an event, or join a community gathering around a shared interest.",
  },
  {
    label: "Meet",
    body: "Show up. Build a real network — the kind built on shared experiences, not follower counts.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section>
        <Container className="py-20 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Features
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl">
            Everything you need to mesh with the right people.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted max-w-2xl">
            Go Mesh combines member-to-member matching and member-hosted
            events into a single, interest-driven app for social and
            professional connection.
          </p>
        </Container>
      </section>

      <section className="border-t border-border bg-surface">
        <Container className="py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <h2 className="text-lg font-semibold tracking-tight">
                  {f.title}
                </h2>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {f.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-20">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl">
            From signing up to showing up.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {journey.map((s, i) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border p-6"
              >
                <div className="text-xs font-mono text-muted">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">
                  {s.label}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <TallyButton className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground hover:bg-accent-hover transition-colors cursor-pointer">
              Join the waitlist
            </TallyButton>
          </div>
        </Container>
      </section>
    </>
  );
}
