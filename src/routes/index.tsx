import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Award, Headphones, Star } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

function Section({
  eyebrow, title, cta, children,
}: { eyebrow?: string; title: string; cta?: { label: string; to: string }; children: React.ReactNode }) {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          {eyebrow && <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</p>}
          <h2 className="font-display text-3xl md:text-5xl">{title}</h2>
        </div>
        {cta && (
          <Link to={cta.to} className="hidden items-center gap-2 text-sm font-medium uppercase tracking-widest text-gold hover:underline md:inline-flex">
            {cta.label} <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

function Home() {
  const featured = products.slice(0, 4);
  const newArrivals = products.filter((p) => p.badge === "NEW").concat(products).slice(0, 4);
  const bestSellers = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 4);
  const brClubs = products.filter((p) => p.category === "clubs-br");
  const euClubs = products.filter((p) => p.category === "clubs-eu");
  const national = products.filter((p) => p.category === "national");
  const retro = products.filter((p) => p.category === "retro");

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="Football" width={1920} height={1080} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="container-x flex min-h-[78vh] flex-col justify-center py-24">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">2024/25 Season · Kickoff Collection</p>
          <h1 className="max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
            For the love of the <span className="gold-text">game</span>.
            <br />Worn by real fans.
          </h1>
          <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
            Football jerseys built for matchdays, five-a-sides and Sunday couches. Top clubs, national teams and retro icons — priced fair, shipped worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/shop" className="btn-gold rounded-md px-7 py-3.5 text-sm uppercase tracking-widest">
              Shop the kits
            </Link>
            <Link to="/categories" className="rounded-md border border-border bg-background/50 px-7 py-3.5 text-sm uppercase tracking-widest backdrop-blur transition hover:border-gold hover:text-gold">
              Pick your team
            </Link>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            ⚽ Trusted by 120,000+ fans in 90+ countries
          </p>
        </div>
      </section>

      {/* Trust section */}
      <section className="border-y border-border bg-card/40">
        <div className="container-x grid grid-cols-2 gap-x-6 gap-y-8 py-12 md:grid-cols-4 md:py-14">
          {[
            { icon: ShieldCheck, t: "Safe Checkout", s: "Buy with confidence" },
            { icon: Truck, t: "Worldwide Delivery", s: "Free over $150" },
            { icon: Award, t: "Fan-Grade Quality", s: "Kits that last seasons" },
            { icon: Headphones, t: "Real Humans", s: "Fans helping fans, 7 days" },
          ].map(({ icon: Icon, t, s }) => (
            <div key={t} className="flex items-start gap-3 md:gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 bg-gold/5 text-gold">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-tight">{t}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="container-x py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">The Arena creed</p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            We're not a fashion brand. <span className="gold-text">We're football.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Every crest here means something to someone. We hunt down the shirts fans actually want — from São Paulo derbies to Sunday-league heroes — and we keep the prices honest. No hype tax. Just kits, delivered to fans who love the game as much as we do.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span>⚽ For the fans</span>
            <span className="text-gold">✦</span>
            <span>Fair prices</span>
            <span className="text-gold">✦</span>
            <span>No gatekeepers</span>
            <span className="text-gold">✦</span>
            <span>Every crest matters</span>
          </div>
        </div>
      </section>


      <Section eyebrow="Handpicked" title="Featured Products" cta={{ label: "Shop all", to: "/shop" }}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      <Section eyebrow="Just dropped" title="New Arrivals" cta={{ label: "Shop new", to: "/shop" }}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {newArrivals.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      <Section eyebrow="Fan favourites" title="Best Sellers" cta={{ label: "See top", to: "/shop" }}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {bestSellers.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      {/* Category showcase */}
      <section className="container-x py-16 md:py-24">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">Explore</p>
        <h2 className="mb-8 font-display text-3xl md:text-5xl">Shop by category</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { label: "Brazilian Clubs", to: "/shop?category=clubs-br", img: brClubs[0]?.image },
            { label: "European Clubs", to: "/shop?category=clubs-eu", img: euClubs[0]?.image },
            { label: "National Teams", to: "/shop?category=national", img: national[0]?.image },
            { label: "Retro", to: "/shop?category=retro", img: retro[0]?.image },
          ].map((c) => (
            <Link key={c.label} to={c.to} className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-border bg-black">
              <img src={c.img} alt={c.label} loading="lazy" className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-2xl">{c.label}</h3>
                <p className="mt-1 flex items-center gap-1 text-xs uppercase tracking-widest text-gold">
                  Shop now <ArrowRight className="h-3 w-3" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Section eyebrow="Samba style" title="Brazilian Clubs" cta={{ label: "All Brazilian", to: "/shop?category=clubs-br" }}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {brClubs.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      <Section eyebrow="Old continent" title="European Clubs" cta={{ label: "All European", to: "/shop?category=clubs-eu" }}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {euClubs.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      <Section eyebrow="Country pride" title="National Teams" cta={{ label: "All national", to: "/shop?category=national" }}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {national.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      <Section eyebrow="Timeless" title="Retro Jerseys" cta={{ label: "All retro", to: "/shop?category=retro" }}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {retro.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      {/* Reviews */}
      <section className="border-y border-border bg-card/40 py-16 md:py-24">
        <div className="container-x">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">From the terraces</p>
          <h2 className="mb-8 font-display text-3xl md:text-5xl">Fans, in their own words</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: "Lucas M.", c: "São Paulo, Brazil", t: "Wore my Timão shirt to the derby. Felt like I was on the pitch. Fabric, crest, everything — spot on.", r: 5 },
              { n: "Sophie D.", c: "Lyon, France", t: "The retro Santos arrived and my dad cried. Actually cried. Wearing history, no exaggeration.", r: 5 },
              { n: "James K.", c: "Manchester, UK", t: "Fair price, quick delivery, fits like a proper kit. Already back for my second — City away this time.", r: 5 },
            ].map((r) => (
              <div key={r.n} className="rounded-xl border border-border bg-background p-6">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: r.r }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm text-foreground/90">"{r.t}"</p>
                <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{r.n} · {r.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-x py-16 md:py-24">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-background p-8 md:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative max-w-xl">
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">The Arena</p>
            <h2 className="font-display text-3xl md:text-5xl">Join the squad</h2>
            <p className="mt-4 text-muted-foreground">Get 10% off your first order plus early access to drops and retro restocks.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input type="email" required placeholder="your@email.com"
                className="flex-1 rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
              <button className="btn-gold rounded-md px-6 py-3 text-sm uppercase tracking-widest">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="container-x pb-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">@importsarena</p>
            <h2 className="font-display text-3xl md:text-5xl">On Instagram</h2>
          </div>
          <a href="#" className="hidden text-sm uppercase tracking-widest text-gold hover:underline md:inline">Follow us</a>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-6">
          {products.slice(0, 6).map((p) => (
            <a key={p.id} href="#" className="group relative aspect-square overflow-hidden rounded-lg bg-black">
              <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/40" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
