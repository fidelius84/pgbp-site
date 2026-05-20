import { useEffect, useState } from "react";

const KEY = "pgbp_consent_v1";

interface Consent { version: 1; analytics: boolean; functional: boolean; ts: number; }

function readConsent(): Consent | null {
  try { const raw = localStorage.getItem(KEY); if (!raw) return null; return JSON.parse(raw); } catch { return null; }
}
function writeConsent(c: Consent) { try { localStorage.setItem(KEY, JSON.stringify(c)); } catch {} }

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [manage, setManage] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    if (!readConsent()) setOpen(true);
    // Expose a way to reopen from the footer (via global)
    (window as any).openCookiePrefs = () => { setManage(true); setOpen(true); };
  }, []);

  const acceptAll = () => {
    writeConsent({ version: 1, analytics: true, functional: true, ts: Date.now() });
    setOpen(false);
  };
  const rejectAll = () => {
    writeConsent({ version: 1, analytics: false, functional: true, ts: Date.now() });
    setOpen(false);
  };
  const save = () => {
    writeConsent({ version: 1, analytics, functional: true, ts: Date.now() });
    setOpen(false);
    setManage(false);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white shadow-2xl animate-fade-in-up">
      <div className="container-x py-5">
        {!manage ? (
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl text-sm text-ink leading-relaxed">
              <p className="font-medium">We use a small set of cookies to operate this site.</p>
              <p className="text-muted mt-1">
                Strictly necessary cookies (e.g. Cloudflare bot protection) are always on. Optional categories — like privacy-friendly analytics — are off unless you choose otherwise. Read our <a href="/legal/cookies" className="text-teal underline-offset-4 hover:underline">Cookie Policy</a>.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button onClick={() => setManage(true)} className="btn-secondary !py-2 !text-sm text-ink">Manage</button>
              <button onClick={rejectAll} className="btn-secondary !py-2 !text-sm text-ink">Reject non-essential</button>
              <button onClick={acceptAll} className="btn-primary !py-2 !text-sm">Accept all</button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="display-4 text-teal">Cookie preferences</h3>
            <div className="mt-4 space-y-3">
              <ToggleRow label="Strictly necessary" description="Required for the site to operate (security, bot protection)." checked={true} disabled />
              <ToggleRow label="Functional" description="Remember preferences such as your cookie choice." checked={true} disabled />
              <ToggleRow label="Analytics" description="Privacy-friendly analytics so we can improve the site (not currently in use)." checked={analytics} onChange={setAnalytics} />
            </div>
            <div className="mt-5 flex flex-wrap gap-2 justify-end">
              <button onClick={() => setManage(false)} className="btn-secondary !py-2 !text-sm text-ink">Back</button>
              <button onClick={save} className="btn-primary !py-2 !text-sm">Save preferences</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ToggleRow({ label, description, checked, onChange, disabled }: { label: string; description: string; checked: boolean; onChange?: (v: boolean) => void; disabled?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-md border border-slate-200 p-3">
      <div>
        <p className="font-medium text-ink">{label}</p>
        <p className="text-xs text-muted mt-1">{description}</p>
      </div>
      <button
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        aria-pressed={checked}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${checked ? "bg-teal" : "bg-slate-300"} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
      >
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${checked ? "left-[1.375rem]" : "left-0.5"}`} />
      </button>
    </div>
  );
}
