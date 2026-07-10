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
          A Imports Arena nasceu em 2020 com um objetivo simples: aproximar os apaixonados por futebol das camisas que representam suas histórias. O que começou como um pequeno projeto, movido pela paixão pelo esporte e pelo desejo de oferecer produtos de qualidade a preços justos, cresceu graças à confiança de milhares de torcedores.
        </p>
        <p className="text-lg text-foreground/85">
          Hoje, seguimos com a mesma missão: levar camisas de clubes e seleções do mundo inteiro para quem vive o futebol dentro e fora das quatro linhas.
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
