import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Imports Arena" }, { name: "description", content: "Get in touch with the Imports Arena team." }] }),
  component: Contact,
});

function Contact() {
  return (
    <div className="container-x py-10 md:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Get in touch</p>
      <h1 className="mt-2 font-display text-4xl md:text-6xl">Contact us</h1>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_380px]">
        <form onSubmit={(e) => { e.preventDefault(); toast.success("Message sent — we'll reply within 24h"); }} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input required placeholder="Your name" className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
            <input required type="email" placeholder="Email" className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
          </div>
          <input placeholder="Subject" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
          <textarea required rows={6} placeholder="Your message" className="w-full resize-none rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
          <button className="btn-gold rounded-md px-8 py-3 text-sm uppercase tracking-widest">Send message</button>
        </form>

        <aside className="space-y-4">
          {[
            { icon: Mail, t: "Email", v: "hello@importsarena.com" },
            { icon: MessageCircle, t: "WhatsApp", v: "+1 (000) 000-0000" },
            { icon: MapPin, t: "HQ", v: "Rio de Janeiro · São Paulo · London" },
          ].map(({ icon: Icon, t, v }) => (
            <div key={t} className="rounded-xl border border-border bg-card p-5">
              <Icon className="h-6 w-6 text-gold" />
              <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{t}</p>
              <p className="mt-1">{v}</p>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
