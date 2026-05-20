import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import { EMAIL } from "../config/constants";

const risks = [
  { n: 1, t: "Cryptoasset volatility", b: "Cryptoassets are volatile and may be subject to extreme price movements, loss of value, and lack of liquidity. While PGBP is designed to track GBP at par, no design can guarantee that the market price of PGBP on any venue at any moment will equal one pound sterling." },
  { n: 2, t: "Smart contract risk", b: "The PGBP smart contract is immutable. While this is a deliberate design decision providing certain trust guarantees, it also means any defect or bug discovered in the contract cannot be fixed. The contract has been source-verified and subject to internal review, but no review can guarantee the absence of defects." },
  { n: 3, t: "Reserve risk", b: "Once operational, the GBP reserve backing circulating PGBP will be held at one or more UK-regulated banking institutions. These institutions are themselves exposed to credit risk, operational risk, and the risk of failure. The reserve policy is designed to mitigate concentration and asset-quality risk, but cannot eliminate it." },
  { n: 4, t: "Issuer risk", b: "PGBP PAYMENTS LTD is a single-issuer entity. Its insolvency, restructuring, or operational failure would directly affect redemption and the management of reserves. While segregation arrangements are intended to protect reserves in such an event, the legal and operational process of realising segregation in distress is not instantaneous." },
  { n: 5, t: "Regulatory risk", b: "The UK regulatory framework applicable to fiat-pegged stablecoins is in development. Changes to the framework, its timing, or decisions by the FCA, PRA, or HM Treasury could materially affect PGBP." },
  { n: 6, t: "Liquidity risk", b: "PGBP is not yet listed on any exchange at the date of writing. Liquidity for PGBP will be a function of operational launches, market-making arrangements, and listing decisions by third-party venues. There is no assurance PGBP will achieve material liquidity in any particular venue or timeframe." },
  { n: 7, t: "Sanctions and compliance risk", b: "The contract design (no blacklist, no pause function) means on-chain enforcement of restrictions is not available to the issuer. Compliance with sanctions and restricted-jurisdictions policy operates exclusively at the issuance and redemption boundaries." },
  { n: 8, t: "No consumer protection", b: "PGBP is not protected by the UK Financial Services Compensation Scheme, the UK Investor Protection Scheme, or any equivalent compensation or insurance scheme in any other jurisdiction. There is no statutory recourse to deposit insurance or compensation funds for PGBP holders in the event of issuer failure." },
  { n: 9, t: "Operational risk", b: "The operation of PGBP depends on processes operated by PGBP PAYMENTS LTD and third-party service providers. Process failure, key-management failure, error, or fraud at the issuer or a service provider could disrupt operations or cause loss." },
  { n: 10, t: "Technology risk", b: "Ethereum itself, the wallets used to hold PGBP, and the infrastructure used to monitor and verify the project are technologies that may fail, be compromised, or be disrupted." },
];

export default function Risks() {
  return (
    <>
      <Seo title="Risk disclosures — Pegged GBP (PGBP)"
        description="The principal risks associated with Pegged GBP: cryptoasset volatility, smart contract risk, reserve risk, regulatory risk, and consumer protection limitations."
        path="/risks" />
      <Hero title="Risk disclosures" subtitle="What can go wrong, in plain English." />

      <section className="section">
        <div className="container-x max-w-4xl space-y-12">

          <div className="rounded-xl border-l-4 border-l-gold bg-cream/50 p-6 md:p-8 space-y-3">
            <p className="display-4 text-teal">Important — read first</p>
            <p className="text-ink/80 leading-relaxed"><strong>PGBP is a cryptoasset.</strong> The value of cryptoassets can be volatile and may go down as well as up. Cryptoassets are not legal tender, are not deposits, and are not protected by the Financial Services Compensation Scheme or any equivalent consumer protection scheme. PGBP is not currently regulated by the Financial Conduct Authority.</p>
            <p className="text-ink/80 leading-relaxed"><strong>PGBP is not suitable for everyone.</strong> You should not engage with PGBP if you do not understand the risks. You may lose all of the value you commit to PGBP. There is no compensation scheme or government guarantee that protects you against loss.</p>
            <p className="text-ink/80 leading-relaxed"><strong>PGBP is not available</strong> to residents of the United States or other restricted jurisdictions. See <Link to="/restricted" className="text-teal hover:underline">Restricted jurisdictions</Link>.</p>
            <p className="text-ink/80 leading-relaxed"><strong>This page is not exhaustive.</strong> Other risks may exist. You should obtain independent professional advice before engaging with PGBP if you are unsure.</p>
          </div>

          <div>
            <h2 className="display-3 text-teal">The principal risks</h2>
            <p className="mt-4 text-ink/70">The risks below are not the only risks of engaging with PGBP. They are the principal ones we want every counterparty, partner, and user to consider before making any decision.</p>
            <div className="mt-8 space-y-6">
              {risks.map((r) => (
                <div key={r.n} className="flex gap-5 border-l-2 border-slate-200 pl-5 hover:border-gold transition">
                  <div className="font-serif text-gold text-2xl w-12 shrink-0">{String(r.n).padStart(2, "0")}</div>
                  <div className="flex-1">
                    <h3 className="font-medium text-teal text-lg">{r.t}</h3>
                    <p className="mt-2 text-ink/80 leading-relaxed">{r.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="display-3 text-teal">Get independent advice</h2>
            <p className="mt-4 text-ink/80 leading-relaxed">
              Nothing on this website, in the whitepaper, or in any other PGBP communication is investment, financial, tax, or legal advice. The contents are for informational purposes only.
            </p>
            <p className="mt-4 text-ink/80 leading-relaxed">
              If you are unsure whether PGBP is suitable for your circumstances, you should seek independent professional advice before engaging with it.
            </p>
          </div>

          <div>
            <h2 className="display-3 text-teal">Reporting concerns</h2>
            <p className="mt-4 text-ink/80">
              If you believe you have identified a risk, defect, security issue, or compliance concern related to PGBP that is not already disclosed on this page, please contact <a href={`mailto:${EMAIL.compliance}`} className="text-teal hover:underline">{EMAIL.compliance}</a>. Smart-contract specifics may go to <a href={`mailto:${EMAIL.support}`} className="text-teal hover:underline">{EMAIL.support}</a>. Responsible disclosure is welcomed.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-6">
            <Link to="/whitepaper" className="btn-primary">Read the whitepaper</Link>
            <Link to="/transparency" className="btn-secondary text-teal">Transparency reports</Link>
            <Link to="/restricted" className="btn-ghost text-teal">Restricted jurisdictions →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
