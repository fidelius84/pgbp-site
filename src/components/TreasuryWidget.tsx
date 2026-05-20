import { useEffect, useState } from "react";
import { JsonRpcProvider, Contract, formatUnits } from "ethers";
import { CONTRACT, TREASURY, RPC_ENDPOINTS, MAX_SUPPLY, ETHERSCAN, MAX_SUPPLY_DISPLAY } from "../config/constants";

interface State {
  loading: boolean;
  error: boolean;
  treasury: bigint | null;
  totalSupply: bigint | null;
}

const ABI = [
  "function balanceOf(address) view returns (uint256)",
  "function totalSupply() view returns (uint256)",
];

const CACHE_KEY = "pgbp_treasury_cache_v1";
const CACHE_TTL_MS = 5 * 60 * 1000;

function readCache(): { treasury: string; totalSupply: string; ts: number } | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.ts > CACHE_TTL_MS) return null;
    return parsed;
  } catch { return null; }
}

function writeCache(treasury: bigint, totalSupply: bigint) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({
      treasury: treasury.toString(), totalSupply: totalSupply.toString(), ts: Date.now(),
    }));
  } catch {}
}

async function fetchOnce(rpc: string) {
  const provider = new JsonRpcProvider(rpc);
  const c = new Contract(CONTRACT, ABI, provider);
  const [t, s] = await Promise.all([c.balanceOf(TREASURY), c.totalSupply()]);
  return { treasury: BigInt(t.toString()), totalSupply: BigInt(s.toString()) };
}

function formatPgbp(value: bigint): string {
  const whole = formatUnits(value, 18).split(".")[0];
  return Number(whole).toLocaleString("en-GB");
}

export default function TreasuryWidget({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<State>({ loading: true, error: false, treasury: null, totalSupply: null });

  useEffect(() => {
    const cached = readCache();
    if (cached) {
      setState({ loading: false, error: false, treasury: BigInt(cached.treasury), totalSupply: BigInt(cached.totalSupply) });
      return;
    }
    (async () => {
      for (const rpc of RPC_ENDPOINTS) {
        try {
          const r = await fetchOnce(rpc);
          writeCache(r.treasury, r.totalSupply);
          setState({ loading: false, error: false, treasury: r.treasury, totalSupply: r.totalSupply });
          return;
        } catch {}
      }
      setState({ loading: false, error: true, treasury: null, totalSupply: null });
    })();
  }, []);

  if (state.error) {
    return (
      <div className="rounded-xl border border-slate-200 bg-cream/40 p-6">
        <p className="text-sm text-muted">Live data unavailable. Verify directly on Etherscan:</p>
        <a href={ETHERSCAN.treasury} target="_blank" rel="noopener noreferrer" className="text-teal underline-offset-4 hover:underline text-sm font-medium">
          View treasury wallet ↗
        </a>
      </div>
    );
  }

  const treasury = state.treasury ? formatPgbp(state.treasury) : "—";
  const totalSupply = state.totalSupply ? formatPgbp(state.totalSupply) : "—";
  const circulating = state.treasury && state.totalSupply
    ? formatPgbp(state.totalSupply - state.treasury)
    : "—";
  const burned = state.totalSupply
    ? Number(formatUnits((300_000_000n * 10n**18n) - state.totalSupply, 18)).toLocaleString("en-GB")
    : "—";

  if (compact) {
    return (
      <div className="rounded-xl border border-slate-200 bg-cream/30 p-6 grid grid-cols-3 gap-6 text-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted">In treasury</p>
          <p className="font-serif text-2xl text-teal mt-1">{treasury}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted">Circulating</p>
          <p className="font-serif text-2xl text-teal mt-1">{circulating}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted">Max supply</p>
          <p className="font-serif text-2xl text-teal mt-1">{MAX_SUPPLY_DISPLAY}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-4">
        <Stat label="In treasury" value={treasury} loading={state.loading} accent />
        <Stat label="In circulation" value={circulating} loading={state.loading} />
        <Stat label="Total burned" value={burned} loading={state.loading} />
        <Stat label="Max supply" value={MAX_SUPPLY_DISPLAY} loading={false} />
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-xs text-muted">
        <span>Live, refreshed every 5 minutes</span>
        <a href={ETHERSCAN.treasury} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline underline-offset-4">
          Verify on Etherscan ↗
        </a>
      </div>
    </div>
  );
}

function Stat({ label, value, loading, accent }: { label: string; value: string; loading: boolean; accent?: boolean }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-muted font-medium">{label}</p>
      <p className={`font-serif text-2xl md:text-3xl mt-1 ${accent ? "text-gold" : "text-teal"} ${loading ? "animate-pulse" : ""}`}>
        {loading ? "·····" : value}
      </p>
      <p className="text-xs text-muted/70 mt-1">PGBP</p>
    </div>
  );
}
