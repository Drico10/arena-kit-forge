import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice, useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const { toggleWishlist, inWishlist, addToCart } = useStore();
  const fav = inWishlist(product.slug);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:border-gold/50">
      <Link to="/product/$slug" params={{ slug: product.slug }} className="relative block aspect-[4/5] overflow-hidden bg-black">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span
            className={cn(
              "absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest",
              product.badge === "HOT" && "bg-destructive text-destructive-foreground",
              product.badge === "NEW" && "bg-gold text-gold-foreground",
              product.badge === "-20%" && "bg-foreground text-background",
              product.badge === "RETRO" && "bg-secondary text-secondary-foreground",
            )}
          >
            {product.badge}
          </span>
        )}
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
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{product.club} · {product.season}</p>
        <Link to="/product/$slug" params={{ slug: product.slug }} className="mt-1 line-clamp-1 font-semibold hover:text-gold">
          {product.name}
        </Link>
        <div className="mt-3 flex items-end justify-between">
          <div>
            <span className="font-display text-xl">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <span className="ml-2 text-sm text-muted-foreground line-through">{formatPrice(product.oldPrice)}</span>
            )}
          </div>
          <button
            onClick={() =>
              addToCart({
                id: product.id, slug: product.slug, name: product.name,
                price: product.price, image: product.image, size: product.sizes[1] ?? "M",
              })
            }
            className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background transition hover:bg-gold hover:text-gold-foreground"
            aria-label="Add to cart"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
