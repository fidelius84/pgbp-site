import { ReactNode } from "react";

export default function StatusBand({ status, body, action }: { status: string; body: string; action?: ReactNode }) {
  return (
    <div className="rounded-xl border-l-4 border-l-gold bg-cream/50 p-6 md:p-8">
      <div className="flex items-start gap-4">
        <span className="mt-1 inline-block h-3 w-3 shrink-0 rounded-full bg-gold ring-4 ring-gold/20 animate-pulse-slow" />
        <div className="flex-1">
          <p className="text-xs uppercase tracking-widest text-muted font-medium">Current status</p>
          <p className="mt-1 font-serif text-xl text-teal">{status}</p>
          <p className="mt-3 text-sm text-ink/80 leading-relaxed">{body}</p>
          {action && <div className="mt-4">{action}</div>}
        </div>
      </div>
    </div>
  );
}
