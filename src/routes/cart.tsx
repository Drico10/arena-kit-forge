import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { formatPrice, useStore } from "@/lib/store";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/cart")({ component: CartPage });

function CartPage() {
  const { cart, updateQty, removeFromCart, cartTotal } = useStore();
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const apply = () => {
    if (code.trim().toUpperCase() === "ARENA10") {
      setDiscount(cartTotal * 0.1);
      toast.success("Coupon applied — 10% off!");
    } else {
      toast.error("Invalid coupon code");
    }
  };

  const shipping = cartTotal > 150 || cart.length === 0 ? 0 : 15;
  const total = cartTotal - discount + shipping;

  if (cart.length === 0) {
    return (
      <div className="container-x py-24 text-center">
        <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
        <h1 className="mt-6 font-display text-4xl">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Time to gear up.</p>
        <Link to="/shop" className="mt-6 inline-block btn-gold rounded-md px-6 py-3 text-sm uppercase tracking-widest">Shop jerseys</Link>
      </div>
    );
  }

  return (
    <div className="container-x py-10 md:py-16">
      <h1 className="mb-8 font-display text-4xl md:text-5xl">Your cart</h1>
      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          {cart.map((c) => (
            <div key={c.id + c.size} className="flex gap-4 rounded-xl border border-border bg-card p-4">
              <Link to="/product/$slug" params={{ slug: c.slug }} className="h-24 w-24 shrink-0 overflow-hidden rounded-md bg-black md:h-32 md:w-32">
                <img src={c.image} alt={c.name} className="h-full w-full object-cover" />
              </Link>
              <div className="flex min-w-0 flex-1 flex-col">
                <Link to="/product/$slug" params={{ slug: c.slug }} className="font-semibold hover:text-gold">{c.name}</Link>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Size {c.size}</p>
                <div className="mt-auto flex items-end justify-between gap-2">
                  <div className="flex items-center rounded-md border border-border">
                    <button onClick={() => updateQty(c.id, c.size, c.qty - 1)} className="grid h-9 w-9 place-items-center hover:bg-secondary"><Minus className="h-3 w-3" /></button>
                    <span className="min-w-8 text-center text-sm">{c.qty}</span>
                    <button onClick={() => updateQty(c.id, c.size, c.qty + 1)} className="grid h-9 w-9 place-items-center hover:bg-secondary"><Plus className="h-3 w-3" /></button>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-lg">{formatPrice(c.price * c.qty)}</p>
                    <button onClick={() => removeFromCart(c.id, c.size)} className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-3 w-3" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-xl border border-border bg-card p-6 h-fit">
          <h2 className="mb-4 font-display text-2xl">Order summary</h2>
          <div className="mb-4 flex gap-2">
            <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Coupon code"
              className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-gold" />
            <button onClick={apply} className="rounded-md border border-border px-4 text-sm hover:border-gold hover:text-gold">Apply</button>
          </div>
          <div className="space-y-2 border-t border-border pt-4 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatPrice(cartTotal)}</span></div>
            {discount > 0 && <div className="flex justify-between text-gold"><span>Discount</span><span>-{formatPrice(discount)}</span></div>}
            <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
          </div>
          <div className="mt-4 flex justify-between border-t border-border pt-4">
            <span className="font-display text-xl">Total</span>
            <span className="font-display text-2xl gold-text">{formatPrice(total)}</span>
          </div>
          <Link to="/checkout" className="mt-6 block btn-gold rounded-md py-3.5 text-center text-sm uppercase tracking-widest">Checkout</Link>
        </aside>
      </div>
    </div>
  );
}
