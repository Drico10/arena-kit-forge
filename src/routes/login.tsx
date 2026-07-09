import { createFileRoute } from "@tanstack/react-router";
import { AuthShell, Field } from "@/components/site/AuthShell";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <AuthShell title="Entrar" subtitle="Bem-vindo de volta à Arena." alt={{ text: "É novo por aqui?", linkText: "Criar conta", to: "/register" }}>
      <form onSubmit={(e) => { e.preventDefault(); toast.success("Login feito (demo)"); }} className="space-y-3">
        <Field label="E-mail" type="email" required placeholder="voce@email.com" />
        <Field label="Senha" type="password" required placeholder="••••••••" />
        <button className="w-full btn-gold rounded-md py-3 text-sm uppercase tracking-widest">Entrar</button>
      </form>
    </AuthShell>
  );
}
