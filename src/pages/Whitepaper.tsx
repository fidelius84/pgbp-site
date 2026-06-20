import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import HashVerifier from "../components/HashVerifier";
import { WHITEPAPER, EMAIL } from "../config/constants";

const sections = [
  { n: 1, t: "Executive summary", d: "One-page overview of the project, the design, the current state, and the roadmap." },
  { n: 2, t: "Background and motivation", d: "The stablecoin landscape, the sterling-denominated gap, and the design philosophy." },
  { n: 3, t: "Token design", d: "ERC-20 specification, immutability, contract properties, deployment details, fixed-supply rationale." },
  { n: 4, t: "Issuance model", d: "Pre-minted treasury, controlled release, the relationship between maximum supply, treasury balance, and circulating supply." },
  { n: 5, t: "Reserve policy and custody", d: "Reserve composition, custody arrangements, segregation, ratio commitments." },
  { n: 6, t: "Redemption model", d: "Burn-equals-redemption mechanics, counterparty eligibility, KYC/AML, restricted jurisdictions." },
  { n: 7, t: "Transparency framework", d: "Quarterly report structure, attestation, the on-chain hash recording mechanism." },
  { n: 8, t: "Governance and the issuer", d: "Corporate structure of PGBP PAYMENTS LTD, operational model, decision-making." },
  { n: 9, t: "Compliance and regulatory position", d: "UK regulatory landscape, the project's positioning, the path to authorisation." },
  { n: 10, t: "Risk factors", d: "Cryptoasset volatility, smart contract risk, reserve risk, counterparty risk, regulatory risk." },
  { n: 11, t: "Roadmap", d: "Phased operational milestones, dependencies, current status." },
  { n: 12, t: "Appendices", d: "Contract addresses, ABI references, glossary, document version history." },
];

export default function Whitepaper() {
  return (
    <>
      <Seo title="Whitepaper — Pegged GBP (PGBP)"
        description="The Pegged GBP whitepaper: technical design, issuance model, reserve policy, redemption, transparency framework, and roadmap."
        path="/whitepaper" />
      <Hero title="Whitepaper" subtitle="The technical and operational description of Pegged GBP — design, model, reserve policy, and roadmap." />

      <section className="section">
        <div className="container-x max-w-5xl space-y-16">

          {/* Inline summary */}
          <div>
            <h2 className="display-3 text-teal">What this whitepaper is about</h2>
            <div className="mt-6 space-y-4 text-ink/80 leading-relaxed">
              <p>Pegged GBP (PGBP) is a GBP-denominated ERC-20 token on Ethereum, issued by PGBP PAYMENTS LTD, a UK-registered company. The contract is immutable, source-verified, with no admin keys, no pause function, and no blacklist function. The maximum supply of 299,999,995 PGBP was minted once at deployment and cannot be increased; minting is permanently disabled and the burn function is enabled. The supply can only ever decrease.</p>
              <p>The project's central design choice is to separate token deployment from operational readiness. The token exists on-chain, with all of its trust-relevant properties verifiable today. The reserve, banking, redemption, and regulatory infrastructure required to operate PGBP as a fully-backed, redeemable sterling stablecoin is being built in parallel, in the open. This whitepaper documents both: the technical state that exists today, and the operational model PGBP is designed to support once that infrastructure is live.</p>
              <p>The whitepaper covers the contract architecture, the pre-minted treasury issuance model, the reserve and custody policy, the burn-equals-redemption mechanism, the quarterly transparency framework with on-chain hash recording, the issuer's corporate position, the relevant UK regulatory considerations, and the risks.</p>
            </div>
          </div>

          {/* Download CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-teal to-teal-700 text-white p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 hero-grain opacity-30" aria-hidden />
            <div className="relative">
              <p className="text-xs uppercase tracking-widest text-gold font-medium">Download</p>
              <h3 className="mt-2 display-2">Read the whitepaper.</h3>
              <p className="mt-4 text-white/80 max-w-2xl">19 pages, A4, PDF. Branded cover. Hash-anchored.</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={WHITEPAPER.url} target="_blank" rel="noopener noreferrer" download className="btn-primary text-lg">
                  Download PDF ↓
                </a>
                <div className="text-sm">
                  <p className="text-white/80">Version {WHITEPAPER.version} · {WHITEPAPER.publishedDate}</p>
                  <p className="font-mono text-xs text-gold/90 mt-1 break-all">SHA-256: {WHITEPAPER.sha256}</p>
                </div>
              </div>
              <p className="mt-6 text-xs text-white/60">
                The PDF's SHA-256 hash is recorded on-chain.{" "}
                <Link to="/transparency#on-chain-verification" className="underline hover:text-gold">How verification works</Link>.
              </p>
            </div>
          </div>

          {/* What's inside */}
          <div>
            <h2 className="display-3 text-teal">What's inside</h2>
            <p className="mt-4 text-ink/70">A summary of the whitepaper's structure. Each section is approximately 1–3 pages.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {sections.map((s) => (
                <div key={s.n} className="rounded-md border border-slate-200 p-4 hover:border-gold transition">
                  <p className="font-serif text-gold text-sm tracking-widest">SECTION {s.n}</p>
                  <h4 className="mt-1 font-medium text-teal">{s.t}</h4>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verifier */}
          <div>
            <h2 className="display-3 text-teal">Verify your copy</h2>
            <p className="mt-4 text-ink/70">Already downloaded the PDF? Verify it's the unaltered original.</p>
            <div className="mt-6"><HashVerifier /></div>
          </div>

          {/* Versions */}
          <div>
            <h2 className="display-3 text-teal">Versions</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-slate-200">
                  <tr className="text-left text-xs uppercase tracking-widest text-muted">
                    <th className="pb-3 pr-4">Version</th><th className="pb-3 pr-4">Date</th><th className="pb-3 pr-4">Notes</th><th className="pb-3 pr-4">PDF</th><th className="pb-3">SHA-256</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 pr-4 font-medium text-teal">{WHITEPAPER.version}</td>
                    <td className="py-3 pr-4 text-ink/70">{WHITEPAPER.publishedDate}</td>
                    <td className="py-3 pr-4 text-ink/70">Initial publication</td>
                    <td className="py-3 pr-4"><a href={WHITEPAPER.url} className="text-teal hover:underline">Download ↓</a></td>
                    <td className="py-3 font-mono text-xs text-ink/60 break-all">{WHITEPAPER.sha256.slice(0,8)}…{WHITEPAPER.sha256.slice(-6)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted italic">
              When the whitepaper is updated, the previous version remains available here. The current version is always the topmost row.
            </p>
          </div>

          {/* For listing reviewers */}
          <div>
            <h2 className="display-3 text-teal">For listing reviewers, partners, and counterparties</h2>
            <p className="mt-4 text-ink/80 leading-relaxed">
              The whitepaper is the primary technical reference for due diligence. If you are a listing platform, wallet integrator, OTC desk, or potential counterparty, the whitepaper plus the <Link to="/token" className="text-teal hover:underline">Token details</Link> and <Link to="/transparency" className="text-teal hover:underline">Transparency</Link> pages should answer most factual questions.
            </p>
            <p className="mt-4 text-ink/80">For specific questions not covered, contact <a href={`mailto:${EMAIL.compliance}`} className="text-teal hover:underline">{EMAIL.compliance}</a>.</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-6">
            <Link to="/token" className="btn-primary">Token details</Link>
            <Link to="/transparency" className="btn-secondary text-teal">Transparency</Link>
          </div>
        </div>
      </section>
    </>
  );
}
