import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import { EMAIL, COMPANY, SOCIAL } from "../config/constants";

export default function Contact() {
  return (
    <>
      <Seo title="Contact — Pegged GBP (PGBP)"
        description="How to contact PGBP PAYMENTS LTD. Email addresses for general enquiries, compliance, partnerships, press, and support."
        path="/contact" />
      <Hero title="Contact" subtitle="Pick the right channel and we'll route you sensibly." />

      <section className="section">
        <div className="container-x max-w-5xl space-y-16">

          <div>
            <h2 className="display-3 text-teal">Which channel?</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-slate-200">
                  <tr className="text-left text-xs uppercase tracking-widest text-muted">
                    <th className="pb-3 pr-4">If you want to…</th><th className="pb-3">Email</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <ChannelRow text="Ask anything general about the project" email={EMAIL.info} />
                  <ChannelRow text="Discuss compliance, regulation, KYC, or redemption" email={EMAIL.compliance} />
                  <ChannelRow text="Discuss listing, integration, partnership, or press" email={EMAIL.press} />
                  <ChannelRow text="Report a technical issue, contract concern, or security finding" email={EMAIL.support} />
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="display-3 text-teal">Email channels — in detail</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-5">
              <EmailCard
                title="info@pgbp.io"
                heading="General enquiries"
                body="The front door. Use this if you're not sure which other channel applies, or if your enquiry is general — questions about the project, the team, the roadmap, or anything not covered elsewhere."
                email={EMAIL.info}
              />
              <EmailCard
                title="compliance@pgbp.io"
                heading="Compliance & regulatory"
                body="For counterparties exploring redemption eligibility, KYC and AML procedures, restricted-jurisdiction questions, or regulatory positioning of PGBP. This is the channel for businesses, OTC desks, fintechs, and other professional counterparties."
                email={EMAIL.compliance}
                hint="Subject: Redemption interest — [Entity name]"
              />
              <EmailCard
                title="press@pgbp.io"
                heading="Press, partnerships, listings"
                body="For journalists writing about PGBP, exchanges considering listing PGBP, wallet operators considering integration, payment companies exploring partnership, and any other commercial or media enquiry."
                email={EMAIL.press}
              />
              <EmailCard
                title="support@pgbp.io"
                heading="Technical and security"
                body="For technical issues with the website, questions about integrating PGBP into your application, smart-contract questions, and responsible security disclosures. Security issues take priority and are acknowledged within one business day."
                email={EMAIL.support}
              />
            </div>
          </div>

          <div>
            <h2 className="display-3 text-teal">Registered office</h2>
            <p className="mt-4 text-ink/80">PGBP is issued by <strong>{COMPANY.legalName}</strong>, a private limited company registered in England and Wales.</p>
            <div className="mt-6 rounded-xl border-l-4 border-l-gold bg-cream/50 p-6 md:p-8">
              <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <Row label="Legal name" value={COMPANY.legalName} />
                <Row label="Company number" value={COMPANY.companyNo} />
                <Row label="Jurisdiction" value={COMPANY.jurisdiction} />
                <Row label="Registered office" value={COMPANY.registeredOffice} />
                <Row label="Companies House" value={<a href={COMPANY.companiesHouseUrl} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Public record ↗</a>} />
              </dl>
            </div>
            <p className="mt-4 text-xs text-muted italic">The registered office is for official correspondence and Companies House service. It is not a public reception. Please use the relevant email channel above before sending physical post.</p>
          </div>

          <div>
            <h2 className="display-3 text-teal">Social channels</h2>
            <p className="mt-4 text-ink/80">Official PGBP accounts. Anything not listed below is not an official PGBP channel.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <SocialCard platform="X (Twitter)" handle={SOCIAL.xHandle} url={SOCIAL.x} description="Project announcements, transparency report releases, milestone updates." />
              <SocialCard platform="Telegram" handle={SOCIAL.telegramHandle} url={SOCIAL.telegram} description="Community channel for general discussion. Moderated." />
              <SocialCard platform="Discord" handle={SOCIAL.discordHandle} url={SOCIAL.discord} description="Community server with structured channels for general, technical, and partnerships discussion." />
            </div>
            <p className="mt-3 text-xs text-muted italic">Community channels are moderated. Spam, abuse, impersonation, scam links, and unsolicited promotion are removed.</p>
          </div>

          <div>
            <h2 className="display-3 text-teal">Response times</h2>
            <p className="mt-4 text-ink/70">The honest expectation, set conservatively:</p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-slate-200">
                  <tr className="text-left text-xs uppercase tracking-widest text-muted">
                    <th className="pb-3 pr-4">Channel</th><th className="pb-3">Target first response</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <SLA channel="Security disclosures via support@" time="Within one business day" />
                  <SLA channel="Compliance enquiries from professional counterparties" time="Within two business days" />
                  <SLA channel="Press and partnerships" time="Within three business days" />
                  <SLA channel="General enquiries" time="Within five business days" />
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted">Business days are UK working days, excluding weekends and English public holidays.</p>
          </div>

          <div>
            <h2 className="display-3 text-teal">Responsible disclosure</h2>
            <p className="mt-4 text-ink/80">If you believe you have identified a security vulnerability or compliance failure, please:</p>
            <ol className="mt-4 list-decimal list-inside space-y-2 text-ink/80 text-sm">
              <li>Send your finding to <a href={`mailto:${EMAIL.support}`} className="text-teal hover:underline">{EMAIL.support}</a> with subject line <code className="bg-slate-100 px-1 rounded">Disclosure — [brief topic]</code>.</li>
              <li>Allow a reasonable time for the issue to be investigated and addressed before any public disclosure.</li>
              <li>Do not act on the vulnerability in any way that could harm users, the project, or third parties.</li>
            </ol>
            <p className="mt-4 text-ink/80">Responsible disclosure is welcomed and acknowledged. The project will work in good faith with any party reporting in this manner.</p>
          </div>

          <p className="text-sm text-muted italic">This page is for project enquiries about PGBP. It is not a financial advice channel. Disputes with exchanges, wallets, or other third parties should be raised with the third party concerned.</p>

          <div className="flex flex-wrap gap-3 pt-6">
            <Link to="/whitepaper" className="btn-primary">Read the whitepaper</Link>
            <Link to="/transparency" className="btn-secondary text-teal">Transparency</Link>
            <Link to="/faq" className="btn-ghost text-teal">FAQ →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ChannelRow({ text, email }: { text: string; email: string }) {
  return <tr><td className="py-3 pr-4 text-ink/80">{text}</td><td className="py-3"><a href={`mailto:${email}`} className="font-mono text-sm text-teal hover:underline">{email}</a></td></tr>;
}
function EmailCard({ title, heading, body, email, hint }: { title: string; heading: string; body: string; email: string; hint?: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 hover:border-gold transition">
      <p className="font-mono text-sm text-gold">{title}</p>
      <h3 className="display-4 text-teal mt-1">{heading}</h3>
      <p className="mt-3 text-sm text-ink/70 leading-relaxed">{body}</p>
      <a href={`mailto:${email}${hint ? `?subject=${encodeURIComponent(hint.replace("Subject: ",""))}` : ""}`} className="mt-4 inline-block text-sm text-teal hover:underline underline-offset-4">{email} →</a>
      {hint && <p className="mt-2 text-xs text-muted italic">{hint}</p>}
    </div>
  );
}
function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return <div><dt className="text-xs uppercase tracking-widest text-muted font-medium">{label}</dt><dd className="mt-1 text-ink">{value}</dd></div>;
}
function SocialCard({ platform, handle, url, description }: { platform: string; handle: string; url: string; description: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-slate-200 bg-white p-5 hover:border-gold hover:shadow-md transition">
      <p className="text-xs uppercase tracking-widest text-muted font-medium">{platform}</p>
      <p className="mt-1 font-mono text-teal">{handle}</p>
      <p className="mt-2 text-xs text-ink/70 leading-relaxed">{description}</p>
    </a>
  );
}
function SLA({ channel, time }: { channel: string; time: string }) {
  return <tr><td className="py-3 pr-4 text-ink/80">{channel}</td><td className="py-3 font-medium text-teal">{time}</td></tr>;
}
