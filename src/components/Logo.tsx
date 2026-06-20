// PGBP mark — inline SVG, can be coloured via currentColor
export default function Logo({ className = "h-10 w-10", title = "PGBP" }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      <title>{title}</title>
      {/* Outer ring */}
      <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {/* Pound sign — simplified */}
      <path
        d="M 33 38 C 33 32, 38 28, 44 28 C 50 28, 54 32, 54 38 L 54 42 M 28 45 L 50 45 M 28 53 L 50 53 M 28 62 L 56 62 M 56 62 L 56 67"
        fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Network nodes */}
      <circle cx="68" cy="42" r="2" fill="currentColor" />
      <circle cx="76" cy="50" r="2.5" fill="currentColor" />
      <circle cx="68" cy="58" r="2" fill="currentColor" />
      <circle cx="22" cy="50" r="1.5" fill="currentColor" />
      <line x1="58" y1="45" x2="66" y2="42" stroke="currentColor" strokeWidth="1" />
      <line x1="58" y1="50" x2="74" y2="50" stroke="currentColor" strokeWidth="1" />
      <line x1="58" y1="55" x2="66" y2="58" stroke="currentColor" strokeWidth="1" />
      <line x1="24" y1="50" x2="28" y2="50" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
