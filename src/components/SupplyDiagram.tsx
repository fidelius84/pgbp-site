import { useEffect, useRef, useState } from "react";

interface Props {
  treasury?: bigint | null;
  totalSupply?: bigint | null;
}

const MAX_SUPPLY_NUM = 299_999_995;

export default function SupplyDiagram({ treasury, totalSupply }: Props) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Compute proportions
  const tNum = treasury ? Number(treasury / 10n ** 18n) : MAX_SUPPLY_NUM;
  const sNum = totalSupply ? Number(totalSupply / 10n ** 18n) : MAX_SUPPLY_NUM;
  const circulating = Math.max(0, sNum - tNum);
  const burned = 300_000_000 - sNum;

  const total = tNum + circulating + burned;
  const tPct = (tNum / total) * 100;
  const cPct = (circulating / total) * 100;
  const bPct = (burned / total) * 100;

  return (
    <div ref={ref} className="rounded-xl bg-cream/50 p-6 md:p-10">
      <p className="text-xs uppercase tracking-widest text-muted font-medium text-center">Every PGBP, in one of three states</p>

      <div className={`mt-6 flex h-16 overflow-hidden rounded-lg shadow-sm transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}>
        <div className="bg-gold flex items-center justify-center text-dark text-sm font-medium" style={{ width: `${tPct}%`, transition: "width 1.2s ease-out" }}>
          {tPct > 8 && <span className="px-2 truncate">Treasury</span>}
        </div>
        <div className="bg-teal flex items-center justify-center text-white text-sm font-medium" style={{ width: `${cPct}%`, transition: "width 1.2s ease-out" }}>
          {cPct > 8 && <span className="px-2 truncate">Circulating</span>}
        </div>
        <div className="bg-slate-400 flex items-center justify-center text-white text-sm font-medium" style={{ width: `${bPct}%`, transition: "width 1.2s ease-out" }}>
          {bPct > 8 && <span className="px-2 truncate">Burned</span>}
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Card colour="gold" label="In treasury" value={tNum.toLocaleString("en-GB")} description="Held in the publicly disclosed treasury wallet. Not in circulation. No reserve commitment." />
        <Card colour="teal" label="In circulation" value={circulating.toLocaleString("en-GB")} description="Released from treasury and held by users, partners, and exchanges. Reserve commitment applies (when operational)." />
        <Card colour="slate" label="Burned" value={burned.toLocaleString("en-GB")} description="Permanently destroyed on-chain. Supply has decreased. Cannot be re-issued." />
      </div>

      <p className="mt-6 text-center text-xs text-muted">
        Live, verifiable on-chain. <a href={`https://etherscan.io/token/0x5239c659A13f043358D551360C3b8FF1251d76D9`} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">View contract ↗</a>
      </p>
    </div>
  );
}

function Card({ colour, label, value, description }: { colour: "gold" | "teal" | "slate"; label: string; value: string; description: string }) {
  const accentColour = colour === "gold" ? "border-l-gold" : colour === "teal" ? "border-l-teal" : "border-l-slate-400";
  return (
    <div className={`rounded-lg bg-white p-5 border-l-4 ${accentColour}`}>
      <p className="text-xs uppercase tracking-widest text-muted font-medium">{label}</p>
      <p className="mt-2 font-serif text-2xl text-dark">{value}</p>
      <p className="mt-2 text-xs text-muted leading-relaxed">{description}</p>
    </div>
  );
}
