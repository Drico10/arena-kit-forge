import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shipping")({
  head: () => ({ meta: [{ title: "Shipping & Returns — Imports Arena" }, { name: "description", content: "Shipping times, costs and return policy for Imports Arena." }] }),
  component: Shipping,
});

function Shipping() {
  return (
    <div className="container-x py-10 md:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Policies</p>
      <h1 className="mt-2 font-display text-4xl md:text-6xl">Shipping & Returns</h1>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-2xl">Shipping</h2>
          <ul className="mt-4 space-y-3 text-sm text-foreground/85">
            <li>• Free worldwide shipping on orders over $150.</li>
            <li>• Standard: 5–10 business days.</li>
            <li>• Express: 2–4 business days (calculated at checkout).</li>
            <li>• Tracking sent by email once your order ships.</li>
          </ul>
        </section>
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-2xl">Returns</h2>
          <ul className="mt-4 space-y-3 text-sm text-foreground/85">
            <li>• 30-day return window from delivery.</li>
            <li>• Items must be unworn with original tags.</li>
            <li>• Personalized items are final sale.</li>
            <li>• Refunds processed within 7 business days.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
