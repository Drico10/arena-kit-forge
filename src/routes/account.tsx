import { createFileRoute, Link } from "@tanstack/react-router";
import { User, MapPin, Package, Heart, LogOut } from "lucide-react";

export const Route = createFileRoute("/account")({ component: Account });

function Account() {
  const tiles = [
    { icon: Package, title: "Pedidos", desc: "Acompanhe e veja seu histórico", to: "/orders" },
    { icon: Heart, title: "Favoritos", desc: "Suas camisas salvas", to: "/wishlist" },
    { icon: MapPin, title: "Endereços", desc: "Gerencie seus endereços de entrega", to: "/account" },
    { icon: User, title: "Perfil", desc: "Dados pessoais e senha", to: "/account" },
  ];
  return (
    <div className="container-x py-10 md:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Minha conta</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">Bem-vindo de volta, Craque</h1>
      <p className="mt-2 text-muted-foreground">Gerencie sua experiência na Imports Arena.</p>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {tiles.map((t) => (
          <Link key={t.title} to={t.to} className="group rounded-xl border border-border bg-card p-6 transition hover:border-gold">
            <t.icon className="h-8 w-8 text-gold" />
            <h3 className="mt-4 font-display text-xl">{t.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-xl">Perfil</h2>
          <dl className="mt-4 grid grid-cols-[120px_1fr] gap-y-2 text-sm">
            <dt className="text-muted-foreground">Nome</dt><dd>Torcedor Craque</dd>
            <dt className="text-muted-foreground">E-mail</dt><dd>craque@arena.com</dd>
            <dt className="text-muted-foreground">Cliente desde</dt><dd>2024</dd>
          </dl>
        </section>
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-xl">Endereço padrão</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Torcedor Craque<br/>Av. Maracanã, 123<br/>Rio de Janeiro, RJ
          </p>
        </section>
      </div>

      <button className="mt-8 inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm hover:border-destructive hover:text-destructive">
        <LogOut className="h-4 w-4" /> Sair
      </button>
    </div>
  );
}
