import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "Sobre — Imports Arena" }, { name: "description", content: "A história da Imports Arena — camisas de futebol pra quem torce de verdade." }] }),
  component: About,
});

function About() {
  return (
    <div className="container-x py-10 md:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Nossa história</p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl md:text-6xl">
        Começou por torcedor. Segue <span className="gold-text">tocada por torcedor.</span>
      </h1>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <p className="text-lg text-foreground/85">
          A Imports Arena nasceu em 2019, num apartamento pequeno, com um notebook, um pôster do Mengão na parede e uma teimosia: torcedor de qualquer lugar merece a camisa do seu time — sem pagar preço de gringo e sem esperar meses por uma encomenda que nunca chega.
        </p>
        <p className="text-lg text-foreground/85">
          Seis anos depois, a gente continua o mesmo. Trazemos camisas do Brasil, da Europa e daquelas ligas que só torcedor de verdade acompanha. A gente mesmo responde as mensagens. Vestimos o que a gente vende. E cobramos preço justo — porque amar futebol não pode custar um salário inteiro.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          { n: "120mil+", l: "Torcedores atendidos" },
          { n: "90+", l: "Países que já receberam" },
          { n: "4,9/5", l: "Nota média da torcida" },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl border border-border bg-card p-8 text-center">
            <p className="font-display text-5xl gold-text">{s.n}</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
