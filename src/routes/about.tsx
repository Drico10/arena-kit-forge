import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Imports Arena" }, { name: "description", content: "The story behind Imports Arena — a premium football jersey destination." }] }),
  component: About,
});

function About() {
  return (
    <div className="container-x py-10 md:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Our story</p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl md:text-6xl">
        Started by fans. Still <span className="gold-text">run by fans.</span>
      </h1>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <p className="text-lg text-foreground/85">
          Imports Arena began in 2019 in a small flat with a laptop, a Flamengo poster and a stubborn belief: fans everywhere deserve the shirts they love — without paying tourist prices or waiting months for a box that never comes.
        </p>
        <p className="text-lg text-foreground/85">
          Six years on, we're still the same people. We source from Brazil, Europe and the corners of the football world you won't find in a mall. We answer our own messages. We wear what we sell. And we keep prices fair, because loving football shouldn't cost a paycheck.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          { n: "120k+", l: "Happy customers" },
          { n: "90+", l: "Countries shipped to" },
          { n: "4.9/5", l: "Average rating" },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl border border-border bg-card p-8 text-center">
            <p className="font-display text-5xl gold-text">{s.n}</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
