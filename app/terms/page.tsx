import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service governing your access to and use of the Mesh website, mobile applications, and related services operated by MGChufa LLC.",
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="font-display font-black text-forsythia mt-14 mb-5"
    style={{ fontSize: "26px", letterSpacing: "-0.03em", lineHeight: 1.15 }}
  >
    {children}
  </h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-arctic/80 leading-relaxed my-4" style={{ fontSize: "16px" }}>
    {children}
  </p>
);

const Strong = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-bold text-arctic">{children}</strong>
);

const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="my-4 space-y-2.5 text-arctic/80" style={{ fontSize: "16px" }}>
    {children}
  </ul>
);

const LI = ({ children }: { children: React.ReactNode }) => (
  <li className="relative pl-5 leading-relaxed">
    <span
      aria-hidden
      className="absolute left-0 top-2.5 inline-block h-1.5 w-1.5 rounded-full bg-forsythia"
    />
    {children}
  </li>
);

const HR = () => <hr className="my-12 border-t border-arctic/15" />;

const Email = ({ address }: { address: string }) => (
  <a
    href={`mailto:${address}`}
    className="text-forsythia underline underline-offset-4 hover:opacity-80"
  >
    {address}
  </a>
);

export default function TermsPage() {
  return (
    <section className="bg-nocturnal flex-1">
      <div className="mx-auto max-w-3xl px-6 sm:px-10 py-20 sm:py-28">
        <Link
          href="/"
          className="text-arctic/60 hover:text-forsythia text-xs uppercase tracking-[0.18em] inline-flex items-center gap-2"
        >
          ← Back to Mesh
        </Link>

        <h1
          className="font-display font-black text-arctic mt-8"
          style={{
            fontSize: "clamp(40px, 6vw, 64px)",
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
          }}
        >
          Terms of Service
        </h1>

        <p
          className="mt-6 text-arctic/60 uppercase font-medium"
          style={{ fontSize: "11px", letterSpacing: "0.18em" }}
        >
          Effective Date: June 2, 2026 — Last Updated: June 2, 2026
        </p>

        <div className="mt-10">
          <P>
            These Terms of Service (&ldquo;Terms&rdquo;) are a binding
            agreement between you and <Strong>MGChufa LLC</Strong>, a Wyoming
            limited liability company (&ldquo;Mesh,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;), governing your access to
            and use of the Mesh website (gomesh.app), mobile applications, and
            related services (collectively, the &ldquo;Service&rdquo;).
          </P>
          <P>
            <Strong>
              PLEASE READ THESE TERMS CAREFULLY. SECTION 18 CONTAINS A BINDING
              ARBITRATION PROVISION, A CLASS-ACTION WAIVER, AND A JURY-TRIAL
              WAIVER.
            </Strong>{" "}
            By creating an account or using the Service, you agree to these
            Terms and to our Privacy Policy.
          </P>

          <HR />

          <H2>1. Eligibility</H2>
          <P>
            You must be at least <Strong>18 years old</Strong> and able to form
            a binding contract. The Service is for professional and
            entrepreneurial networking, not dating.
          </P>

          <HR />

          <H2>2. What Mesh Is</H2>
          <P>
            Mesh is a curated platform that helps entrepreneurs connect with
            potential co-founders, network, attend member-hosted events,
            discover vendors, and participate in a referral program.{" "}
            <Strong>
              Mesh is a venue that facilitates connections. We are not a party
              to, and are not responsible for, any agreement, partnership,
              business relationship, transaction, event, or interaction that
              members form with one another.
            </Strong>{" "}
            We do not employ, represent, or guarantee any member, vendor, or
            event host.
          </P>

          <HR />

          <H2>3. Your Account</H2>
          <P>
            You are responsible for the accuracy of your information, for
            keeping your credentials confidential, and for all activity under
            your account. Notify us at <Email address="support@gomesh.app" />{" "}
            if you suspect unauthorized use. We may suspend or terminate
            accounts that violate these Terms or that we reasonably believe
            pose a risk to the community.
          </P>

          <HR />

          <H2>4. Curation, Identity Verification, and No Guarantees</H2>
          <P>
            Mesh curates its membership and uses{" "}
            <Strong>Stripe Identity</Strong> to confirm member identities and
            issue verification badges.{" "}
            <Strong>
              A badge or &ldquo;verified&rdquo; status reflects only a limited
              check and is not a guarantee of any member&apos;s identity,
              honesty, skills, financial standing, or intentions, and is not an
              endorsement.
            </Strong>{" "}
            We do not conduct comprehensive background or criminal checks
            unless expressly stated.{" "}
            <Strong>
              You are solely responsible for evaluating anyone you interact
              with and for your own decisions, including before sharing
              confidential information, signing agreements, transferring money,
              or forming a venture.
            </Strong>
          </P>

          <HR />

          <H2>5. Subscriptions, Auto-Renewal, and Refunds</H2>
          <P>
            Mesh offers paid subscriptions on{" "}
            <Strong>monthly and annual</Strong> terms.
          </P>
          <UL>
            <LI>
              <Strong>Auto-renewal and autopay.</Strong> Your subscription
              renews automatically at the end of each term and the applicable
              fee is automatically charged to your payment method on file{" "}
              <Strong>until you cancel.</Strong>
            </LI>
            <LI>
              <Strong>Cancellation.</Strong> Cancel anytime in your account
              settings (or, for app-store purchases, through Apple App Store or
              Google Play). Cancellation stops future renewals; cancel before
              the current term ends to avoid the next charge.
            </LI>
            <LI>
              <Strong>App-store purchases</Strong> are also governed by Apple
              App Store or Google Play billing rules.
            </LI>
            <LI>
              <Strong>Refunds.</Strong> A subscription fee is not automatically
              refundable. You may submit a refund request to{" "}
              <Email address="support@gomesh.app" /> explaining your reasons.
              We review requests on a case-by-case basis and grant refunds at
              our discretion, except where a refund is required by applicable
              law.
            </LI>
            <LI>
              <Strong>Price and term changes.</Strong> We may change prices or
              terms with advance notice; changes take effect at your next
              renewal, and continuing means you accept them.
            </LI>
            <LI>
              <Strong>Failed payments.</Strong> If a charge fails, we may
              suspend paid features and retry the charge.
            </LI>
          </UL>
          <P>
            We comply with applicable automatic-renewal laws, including their
            disclosure and cancellation requirements.
          </P>

          <HR />

          <H2>6. Referral Program</H2>
          <P>
            The referral program is available{" "}
            <Strong>only to active paying members.</Strong> It is subject to
            these rules and any additional program terms we publish:
          </P>
          <UL>
            <LI>
              <Strong>Referral codes.</Strong> You may receive a unique
              referral code or link to track sign-ups attributed to you.
            </LI>
            <LI>
              <Strong>Enrollment required.</Strong> You must enroll in the
              referral program before your referrals can earn rewards.
              Referrals made before you enroll do not qualify.
            </LI>
            <LI>
              <Strong>Qualifying referral.</Strong> A referral counts only when
              the person you referred (a) is a new member who is not a
              duplicate or returning account, (b) signs up using your code or
              link, and (c) becomes a paying subscriber on a{" "}
              <Strong>monthly or annual</Strong> plan.
            </LI>
            <LI>
              <Strong>Reward unlocks only on a paid subscription.</Strong> You
              do not earn or gain access to any reward for a referral unless
              and until that referred member subscribes to a paid{" "}
              <Strong>monthly or annual</Strong> plan. Sign-ups, free accounts,
              and unpaid trials do not generate any reward. The reward is paid
              as{" "}
              <Strong>
                cash or account credit (your choice, subject to our payout
                method)
              </Strong>{" "}
              equal to a percentage of the qualifying subscription payments
              made by the members you referred. The percentage is{" "}
              <Strong>
                tiered and applies based on where each qualifying referral
                falls in your cumulative count
              </Strong>{" "}
              — that is, higher rates apply only to referrals above each
              threshold, not retroactively to earlier ones:
              <ul className="mt-3 space-y-2 ml-1">
                <li className="relative pl-5">
                  <span
                    aria-hidden
                    className="absolute left-0 top-2.5 inline-block h-1 w-1 rounded-full bg-arctic/50"
                  />
                  <Strong>Referrals 1 through 50:</Strong> 5% of those
                  members&apos; qualifying subscription payments
                </li>
                <li className="relative pl-5">
                  <span
                    aria-hidden
                    className="absolute left-0 top-2.5 inline-block h-1 w-1 rounded-full bg-arctic/50"
                  />
                  <Strong>Referrals 51 through 100:</Strong> 10% of those
                  members&apos; qualifying subscription payments
                </li>
                <li className="relative pl-5">
                  <span
                    aria-hidden
                    className="absolute left-0 top-2.5 inline-block h-1 w-1 rounded-full bg-arctic/50"
                  />
                  <Strong>Referrals 101 and above:</Strong> 20% of those
                  members&apos; qualifying subscription payments
                </li>
              </ul>
              <span className="block mt-3">
                Rewards are paid on a <Strong>recurring basis</Strong> for as
                long as the referred member remains a paying subscriber,{" "}
                <Strong>
                  except that we may change, reduce, pause, or end the reward
                  percentages, payout method, recurrence, or any other aspect
                  of the program at any time
                </Strong>{" "}
                as described below. A change to the program applies
                prospectively from its effective date and does not create any
                vested right to future payments.
              </span>
            </LI>
            <LI>
              <Strong>Clawback.</Strong> If a referred member&apos;s payment is
              refunded, charged back, or the subscription is canceled or
              refunded within <Strong>90 days</Strong> of that payment, the
              related reward is forfeited or reversed and may be deducted from
              your future rewards.
            </LI>
            <LI>
              <Strong>Prohibited conduct.</Strong> No self-referrals; no fake,
              duplicate, or returning accounts; no spam; no misrepresenting
              Mesh; and no buying, selling, or posting codes in unauthorized
              channels. Violations forfeit rewards and may result in
              termination.
            </LI>
            <LI>
              <Strong>Taxes.</Strong> You are responsible for any taxes on
              rewards. Where required, we may collect tax information (e.g., a
              W-9 or W-8) before paying and may report payments to tax
              authorities.
            </LI>
            <LI>
              <Strong>Program changes.</Strong> We may modify, suspend, or end
              the referral program, or change reward amounts, tiers, or
              eligibility, at any time. Rewards have no cash value except as
              expressly stated and are void where prohibited.
            </LI>
          </UL>

          <HR />

          <H2>7. Community Rules and Acceptable Use</H2>
          <P>
            You agree <Strong>not</Strong> to: provide false, misleading, or
            impersonating information, or create fake or duplicate accounts;
            harass, threaten, defraud, spam, or discriminate against members;
            post unlawful, infringing, defamatory, or harmful content; use the
            Service for dating or solicitation; send unsolicited mass marketing
            or recruit for pyramid/MLM schemes; scrape or harvest member data
            or use bots without permission; access accounts or systems without
            authorization or interfere with the Service; or circumvent
            verification, referral, or safety measures. We may remove content,
            restrict features, or terminate accounts for violations.
          </P>

          <HR />

          <H2>8. Your Content</H2>
          <P>
            You retain ownership of your content. You grant Mesh a worldwide,
            non-exclusive, royalty-free license to host, store, display,
            reproduce, and distribute your content as needed to operate,
            promote, and improve the Service. This license ends when you delete
            your content or account, except for content already shared with
            other members, content retained for legal or safety reasons, and
            backups. You are responsible for your content and confirm you have
            the rights to share it.
          </P>

          <HR />

          <H2>9. Co-Founder Matching and Member Connections</H2>
          <P>
            Mesh helps surface potential co-founders and connections, but{" "}
            <Strong>
              we do not guarantee that you will find a match, that any match
              will be suitable, or that any connection will lead to a
              successful or lasting relationship or venture.
            </Strong>{" "}
            Any equity, agreements, NDAs, partnerships, or commitments you make
            with another member are strictly between you and that member. We
            strongly recommend independent legal and financial advice first.
          </P>

          <HR />

          <H2>10. Member-Hosted Events</H2>
          <P>
            <Strong>
              Mesh does not organize, supervise, endorse, or assume
              responsibility for member-hosted events
            </Strong>
            , including their content, safety, conduct, or any in-person
            gatherings. Hosts are responsible for complying with applicable
            laws and for the events they run. You attend events at your own
            risk.
          </P>

          <HR />

          <H2>10A. Member-Hosted Retreats</H2>
          <P>
            Paying members may organize and host multi-day retreats
            (&ldquo;Hosts&rdquo;) that other paying members reserve and attend
            (&ldquo;Attendees&rdquo;).{" "}
            <Strong>
              Mesh is a neutral facilitator and the provider of the platform
              and payment-facilitation technology only — it is not the
              organizer, seller, travel provider, escrow agent, or money
              transmitter for any retreat.
            </Strong>{" "}
            The Host is the organizer, seller, and principal and is solely
            responsible for the retreat. Retreat funds are received, held, and
            disbursed by <Strong>Stripe</Strong> through Stripe Connect; Mesh
            never takes custody of retreat funds and only sends Stripe
            rule-based release instructions. Your participation in any retreat —
            as Host or Attendee — is governed by the{" "}
            <Strong>Mesh Retreats Addendum (Host &amp; Attendee Terms)</Strong>,
            which is incorporated into these Terms by reference and which you
            accept when you create, join, or pay into a retreat. The Retreats
            Addendum includes the fund-release rules, refund and Host-no-show
            provisions, chargeback liability, eligibility and country limits,
            assumption of risk, releases, insurance recommendations, tax
            responsibilities, and code of conduct specific to retreats. You can
            read it in full at the{" "}
            <Link
              href="#retreats-addendum"
              className="text-forsythia underline underline-offset-4 hover:opacity-80"
            >
              Mesh Retreats Addendum
            </Link>{" "}
            below.
          </P>

          <HR />

          <H2>11. Vendor Matching</H2>
          <P>
            <Strong>
              We do not endorse, guarantee, or take responsibility for any
              vendor, their services, pricing, or conduct.
            </Strong>{" "}
            Any engagement with a vendor is solely between you and that vendor.
          </P>

          <HR />

          <H2>12. Safety and Meeting Others</H2>
          <P>
            Connecting with people you don&apos;t know carries risk.{" "}
            <Strong>You are responsible for your own safety.</Strong> Before
            meeting anyone, verify details independently, meet in public or
            professional settings when possible, tell someone where you&apos;ll
            be, and never send money or share sensitive personal, financial, or
            confidential business information based solely on trust built
            through the Service. Mesh cannot guarantee anyone&apos;s conduct.
            Report unsafe or prohibited behavior to{" "}
            <Email address="support@gomesh.app" />.
          </P>

          <HR />

          <H2>13. Intellectual Property</H2>
          <P>
            The Service, including its software, design, branding, and content
            (excluding member content), is owned by Mesh or its licensors and
            protected by IP laws. We grant you a limited, revocable,
            non-transferable license to use the Service for its intended
            purpose. You may not copy, modify, distribute, reverse-engineer, or
            create derivative works except as permitted by law.
          </P>

          <HR />

          <H2>14. Third-Party Services</H2>
          <P>
            The Service integrates third-party services (e.g., Stripe for
            payments and identity verification, and login providers). We are
            not responsible for them, and your use is governed by their terms
            and privacy policies.
          </P>

          <HR />

          <H2>15. Disclaimers</H2>
          <P>
            THE SERVICE IS PROVIDED{" "}
            <Strong>&ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;</Strong>{" "}
            WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT,
            AND ANY WARRANTIES ABOUT THE CONDUCT, IDENTITY, OR RELIABILITY OF
            MEMBERS, VENDORS, OR EVENT HOSTS, TO THE MAXIMUM EXTENT PERMITTED
            BY LAW. Some jurisdictions do not allow certain disclaimers, so
            some may not apply to you.
          </P>

          <HR />

          <H2>16. Limitation of Liability</H2>
          <P>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, MESH AND ITS MEMBERS,
            MANAGERS, OFFICERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR
            ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES, OR FOR LOST PROFITS, DATA, GOODWILL, OR BUSINESS
            OPPORTUNITIES, ARISING FROM OR RELATED TO YOUR USE OF THE SERVICE
            OR YOUR INTERACTIONS WITH OTHER MEMBERS, VENDORS, OR EVENTS, UNDER
            ANY THEORY.{" "}
            <Strong>
              OUR TOTAL LIABILITY FOR ANY CLAIM WILL NOT EXCEED THE GREATER OF
              (A) THE AMOUNT YOU PAID US IN THE 12 MONTHS BEFORE THE EVENT
              GIVING RISE TO THE CLAIM, OR (B) USD 100.
            </Strong>{" "}
            Some jurisdictions do not allow these limits, so they may not fully
            apply to you.
          </P>

          <HR />

          <H2>17. Indemnification</H2>
          <P>
            You agree to indemnify, defend, and hold harmless Mesh and its
            members, managers, officers, employees, and agents from any claims,
            damages, losses, liabilities, and expenses (including reasonable
            attorneys&apos; fees) arising from your use of the Service, your
            content, your interactions with other members or vendors, your
            participation in the referral program, or your breach of these
            Terms or applicable law.
          </P>

          <HR />

          <H2>
            18. Dispute Resolution, Arbitration, and Class-Action Waiver
          </H2>
          <P>
            <Strong>
              PLEASE READ THIS SECTION CAREFULLY — IT AFFECTS YOUR LEGAL
              RIGHTS.
            </Strong>
          </P>
          <UL>
            <LI>
              <Strong>Informal resolution first.</Strong> Before starting
              arbitration, contact us at <Email address="support@gomesh.app" />{" "}
              and try to resolve the dispute informally for at least 60 days.
            </LI>
            <LI>
              <Strong>Binding individual arbitration.</Strong> Except for the
              carve-outs below, any dispute arising out of or relating to these
              Terms or the Service will be resolved by{" "}
              <Strong>binding individual arbitration</Strong> administered by
              the American Arbitration Association (AAA) under its applicable
              consumer rules, not in court. The Federal Arbitration Act governs
              this section.
            </LI>
            <LI>
              <Strong>Class-action and jury waiver.</Strong>{" "}
              <Strong>
                You and Mesh waive any right to a jury trial and agree that
                claims may be brought only individually, not as a plaintiff or
                class member in any class, collective, consolidated, or
                representative action.
              </Strong>{" "}
              The arbitrator may not consolidate claims or preside over any
              class or representative proceeding.
            </LI>
            <LI>
              <Strong>Carve-outs.</Strong> Either party may bring qualifying
              claims in small-claims court and may seek injunctive relief in
              court to protect intellectual property or stop unauthorized
              access.
            </LI>
            <LI>
              <Strong>30-day opt-out.</Strong> You may opt out by emailing{" "}
              <Email address="support@gomesh.app" /> within 30 days of first
              accepting these Terms, stating your name and intent to opt out.
              Opting out does not affect the rest of these Terms.
            </LI>
            <LI>
              <Strong>Time limit.</Strong> Any claim must be brought within{" "}
              <Strong>one (1) year</Strong> after it arises, or it is
              permanently barred, to the extent allowed by law.
            </LI>
            <LI>
              <Strong>Mandatory rights.</Strong> Nothing in this section
              removes any right you have that cannot be waived under applicable
              law.
            </LI>
          </UL>
          <P>
            <Strong>Governing law.</Strong> These Terms are governed by the
            laws of the <Strong>State of Wyoming, USA</Strong>, without regard
            to conflict-of-laws rules, except where mandatory local law
            applies.
          </P>

          <HR />

          <H2>19. Termination</H2>
          <P>
            You may stop using the Service and delete your account at any time.
            We may suspend or terminate your access for violation of these
            Terms, risk to the community, or as required by law. Sections that
            by nature should survive (including the Section 6 clawback, and
            Sections 8, 15, 16, 17, and 18) will survive.
          </P>

          <HR />

          <H2>20. Changes to These Terms</H2>
          <P>
            We may update these Terms. If we make material changes, we will
            provide notice through the Service or by other reasonable means and
            update the &ldquo;Last Updated&rdquo; date. Continued use after
            changes take effect means you accept them.
          </P>

          <HR />

          <H2>21. Miscellaneous</H2>
          <P>
            These Terms and the Privacy Policy are the entire agreement between
            you and Mesh regarding the Service. If any provision is
            unenforceable, the rest remain in effect. Our failure to enforce a
            provision is not a waiver. You may not assign these Terms; we may
            assign them in a business transfer.
          </P>

          <HR />

          <H2>22. Contact</H2>
          <P>
            Questions about these Terms? Contact{" "}
            <Email address="support@gomesh.app" /> or write to{" "}
            <Strong>
              MGChufa LLC, 30 N Gould St, Ste R, Sheridan, WY 82801, USA.
            </Strong>
          </P>

          {/* ——— Incorporated Retreats Addendum ——— */}
          <div id="retreats-addendum" className="mt-24 scroll-mt-24">
            <hr className="mb-16 border-t border-arctic/15" />

            <p
              className="text-forsythia uppercase font-medium"
              style={{ fontSize: "11px", letterSpacing: "0.2em" }}
            >
              Incorporated Addendum
            </p>
            <h2
              className="font-display font-black text-arctic mt-5"
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                letterSpacing: "-0.04em",
                lineHeight: 1.02,
              }}
            >
              Mesh Retreats Addendum
            </h2>
            <p
              className="font-display text-arctic/70 mt-2"
              style={{ fontSize: "18px", letterSpacing: "-0.01em" }}
            >
              Host &amp; Attendee Terms
            </p>
            <p
              className="mt-6 text-arctic/60 uppercase font-medium"
              style={{ fontSize: "11px", letterSpacing: "0.18em" }}
            >
              Effective Date: June 2, 2026 — Last Updated: June 2, 2026
            </p>

            <div className="mt-10">
              <P>
                This Retreats Addendum (the &ldquo;Addendum&rdquo;) governs your
                use of the Mesh retreats feature, which lets paying members
                organize and host retreats (&ldquo;Hosts&rdquo;) and other
                paying members reserve and attend them
                (&ldquo;Attendees&rdquo;). It is part of, and incorporated into,
                the Mesh Terms of Service (the &ldquo;Terms&rdquo;). Capitalized
                terms not defined here have the meaning given in the Terms. If
                this Addendum conflicts with the Terms for matters specific to
                retreats, this Addendum controls. By creating, joining, or
                paying into any retreat, you agree to this Addendum.
              </P>

              <HR />

              <H2>
                1. Mesh Is a Neutral Facilitator — Not the Organizer, Seller, or
                Travel Provider
              </H2>
              <P>
                <Strong>
                  Mesh provides the platform and payment-facilitation technology
                  only.
                </Strong>{" "}
                Retreats are created, organized, priced, planned, and run
                entirely by Hosts, who are members, not Mesh. For every retreat:
              </P>
              <UL>
                <LI>
                  The{" "}
                  <Strong>
                    Host is the organizer, initiator, seller, and principal.
                  </Strong>{" "}
                  The Host alone is responsible for the retreat&apos;s content,
                  itinerary, lodging, activities, pricing, safety, legality,
                  permits, insurance, and performance.
                </LI>
                <LI>
                  <Strong>Mesh is not</Strong> a co-organizer, agent, partner,
                  joint venturer, employer, sponsor, tour operator, travel
                  agent, seller of travel, escrow agent, or money transmitter,
                  and does not provide, endorse, vet for suitability, supervise,
                  or guarantee any retreat, Host, Attendee, lodging, activity,
                  or outcome.
                </LI>
                <LI>
                  Any contract for a retreat is{" "}
                  <Strong>between the Host and each Attendee.</Strong> Mesh is
                  not a party to it.
                </LI>
                <LI>
                  Mesh&apos;s service fee (Section 4) is charged for use of the
                  platform and payment facilitation.{" "}
                  <Strong>
                    It is not a fee for organizing, vetting, insuring, or
                    guaranteeing any retreat, and charging it does not make Mesh
                    the organizer or seller.
                  </Strong>
                </LI>
              </UL>
              <P>
                You acknowledge and agree to this allocation of roles each time
                you host or join a retreat.
              </P>

              <HR />

              <H2>2. Eligibility</H2>
              <UL>
                <LI>
                  Only <Strong>paying members in good standing</Strong>{" "}
                  (subscribed on either the monthly or annual plan) who are{" "}
                  <Strong>at least 18</Strong> and{" "}
                  <Strong>identity-verified</Strong> (via Stripe Identity) may
                  host or attend retreats.
                </LI>
                <LI>
                  <Strong>Hosts</Strong> must additionally maintain a valid
                  Stripe Connect connected account that Stripe permits Mesh, as
                  a US-based platform, to pay out to.{" "}
                  <Strong>
                    Hosting is gated solely on Stripe payout eligibility:
                  </Strong>{" "}
                  any member whose country and account Stripe allows Mesh to pay
                  may host. Under Stripe&apos;s current cross-border payout rules
                  for a US-based platform, that includes connected accounts in
                  the{" "}
                  <Strong>
                    United States, Canada, United Kingdom, Switzerland, and the
                    EEA
                  </Strong>{" "}
                  (Austria, Belgium, Bulgaria, Croatia, Cyprus, Czechia,
                  Denmark, Estonia, Finland, France, Germany, Greece, Hungary,
                  Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania,
                  Luxembourg, Malta, Netherlands, Norway, Poland, Portugal,
                  Romania, Slovakia, Slovenia, Spain, and Sweden), plus any
                  additional countries Stripe later enables for payouts from our
                  platform. Stripe is the source of truth, the list may change,
                  and some countries carry Stripe limitations; if Stripe cannot
                  pay a Host, that member cannot host. Mesh does not offer any
                  &ldquo;direct with venue&rdquo; or off-platform payment path.
                </LI>
                <LI>
                  <Strong>Attendees</Strong> may be located anywhere the Service
                  is available, subject to the Terms.
                </LI>
              </UL>

              <HR />

              <H2>3. How Retreat Payments Work (Stripe Connect)</H2>
              <P>
                <Strong>
                  All retreat funds are received, held, and disbursed by Stripe,
                  not by Mesh.
                </Strong>{" "}
                When you pay to reserve a seat, your funds go into Stripe&apos;s
                custody through Stripe Connect.{" "}
                <Strong>
                  Mesh never takes possession or control of retreat funds and
                  does not hold them in any Mesh account.
                </Strong>{" "}
                Mesh&apos;s only role is to send Stripe rule-based instructions
                to release funds when the conditions in this Addendum are met.
                Your use of Stripe is also subject to Stripe&apos;s own terms,
                including the Stripe Connected Account Agreement.
              </P>

              <HR />

              <H2>4. Mesh Service Fee</H2>
              <P>
                Mesh charges Attendees a <Strong>service fee</Strong> added to
                the retreat price at checkout, disclosed before payment. Mesh
                currently takes{" "}
                <Strong>
                  no percentage of a Host&apos;s retreat revenue or profit
                </Strong>
                ; the service fee is Mesh&apos;s only retreat-related charge and
                may change with notice. The service fee is generally
                non-refundable except where required by law or where a retreat
                is auto-refunded under Section 6 because the Host never booked
                lodging.
              </P>

              <HR />

              <H2>5. Lodging (Airbnb Only)</H2>
              <UL>
                <LI>
                  Retreat lodging is booked <Strong>only through Airbnb</Strong>
                  , by the Host, using the Host&apos;s own Airbnb account and the
                  Host&apos;s own funds.
                </LI>
                <LI>
                  <Strong>
                    Hosts for-profit are selling a service and experience (the
                    retreat and its activities), not reselling lodging.
                  </Strong>{" "}
                  Hosts are solely responsible for complying with Airbnb&apos;s
                  terms, the listing&apos;s house rules and guest limits, local
                  laws, and any restriction on third-party or commercial
                  bookings. Mesh is not affiliated with, endorsed by, or
                  responsible for Airbnb, and is not responsible if Airbnb
                  cancels, modifies, or refuses a booking.
                </LI>
                <LI>
                  The Host must add each confirmed Attendee as a named guest on
                  the Airbnb reservation.
                </LI>
              </UL>

              <HR />

              <H2>6. Fund Release Waterfall</H2>
              <P>Funds are released by Stripe only as follows.</P>
              <P>
                <Strong>
                  (a) 80% — released after the booking is confirmed and locked.
                </Strong>{" "}
                Stripe releases 80% of the pooled retreat funds to the Host only
                after <Strong>all</Strong> of the following are satisfied:
              </P>
              <ol className="my-4 space-y-2.5 text-arctic/80 list-decimal pl-6" style={{ fontSize: "16px" }}>
                <li className="leading-relaxed pl-1">
                  The Host forwards Mesh the Airbnb reservation-confirmation
                  email, sent from an official Airbnb email domain, and
                  Mesh&apos;s systems (and, where needed, a manual case-by-case
                  review) verify it;
                </li>
                <li className="leading-relaxed pl-1">
                  Every paying Attendee has been added as a named guest on that
                  Airbnb reservation;
                </li>
                <li className="leading-relaxed pl-1">
                  Each Attendee individually confirms on the Mesh platform that
                  the reservation is booked and that they have been added as a
                  guest; and
                </li>
                <li className="leading-relaxed pl-1">
                  The listing&apos;s free-cancellation window has fully
                  concluded, after which the Host bears the full non-refundable
                  cost of the reservation.
                </li>
              </ol>
              <P>
                Because the cancellation window varies by listing, Mesh verifies
                it per booking, with manual review where needed.
              </P>
              <P>
                <Strong>(b) 20% — released after the Host shows up.</Strong> The
                remaining 20% is released to the Host once the Host arrives at
                the retreat location.{" "}
                <Strong>
                  An Attendee&apos;s failure to attend does not block this
                  release
                </Strong>{" "}
                — a no-show Attendee forfeits their paid share (subject to
                Section 7), and the 20% is still released so long as the Host
                attends.{" "}
                <Strong>
                  The 20% is withheld from the Host only if the Host fails to
                  show up (a &ldquo;Host No-Show&rdquo;).
                </Strong>
              </P>
              <P>
                <Strong>
                  (c) Host never books — full auto-refund and Host
                  non-performance fee.
                </Strong>{" "}
                If the Host does not book qualifying Airbnb lodging within the
                window Mesh allots, the retreat is canceled and{" "}
                <Strong>
                  all Attendee funds, including the Mesh service fee, are
                  automatically refunded
                </Strong>{" "}
                through Stripe. Because the Host published the retreat, accepted
                reservations, and then failed to follow through with a booking,
                the Host agrees to pay Mesh a{" "}
                <Strong>
                  non-performance fee equal to the total service fees Mesh
                  refunds to Attendees for that retreat.
                </Strong>{" "}
                This fee reimburses Mesh for the service-fee revenue it must
                refund as a result of the Host&apos;s failure to book. Mesh may
                charge it to the Host&apos;s payment method or connected account
                on file, or withhold or offset it against any other amounts
                otherwise payable to the Host.
              </P>

              <HR />

              <H2>7. Host No-Show and the Withheld 20%</H2>
              <P>
                If the Host fails to show up at the retreat (a &ldquo;Host
                No-Show&rdquo;), the 20% that would otherwise have been released
                to the Host is <Strong>not</Strong> released to the Host.
                Instead, that withheld 20% is{" "}
                <Strong>
                  distributed directly to the paying Attendees as a consolation
                </Strong>
                , in proportion to what each Attendee paid into the pool, and is
                processed as a refund to those Attendees through Stripe.
              </P>
              <UL>
                <LI>
                  This distribution is a{" "}
                  <Strong>
                    return of pooled funds to the members who paid them.
                  </Strong>{" "}
                  Mesh does not take custody of the funds and does not keep any
                  part of the withheld 20%. Mesh&apos;s only role is to instruct
                  Stripe, on a rule-based basis, to direct the withheld amount
                  back to the Attendees who paid it.
                </LI>
                <LI>
                  The consolation distribution is{" "}
                  <Strong>
                    not insurance, not a guarantee, and not compensation for any
                    Attendee&apos;s other costs or losses
                  </Strong>{" "}
                  (such as travel or time). It is limited to the withheld 20% of
                  the pool.
                </LI>
                <LI>
                  The Host remains responsible for the Airbnb reservation the
                  Host booked and for any obligations the Host owes Attendees.
                  Attendees keep their rights against the <Strong>Host</Strong>;
                  distributing the 20% to Attendees does not transfer the
                  Host&apos;s liability to Mesh or make Mesh responsible for the
                  retreat or any replacement arrangement.
                </LI>
              </UL>

              <HR />

              <H2>8. Attendee Cancellations and No-Shows</H2>
              <UL>
                <LI>
                  Once a retreat&apos;s lodging is booked and the cancellation
                  window has passed, Attendee contributions are generally{" "}
                  <Strong>non-refundable</Strong>, because the Host has incurred
                  non-refundable costs. An Attendee who cancels late or does not
                  show up <Strong>forfeits their paid share</Strong>, and this
                  does not entitle the Host to less or the Attendee to more.
                </LI>
                <LI>
                  Before lodging is booked, refund treatment is as disclosed for
                  the specific retreat. Hosts may set additional cancellation
                  terms at the retreat level, provided they are disclosed before
                  payment and do not conflict with this Addendum.
                </LI>
              </UL>

              <HR />

              <H2>9. Chargebacks and Disputes</H2>
              <UL>
                <LI>
                  Each Host is responsible for payment disputes and chargebacks
                  relating to that Host&apos;s retreat.{" "}
                  <Strong>
                    If a chargeback or refund occurs after funds have been
                    released to a Host, Mesh and Stripe may recover the amount
                    from the Host&apos;s connected account, future payouts, or by
                    other lawful means, and the Host agrees to this recovery and
                    to remain liable for any shortfall, plus associated fees.
                  </Strong>
                </LI>
                <LI>
                  The platform collects per-Attendee confirmations, identity
                  verification, booking evidence, and arrival/attestation data
                  to evidence that services were contracted and delivered. You
                  agree this data may be used to respond to disputes. Mesh does
                  not guarantee any dispute outcome.
                </LI>
                <LI>
                  Attendees agree to raise issues first through Mesh&apos;s
                  process and not to initiate a chargeback for matters that are
                  the Host&apos;s responsibility or that the remediation process
                  addresses.
                </LI>
              </UL>

              <HR />

              <H2>10. Identity Verification, Attestations, and Anti-Collusion</H2>
              <UL>
                <LI>
                  All Hosts and Attendees are identity-verified before
                  participating.
                </LI>
                <LI>
                  Hosts and Attendees provide truthful attestations at each gate
                  (booking confirmation, guest addition, arrival). Submitting
                  false confirmations, forged Airbnb emails, or fraudulent
                  attestations is a serious breach that may result in withheld
                  or reversed funds, account termination, and liability.
                </LI>
                <LI>
                  <Strong>Self-dealing and collusion are prohibited.</Strong> A
                  Host may not fund or arrange fake or controlled Attendee
                  seats, and members may not coordinate sham reservations to
                  trigger releases. Mesh may withhold or reverse funds and
                  terminate accounts for suspected collusion.
                </LI>
              </UL>

              <HR />

              <H2>11. Assumption of Risk; Release; No Liability of Mesh</H2>
              <P>
                <Strong>
                  Read this Section carefully. It limits your rights.
                </Strong>
              </P>
              <UL>
                <LI>
                  Retreats involve travel, in-person gatherings with people you
                  may not know, lodging arranged by others, and activities{" "}
                  <Strong>
                    chosen entirely by the Host and the participating adults.
                  </Strong>{" "}
                  Mesh does not select, approve, supervise, or limit retreat
                  activities and makes no judgment about their safety.
                </LI>
                <LI>
                  <Strong>
                    To the maximum extent permitted by law, each Host and
                    Attendee voluntarily assumes all risks
                  </Strong>{" "}
                  arising from a retreat — including travel, the lodging, the
                  activities, the conduct of Hosts, Attendees, and third
                  parties, injury, illness, property loss, theft, harassment,
                  financial loss, cancellation, and force majeure.
                </LI>
                <LI>
                  <Strong>
                    To the maximum extent permitted by law, you release, waive,
                    and agree not to sue Mesh
                  </Strong>{" "}
                  (MGChufa LLC and its members, managers, officers, employees,
                  and agents) for any claim, loss, injury, or damage arising out
                  of or relating to any retreat, Host, Attendee, lodging,
                  activity, or interaction, whether occurring online or in
                  person.
                </LI>
                <LI>
                  <Strong>You agree to indemnify and hold Mesh harmless</Strong>{" "}
                  from any claim arising out of your retreat, your conduct, your
                  content, your compliance failures, or your breach of this
                  Addendum, the Terms, or applicable law.
                </LI>
                <LI>
                  Nothing in this Section waives liability that cannot be waived
                  under applicable law (such as liability for a party&apos;s own
                  gross negligence, willful misconduct, or fraud, or rights that
                  mandatory consumer or personal-injury law makes non-waivable).
                  Where a release is limited by law, it applies to the fullest
                  extent the law allows.
                </LI>
                <LI>
                  <Strong>
                    Mesh recommends, but does not require, that Hosts carry
                    appropriate liability insurance, and recommends that all
                    participants obtain their own travel and medical insurance.
                  </Strong>
                </LI>
              </UL>

              <HR />

              <H2>12. Code of Conduct at Retreats</H2>
              <P>
                All participants must comply with the Mesh Community Rules and
                any retreat code of conduct, including: no harassment, threats,
                discrimination, or violence; no illegal activity; respect for
                the lodging, hosts/owners, local laws, and other participants;
                and prompt reporting of unsafe conduct to{" "}
                <Email address="support@gomesh.app" />. Violations may result in
                removal from a retreat without refund and account termination.
              </P>

              <HR />

              <H2>13. Taxes and Host Business Obligations</H2>
              <UL>
                <LI>
                  <Strong>Hosts are solely responsible</Strong> for all taxes
                  arising from their retreats, including income tax on profit and
                  any occupancy, tourism, lodging, VAT, GST, or similar taxes,
                  and for collecting and remitting them where required.
                </LI>
                <LI>
                  A Host running retreats <Strong>for profit</Strong> is
                  responsible for operating as a legally compliant business,
                  obtaining any required licenses, permits, or registrations
                  (including any travel-seller, tour-operator, or local permits
                  that may apply), and bearing all related liability.
                </LI>
                <LI>
                  Stripe may issue tax forms (such as a 1099-K) to Hosts based on
                  payouts. Mesh reports its own service-fee and subscription
                  income. Mesh does not provide tax advice.
                </LI>
              </UL>

              <HR />

              <H2>14. No Guarantee; Disclaimers</H2>
              <P>
                To the maximum extent permitted by law, retreats and all related
                facilitation are provided{" "}
                <Strong>
                  &ldquo;as is&rdquo; and &ldquo;as available.&rdquo;
                </Strong>{" "}
                Mesh disclaims all warranties regarding retreats, Hosts,
                Attendees, lodging, activities, safety, and outcomes, and is not
                responsible for the acts or omissions of Hosts, Attendees,
                Airbnb, Stripe, or any third party. The limitation of liability
                in the Terms applies to retreats.
              </P>

              <HR />

              <H2>15. Suspension, Cancellation, and Changes</H2>
              <P>
                Mesh may suspend, cancel, or refuse any retreat, or remove any
                Host or Attendee, if it reasonably believes there is fraud, a
                safety or legal risk, a Stripe or Airbnb issue, or a breach of
                these terms. Mesh may modify this Addendum and the retreats
                feature, including fees and the fund-release rules,
                prospectively and with notice.
              </P>

              <HR />

              <H2>16. Dispute Resolution</H2>
              <P>
                Disputes between you and Mesh relating to retreats are governed
                by the dispute-resolution, arbitration, class-action-waiver, and
                governing-law provisions of the Terms.{" "}
                <Strong>
                  Disputes between a Host and an Attendee are between those
                  members;
                </Strong>{" "}
                Mesh is not a party and is not obligated to resolve them, though
                it may assist at its discretion.
              </P>

              <HR />

              <H2>17. Contact</H2>
              <P>
                Questions about retreats: <Email address="support@gomesh.app" />{" "}
                ·{" "}
                <Strong>
                  MGChufa LLC, 30 N Gould St, Ste R, Sheridan, WY 82801, USA.
                </Strong>
              </P>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
