import { createFileRoute } from "@tanstack/react-router";
import { AuthShell, Field } from "@/components/site/AuthShell";
import { toast } from "sonner";

export const Route = createFileRoute("/register")({ component: Register });

function Register() {
  return (
    <AuthShell title="Criar conta" subtitle="Entra pro time — 10% off na primeira compra." alt={{ text: "Já tem conta?", linkText: "Entrar", to: "/login" }}>
      <form onSubmit={(e) => { e.preventDefault(); toast.success("Conta criada (demo)"); }} className="space-y-3">
        <Field label="Nome completo" required placeholder="Seu nome" />
        <Field label="E-mail" type="email" required placeholder="voce@email.com" />
        <Field label="Senha" type="password" required placeholder="••••••••" />
        <button className="w-full btn-gold rounded-md py-3 text-sm uppercase tracking-widest">Criar conta</button>
      </form>
    </AuthShell>
  );
}
