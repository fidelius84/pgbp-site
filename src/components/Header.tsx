import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const links = [
  { to: "/about", label: "About" },
  { to: "/token", label: "Token" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/transparency", label: "Transparency" },
  { to: "/whitepaper", label: "Whitepaper" },
  { to: "/faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${scrolled ? "bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm" : "bg-transparent"}`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-teal hover:text-teal-700 transition" aria-label="PGBP — home">
          <Logo className="h-9 w-9" />
          <span className="font-serif text-lg font-bold tracking-wide">PEGGED GBP</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `transition-colors hover:text-teal ${isActive ? "text-teal" : "text-ink/80"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary !py-2 !text-sm">Contact</Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden p-2 text-ink"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="container-x py-4 flex flex-col gap-2 text-sm font-medium">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 ${isActive ? "text-teal" : "text-ink/80"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary !py-2 !text-sm mt-2 self-start"
            >Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
