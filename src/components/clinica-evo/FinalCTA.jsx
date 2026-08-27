import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { whatsappMessages } from "@/config/business";
import { Reveal, scrollToId } from "./Reveal";
import { WhatsAppButton } from "./Buttons";

const SHAPE_IMG = "https://media.base44.com/images/public/6a8f2366355c0af98678e38e/cced23abe_generated_7d45a27b.png";

export default function FinalCTA() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" aria-hidden="true" />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-secondary/40 bg-secondary/20 px-6 py-14 text-center sm:px-12 sm:py-20">
          {/* forma orgânica de fundo */}
          <motion.img
            src={SHAPE_IMG}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 object-cover opacity-25 mix-blend-multiply sm:h-80 sm:w-80"
            {...(reduce ? {} : {
              initial: { scale: 1.1, opacity: 0 },
              whileInView: { scale: 1, opacity: 0.25 },
              viewport: { once: true },
              transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            })}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-semibold leading-snug text-primary text-balance sm:text-[2.6rem]">
              Seu corpo merece cuidado e atenção.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary/75">
              Agende seu atendimento na Clínica Evo e descubra uma abordagem mais
              individualizada para cuidar do seu bem-estar.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton href={whatsappMessages.final()} className="w-full sm:w-auto">
                Agendar pelo WhatsApp
              </WhatsAppButton>
              <button
                onClick={() => scrollToId("#servicos")}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-primary/25 px-7 py-3.5 text-[15px] font-semibold text-primary transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 active:scale-[0.98] sm:w-auto cursor-pointer"
              >
                Conhecer os tratamentos
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}