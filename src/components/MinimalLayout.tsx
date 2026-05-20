// Minimal layout for /blocked — no nav, no footer
import { ReactNode } from "react";

export default function MinimalLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-teal text-white">{children}</div>;
}
