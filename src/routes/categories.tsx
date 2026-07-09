import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";

const cats = [
  { key: "clubs-br", label: "Clubes Brasileiros", desc: "Flamengo, Palmeiras, Corinthians, Santos e muito mais." },
  { key: "clubs-eu", label: "Clubes Europeus", desc: "Real Madrid, Barcelona, Man United, Bayern e outros gigantes." },
  { key: "national", label: "Seleções", desc: "Brasil, Argentina, França, Alemanha e o mundo em campo." },
  { key: "retro", label: "Retrô Eternas", desc: "As camisas que fizeram história — e a gente nunca esquece." },
];

export const Route = createFileRoute("/categories")({ component: Categories });

function Categories() {
  return (
    <div className="container-x py-10 md:py-16">
      <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">Explore</p>
      <h1 className="mb-10 font-display text-4xl md:text-6xl">Categorias</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {cats.map((c) => {
          const img = products.find((p) => p.category === c.key)?.image;
          return (
            <Link key={c.key} to="/shop" search={{ category: c.key }} className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-black">
              <img src={img} alt={c.label} loading="lazy" className="h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <h2 className="font-display text-3xl md:text-4xl">{c.label}</h2>
                <p className="mt-2 max-w-md text-sm text-foreground/80">{c.desc}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold">Ver agora <ArrowRight className="h-3 w-3" /></span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
