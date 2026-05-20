import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import SupplyDiagram from "../components/SupplyDiagram";
import { STATUS } from "../config/constants";

export default function HowItWorks() {
  return (
    <>
      <Seo title="How PGBP works — Pre-minted treasury, controlled release, burn equals redemption"
        description="PGBP uses a pre-minted treasury model: 299,999,995 tokens minted once, released into circulation against received GBP, and permanently burned on redemption."
        path="/how-it-works" />
      <Hero title="How PGBP works" subtitle="Pre-minted treasury. Controlled release. Burn means redemption." />

      <section className="section">
        <div className="container-x max-w-5xl space-y-16">

          <div>
            <h2 className="display-3 text-teal">The model</h2>
            <p className="mt-4 text-lg text-ink/80 leading-relaxed">
              The entire PGBP supply of <strong>299,999,995 tokens</strong> was minted once, at deployment, into a publicly disclosed treasury wallet. The smart contract <strong>cannot ever mint additional tokens</strong>. As reserve and redemption infrastructure becomes operational, PGBP is released from the treasury wallet into circulation against received GBP, on a one-to-one basis. When PGBP is returned to the issuer, it is permanently destroyed using the contract's burn function. The supply, once minted, can only decrease.
            </p>
          </div>

          <div>
            <h2 className="display-3 text-teal">Why fixed supply and no mint</h2>
            <p className="mt-4 text-ink/80 leading-relaxed">
              Most stablecoins mint new tokens whenever new fiat is deposited and burn tokens when fiat is redeemed. That model works, but it places significant trust in the issuer not to mint tokens that aren't backed.
            </p>
            <p className="mt-4 text-ink/80 leading-relaxed">
              PGBP takes a different approach. The full supply is minted once, at deployment, and the mint function is then permanently disabled in the contract code. <strong>No party — not the issuer, not a future administrator, not a multi-sig of any kind — can ever create new PGBP.</strong> This puts a hard, on-chain ceiling on the supply, removing one of the categories of risk that has historically affected stablecoins.
            </p>
            <p className="mt-4 text-ink/80 leading-relaxed">
              The trade-off: PGBP cannot expand beyond 299,999,995. If demand exceeds that cap, that is a constraint we accept in exchange for the trust guarantees the fixed-supply model provides.
            </p>
          </div>

          <div>
            <h2 className="display-3 text-teal">Where every PGBP is, at all times</h2>
            <p className="mt-4 text-ink/70">Every PGBP token is always in exactly one of three states.</p>
            <div className="mt-8">
              <SupplyDiagram />
            </div>
          </div>

          <div>
            <h2 className="display-3 text-teal">How tokens enter circulation</h2>
            <p className="mt-4 text-ink/80">PGBP is not minted against new deposits. It is <strong>released from the treasury</strong> against new deposits.</p>
            <div className="mt-8 space-y-6">
              <Step n="01" title="Counterparty deposits GBP.">A verified counterparty deposits GBP with the issuer, into a segregated reserve account.</Step>
              <Step n="02" title="Issuer transfers PGBP from treasury.">The issuer transfers the equivalent amount of PGBP, on a one-to-one basis, from the treasury wallet to the counterparty's wallet. This transfer is visible on-chain.</Step>
              <Step n="03" title="PGBP is now in circulation.">The counterparty holds PGBP. The issuer holds the GBP in segregated reserve. Both balances have increased by the same amount.</Step>
            </div>
            <p className="mt-6 text-sm text-muted italic">This process is currently being established. See <Link to="/about" className="text-teal hover:underline">Roadmap</Link> and <Link to="/redemption" className="text-teal hover:underline">Redemption</Link>.</p>
          </div>

          <div>
            <h2 className="display-3 text-teal">How tokens leave circulation</h2>
            <p className="mt-4 text-ink/80">Redemption is performed by <strong>burning</strong> PGBP — sending it to a designated burn process where it is permanently destroyed.</p>
            <div className="mt-8 space-y-6">
              <Step n="01" title="Counterparty returns PGBP.">A verified counterparty sends PGBP to the issuer's redemption wallet.</Step>
              <Step n="02" title="PGBP is burned.">The issuer burns the received PGBP using the contract's burn function. The transaction is visible on-chain. The total supply decreases.</Step>
              <Step n="03" title="GBP is released from reserve.">The issuer transfers the equivalent GBP from segregated reserve back to the counterparty.</Step>
            </div>
            <div className="mt-8 rounded-xl border-l-4 border-l-teal bg-teal/5 p-6">
              <p className="text-sm text-ink/80">
                The contract's burn function has already been demonstrated on-chain: <strong>5 PGBP were burned at deployment</strong> as a deliberate test, reducing the maximum supply from 300,000,000 to its permanent maximum of 299,999,995.
              </p>
            </div>
          </div>

          <div>
            <h2 className="display-3 text-teal">Reserve commitment</h2>
            <p className="mt-4 text-ink/80 leading-relaxed">
              The issuer's commitment is that <strong>circulating PGBP is always matched, one-to-one, by GBP held in segregated reserves</strong>. Reserves are held in cash and short-dated, high-quality liquid assets at a UK bank or equivalent institution.
            </p>
            <p className="mt-4 text-ink/80 leading-relaxed">
              Reserves are reported quarterly in the transparency report, with the PDF's SHA-256 hash recorded on-chain for independent verification. See <Link to="/transparency" className="text-teal hover:underline">Transparency</Link>.
            </p>
            <div className="mt-6 rounded-xl border-l-4 border-l-gold bg-cream/50 p-6">
              <p className="text-xs uppercase tracking-widest text-muted font-medium">Current operational status — May 2026</p>
              <p className="mt-2 text-ink/80 text-sm">
                Banking, reserves, and redemption operations are in the establishment phase. PGBP is not yet being released into circulation. The first transparency report will be published in {STATUS.firstReportPlanned} and will reflect the operational state at that time.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-6">
            <Link to="/transparency" className="btn-primary">Transparency reports</Link>
            <Link to="/redemption" className="btn-secondary text-teal">Redemption process</Link>
            <Link to="/risks" className="btn-ghost text-teal">Risk disclosures →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5">
      <div className="font-serif text-gold text-3xl w-12 shrink-0">{n}</div>
      <div className="flex-1">
        <h3 className="display-4 text-teal">{title}</h3>
        <p className="mt-2 text-ink/70 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
