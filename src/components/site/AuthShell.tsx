import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function AuthShell({ title, subtitle, children, alt }: {
  title: string; subtitle: string; children: ReactNode; alt: { text: string; linkText: string; to: string };
}) {
  return (
    <div className="container-x flex min-h-[80vh] items-center justify-center py-16">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 md:p-10">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Imports Arena</p>
        <h1 className="mt-2 font-display text-3xl md:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
        <div className="mt-6 space-y-3">{children}</div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          {alt.text} <Link to={alt.to} className="text-gold hover:underline">{alt.linkText}</Link>
        </p>
      </div>
    </div>
  );
}

export function Field(p: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = p;
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-foreground/80">{label}</span>
      <input {...rest} className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
    </label>
  );
}
