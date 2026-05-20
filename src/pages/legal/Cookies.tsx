import Seo from "../../components/Seo";
import LegalLayout from "../../components/LegalLayout";
import { COMPANY, EMAIL } from "../../config/constants";

const toc = [
  { id: "s1", label: "1. About this Policy" },
  { id: "s2", label: "2. What cookies are" },
  { id: "s3", label: "3. Our approach" },
  { id: "s4", label: "4. Categories of cookies" },
  { id: "s5", label: "5. The specific cookies we use" },
  { id: "s6", label: "6. How to manage cookies" },
  { id: "s7", label: "7. Other tracking technologies" },
  { id: "s8", label: "8. Server logs" },
  { id: "s9", label: "9. Changes" },
  { id: "s10", label: "10. Contact" },
];

export default function Cookies() {
  return (
    <>
      <Seo title="Cookie Policy — Pegged GBP (PGBP)"
        description="What cookies and similar technologies pgbp.io uses, why, and how to control them."
        path="/legal/cookies" />
      <LegalLayout title="Cookie Policy" lastUpdated="20 May 2026" tocItems={toc}>
        <h2 id="s1">1. About this Policy</h2>
        <p><strong>1.1</strong> This Cookie Policy explains what cookies and similar technologies we use on the website at <code>https://pgbp.io</code> (the "Site"), why we use them, and how you can control them.</p>
        <p><strong>1.2</strong> The Site is operated by <strong>{COMPANY.legalName}</strong>, a private limited company registered in {COMPANY.jurisdiction} with company number {COMPANY.companyNo} and registered office at {COMPANY.registeredOffice}.</p>
        <p><strong>1.3</strong> This Policy should be read alongside our <a href="/legal/privacy">Privacy Policy</a> and our <a href="/legal/terms">Terms of Use</a>.</p>

        <h2 id="s2">2. What cookies are</h2>
        <p><strong>2.1</strong> A cookie is a small text file that a website places on your device when you visit it. Cookies are widely used to make websites work, to make them work more efficiently, and to provide information to the website operators.</p>
        <p><strong>2.2</strong> This Policy uses the term "cookie" to mean cookies and similar technologies, including web beacons, pixels, local storage, and session storage.</p>
        <p><strong>2.3</strong> Cookies can be:</p>
        <p><strong>(a) Session cookies</strong> — exist only while your browser is open and are deleted when you close it;<br />
        <strong>(b) Persistent cookies</strong> — remain on your device for a defined period or until you delete them;<br />
        <strong>(c) First-party cookies</strong> — set directly by the Site you are visiting;<br />
        <strong>(d) Third-party cookies</strong> — set by domains other than the one you are visiting.</p>

        <h2 id="s3">3. Our approach</h2>
        <p><strong>3.1</strong> We use the smallest set of cookies necessary to operate the Site securely and reliably. We do not use cookies for advertising. We do not allow third parties to track you across other websites via cookies set through the Site.</p>
        <p><strong>3.2</strong> We use <strong>strictly necessary cookies</strong> without seeking your consent because they are essential to providing the Site and its security functions. Such cookies are permitted without consent under regulation 6(4) of the Privacy and Electronic Communications (EC Directive) Regulations 2003.</p>
        <p><strong>3.3</strong> Any cookies that are not strictly necessary — such as analytics cookies — are only set with your prior consent, which you give through the cookie banner that appears on your first visit and which you can change at any time (see section 6).</p>

        <h2 id="s4">4. Categories of cookies</h2>
        <p><strong>4.1</strong> We categorise cookies as follows:</p>
        <table>
          <thead><tr><th>Category</th><th>Purpose</th><th>Consent required?</th></tr></thead>
          <tbody>
            <tr><td><strong>Strictly necessary</strong></td><td>Required for the Site to operate securely</td><td>No — set automatically</td></tr>
            <tr><td><strong>Functional</strong></td><td>Remember preferences you have set</td><td>No — set in response to your action</td></tr>
            <tr><td><strong>Analytics</strong></td><td>Help us understand how visitors use the Site</td><td>Yes — set only with consent</td></tr>
            <tr><td><strong>Marketing / advertising</strong></td><td>Cross-site tracking for advertising</td><td><strong>Not used</strong> on this Site</td></tr>
          </tbody>
        </table>

        <h2 id="s5">5. The specific cookies we use</h2>
        <p><strong>5.1</strong> The Site is fronted by Cloudflare, which sets cookies necessary for security, bot management, and content delivery. These cookies are not used to track you for advertising or analytics:</p>
        <table>
          <thead><tr><th>Cookie</th><th>Purpose</th><th>Duration</th><th>Category</th></tr></thead>
          <tbody>
            <tr><td><code>__cf_bm</code></td><td>Bot management</td><td>30 minutes from each request</td><td>Strictly necessary</td></tr>
            <tr><td><code>cf_clearance</code></td><td>Security challenge memory</td><td>30 days</td><td>Strictly necessary</td></tr>
            <tr><td><code>__cflb</code></td><td>Load balancing</td><td>Session</td><td>Strictly necessary</td></tr>
          </tbody>
        </table>
        <p><strong>5.2</strong> We may set the following cookie ourselves to record your cookie preferences:</p>
        <table>
          <thead><tr><th>Cookie</th><th>Purpose</th><th>Duration</th><th>Category</th></tr></thead>
          <tbody>
            <tr><td><code>pgbp_consent</code></td><td>Records your cookie consent choices</td><td>12 months</td><td>Functional</td></tr>
          </tbody>
        </table>
        <p><strong>5.3</strong> If and when we introduce privacy-friendly analytics on the Site, we will update this Policy and the cookie banner. Analytics cookies are not set unless you have given consent.</p>
        <p><strong>5.4</strong> We do not currently set any marketing or advertising cookies.</p>

        <h2 id="s6">6. How to manage cookies</h2>
        <p><strong>6.1 Through our cookie banner.</strong> When you first visit the Site, a banner asks you to accept or refuse non-essential cookies. You can change your choice at any time by clicking the "Cookie preferences" link in the footer of the Site.</p>
        <p><strong>6.2 Through your browser.</strong> All modern browsers allow you to control cookies through their settings:</p>
        <ul>
          <li>Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">support.google.com/chrome/answer/95647</a></li>
          <li>Firefox: <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">support.mozilla.org</a></li>
          <li>Safari: <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">support.apple.com</a></li>
          <li>Edge: <a href="https://support.microsoft.com/en-gb/microsoft-edge" target="_blank" rel="noopener noreferrer">support.microsoft.com</a></li>
        </ul>
        <p><strong>6.3 Effect of blocking cookies.</strong> Blocking strictly necessary cookies will prevent parts of the Site from functioning correctly, including security features.</p>

        <h2 id="s7">7. Other tracking technologies</h2>
        <p><strong>7.1</strong> The Site does not knowingly use browser fingerprinting techniques, device fingerprinting, cross-site tracking pixels, session-replay tools, or social-media tracking pixels.</p>
        <p><strong>7.2</strong> If we introduce any technology of those categories, we will update this Policy in advance and seek your consent where required.</p>

        <h2 id="s8">8. Server logs</h2>
        <p><strong>8.1</strong> Separate from cookies, our hosting and content-delivery infrastructure automatically logs technical information about requests to the Site, including IP address, user agent, requested page, referrer URL, and timestamp. Server logs are described in our <a href="/legal/privacy">Privacy Policy</a>.</p>

        <h2 id="s9">9. Changes to this Policy</h2>
        <p><strong>9.1</strong> We may update this Policy from time to time. The "Last updated" date at the top of the Policy will reflect the date of the most recent change.</p>
        <p><strong>9.2</strong> Where changes are material, we will communicate them through the Site and, where required, ask for your renewed consent.</p>

        <h2 id="s10">10. Contact</h2>
        <p>For any question about this Policy or the cookies we use:</p>
        <p><strong>{COMPANY.legalName}</strong><br />{COMPANY.registeredOffice}<br /><a href={`mailto:${EMAIL.compliance}`}>{EMAIL.compliance}</a></p>
        <p>You also have the right to lodge a complaint with the UK's data-protection regulator, the <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">Information Commissioner's Office</a>.</p>
      </LegalLayout>
    </>
  );
}
