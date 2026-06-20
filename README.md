# PGBP Website — pgbp.io

The production website for **Pegged GBP (PGBP)** — a GBP-denominated ERC-20 stablecoin on Ethereum, issued by PGBP PAYMENTS LTD.

Built with **Vite + React 18 + TypeScript + Tailwind CSS**. Deployed to **Cloudflare Pages**. Backend forms run as **Cloudflare Pages Functions**.

---

## Quick start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev          # localhost:5173

# Build for production
npm run build        # output: dist/

# Preview the built site locally
npm run preview      # localhost:4173
```

## Project structure

```
pgbp-site/
├─ public/                       # Static assets, served as-is
│  ├─ assets/
│  │  ├─ brand/                  # Logos, marks, favicons, OG image
│  │  ├─ whitepaper/             # PGBP_Whitepaper_v1.0.pdf
│  │  ├─ legal/                  # PGBP_Terms_of_Use_v1.0.pdf
│  │  └─ media-kit/              # Public brand kit downloads
│  ├─ _redirects                 # Cloudflare SPA fallback
│  ├─ robots.txt
│  └─ sitemap.xml
├─ src/
│  ├─ components/                # Header, Footer, TreasuryWidget, HashVerifier, etc.
│  ├─ pages/                     # 16 page components
│  │  └─ legal/                  # Terms, Privacy, Cookies
│  ├─ config/
│  │  └─ constants.ts            # SINGLE SOURCE OF TRUTH for contract address, emails, etc.
│  ├─ App.tsx                    # React Router setup
│  ├─ main.tsx                   # React entry
│  └─ styles.css                 # Tailwind + custom utilities
├─ functions/
│  └─ api/
│     ├─ contact.ts              # POST → emails compliance@pgbp.io via Resend
│     └─ redemption-interest.ts  # POST → emails compliance@pgbp.io via Resend
├─ index.html                    # HTML shell with SEO meta
├─ tailwind.config.js
├─ vite.config.ts
├─ postcss.config.js
└─ package.json
```

## Editing content

Most page content is in the `.tsx` files under `src/pages/`. To change a paragraph:

1. Open the relevant page file (e.g. `src/pages/Home.tsx`).
2. Edit the text. Save.
3. Commit and push to GitHub.
4. Cloudflare Pages auto-builds and deploys.

To change something used across many pages (contract address, email, supply, status text):
- Edit `src/config/constants.ts` — one place changes everything.

---

## Cloudflare Pages deployment

### First time

1. Push this repo to GitHub: `github.com/fidelius84/pgbp-site` (or wherever).
2. In Cloudflare Dashboard → Pages → Create project → Connect Git → select the repo.
3. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
   - Production branch: `main`
4. Environment variables:
   - `RESEND_API_KEY` — required for the contact and redemption-interest forms to send emails. Get one at [resend.com](https://resend.com).
5. Add custom domain: `www.pgbp.io` (and optionally `pgbp.io` → redirect to www).
6. Deploy.

### Subsequent deploys

Just push to `main`. Cloudflare Pages auto-builds.

---

## Cloudflare geo-block — Redirect Rule

To redirect visitors from restricted jurisdictions to `/blocked`, create a Redirect Rule in the Cloudflare dashboard. **This feature is available on the Free plan** (up to 5 rules per zone).

**Path:** Rules → Redirect Rules → Create rule

> Note: This does NOT go under Security → WAF → Custom Rules. WAF Custom Rules don't support a Redirect action on any plan tier.

**Rule name:** `PGBP geo-block`

**Type:** Custom filter expression

**Expression:**
```
(ip.geoip.country in {"US" "IR" "KP" "CU" "SY" "CN" "HK" "RU" "BY"}) and not (http.request.uri.path in {"/blocked" "/restricted" "/legal/terms" "/legal/privacy" "/legal/cookies"})
```
**URL redirect type:** Static
**URL:** `https://www.pgbp.io/blocked`
**Status code:** 302 - Temporary Redirect
**Preserve query string:** off

This routes restricted-jurisdiction visitors to `/blocked` while keeping `/restricted` and the legal pages openly accessible from any country.
---

## Pre-launch checklist

Before going live:

- [ ] Push the site to GitHub
- [ ] Connect to Cloudflare Pages and verify auto-build works
- [ ] Set `RESEND_API_KEY` in Pages env vars
- [ ] Verify the contact form sends email (test from `/contact`)
- [ ] Configure the WAF geo-block rule
- [ ] Test geo-block with a VPN from a restricted country
- [ ] Record the whitepaper SHA-256 hash on-chain
- [ ] Record the Terms of Use SHA-256 hash on-chain
- [ ] Update `WHITEPAPER.onChainTx` and `TERMS_DOC.onChainTx` in `src/config/constants.ts`, then redeploy
- [ ] Verify the on-chain hash verifier on `/whitepaper` and `/transparency` shows the transaction link
- [ ] Test the site on mobile

## Document hashes (for on-chain recording)

- **Whitepaper v1.0** SHA-256: `b1a6822b7894bcd23d2e1a318fa6e70f5e3697c8d493fa85e458745e13cb8356`
- **Terms of Use v1.0** SHA-256: `10ccaf17d0cc001b460dcd492ac85c5f127407ff6c65b0a10524660ecdfd0cca`

After recording either on-chain:
1. Open `src/config/constants.ts`
2. Set `onChainTx` to the Ethereum transaction hash
3. Commit and push

---

## Key facts (single source of truth: `src/config/constants.ts`)

| | |
|---|---|
| Contract | `0x5239c659A13f043358D551360C3b8FF1251d76D9` (immutable, source-verified) |
| Treasury | `0x4ba2D7FAAe4453A122743A56736B0D4cEBF10804` (multi-sig) |
| Max supply | 299,999,995 PGBP (fixed) |
| Decimals | 18 |
| Network | Ethereum mainnet |
| Issuer | PGBP PAYMENTS LTD (UK Company 16925298) |

---

## Updating the operational status

The "Pre-operational" banner on `/transparency` and `/redemption` is controlled in `src/config/constants.ts`. When banking, reserves, or redemption become operational, edit the `STATUS` object and the relevant boolean flags. The status bands and page content update everywhere automatically.

## Adding a transparency report

1. Generate the PDF, compute its SHA-256.
2. Record the hash on-chain.
3. Add the PDF to `public/assets/transparency/`.
4. Add an entry to a `REPORTS` array (currently inline in `src/pages/Transparency.tsx` — can be extracted to `src/config/reports.ts` when the second report ships).

---

## Notes

- Built around the **Path B positioning**: technical truth from day one. No claims of operational backing/redemption until banking, reserves, and counsel are in place.
- The site avoids analytics in v1. If you want privacy-friendly analytics later (Plausible, Fathom, or Cloudflare Web Analytics), add the script and update `/legal/cookies` and the cookie banner's analytics category.
- The cookie banner sets a `pgbp_consent` localStorage entry. Users can re-open preferences from the footer (not yet linked — TODO if needed).
- The contract address and treasury address never change. They're hardcoded in `constants.ts` and used everywhere via import.

## Issues / questions

Open an issue, or contact `info@pgbp.io`.

---

*This README was generated as part of the v1.0 site build. Last updated 20 May 2026.*
