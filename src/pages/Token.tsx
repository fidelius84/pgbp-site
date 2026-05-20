import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import AddressCopy from "../components/AddressCopy";
import { CONTRACT, TREASURY, DEPLOYER_HISTORICAL, ETHERSCAN, MAX_SUPPLY_DISPLAY, COMPANY, EMAIL } from "../config/constants";

export default function Token() {
  return (
    <>
      <Seo title="PGBP Token Details — Contract, Supply, Network"
        description="PGBP token reference. Contract address, treasury wallet, network, supply, decimals, contract properties, and deployment history. All on-chain verifiable."
        path="/token" />
      <Hero title="Token details" subtitle="Everything verifiable on-chain, in one place." />

      <section className="section">
        <div className="container-x max-w-5xl space-y-16">

          {/* Quick facts */}
          <div>
            <h2 className="display-3 text-teal">Quick facts</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-4 rounded-xl border border-slate-200 p-6 md:p-8 bg-white">
              <Fact label="Token name" value="Pegged GBP" />
              <Fact label="Symbol" value="PGBP" />
              <Fact label="Standard" value="ERC-20" />
              <Fact label="Network" value="Ethereum mainnet (chain ID 1)" />
              <Fact label="Decimals" value="18" />
              <Fact label="Maximum supply" value={`${MAX_SUPPLY_DISPLAY} PGBP`} />
              <Fact label="Issuer" value={COMPANY.legalName} />
              <Fact label="Source code" value="Verified on Etherscan" />
            </div>
          </div>

          {/* Contract */}
          <div>
            <h2 className="display-3 text-teal">Smart contract</h2>
            <p className="mt-4 text-ink/80">The PGBP smart contract is deployed on Ethereum mainnet. The source code is verified and publicly readable on Etherscan. The contract is immutable: there is no upgrade mechanism and no proxy.</p>
            <div className="mt-6 rounded-xl border border-slate-200 bg-cream/30 p-6 md:p-8 space-y-4">
              <AddressCopy address={CONTRACT} label="Contract address" etherscanUrl={ETHERSCAN.token} />
              <a href={ETHERSCAN.contractCode} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-teal underline-offset-4 hover:underline">
                View verified source code on Etherscan ↗
              </a>
            </div>
          </div>

          {/* Treasury */}
          <div>
            <h2 className="display-3 text-teal">Treasury wallet</h2>
            <p className="mt-4 text-ink/80">
              All 299,999,995 PGBP are held in a single, publicly disclosed treasury wallet operated by PGBP PAYMENTS LTD. The wallet is a multi-signature wallet. As reserve and redemption infrastructure comes online, tokens will be released from this wallet into circulation against received GBP.
            </p>
            <div className="mt-6 rounded-xl border border-slate-200 bg-cream/30 p-6 md:p-8 space-y-4">
              <AddressCopy address={TREASURY} label="Treasury wallet" etherscanUrl={ETHERSCAN.treasury} />
              <p className="text-xs text-muted">Multi-signature wallet · Verified live balance is shown on the <Link to="/transparency" className="text-teal hover:underline">transparency page</Link>.</p>
            </div>
          </div>

          {/* Contract properties */}
          <div>
            <h2 className="display-3 text-teal">What the contract can and cannot do</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6">
                <h3 className="display-4 text-emerald-900">Can</h3>
                <ul className="mt-4 space-y-2 text-sm text-emerald-900/90">
                  <Yes>Transfer PGBP between addresses (standard ERC-20)</Yes>
                  <Yes>Approve allowances (standard ERC-20)</Yes>
                  <Yes>Burn — permanently destroy tokens, reducing total supply</Yes>
                </ul>
              </div>
              <div className="rounded-xl bg-rose-50 border border-rose-200 p-6">
                <h3 className="display-4 text-rose-900">Cannot</h3>
                <ul className="mt-4 space-y-2 text-sm text-rose-900/90">
                  <No>Mint new tokens — minting is disabled forever</No>
                  <No>Be paused or frozen — there is no pause function</No>
                  <No>Blacklist or block addresses — no blacklist function exists</No>
                  <No>Be upgraded or modified — the contract is immutable</No>
                  <No>Be controlled by an admin or owner — no admin keys</No>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted">Anyone can verify each of these properties directly from the <a href={ETHERSCAN.contractCode} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">source code on Etherscan ↗</a>.</p>
          </div>

          {/* Deployment history */}
          <div>
            <h2 className="display-3 text-teal">Deployment history</h2>
            <p className="mt-4 text-ink/70">The full deployment record is public. Every event is verifiable on Etherscan.</p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-slate-200">
                  <tr className="text-left text-xs uppercase tracking-widest text-muted">
                    <th className="pb-3 pr-4">Event</th>
                    <th className="pb-3">Detail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <TR label="Contract deployment" detail={<>February 2025, Ethereum mainnet. Deployer: <span className="font-mono text-xs">{DEPLOYER_HISTORICAL.slice(0,10)}…{DEPLOYER_HISTORICAL.slice(-6)}</span></>} />
                  <TR label="Initial mint" detail="300,000,000 PGBP minted to the deployer wallet" />
                  <TR label="Burn function test" detail="5 PGBP burned to demonstrate the burn function (a deliberate one-off test)" />
                  <TR label="Supply transfer to treasury" detail="299,999,995 PGBP transferred to the treasury wallet (block 22,070,959)" />
                  <TR label="Mint disabled" detail="Permanently, at deployment — minting is unreachable in the contract code" />
                  <TR label="Deployer wallet status" detail="Now empty; retained on-chain for historical record only" />
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted italic">Maximum supply is now permanently 299,999,995 PGBP. The contract cannot mint additional tokens. Any future change to supply can only be a decrease, via burn.</p>
          </div>

          {/* Developers */}
          <div>
            <h2 className="display-3 text-teal">Integrate PGBP</h2>
            <p className="mt-4 text-ink/80">Standard ERC-20. No special integration steps. Use the contract address as you would any other ERC-20.</p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-dark text-white p-6 md:p-8">
              <p className="text-xs uppercase tracking-widest text-gold font-medium">Example — read treasury balance with ethers.js v6</p>
              <pre className="mt-3 text-xs md:text-sm overflow-x-auto font-mono text-white/90 leading-relaxed"><code>{`import { Contract, JsonRpcProvider, formatUnits } from "ethers";

const provider = new JsonRpcProvider("https://your-eth-rpc");
const PGBP = "${CONTRACT}";
const abi = ["function balanceOf(address) view returns (uint256)"];

const pgbp = new Contract(PGBP, abi, provider);
const raw = await pgbp.balanceOf(
  "${TREASURY}"
);
console.log(formatUnits(raw, 18), "PGBP");`}</code></pre>
            </div>

            <p className="mt-6 text-sm">For partnership, listing, or wallet-integration enquiries, contact <a href={`mailto:${EMAIL.press}`} className="text-teal hover:underline">{EMAIL.press}</a>.</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-6">
            <Link to="/how-it-works" className="btn-primary">How PGBP works</Link>
            <Link to="/transparency" className="btn-secondary text-teal">Transparency reports</Link>
            <Link to="/risks" className="btn-ghost text-teal">Risk disclosures →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-muted font-medium">{label}</p>
      <p className="mt-1 text-ink font-medium">{value}</p>
    </div>
  );
}
function Yes({ children }: { children: React.ReactNode }) {
  return <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span><span>{children}</span></li>;
}
function No({ children }: { children: React.ReactNode }) {
  return <li className="flex gap-2"><span className="text-rose-600 font-bold">✗</span><span>{children}</span></li>;
}
function TR({ label, detail }: { label: string; detail: React.ReactNode }) {
  return <tr><td className="py-3 pr-4 font-medium text-teal whitespace-nowrap align-top">{label}</td><td className="py-3 text-ink/80">{detail}</td></tr>;
}
