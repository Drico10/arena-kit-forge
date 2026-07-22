import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 text-sm font-semibold text-white shadow-elevated transition hover:-translate-y-0.5"
    >
      <span className="relative grid h-6 w-6 place-items-center">
        <MessageCircle className="h-5 w-5" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-white/40" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
