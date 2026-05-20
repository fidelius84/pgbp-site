import Seo from "../../components/Seo";
import LegalLayout from "../../components/LegalLayout";
import { COMPANY, EMAIL, TERMS_DOC } from "../../config/constants";

const toc = [
  { id: "s1", label: "1. Acceptance and Scope" },
  { id: "s2", label: "2. Eligibility and Restricted Jurisdictions" },
  { id: "s3", label: "3. About PGBP" },
  { id: "s4", label: "4. Not Financial, Legal, Tax, or Investment Advice" },
  { id: "s5", label: "5. No Solicitation" },
  { id: "s6", label: "6. Your Representations and Warranties" },
  { id: "s7", label: "7. Use of the Site" },
  { id: "s8", label: "8. Intellectual Property" },
  { id: "s9", label: "9. Smart Contracts and On-Chain Activity" },
  { id: "s10", label: "10. Redemption and Counterparty Arrangements" },
  { id: "s11", label: "11. Sanctions, AML, and Right to Refuse" },
  { id: "s12", label: "12. Disclaimer of Warranties" },
  { id: "s13", label: "13. Limitation of Liability" },
  { id: "s14", label: "14. Indemnity" },
  { id: "s15", label: "15. Privacy and Cookies" },
  { id: "s16", label: "16. Third-Party Services and Links" },
  { id: "s17", label: "17. Changes to These Terms" },
  { id: "s18", label: "18. Termination" },
  { id: "s19", label: "19. Governing Law and Jurisdiction" },
  { id: "s20", label: "20. General" },
  { id: "s21", label: "21. Contact" },
];

export default function Terms() {
  return (
    <>
      <Seo title="Terms of Use — Pegged GBP (PGBP)"
        description="Terms governing your use of pgbp.io and your engagement with the PGBP project, operated by PGBP PAYMENTS LTD."
        path="/legal/terms" />
      <LegalLayout title="Terms of Use" lastUpdated="20 May 2026" tocItems={toc} downloadPdf={{ url: TERMS_DOC.url, sha256: TERMS_DOC.sha256 }}>
        <h2 id="s1">1. Acceptance and Scope</h2>
        <p><strong>1.1</strong> These Terms of Use (the "Terms") govern your access to and use of the website located at <code>https://pgbp.io</code> and any subdomains (the "Site"), and your engagement with the project and token known as Pegged GBP ("PGBP") to the extent your engagement is mediated by the Site.</p>
        <p><strong>1.2</strong> The Site is operated by <strong>{COMPANY.legalName}</strong>, a private limited company registered in {COMPANY.jurisdiction} with company number {COMPANY.companyNo} and registered office at {COMPANY.registeredOffice} ("we", "us", "our").</p>
        <p><strong>1.3</strong> By accessing or using the Site, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use the Site.</p>
        <p><strong>1.4</strong> These Terms apply alongside any separate contractual arrangements you may enter into with us (for example, a counterparty agreement for redemption). Where a separate contractual arrangement is in place between you and us, that arrangement governs your dealings under it, and these Terms govern your use of the Site.</p>

        <h2 id="s2">2. Eligibility and Restricted Jurisdictions</h2>
        <p><strong>2.1</strong> The Site and PGBP are not available to, and not intended for use by, persons in the following Restricted Jurisdictions:</p>
        <ol style={{ listStyle: "lower-alpha" }}>
          <li>the United States of America (including all US Persons regardless of location);</li>
          <li>Iran, North Korea, Cuba, Syria;</li>
          <li>the Crimea, Donetsk, and Luhansk regions of Ukraine;</li>
          <li>Mainland China and Hong Kong;</li>
          <li>Russia and Belarus;</li>
          <li>any other jurisdiction subject to comprehensive sanctions imposed by the United Kingdom, European Union, or United States, as updated from time to time and published at <a href="/restricted">/restricted</a>.</li>
        </ol>
        <p><strong>2.2</strong> You represent and warrant that you are not a citizen, resident, national of, or located in, any Restricted Jurisdiction.</p>
        <p><strong>2.3</strong> You represent and warrant that you are not subject to any sanctions imposed by the United Kingdom (including the HM Treasury Office of Financial Sanctions Implementation consolidated list), the European Union, or the United States (including the OFAC Specially Designated Nationals list), and you are not owned or controlled by any such sanctioned person.</p>
        <p><strong>2.4</strong> We may, at our sole discretion, restrict access to the Site from any IP address or jurisdiction. We may update the list of Restricted Jurisdictions at any time, with such updates taking effect immediately upon publication.</p>

        <h2 id="s3">3. About PGBP</h2>
        <p><strong>3.1</strong> PGBP is a GBP-denominated ERC-20 token deployed on the Ethereum blockchain. The token contract is immutable and source-verified. The smart contract and its properties are described in further detail on the Site, including at <a href="/token">/token</a> and <a href="/whitepaper">/whitepaper</a>.</p>
        <p><strong>3.2</strong> PGBP is a cryptoasset. PGBP is not legal tender, is not a deposit, and is not money.</p>
        <p><strong>3.3</strong> <strong>We are not currently authorised by the Financial Conduct Authority.</strong> PGBP is not currently a regulated product. PGBP is not protected by the Financial Services Compensation Scheme or any equivalent compensation or insurance scheme.</p>
        <p><strong>3.4</strong> The operational infrastructure required to support PGBP as a fully-backed, redeemable stablecoin — including banking, segregated reserves, and a live redemption process — is being established. Until and unless that infrastructure is operational and clearly identified as such on the Site and in the relevant transparency report, no current commitment of backing, redemption, or comparable assurance is in force.</p>

        <h2 id="s4">4. Not Financial, Legal, Tax, or Investment Advice</h2>
        <p><strong>4.1</strong> The content of the Site is provided for informational purposes only. Nothing on the Site constitutes financial, legal, tax, accounting, or investment advice, nor a recommendation to acquire, hold, or dispose of PGBP or any other cryptoasset, financial instrument, or security.</p>
        <p><strong>4.2</strong> You should obtain independent professional advice appropriate to your circumstances before making any decision in respect of PGBP. We do not provide such advice.</p>

        <h2 id="s5">5. No Solicitation</h2>
        <p><strong>5.1</strong> Nothing on the Site constitutes, and the Site is not intended to constitute, an offer or solicitation by us to any person to acquire, subscribe for, or invest in PGBP.</p>
        <p><strong>5.2</strong> The Site is not directed at, and the content of the Site is not intended for, any person in any jurisdiction in which such direction or content would be unlawful or would require our authorisation by any regulator we do not hold.</p>

        <h2 id="s6">6. Your Representations and Warranties</h2>
        <p><strong>6.1</strong> By using the Site, you represent and warrant on a continuing basis that:</p>
        <ol style={{ listStyle: "lower-alpha" }}>
          <li>you are at least 18 years of age and have the legal capacity to enter into these Terms;</li>
          <li>you are not in any Restricted Jurisdiction and you satisfy the eligibility conditions in clause 2;</li>
          <li>you are not subject to any sanctions described in clause 2.3;</li>
          <li>your use of the Site does not breach any law applicable to you;</li>
          <li>any information you provide to us is true, accurate, complete, and not misleading;</li>
          <li>you have read and understood the risks described at <a href="/risks">/risks</a> and in the whitepaper;</li>
          <li>you are acting on your own behalf and not as agent for any undisclosed principal.</li>
        </ol>

        <h2 id="s7">7. Use of the Site</h2>
        <p><strong>7.1</strong> You may access and view the Site for lawful, personal or business purposes consistent with these Terms.</p>
        <p><strong>7.2</strong> You must not:</p>
        <ol style={{ listStyle: "lower-alpha" }}>
          <li>use the Site in any manner that is unlawful, fraudulent, deceptive, or harmful;</li>
          <li>interfere with, disrupt, or attempt to disrupt the Site or any systems supporting it;</li>
          <li>attempt to gain unauthorised access to the Site or any related systems;</li>
          <li>use any automated means (including scrapers, bots, or crawlers) to access the Site other than search-engine crawlers indexing the Site in the ordinary course;</li>
          <li>introduce any virus, malware, or other harmful code;</li>
          <li>reverse-engineer, decompile, or attempt to derive source code from any part of the Site that is not publicly published as source;</li>
          <li>impersonate any person, including any representative of {COMPANY.legalName};</li>
          <li>use the Site or any related material in a manner that would breach intellectual-property or other rights.</li>
        </ol>

        <h2 id="s8">8. Intellectual Property</h2>
        <p><strong>8.1</strong> The Site, including its layout, text, graphics, logos, marks, and software, is the property of {COMPANY.legalName} or its licensors and is protected by intellectual-property laws.</p>
        <p><strong>8.2</strong> The PGBP mark, the wordmark "Pegged GBP", and the tagline "Stable Sterling, on-chain." are trade marks of {COMPANY.legalName}.</p>
        <p><strong>8.3</strong> You may use the PGBP mark and wordmark in editorial, journalistic, listing, and integration contexts referring to the PGBP project, subject to the brand usage rules published at <a href="/media">/media</a>. You may not use the PGBP mark or wordmark in any manner that:</p>
        <ol style={{ listStyle: "lower-alpha" }}>
          <li>misrepresents the operational, regulatory, or risk profile of PGBP;</li>
          <li>implies endorsement, partnership, or affiliation with us that does not exist;</li>
          <li>breaches the brand usage rules at <a href="/media">/media</a>.</li>
        </ol>
        <p><strong>8.4</strong> The smart contract source code is published on Etherscan and may be reviewed, referenced, and used for the purpose of integrating with or interacting with PGBP. Other licences may apply to specific software components published by us; any such licences will be identified where applicable.</p>

        <h2 id="s9">9. Smart Contracts and On-Chain Activity</h2>
        <p><strong>9.1</strong> PGBP exists on the Ethereum blockchain. Transactions on Ethereum, including transfers of PGBP, are irreversible once recorded on-chain. We have no ability to reverse, modify, or unwind any transaction on the Ethereum blockchain, regardless of the cause.</p>
        <p><strong>9.2</strong> The PGBP smart contract is immutable. We have no ability to upgrade, modify, pause, freeze, or alter the behaviour of the PGBP smart contract, or to mint additional PGBP, or to blacklist any wallet. The properties of the PGBP smart contract are as described at <a href="/token">/token</a> and in the whitepaper.</p>
        <p><strong>9.3</strong> You are responsible for the security of your own wallets, private keys, and any other credentials used to interact with PGBP or with the Ethereum blockchain. We have no access to and no responsibility for the security of any wallet you operate.</p>
        <p><strong>9.4</strong> We are not responsible for, and do not warrant the operation of, the Ethereum network, third-party wallets, third-party exchanges, third-party bridges, third-party custodians, or any other infrastructure used to access or transact in PGBP.</p>

        <h2 id="s10">10. Redemption and Counterparty Arrangements</h2>
        <p><strong>10.1</strong> To the extent we offer, in future, the ability to redeem PGBP for GBP, such redemption will be subject to:</p>
        <ol style={{ listStyle: "lower-alpha" }}>
          <li>a separate counterparty agreement entered into between us and the relevant counterparty;</li>
          <li>successful know-your-customer and anti-money-laundering verification of the counterparty;</li>
          <li>sanctions screening of the counterparty and the source wallet;</li>
          <li>the counterparty not being in a Restricted Jurisdiction;</li>
          <li>the operational state of our banking, custody, and reserve arrangements at the relevant time;</li>
          <li>fees, service levels, and other operational terms as published on the Site or agreed bilaterally at the relevant time.</li>
        </ol>
        <p><strong>10.2</strong> Nothing on the Site or in these Terms constitutes a right to require redemption of PGBP at any particular price, in any particular timescale, or at all. Redemption is available only as and when we have communicated it to be operational, and subject to the conditions in clause 10.1.</p>

        <h2 id="s11">11. Sanctions, AML, and Right to Refuse</h2>
        <p><strong>11.1</strong> We operate sanctions and anti-money-laundering processes consistent with our regulatory positioning and applicable law. We may, at our sole discretion:</p>
        <ol style={{ listStyle: "lower-alpha" }}>
          <li>refuse to engage with any prospective counterparty;</li>
          <li>refuse to release PGBP into circulation in response to any deposit;</li>
          <li>refuse to accept PGBP for burning;</li>
          <li>refuse to release GBP in connection with any purported redemption;</li>
          <li>request additional documentation or information from any counterparty;</li>
          <li>report suspicious activity to law-enforcement or regulatory authorities as required by law.</li>
        </ol>
        <p><strong>11.2</strong> The exercise of any right under clause 11.1 does not give rise to any liability on our part.</p>

        <h2 id="s12">12. Disclaimer of Warranties</h2>
        <p><strong>12.1</strong> The Site and all information on it are provided on an "as is" and "as available" basis, without representation, warranty, or guarantee of any kind, whether express or implied.</p>
        <p><strong>12.2</strong> To the maximum extent permitted by law, we disclaim all warranties, including any implied warranties of merchantability, fitness for a particular purpose, non-infringement, accuracy, completeness, timeliness, security, or availability.</p>
        <p><strong>12.3</strong> Without limiting clause 12.2, we do not warrant that:</p>
        <ol style={{ listStyle: "lower-alpha" }}>
          <li>the Site will be uninterrupted, error-free, or secure;</li>
          <li>any information on the Site is accurate, complete, or up-to-date at the time you view it;</li>
          <li>the PGBP smart contract is free of defects;</li>
          <li>the value of PGBP on any market will be at par with GBP at any time;</li>
          <li>PGBP will achieve listing, liquidity, or acceptance on any particular venue or by any particular counterparty.</li>
        </ol>

        <h2 id="s13">13. Limitation of Liability</h2>
        <p><strong>13.1</strong> Nothing in these Terms excludes or limits any liability that cannot be excluded or limited under applicable law, including liability for death or personal injury caused by negligence, or for fraud or fraudulent misrepresentation.</p>
        <p><strong>13.2</strong> Subject to clause 13.1, we shall not be liable to you, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, for any:</p>
        <ol style={{ listStyle: "lower-alpha" }}>
          <li>loss of profit, business, anticipated savings, goodwill, or opportunity;</li>
          <li>loss or corruption of data;</li>
          <li>loss or damage attributable to volatility, market conditions, third-party infrastructure failure, or the behaviour of any third party;</li>
          <li>indirect, consequential, special, or punitive loss or damage,</li>
        </ol>
        <p>arising out of or in connection with the Site, PGBP, or these Terms.</p>
        <p><strong>13.3</strong> Subject to clauses 13.1 and 13.2, our total aggregate liability to you in respect of all matters arising out of or in connection with the Site and these Terms, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, is limited to £100 (one hundred pounds sterling).</p>

        <h2 id="s14">14. Indemnity</h2>
        <p><strong>14.1</strong> You agree to indemnify and hold harmless {COMPANY.legalName}, its directors, officers, employees, and agents, from and against any claim, loss, damage, cost, or expense (including reasonable legal fees) arising out of or in connection with:</p>
        <ol style={{ listStyle: "lower-alpha" }}>
          <li>your breach of these Terms;</li>
          <li>your breach of any representation or warranty given in these Terms;</li>
          <li>your unlawful use of the Site or of PGBP;</li>
          <li>any infringement by you of any third-party right.</li>
        </ol>

        <h2 id="s15">15. Privacy and Cookies</h2>
        <p><strong>15.1</strong> Your use of the Site is subject to our <a href="/legal/privacy">Privacy Policy</a> and our <a href="/legal/cookies">Cookie Policy</a>, each of which is incorporated by reference into these Terms.</p>

        <h2 id="s16">16. Third-Party Services and Links</h2>
        <p><strong>16.1</strong> The Site contains links to third-party websites, including Etherscan, and references to third-party services. These links and references are provided for convenience only. We do not control, endorse, or accept responsibility for any third-party website or service.</p>
        <p><strong>16.2</strong> Your use of any third-party website or service is at your own risk and is governed by the terms of that third party.</p>

        <h2 id="s17">17. Changes to These Terms</h2>
        <p><strong>17.1</strong> We may amend these Terms at any time by publishing an updated version on the Site. The "Last updated" date at the top of the Terms will reflect the date of the most recent change.</p>
        <p><strong>17.2</strong> Material changes will be communicated through the Site. Your continued use of the Site after publication of an updated version constitutes your acceptance of the updated Terms.</p>

        <h2 id="s18">18. Termination</h2>
        <p><strong>18.1</strong> We may, at our sole discretion, suspend or terminate your access to the Site at any time, with or without notice, for any reason, including breach of these Terms.</p>
        <p><strong>18.2</strong> Clauses 8 (Intellectual Property), 12 (Disclaimer), 13 (Limitation of Liability), 14 (Indemnity), 19 (Governing Law), and any other clause that by its nature is intended to survive, will survive termination.</p>

        <h2 id="s19">19. Governing Law and Jurisdiction</h2>
        <p><strong>19.1</strong> These Terms and any dispute or claim arising out of or in connection with them or their subject matter (including non-contractual disputes or claims) are governed by, and construed in accordance with, the law of England and Wales.</p>
        <p><strong>19.2</strong> You and we irrevocably agree that the courts of England and Wales have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these Terms or their subject matter (including non-contractual disputes or claims).</p>

        <h2 id="s20">20. General</h2>
        <p><strong>20.1 Entire agreement.</strong> These Terms (together with the documents referred to in them) constitute the entire agreement between you and us in relation to their subject matter and supersede any previous arrangement, understanding, or agreement between us.</p>
        <p><strong>20.2 Severability.</strong> If any provision of these Terms is held by a court of competent jurisdiction to be invalid or unenforceable, that provision will be modified to the minimum extent necessary to make it valid and enforceable, or, if it cannot be so modified, severed; the remaining provisions will continue in full force.</p>
        <p><strong>20.3 No waiver.</strong> No failure or delay by us in exercising any right under these Terms will operate as a waiver of that right.</p>
        <p><strong>20.4 Assignment.</strong> You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign or transfer our rights and obligations to any group company or successor in business.</p>
        <p><strong>20.5 No partnership or agency.</strong> Nothing in these Terms is intended to create a partnership, joint venture, agency, or employment relationship between you and us.</p>
        <p><strong>20.6 Third-party rights.</strong> A person who is not a party to these Terms has no right under the Contracts (Rights of Third Parties) Act 1999 to enforce any of these Terms.</p>

        <h2 id="s21">21. Contact</h2>
        <p>For any question about these Terms:</p>
        <p><strong>{COMPANY.legalName}</strong><br />{COMPANY.registeredOffice}<br /><a href={`mailto:${EMAIL.compliance}`}>{EMAIL.compliance}</a></p>
      </LegalLayout>
    </>
  );
}
