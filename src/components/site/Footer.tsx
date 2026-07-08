import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Mail, HelpCircle, Truck } from "lucide-react";

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

const socials = [
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://wa.me/00000000000", label: "WhatsApp", Icon: MessageCircle },
];

const quick = [
  { to: "/contact", label: "Contact", Icon: Mail },
  { to: "/faq", label: "FAQ", Icon: HelpCircle },
  { to: "/shipping", label: "Shipping & Returns", Icon: Truck },
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
              Football shirts for fans who live for the 90 minutes. Curated with love, priced with respect, shipped to your doorstep — wherever the game takes you.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-2 text-xs font-medium uppercase tracking-widest transition hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" /> {label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
              {quick.map(({ to, label, Icon }) => (
                <Link key={to} to={to} className="inline-flex items-center gap-1.5 transition hover:text-gold">
                  <Icon className="h-3.5 w-3.5" /> {label}
                </Link>
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
