import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/573242355121?text=Hola%20Excelencia%20Educativa%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-[oklch(0.7_0.18_155)] text-white shadow-elevated grid place-items-center hover:scale-105 transition-transform"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
