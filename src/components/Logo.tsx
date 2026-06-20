// PGBP mark — uses the designer's official SVG mark from public/assets/brand/
export default function Logo({ className = "h-10 w-10", title = "PGBP" }: { className?: string; title?: string }) {
  return (
    <img
      src="/assets/brand/PGBP_mark_master.svg"
      alt={title}
      className={className}
      draggable={false}
    />
  );
}
