import { useState } from "react";

interface Props { address: string; label?: string; etherscanUrl?: string; }

export default function AddressCopy({ address, label, etherscanUrl }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const truncated = `${address.slice(0, 8)}…${address.slice(-6)}`;

  return (
    <div className="space-y-2">
      {label && <p className="text-xs uppercase tracking-widest text-muted font-medium">{label}</p>}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={copy}
          className="address group relative flex items-center gap-2 rounded-md bg-slate-100 px-3 py-2 hover:bg-slate-200 transition"
          aria-label={`Copy address ${address}`}
        >
          <span className="hidden sm:inline">{address}</span>
          <span className="sm:hidden">{truncated}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50 group-hover:opacity-100 transition">
            {copied ? <path d="M5 13l4 4L19 7" /> : <><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></>}
          </svg>
          {copied && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-dark px-2 py-1 text-xs text-white whitespace-nowrap">Copied</span>
          )}
        </button>
        {etherscanUrl && (
          <a href={etherscanUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-teal underline-offset-4 hover:underline">
            View on Etherscan ↗
          </a>
        )}
      </div>
    </div>
  );
}
