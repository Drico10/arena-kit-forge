import { createFileRoute, Link } from "@tanstack/react-router";
import { User, MapPin, Package, Heart, LogOut } from "lucide-react";

export const Route = createFileRoute("/account")({ component: Account });

function Account() {
  const tiles = [
    { icon: Package, title: "Orders", desc: "Track and view past orders", to: "/orders" },
    { icon: Heart, title: "Wishlist", desc: "Saved items", to: "/wishlist" },
    { icon: MapPin, title: "Addresses", desc: "Manage shipping addresses", to: "/account" },
    { icon: User, title: "Profile", desc: "Personal info & password", to: "/account" },
  ];
  return (
    <div className="container-x py-10 md:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">My account</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">Welcome back, Champion</h1>
      <p className="mt-2 text-muted-foreground">Manage your Imports Arena experience.</p>

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
          <h2 className="font-display text-xl">Profile</h2>
          <dl className="mt-4 grid grid-cols-[120px_1fr] gap-y-2 text-sm">
            <dt className="text-muted-foreground">Name</dt><dd>Champion Player</dd>
            <dt className="text-muted-foreground">Email</dt><dd>champion@arena.com</dd>
            <dt className="text-muted-foreground">Member since</dt><dd>2024</dd>
          </dl>
        </section>
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-xl">Default address</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Champion Player<br/>123 Maracanã Ave<br/>Rio de Janeiro, Brazil
          </p>
        </section>
      </div>

      <button className="mt-8 inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm hover:border-destructive hover:text-destructive">
        <LogOut className="h-4 w-4" /> Sign out
      </button>
    </div>
  );
}
