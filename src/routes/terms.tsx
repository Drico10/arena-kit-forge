import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Termos de Uso — Imports Arena" }, { name: "description", content: "Termos de uso da Imports Arena." }] }),
  component: Terms,
});

function Terms() {
  return (
    <div className="container-x py-10 md:py-16 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Jurídico</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">Termos de Uso</h1>
      <div className="mt-8 space-y-4 text-foreground/85 text-sm leading-relaxed">
        <p>Ao acessar ou comprar na Imports Arena, você concorda com estes termos.</p>
        <h2 className="font-display text-2xl mt-6">Pedidos</h2>
        <p>Todos os pedidos estão sujeitos à disponibilidade e confirmação. Preços são em reais (BRL) e podem mudar sem aviso prévio.</p>
        <h2 className="font-display text-2xl mt-6">Propriedade intelectual</h2>
        <p>Nomes, escudos e logos de times pertencem aos respectivos donos dos direitos.</p>
        <h2 className="font-display text-2xl mt-6">Responsabilidade</h2>
        <p>Nos limites permitidos pela lei, nossa responsabilidade se limita ao valor efetivamente pago no pedido em questão.</p>
        <h2 className="font-display text-2xl mt-6">Contato</h2>
        <p>juridico@importsarena.com</p>
      </div>
    </div>
  );
}
