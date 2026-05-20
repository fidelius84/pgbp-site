import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Seo from "../components/Seo";
import { COMPANY, EMAIL } from "../config/constants";

export default function Blocked() {
  return (
    <>
      <Seo title="PGBP is not available in your region" description="PGBP is not currently available in your region." path="/blocked" noindex />

      <section className="relative min-h-screen flex flex-col">
        <div className="absolute inset-0 hero-grain opacity-50" aria-hidden />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-gold/[0.05] pointer-events-none hidden md:block" aria-hidden>
          <Logo className="h-[40rem] w-[40rem]" />
        </div>

        <div className="container-x relative z-10 py-20 flex-1">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-gold">
              <Logo className="h-8 w-8" />
              <span className="font-serif text-base font-bold tracking-wide">PEGGED GBP</span>
            </div>
            <h1 className="display-1 mt-12 animate-fade-in-up">PGBP is not available in your region.</h1>
            <p className="mt-6 text-lg text-gold font-serif italic animate-fade-in-up">You are accessing this site from a jurisdiction where Pegged GBP is not available.</p>
          </div>

          <div className="mt-16 max-w-3xl">
            <h2 className="display-4 text-gold">What's happening</h2>
            <p className="mt-3 text-white/80 leading-relaxed">We detected that you are accessing this site from a jurisdiction where PGBP is not offered. To act consistently with the laws and regulatory frameworks applicable to us, we restrict access from these jurisdictions to a small set of pages.</p>
            <p className="mt-3 text-white/80">This is not an error. It is a deliberate policy decision and is documented openly on our restricted-jurisdictions page.</p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-5 max-w-5xl">
            <BlockCard heading="See the full list" body="Read the restricted-jurisdictions list and the reasons each is included." to="/restricted" cta="View restricted list →" />
            <BlockCard heading="Read the Terms" body="The restriction is also reflected in our Terms of Use." to="/legal/terms" cta="View Terms →" />
            <BlockCard heading="Think this is in error?" body="Geographic detection is occasionally inaccurate. If you believe you are accessing this site from a non-restricted jurisdiction, contact us." href={`mailto:${EMAIL.compliance}?subject=Geo-block%20enquiry`} cta="Email compliance →" />
          </div>

          <div className="mt-16 max-w-3xl">
            <h2 className="display-4 text-gold">About Pegged GBP</h2>
            <p className="mt-3 text-white/80 leading-relaxed">Pegged GBP (PGBP) is a GBP-denominated ERC-20 token on Ethereum, issued by <strong>{COMPANY.legalName}</strong>, a UK-registered company. The token contract is publicly verifiable on Ethereum regardless of jurisdiction.</p>
            <p className="mt-3 text-white/80 leading-relaxed">The website you are currently viewing — including the whitepaper, transparency reports, and brand assets — is being shown to you in a restricted form. Editorial pages remain accessible. Operational interactions are not available from your jurisdiction.</p>
          </div>

          <div className="mt-16 text-xs text-white/50 italic max-w-3xl">
            <p>We do not recommend, and our Terms of Use prohibit, the use of virtual private networks or other tools to circumvent the restriction. Counterparty engagement is preceded by identity verification and sanctions screening; any subsequent operational engagement under a false jurisdiction declaration will not be honoured.</p>
          </div>
        </div>

        <footer className="relative border-t border-white/10 mt-12">
          <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-2">
            <p>© 2026 {COMPANY.legalName} — Company number {COMPANY.companyNo}</p>
            <div className="flex gap-4">
              <Link to="/restricted" className="hover:text-gold">Restricted jurisdictions</Link>
              <Link to="/legal/terms" className="hover:text-gold">Terms of Use</Link>
              <Link to="/legal/privacy" className="hover:text-gold">Privacy</Link>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

function BlockCard({ heading, body, to, href, cta }: { heading: string; body: string; to?: string; href?: string; cta: string }) {
  const inner = (
    <div className="h-full rounded-xl bg-white/5 border border-white/10 backdrop-blur p-6 hover:bg-white/10 hover:border-gold/40 transition">
      <h3 className="display-4 text-gold">{heading}</h3>
      <p className="mt-3 text-sm text-white/80 leading-relaxed">{body}</p>
      <p className="mt-4 text-gold text-sm font-medium">{cta}</p>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : <Link to={to || "#"}>{inner}</Link>;
}
