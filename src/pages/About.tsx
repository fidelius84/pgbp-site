import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import { COMPANY, EMAIL } from "../config/constants";

const roadmap = [
  { phase: "Token deployment", status: "Complete (Feb 2025)", state: "complete", body: "ERC-20 contract live on Ethereum mainnet. Source-verified. Immutable. Fixed supply minted into a publicly disclosed treasury wallet." },
  { phase: "Brand & public launch", status: "In progress (2026)", state: "progress", body: "Website, transparency framework, brand identity, community channels, listing applications." },
  { phase: "First transparency report", status: "Scheduled (Q3 2026)", state: "progress", body: "Inaugural quarterly transparency report published, with PDF hash recorded on-chain." },
  { phase: "Banking & reserves", status: "Planned", state: "planned", body: "Establish UK banking partnership and segregated GBP reserves. Begin attestation cadence." },
  { phase: "Redemption operational", status: "Planned", state: "planned", body: "Live redemption process for professional and B2B counterparties; OTC channels." },
  { phase: "Regulatory positioning", status: "Planned", state: "planned", body: "Engagement with UK financial services counsel; authorisation strategy aligned with the incoming UK stablecoin regime." },
  { phase: "Broader market access", status: "Planned", state: "planned", body: "DEX liquidity, CEX listings, wallet integrations, payment partnerships." },
];

export default function About() {
  return (
    <>
      <Seo title="About PGBP — A GBP-denominated stablecoin on Ethereum"
        description="Pegged GBP is a GBP-denominated ERC-20 token issued by PGBP PAYMENTS LTD, designed to represent digital sterling on-chain. Read about the project, the issuer, and the roadmap."
        path="/about" />

      <Hero title="About Pegged GBP" subtitle="A GBP-denominated ERC-20 token on Ethereum, issued by a UK-registered company." />

      <section className="section">
        <div className="container-x max-w-4xl space-y-16">

          <div>
            <h2 className="display-3 text-teal">What is PGBP</h2>
            <p className="mt-4 text-lg text-ink/80 leading-relaxed">
              Pegged GBP (PGBP) is a GBP-denominated ERC-20 token issued on the Ethereum blockchain by PGBP PAYMENTS LTD, a UK-registered company. It is designed to represent digital sterling on-chain — a stable, GBP-denominated unit usable for payments, OTC settlement, treasury operations, and cross-border value transfer. The smart contract is immutable, source-verified, and has a fixed maximum supply of 299,999,995 PGBP that can never be increased.
            </p>
          </div>

          <div>
            <h2 className="display-3 text-teal">Why PGBP exists</h2>
            <p className="mt-4 text-ink/80 leading-relaxed">
              The stablecoin market is dominated by US dollar-denominated tokens. While the dollar has several credible options on-chain — USDC, USDT, PYUSD — sterling has remained largely underserved. For UK businesses, OTC desks, fintechs, and any entity that needs to denominate value in GBP on Ethereum, there has been no obvious choice.
            </p>
            <p className="mt-4 text-ink/80 leading-relaxed">
              PGBP exists to fill that gap. A GBP-denominated unit on Ethereum, designed to serve the same jobs USDC fills in dollars: payments, OTC settlement, treasury operations, cross-border value transfer, and on-chain GBP rails for Web3 projects.
            </p>
          </div>

          <div>
            <h2 className="display-3 text-teal">Who issues PGBP</h2>
            <p className="mt-4 text-ink/80 leading-relaxed">
              PGBP is issued by <strong>{COMPANY.legalName}</strong>, a private limited company registered in England and Wales.
            </p>
            <div className="mt-6 rounded-xl border-l-4 border-gold bg-cream/50 p-6 md:p-8">
              <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <Row label="Legal name" value={COMPANY.legalName} />
                <Row label="Company number" value={COMPANY.companyNo} />
                <Row label="Jurisdiction" value={COMPANY.jurisdiction} />
                <Row label="Registered office" value={COMPANY.registeredOffice} />
                <Row label="Contact" value={<a href={`mailto:${EMAIL.info}`} className="text-teal hover:underline">{EMAIL.info}</a>} />
                <Row label="Companies House" value={<a href={COMPANY.companiesHouseUrl} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Public record ↗</a>} />
              </dl>
            </div>
            <p className="mt-6 text-ink/80 leading-relaxed">
              The company is <strong>not currently authorised by the Financial Conduct Authority</strong>. PGBP is in the early phase of building out the operational infrastructure — banking, segregated reserves, redemption channels, and regulatory positioning — required to operate as a fully-backed, redeemable stablecoin. Until that infrastructure is in place, the project's public claims and language remain deliberately conservative.
            </p>
            <p className="mt-4 text-ink/80 italic">We believe building trust transparently is more durable than claiming readiness before it is real.</p>
          </div>

          <div>
            <h2 className="display-3 text-teal">Roadmap</h2>
            <p className="mt-4 text-ink/70">A phased, honest path from token-deployed to fully operational sterling stablecoin.</p>
            <ol className="mt-8 relative border-l-2 border-slate-200 ml-2 space-y-8">
              {roadmap.map((r) => (
                <li key={r.phase} className="pl-8 relative">
                  <span className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-white ring-2 ${r.state === "complete" ? "bg-emerald-500 ring-emerald-500" : r.state === "progress" ? "bg-gold ring-gold" : "bg-slate-300 ring-slate-300"}`} />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h3 className="font-serif text-lg text-teal">{r.phase}</h3>
                    <span className={`text-xs uppercase tracking-widest font-medium ${r.state === "complete" ? "text-emerald-600" : r.state === "progress" ? "text-gold-600" : "text-muted"}`}>{r.status}</span>
                  </div>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed">{r.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-muted italic">Dates beyond scheduled items are sequenced rather than calendarised. We will publish updates as each phase reaches activation.</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-6">
            <Link to="/token" className="btn-primary">View token details</Link>
            <Link to="/whitepaper" className="btn-secondary text-teal">Read the whitepaper</Link>
            <Link to="/contact" className="btn-ghost text-teal">Contact us →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-muted font-medium">{label}</dt>
      <dd className="mt-1 text-ink">{value}</dd>
    </div>
  );
}
