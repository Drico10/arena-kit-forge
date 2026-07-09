import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contato — Imports Arena" }, { name: "description", content: "Fale com o time da Imports Arena. A gente responde rápido." }] }),
  component: Contact,
});

function Contact() {
  return (
    <div className="container-x py-10 md:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Fala com a gente</p>
      <h1 className="mt-2 font-display text-4xl md:text-6xl">Contato</h1>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_380px]">
        <form onSubmit={(e) => { e.preventDefault(); toast.success("Mensagem enviada — respondemos em até 24h"); }} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input required placeholder="Seu nome" className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
            <input required type="email" placeholder="E-mail" className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
          </div>
          <input placeholder="Assunto" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
          <textarea required rows={6} placeholder="Sua mensagem" className="w-full resize-none rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
          <button className="btn-gold rounded-md px-8 py-3 text-sm uppercase tracking-widest">Enviar mensagem</button>
        </form>

        <aside className="space-y-4">
          {[
            { icon: Mail, t: "E-mail", v: "contato@importsarena.com" },
            { icon: MessageCircle, t: "WhatsApp", v: "+55 (00) 00000-0000" },
            { icon: MapPin, t: "Onde estamos", v: "Rio de Janeiro · São Paulo · Belo Horizonte" },
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
