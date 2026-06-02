import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How MGChufa LLC (Mesh) collects, uses, shares, and protects information about you when you use Mesh.",
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="font-display font-black text-forsythia mt-14 mb-5"
    style={{ fontSize: "26px", letterSpacing: "-0.03em", lineHeight: 1.15 }}
  >
    {children}
  </h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3
    className="font-display font-bold text-arctic mt-8 mb-3"
    style={{ fontSize: "17px", letterSpacing: "-0.02em" }}
  >
    {children}
  </h3>
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

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>

        <p
          className="mt-6 text-arctic/60 uppercase font-medium"
          style={{ fontSize: "11px", letterSpacing: "0.18em" }}
        >
          Effective Date: June 2, 2026 — Last Updated: June 2, 2026
        </p>

        <div className="mt-10">
          <P>
            This Privacy Policy explains how <Strong>MGChufa LLC</Strong>{" "}
            (&ldquo;Mesh,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;), a Wyoming limited liability company, collects,
            uses, shares, and protects information about you when you use the
            Mesh website (gomesh.app), mobile applications, and related
            services (collectively, the &ldquo;Service&rdquo;).
          </P>
          <P>
            Mesh is a curated platform that helps entrepreneurs find
            co-founders, connect with other members, attend member-hosted
            events, discover vendors, and participate in our referral program.
            Because the Service is built around connecting people with one
            another, please read this Policy carefully so you understand what
            is shared with other members versus what we keep private.
          </P>
          <P>
            By using the Service, you acknowledge that you have read and
            understood this Policy. If you do not agree, please do not use the
            Service.
          </P>

          <HR />

          <H2>1. Who We Are and How to Contact Us</H2>
          <P>The data controller responsible for your information is:</P>
          <P>
            <Strong>MGChufa LLC</Strong>
            <br />
            30 N Gould St, Ste R, Sheridan, WY 82801, USA
          </P>
          <P>
            Privacy inquiries: <Email address="privacy@gomesh.app" />
            <br />
            General and support inquiries: <Email address="support@gomesh.app" />
          </P>

          <HR />

          <H2>2. Information We Collect</H2>

          <H3>2.1 Information You Provide to Us</H3>
          <UL>
            <LI>
              <Strong>Account and registration data:</Strong> name, email
              address, phone number, password, and (where required) date of
              birth to confirm you are at least 18.
            </LI>
            <LI>
              <Strong>Profile information:</Strong> your professional
              background, industry, skills, company or venture details, the
              type of co-founder or connection you are seeking, location/city,
              photos, links (e.g., LinkedIn, company website), and any other
              content you choose to add.
            </LI>
            <LI>
              <Strong>Identity verification data:</Strong> information and
              documents you submit to obtain a verification badge, processed
              through Stripe Identity (see Section 4).
            </LI>
            <LI>
              <Strong>Payment information:</Strong> billing details for
              subscriptions, processed through our payment provider (Stripe).
              We do not store full card numbers ourselves.
            </LI>
            <LI>
              <Strong>Referral data:</Strong> referral codes you create or
              enter, the identity of members you refer or who referred you, and
              the subscription/payment status used to determine whether a
              referral reward is earned (see Section 4).
            </LI>
            <LI>
              <Strong>Content and communications:</Strong> messages you send to
              other members, posts, event listings you create or RSVP to,
              vendor inquiries, and information you provide when you contact
              support, submit a refund request, or report another user.
            </LI>
            <LI>
              <Strong>Survey and waitlist data:</Strong> information you submit
              when joining a waitlist, completing a survey, or participating in
              early-access programs.
            </LI>
          </UL>

          <H3>2.2 Information We Collect Automatically</H3>
          <UL>
            <LI>
              <Strong>Usage data:</Strong> features you use, matches and
              connections you make, events you view or attend, search activity,
              referral activity, and interaction patterns.
            </LI>
            <LI>
              <Strong>Device and technical data:</Strong> IP address, device
              type, operating system, browser type, app version, identifiers,
              and crash/diagnostic data. (We also use IP-based location to
              enforce the geographic restrictions in Section 1.)
            </LI>
            <LI>
              <Strong>Location data:</Strong> approximate location from your IP
              address, and — only with your permission — more precise location
              from your device, used mainly for local-first matching and nearby
              events. You can disable precise location in your device settings.
            </LI>
            <LI>
              <Strong>Cookies and similar technologies:</Strong> see Section 7.
            </LI>
          </UL>

          <H3>2.3 Information From Third Parties</H3>
          <UL>
            <LI>
              <Strong>Social or single sign-on logins</Strong> (e.g., Google,
              Apple, LinkedIn): basic profile details that platform shares with
              us.
            </LI>
            <LI>
              <Strong>Stripe Identity:</Strong> identity verification results.
            </LI>
            <LI>
              <Strong>Stripe (payments):</Strong> confirmation of transactions
              and limited billing metadata.
            </LI>
            <LI>
              <Strong>Analytics partners:</Strong> aggregated or device-level
              data about how you reach and use the Service.
            </LI>
          </UL>

          <HR />

          <H2>3. How We Use Your Information</H2>
          <P>
            We use your information to: create and manage your account and
            profile; power co-founder matching, member discovery, and
            local-first recommendations; enable member-hosted events and vendor
            matching; verify members and issue badges; administer the referral
            program and determine and pay rewards; detect and prevent referral
            and other fraud; process payments, subscriptions, renewals, and
            refund requests; enable member-to-member messaging; keep the
            Service safe; provide support; send service-related and (where
            permitted) marketing communications you can opt out of; analyze and
            improve the Service; enforce our Terms; and comply with legal, tax,
            and regulatory obligations.
          </P>

          <HR />

          <H2>4. Identity Verification, Badges, and the Referral Program</H2>
          <P>
            <Strong>Identity verification.</Strong> We use{" "}
            <Strong>Stripe Identity</Strong> to verify member identities and
            issue verification badges. When you verify, your identity documents
            and related data are collected and processed by Stripe under its
            own privacy practices (https://stripe.com/privacy).{" "}
            <Strong>
              A verification badge confirms only that a specific, limited check
              was completed. It is not a guarantee of any member&apos;s
              identity, character, trustworthiness, qualifications, or
              intentions, and it is not an endorsement.
            </Strong>{" "}
            You remain responsible for your own diligence before entering any
            business, financial, or personal relationship with another member.
          </P>
          <P>
            <Strong>Referral program.</Strong> The referral program is available{" "}
            <Strong>only to paying members.</Strong> We process your referral
            code, the identities of members connected through it, and the
            subscription and payment status needed to determine whether a
            reward is earned, to calculate reward tiers, and to prevent abuse.
            Reward payouts may require sharing limited information with our
            payment provider and, where required by law, collecting tax
            information (e.g., a W-9 or W-8). Program rules are in our Terms of
            Service.
          </P>

          <HR />

          <H2>5. Legal Bases (Where Data-Protection Law Requires)</H2>
          <P>
            Where a comprehensive data-protection law applies to your use of
            the Service, we rely on these bases: <Strong>contract</Strong> (to
            provide the Service, subscriptions, and the referral program);{" "}
            <Strong>consent</Strong> (for precise location and certain
            marketing, withdrawable at any time);{" "}
            <Strong>legitimate interests</Strong> (to operate, secure, and
            improve the Service and prevent fraud); and{" "}
            <Strong>legal obligation</Strong> (including tax and anti-fraud
            requirements).
          </P>

          <HR />

          <H2>6. How We Share Information</H2>
          <UL>
            <LI>
              <Strong>With other members:</Strong> your profile, photos, and
              chosen content are visible to other members per your settings;
              messages, posts, event listings, and vendor inquiries are seen by
              the members you interact with.{" "}
              <Strong>
                Anything you share with another member is outside our control
                once shared.
              </Strong>
            </LI>
            <LI>
              <Strong>Event hosts:</Strong> your name and RSVP details when you
              attend their event.
            </LI>
            <LI>
              <Strong>Stripe:</Strong> for identity verification, payments, and
              referral payouts.
            </LI>
            <LI>
              <Strong>Service providers:</Strong> vendors who host, support,
              analyze, secure, or operate the Service on our behalf, under
              confidentiality and data-protection obligations.
            </LI>
            <LI>
              <Strong>Legal and safety:</Strong> to comply with law, respond to
              lawful requests, enforce our Terms, or protect Mesh, our members,
              or the public.
            </LI>
            <LI>
              <Strong>Business transfers:</Strong> in connection with a merger,
              acquisition, financing, or sale of assets.
            </LI>
          </UL>
          <P>
            <Strong>We do not sell your personal information for money.</Strong>{" "}
            However, we do <Strong>&ldquo;share&rdquo;</Strong> certain
            personal information (such as identifiers, device data, and usage
            activity) with advertising and analytics partners for{" "}
            <Strong>cross-context behavioral advertising</Strong> — meaning
            targeted advertising based on your activity across different sites
            and services. Under California law (CCPA/CPRA) and similar US state
            laws, this kind of &ldquo;sharing&rdquo; gives you the right to opt
            out. You can opt out at any time by using the{" "}
            <Strong>
              &ldquo;Do Not Sell or Share My Personal Information&rdquo;
            </Strong>{" "}
            link in the Service or by contacting{" "}
            <Email address="privacy@gomesh.app" />, and we honor recognized
            opt-out preference signals (such as Global Privacy Control) where
            required.
          </P>

          <HR />

          <H2>7. Cookies and Similar Technologies</H2>
          <P>
            We use cookies and similar technologies to operate the Service,
            remember preferences, keep you signed in, track referral
            attribution, and analyze usage. We also use{" "}
            <Strong>non-essential cookies and similar technologies</Strong> —
            including analytics and advertising cookies that support the
            cross-context behavioral advertising described in Section 6. Where
            required by law, we request your consent before setting
            non-essential cookies through a consent banner, and you can change
            your choices at any time. You can also manage cookies through your
            browser or device settings; blocking some cookies may affect how
            the Service works.
          </P>

          <HR />

          <H2>8. Your Privacy Rights</H2>
          <P>
            Depending on where you live (including under California&apos;s
            CCPA/CPRA and other US state privacy laws), you may have the right
            to access, correct, delete, or port your information; to opt out of
            marketing and of any &ldquo;sale&rdquo;/&ldquo;sharing&rdquo; or
            cross-context behavioral advertising (see the{" "}
            <Strong>
              &ldquo;Do Not Sell or Share My Personal Information&rdquo;
            </Strong>{" "}
            option described in Section 6); and to withdraw consent. To
            exercise a right, contact <Email address="privacy@gomesh.app" />.
            We will verify and respond within the time the law requires, and
            you will not be discriminated against for exercising your rights.
          </P>

          <HR />

          <H2>9. Data Retention</H2>
          <P>
            We keep your information only as long as needed for the purposes
            described in this Policy, then delete or anonymize it. Specifically:
          </P>
          <UL>
            <LI>
              <Strong>
                Account and profile data, messages, and other content:
              </Strong>{" "}
              kept while your account is active and deleted or anonymized
              within <Strong>90 days</Strong> after you close your account,
              except where we must retain it longer for a reason below.
            </LI>
            <LI>
              <Strong>Identity verification data (Stripe Identity):</Strong>{" "}
              retained while your account is active and deleted within{" "}
              <Strong>90 days</Strong> after account closure, unless we need it
              longer to investigate fraud, abuse, or a legal claim.
            </LI>
            <LI>
              <Strong>
                Payment, transaction, referral-payout, and tax records:
              </Strong>{" "}
              retained for <Strong>2,555 days (7 years)</Strong> to meet
              accounting, tax, and audit obligations that apply in most
              jurisdictions; some jurisdictions may require a longer period, in
              which case we follow the longer requirement.
            </LI>
            <LI>
              <Strong>Safety, fraud, and legal-hold records:</Strong> retained
              for as long as needed to resolve the matter, comply with law, or
              establish, exercise, or defend legal claims, and then deleted.
            </LI>
            <LI>
              <Strong>Backups:</Strong> residual copies in routine backups are
              overwritten on our normal backup cycle, generally within{" "}
              <Strong>90 days</Strong>.
            </LI>
          </UL>
          <P>
            Where information is retained beyond an active account, we limit
            access to it and use it only for the purpose that requires the
            retention.
          </P>

          <HR />

          <H2>10. Security</H2>
          <P>
            We use technical and organizational measures designed to protect
            your information. No system is perfectly secure, so we cannot
            guarantee absolute security. Use a strong password and keep your
            credentials confidential.
          </P>

          <HR />

          <H2>11. International Data Transfers</H2>
          <P>
            Mesh is operated from the United States, and your information is
            processed in the United States and by our service providers (such
            as Stripe), which may be located in other countries. If you access
            the Service from outside the United States, you understand that
            your information will be transferred to and processed in the United
            States and other countries that may have different data-protection
            laws than your own. Where required for transfers from the EEA, the
            UK, or other regions with cross-border transfer rules, we rely on
            appropriate safeguards such as the EU Standard Contractual Clauses
            (and the UK Addendum).
          </P>

          <HR />

          <H2>12. Children</H2>
          <P>
            The Service is intended only for individuals{" "}
            <Strong>18 years of age or older.</Strong> We do not knowingly
            collect information from anyone under 18 and will delete it if we
            learn we have.
          </P>

          <HR />

          <H2>13. Changes to This Policy</H2>
          <P>
            We may update this Policy. If we make material changes, we will
            notify you through the Service or by other reasonable means and
            update the &ldquo;Last Updated&rdquo; date. Continued use after
            changes take effect means you accept the updated Policy.
          </P>

          <HR />

          <H2>14. Contact Us</H2>
          <P>
            Privacy questions: <Email address="privacy@gomesh.app" />. General
            questions: <Email address="support@gomesh.app" />. Mailing address:{" "}
            <Strong>
              MGChufa LLC, 30 N Gould St, Ste R, Sheridan, WY 82801, USA.
            </Strong>
          </P>
        </div>
      </div>
    </section>
  );
}
