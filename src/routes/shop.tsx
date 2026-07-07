import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

type Filters = { q: string; club: string[]; league: string[]; country: string[]; size: string[]; season: string[]; category: string; maxPrice: number };

const uniq = <K extends keyof (typeof products)[number]>(k: K) =>
  Array.from(new Set(products.map((p) => p[k] as string)));

export const Route = createFileRoute("/shop")({
  validateSearch: (s: Record<string, unknown>) => ({ category: (s.category as string) ?? "all" }),
  component: Shop,
});

function Shop() {
  const { category } = Route.useSearch();
  const [filters, setFilters] = useState<Filters>({
    q: "", club: [], league: [], country: [], size: [], season: [], category, maxPrice: 200,
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = useMemo(() => products.filter((p) => {
    if (filters.category !== "all" && p.category !== filters.category) return false;
    if (filters.q && !p.name.toLowerCase().includes(filters.q.toLowerCase()) && !p.club.toLowerCase().includes(filters.q.toLowerCase())) return false;
    if (filters.club.length && !filters.club.includes(p.club)) return false;
    if (filters.league.length && !filters.league.includes(p.league)) return false;
    if (filters.country.length && !filters.country.includes(p.country)) return false;
    if (filters.season.length && !filters.season.includes(p.season)) return false;
    if (filters.size.length && !p.sizes.some((s) => filters.size.includes(s))) return false;
    if (p.price > filters.maxPrice) return false;
    return true;
  }), [filters]);

  const toggle = (key: keyof Filters, val: string) => setFilters((f) => {
    const list = f[key] as string[];
    return { ...f, [key]: list.includes(val) ? list.filter((x) => x !== val) : [...list, val] };
  });

  const FilterGroup = ({ label, values, keyName }: { label: string; values: string[]; keyName: keyof Filters }) => (
    <div className="border-b border-border py-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">{label}</p>
      <div className="space-y-2">
        {values.map((v) => (
          <label key={v} className="flex cursor-pointer items-center gap-2 text-sm text-foreground/80 hover:text-foreground">
            <input type="checkbox" checked={(filters[keyName] as string[]).includes(v)} onChange={() => toggle(keyName, v)}
              className="h-4 w-4 rounded border-border accent-gold" />
            {v}
          </label>
        ))}
      </div>
    </div>
  );

  const Sidebar = (
    <aside className="space-y-2">
      <div className="border-b border-border py-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">Category</p>
        <select value={filters.category} onChange={(e) => setFilters((f) => ({ ...f, category: e.target.value }))}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
          <option value="all">All categories</option>
          <option value="clubs-br">Brazilian Clubs</option>
          <option value="clubs-eu">European Clubs</option>
          <option value="national">National Teams</option>
          <option value="retro">Retro</option>
        </select>
      </div>
      <FilterGroup label="Club" values={uniq("club")} keyName="club" />
      <FilterGroup label="League" values={uniq("league")} keyName="league" />
      <FilterGroup label="Country" values={uniq("country")} keyName="country" />
      <FilterGroup label="Season" values={uniq("season")} keyName="season" />
      <FilterGroup label="Size" values={["S", "M", "L", "XL", "XXL"]} keyName="size" />
      <div className="py-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">Max price: ${filters.maxPrice}</p>
        <input type="range" min={50} max={200} value={filters.maxPrice}
          onChange={(e) => setFilters((f) => ({ ...f, maxPrice: +e.target.value }))}
          className="w-full accent-gold" />
      </div>
    </aside>
  );

  return (
    <div className="container-x py-10 md:py-16">
      <div className="mb-8">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">Shop</p>
        <h1 className="font-display text-4xl md:text-6xl">All Jerseys</h1>
      </div>

      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input value={filters.q} onChange={(e) => setFilters((f) => ({ ...f, q: e.target.value }))}
            placeholder="Search clubs, teams, seasons…"
            className="w-full rounded-md border border-border bg-background py-3 pl-10 pr-4 text-sm outline-none focus:border-gold" />
        </div>
        <button onClick={() => setMobileOpen(true)} className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-3 text-sm md:hidden">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
        <p className="text-sm text-muted-foreground md:ml-4">{filtered.length} products</p>
      </div>

      <div className="grid gap-8 md:grid-cols-[240px_1fr]">
        <div className="hidden md:block">{Sidebar}</div>

        {mobileOpen && (
          <div className="fixed inset-0 z-50 bg-background md:hidden">
            <div className="flex items-center justify-between border-b border-border p-4">
              <h3 className="font-display text-xl">Filters</h3>
              <button onClick={() => setMobileOpen(false)}><X /></button>
            </div>
            <div className="max-h-[calc(100vh-64px)] overflow-y-auto p-4">{Sidebar}</div>
          </div>
        )}

        <div>
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-border p-16 text-center text-muted-foreground">
              No products match your filters.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
