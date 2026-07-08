import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag, Star } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice, useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const { toggleWishlist, inWishlist, addToCart } = useStore();
  const fav = inWishlist(product.slug);
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-elevated">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="relative block aspect-[4/5] overflow-hidden bg-gradient-to-b from-black to-neutral-900"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.badge && (
            <span
              className={cn(
                "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest",
                product.badge === "HOT" && "bg-destructive text-destructive-foreground",
                product.badge === "NEW" && "bg-gold text-gold-foreground",
                product.badge === "-20%" && "bg-foreground text-background",
                product.badge === "RETRO" && "bg-secondary text-secondary-foreground",
              )}
            >
              {product.badge}
            </span>
          )}
          {discount > 0 && product.badge !== "-20%" && (
            <span className="rounded-full bg-destructive px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-destructive-foreground">
              -{discount}%
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.slug);
          }}
          className={cn(
            "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/70 backdrop-blur transition hover:bg-background",
            fav && "text-gold",
          )}
          aria-label="Wishlist"
        >
          <Heart className={cn("h-4 w-4", fav && "fill-current")} />
        </button>

        {/* Quick add on hover (desktop) */}
        <div className="pointer-events-none absolute inset-x-3 bottom-3 hidden translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:block">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart({
                id: product.id,
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: product.image,
                size: product.sizes[1] ?? "M",
              });
            }}
            className="pointer-events-auto flex w-full items-center justify-center gap-2 rounded-md bg-foreground/95 py-2.5 text-xs font-semibold uppercase tracking-widest text-background backdrop-blur transition hover:bg-gold hover:text-gold-foreground"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> Quick add
          </button>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4 md:p-5">
        <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
          {product.club} · {product.season}
        </p>
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="mt-1.5 line-clamp-1 text-[15px] font-semibold leading-tight transition group-hover:text-gold"
        >
          {product.name}
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex gap-0.5 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-3 w-3",
                  i < Math.round(product.rating) ? "fill-current" : "opacity-30",
                )}
              />
            ))}
          </div>
          <span className="text-[11px] text-muted-foreground">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>

        <div className="mt-3 flex items-end justify-between gap-2">
          <div className="min-w-0">
            <span className="font-display text-xl leading-none">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <span className="ml-2 text-xs text-muted-foreground line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
          <button
            onClick={() =>
              addToCart({
                id: product.id,
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: product.image,
                size: product.sizes[1] ?? "M",
              })
            }
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-foreground text-background transition hover:bg-gold hover:text-gold-foreground md:hidden"
            aria-label="Add to cart"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
