import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import StatusBand from "../components/StatusBand";
import { EMAIL, STATUS } from "../config/constants";

export default function Redemption() {
  return (
    <>
      <Seo title="Redemption — How PGBP is exchanged back into GBP"
        description="The PGBP redemption model: burn equals redemption. Eligibility, process, KYC, and counterparty terms. Operational status published openly."
        path="/redemption" />
      <Hero title="Redemption" subtitle="Burn means redemption. The model, the process, and the honest current state." />

      <section className="section">
        <div className="container-x max-w-5xl space-y-16">

          <StatusBand
            status="Not yet operational"
            body={STATUS.redemptionStatusText + " PGBP is not currently being issued into circulation, and redemption is not yet available."}
            action={
              <a href={`mailto:${EMAIL.compliance}?subject=PGBP%20Redemption%20%E2%80%94%20Interest%20registration`} className="btn-primary !py-2 !text-sm">Register interest →</a>
            }
          />

          <p className="text-sm text-muted italic max-w-3xl">
            This page describes the <strong>designed</strong> redemption model. None of the operational claims on this page (timing, fees, process steps) are live commitments until banking and reserves are operational.
          </p>

          <div>
            <h2 className="display-3 text-teal">Why redemption is gated to operational readiness</h2>
            <p className="mt-4 text-ink/80 leading-relaxed">
              Some token projects promise instant redemption from day one. The honest reality is that responsible redemption requires functioning banking, segregated reserves, KYC and AML procedures, sanctions screening, and a workable off-ramp to a bank account the counterparty actually holds. None of those can be turned on by deploying a smart contract.
            </p>
            <p className="mt-4 text-ink/80 leading-relaxed">
              PGBP is built in the opposite direction: <strong>contract first, infrastructure next, redemption when both are real</strong>. This page exists so that the redemption model is documented and publicly committed to before it operates — not after.
            </p>
          </div>

          <div>
            <h2 className="display-3 text-teal">The model — burn equals redemption</h2>
            <p className="mt-4 text-ink/80">Redemption is performed by burning PGBP. Once PGBP is transferred to the issuer's redemption process, it is permanently destroyed and the supply decreases on-chain. The corresponding GBP is then released from segregated reserves to the redeemer's bank account.</p>
            <div className="mt-8 space-y-5">
              <Step n="01" title="Counterparty initiates a redemption request.">A KYC-verified counterparty submits a redemption request, specifying the PGBP amount and the destination GBP bank account.</Step>
              <Step n="02" title="Counterparty sends PGBP to the redemption wallet.">The counterparty transfers the PGBP from their wallet to the issuer's designated redemption wallet.</Step>
              <Step n="03" title="Issuer screens the inbound transfer.">Sanctions screening, source-of-funds checks, and counterparty checks are performed.</Step>
              <Step n="04" title="Issuer burns the PGBP.">Once cleared, the issuer burns the received PGBP using the contract's burn function. The transaction is published on-chain.</Step>
              <Step n="05" title="GBP is released from segregated reserves.">The issuer instructs the bank to transfer the equivalent GBP, less any disclosed fees, to the counterparty's verified bank account.</Step>
              <Step n="06" title="Counterparty receives confirmation.">Including both the on-chain burn transaction hash and the GBP bank transfer reference.</Step>
            </div>
          </div>

          <div>
            <h2 className="display-3 text-teal">Who can redeem</h2>
            <p className="mt-4 text-ink/70">Eligibility is structured in phases. Earlier phases are restricted to professional and business counterparties so the operational model can be proven before being opened more widely.</p>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <Phase
                heading="Phase 1 — Professional / B2B / OTC"
                eligibility="Verified business entities, OTC desks, fintechs, and payment institutions, subject to KYC/AML and a signed counterparty agreement."
                timing="Opens once banking and reserves are operational"
                accent="gold"
              />
              <Phase
                heading="Phase 2 — Broader access"
                eligibility="Wider eligibility under terms aligned with the UK regulatory regime applicable at that time."
                timing="Subject to regulatory positioning"
                accent="muted"
              />
            </div>
            <div className="mt-6 rounded-md border-l-4 border-l-rose-500 bg-rose-50 p-4 text-sm">
              <strong>Not available to residents of restricted jurisdictions.</strong> Including the United States, Iran, North Korea, Cuba, Syria, Crimea/Donetsk/Luhansk regions of Ukraine, Mainland China, Hong Kong, Russia, Belarus. See <Link to="/restricted" className="text-teal hover:underline">Restricted jurisdictions</Link> for the full list.
            </div>
          </div>

          <div>
            <h2 className="display-3 text-teal">KYC and counterparty verification</h2>
            <p className="mt-4 text-ink/80">All redemption is subject to KYC and AML verification. The depth depends on counterparty type and size.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <KycCard heading="Individual professional / accredited" body="Identity (passport/driving licence), residential address, source of funds, sanctions screening" />
              <KycCard heading="Business entity" body="Certificate of incorporation, registered office, UBO, director ID, business activity, source of funds, sanctions screening" />
              <KycCard heading="Regulated counterparty" body="Regulator and licence reference, plus the above" />
            </div>
            <p className="mt-4 text-sm text-ink/70">Wallet addresses presented for redemption are screened against on-chain analytics for sanctions exposure and high-risk associations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 p-6 md:p-8 bg-cream/30">
              <h3 className="display-4 text-teal">Fees</h3>
              <p className="mt-3 text-ink/80 text-sm leading-relaxed">Fees will be disclosed transparently at the point redemption opens. They will reflect actual operational costs — banking, gas, KYC — and not surplus margin.</p>
              <p className="mt-3 text-sm font-medium text-muted">Current fee schedule: not yet published.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6 md:p-8 bg-cream/30">
              <h3 className="display-4 text-teal">Service levels</h3>
              <p className="mt-3 text-ink/80 text-sm leading-relaxed">Once operational, SLAs will reflect the practical reality that GBP bank transfers and KYC checks take time. A first-disclosure SLA range will be published when redemption opens.</p>
              <p className="mt-3 text-sm font-medium text-muted">Current SLAs: not yet published.</p>
            </div>
          </div>

          <div className="rounded-xl bg-teal text-white p-8 md:p-10">
            <h2 className="display-3 text-gold">Register interest</h2>
            <p className="mt-4 text-white/90 leading-relaxed">
              Counterparties interested in being included in the first phase of redemption — professional desks, businesses, fintechs, payment institutions with an existing GBP banking relationship — may register interest by writing to:
            </p>
            <p className="mt-6 font-mono text-gold text-lg">{EMAIL.compliance}</p>
            <p className="mt-4 text-sm text-white/70">
              Please include: legal entity name, jurisdiction of incorporation, brief description of the use case, and estimated monthly redemption volume.
            </p>
            <p className="mt-6 text-xs text-white/60 italic">Registering interest does not create an entitlement to redemption.</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-6">
            <Link to="/how-it-works" className="btn-primary">How PGBP works</Link>
            <Link to="/transparency" className="btn-secondary text-teal">Transparency reports</Link>
            <Link to="/risks" className="btn-ghost text-teal">Risk disclosures →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="font-serif text-gold text-2xl w-10 shrink-0">{n}</div>
      <div><h3 className="font-medium text-teal">{title}</h3><p className="mt-1 text-ink/70 text-sm leading-relaxed">{children}</p></div>
    </div>
  );
}
function Phase({ heading, eligibility, timing, accent }: { heading: string; eligibility: string; timing: string; accent: "gold" | "muted" }) {
  return (
    <div className={`rounded-xl bg-white border-l-4 ${accent === "gold" ? "border-l-gold" : "border-l-slate-300"} p-6 shadow-sm`}>
      <h3 className="display-4 text-teal">{heading}</h3>
      <p className="mt-3 text-sm text-ink/80 leading-relaxed">{eligibility}</p>
      <p className="mt-3 text-xs uppercase tracking-widest text-muted font-medium">{timing}</p>
    </div>
  );
}
function KycCard({ heading, body }: { heading: string; body: string }) {
  return (
    <div className="rounded-md bg-white border border-slate-200 p-4">
      <p className="font-medium text-teal text-sm">{heading}</p>
      <p className="mt-2 text-xs text-ink/70 leading-relaxed">{body}</p>
    </div>
  );
}
