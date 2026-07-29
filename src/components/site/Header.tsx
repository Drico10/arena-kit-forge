import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ShieldCheck, Phone, Headset } from "lucide-react";

const nav = [
  { href: "#coberturas", label: "Coberturas" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg border-b border-border shadow-[0_1px_0_0_rgba(15,23,42,0.04)]"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="hidden border-b border-border lg:block">
        <div className="container-x flex items-stretch justify-end">
          <div className="topbar-slab flex items-center gap-10 py-2.5 pl-16 pr-6">
            <span className="flex items-center gap-2.5">
              <Phone className="h-4 w-4" />
              <span className="leading-tight">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] opacity-80">Central</span>
                <span className="block text-sm font-bold">0800 000 0000</span>
              </span>
            </span>
            <span className="flex items-center gap-2.5">
              <Headset className="h-4 w-4" />
              <span className="leading-tight">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] opacity-80">Assistência 24h</span>
                <span className="block text-sm font-bold">0800 000 0000</span>
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="container-x flex h-16 items-center justify-between md:h-20">

        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl gradient-brand text-white shadow-brand">
            <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold text-brand">Rota Brasil</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Proteção Veicular
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[12px] font-semibold uppercase tracking-[0.05em] text-brand/85 transition hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href="#cotacao" className="btn-highlight rounded-md px-5 py-3 text-[12px] xl:px-6 xl:text-[13px]">
            Cotação
          </a>
          <a
            href="https://wa.me/5500000000000"
            className="hidden rounded-md border border-border px-5 py-3 text-[12px] font-bold uppercase tracking-[0.04em] text-brand transition hover:border-primary hover:text-primary xl:inline-flex"
          >
            Assistência 24h
          </a>
        </div>


        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border text-brand lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-brand/85 hover:bg-secondary hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#cotacao"
              onClick={() => setOpen(false)}
              className="btn-highlight mt-2 rounded-md px-5 py-3 text-center text-sm"
            >
              Cotação
            </a>
            <a
              href="tel:08000000000"
              onClick={() => setOpen(false)}
              className="btn-primary rounded-md px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.04em]"
            >
              Assistência 24h · 0800 000 0000
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
