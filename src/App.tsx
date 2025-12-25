import React, { useMemo, useState } from "react";

const DICT = {
  en: { langName: "English", heroTitle: "Pegged GBP (PGBP)", heroTag: "Stable Sterling, on-chain.",
    ctaBuy: "Buy PGBP", ctaRedeem: "Schedule Redemption", ctaContact: "Contact Team",
    facts: "Token quick facts", contract: "Contract", supply: "Supply", controls: "Controls",
    issuer: "Issuer", network: "Network", ethereumOnly: "Ethereum · ERC‑20",
    fixedSupply: "300,000,000 (fixed at deployment)",
    controlsText: "Minting disabled · Burn enabled · Immutable · Source‑verified",
    issuerName: "PGBP PAYMENTS LTD (Company No. 16925298)",
    wallets: "Official wallets", treasury: "Treasury", redemption: "Redemption/Burn",
    primary: "Primary issuance & redemption",
    noListings: "Issuer‑only OTC. We don’t operate or guarantee any exchange listing or liquidity.",
    fees: "Fees", feesLines: "Purchase 5% · Redemption 0% (issuer covers bank fees)",
    cutoffs: "Cut‑offs (London Time)",
    cutoffsLines: "Buys by 15:00 → same‑day tokens. Redemptions ≤£100k by 15:00 → same‑day payout; £100k–£1m T+1; >£1m T+2.",
    rails: "Rails", railsLines: "Faster Payments (UK), CHAPS, SWIFT",
    kyc: "KYC/AML", kycLines: "Required for all buys/redemptions; US persons allowed with EDD; sanctioned countries excluded.",
    buyTitle: "Buy PGBP (request)", fullKycNote: "A compliance mini‑check is performed before payment instructions are shared.",
    name: "Full name", email: "Email", country: "Country", amount: "Amount (GBP)", purpose: "Intended use",
    submitBuy: "Submit purchase request", redeemTitle: "Schedule a redemption",
    redeemNote: "Pick a slot. We’ll confirm and email you bank details + a calendar invite.", date: "Date", time: "Time",
    amountToken: "Amount (PGBP)", payoutIban: "Payout IBAN / UK details", submitRedeem: "Request redemption slot",
    contactTitle: "Contact the dev/ops team", message: "Message", sendMessage: "Send message",
    success: "Submitted. We’ll be in touch.", downloadIcs: "Download calendar invite (.ics)",
    social: "Community & updates", cookieTitle: "Cookies & analytics",
    cookieText: "We use privacy‑friendly analytics (Plausible). Okay to enable?",
    accept: "Accept", decline: "Decline", legal: "Legal & disclosures",
    legalBullets: [
      "PGBP is not a bank deposit, pays no interest, and is not FSCS‑covered.",
      "Primary issuance/redemption only via the Issuer; no exchange/liquidity guarantees.",
      "KYC/AML, sanctions and Travel Rule compliance apply.",
    ],
    links: { etherscan: "View on Etherscan", whitepaper: "Whitepaper (PDF)", transparency: "Transparency", terms: "Terms of Use", privacy: "Privacy" },
  },
  ar: { langName: "العربية", heroTitle: "الجنيه الإسترليني المُقيَّد (PGBP)", heroTag: "جنيه مستقر على السلسلة.",
    ctaBuy: "شراء PGBP", ctaRedeem: "جدولة الاسترداد", ctaContact: "تواصل مع الفريق",
    facts: "معلومات الرمز الأساسية", contract: "العقد", supply: "الإصدار", controls: "الضوابط", issuer: "المُصدر", network: "الشبكة",
    ethereumOnly: "إيثريوم · ERC‑20", fixedSupply: "300,000,000 (إصدار ثابت)",
    controlsText: "التوليد معطَّل · الحرق مفعَّل · غير قابل للترقية · موثَّق المصدر",
    issuerName: "PGBP PAYMENTS LTD (شركة رقم 16925298)", wallets: "المحافظ الرسمية",
    treasury: "الخزانة", redemption: "الاسترداد/الحرق", primary: "الإصدار والاسترداد الأساسي",
    noListings: "الإصدار عبر المُصدر فقط. لا نضمن أي إدراج أو سيولة في البورصات.",
    fees: "الرسوم", feesLines: "الشراء 5% · الاسترداد 0% (المُصدر يتحمّل رسوم البنوك)",
    cutoffs: "مواعيد الإقفال (توقيت لندن)",
    cutoffsLines: "طلبات الشراء قبل 15:00 تُنفَّذ في نفس اليوم. الاسترداد ≤100k£ قبل 15:00 نفس اليوم؛ 100k–1m T+1؛ أكثر من ذلك T+2.",
    rails: "قنوات الدفع", railsLines: "Faster Payments و CHAPS و SWIFT", kyc: "اعرف عميلك ومكافحة غسل الأموال",
    kycLines: "مطلوبة لجميع العمليات؛ يُسمح للأشخاص الأمريكيين مع فحص مُعزَّز؛ الدول الخاضعة للعقوبات مستبعدة.",
    buyTitle: "طلب شراء PGBP", fullKycNote: "يتم إجراء فحص امتثال بسيط قبل مشاركة تعليمات الدفع.",
    name: "الاسم الكامل", email: "البريد الإلكتروني", country: "الدولة", amount: "المبلغ (جنيه إسترليني)", purpose: "الغرض من الاستخدام",
    submitBuy: "إرسال طلب الشراء", redeemTitle: "جدولة الاسترداد",
    redeemNote: "اختر موعدًا. سنؤكد ونرسل لك تفاصيل الدفع ودعوة تقويم.", date: "التاريخ", time: "الوقت",
    amountToken: "الكمية (PGBP)", payoutIban: "رقم الحساب/IBAN للدفع", submitRedeem: "طلب موعد الاسترداد",
    contactTitle: "التواصل مع فريق التطوير/العمليات", message: "الرسالة", sendMessage: "إرسال",
    success: "تم الإرسال. سنتواصل معك.", downloadIcs: "تنزيل دعوة التقويم (.ics)",
    social: "المجتمع والتحديثات", cookieTitle: "الكوكيز والتحليلات", cookieText: "نستخدم تحليلات تراعي الخصوصية (Plausible). هل توافق؟",
    accept: "أوافق", decline: "أرفض", legal: "الإفصاحات القانونية",
    legalBullets: [
      "PGBP ليس وديعة مصرفية ولا يدفع فائدة وغير مغطى من FSCS.",
      "الإصدار/الاسترداد الأساسي عبر المُصدر فقط؛ لا ضمان لإدراجات أو سيولة.",
      "تطبق قواعد اعرف عميلك ومكافحة غسل الأموال والعقوبات وTravel Rule.",
    ],
    links: { etherscan: "عرض على Etherscan", whitepaper: "الورقة البيضاء (PDF)", transparency: "الشفافية", terms: "الشروط", privacy: "الخصوصية" },
  },
  zh: { langName: "中文", heroTitle: "英镑锚定稳定币（PGBP）", heroTag: "链上英镑，稳定可靠。",
    ctaBuy: "购买 PGBP", ctaRedeem: "预约赎回", ctaContact: "联系团队",
    facts: "代币要点", contract: "合约", supply: "发行量", controls: "控制", issuer: "发行方", network: "网络",
    ethereumOnly: "以太坊 · ERC‑20", fixedSupply: "300,000,000（一次性铸造）",
    controlsText: "铸造关闭 · 可燃烧 · 不可升级 · 源码已验证",
    issuerName: "PGBP PAYMENTS LTD（公司号 16925298）", wallets: "官方地址",
    treasury: "金库", redemption: "赎回/销毁", primary: "一级发行与赎回",
    noListings: "仅由发行方 OTC 处理。我们不运营或保证任何交易所挂单或流动性。",
    fees: "费用", feesLines: "购买 5% · 赎回 0%（发行方承担银行费用）",
    cutoffs: "截止时间（伦敦）",
    cutoffsLines: "15:00 前的购买当日到账。赎回 ≤£100k 15:00 前申请当日支付；£100k–£1m 次日；>£1m 两个工作日。",
    rails: "通道", railsLines: "Faster Payments、CHAPS、SWIFT", kyc: "KYC/AML",
    kycLines: "所有买/赎回均需 KYC；允许美国用户（加强尽调）；制裁国家排除。",
    buyTitle: "购买申请", fullKycNote: "我们会在提供付款指引前进行合规初审。", name: "姓名", email: "邮箱",
    country: "国家/地区", amount: "金额（英镑）", purpose: "用途", submitBuy: "提交购买申请",
    redeemTitle: "预约赎回", redeemNote: "选择时间段。我们将确认并发送银行信息与日历邀请。", date: "日期", time: "时间",
    amountToken: "数量（PGBP）", payoutIban: "收款 IBAN/英国账户信息", submitRedeem: "提交预约",
    contactTitle: "联系开发/运营团队", message: "留言", sendMessage: "发送",
    success: "已提交，我们将尽快联系你。", downloadIcs: "下载日历邀请 (.ics)",
    social: "社区与更新", cookieTitle: "Cookie 与分析", cookieText: "我们使用注重隐私的分析（Plausible）。是否同意启用？",
    accept: "同意", decline: "拒绝", legal: "法律披露",
    legalBullets: [
      "PGBP 非银行存款，不计息，且不受 FSCS 保障。",
      "一级发行/赎回仅由发行方处理；不保证交易所挂单或流动性。",
      "适用 KYC/AML、制裁与 Travel Rule 要求。",
    ],
    links: { etherscan: "查看 Etherscan", whitepaper: "白皮书 (PDF)", transparency: "透明度", terms: "条款", privacy: "隐私" },
  },
  fr: { langName: "Français", heroTitle: "Pegged GBP (PGBP)", heroTag: "La livre sterling sur chaîne, stable.",
    ctaBuy: "Acheter PGBP", ctaRedeem: "Programmer un rachat", ctaContact: "Contacter l’équipe",
    facts: "Faits essentiels", contract: "Contrat", supply: "Offre", controls: "Contrôles", issuer: "Émetteur", network: "Réseau",
    ethereumOnly: "Ethereum · ERC‑20", fixedSupply: "300 000 000 (offre fixe)",
    controlsText: "Frappe désactivée · Brûlage activé · Immutable · Code vérifié",
    issuerName: "PGBP PAYMENTS LTD (Company No. 16925298)", wallets: "Portefeuilles officiels",
    treasury: "Trésorerie", redemption: "Rachat/Brûlage", primary: "Émission & rachat primaires",
    noListings: "OTC via l’émetteur uniquement. Aucune garantie d’inscription ou de liquidité.",
    fees: "Frais", feesLines: "Achat 5 % · Rachat 0 % (frais bancaires pris en charge par l’émetteur)",
    cutoffs: "Heures limites (Londres)",
    cutoffsLines: "Achats avant 15:00 → le jour même. Rachats ≤100k£ avant 15:00 → le jour même ; 100k–1m T+1 ; >1m T+2.",
    rails: "Réseaux", railsLines: "Faster Payments, CHAPS, SWIFT", kyc: "KYC/LAB",
    kycLines: "Obligatoire pour tous; US autorisés avec EDD; pays sous sanctions exclus.",
    buyTitle: "Demande d’achat PGBP", fullKycNote: "Contrôle de conformité préalable avant l’envoi des instructions de paiement.",
    name: "Nom complet", email: "E‑mail", country: "Pays", amount: "Montant (GBP)", purpose: "Usage prévu",
    submitBuy: "Envoyer la demande", redeemTitle: "Programmer un rachat",
    redeemNote: "Choisissez un créneau. Nous confirmerons par e‑mail avec une invitation calendrier.", date: "Date", time: "Heure",
    amountToken: "Montant (PGBP)", payoutIban: "IBAN / Coordonnées bancaires UK", submitRedeem: "Demander le créneau",
    contactTitle: "Contacter l’équipe dev/ops", message: "Message", sendMessage: "Envoyer",
    success: "Envoyé. Nous revenons vers vous.", downloadIcs: "Télécharger l’invitation (.ics)",
    social: "Communauté & actus", cookieTitle: "Cookies & analytics", cookieText: "Nous utilisons des analytics respectueux de la vie privée (Plausible). D’accord ?",
    accept: "OK", decline: "Refuser", legal: "Mentions légales",
    legalBullets: [
      "PGBP n’est pas un dépôt bancaire, ne porte pas intérêt et n’est pas couvert par la FSCS.",
      "Émission/rachat primaires via l’émetteur uniquement ; aucune garantie d’inscription/liquidité.",
      "KYC/AML, sanctions et Travel Rule s’appliquent.",
    ],
    links: { etherscan: "Voir sur Etherscan", whitepaper: "Livre blanc (PDF)", transparency: "Transparence", terms: "Conditions", privacy: "Confidentialité" },
  },
} as const;

const ETHERSCAN_URL = "https://etherscan.io/token/0x5239c659A13f043358D551360C3b8FF1251d76D9";
const TREASURY = "0x4ba2d7faae4453a122743a56736b0d4cebf10804";
const REDEMPTION = "0x50e3763b8ec8ce86b34ee3005e960577783b2964";
type LocaleKey = keyof typeof DICT;

export default function App() {
  const [locale, setLocale] = useState<LocaleKey>("en");
  const t = useMemo(() => DICT[locale], [locale]);
  const [consent, setConsent] = useState(false);
  const dir = locale === "ar" ? "rtl" : "ltr";
  const [buy, setBuy] = useState({ name: "", email: "", country: "", amount: "", purpose: "" });
  const [redeem, setRedeem] = useState({ date: "", time: "", amount: "", iban: "" });
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  function handleLangChange(next: LocaleKey) {
    setLocale(next);
    document.documentElement.setAttribute("lang", next);
    document.documentElement.setAttribute("dir", next === "ar" ? "rtl" : "ltr");
  }

  async function submit(path: string, payload: any) {
    try {
      const res = await fetch(path, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, locale }) });
      if (!res.ok) throw new Error("Request failed");
      setStatus(t.success);
    } catch (e) {
      setStatus("Error. Please try again.");
    }
  }

  function makeICS(summary: string, description: string, startISO: string, durationMinutes = 30) {
    try {
      const start = new Date(startISO);
      const end = new Date(start.getTime() + durationMinutes * 60000);
      const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
      const ics = [
        "BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//PGBP//EN","BEGIN:VEVENT",
        `UID:${Math.random().toString(36).slice(2)}@pgbp.io`,
        `DTSTAMP:${fmt(new Date())}`,
        `DTSTART:${fmt(start)}`,
        `DTEND:${fmt(end)}`,
        `SUMMARY:${summary}`,
        `DESCRIPTION:${description}`,
        "END:VEVENT","END:VCALENDAR",
      ].join("\\r\\n");
      const blob = new Blob([ics], { type: "text/calendar" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "pgbp-redemption.ics"; a.click();
    } catch {}
  }

  return (
    <div className="min-h-screen bg-white text-slate-900" dir={dir}>
      {!consent && (
        <div className="fixed bottom-0 inset-x-0 z-50 bg-slate-900 text-white px-4 py-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <div className="text-sm"><strong>{t.cookieTitle}:</strong> {t.cookieText}</div>
          <div className="ml-auto flex gap-2">
            <button className="px-3 py-1 rounded bg-emerald-500" onClick={() => setConsent(true)}>{t.accept}</button>
            <button className="px-3 py-1 rounded bg-slate-700" onClick={() => setConsent(false)}>{t.decline}</button>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/assets/PGBP_128.png" alt="PGBP logo" className="w-6 h-6 rounded" />
            <div className="font-semibold tracking-wide text-pgbpTeal">PGBP</div>
          </div>
          <nav className="hidden md:flex gap-5 text-sm">
            <a href="#facts" className="hover:underline">{t.facts}</a>
            <a href="#buy" className="hover:underline">{t.ctaBuy}</a>
            <a href="#redeem" className="hover:underline">{t.ctaRedeem}</a>
            <a href="#contact" className="hover:underline">{t.ctaContact}</a>
          </nav>
          <div className="ml-auto flex items-center gap-2 text-sm">
            <select value={locale} onChange={(e)=>handleLangChange(e.target.value as LocaleKey)} className="border rounded px-2 py-1">
              {Object.entries(DICT).map(([k,v]) => <option key={k} value={k}>{(v as any).langName}</option>)}
            </select>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-pgbpGold/20 to-pgbpTeal/10">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-serif text-pgbpTeal">{t.heroTitle}</h1>
            <p className="mt-2 text-slate-700">{t.heroTag}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#buy" className="px-4 py-2 rounded-2xl bg-pgbpTeal text-white">{t.ctaBuy}</a>
              <a href="#redeem" className="px-4 py-2 rounded-2xl border border-pgbpTeal text-pgbpTeal">{t.ctaRedeem}</a>
              <a href="#contact" className="px-4 py-2 rounded-2xl border border-slate-300">{t.ctaContact}</a>
            </div>
          </div>
          <div className="rounded-2xl border bg-white/70 p-4">
            <div className="text-xs uppercase tracking-wider text-slate-500">{t.facts}</div>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-lg border"><div className="text-slate-500">{t.network}</div><div className="font-medium">{t.ethereumOnly}</div></div>
              <div className="p-3 rounded-lg border">
                <div className="text-slate-500">{t.contract}</div>
                <div className="font-mono text-xs break-all">0x5239c659A13f043358D551360C3b8FF1251d76D9</div>
                <a className="text-pgbpTeal underline text-xs" href={ETHERSCAN_URL} target="_blank" rel="noreferrer">{t.links.etherscan}</a>
              </div>
              <div className="p-3 rounded-lg border"><div className="text-slate-500">{t.supply}</div><div className="font-medium">{t.fixedSupply}</div></div>
              <div className="p-3 rounded-lg border"><div className="text-slate-500">{t.controls}</div><div className="font-medium">{t.controlsText}</div></div>
              <div className="p-3 rounded-lg border sm:col-span-2"><div className="text-slate-500">{t.issuer}</div><div className="font-medium">{t.issuerName}</div></div>
            </div>
            <div className="mt-3 text-sm">
              <a href="/PGBP_Whitepaper_v1.0.pdf" className="underline mr-4">{t.links.whitepaper}</a>
              <a href="/transparency" className="underline">{t.links.transparency}</a>
            </div>
          </div>
        </div>
      </section>

      <section id="facts" className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        <div className="p-4 border rounded-2xl">
          <h2 className="text-xl font-serif text-pgbpTeal mb-2">{t.wallets}</h2>
          <ul className="text-sm space-y-1">
            <li><strong>{t.treasury}:</strong> <span className="font-mono">{TREASURY}</span></li>
            <li><strong>{t.redemption}:</strong> <span className="font-mono">{REDEMPTION}</span></li>
          </ul>
        </div>
        <div className="p-4 border rounded-2xl">
          <h2 className="text-xl font-serif text-pgbpTeal mb-2">{t.primary}</h2>
          <p className="text-sm">{t.noListings}</p>
          <ul className="text-sm list-disc ml-5 mt-2">
            <li><strong>{t.fees}:</strong> {t.feesLines}</li>
            <li><strong>{t.cutoffs}:</strong> {t.cutoffsLines}</li>
            <li><strong>{t.rails}:</strong> {t.railsLines}</li>
            <li><strong>{t.kyc}:</strong> {t.kycLines}</li>
          </ul>
        </div>
      </section>

      <section id="buy" className="max-w-3xl mx-auto px-4 py-8">
        <div className="p-5 border rounded-2xl">
          <h2 className="text-2xl font-serif text-pgbpTeal mb-2">{t.buyTitle}</h2>
          <p className="text-sm text-slate-600 mb-4">{t.fullKycNote}</p>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <label className="grid gap-1"><span>{t.name}</span><input className="border rounded px-2 py-1" value={buy.name} onChange={(e)=>setBuy({ ...buy, name:e.target.value })} /></label>
            <label className="grid gap-1"><span>{t.email}</span><input type="email" className="border rounded px-2 py-1" value={buy.email} onChange={(e)=>setBuy({ ...buy, email:e.target.value })} /></label>
            <label className="grid gap-1"><span>{t.country}</span><input className="border rounded px-2 py-1" value={buy.country} onChange={(e)=>setBuy({ ...buy, country:e.target.value })} /></label>
            <label className="grid gap-1"><span>{t.amount}</span><input type="number" className="border rounded px-2 py-1" value={buy.amount} onChange={(e)=>setBuy({ ...buy, amount:e.target.value })} /></label>
            <label className="grid gap-1 sm:col-span-2"><span>{t.purpose}</span><input className="border rounded px-2 py-1" value={buy.purpose} onChange={(e)=>setBuy({ ...buy, purpose:e.target.value })} /></label>
          </div>
          <div className="mt-4 flex gap-2 items-center">
            <button onClick={()=>submit('/api/buy', { ...buy })} className="px-4 py-2 rounded bg-pgbpTeal text-white">{t.submitBuy}</button>
            {status && <span className="text-emerald-700 text-sm">{t.success === status ? status : status}</span>}
          </div>
        </div>
      </section>

      <section id="redeem" className="max-w-3xl mx-auto px-4 py-8">
        <div className="p-5 border rounded-2xl">
          <h2 className="text-2xl font-serif text-pgbpTeal mb-2">{t.redeemTitle}</h2>
          <p className="text-sm text-slate-600 mb-4">{t.redeemNote}</p>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <label className="grid gap-1"><span>{t.date}</span><input type="date" className="border rounded px-2 py-1" value={redeem.date} onChange={(e)=>setRedeem({ ...redeem, date:e.target.value })} /></label>
            <label className="grid gap-1"><span>{t.time}</span><input type="time" className="border rounded px-2 py-1" value={redeem.time} onChange={(e)=>setRedeem({ ...redeem, time:e.target.value })} /></label>
            <label className="grid gap-1"><span>{t.amountToken}</span><input type="number" className="border rounded px-2 py-1" value={redeem.amount} onChange={(e)=>setRedeem({ ...redeem, amount:e.target.value })} /></label>
            <label className="grid gap-1 sm:col-span-2"><span>{t.payoutIban}</span><input className="border rounded px-2 py-1" placeholder="IBAN or Sort Code + Account" value={redeem.iban} onChange={(e)=>setRedeem({ ...redeem, iban:e.target.value })} /></label>
          </div>
          <div className="mt-4 flex gap-2 items-center">
            <button onClick={() => {
              const iso = redeem.date && redeem.time ? `${redeem.date}T${redeem.time}:00Z` : "";
              if (!iso) return setStatus("Pick date & time");
              makeICS("PGBP Redemption", `Redemption request: ${redeem.amount} PGBP`, iso, 30);
              submit('/api/redeem', { ...redeem });
            }} className="px-4 py-2 rounded bg-pgbpTeal text-white">{t.submitRedeem}</button>
            {status && <span className="text-emerald-700 text-sm">{status}</span>}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-3xl mx-auto px-4 py-8">
        <div className="p-5 border rounded-2xl">
          <h2 className="text-2xl font-serif text-pgbpTeal mb-2">{t.contactTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <label className="grid gap-1"><span>{t.name}</span><input className="border rounded px-2 py-1" value={contact.name} onChange={(e)=>setContact({ ...contact, name:e.target.value })} /></label>
            <label className="grid gap-1"><span>{t.email}</span><input type="email" className="border rounded px-2 py-1" value={contact.email} onChange={(e)=>setContact({ ...contact, email:e.target.value })} /></label>
            <label className="grid gap-1 sm:col-span-2"><span>{t.message}</span><textarea className="border rounded px-2 py-1" rows={4} value={contact.message} onChange={(e)=>setContact({ ...contact, message:e.target.value })} /></label>
          </div>
          <div className="mt-4 flex gap-2 items-center">
            <button onClick={()=>submit('/api/contact', { ...contact })} className="px-4 py-2 rounded bg-pgbpTeal text-white">{t.sendMessage}</button>
            {status && <span className="text-emerald-700 text-sm">{status}</span>}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        <div className="p-4 border rounded-2xl">
          <h2 className="text-xl font-serif text-pgbpTeal mb-2">{t.social}</h2>
          <ul className="text-sm space-y-2">
            <li><a className="underline" href="https://twitter.com/pgbpio" target="_blank" rel="noreferrer">X (Twitter) @pgbpio</a></li>
            <li><a className="underline" href="https://t.me/pgbpio" target="_blank" rel="noreferrer">Telegram @pgbpio</a></li>
            <li><a className="underline" href="https://discord.gg/" target="_blank" rel="noreferrer">Discord (public invite)</a></li>
            <li><a className="underline" href="mailto:info@pgbp.io">info@pgbp.io</a></li>
          </ul>
        </div>
        <div className="p-4 border rounded-2xl">
          <h2 className="text-xl font-serif text-pgbpTeal mb-2">{t.legal}</h2>
          <ul className="text-sm list-disc ml-5 space-y-1">
            {t.legalBullets.map((x: string, i: number) => <li key={i}>{x}</li>)}
          </ul>
          <div className="mt-2 text-sm">
            <a className="underline mr-4" href="/terms">{t.links.terms}</a>
            <a className="underline" href="/privacy">{t.links.privacy}</a>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-600 flex flex-wrap gap-3 items-center">
          <div>© {new Date().getFullYear()} PGBP PAYMENTS LTD</div>
          <div className="ml-auto">Contract:&nbsp;
            <a className="font-mono underline" href={ETHERSCAN_URL} target="_blank" rel="noreferrer">0x5239…d76D9</a>
          </div>
        </div>
      </footer>

      {consent && (<script defer data-domain="pgbp.io" src="https://plausible.io/js/script.js"></script>)}
    </div>
  );
}
