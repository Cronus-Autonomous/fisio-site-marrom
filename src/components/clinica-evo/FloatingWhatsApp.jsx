import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappMessages } from "@/config/business";

// Botão flutuante WhatsApp — desktop (canto inferior direito)
// No mobile a barra inferior cuida do CTA; este botão só aparece em telas maiores.
export default function FloatingWhatsApp() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.a
      href={whatsappMessages.hero()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agende seu atendimento pelo WhatsApp"
      className="group fixed bottom-6 right-6 z-40 hidden lg:flex"
      {...(reduce
        ? {}
        : {
            initial: { opacity: 0, scale: 0.8, y: 20 },
            animate: { opacity: 1, scale: 1, y: 0 },
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
          })}
    >
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg wa-pulse transition-transform duration-300 hover:scale-105">
        <MessageCircle className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
        Agende seu atendimento
      </span>
    </motion.a>
  );
}