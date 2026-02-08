# PGBP Website (Cloudflare Pages)
React (Vite + TS) + Tailwind + Pages Functions.
1) Push to GitHub. 2) Cloudflare Pages -> Create project (Vite). 3) Build: npm run build. Output: dist.
Env var: RESEND_API_KEY for emailing. Endpoints: /api/contact, /api/buy, /api/redeem.
Add /public/PGBP_Whitepaper_v1.0.pdf and /public/transparency/index.html later.

## Etherscan Verification

Static HTML pages are served for non-JS crawlers (Etherscan reviewers, search engines, etc.)
so that critical token information is available without JavaScript execution.

### Crawler-readable pages

| Route           | File                           | Purpose                        |
|-----------------|--------------------------------|--------------------------------|
| `/etherscan`    | `public/etherscan.html`        | Token verification for Etherscan |
| `/about`        | `public/about.html`            | About PGBP                     |
| `/token`        | `public/token.html`            | Token specifications           |
| `/transparency` | `public/transparency.html`     | On-chain verification & reserves |

These are plain HTML files — no React, no JavaScript required. Cloudflare Pages serves
them directly before the SPA `_redirects` fallback applies.

### Crawler support files

| File                              | Purpose                  |
|-----------------------------------|--------------------------|
| `public/robots.txt`               | Allows all crawlers      |
| `public/sitemap.xml`              | Lists all important URLs |
| `public/.well-known/security.txt` | Security contact         |
| `public/humans.txt`               | Team information         |

### Verification script

Run against production:
```bash
npm run verify:etherscan
```

Run against local preview:
```bash
npm run build && npm run preview &
URL=http://localhost:4173 npm run verify:etherscan
```

The script fetches `/etherscan` with a non-JS user agent and checks that all required
token facts (name, symbol, contract address, supply, controls) are present in the raw HTML.
