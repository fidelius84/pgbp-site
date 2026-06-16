// PGBP — central configuration constants
// Update any value here and the whole site picks it up.

export const CONTRACT = "0x5239c659A13f043358D551360C3b8FF1251d76D9";
export const TREASURY = "0x642aEb018894638F9ebf552dAC66dBa4Dfc3D858"; // PGBP Treasury Safe (2-of-3 multi-sig, migrated from 0x4ba2D7FAAe4453A122743A56736B0D4cEBF10804 on 15 Jun 2026)
export const DEPLOYER_HISTORICAL = "0x50E3763B8eC8Ce86b34ee3005E960577783b2964";
export const MAX_SUPPLY = 299_999_995n;
export const MAX_SUPPLY_DISPLAY = "299,999,995";
export const DECIMALS = 18;

export const COMPANY = {
  legalName: "PGBP PAYMENTS LTD",
  companyNo: "16925298",
  jurisdiction: "England and Wales",
  registeredOffice: "17 Hanover Square, London, W1S 1BN",
  companiesHouseUrl: "https://find-and-update.company-information.service.gov.uk/company/16925298",
};

export const EMAIL = {
  info: "info@pgbp.io",
  compliance: "compliance@pgbp.io",
  press: "press@pgbp.io",
  support: "support@pgbp.io",
};

export const SOCIAL = {
  x: "https://twitter.com/pgbpio",
  xHandle: "@pgbpio",
  telegram: "https://t.me/pgbpio",
  telegramHandle: "@pgbpio",
  discord: "https://discord.gg/EFhfM2xZ",
  discordHandle: "discord.gg/EFhfM2xZ",
};

export const ETHERSCAN = {
  token: `https://etherscan.io/token/${CONTRACT}`,
  contract: `https://etherscan.io/address/${CONTRACT}`,
  contractCode: `https://etherscan.io/address/${CONTRACT}#code`,
  treasury: `https://etherscan.io/address/${TREASURY}`,
  deployer: `https://etherscan.io/address/${DEPLOYER_HISTORICAL}`,
};

export const RPC_ENDPOINTS = [
  "https://eth.llamarpc.com",
  "https://ethereum.publicnode.com",
  "https://rpc.ankr.com/eth",
];

export const WHITEPAPER = {
  url: "/assets/whitepaper/PGBP_Whitepaper_v1.1.pdf",
  sha256: "2090d3a9baeaef94180a59705e09e8134764da42da52452d311a5e2c42584bb9",
  version: "1.1",
  publishedDate: "16 June 2026",
  onChainTx: "0x97bbb6bd9678297e3a3e786c5028b56c1aa406f730d999b82c1c8185cbd1e0ac"
};

export const TERMS_DOC = {
  url: "/assets/legal/PGBP_Terms_of_Use_v1.0.pdf",
  sha256: "10ccaf17d0cc001b460dcd492ac85c5f127407ff6c65b0a10524660ecdfd0cca",
  version: "1.0",
  publishedDate: "20 May 2026",
  onChainTx: "0xac1ee385f482431ec8e22070079c028e411966d48f32b847f1fcc26e0c2aaaaa" as string | null, // recorded 23 May 2026, block 25154567
};

// Operational status — edit this block when reserves/banking/redemption go live
export const STATUS = {
  phase: "pre-operational" as "pre-operational" | "operational",
  bankingOperational: false,
  reservesOperational: false,
  redemptionOperational: false,
  firstReportPlanned: "Q3 2026",
  statusText: "Banking partnership and segregated reserves in establishment. No PGBP currently in circulation.",
  redemptionStatusText:
    "The banking, custody, and process infrastructure required to support redemption is in the establishment phase.",
};

// Restricted jurisdictions
export const RESTRICTED = [
  { code: "US", name: "United States of America (and US Persons)", reason: "US regulatory and securities-law complexity" },
  { code: "IR", name: "Iran", reason: "Comprehensive UK, EU, and US sanctions" },
  { code: "KP", name: "North Korea (DPRK)", reason: "Comprehensive UN, UK, EU, and US sanctions" },
  { code: "CU", name: "Cuba", reason: "Comprehensive US sanctions; UK financial-crime risk" },
  { code: "SY", name: "Syria", reason: "Comprehensive UK, EU, and US sanctions" },
  { code: "UA-CRIMEA", name: "Crimea, Donetsk, and Luhansk regions of Ukraine", reason: "Comprehensive UK, EU, and US sanctions" },
  { code: "RU", name: "Russia", reason: "Sectoral and financial-services sanctions; broad regulatory risk" },
  { code: "BY", name: "Belarus", reason: "Sectoral and financial-services sanctions; broad regulatory risk" },
  { code: "CN", name: "Mainland China", reason: "Domestic restrictions on cryptoasset use; regulatory uncertainty" },
  { code: "HK", name: "Hong Kong", reason: "Cryptoasset licensing regime; service not registered there" },
];

export const TAGLINE = "Stable Sterling, on-chain.";
export const SITE_URL = "https://www.pgbp.io";
