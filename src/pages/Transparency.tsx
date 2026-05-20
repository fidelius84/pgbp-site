import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import TreasuryWidget from "../components/TreasuryWidget";
import HashVerifier from "../components/HashVerifier";
import StatusBand from "../components/StatusBand";
import { STATUS, ETHERSCAN, TREASURY } from "../config/constants";

export default function Transparency() {
  return (
    <>
      <Seo title="Transparency reports — PGBP reserves, supply, and verification"
        description="Quarterly transparency reports for Pegged GBP. Reserve policy, supply state, attestation methodology, and on-chain hash recording for independent verification."
        path="/transparency" />
      <Hero title="Transparency" subtitle="Reserves, supply, and the verification of both — published quarterly, recorded on-chain." />

      <section className="section">
        <div className="container-x max-w-5xl space-y-16">

          <StatusBand
            status="Pre-operational"
            body={`${STATUS.statusText} Inaugural quarterly transparency report scheduled ${STATUS.firstReportPlanned}.`}
          />

          <p className="text-sm text-muted italic max-w-3xl">
            This page will be updated as banking, reserves, and circulation come online. The honest current state is published here, regardless of phase.
          </p>

          {/* Reserve policy */}
          <div>
            <h2 className="display-3 text-teal">Reserve policy</h2>
            <p className="mt-4 text-ink/80 leading-relaxed">
              Every PGBP in circulation will be matched, one-to-one, by GBP held in segregated reserves with a UK bank or equivalent regulated institution. Reserves will be held in cash and short-dated, high-quality liquid assets (such as UK Treasury bills) selected for capital preservation and liquidity, not yield.
            </p>
            <p className="mt-4 text-ink/80 leading-relaxed">
              Reserves will be held in accounts that are designated for the benefit of redemption, and segregated from the issuer's operational funds. The exact custodial arrangements will be disclosed in each transparency report once banking is operational.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead className="border-b border-slate-200">
                  <tr className="text-left text-xs uppercase tracking-widest text-muted">
                    <th className="pb-3 pr-4">Reserve component</th><th className="pb-3 pr-4">Eligible</th><th className="pb-3">Not eligible</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <Row label="Cash" eligible="GBP deposits at UK-regulated banks or EMIs" not="Crypto holdings, lending, staking" />
                  <Row label="Short-dated HQLA" eligible="UK Treasury bills, AAA-rated short-dated government instruments" not="Long-duration bonds, equities, structured products" />
                  <Row label="Custody" eligible="UK-regulated banks; segregated account designation" not="Issuer operating accounts; mixed accounts" />
                  <Row label="Counterparty diversification" eligible="Reviewed and disclosed quarterly" not="Concentration above policy limits" />
                </tbody>
              </table>
            </div>
          </div>

          {/* What each report contains */}
          <div>
            <h2 className="display-3 text-teal">What each report contains</h2>
            <p className="mt-4 text-ink/80">Each quarterly transparency report is a PDF published on this page. The hash of every PDF is recorded on-chain so that any party can independently verify the file they hold.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-ink/80">
              {[
                "Reporting period — calendar quarter covered",
                "Issuer details — confirmation of corporate state",
                "Token supply state — max supply, treasury, circulating, burned",
                "Reserve summary — totals, composition, custodians, ratio",
                "Treasury wallet activity — material transfers",
                "Burn events — all burns with transaction hashes",
                "Bank and custody status — current partners",
                "Management statement — signed by PGBP PAYMENTS LTD",
                "Independent attestation — once engaged",
                "On-chain hash record — Ethereum transaction hash",
              ].map((s, i) => <li key={i} className="flex gap-2"><span className="text-gold">•</span><span>{s}</span></li>)}
            </ul>
          </div>

          {/* On-chain verification */}
          <div id="on-chain-verification">
            <h2 className="display-3 text-teal">On-chain verification</h2>
            <p className="mt-4 text-ink/80">
              Every transparency report PDF, once finalised, has its SHA-256 hash recorded on Ethereum. This is the project's commitment to verifiable transparency: anyone holding the PDF can confirm it is the exact, unaltered file the issuer published.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-teal text-white p-6">
                <h3 className="display-4 text-gold">How the hash is recorded</h3>
                <ol className="mt-4 space-y-2 text-sm text-white/80 list-decimal list-inside">
                  <li>PDF is finalised and published on this page.</li>
                  <li>The PDF's SHA-256 hash is computed.</li>
                  <li>A small transaction is sent from a designated publication wallet, with the SHA-256 in the data field.</li>
                  <li>The transaction hash is published alongside the PDF here.</li>
                </ol>
              </div>
              <div className="rounded-xl bg-cream/50 border-l-4 border-l-gold p-6">
                <h3 className="display-4 text-teal">How to verify a report</h3>
                <ol className="mt-4 space-y-2 text-sm text-ink/80 list-decimal list-inside">
                  <li>Download the PDF.</li>
                  <li>Compute SHA-256 locally: <code className="text-xs bg-white/60 px-1 rounded">shasum -a 256 report.pdf</code></li>
                  <li>Open the on-chain transaction on Etherscan.</li>
                  <li>Decode the input data — must match your hash.</li>
                </ol>
              </div>
            </div>

            <div className="mt-8">
              <HashVerifier />
            </div>
          </div>

          {/* Reports table */}
          <div>
            <h2 className="display-3 text-teal">Reports</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-slate-200">
                  <tr className="text-left text-xs uppercase tracking-widest text-muted">
                    <th className="pb-3 pr-4">Report</th><th className="pb-3 pr-4">Period</th><th className="pb-3 pr-4">Status</th><th className="pb-3">PDF</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <ReportRow report="Q3 2026" period="1 Jul – 30 Sep 2026" status="Scheduled" highlight />
                  <ReportRow report="Q4 2026" period="1 Oct – 31 Dec 2026" status="Planned" />
                  <ReportRow report="Q1 2027" period="1 Jan – 31 Mar 2027" status="Planned" />
                </tbody>
              </table>
            </div>
          </div>

          {/* Treasury live */}
          <div>
            <h2 className="display-3 text-teal">Treasury wallet — live</h2>
            <p className="mt-4 text-ink/80">Live data, pulled at page load. For independent verification, view the address directly on Etherscan.</p>
            <div className="mt-6">
              <TreasuryWidget />
            </div>
            <p className="mt-4 text-sm text-muted">
              Treasury address: <a href={ETHERSCAN.treasury} target="_blank" rel="noopener noreferrer" className="font-mono text-teal hover:underline">{TREASURY}</a>
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-6">
            <Link to="/token" className="btn-primary">Token details</Link>
            <Link to="/redemption" className="btn-secondary text-teal">Redemption process</Link>
            <Link to="/risks" className="btn-ghost text-teal">Risk disclosures →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ label, eligible, not }: { label: string; eligible: string; not: string }) {
  return (
    <tr>
      <td className="py-3 pr-4 font-medium text-teal align-top">{label}</td>
      <td className="py-3 pr-4 text-emerald-700 align-top">{eligible}</td>
      <td className="py-3 text-rose-700 align-top">{not}</td>
    </tr>
  );
}

function ReportRow({ report, period, status, highlight }: { report: string; period: string; status: string; highlight?: boolean }) {
  return (
    <tr className={highlight ? "bg-cream/30" : ""}>
      <td className="py-3 pr-4 font-medium text-teal">{report}</td>
      <td className="py-3 pr-4 text-ink/70">{period}</td>
      <td className="py-3 pr-4">
        <span className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium ${highlight ? "text-gold-600" : "text-muted"}`}>
          {highlight && <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />}
          {status}
        </span>
      </td>
      <td className="py-3 text-muted text-sm">—</td>
    </tr>
  );
}
