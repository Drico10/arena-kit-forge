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
        <img src={hero} alt="Futebol" width={1920} height={1080} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="container-x flex min-h-[78vh] flex-col justify-center py-24">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Temporada 2024/25 · Coleção Pontapé Inicial</p>
          <h1 className="max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
            Pelo amor ao <span className="gold-text">jogo</span>.
            <br />Vestida por quem torce de verdade.
          </h1>
          <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
            Camisas feitas pra dia de jogo, pra pelada no domingo e pra assistir o clássico no sofá. Grandes clubes, seleções e retrôs eternas — com preço justo e entrega pra todo o Brasil.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/shop" className="btn-gold rounded-md px-7 py-3.5 text-sm uppercase tracking-widest">
              Ver todas as camisas
            </Link>
            <Link to="/categories" className="rounded-md border border-border bg-background/50 px-7 py-3.5 text-sm uppercase tracking-widest backdrop-blur transition hover:border-gold hover:text-gold">
              Escolha seu time
            </Link>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            ⚽ Mais de 120 mil torcedores atendidos em 90+ países
          </p>
        </div>
      </section>

      {/* Trust section */}
      <section className="border-y border-border bg-card/40">
        <div className="container-x grid grid-cols-2 gap-x-6 gap-y-8 py-12 md:grid-cols-4 md:py-14">
          {[
            { icon: ShieldCheck, t: "Compra Segura", s: "Site protegido e Pix na hora" },
            { icon: Truck, t: "Entrega no Brasil todo", s: "Frete grátis acima de R$ 500" },
            { icon: Award, t: "Qualidade de torcedor", s: "Camisa que aguenta várias temporadas" },
            { icon: Headphones, t: "Atendimento humano", s: "Torcedor falando com torcedor, 7 dias" },
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
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">O nosso credo</p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            A gente não é moda. <span className="gold-text">A gente é futebol.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Cada escudo aqui significa alguma coisa pra alguém. A gente caça as camisas que o torcedor realmente quer — do clássico paulista à pelada de domingo — e cobra o preço justo. Sem hype, sem exagero. Só camisa boa, entregue pra quem ama o jogo tanto quanto a gente.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span>⚽ Pelo torcedor</span>
            <span className="text-gold">✦</span>
            <span>Preço justo</span>
            <span className="text-gold">✦</span>
            <span>Sem enrolação</span>
            <span className="text-gold">✦</span>
            <span>Todo escudo importa</span>
          </div>
        </div>
      </section>


      <Section eyebrow="Selecionadas a dedo" title="Destaques" cta={{ label: "Ver todas", to: "/shop" }}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      <Section eyebrow="Acabaram de chegar" title="Novidades" cta={{ label: "Ver novidades", to: "/shop" }}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {newArrivals.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      <Section eyebrow="Queridinhas da torcida" title="Mais Vendidas" cta={{ label: "Ver ranking", to: "/shop" }}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {bestSellers.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      {/* Category showcase */}
      <section className="container-x py-16 md:py-24">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">Explore</p>
        <h2 className="mb-8 font-display text-3xl md:text-5xl">Compre por categoria</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { label: "Clubes Brasileiros", to: "/shop?category=clubs-br", img: brClubs[0]?.image },
            { label: "Clubes Europeus", to: "/shop?category=clubs-eu", img: euClubs[0]?.image },
            { label: "Seleções", to: "/shop?category=national", img: national[0]?.image },
            { label: "Retrô", to: "/shop?category=retro", img: retro[0]?.image },
          ].map((c) => (
            <Link key={c.label} to={c.to} className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-border bg-black">
              <img src={c.img} alt={c.label} loading="lazy" className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-2xl">{c.label}</h3>
                <p className="mt-1 flex items-center gap-1 text-xs uppercase tracking-widest text-gold">
                  Ver agora <ArrowRight className="h-3 w-3" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Section eyebrow="Samba no peito" title="Clubes Brasileiros" cta={{ label: "Ver todos", to: "/shop?category=clubs-br" }}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {brClubs.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      <Section eyebrow="Velho continente" title="Clubes Europeus" cta={{ label: "Ver todos", to: "/shop?category=clubs-eu" }}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {euClubs.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      <Section eyebrow="Orgulho de nação" title="Seleções" cta={{ label: "Ver todas", to: "/shop?category=national" }}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {national.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      <Section eyebrow="Eternas" title="Camisas Retrô" cta={{ label: "Ver todas", to: "/shop?category=retro" }}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {retro.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      {/* Reviews */}
      <section className="border-y border-border bg-card/40 py-16 md:py-24">
        <div className="container-x">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">Voz da arquibancada</p>
          <h2 className="mb-8 font-display text-3xl md:text-5xl">A palavra é do torcedor</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: "Lucas M.", c: "São Paulo, SP", t: "Fui pro clássico com a camisa do Timão. Parecia que eu tava dentro de campo. Tecido, escudo, acabamento — tudo impecável.", r: 5 },
              { n: "Sofia D.", c: "Belo Horizonte, MG", t: "Chegou a retrô do Santos e meu pai chorou. Chorou de verdade. É história, não é exagero.", r: 5 },
              { n: "Rafael K.", c: "Porto Alegre, RS", t: "Preço honesto, entrega rápida, veste que é uma beleza. Já voltei pra segunda — dessa vez a do United.", r: 5 },
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
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">Entra no grupo</p>
            <h2 className="font-display text-3xl md:text-5xl">Fica de olho no vestiário</h2>
            <p className="mt-4 text-muted-foreground">10% de desconto na primeira camisa, aviso antes de todo mundo quando as retrôs voltarem e dicas honestas de dia de jogo. Sem spam, sem hype — só futebol.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input type="email" required placeholder="seu@email.com"
                className="flex-1 rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
              <button className="btn-gold rounded-md px-6 py-3 text-sm uppercase tracking-widest">Quero entrar</button>
            </form>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="container-x pb-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">@importsarena</p>
            <h2 className="font-display text-3xl md:text-5xl">No Instagram</h2>
          </div>
          <a href="#" className="hidden text-sm uppercase tracking-widest text-gold hover:underline md:inline">Seguir</a>
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
