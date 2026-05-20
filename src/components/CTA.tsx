import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface Props {
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export default function CTA({ to, href, variant = "primary", children, className = "", external }: Props) {
  const cls = `${variant === "primary" ? "btn-primary" : variant === "secondary" ? "btn-secondary" : "btn-ghost"} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }
  return <Link to={to || "#"} className={cls}>{children}</Link>;
}
