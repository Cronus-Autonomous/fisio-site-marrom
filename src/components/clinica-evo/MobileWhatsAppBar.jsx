import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappMessages } from "@/config/business";

// Barra fixa inferior no mobile — WhatsApp | Agendar atendimento
export default function MobileWhatsAppBar() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className={`fixed inset-x-0 bottom-0 z-40 lg:hidden ${visible ? "" : "pointer-events-none"}`}
      {...(reduce
        ? {}
        : {
            initial: { y: 80 },
            animate: { y: visible ? 0 : 80 },
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
          })}
    >
      <div className="border-t border-border/60 bg-background/95 px-4 py-3 backdrop-blur-md shadow-[0_-6px_20px_-12px_rgba(89,48,45,0.25)]">
        <a
          href={whatsappMessages.hero()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-sm transition-all duration-300 hover:bg-[#8a3524] active:scale-[0.98]"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          WhatsApp — Agendar atendimento
        </a>
      </div>
    </motion.div>
  );
}