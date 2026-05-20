import Seo from "../../components/Seo";
import LegalLayout from "../../components/LegalLayout";
import { COMPANY, EMAIL } from "../../config/constants";

const toc = [
  { id: "s1", label: "1. Who we are" },
  { id: "s2", label: "2. Personal data we collect" },
  { id: "s3", label: "3. How we use it" },
  { id: "s4", label: "4. Who we share with" },
  { id: "s5", label: "5. International transfers" },
  { id: "s6", label: "6. Retention" },
  { id: "s7", label: "7. Your rights" },
  { id: "s8", label: "8. Security" },
  { id: "s9", label: "9. Cookies" },
  { id: "s10", label: "10. Marketing" },
  { id: "s11", label: "11. Children's data" },
  { id: "s12", label: "12. Changes" },
  { id: "s13", label: "13. How to complain" },
  { id: "s14", label: "14. Contact" },
];

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy — Pegged GBP (PGBP)"
        description="How PGBP PAYMENTS LTD collects, uses, shares, and protects your personal data. Your rights under the UK GDPR."
        path="/legal/privacy" />
      <LegalLayout title="Privacy Policy" lastUpdated="20 May 2026" tocItems={toc}>
        <h2 id="s1">1. Who we are and how to contact us</h2>
        <p><strong>1.1</strong> This Privacy Policy explains how <strong>{COMPANY.legalName}</strong> ("we", "us", "our") collects, uses, shares, and protects personal data in connection with the website located at <code>https://pgbp.io</code> (the "Site") and the project and token known as Pegged GBP ("PGBP").</p>
        <p><strong>1.2</strong> We are the data controller in respect of the personal data described in this Policy.</p>
        <table>
          <tbody>
            <tr><th>Legal name</th><td>{COMPANY.legalName}</td></tr>
            <tr><th>Company number</th><td>{COMPANY.companyNo}</td></tr>
            <tr><th>Jurisdiction</th><td>{COMPANY.jurisdiction}</td></tr>
            <tr><th>Registered office</th><td>{COMPANY.registeredOffice}</td></tr>
            <tr><th>Privacy contact</th><td><a href={`mailto:${EMAIL.compliance}`}>{EMAIL.compliance}</a></td></tr>
          </tbody>
        </table>
        <p><strong>1.3</strong> We have not appointed a statutory Data Protection Officer because we are not required to do so under UK GDPR Article 37. For any privacy-related question, contact us at the address above.</p>

        <h2 id="s2">2. The personal data we collect</h2>
        <p><strong>2.1</strong> We collect personal data in the following categories:</p>
        <p><strong>(a) Information you give us directly.</strong> When you email us at any of our published addresses, complete a form on the Site, or otherwise communicate with us, we receive any information you choose to provide. This typically includes your name, email address, the organisation you represent (if any), and the content of your message.</p>
        <p><strong>(b) Information collected automatically when you visit the Site.</strong> When you access the Site, our hosting and content-delivery infrastructure automatically receives technical information including your IP address, the user agent of your browser, the pages you request, the referrer URL, and timestamps. This is described in more detail in our <a href="/legal/cookies">Cookie Policy</a>.</p>
        <p><strong>(c) Information from third-party sources.</strong> Where you are a counterparty engaging with us in respect of redemption (when redemption becomes operational), we will receive KYC and AML information from identity-verification, sanctions-screening, and analytics providers. This category is not currently in scope because we are not yet operating redemption.</p>
        <p><strong>(d) On-chain information.</strong> Public blockchain data, including Ethereum wallet addresses and transaction history, is publicly available and may be processed by us. Where we link a wallet address to your identity (for example, during KYC), the combination becomes personal data and is treated as such under this Policy.</p>
        <p><strong>2.2</strong> We do not knowingly collect special category personal data (such as health, racial or ethnic origin, religious beliefs, sexual orientation, or biometric data).</p>

        <h2 id="s3">3. How we use your personal data and the legal basis for it</h2>
        <p><strong>3.1</strong> We process personal data for the following purposes and on the following legal bases under UK GDPR Article 6:</p>
        <table>
          <thead><tr><th>Purpose</th><th>Categories of data</th><th>Legal basis</th></tr></thead>
          <tbody>
            <tr><td>To respond to your enquiry when you contact us</td><td>Name, email, organisation, message content</td><td><strong>Legitimate interests</strong> — responding to communications</td></tr>
            <tr><td>To operate, secure, and improve the Site</td><td>IP address, technical information, log data</td><td><strong>Legitimate interests</strong> — operating a secure website</td></tr>
            <tr><td>To comply with legal, regulatory, and fraud-prevention obligations</td><td>Any personal data we hold</td><td><strong>Legal obligation</strong> and <strong>legitimate interests</strong></td></tr>
            <tr><td>To verify counterparty identity and screen for sanctions and financial-crime risk</td><td>KYC information, beneficial ownership, sanctions screening, wallet addresses</td><td><strong>Legal obligation</strong> (AML, sanctions law) and <strong>legitimate interests</strong></td></tr>
            <tr><td>To perform a contract with you</td><td>Information necessary to perform the contract</td><td><strong>Performance of a contract</strong></td></tr>
            <tr><td>To send operational updates if requested</td><td>Email address, name</td><td><strong>Consent</strong> (withdrawable at any time)</td></tr>
          </tbody>
        </table>
        <p><strong>3.2</strong> Where we rely on legitimate interests, we have considered whether those interests are overridden by your interests or fundamental rights. For more information about that balancing test, contact us at <a href={`mailto:${EMAIL.compliance}`}>{EMAIL.compliance}</a>.</p>

        <h2 id="s4">4. Who we share your personal data with</h2>
        <p><strong>4.1</strong> We share personal data only as described below. We do not sell personal data and we do not share it for third-party marketing purposes.</p>
        <p><strong>4.2</strong> We may share personal data with:</p>
        <p><strong>(a) Service providers</strong> — companies that provide services to us, such as hosting, content delivery, email infrastructure, security, analytics, identity verification (when redemption is operational), sanctions screening (when redemption is operational), and on-chain analytics (when redemption is operational).</p>
        <p><strong>(b) Professional advisers</strong> — our solicitors, accountants, auditors, and other professional advisers.</p>
        <p><strong>(c) Banking and custody partners</strong> — where required to operate reserve and redemption arrangements (when these become operational).</p>
        <p><strong>(d) Regulators, law-enforcement, and tax authorities</strong> — where we are required by law, court order, or regulatory process.</p>
        <p><strong>(e) Successor or affiliated entities</strong> — in the event of a restructuring, sale, merger, or other corporate change.</p>
        <p><strong>4.3</strong> A non-exhaustive list of categories of service provider we use, or expect to use, includes hosting and content delivery, email infrastructure, domain and DNS, identity verification (when operational), sanctions and AML screening (when operational), and blockchain analytics (when operational).</p>

        <h2 id="s5">5. International transfers</h2>
        <p><strong>5.1</strong> Some of our service providers are located outside the United Kingdom, including in the United States, the European Economic Area, and Switzerland. When we transfer personal data to a country outside the UK, we ensure that the transfer is protected by an appropriate safeguard under UK GDPR, which may include a UK adequacy decision, the UK International Data Transfer Agreement, or any other safeguard recognised under UK GDPR Article 46.</p>
        <p><strong>5.2</strong> Where you want details of the specific safeguard in place for any particular transfer, contact us at <a href={`mailto:${EMAIL.compliance}`}>{EMAIL.compliance}</a>.</p>

        <h2 id="s6">6. How long we keep your personal data</h2>
        <p><strong>6.1</strong> We keep personal data only for as long as we need it for the purposes set out in this Policy, or for longer where required by law.</p>
        <table>
          <thead><tr><th>Category</th><th>Indicative retention</th></tr></thead>
          <tbody>
            <tr><td>Enquiry correspondence</td><td>Up to 24 months from the date of the last communication</td></tr>
            <tr><td>Operational website logs</td><td>Up to 12 months</td></tr>
            <tr><td>KYC and AML records (when operational)</td><td>At least 5 years from the end of the customer relationship</td></tr>
            <tr><td>Counterparty contracts and related documentation</td><td>At least 7 years from the end of the contract</td></tr>
            <tr><td>Records of consents given</td><td>For as long as we rely on the consent, plus a reasonable period</td></tr>
          </tbody>
        </table>

        <h2 id="s7">7. Your rights</h2>
        <p><strong>7.1</strong> Under the UK GDPR, you have the following rights in respect of your personal data:</p>
        <p><strong>(a) Right of access.</strong> You can ask us whether we hold personal data about you and request a copy.</p>
        <p><strong>(b) Right of rectification.</strong> You can ask us to correct personal data that is inaccurate or incomplete.</p>
        <p><strong>(c) Right of erasure.</strong> You can ask us to delete personal data we hold about you. This right is not absolute.</p>
        <p><strong>(d) Right to restrict processing.</strong> You can ask us to stop processing personal data while we consider a request or correct inaccurate data.</p>
        <p><strong>(e) Right of data portability.</strong> Where applicable, you can ask us to provide personal data in a structured, machine-readable format.</p>
        <p><strong>(f) Right to object.</strong> You can object to our processing of your personal data where we rely on legitimate interests.</p>
        <p><strong>(g) Right to withdraw consent.</strong> Where we process personal data on the basis of your consent, you can withdraw that consent at any time.</p>
        <p><strong>(h) Rights in relation to automated decision-making.</strong> We do not currently make any decision concerning you that is based solely on automated processing.</p>
        <p><strong>7.2</strong> To exercise any of these rights, email us at <a href={`mailto:${EMAIL.compliance}`}>{EMAIL.compliance}</a>. We will respond within one month.</p>
        <p><strong>7.3</strong> We do not charge a fee for exercising your rights, except where a request is manifestly unfounded or excessive.</p>

        <h2 id="s8">8. How we keep your personal data secure</h2>
        <p><strong>8.1</strong> We use appropriate technical and organisational measures to protect personal data against unauthorised access, alteration, disclosure, or destruction. These include encryption of data in transit (HTTPS / TLS), access controls and least-privilege principles, multi-factor authentication for administrative accounts, and the use of reputable service providers with appropriate security accreditations.</p>
        <p><strong>8.2</strong> No system is perfectly secure. While we take reasonable steps to protect personal data, we cannot guarantee absolute security.</p>
        <p><strong>8.3</strong> If we become aware of a personal data breach that is likely to result in a risk to your rights and freedoms, we will notify the Information Commissioner's Office and, where required, the affected individuals, in accordance with UK GDPR Articles 33 and 34.</p>

        <h2 id="s9">9. Cookies and similar technologies</h2>
        <p><strong>9.1</strong> The Site uses cookies and similar technologies. Information about which cookies we use, what they do, and how to control them is in our <a href="/legal/cookies">Cookie Policy</a>.</p>

        <h2 id="s10">10. Marketing</h2>
        <p><strong>10.1</strong> We do not send unsolicited marketing communications. Where you have asked to receive operational updates, you can opt out at any time by replying to any such email or by emailing <a href={`mailto:${EMAIL.compliance}`}>{EMAIL.compliance}</a>.</p>

        <h2 id="s11">11. Children's data</h2>
        <p><strong>11.1</strong> The Site and PGBP are not directed at, and not intended for use by, children under the age of 18. We do not knowingly collect personal data from children. If you believe we have collected personal data from a child, contact us at <a href={`mailto:${EMAIL.compliance}`}>{EMAIL.compliance}</a> and we will take steps to delete it.</p>

        <h2 id="s12">12. Changes to this Policy</h2>
        <p><strong>12.1</strong> We may update this Policy from time to time. The "Last updated" date at the top of the Policy will reflect the date of the most recent change.</p>
        <p><strong>12.2</strong> Where changes are material, we will communicate them through the Site.</p>

        <h2 id="s13">13. How to complain</h2>
        <p><strong>13.1</strong> If you are unhappy with how we handle your personal data, please contact us first at <a href={`mailto:${EMAIL.compliance}`}>{EMAIL.compliance}</a>.</p>
        <p><strong>13.2</strong> You also have the right to lodge a complaint with the UK's data-protection regulator, the <strong>Information Commissioner's Office</strong>:</p>
        <table>
          <tbody>
            <tr><th>Address</th><td>Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF</td></tr>
            <tr><th>Telephone</th><td>0303 123 1113</td></tr>
            <tr><th>Website</th><td><a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a></td></tr>
          </tbody>
        </table>

        <h2 id="s14">14. Contact</h2>
        <p>For any question about this Policy:</p>
        <p><strong>{COMPANY.legalName}</strong><br />{COMPANY.registeredOffice}<br /><a href={`mailto:${EMAIL.compliance}`}>{EMAIL.compliance}</a></p>
      </LegalLayout>
    </>
  );
}
