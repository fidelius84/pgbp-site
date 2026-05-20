import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import Logo from "../components/Logo";
import { EMAIL, COMPANY, TAGLINE } from "../config/constants";

export default function Media() {
  return (
    <>
      <Seo title="Media kit — Pegged GBP (PGBP)"
        description="Brand assets, logos, and usage guidelines for Pegged GBP. For press, partners, listings, and anyone publishing about PGBP."
        path="/media" />
      <Hero title="Media kit" subtitle="Logos, brand assets, and usage guidance. Free to use within the rules below." />

      <section className="section">
        <div className="container-x max-w-5xl space-y-16">

          <div>
            <h2 className="display-3 text-teal">Downloads</h2>
            <div className="mt-8 grid sm:grid-cols-3 gap-5">
              <DownloadTile
                title="Brand kit (zip)"
                description="Logo, marks, variants, social assets, favicon set, brand guidelines PDF, README."
                meta="ZIP · ~4 MB"
                href="/assets/media-kit/PGBP_brand-kit_public_v1.zip"
              />
              <DownloadTile
                title="Brand guidelines (PDF)"
                description="Palette, typography, mark variants, do / don't rules. 5 pages, A4."
                meta="PDF · ~200 KB"
                href="/assets/media-kit/PGBP_Brand_Kit.pdf"
              />
              <DownloadTile
                title="Logo only (zip)"
                description="The PGBP mark in standard formats. Useful when you only need the logo."
                meta="ZIP · ~200 KB"
                href="/assets/media-kit/PGBP_logo_only.zip"
              />
            </div>
          </div>

          <div>
            <h2 className="display-3 text-teal">Logo previews</h2>
            <p className="mt-4 text-ink/70">Three variants of the PGBP mark for different contexts.</p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <PreviewCard label="Master mark" caption="For any rendering ≥ 128 px">
                <div className="aspect-square rounded-md bg-white border border-slate-200 flex items-center justify-center text-gold p-12"><Logo className="h-full w-full" /></div>
              </PreviewCard>
              <PreviewCard label="Small-size variant" caption="For any rendering ≤ 64 px (favicons, wallet icons, Etherscan)">
                <div className="aspect-square rounded-md bg-white border border-slate-200 flex items-center justify-center text-gold p-20"><Logo className="h-full w-full" /></div>
              </PreviewCard>
              <PreviewCard label="Mark + wordmark lockup" caption="For press, headers, partner materials">
                <div className="aspect-square rounded-md bg-teal flex flex-col items-center justify-center text-gold gap-3 p-8">
                  <Logo className="h-20 w-20" />
                  <span className="font-serif font-bold tracking-widest text-lg">PEGGED GBP</span>
                </div>
              </PreviewCard>
            </div>
          </div>

          <div>
            <h2 className="display-3 text-teal">Approved usage</h2>
            <p className="mt-4 text-ink/80">The PGBP mark is free to use in journalism, articles, listing pages, integration documentation, and other contexts where you are referring to or covering the PGBP project, provided you follow the rules below.</p>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6">
                <h3 className="display-4 text-emerald-900">Do</h3>
                <ul className="mt-4 space-y-2 text-sm text-emerald-900/90">
                  <Yes>Use only the approved palette: gold #CDAE70, deep teal #135D68.</Yes>
                  <Yes>Use the small-size variant when rendering below 64 px.</Yes>
                  <Yes>Maintain a minimum 8% clear space around the mark.</Yes>
                  <Yes>Use the gold mark on white, teal, or light backgrounds; the white mark on dark or photo backgrounds.</Yes>
                  <Yes>Use the master mark for any rendering 128 px or larger.</Yes>
                </ul>
              </div>
              <div className="rounded-xl bg-rose-50 border border-rose-200 p-6">
                <h3 className="display-4 text-rose-900">Don't</h3>
                <ul className="mt-4 space-y-2 text-sm text-rose-900/90">
                  <No>Recolour, distort, rotate, or skew the mark.</No>
                  <No>Add drop shadows, glows, gradients, or 3D effects.</No>
                  <No>Place the mark on a busy photo without a teal underlay.</No>
                  <No>Use the master mark below 64 px — use the small-size variant.</No>
                  <No>Imply endorsement, partnership, or affiliation that does not exist.</No>
                  <No>Misrepresent PGBP's operational status, regulatory position, or risk profile.</No>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted">The full rules are in the brand guidelines PDF.</p>
          </div>

          <div>
            <h2 className="display-3 text-teal">Brand basics</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-slate-200 p-6 bg-white">
                <h4 className="font-medium text-teal">Palette</h4>
                <div className="mt-4 space-y-3 text-xs">
                  <Swatch hex="#CDAE70" name="Gold (primary)" />
                  <Swatch hex="#135D68" name="Teal (secondary)" />
                  <Swatch hex="#FFFFFF" name="White" />
                  <Swatch hex="#000000" name="Black" />
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 p-6 bg-white">
                <h4 className="font-medium text-teal">Typography</h4>
                <div className="mt-4 space-y-3 text-sm">
                  <p><span className="font-serif text-2xl text-teal">Cinzel</span> — headings & wordmark</p>
                  <p><span className="text-2xl text-teal">Inter</span> — body & UI</p>
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 p-6 bg-white">
                <h4 className="font-medium text-teal">Tagline</h4>
                <p className="mt-4 font-serif italic text-2xl text-gold">{TAGLINE}</p>
                <p className="mt-2 text-xs text-muted">Cinzel Regular, italic optional, gold or white depending on background.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="display-3 text-teal">Boilerplate</h2>
            <p className="mt-4 text-ink/70">A short and a long form of project description, useful for press releases, listing applications, and integration documentation.</p>

            <div className="mt-8 space-y-6">
              <BoilerplateBlock label="Short (one sentence)">
                Pegged GBP (PGBP) is a GBP-denominated ERC-20 stablecoin on Ethereum, issued by PGBP PAYMENTS LTD with a fixed maximum supply of 299,999,995.
              </BoilerplateBlock>
              <BoilerplateBlock label="Standard (one paragraph)">
                Pegged GBP (PGBP) is a GBP-denominated ERC-20 token on Ethereum, issued by PGBP PAYMENTS LTD, a UK-registered company. The smart contract is immutable, source-verified, with a fixed maximum supply of 299,999,995; minting is permanently disabled and the burn function is enabled. PGBP is designed to represent digital sterling on-chain — usable for payments, OTC settlement, treasury operations, and cross-border GBP value transfer. Transparency is published quarterly, with each report PDF's hash recorded on-chain.
              </BoilerplateBlock>
              <BoilerplateBlock label="Extended (for press kits)">
                Pegged GBP (PGBP) is a GBP-denominated ERC-20 token on Ethereum, issued by PGBP PAYMENTS LTD, a private limited company registered in England and Wales (company number 16925298). PGBP was deployed in February 2025 with a fixed maximum supply of 299,999,995 tokens minted into a publicly disclosed treasury wallet. The smart contract is immutable, source-verified, and has no admin keys, no pause function, and no blacklist function. Minting is permanently disabled. The burn function is enabled and has been operationally demonstrated on-chain.{'\n\n'}PGBP is designed to fill the gap left in the stablecoin market by the absence of a credible, GBP-denominated alternative to the dollar-denominated incumbents. Built for payments, OTC settlement, treasury operations, cross-border value transfer, and on-chain sterling rails, PGBP follows a pre-minted treasury issuance model in which tokens are released into circulation against received GBP and burned on redemption. The full reserve, banking, and redemption infrastructure is being established in parallel and is expected to become operational during 2026.{'\n\n'}PGBP PAYMENTS LTD is not currently authorised by the Financial Conduct Authority. The project is engaging with the UK regulatory framework as it develops and intends to pursue appropriate authorisation aligned with the incoming UK stablecoin regime.
              </BoilerplateBlock>
            </div>
          </div>

          <div>
            <h2 className="display-3 text-teal">Press contact</h2>
            <div className="mt-6 rounded-xl border-l-4 border-l-gold bg-cream/50 p-6 md:p-8">
              <p className="text-ink/80">For interviews, comment, and other press enquiries:</p>
              <p className="mt-3 font-mono text-lg text-teal"><a href={`mailto:${EMAIL.press}`} className="hover:underline">{EMAIL.press}</a></p>
              <p className="mt-3 text-sm text-ink/70">Please include the publication or outlet, deadline, and a brief description of the piece. UK office hours.</p>
            </div>
          </div>

          <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
            <h3 className="display-4 text-teal">What you can't get here</h3>
            <p className="mt-3 text-sm text-ink/70 leading-relaxed">
              The public media kit deliberately does not include the editable source files (Adobe Illustrator masters) for the brand. Verified partners with a legitimate need (e.g. preparing a co-branded asset) may request these separately by emailing <a href={`mailto:${EMAIL.press}`} className="text-teal hover:underline">{EMAIL.press}</a>. Source files are not redistributed publicly.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-6">
            <Link to="/about" className="btn-primary">About PGBP</Link>
            <Link to="/whitepaper" className="btn-secondary text-teal">Read the whitepaper</Link>
            <Link to="/contact" className="btn-ghost text-teal">Contact →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function DownloadTile({ title, description, meta, href }: { title: string; description: string; meta: string; href: string }) {
  return (
    <a href={href} download className="block rounded-xl border border-slate-200 bg-white p-6 hover:border-gold hover:shadow-lg transition group">
      <div className="flex items-start justify-between">
        <div className="h-10 w-10 rounded-md bg-gold/10 flex items-center justify-center text-gold">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
        </div>
        <span className="text-xs text-muted">{meta}</span>
      </div>
      <h3 className="mt-4 font-medium text-teal group-hover:text-gold-600 transition">{title}</h3>
      <p className="mt-2 text-sm text-ink/70 leading-relaxed">{description}</p>
      <p className="mt-4 text-xs text-teal underline-offset-4 group-hover:underline">Download ↓</p>
    </a>
  );
}
function PreviewCard({ label, caption, children }: { label: string; caption: string; children: React.ReactNode }) {
  return (
    <div>
      {children}
      <p className="mt-3 font-medium text-teal text-sm">{label}</p>
      <p className="text-xs text-muted">{caption}</p>
    </div>
  );
}
function Yes({ children }: { children: React.ReactNode }) {
  return <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span><span>{children}</span></li>;
}
function No({ children }: { children: React.ReactNode }) {
  return <li className="flex gap-2"><span className="text-rose-600 font-bold">✗</span><span>{children}</span></li>;
}
function Swatch({ hex, name }: { hex: string; name: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-8 w-8 rounded border border-slate-200" style={{ backgroundColor: hex }} />
      <div>
        <p className="font-medium text-ink">{name}</p>
        <p className="font-mono text-muted">{hex}</p>
      </div>
    </div>
  );
}
function BoilerplateBlock({ label, children }: { label: string; children: React.ReactNode }) {
  const text = typeof children === "string" ? children : "";
  const ref = (el: HTMLPreElement | null) => { /* noop, content already rendered */ };
  return (
    <div className="rounded-xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between px-6 py-3 border-b border-slate-200">
        <p className="text-xs uppercase tracking-widest text-muted font-medium">{label}</p>
        <CopyTextButton text={typeof children === "string" ? children : String(children)} />
      </div>
      <div className="px-6 py-5 text-ink/80 leading-relaxed whitespace-pre-wrap text-sm">{children}</div>
    </div>
  );
}
function CopyTextButton({ text }: { text: string }) {
  const [done, setDone] = React.useState(false);
  return (
    <button
      onClick={async () => { await navigator.clipboard.writeText(text); setDone(true); setTimeout(()=>setDone(false), 1500); }}
      className="text-xs text-teal hover:underline underline-offset-4"
    >{done ? "Copied ✓" : "Copy"}</button>
  );
}
import React from "react";
