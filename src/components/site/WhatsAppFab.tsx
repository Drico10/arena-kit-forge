import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/00000000000"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elevated transition hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}
