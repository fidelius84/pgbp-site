import { ReactNode } from "react";
import Logo from "./Logo";

interface Props { title: ReactNode; subtitle?: string; children?: ReactNode; tall?: boolean; }

export default function Hero({ title, subtitle, children, tall }: Props) {
  return (
    <section className={`relative overflow-hidden bg-teal text-white ${tall ? "min-h-[60vh]" : "min-h-[36vh]"} flex items-center`}>
      <div className="absolute inset-0 hero-grain opacity-60" aria-hidden />
      {/* Decorative mark watermark */}
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 text-gold/[0.06] hidden md:block pointer-events-none" aria-hidden>
        <Logo className={tall ? "h-[40rem] w-[40rem]" : "h-[24rem] w-[24rem]"} />
      </div>
      <div className="container-x relative z-10 py-16 sm:py-20 md:py-24">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className={tall ? "display-1" : "display-2"}>{title}</h1>
          {subtitle && <p className="mt-6 text-lg md:text-xl text-gold font-serif italic">{subtitle}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
