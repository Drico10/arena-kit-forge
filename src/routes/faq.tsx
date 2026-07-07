import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ — Imports Arena" }, { name: "description", content: "Frequently asked questions about Imports Arena jerseys, shipping and returns." }] }),
  component: FAQ,
});

const faqs = [
  { q: "Are your jerseys authentic?", a: "Yes. All Imports Arena products are sourced from official channels and verified for authenticity before shipping." },
  { q: "How long does shipping take?", a: "Standard shipping arrives in 5–10 business days worldwide. Express options are available at checkout." },
  { q: "Do you ship internationally?", a: "Absolutely — we ship to over 90 countries. Free shipping on orders above $150." },
  { q: "What's your return policy?", a: "30 days from delivery. Items must be unworn with original tags. See our Shipping & Returns page for details." },
  { q: "Can I customize a jersey with a name and number?", a: "Yes, most kits offer personalization. The option appears on the product page when available." },
  { q: "How do I use a discount coupon?", a: "Enter your code in the coupon field on the cart page and click Apply. Try ARENA10 for 10% off your first order." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="container-x py-10 md:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Support</p>
      <h1 className="mt-2 font-display text-4xl md:text-6xl">Frequently asked questions</h1>
      <div className="mt-10 mx-auto max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-border bg-card">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
              <span className="font-semibold">{f.q}</span>
              <ChevronDown className={cn("h-5 w-5 text-gold transition", open === i && "rotate-180")} />
            </button>
            {open === i && <p className="border-t border-border p-5 text-sm text-foreground/80">{f.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
