import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import TreasuryWidget from "../components/TreasuryWidget";
import AddressCopy from "../components/AddressCopy";
import { CONTRACT, TREASURY, ETHERSCAN, TAGLINE, MAX_SUPPLY_DISPLAY, STATUS } from "../config/constants";

export default function Home() {
  return (
    <>
      <Seo
        title="Pegged GBP (PGBP) — Stable Sterling, on-chain"
        description="Pegged GBP (PGBP) is a GBP-denominated ERC-20 token on Ethereum. Fixed maximum supply of 299,999,995. Immutable contract, source-verified, no admin keys. Designed for payments, OTC desks, settlement, and treasury use."
        path="/"
      />

      <Hero tall title={<>Stable Sterling,<br /><span className="text-gold">on-chain.</span></>}
        subtitle="A GBP-denominated ERC-20 token on Ethereum — designed for payments, OTC desks, settlement, and treasury use.">
        <div className="flex flex-wrap gap-3">
          <Link to="/token" className="btn-primary">View token details</Link>
          <Link to="/whitepaper" className="btn-secondary text-white border-white/40 hover:bg-white/10">Read the whitepaper</Link>
        </div>
      </Hero>

      {/* Trust band */}
      <section className="bg-white border-b border-slate-200">
        <div className="container-x py-8 grid gap-6 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted font-medium">Contract</p>
            <p className="address mt-1 text-ink">{CONTRACT.slice(0, 8)}…{CONTRACT.slice(-6)}</p>
            <a href={ETHERSCAN.token} target="_blank" rel="noopener noreferrer" className="text-xs text-teal hover:underline">Verify ↗</a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted font-medium">Treasury</p>
            <p className="address mt-1 text-ink">{TREASURY.slice(0, 8)}…{TREASURY.slice(-6)}</p>
            <a href={ETHERSCAN.treasury} target="_blank" rel="noopener noreferrer" className="text-xs text-teal hover:underline">Verify ↗</a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted font-medium">Network</p>
            <p className="mt-1 text-ink font-medium">Ethereum mainnet</p>
            <p className="text-xs text-muted">ERC-20 · Chain 1</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted font-medium">Max supply</p>
            <p className="mt-1 text-ink font-medium font-serif text-lg">{MAX_SUPPLY_DISPLAY}</p>
            <p className="text-xs text-muted">PGBP · fixed forever</p>
          </div>
        </div>
        <div className="container-x pb-5 text-center text-xs text-muted tracking-wide">
          Source-verified · Immutable · No admin keys · Mint disabled · Burn enabled · No pause · No blacklist
        </div>
      </section>

      {/* Three pillars */}
      <section className="section">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-gold font-medium">Why PGBP</p>
            <h2 className="display-2 text-teal mt-3">Built for trust, by construction.</h2>
            <p className="mt-4 text-lg text-ink/70">Sterling on-chain, with the trust properties baked into the contract — not promised on a website.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Pillar number="01" title="Provably honest contract"
              body="Immutable. Source-verified. No admin keys, no pause function, no blacklist. Mint disabled, burn enabled. Fixed maximum supply of 299,999,995 PGBP."/>
            <Pillar number="02" title="Designed for digital sterling"
              body="Built to represent GBP-denominated value on-chain. Intended for payments, OTC desks, settlement, merchants, and cross-border GBP use."/>
            <Pillar number="03" title="Transparent by design"
              body="Treasury wallet publicly disclosed. Quarterly transparency reports, with each PDF's hash recorded on-chain."/>
          </div>
        </div>
      </section>

      {/* How it works preview */}
      <section className="section bg-cream/30">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-widest text-gold font-medium">How PGBP works</p>
              <h2 className="display-2 text-teal mt-3">Pre-minted. Released against GBP. Burn equals redemption.</h2>
            </div>
            <Link to="/how-it-works" className="btn-ghost text-teal">See the full model →</Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Step n="01" title="The supply is fixed.">All 299,999,995 PGBP were minted once, in February 2025, into a publicly disclosed treasury wallet. No new PGBP can ever be created.</Step>
            <Step n="02" title="Tokens enter circulation against GBP.">As reserve and redemption infrastructure comes online, PGBP is released from treasury and circulated against deposited GBP.</Step>
            <Step n="03" title="Burn means redemption.">When PGBP is returned, it is permanently destroyed using the contract's burn function — verifiable on-chain.</Step>
          </div>
        </div>
      </section>

      {/* Live treasury widget */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-widest text-gold font-medium">Live state</p>
              <h2 className="display-2 text-teal mt-3">Every PGBP, accounted for.</h2>
              <p className="mt-4 text-ink/70">Pulled live from Ethereum at page load. Verifiable directly on Etherscan.</p>
            </div>
            <Link to="/transparency" className="btn-ghost text-teal">View transparency →</Link>
          </div>
          <TreasuryWidget />
        </div>
      </section>

      {/* Transparency snippet */}
      <section className="section bg-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-grain opacity-40" aria-hidden />
        <div className="container-x relative">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-gold font-medium">Transparency reports</p>
              <h2 className="display-2 mt-3">Hash-anchored. <br/>Quarter on quarter.</h2>
              <p className="mt-6 text-white/80">
                Quarterly transparency reports begin in {STATUS.firstReportPlanned}. Each report covers reserves, supply state, treasury activity, and burns. Every PDF's SHA-256 hash is published on-chain for independent verification.
              </p>
              <div className="mt-8">
                <Link to="/transparency" className="btn-primary">View transparency →</Link>
              </div>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-gold font-medium">Current status</p>
              <p className="mt-3 font-serif text-2xl">Pre-operational</p>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {STATUS.statusText}
              </p>
              <p className="mt-4 text-xs text-white/60">Inaugural report: {STATUS.firstReportPlanned}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Pillar({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="card card-hover">
      <p className="font-serif text-gold text-3xl">{number}</p>
      <h3 className="display-4 text-teal mt-3">{title}</h3>
      <p className="mt-3 text-sm text-ink/70 leading-relaxed">{body}</p>
    </div>
  );
}

function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-gold pl-5">
      <p className="font-serif text-gold text-sm tracking-widest">{n}</p>
      <h3 className="display-4 text-teal mt-2">{title}</h3>
      <p className="mt-3 text-sm text-ink/70 leading-relaxed">{children}</p>
    </div>
  );
}
