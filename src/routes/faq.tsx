import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "Dúvidas Frequentes — Imports Arena" }, { name: "description", content: "Dúvidas sobre camisas, frete, trocas e cupons da Imports Arena." }] }),
  component: FAQ,
});

const faqs = [
  { q: "As camisas são originais?", a: "São, sim. Todas as camisas passam por verificação antes de sair da nossa loja. A gente não vende gato por lebre." },
  { q: "Quanto tempo demora pra entregar?", a: "Entre 5 e 10 dias úteis pra todo o Brasil. Se quiser correr, tem frete expresso disponível no checkout." },
  { q: "Vocês entregam pra todo lugar?", a: "Sim! Entregamos em todo o Brasil e em mais de 90 países. Frete grátis em pedidos acima de R$ 500." },
  { q: "E se eu quiser trocar ou devolver?", a: "Você tem 30 dias a partir da entrega. A camisa precisa estar sem uso e com etiqueta. Detalhes na página de Frete e Trocas." },
  { q: "Dá pra personalizar com nome e número?", a: "Dá sim, na maioria dos modelos. Quando disponível, a opção aparece direto na página do produto." },
  { q: "Como uso um cupom de desconto?", a: "É só digitar o código no carrinho e clicar em Aplicar. Testa o ARENA10 pra ganhar 10% na primeira compra." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="container-x py-10 md:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Suporte</p>
      <h1 className="mt-2 font-display text-4xl md:text-6xl">Dúvidas frequentes</h1>
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
