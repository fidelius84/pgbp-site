import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import { RESTRICTED, EMAIL } from "../config/constants";

export default function Restricted() {
  return (
    <>
      <Seo title="Restricted jurisdictions — Pegged GBP (PGBP)"
        description="Jurisdictions where PGBP is not available, and the reasons each is restricted."
        path="/restricted" />
      <Hero title="Restricted jurisdictions" subtitle="Where PGBP isn't available, and why." />

      <section className="section">
        <div className="container-x max-w-5xl space-y-16">

          <div className="rounded-xl border-l-4 border-l-rose-500 bg-rose-50/40 p-6 md:p-8">
            <p className="font-medium text-ink">PGBP is not available to residents of, citizens of, persons located in, or entities incorporated in, the following jurisdictions:</p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-rose-200">
                  <tr className="text-left text-xs uppercase tracking-widest text-rose-900/60 font-medium">
                    <th className="pb-3 pr-4">Jurisdiction</th>
                    <th className="pb-3">Reason</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rose-200/50">
                  {RESTRICTED.map((r) => (
                    <tr key={r.code}>
                      <td className="py-3 pr-4 font-medium text-ink">{r.name}</td>
                      <td className="py-3 text-ink/70">{r.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-ink/70 italic">Plus any other jurisdiction subject to comprehensive UK, EU, or US sanctions as updated from time to time.</p>
          </div>

          <div>
            <h2 className="display-3 text-teal">Why each jurisdiction is restricted</h2>
            <p className="mt-4 text-ink/70">The list above is shaped by three categories of reason: sanctions, regulatory complexity, and the operational maturity of the project.</p>

            <div className="mt-8 space-y-6">
              <Block heading="Sanctions">
                <p>Jurisdictions subject to <strong>comprehensive UK, EU, or US sanctions</strong> are restricted because providing services to persons in those jurisdictions, or making PGBP available to them, would likely breach one or more sanctions regimes. This category currently includes Iran, North Korea, Cuba, Syria, and the Crimea, Donetsk, and Luhansk regions of Ukraine. Russia and Belarus are subject to extensive <strong>sectoral</strong> sanctions which, together with the elevated financial-crime risk, justify exclusion.</p>
                <p className="mt-3">PGBP PAYMENTS LTD screens counterparties against the UK HM Treasury Office of Financial Sanctions Implementation (OFSI) consolidated list, the EU consolidated list, and the US OFAC Specially Designated Nationals (SDN) list. The list of restricted jurisdictions is updated as those sanctions regimes change.</p>
              </Block>

              <Block heading="US regulatory complexity">
                <p>The <strong>United States</strong> is restricted because the US securities, money-transmission, and consumer-protection regimes are exceptionally fragmented and place significant obligations on issuers offering products in or to US persons. PGBP PAYMENTS LTD does not hold any US authorisation and is not positioned to serve US persons.</p>
                <p className="mt-3">The term <strong>"US Person"</strong> has a specific meaning under US law and includes US citizens, US-resident individuals, US-incorporated entities, and certain other persons connected to the US. The restriction applies to all US Persons regardless of where they are physically located.</p>
              </Block>

              <Block heading="Cryptoasset licensing or restriction">
                <p><strong>Mainland China</strong> has imposed broad domestic restrictions on cryptoasset use and trading. <strong>Hong Kong</strong> operates a licensing regime for virtual-asset service providers, and PGBP is not registered there. Until the project's regulatory positioning includes those jurisdictions, they remain restricted.</p>
              </Block>
            </div>
          </div>

          <div>
            <h2 className="display-3 text-teal">What "restricted" means in practice</h2>
            <p className="mt-4 text-ink/80">"Restricted" means that:</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              <li className="flex gap-2"><span className="text-gold">•</span>We will not knowingly make PGBP available, by sale, transfer, or any other means, to a person in any of the jurisdictions listed.</li>
              <li className="flex gap-2"><span className="text-gold">•</span>We will not engage with, accept funds from, or release funds to, a counterparty in any of the jurisdictions listed (once redemption is operational).</li>
              <li className="flex gap-2"><span className="text-gold">•</span>We may block access to the website from IP addresses associated with the jurisdictions listed.</li>
              <li className="flex gap-2"><span className="text-gold">•</span>Any redemption request from a person in any of the jurisdictions listed will be refused.</li>
            </ul>
            <p className="mt-4 text-sm text-ink/70 italic">The contract design of PGBP means we cannot prevent any person from acquiring PGBP through a third-party venue. The restriction operates at the issuance and redemption boundaries — the points at which we, as the issuer, interact with counterparties.</p>
          </div>

          <div>
            <h2 className="display-3 text-teal">If you are in a restricted jurisdiction</h2>
            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              <li className="flex gap-2"><span className="text-gold">•</span>You should not use the Site beyond confirming this restriction.</li>
              <li className="flex gap-2"><span className="text-gold">•</span>You should not attempt to acquire, hold, or transact in PGBP.</li>
              <li className="flex gap-2"><span className="text-gold">•</span>You should not contact us with a view to becoming a counterparty.</li>
            </ul>
            <p className="mt-4 text-sm text-ink/70">If you are unsure whether the restriction applies to you, take independent professional advice before proceeding.</p>
          </div>

          <div>
            <h2 className="display-3 text-teal">How and when the list changes</h2>
            <p className="mt-4 text-ink/80">The list of restricted jurisdictions is reviewed when:</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              <li className="flex gap-2"><span className="text-gold">•</span>A relevant UK, EU, or US sanctions designation is made or revoked.</li>
              <li className="flex gap-2"><span className="text-gold">•</span>The project's regulatory positioning materially changes (for example, becoming authorised in a previously-restricted jurisdiction).</li>
              <li className="flex gap-2"><span className="text-gold">•</span>New regulatory developments in a jurisdiction warrant inclusion or removal.</li>
            </ul>
            <p className="mt-4 text-sm text-ink/70">Changes to the list take effect immediately on publication of an updated version of this page. The list is also incorporated by reference into our <Link to="/legal/terms" className="text-teal hover:underline">Terms of Use</Link>.</p>
          </div>

          <div>
            <h2 className="display-3 text-teal">Questions</h2>
            <p className="mt-4 text-ink/80">For questions about whether a particular jurisdiction or set of circumstances is within the restriction, contact <a href={`mailto:${EMAIL.compliance}`} className="text-teal hover:underline">{EMAIL.compliance}</a>.</p>
            <p className="mt-4 text-sm text-ink/70 italic">Please note we can confirm only how the restriction operates from our side. We cannot advise you on the laws of your own jurisdiction, nor on whether your engagement with PGBP would be lawful where you live or operate.</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-6">
            <Link to="/legal/terms" className="btn-primary">Terms of Use</Link>
            <Link to="/risks" className="btn-secondary text-teal">Risk disclosures</Link>
            <a href={`mailto:${EMAIL.compliance}`} className="btn-ghost text-teal">Contact compliance →</a>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8">
      <h3 className="display-4 text-teal">{heading}</h3>
      <div className="mt-3 text-ink/80 leading-relaxed text-sm space-y-3">{children}</div>
    </div>
  );
}
