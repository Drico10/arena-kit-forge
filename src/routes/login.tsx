import { createFileRoute } from "@tanstack/react-router";
import { AuthShell, Field } from "@/components/site/AuthShell";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <AuthShell title="Sign in" subtitle="Welcome back to the Arena." alt={{ text: "New here?", linkText: "Create an account", to: "/register" }}>
      <form onSubmit={(e) => { e.preventDefault(); toast.success("Signed in (demo)"); }} className="space-y-3">
        <Field label="Email" type="email" required placeholder="you@example.com" />
        <Field label="Password" type="password" required placeholder="••••••••" />
        <button className="w-full btn-gold rounded-md py-3 text-sm uppercase tracking-widest">Sign in</button>
      </form>
    </AuthShell>
  );
}
