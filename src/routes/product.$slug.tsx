import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, ShoppingBag, Truck, RefreshCcw, ShieldCheck, Star, Ruler, Minus, Plus } from "lucide-react";
import { getProduct, relatedProducts } from "@/lib/products";
import { formatPrice, useStore } from "@/lib/store";
import { ProductCard } from "@/components/site/ProductCard";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const p = getProduct(params.slug);
    if (!p) throw notFound();
    return { product: p };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Imports Arena` },
          { name: "description", content: loaderData.product.description },
        ]
      : [{ title: "Not found" }, { name: "robots", content: "noindex" }],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <div className="container-x py-24 text-center">
      <h1 className="font-display text-4xl">Product not found</h1>
      <Link to="/shop" className="mt-4 inline-block text-gold hover:underline">Back to shop</Link>
    </div>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { addToCart, toggleWishlist, inWishlist } = useStore();
  const [size, setSize] = useState(product.sizes[1] ?? "M");
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState<{ x: number; y: number } | null>(null);
  const related = relatedProducts(product);
  const fav = inWishlist(product.slug);

  const add = () => {
    addToCart({ id: product.id, slug: product.slug, name: product.name, price: product.price, image: product.image, size }, qty);
    toast.success(`Added to cart — ${product.name} (${size})`);
  };

  return (
    <div className="container-x py-10 md:py-16">
      <nav className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">
        <Link to="/" className="hover:text-gold">Home</Link> / <Link to="/shop" className="hover:text-gold">Shop</Link> / <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div
            className="relative aspect-square overflow-hidden rounded-xl border border-border bg-black"
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              setZoom({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
            }}
            onMouseLeave={() => setZoom(null)}
          >
            <img
              src={product.gallery[active]}
              alt={product.name}
              className={cn("h-full w-full object-cover transition-transform duration-300", zoom && "scale-150")}
              style={zoom ? { transformOrigin: `${zoom.x}% ${zoom.y}%` } : undefined}
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {product.gallery.map((g, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={cn("aspect-square overflow-hidden rounded-lg border bg-black", active === i ? "border-gold" : "border-border")}>
                <img src={g} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">{product.club} · {product.season}</p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl">{product.name}</h1>

          <div className="mt-3 flex items-center gap-3">
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className={cn("h-4 w-4", i < Math.round(product.rating) && "fill-current")} />)}
            </div>
            <span className="text-sm text-muted-foreground">{product.rating} · {product.reviews} reviews</span>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-4xl">{formatPrice(product.price)}</span>
            {product.oldPrice && <span className="text-lg text-muted-foreground line-through">{formatPrice(product.oldPrice)}</span>}
          </div>

          <p className="mt-6 text-foreground/80">{product.description}</p>

          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-widest">Size</p>
              <button className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-gold hover:underline">
                <Ruler className="h-3 w-3" /> Size guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button key={s} onClick={() => setSize(s)}
                  className={cn("min-w-14 rounded-md border px-4 py-2.5 text-sm font-medium transition",
                    size === s ? "border-gold bg-gold text-gold-foreground" : "border-border hover:border-foreground")}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center rounded-md border border-border">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-11 w-11 place-items-center hover:bg-secondary"><Minus className="h-4 w-4" /></button>
              <span className="min-w-10 text-center font-semibold">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="grid h-11 w-11 place-items-center hover:bg-secondary"><Plus className="h-4 w-4" /></button>
            </div>
            <button onClick={add} className="flex flex-1 items-center justify-center gap-2 rounded-md border border-border bg-foreground py-3 text-sm font-semibold uppercase tracking-widest text-background transition hover:bg-gold hover:text-gold-foreground">
              <ShoppingBag className="h-4 w-4" /> Add to cart
            </button>
            <button onClick={() => toggleWishlist(product.slug)} className={cn("grid h-11 w-11 place-items-center rounded-md border border-border transition hover:border-gold", fav && "border-gold text-gold")}>
              <Heart className={cn("h-4 w-4", fav && "fill-current")} />
            </button>
          </div>

          <button onClick={add} className="mt-3 w-full btn-gold rounded-md py-3.5 text-sm uppercase tracking-widest">
            Buy now
          </button>

          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
            <div className="flex flex-col items-start gap-1"><Truck className="h-4 w-4 text-gold" /> Free shipping over $150</div>
            <div className="flex flex-col items-start gap-1"><RefreshCcw className="h-4 w-4 text-gold" /> 30-day returns</div>
            <div className="flex flex-col items-start gap-1"><ShieldCheck className="h-4 w-4 text-gold" /> Authentic guarantee</div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <section className="mt-20">
        <h2 className="mb-6 font-display text-3xl">Customer reviews</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { n: "Diego R.", t: "Perfect fit, love the fabric.", r: 5 },
            { n: "Emma L.", t: "Colors are vibrant, arrived quickly.", r: 5 },
            { n: "Marco T.", t: "Second one I buy — never disappoints.", r: 4 },
          ].map((r) => (
            <div key={r.n} className="rounded-xl border border-border bg-card p-5">
              <div className="flex text-gold">{Array.from({ length: r.r }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-3 text-sm">"{r.t}"</p>
              <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{r.n}</p>
            </div>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-6 font-display text-3xl">You may also like</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
