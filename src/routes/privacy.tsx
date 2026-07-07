import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Imports Arena" }, { name: "description", content: "How Imports Arena handles your data." }] }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="container-x py-10 md:py-16 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Legal</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">Privacy Policy</h1>
      <div className="mt-8 space-y-4 text-foreground/85 text-sm leading-relaxed">
        <p>This page is maintained by Imports Arena to explain how we collect, use and protect your information.</p>
        <h2 className="font-display text-2xl mt-6">Information we collect</h2>
        <p>We collect information you provide (name, email, address, payment details) and information automatically generated when you use our site (device, browser, pages visited).</p>
        <h2 className="font-display text-2xl mt-6">How we use it</h2>
        <p>To process orders, deliver products, provide customer service, and improve our store. We never sell your personal information.</p>
        <h2 className="font-display text-2xl mt-6">Cookies</h2>
        <p>We use essential cookies for cart and account, plus optional analytics cookies you can decline.</p>
        <h2 className="font-display text-2xl mt-6">Contact</h2>
        <p>Questions? Email privacy@importsarena.com.</p>
      </div>
    </div>
  );
}
