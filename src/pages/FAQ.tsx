import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import { CONTRACT, TREASURY, EMAIL, ETHERSCAN } from "../config/constants";

interface Q { q: string; a: React.ReactNode; }
interface Section { id: string; label: string; questions: Q[]; }

const sections: Section[] = [
  { id: "general", label: "General", questions: [
    { q: "What is Pegged GBP?", a: <p>PGBP is a GBP-denominated ERC-20 token on Ethereum mainnet, issued by PGBP PAYMENTS LTD. It is designed to represent digital sterling on-chain — a stable, GBP-denominated unit usable for payments, OTC settlement, treasury operations, and cross-border value transfer.</p> },
    { q: "Who issues PGBP?", a: <p>PGBP PAYMENTS LTD, a private limited company registered in England and Wales (company number 16925298), with registered office at 17 Hanover Square, London, W1S 1BN.</p> },
    { q: "Why GBP and not USD?", a: <p>The stablecoin market is dominated by USD-denominated tokens. Sterling has been underrepresented on Ethereum despite the UK being one of the world's largest financial centres. PGBP fills that gap. See <Link to="/about" className="text-teal hover:underline">About</Link>.</p> },
    { q: "Why Ethereum?", a: <p>Ethereum is the most widely supported smart-contract platform, with the deepest tooling, wallet support, and counterparty set. Other networks may be added in future.</p> },
    { q: "Is PGBP the same as a regulated stablecoin?", a: <p>Not yet. PGBP PAYMENTS LTD is not currently authorised by the UK Financial Conduct Authority. The project is being built toward operational and regulatory maturity in phases — see <Link to="/about" className="text-teal hover:underline">Roadmap</Link>.</p> },
  ]},
  { id: "token", label: "Token", questions: [
    { q: "What is the contract address?", a: <p><span className="address">{CONTRACT}</span> — Ethereum mainnet, source-verified on Etherscan. See <Link to="/token" className="text-teal hover:underline">Token details</Link>.</p> },
    { q: "What is the maximum supply?", a: <p>299,999,995 PGBP. Fixed forever — minting is permanently disabled.</p> },
    { q: "Why 299,999,995 and not 300,000,000?", a: <p>At deployment, 300,000,000 PGBP were minted. Five tokens were then burned on-chain to demonstrate that the burn function works as specified. The remaining 299,999,995 became the permanent maximum supply.</p> },
    { q: "Can the issuer mint more PGBP?", a: <p>No. Minting is permanently disabled in the contract code.</p> },
    { q: "Can the issuer pause transfers or freeze wallets?", a: <p>No. There is no pause function, no blacklist, no admin role.</p> },
    { q: "Is the contract upgradeable?", a: <p>No. The contract is immutable. No proxy pattern, no upgrade mechanism, no admin write access.</p> },
    { q: "How many decimals?", a: <p>18 — the Ethereum default.</p> },
    { q: "Where is the supply held?", a: <p>In the publicly disclosed treasury wallet: <span className="address">{TREASURY}</span>.</p> },
  ]},
  { id: "trust", label: "Trust", questions: [
    { q: "How do I know PGBP is what it claims to be?", a: <p>Everything in the contract — supply, immutability, mint state, burn behaviour, the absence of admin keys — is publicly verifiable on Etherscan. See <Link to="/token" className="text-teal hover:underline">Token details</Link>.</p> },
    { q: "Where is the contract source code?", a: <p>On <a href={ETHERSCAN.contractCode} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Etherscan ↗</a>. The published source is confirmed to match the deployed bytecode.</p> },
    { q: "Has the contract been audited?", a: <p>The contract is source-verified and has been subject to internal review. Independent audit reports, where commissioned, will be published on this site.</p> },
    { q: "How often is transparency reported?", a: <p>Quarterly, starting Q3 2026. See <Link to="/transparency" className="text-teal hover:underline">Transparency</Link>.</p> },
    { q: "How are transparency reports verified?", a: <p>Each report PDF has its SHA-256 hash recorded on-chain. Anyone can compute the hash of the PDF they hold and check it against the on-chain record.</p> },
    { q: "What's currently backing PGBP?", a: <p>At the date of writing, no PGBP is yet in circulation. Banking and reserves are in the establishment phase. Once operational, every circulating PGBP will be matched, one-to-one, by GBP held in segregated reserves at a UK-regulated banking institution.</p> },
  ]},
  { id: "compliance", label: "Compliance", questions: [
    { q: "Is PGBP regulated?", a: <p>PGBP PAYMENTS LTD is not currently authorised by the UK Financial Conduct Authority. The project intends to seek appropriate authorisation aligned with the incoming UK stablecoin regime.</p> },
    { q: "Who can use PGBP?", a: <p>PGBP is not available to residents of the United States or other restricted jurisdictions. See <Link to="/restricted" className="text-teal hover:underline">Restricted jurisdictions</Link>.</p> },
    { q: "Is KYC required?", a: <p>KYC is required for redemption. PGBP can be held and transferred on-chain like any ERC-20 without KYC, subject to the restricted-jurisdictions policy.</p> },
    { q: "Is PGBP protected by the FSCS?", a: <p>No. PGBP is not a deposit and is not protected by the FSCS or any equivalent scheme. See <Link to="/risks" className="text-teal hover:underline">Risk disclosures</Link>.</p> },
    { q: "What about sanctions?", a: <p>All counterparties at issuance and redemption are screened against UK HM Treasury (OFSI), EU, and US OFAC sanctions lists. Wallet addresses are also screened against on-chain analytics for sanctions exposure.</p> },
  ]},
  { id: "buying", label: "Buying & redeeming", questions: [
    { q: "How do I acquire PGBP?", a: <p>At the date of writing, PGBP is not yet listed on exchanges and is not yet being issued into circulation. See <Link to="/about" className="text-teal hover:underline">Roadmap</Link>.</p> },
    { q: "Will PGBP be listed on exchanges?", a: <p>Yes — listing applications to CoinGecko, CoinMarketCap, and exchanges are in preparation. Status will be updated as listings come live.</p> },
    { q: "How do I redeem PGBP for GBP?", a: <p>Once operational, redemption is performed by sending PGBP to the issuer's redemption wallet, where it is burned in exchange for GBP released from segregated reserves. See <Link to="/redemption" className="text-teal hover:underline">Redemption</Link>.</p> },
    { q: "Are there fees?", a: <p>Fees will be disclosed transparently when redemption opens. They will reflect actual operational costs (banking, gas, KYC) and not surplus margin.</p> },
    { q: "How quickly can I redeem?", a: <p>SLAs will be published when redemption opens. Typically same business day for verified counterparties under normal conditions.</p> },
    { q: "I want to integrate PGBP into my product. Who do I contact?", a: <p>Email <a href={`mailto:${EMAIL.press}`} className="text-teal hover:underline">{EMAIL.press}</a>. Include your product, expected use case, and rough volumes.</p> },
  ]},
];

export default function FAQ() {
  return (
    <>
      <Seo title="FAQ — Pegged GBP (PGBP)"
        description="Frequently asked questions about Pegged GBP: token design, trust, redemption, compliance, and how to acquire PGBP."
        path="/faq" />
      <Hero title="Frequently asked questions" subtitle="The questions counterparties, partners, and listing reviewers tend to ask first." />

      <section className="section">
        <div className="container-x max-w-4xl">

          {/* Category nav (sticky on desktop) */}
          <div className="sticky top-16 z-20 -mx-4 mb-12 bg-white/90 backdrop-blur border-b border-slate-200 px-4 py-4">
            <nav className="flex flex-wrap gap-2 text-xs uppercase tracking-widest font-medium">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="rounded-full bg-slate-100 px-4 py-2 hover:bg-gold hover:text-dark transition">
                  {s.label}
                </a>
              ))}
            </nav>
          </div>

          {sections.map((s) => (
            <div key={s.id} id={s.id} className="mb-16 scroll-mt-32">
              <h2 className="display-3 text-teal">{s.label}</h2>
              <div className="mt-6 divide-y divide-slate-200">
                {s.questions.map((q, i) => <QAItem key={i} q={q} />)}
              </div>
            </div>
          ))}

          <div className="mt-16 rounded-xl bg-cream/50 border-l-4 border-l-gold p-6 md:p-8">
            <h3 className="display-4 text-teal">Didn't find your question?</h3>
            <p className="mt-3 text-ink/80 text-sm">Pick the right channel:</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
              <a href={`mailto:${EMAIL.info}`} className="rounded-md border border-slate-200 bg-white p-3 hover:border-gold transition"><strong>General</strong> · {EMAIL.info}</a>
              <a href={`mailto:${EMAIL.compliance}`} className="rounded-md border border-slate-200 bg-white p-3 hover:border-gold transition"><strong>Compliance</strong> · {EMAIL.compliance}</a>
              <a href={`mailto:${EMAIL.press}`} className="rounded-md border border-slate-200 bg-white p-3 hover:border-gold transition"><strong>Press / partnerships</strong> · {EMAIL.press}</a>
              <a href={`mailto:${EMAIL.support}`} className="rounded-md border border-slate-200 bg-white p-3 hover:border-gold transition"><strong>Technical / support</strong> · {EMAIL.support}</a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-12">
            <Link to="/whitepaper" className="btn-primary">Read the whitepaper</Link>
            <Link to="/token" className="btn-secondary text-teal">Token details</Link>
            <Link to="/transparency" className="btn-ghost text-teal">Transparency →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function QAItem({ q }: { q: Q }) {
  const [open, setOpen] = useState(false);
  return (
    <details className="group py-4" open={open} onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}>
      <summary className="flex items-start gap-4 cursor-pointer list-none">
        <span className={`mt-1 inline-block h-5 w-5 shrink-0 rounded border border-slate-300 transition group-open:border-gold group-open:bg-gold`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={`h-full w-full transition ${open ? "text-dark" : "text-slate-400"}`}>
            {open ? <path d="M5 12h14" /> : <path d="M12 5v14M5 12h14" />}
          </svg>
        </span>
        <span className="font-medium text-ink flex-1">{q.q}</span>
      </summary>
      <div className="mt-3 pl-9 text-ink/80 text-sm leading-relaxed space-y-3">{q.a}</div>
    </details>
  );
}
