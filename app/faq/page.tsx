import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { WaitlistButton } from "@/components/WaitlistButton";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Go Mesh.",
};

const faqs = [
  {
    q: "What is Go Mesh?",
    a: "Go Mesh is an interest-based meetups and professional networking app. Members match with other members and with member-hosted events around shared interests and intentions.",
  },
  {
    q: "Who is Go Mesh for?",
    a: "Anyone looking to make real-world connections — whether you want to find a Saturday running group, an industry mentor, or a co-founder. Go Mesh works for social and professional contexts in the same profile.",
  },
  {
    q: "How is this different from other meetup or networking apps?",
    a: "Most apps optimize for swipes or attendance. Go Mesh treats people and events as part of the same fabric, matched on what you're actually into. The community programs itself through member-hosted events.",
  },
  {
    q: "When does Go Mesh launch?",
    a: "We're opening city by city. Join the waitlist and we'll let you know the moment we land in yours.",
  },
  {
    q: "Is Go Mesh free?",
    a: "Joining the waitlist is free. We'll share more about pricing and any premium features closer to launch — early waitlist members will get priority access.",
  },
  {
    q: "Can I host an event on Go Mesh?",
    a: "Yes. Member-hosted events are core to how Go Mesh works. We're actively looking for founding hosts in our launch cities — get in touch via the Contact page.",
  },
  {
    q: "What cities are you launching in first?",
    a: "We're prioritizing launch cities based on waitlist signal. The more interest we see from your area, the sooner Go Mesh opens there.",
  },
  {
    q: "How do you handle privacy and safety?",
    a: "Your interests and matches stay yours. We're building Go Mesh with verified profiles, member endorsements, and reporting tools from day one. More details at launch.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section>
        <Container className="py-20 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            FAQ
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
            Questions, answered.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted max-w-2xl">
            Don&apos;t see what you&apos;re looking for?{" "}
            <Link href="/contact" className="text-accent hover:text-accent-hover underline underline-offset-4">
              Send us a note
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="border-t border-border bg-surface">
        <Container className="py-16">
          <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-background">
            {faqs.map((item) => (
              <details key={item.q} className="group p-6 open:bg-surface/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                  <span className="text-base font-medium">{item.q}</span>
                  <span
                    aria-hidden
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-transform group-open:rotate-45"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm text-muted leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Ready to join?
          </h2>
          <div className="mt-6">
            <WaitlistButton className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground hover:bg-accent-hover transition-colors cursor-pointer">
              Join the waitlist
            </WaitlistButton>
          </div>
        </Container>
      </section>
    </>
  );
}
