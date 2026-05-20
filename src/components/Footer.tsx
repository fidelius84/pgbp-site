import { Link } from "react-router-dom";
import Logo from "./Logo";
import { COMPANY, EMAIL, SOCIAL, TAGLINE } from "../config/constants";

export default function Footer() {
  return (
    <footer className="bg-teal text-white mt-20">
      <div className="container-x py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 text-gold">
            <Logo className="h-10 w-10" />
            <span className="font-serif text-lg font-bold tracking-wide">PEGGED GBP</span>
          </div>
          <p className="mt-3 text-gold/90 font-serif italic text-sm">{TAGLINE}</p>
          <div className="mt-6 flex items-center gap-4 text-white/70">
            <a href={SOCIAL.x} target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-gold transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-7.077 8.09L22 22h-6.34l-4.97-6.61L5 22H2.244l7.567-8.65L2 2h6.49l4.494 5.96L18.244 2Zm-1.12 18.4h1.78L7.05 3.5H5.16l11.964 16.9Z"/></svg>
            </a>
            <a href={SOCIAL.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-gold transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>
            </a>
            <a href={SOCIAL.discord} target="_blank" rel="noopener noreferrer" aria-label="Discord" className="hover:text-gold transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-sm uppercase tracking-widest text-gold mb-4">Site</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-gold transition">About</Link></li>
            <li><Link to="/token" className="hover:text-gold transition">Token details</Link></li>
            <li><Link to="/how-it-works" className="hover:text-gold transition">How it works</Link></li>
            <li><Link to="/transparency" className="hover:text-gold transition">Transparency</Link></li>
            <li><Link to="/redemption" className="hover:text-gold transition">Redemption</Link></li>
            <li><Link to="/whitepaper" className="hover:text-gold transition">Whitepaper</Link></li>
            <li><Link to="/faq" className="hover:text-gold transition">FAQ</Link></li>
            <li><Link to="/risks" className="hover:text-gold transition">Risks</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
            <li><Link to="/media" className="hover:text-gold transition">Media kit</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-sm uppercase tracking-widest text-gold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/legal/terms" className="hover:text-gold transition">Terms of Use</Link></li>
            <li><Link to="/legal/privacy" className="hover:text-gold transition">Privacy Policy</Link></li>
            <li><Link to="/legal/cookies" className="hover:text-gold transition">Cookie Policy</Link></li>
            <li><Link to="/restricted" className="hover:text-gold transition">Restricted jurisdictions</Link></li>
          </ul>
          <div className="mt-6 text-xs text-white/60 leading-relaxed">
            <p className="font-medium text-white/80">{COMPANY.legalName}</p>
            <p>Registered in {COMPANY.jurisdiction}</p>
            <p>Company number {COMPANY.companyNo}</p>
            <p>{COMPANY.registeredOffice}</p>
            <p className="mt-2"><a href={`mailto:${EMAIL.info}`} className="hover:text-gold transition">{EMAIL.info}</a></p>
          </div>
        </div>
      </div>

      {/* Disclaimer band */}
      <div className="bg-teal-700 border-t border-teal-600">
        <div className="container-x py-6 text-xs leading-relaxed text-white/70">
          PGBP is a GBP-denominated ERC-20 token issued by PGBP PAYMENTS LTD. PGBP is not legal tender, is not a deposit, is not protected by the Financial Services Compensation Scheme, and is not currently regulated by the Financial Conduct Authority. The value of cryptoassets can be volatile and may go down as well as up. PGBP is not available to residents of the United States or other restricted jurisdictions. <Link to="/restricted" className="underline hover:text-gold">See full list</Link>.
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-teal-800">
        <div className="container-x py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-2">
          <p>© 2026 {COMPANY.legalName}</p>
          <p>Made with care in London</p>
        </div>
      </div>
    </footer>
  );
}
