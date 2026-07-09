import { Link } from "@tanstack/react-router";
import { Heart, Search, ShoppingBag, User, Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useStore } from "@/lib/store";

const nav = [
  { to: "/shop", label: "Loja" },
  { to: "/categories", label: "Categorias" },
  { to: "/about", label: "Sobre" },
  { to: "/contact", label: "Contato" },
];

export function Header() {
  const { cartCount, wishlist } = useStore();
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      {/* Free shipping banner */}
      <div className="overflow-hidden bg-gold text-gold-foreground">
        <div className="flex whitespace-nowrap py-1.5 text-xs font-semibold uppercase tracking-widest marquee">
          <span className="mx-8">⚽ Frete grátis pra todo Brasil acima de R$ 500</span>
          <span className="mx-8">✦</span>
          <span className="mx-8">ARENA10 — 10% OFF na sua primeira camisa</span>
          <span className="mx-8">✦</span>
          <span className="mx-8">Feito por torcedor, pra torcedor</span>
          <span className="mx-8">✦</span>
          <span className="mx-8">Entrega em 5–10 dias · Pronto pra próxima rodada</span>
          <span className="mx-8">✦</span>
          <span className="mx-8">⚽ Frete grátis pra todo Brasil acima de R$ 500</span>
          <span className="mx-8">✦</span>
          <span className="mx-8">ARENA10 — 10% OFF na sua primeira camisa</span>
          <span className="mx-8">✦</span>
          <span className="mx-8">Feito por torcedor, pra torcedor</span>
          <span className="mx-8">✦</span>
        </div>
      </div>

      <div className="container-x flex h-16 items-center gap-4 md:h-20">
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>

        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl leading-none md:text-3xl">
            IMPORTS<span className="gold-text">ARENA</span>
          </span>
        </Link>

        <nav className="ml-8 hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium uppercase tracking-wider text-foreground/80 transition hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1 md:gap-2">
          <button className="hidden rounded-full p-2 hover:bg-secondary md:inline-flex" aria-label="Buscar">
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={() => setLight((v) => !v)}
            className="rounded-full p-2 hover:bg-secondary"
            aria-label="Alternar tema"
          >
            {light ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <Link to="/account" className="rounded-full p-2 hover:bg-secondary" aria-label="Minha conta">
            <User className="h-5 w-5" />
          </Link>
          <Link to="/wishlist" className="relative rounded-full p-2 hover:bg-secondary" aria-label="Favoritos">
            <Heart className="h-5 w-5" />
            {wishlist.length > 0 && (
              <span className="absolute -right-0 -top-0 grid h-4 w-4 place-items-center rounded-full bg-gold text-[10px] font-bold text-gold-foreground">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative rounded-full p-2 hover:bg-secondary" aria-label="Carrinho">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-0 -top-0 grid h-4 w-4 place-items-center rounded-full bg-gold text-[10px] font-bold text-gold-foreground">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {open && (
        <div className="border-t border-border lg:hidden">
          <nav className="container-x flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium uppercase tracking-wider"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
