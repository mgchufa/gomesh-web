import { Container } from "@/components/Container";
import { WaitlistButton } from "@/components/WaitlistButton";

export default function HomePage() {
  return (
    <section className="relative flex-1 flex items-center overflow-hidden bg-graphite min-h-0">
      <Container className="relative w-full py-8">
        <p
          className="text-paper"
          style={{
            fontSize: "clamp(26px, 3.4vw, 44px)",
            lineHeight: 1.26,
            letterSpacing: "-0.01em",
            maxWidth: "20ch",
          }}
        >
          <span
            className="font-display align-baseline"
            style={{
              fontWeight: 600,
              fontSize: "2em",
              letterSpacing: "-0.02em",
              color: "var(--paper)",
            }}
          >
            mesh
          </span>{" "}
          with digital business owners around the world, learn, inspire, build,
          &amp; host retreats together.
        </p>

        <div className="mt-8">
          <WaitlistButton className="inline-flex items-center rounded-full bg-aubergine px-7 py-3.5 text-[15px] font-semibold text-paper hover:bg-aubergine-soft transition-colors">
            Join the Waitlist
          </WaitlistButton>
        </div>
      </Container>
    </section>
  );
}
