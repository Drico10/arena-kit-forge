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
        Where football <span className="gold-text">obsession</span> meets craft.
      </h1>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <p className="text-lg text-foreground/85">
          Imports Arena was born in 2019 from a simple idea: fans deserve authentic jerseys — the real fabrics, the real crests, the real feel — delivered anywhere in the world without compromise.
        </p>
        <p className="text-lg text-foreground/85">
          Today we source from Brazil, Europe and beyond, curating a collection that spans modern releases and iconic retro classics. Every stitch tells a story. Every jersey earns its place.
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
