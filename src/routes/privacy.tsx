import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Política de Privacidade — Imports Arena" }, { name: "description", content: "Como a Imports Arena trata seus dados." }] }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="container-x py-10 md:py-16 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Jurídico</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">Política de Privacidade</h1>
      <div className="mt-8 space-y-4 text-foreground/85 text-sm leading-relaxed">
        <p>Esta página explica como a Imports Arena coleta, usa e protege as suas informações.</p>
        <h2 className="font-display text-2xl mt-6">Informações que coletamos</h2>
        <p>Coletamos os dados que você fornece (nome, e-mail, endereço, dados de pagamento) e informações geradas automaticamente durante o uso do site (dispositivo, navegador, páginas acessadas).</p>
        <h2 className="font-display text-2xl mt-6">Como usamos</h2>
        <p>Para processar pedidos, entregar as camisas, oferecer atendimento e melhorar a loja. A gente nunca vende seus dados pessoais.</p>
        <h2 className="font-display text-2xl mt-6">Cookies</h2>
        <p>Usamos cookies essenciais pra manter o carrinho e a conta funcionando, além de cookies analíticos opcionais que você pode recusar.</p>
        <h2 className="font-display text-2xl mt-6">Contato</h2>
        <p>Dúvidas? Escreve pra privacidade@importsarena.com.</p>
      </div>
    </div>
  );
}
