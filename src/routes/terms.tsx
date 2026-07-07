import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms of Service — Imports Arena" }, { name: "description", content: "Terms of service for Imports Arena." }] }),
  component: Terms,
});

function Terms() {
  return (
    <div className="container-x py-10 md:py-16 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Legal</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">Terms of Service</h1>
      <div className="mt-8 space-y-4 text-foreground/85 text-sm leading-relaxed">
        <p>By accessing or purchasing from Imports Arena you agree to these terms.</p>
        <h2 className="font-display text-2xl mt-6">Orders</h2>
        <p>All orders are subject to availability and confirmation. Prices are in USD and may change without notice.</p>
        <h2 className="font-display text-2xl mt-6">Intellectual property</h2>
        <p>Team names, crests and logos remain the property of their respective rights holders.</p>
        <h2 className="font-display text-2xl mt-6">Liability</h2>
        <p>To the fullest extent permitted by law, our liability is limited to the amount you paid for the order in question.</p>
        <h2 className="font-display text-2xl mt-6">Contact</h2>
        <p>legal@importsarena.com</p>
      </div>
    </div>
  );
}
