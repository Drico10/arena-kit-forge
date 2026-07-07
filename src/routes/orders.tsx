import { createFileRoute, Link } from "@tanstack/react-router";
import { formatPrice } from "@/lib/store";
import { products } from "@/lib/products";

export const Route = createFileRoute("/orders")({ component: Orders });

const demo = [
  { id: "IA-10423", date: "2025-06-12", status: "Delivered", items: 2, product: products[0], total: 179.8 },
  { id: "IA-10399", date: "2025-05-30", status: "Shipped", items: 1, product: products[3], total: 109.9 },
  { id: "IA-10358", date: "2025-05-14", status: "Delivered", items: 1, product: products[4], total: 129.9 },
];

const badge: Record<string, string> = {
  Delivered: "bg-gold/20 text-gold",
  Shipped: "bg-secondary text-foreground",
  Pending: "bg-muted text-muted-foreground",
};

function Orders() {
  return (
    <div className="container-x py-10 md:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">History</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">Your orders</h1>

      <div className="mt-8 overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-card text-xs uppercase tracking-widest text-muted-foreground">
            <tr>
              <th className="p-4 text-left">Order</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Item</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {demo.map((o) => (
              <tr key={o.id} className="border-t border-border">
                <td className="p-4 font-mono">{o.id}</td>
                <td className="p-4 text-muted-foreground">{o.date}</td>
                <td className="p-4">
                  <Link to="/product/$slug" params={{ slug: o.product.slug }} className="flex items-center gap-3 hover:text-gold">
                    <img src={o.product.image} alt="" className="h-10 w-10 rounded object-cover" />
                    <span>{o.product.name}</span>
                  </Link>
                </td>
                <td className="p-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${badge[o.status]}`}>{o.status}</span>
                </td>
                <td className="p-4 text-right font-display">{formatPrice(o.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
