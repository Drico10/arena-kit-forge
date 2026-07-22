import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";

const services = [
  "Vale Alimentação",
  "Vale Refeição",
  "Plano de Saúde",
  "Plano Odontológico",
  "Seguro de Vida",
  "Benefícios Flexíveis",
];

const institucional = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer id="contato" className="mt-24 border-t border-border bg-secondary">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl gradient-brand text-white font-display text-lg font-bold">
                R
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-bold text-brand">Rota Brasil</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Benefícios
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Consultoria especializada em benefícios corporativos, com atendimento personalizado
              para empresas de todo o Brasil.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
                { Icon: Facebook, label: "Facebook", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-brand transition hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand">Serviços</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s}>
                  <a href="#servicos" className="transition hover:text-primary">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand">Institucional</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {institucional.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand">Contato</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>(00) 0000-0000</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="https://wa.me/5500000000000" className="transition hover:text-primary">
                  WhatsApp: (00) 00000-0000
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:contato@rotabrasilbeneficios.com.br" className="transition hover:text-primary">
                  contato@rotabrasilbeneficios.com.br
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Endereço da empresa — Cidade / UF</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Rota Brasil Benefícios. Todos os direitos reservados.</p>
          <p>CNPJ 00.000.000/0001-00 · Atendimento em todo o Brasil</p>
        </div>
      </div>
    </footer>
  );
}
