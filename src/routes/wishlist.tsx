import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/wishlist")({ component: Wishlist });

function Wishlist() {
  const { wishlist } = useStore();
  const items = products.filter((p) => wishlist.includes(p.slug));

  return (
    <div className="container-x py-10 md:py-16">
      <h1 className="mb-8 font-display text-4xl md:text-5xl">Wishlist</h1>
      {items.length === 0 ? (
        <div className="rounded-xl border border-border p-16 text-center">
          <Heart className="mx-auto h-12 w-12 text-muted-foreground" />
          <p className="mt-4 text-muted-foreground">No favourites yet.</p>
          <Link to="/shop" className="mt-6 inline-block btn-gold rounded-md px-6 py-3 text-sm uppercase tracking-widest">Browse jerseys</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
