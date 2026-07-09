import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shipping")({
  head: () => ({ meta: [{ title: "Frete e Trocas — Imports Arena" }, { name: "description", content: "Prazos, custos de entrega e política de trocas da Imports Arena." }] }),
  component: Shipping,
});

function Shipping() {
  return (
    <div className="container-x py-10 md:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Políticas</p>
      <h1 className="mt-2 font-display text-4xl md:text-6xl">Frete e Trocas</h1>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-2xl">Entrega</h2>
          <ul className="mt-4 space-y-3 text-sm text-foreground/85">
            <li>• Frete grátis em pedidos acima de R$ 500.</li>
            <li>• Envio padrão: 5–10 dias úteis.</li>
            <li>• Envio expresso: 2–4 dias úteis (calculado no checkout).</li>
            <li>• Código de rastreio enviado por e-mail assim que a camisa sair.</li>
          </ul>
        </section>
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-2xl">Trocas e devoluções</h2>
          <ul className="mt-4 space-y-3 text-sm text-foreground/85">
            <li>• 30 dias a partir do recebimento pra trocar ou devolver.</li>
            <li>• A camisa precisa estar sem uso e com etiqueta original.</li>
            <li>• Itens personalizados (nome/número) não têm troca.</li>
            <li>• Reembolso em até 7 dias úteis depois da análise.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
