import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const cols = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Jerseys" },
      { to: "/categories", label: "Categories" },
      { to: "/shop?category=retro", label: "Retro" },
      { to: "/shop?category=national", label: "National Teams" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/contact", label: "Contact" },
      { to: "/faq", label: "FAQ" },
      { to: "/shipping", label: "Shipping & Returns" },
      { to: "/orders", label: "Track Order" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms of Service" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="font-display text-3xl">
              IMPORTS<span className="gold-text">ARENA</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Authentic football jerseys from the world's greatest clubs and national teams. Curated,
              imported, delivered.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">{c.title}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {c.links.map((l) => (
                  <li key={l.to + l.label}>
                    <Link to={l.to} className="transition hover:text-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Imports Arena. All rights reserved.</p>
          <p>Payments: Visa · Mastercard · Amex · PayPal · Apple Pay</p>
        </div>
      </div>
    </footer>
  );
}
