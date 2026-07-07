import { createFileRoute } from "@tanstack/react-router";
import { AuthShell, Field } from "@/components/site/AuthShell";
import { toast } from "sonner";

export const Route = createFileRoute("/register")({ component: Register });

function Register() {
  return (
    <AuthShell title="Create account" subtitle="Join the squad — 10% off your first order." alt={{ text: "Already a member?", linkText: "Sign in", to: "/login" }}>
      <form onSubmit={(e) => { e.preventDefault(); toast.success("Account created (demo)"); }} className="space-y-3">
        <Field label="Full name" required placeholder="Your name" />
        <Field label="Email" type="email" required placeholder="you@example.com" />
        <Field label="Password" type="password" required placeholder="••••••••" />
        <button className="w-full btn-gold rounded-md py-3 text-sm uppercase tracking-widest">Create account</button>
      </form>
    </AuthShell>
  );
}
