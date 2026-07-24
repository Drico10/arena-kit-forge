import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Users,
  Zap,
  MapPin,
  Sparkles,
  Car,
  Truck,
  Bike,
  Flame,
  CloudRain,
  UserRoundCheck,
  Wind,
  Phone,
  Wrench,
  KeyRound,
  ClipboardList,
  BadgeCheck,
  HandshakeIcon,
  FileCheck2,
  HeadphonesIcon,
  Gift,
  Percent,
  Smartphone,
  Store,
  Plus,
  Minus,
  CheckCircle2,
  Send,
  Star,
} from "lucide-react";
import heroImg from "@/assets/rota-hero-vehicle.jpg";
import aboutImg from "@/assets/rota-about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rota Brasil Proteção Veicular — Proteção completa para o seu veículo" },
      { name: "description", content: "Associação de proteção veicular com cobertura nacional, assistência 24 horas e atendimento humanizado. Proteja carros, motos, caminhões e frotas com quem entende do assunto." },
      { property: "og:title", content: "Rota Brasil Proteção Veicular — Dirija com tranquilidade" },
      { property: "og:description", content: "Proteção veicular completa, cobertura nacional e assistência 24h. Solicite uma cotação gratuita e proteja seu patrimônio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
const heroBadges = [
  "Atendimento nacional",
  "Assistência 24 horas",
  "Cobertura completa",
  "Atendimento rápido",
];

function Hero() {
  return (
    <section className="relative overflow-hidden gradient-soft">
      <div className="container-x grid gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:py-28">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3.5 py-1.5 text-xs font-medium text-brand backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Associação de proteção veicular
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-brand sm:text-5xl lg:text-[3.4rem]">
              Proteção veicular completa para quem dirige com{" "}
              <span className="text-primary">tranquilidade.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Proteja seu veículo com uma associação que oferece cobertura nacional, assistência
              24 horas e atendimento humanizado. Carros, motos, caminhões, utilitários e frotas.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#cotacao" className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm">
                Solicitar Cotação <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener"
                className="btn-whatsapp inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm"
              >
                <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 grid grid-cols-2 gap-3 text-xs text-muted-foreground sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3">
              {heroBadges.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-primary/15 via-transparent to-brand/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/60 shadow-elevated">
            <img
              src={heroImg}
              alt="Motorista tranquilo ao lado do seu veículo"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand/25 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 left-4 hidden rounded-2xl border border-border bg-white p-4 shadow-elevated sm:flex sm:items-center sm:gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Proteção ativa
              </p>
              <p className="text-sm font-semibold text-brand">Cobertura nacional 24h</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section head ---------- */
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

/* ---------- Tipos de veículo ---------- */
const veiculos = [
  { Icon: Car, label: "Carros" },
  { Icon: Bike, label: "Motos" },
  { Icon: Truck, label: "Caminhões" },
  { Icon: Truck, label: "Utilitários" },
  { Icon: Car, label: "Frotas" },
];

function Veiculos() {
  return (
    <section className="container-x -mt-10 md:-mt-14">
      <Reveal>
        <div className="rounded-3xl border border-border bg-white p-6 shadow-soft md:p-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {veiculos.map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 rounded-2xl border border-transparent bg-secondary/60 p-4 text-center transition hover:border-primary/30 hover:bg-white">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <span className="text-sm font-semibold text-brand">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Coberturas ---------- */
const coberturas = [
  { Icon: ShieldCheck, title: "Roubo e Furto", desc: "Indenização por perda em caso de roubo ou furto qualificado do veículo." },
  { Icon: Car, title: "Colisão", desc: "Reparos por danos causados em acidentes de trânsito, com oficinas parceiras." },
  { Icon: BadgeCheck, title: "Perda Total", desc: "Indenização integral quando o conserto ultrapassa o valor de mercado." },
  { Icon: Flame, title: "Incêndio", desc: "Cobertura em casos de incêndio, curto-circuito ou explosão do veículo." },
  { Icon: CloudRain, title: "Fenômenos Naturais", desc: "Proteção contra enchentes, alagamentos, granizo, vendavais e queda de árvores." },
  { Icon: UserRoundCheck, title: "Proteção para Terceiros", desc: "Cobertura para danos materiais e corporais causados a terceiros." },
  { Icon: Wind, title: "Cobertura de Vidros", desc: "Reparo ou troca de para-brisa, vidros laterais, traseiro, faróis e retrovisores." },
  { Icon: Phone, title: "Assistência 24 Horas", desc: "Central pronta para atender emergências a qualquer hora, em todo o Brasil." },
  { Icon: Wrench, title: "Reboque", desc: "Guincho em caso de pane ou sinistro, com quilometragem ampla incluída." },
  { Icon: KeyRound, title: "Carro Reserva", desc: "Veículo substituto enquanto o seu está em reparo, sem interromper sua rotina." },
];

function Coberturas() {
  return (
    <section id="coberturas" className="bg-secondary py-20 md:py-28">
      <div className="container-x">
        <SectionHead
          eyebrow="Coberturas"
          title="Tudo que o seu veículo precisa em um só lugar."
          description="Coberturas amplas e transparentes, pensadas para proteger o seu patrimônio no dia a dia e nos imprevistos."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {coberturas.map(({ Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 40}>
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

/* ---------- Quem Somos ---------- */
const quemSomosItems = [
  { Icon: HeadphonesIcon, title: "Atendimento humanizado", desc: "Pessoas reais, escuta ativa e respostas rápidas em cada etapa." },
  { Icon: ShieldCheck, title: "Especialistas em proteção veicular", desc: "Associação focada em proteger veículos com seriedade e experiência." },
  { Icon: FileCheck2, title: "Transparência", desc: "Regras claras, sem letras miúdas e sem custos escondidos." },
  { Icon: Zap, title: "Agilidade", desc: "Processos digitais e simplificados para você associar em poucos passos." },
  { Icon: MapPin, title: "Atendimento nacional", desc: "Rede de parceiros e assistência em todos os estados do Brasil." },
  { Icon: HandshakeIcon, title: "Compromisso com o associado", desc: "Relacionamento de longo prazo e suporte contínuo quando você precisar." },
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
              alt="Equipe corporativa Rota Brasil Proteção Veicular"
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-elevated"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-white p-4 shadow-elevated sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Associados protegidos</p>
                  <p className="font-display text-xl font-bold text-brand">+10.000*</p>
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
              Uma associação feita por quem entende de estrada.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A Rota Brasil é uma associação especializada em proteção veicular. Trabalhamos com
              transparência, agilidade e atendimento humanizado para que cada associado dirija com
              a certeza de estar amparado — em qualquer lugar do país, a qualquer hora do dia.
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

/* ---------- Como Funciona ---------- */
const passos = [
  { Icon: ClipboardList, title: "Solicite sua cotação", desc: "Preencha os dados do veículo em poucos minutos e receba uma proposta personalizada." },
  { Icon: FileCheck2, title: "Escolha o plano ideal", desc: "Compare coberturas, benefícios e valores com o suporte de um consultor especializado." },
  { Icon: ShieldCheck, title: "Associe seu veículo", desc: "Assinatura 100% digital, sem burocracia, com ativação da proteção em poucos dias." },
  { Icon: Car, title: "Dirija com tranquilidade", desc: "Conte com assistência 24h, cobertura nacional e um time pronto para te apoiar." },
];

function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-secondary py-20 md:py-28">
      <div className="container-x">
        <SectionHead
          eyebrow="Como funciona"
          title="Do primeiro contato à proteção ativa em poucos passos."
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

/* ---------- Diferenciais ---------- */
const diferenciais = [
  { Icon: MapPin, title: "Atendimento nacional", desc: "Suporte e rede de parceiros em todos os estados do Brasil." },
  { Icon: Users, title: "Equipe especializada", desc: "Consultores com anos de experiência em proteção veicular." },
  { Icon: Phone, title: "Assistência 24 horas", desc: "Central de atendimento disponível a qualquer hora, todos os dias." },
  { Icon: ShieldCheck, title: "Cobertura ampla", desc: "Proteção para diferentes perfis de veículos e diferentes tipos de sinistro." },
  { Icon: Zap, title: "Atendimento rápido", desc: "Respostas ágeis, tanto na cotação quanto no acionamento de assistência." },
  { Icon: FileCheck2, title: "Processo simplificado", desc: "Contratação digital, sem burocracia e com contratos claros." },
];

function Diferenciais() {
  return (
    <section id="diferenciais" className="container-x py-20 md:py-28">
      <SectionHead
        eyebrow="Diferenciais"
        title="Por que motoristas escolhem a Rota Brasil."
        description="Uma proteção pensada para o dia a dia real de quem depende do veículo e não pode ficar na mão."
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

/* ---------- Clube de Benefícios ---------- */
const beneficios = [
  { Icon: Percent, title: "Cashback", desc: "Receba parte do que você gasta com parceiros direto na sua conta." },
  { Icon: Store, title: "Clube de descontos", desc: "Descontos exclusivos em postos, oficinas, lojas e serviços automotivos." },
  { Icon: Smartphone, title: "Aplicativo exclusivo", desc: "Gerencie a proteção, acione assistência e acompanhe benefícios pelo app." },
  { Icon: HandshakeIcon, title: "Parceiros conveniados", desc: "Rede em expansão com marcas selecionadas em todo o Brasil." },
];

function Beneficios() {
  return (
    <section id="beneficios" className="bg-secondary py-20 md:py-28">
      <div className="container-x">
        <SectionHead
          eyebrow="Clube de Benefícios"
          title="Muito além da proteção do seu veículo."
          description="Ser associado da Rota Brasil também é ter acesso a uma rede de vantagens pensadas para quem vive na estrada."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {beneficios.map(({ Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/25 blur-2xl transition group-hover:bg-gold/40" />
                <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className="relative mt-5 text-base font-semibold text-brand">{title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
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
  { value: "+10.000*", label: "Associados protegidos" },
  { value: "+95%*", label: "Satisfação dos associados" },
  { value: "Nacional", label: "Cobertura em todo o Brasil" },
  { value: "24h", label: "Assistência todos os dias" },
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
                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                  <p className="font-display text-3xl font-bold text-white md:text-4xl">{n.value}</p>
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
    name: "Rafael Monteiro",
    role: "Associado — São Paulo/SP",
    text: "Bati em um poste na chuva e a assistência chegou em menos de 40 minutos. O carro reserva salvou minha semana. Recomendo demais.",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Camila Duarte",
    role: "Associada — Curitiba/PR",
    text: "Sempre tive receio de proteção veicular, mas o atendimento foi transparente do começo ao fim. Hoje protejo meu carro e a moto do meu marido.",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
  {
    name: "Eduardo Nogueira",
    role: "Frotista — Goiânia/GO",
    text: "Passei toda a frota da transportadora para a Rota Brasil. Reduzi custos e ganhei previsibilidade. Suporte rápido, sem enrolação.",
    avatar: "https://i.pravatar.cc/120?img=68",
  },
];

function Depoimentos() {
  return (
    <section className="container-x py-20 md:py-28">
      <SectionHead
        eyebrow="Depoimentos"
        title="A confiança de quem já dirige protegido."
        description="Depoimentos fictícios, apresentados a título de exemplo para este projeto conceitual."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {depoimentos.map((d, i) => (
          <Reveal key={d.name} delay={i * 90}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-soft">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">“{d.text}”</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <img
                  src={d.avatar}
                  alt={d.name}
                  width={44}
                  height={44}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-brand">{d.name}</p>
                  <p className="text-xs text-muted-foreground">{d.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const faqs = [
  {
    q: "Como funciona a associação de proteção veicular?",
    a: "Você se torna associado da Rota Brasil e passa a contar com um rateio mensal entre os membros, além de coberturas contratadas e assistência 24h. Não é seguro tradicional — é um modelo colaborativo, transparente e regulamentado.",
  },
  {
    q: "O que está incluso na proteção?",
    a: "Coberturas para roubo, furto, colisão, incêndio, perda total, fenômenos naturais, cobertura de vidros, proteção a terceiros, além de assistência 24h com reboque e opção de carro reserva.",
  },
  {
    q: "Como faço uma cotação?",
    a: "Basta preencher o formulário de cotação neste site ou falar com nossa equipe pelo WhatsApp. Em poucos minutos você recebe uma proposta personalizada, sem compromisso.",
  },
  {
    q: "Quanto tempo leva a aprovação?",
    a: "Após o envio dos documentos e da vistoria, a associação costuma ser aprovada em poucos dias úteis. Nosso time acompanha cada etapa para agilizar o processo.",
  },
  {
    q: "Vocês atendem em todo o Brasil?",
    a: "Sim. A Rota Brasil oferece cobertura nacional e conta com rede de parceiros e assistência 24 horas em todos os estados.",
  },
];

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white transition hover:border-primary/30">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-brand md:text-base">{q}</span>
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className="grid transition-all duration-300"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-secondary py-20 md:py-28">
      <div className="container-x max-w-3xl">
        <SectionHead eyebrow="FAQ" title="Perguntas frequentes." />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <FaqItem q={f.q} a={f.a} defaultOpen={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA + Formulário ---------- */
function Cotacao() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", veiculo: "", cidade: "", mensagem: "" });

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 6000);
    setForm({ nome: "", telefone: "", email: "", veiculo: "", cidade: "", mensagem: "" });
  }

  return (
    <section id="cotacao" className="container-x py-20 md:py-28">
      <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-elevated">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
          <div className="relative gradient-brand p-10 text-white md:p-14">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
              Solicitar cotação
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
              Seu veículo merece mais segurança.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85 md:text-base">
              Solicite uma cotação gratuita e descubra como é simples proteger seu patrimônio com
              uma associação especializada, cobertura nacional e assistência 24 horas.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Sem compromisso — cotação gratuita",
                "Consultor especializado dedicado",
                "Resposta em até 1 dia útil",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-white" /> {t}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
              </a>
              <a
                href="tel:+5500000000000"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> (00) 0000-0000
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="p-8 md:p-12">
            <h3 className="font-display text-xl font-bold text-brand md:text-2xl">
              Preencha seus dados
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Retornamos rapidamente com a melhor proposta para o seu veículo.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Nome completo" name="nome" value={form.nome} onChange={onChange} required />
              <Field label="Telefone / WhatsApp" name="telefone" value={form.telefone} onChange={onChange} required />
              <Field label="E-mail" name="email" type="email" value={form.email} onChange={onChange} required className="sm:col-span-2" />
              <SelectField
                label="Tipo de veículo"
                name="veiculo"
                value={form.veiculo}
                onChange={onChange}
                required
                options={["Carro", "Moto", "Caminhão", "Utilitário", "Frota"]}
              />
              <Field label="Cidade / UF" name="cidade" value={form.cidade} onChange={onChange} required />
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-brand">
                  Mensagem (opcional)
                </label>
                <textarea
                  name="mensagem"
                  rows={3}
                  value={form.mensagem}
                  onChange={onChange}
                  className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Conte um pouco sobre o veículo e o que você procura."
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm"
            >
              <Send className="h-4 w-4" /> Solicitar Cotação
            </button>

            {enviado && (
              <p className="mt-4 rounded-xl bg-primary/10 px-4 py-3 text-sm text-primary">
                Recebemos seus dados. Em breve um consultor entrará em contato.
              </p>
            )}

            <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">
              Ao enviar, você concorda em ser contatado pela Rota Brasil. Seus dados são tratados com
              segurança e usados apenas para responder à sua solicitação.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- Form fields ---------- */
function Field({
  label,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold uppercase tracking-wider text-brand">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function SelectField({
  label,
  options,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { label: string; options: string[] }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-brand">{label}</label>
      <select
        {...props}
        className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        <option value="">Selecione…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

/* ---------- Landing ---------- */
function Landing() {
  return (
    <>
      <Hero />
      <Veiculos />
      <Coberturas />
      <QuemSomos />
      <ComoFunciona />
      <Diferenciais />
      <Beneficios />
      <Indicadores />
      <Depoimentos />
      <Faq />
      <Cotacao />
    </>
  );
}
