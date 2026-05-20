import { useState } from "react";
import { WHITEPAPER, TERMS_DOC } from "../config/constants";

const KNOWN_HASHES: { hash: string; document: string; version: string; onChainTx: string | null }[] = [
  { hash: WHITEPAPER.sha256.toLowerCase(), document: "PGBP Whitepaper", version: WHITEPAPER.version, onChainTx: WHITEPAPER.onChainTx },
  { hash: TERMS_DOC.sha256.toLowerCase(), document: "PGBP Terms of Use", version: TERMS_DOC.version, onChainTx: TERMS_DOC.onChainTx },
];

export default function HashVerifier() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<null | { ok: boolean; document?: string; version?: string; onChainTx?: string | null }>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [computing, setComputing] = useState(false);

  const check = (hash: string) => {
    const cleaned = hash.trim().toLowerCase().replace(/^0x/, "");
    if (!cleaned) { setResult(null); return; }
    const match = KNOWN_HASHES.find(h => h.hash === cleaned);
    if (match) {
      setResult({ ok: true, document: match.document, version: match.version, onChainTx: match.onChainTx });
    } else {
      setResult({ ok: false });
    }
  };

  const handleFile = async (file: File) => {
    setComputing(true);
    setFileName(file.name);
    try {
      const buf = await file.arrayBuffer();
      const hashBuf = await crypto.subtle.digest("SHA-256", buf);
      const hex = Array.from(new Uint8Array(hashBuf))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
      setInput(hex);
      check(hex);
    } catch (e) {
      setResult({ ok: false });
    } finally {
      setComputing(false);
    }
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8">
      <h3 className="display-4 text-teal">Verify a PGBP document</h3>
      <p className="mt-2 text-sm text-muted">
        Drop a PGBP PDF below, or paste its SHA-256 hash. We'll check it against the on-chain record.
      </p>

      <label className="mt-6 block">
        <span className="text-xs uppercase tracking-widest text-muted font-medium">Drop a PDF or paste a hash</span>
        <div
          className="mt-2 rounded-md border-2 border-dashed border-slate-300 p-6 text-center hover:border-gold transition cursor-pointer"
          onDragOver={(e) => { e.preventDefault(); }}
          onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
        >
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
            className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-gold file:text-dark file:font-medium hover:file:bg-gold-300 file:cursor-pointer cursor-pointer"
          />
          {fileName && <p className="mt-2 text-xs text-muted">File: {fileName}</p>}
        </div>
      </label>

      <div className="mt-4">
        <label className="text-xs uppercase tracking-widest text-muted font-medium">Or paste a SHA-256 hash</label>
        <div className="mt-2 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => { setInput(e.target.value); }}
            onKeyDown={(e) => { if (e.key === "Enter") check(input); }}
            placeholder="b1a6822b7894bcd23d2e1a318fa6e70f5e3697c8d493fa85e458745e13cb8356"
            className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm font-mono focus:border-gold focus:outline-none"
          />
          <button onClick={() => check(input)} className="btn-primary !py-2 !text-sm">Check</button>
        </div>
      </div>

      {computing && <p className="mt-4 text-sm text-muted animate-pulse">Computing hash…</p>}

      {result && !computing && (
        <div className={`mt-6 rounded-md p-4 ${result.ok ? "bg-emerald-50 border border-emerald-200" : "bg-amber-50 border border-amber-200"}`}>
          {result.ok ? (
            <>
              <p className="font-medium text-emerald-900">✓ Verified</p>
              <p className="mt-1 text-sm text-emerald-800">
                This matches <strong>{result.document}</strong> version {result.version}.
              </p>
              {result.onChainTx ? (
                <a href={`https://etherscan.io/tx/${result.onChainTx}`} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs text-emerald-900 underline">
                  View on-chain record ↗
                </a>
              ) : (
                <p className="mt-2 text-xs text-emerald-800/80">On-chain hash recording: pending publication.</p>
              )}
            </>
          ) : (
            <>
              <p className="font-medium text-amber-900">Not a recognised PGBP document hash</p>
              <p className="mt-1 text-sm text-amber-800">
                The hash you entered does not match any document we have published. Double-check the file source or contact compliance.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
