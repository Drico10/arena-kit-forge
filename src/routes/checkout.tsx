import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { formatPrice, useStore } from "@/lib/store";
import { toast } from "sonner";

export const Route = createFileRoute("/checkout")({ component: Checkout });

function Checkout() {
  const { cart, cartTotal, clearCart } = useStore();
  const nav = useNavigate();
  const shipping = cartTotal > 150 ? 0 : 15;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    toast.success("Order placed! Confirmation sent to your email.");
    nav({ to: "/orders" });
  };

  const Input = (p: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input {...p} className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
  );

  return (
    <div className="container-x py-10 md:py-16">
      <h1 className="mb-8 font-display text-4xl md:text-5xl">Checkout</h1>
      <form onSubmit={submit} className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-8">
          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 font-display text-xl">Contact</h2>
            <Input required type="email" placeholder="Email address" />
          </section>
          <section className="rounded-xl border border-border bg-card p-6 space-y-3">
            <h2 className="mb-4 font-display text-xl">Shipping</h2>
            <div className="grid gap-3 md:grid-cols-2">
              <Input required placeholder="First name" />
              <Input required placeholder="Last name" />
            </div>
            <Input required placeholder="Address" />
            <div className="grid gap-3 md:grid-cols-3">
              <Input required placeholder="City" />
              <Input required placeholder="Country" />
              <Input required placeholder="ZIP" />
            </div>
            <Input required placeholder="Phone" />
          </section>
          <section className="rounded-xl border border-border bg-card p-6 space-y-3">
            <h2 className="mb-4 font-display text-xl">Payment</h2>
            <Input required placeholder="Card number" />
            <div className="grid gap-3 md:grid-cols-2">
              <Input required placeholder="MM/YY" />
              <Input required placeholder="CVC" />
            </div>
          </section>
        </div>
        <aside className="h-fit rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 font-display text-2xl">Summary</h2>
          <div className="space-y-3">
            {cart.map((c) => (
              <div key={c.id + c.size} className="flex items-center gap-3">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-md bg-black"><img src={c.image} alt="" className="h-full w-full object-cover" /></div>
                <div className="min-w-0 flex-1 text-sm">
                  <p className="truncate">{c.name}</p>
                  <p className="text-xs text-muted-foreground">Size {c.size} · Qty {c.qty}</p>
                </div>
                <p className="text-sm">{formatPrice(c.price * c.qty)}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t border-border pt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatPrice(cartTotal)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
          </div>
          <div className="mt-4 flex justify-between border-t border-border pt-4">
            <span className="font-display text-xl">Total</span>
            <span className="font-display text-2xl gold-text">{formatPrice(cartTotal + shipping)}</span>
          </div>
          <button className="mt-6 w-full btn-gold rounded-md py-3.5 text-sm uppercase tracking-widest">Place order</button>
        </aside>
      </form>
    </div>
  );
}
