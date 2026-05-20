import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props { title: string; lastUpdated: string; tocItems: { id: string; label: string }[]; children: ReactNode; downloadPdf?: { url: string; sha256?: string }; }

export default function LegalLayout({ title, lastUpdated, tocItems, children, downloadPdf }: Props) {
  return (
    <>
      <section className="bg-white border-b border-slate-200">
        <div className="container-x py-12 md:py-16">
          <p className="text-xs uppercase tracking-widest text-gold font-medium">Legal</p>
          <h1 className="display-1 text-teal mt-3">{title}</h1>
          <p className="mt-4 text-sm text-muted">Last updated: {lastUpdated}</p>
          {downloadPdf && (
            <div className="mt-6">
              <a href={downloadPdf.url} download className="btn-secondary text-teal !py-2 !text-sm">
                Download PDF ↓
              </a>
              {downloadPdf.sha256 && <p className="mt-2 text-xs font-mono text-muted break-all">SHA-256: {downloadPdf.sha256}</p>}
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container-x grid md:grid-cols-[14rem_1fr] gap-12">
          <aside className="hidden md:block">
            <div className="sticky top-24">
              <p className="text-xs uppercase tracking-widest text-muted font-medium mb-3">Contents</p>
              <ul className="space-y-1.5 text-sm">
                {tocItems.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="block py-1 text-ink/70 hover:text-teal transition border-l-2 border-transparent hover:border-gold pl-3 -ml-3">
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <article className="prose prose-slate max-w-none">
            {children}
          </article>
        </div>
      </section>

      <section className="bg-cream/30 border-t border-slate-200">
        <div className="container-x py-12 grid md:grid-cols-3 gap-6 text-sm">
          <Link to="/legal/terms" className="hover:text-teal transition">Terms of Use</Link>
          <Link to="/legal/privacy" className="hover:text-teal transition">Privacy Policy</Link>
          <Link to="/legal/cookies" className="hover:text-teal transition">Cookie Policy</Link>
        </div>
      </section>
    </>
  );
}
