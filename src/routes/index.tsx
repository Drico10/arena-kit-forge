import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Users,
  Zap,
  Eye,
  MapPin,
  Sparkles,
  UtensilsCrossed,
  Coffee,
  HeartPulse,
  Smile,
  ShieldPlus,
  Layers,
  Settings2,
  Briefcase,
  HandshakeIcon,
  GraduationCap,
  Link2,
  Workflow,
  FileCheck2,
  HeadphonesIcon,
  Search,
  Lightbulb,
  Rocket,
  LineChart,
  Building2,
  Star,
  Plus,
  Minus,
  CheckCircle2,
  Send,
} from "lucide-react";
import heroImg from "@/assets/rota-hero.png";
import aboutImg from "@/assets/rota-about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rota Brasil Benefícios — Benefícios Corporativos para Empresas" },
      { name: "description", content: "Consultoria especializada em benefícios corporativos: vale alimentação, refeição, plano de saúde, odontológico e mais. Atendimento personalizado em todo o Brasil." },
      { property: "og:title", content: "Rota Brasil Benefícios — Soluções em Benefícios Corporativos" },
      { property: "og:description", content: "Ajudamos empresas a oferecer benefícios de qualidade aos colaboradores, com processos simples e custos reduzidos." },
    ],
  }),
  component: Landing,
});

/* ---------- Reveal on scroll ---------- */
function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: `opacity .7s ease-out ${delay}ms, transform .7s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden gradient-soft">
      <div className="container-x grid gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:py-32">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3.5 py-1.5 text-xs font-medium text-brand backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Consultoria em benefícios corporativos
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-brand sm:text-5xl lg:text-6xl">
              Soluções inteligentes em <span className="text-primary">benefícios corporativos</span> para empresas.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              A Rota Brasil Benefícios ajuda empresas a oferecer benefícios de qualidade aos seus
              colaboradores, simplificando processos e reduzindo custos com atendimento personalizado.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contato" className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm">
                Solicitar uma proposta <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener"
                className="btn-whatsapp inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm"
              >
                <MessageCircle className="h-4 w-4" /> Falar pelo WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Atendimento em todo o Brasil
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Consultoria especializada
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Sem burocracia
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="absolute -inset-8 -z-10 rounded-[40px] bg-gradient-to-br from-primary/10 via-transparent to-brand/10 blur-2xl" />
          <img
            src={heroImg}
            alt="Ilustração de benefícios corporativos e RH"
            width={1200}
            height={1000}
            className="mx-auto w-full max-w-[560px] drop-shadow-[0_30px_60px_rgba(37,99,235,0.15)]"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section wrapper ---------- */
function SectionHead({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <Reveal>
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold text-brand md:text-4xl lg:text-5xl">{title}</h2>
        {description && <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">{description}</p>}
      </div>
    </Reveal>
  );
}

/* ---------- Quem Somos ---------- */
const quemSomosItems = [
  { Icon: HeadphonesIcon, title: "Atendimento personalizado", desc: "Cada empresa tem um consultor dedicado, do primeiro contato ao pós-venda." },
  { Icon: GraduationCap, title: "Consultoria especializada", desc: "Equipe com anos de experiência em benefícios e RH corporativo." },
  { Icon: Zap, title: "Agilidade", desc: "Processos simplificados para você implantar benefícios em poucos dias." },
  { Icon: Eye, title: "Transparência", desc: "Propostas claras, sem letras miúdas e sem custos escondidos." },
  { Icon: MapPin, title: "Atendimento nacional", desc: "Suporte para empresas em todas as regiões do país." },
  { Icon: Settings2, title: "Soluções sob medida", desc: "Planos desenhados de acordo com o perfil e o orçamento da sua empresa." },
];

function QuemSomos() {
  return (
    <section id="quem-somos" className="container-x py-20 md:py-28">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-primary/10 blur-2xl" />
            <img
              src={aboutImg}
              alt="Equipe corporativa Rota Brasil Benefícios"
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-elevated"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-white p-4 shadow-elevated sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Empresas atendidas</p>
                  <p className="font-display text-xl font-bold text-brand">+500</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Quem Somos
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-brand md:text-4xl lg:text-5xl">
              Uma parceira estratégica em benefícios corporativos.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Somos uma consultoria especializada em benefícios para empresas de todos os portes.
              Trabalhamos lado a lado com o RH para desenhar soluções que valorizam colaboradores,
              simplificam a gestão e trazem economia real para o negócio.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {quemSomosItems.map(({ Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 60}>
                <div className="flex gap-3 rounded-2xl border border-border bg-white p-4 transition hover:border-primary/40 hover:shadow-soft">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-brand">{title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Serviços ---------- */
const servicos = [
  { Icon: UtensilsCrossed, title: "Vale Alimentação", desc: "Cartões aceitos em supermercados de todo o Brasil, com as melhores taxas do mercado." },
  { Icon: Coffee, title: "Vale Refeição", desc: "Ampla rede credenciada em restaurantes e lanchonetes, sem burocracia." },
  { Icon: HeartPulse, title: "Plano de Saúde", desc: "Planos empresariais das principais operadoras, com cobertura nacional." },
  { Icon: Smile, title: "Plano Odontológico", desc: "Cuidado com o sorriso do time em rede credenciada ampla e qualificada." },
  { Icon: ShieldPlus, title: "Seguro de Vida", desc: "Proteção financeira para o colaborador e sua família, com contratação simples." },
  { Icon: Layers, title: "Benefícios Flexíveis", desc: "Combine categorias em um único cartão e dê liberdade de escolha ao colaborador." },
  { Icon: Settings2, title: "Gestão de Benefícios", desc: "Plataforma para administrar tudo em um só lugar, com relatórios completos." },
  { Icon: Briefcase, title: "Consultoria Empresarial", desc: "Análise, negociação e implantação de benefícios sob medida para sua empresa." },
];

function Servicos() {
  return (
    <section id="servicos" className="bg-secondary py-20 md:py-28">
      <div className="container-x">
        <SectionHead
          eyebrow="Nossos serviços"
          title="Soluções completas em benefícios corporativos."
          description="Um portfólio pensado para atender pequenas, médias e grandes empresas com flexibilidade e eficiência."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map(({ Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 50}>
              <div className="group h-full rounded-2xl border border-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-brand">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Diferenciais ---------- */
const diferenciais = [
  { Icon: Users, title: "Atendimento humanizado", desc: "Pessoas reais, respostas rápidas e escuta ativa em cada etapa da parceria." },
  { Icon: GraduationCap, title: "Equipe especializada", desc: "Profissionais com sólida experiência em benefícios, RH e legislação trabalhista." },
  { Icon: Link2, title: "Parcerias estratégicas", desc: "Relacionamento direto com as maiores operadoras e fornecedores do país." },
  { Icon: Workflow, title: "Processos simplificados", desc: "Fluxos claros e digitais para você contratar e gerenciar sem dor de cabeça." },
  { Icon: FileCheck2, title: "Redução de burocracia", desc: "Cuidamos da papelada, das negociações e da adequação legal por você." },
  { Icon: ShieldCheck, title: "Suporte contínuo", desc: "Acompanhamento constante para garantir que tudo funcione como o combinado." },
];

function Diferenciais() {
  return (
    <section id="diferenciais" className="container-x py-20 md:py-28">
      <SectionHead
        eyebrow="Diferenciais"
        title="Por que empresas escolhem a Rota Brasil."
        description="A combinação entre consultoria estratégica e execução impecável faz a diferença no dia a dia do RH."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {diferenciais.map(({ Icon, title, desc }, i) => (
          <Reveal key={title} delay={i * 60}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition hover:border-primary/40 hover:shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-brand">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Como Funciona ---------- */
const passos = [
  { Icon: Search, title: "Entendemos as necessidades da empresa", desc: "Escutamos o RH, mapeamos o perfil dos colaboradores e identificamos oportunidades." },
  { Icon: Lightbulb, title: "Apresentamos a melhor solução", desc: "Elaboramos uma proposta personalizada, com cenários, custos e comparativos." },
  { Icon: Rocket, title: "Implantamos os benefícios", desc: "Cuidamos da contratação, integração e comunicação com os colaboradores." },
  { Icon: LineChart, title: "Fazemos acompanhamento contínuo", desc: "Monitoramos resultados, indicadores e satisfação, ajustando sempre que preciso." },
];

function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-secondary py-20 md:py-28">
      <div className="container-x">
        <SectionHead
          eyebrow="Como funciona"
          title="Um processo simples, do diagnóstico à operação."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {passos.map(({ Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="relative h-full rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-elevated">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full gradient-brand text-sm font-bold text-white shadow-brand">
                    {i + 1}
                  </span>
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-brand">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                {i < passos.length - 1 && (
                  <div className="absolute right-4 top-8 hidden text-primary/30 lg:block">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Indicadores ---------- */
const indicadores = [
  { value: "+500", label: "Empresas atendidas" },
  { value: "+20.000", label: "Colaboradores beneficiados" },
  { value: "98%", label: "Satisfação dos clientes" },
  { value: "Brasil", label: "Atendimento em todo o país" },
];

function Indicadores() {
  return (
    <section className="container-x py-20 md:py-28">
      <Reveal>
        <div className="rounded-3xl gradient-brand p-10 text-white shadow-brand md:p-14">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Indicadores
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
                Resultados que refletem nosso compromisso.
              </h2>
            </div>
            <p className="text-xs uppercase tracking-widest text-white/70">
              * Números meramente ilustrativos
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {indicadores.map((n, i) => (
              <Reveal key={n.label} delay={i * 80}>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                  <p className="font-display text-4xl font-bold text-white md:text-5xl">{n.value}</p>
                  <p className="mt-2 text-sm text-white/80">{n.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Depoimentos ---------- */
const depoimentos = [
  {
    name: "Mariana Ribeiro",
    role: "Gerente de RH — Indústria (exemplo)",
    initials: "MR",
    text: "A consultoria da Rota Brasil transformou nossa gestão de benefícios. Reduzimos custos e aumentamos a satisfação da equipe em poucos meses.",
  },
  {
    name: "Carlos Andrade",
    role: "Diretor Financeiro — Varejo (exemplo)",
    initials: "CA",
    text: "Atendimento consultivo de verdade. Analisaram nosso cenário, negociaram com as operadoras e entregaram uma proposta enxuta e clara.",
  },
  {
    name: "Fernanda Lopes",
    role: "Coordenadora de Pessoas — Serviços (exemplo)",
    initials: "FL",
    text: "Processo simples, comunicação transparente e suporte sempre presente. Nossos colaboradores sentiram a diferença imediatamente.",
  },
];

function Depoimentos() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container-x">
        <SectionHead
          eyebrow="Depoimentos"
          title="O que dizem sobre a nossa parceria."
          description="Depoimentos ilustrativos para fins demonstrativos."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal key={d.name} delay={i * 90}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-soft">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{d.text}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-11 w-11 place-items-center rounded-full gradient-brand text-sm font-semibold text-white">
                    {d.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-brand">{d.name}</p>
                    <p className="text-xs text-muted-foreground">{d.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const faqs = [
  {
    q: "Como funciona a contratação?",
    a: "Depois de um diagnóstico inicial com nossa consultoria, apresentamos uma proposta personalizada. Se aprovada, cuidamos de toda a documentação, contratação e implantação dos benefícios com agilidade.",
  },
  {
    q: "Quais benefícios vocês oferecem?",
    a: "Trabalhamos com vale alimentação, vale refeição, plano de saúde, odontológico, seguro de vida, benefícios flexíveis, além de gestão e consultoria empresarial em benefícios.",
  },
  {
    q: "Atendem pequenas empresas?",
    a: "Sim. Estruturamos soluções para empresas de todos os portes, com condições adequadas ao número de colaboradores e ao orçamento disponível.",
  },
  {
    q: "Existe suporte após a contratação?",
    a: "Sim. Você tem um consultor dedicado e suporte contínuo para tirar dúvidas, ajustar planos, resolver ocorrências e acompanhar indicadores de satisfação.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="container-x py-20 md:py-28">
      <SectionHead
        eyebrow="Perguntas frequentes"
        title="Tudo o que você precisa saber para começar."
      />
      <div className="mx-auto mt-12 max-w-3xl">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={i * 50}>
              <div className="mb-3 overflow-hidden rounded-2xl border border-border bg-white transition hover:border-primary/40">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-brand md:text-base">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows .3s ease",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- CTA + Formulário ---------- */
function CTA() {
  const [sent, setSent] = useState(false);
  return (
    <section className="container-x py-20 md:py-28">
      <div className="grid gap-10 rounded-3xl border border-border bg-white p-8 shadow-elevated md:p-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <Reveal>
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Vamos conversar
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-brand md:text-4xl lg:text-5xl">
            Leve mais qualidade de vida para seus colaboradores.
          </h2>
          <p className="mt-5 max-w-lg text-base text-muted-foreground">
            Fale com nossa consultoria e receba uma proposta sob medida em até 1 dia útil.
            Sem compromisso e com total transparência.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#form-contato" className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm">
              Solicitar orçamento <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener"
              className="btn-whatsapp inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm"
            >
              <MessageCircle className="h-4 w-4" /> Falar pelo WhatsApp
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              { Icon: HandshakeIcon, title: "Sem compromisso", desc: "Analise a proposta com calma." },
              { Icon: ShieldCheck, title: "Confidencialidade", desc: "Seus dados ficam protegidos." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="flex gap-3 rounded-2xl border border-border bg-secondary/60 p-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-brand">{title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            id="form-contato"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border border-border bg-secondary/60 p-6 md:p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-brand">Solicitação enviada!</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Nossa consultoria entrará em contato em até 1 dia útil.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl font-bold text-brand">Solicite uma proposta</h3>
                <p className="mt-1 text-sm text-muted-foreground">Preencha os campos e nossa equipe retorna rapidamente.</p>
                <div className="mt-6 grid gap-4">
                  <Field label="Nome" placeholder="Seu nome" required />
                  <Field label="Empresa" placeholder="Nome da empresa" required />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="E-mail corporativo" type="email" placeholder="voce@empresa.com" required />
                    <Field label="Telefone / WhatsApp" placeholder="(00) 00000-0000" required />
                  </div>
                  <Field label="Nº de colaboradores" placeholder="Ex.: 50" />
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand">
                      Mensagem
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Conte um pouco sobre o que a sua empresa precisa"
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <button type="submit" className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm">
                    Enviar solicitação <Send className="h-4 w-4" />
                  </button>
                  <p className="text-center text-[11px] text-muted-foreground">
                    Ao enviar, você concorda em ser contatado pela Rota Brasil Benefícios.
                  </p>
                </div>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label, type = "text", placeholder, required,
}: { label: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand">
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

/* ---------- Page ---------- */
function Landing() {
  return (
    <>
      <Hero />
      <QuemSomos />
      <Servicos />
      <Diferenciais />
      <ComoFunciona />
      <Indicadores />
      <Depoimentos />
      <FAQ />
      <CTA />
    </>
  );
}
