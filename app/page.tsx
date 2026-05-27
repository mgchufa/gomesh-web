import { Container } from "@/components/Container";
import { WaitlistButton } from "@/components/WaitlistButton";

export default function HomePage() {
  return (
    <section className="relative overflow-hidden flex-1 flex items-center bg-nocturnal">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, #1A6070 0%, #114C5A 50%, #0A2830 100%)",
        }}
      />
      <Container className="relative py-24 sm:py-32 w-full">
        <div className="max-w-4xl">
          <h1
            className="font-display font-black text-arctic"
            style={{
              fontSize: "clamp(48px, 8vw, 96px)",
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
            }}
          >
            Build Above
            <br />
            <span className="text-forsythia">Your Weight.</span>
          </h1>

          <p
            className="mt-8 text-arctic/75 max-w-2xl"
            style={{ fontSize: "18px", lineHeight: 1.7 }}
          >
            <span
              className="text-forsythia font-display font-black align-baseline"
              style={{
                fontSize: "1.5em",
                letterSpacing: "-0.05em",
                lineHeight: 0.85,
              }}
            >
              Mesh
            </span>{" "}
            with your weight class, mentor up n&apos; comers, retreat with your
            kind, and build with the best.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <WaitlistButton className="inline-flex items-center bg-forsythia px-7 py-3.5 text-sm font-bold uppercase tracking-[0.06em] text-oceanic hover:opacity-90 transition-opacity">
              Join the Waitlist
            </WaitlistButton>
            <div
              aria-hidden
              className="mesh-dot ml-2 h-2 w-2 rounded-full bg-forsythia"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
