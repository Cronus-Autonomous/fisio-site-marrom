import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, ArrowRight, UserRound, Layers, Home } from "lucide-react";
import { business, whatsappMessages } from "@/config/business";
import { WhatsAppButton } from "./Buttons";
import { scrollToId } from "./Reveal";

const HERO_IMG = "https://media.base44.com/images/public/6a8f2366355c0af98678e38e/e6fa6991f_generated_d935f380.png";

const trustItems = [
  { icon: UserRound, label: "Atendimento individualizado" },
  { icon: Layers, label: "Abordagem integrada" },
  { icon: Home, label: "Espaço acolhedor" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  const imgProps = reduce
    ? {}
    : {
        initial: { scale: 1.06, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
      };

  const textProps = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
      };

  return (
    <section id="inicio" className="relative overflow-hidden bg-background pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* forma orgânica de fundo */}
      <div className="pointer-events-none absolute -right-24 top-24 h-[28rem] w-[28rem] rounded-full bg-secondary/30 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-complementary/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* Copy */}
        <motion.div {...textProps} className="order-2 lg:order-1">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-card/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {business.tagline}
          </p>

          <h1 className="font-heading text-[2.1rem] font-semibold leading-[1.12] tracking-tight text-primary text-balance sm:text-5xl lg:text-[3.4rem]">
            Cuidado personalizado para aliviar{" "}
            <span className="relative whitespace-nowrap text-accent">dores</span>, recuperar{" "}
            <span className="relative whitespace-nowrap text-accent">movimentos</span> e cuidar do seu{" "}
            <span className="relative whitespace-nowrap text-accent">bem-estar</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary/75 text-pretty">
            Um atendimento humanizado e individualizado para cuidar do corpo de forma integrada,
            respeitando suas necessidades e seus objetivos.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton href={whatsappMessages.hero()} className="w-full sm:w-auto">
              Agendar minha avaliação
            </WhatsAppButton>
            <button
              onClick={() => scrollToId("#servicos")}
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-primary/20 px-7 py-3.5 text-[15px] font-semibold text-primary transition-all duration-300 hover:border-primary/45 hover:bg-primary/5 active:scale-[0.98] sm:w-auto cursor-pointer"
            >
              Conhecer os tratamentos
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>

          {/* Trust indicators */}
          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {trustItems.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-sm text-primary/70">
                <item.icon className="h-4 w-4 text-complementary" strokeWidth={1.5} aria-hidden="true" />
                {item.label}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div {...imgProps} className="relative order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_60px_-24px_rgba(89,48,45,0.35)]">
            <img
              src={HERO_IMG}
              alt="Mãos de uma fisioterapeuta realizando atendimento manual nos ombros de uma pessoa"
              className="aspect-[4/5] w-full object-cover"
              fetchpriority="high"
              width={720}
              height={900}
            />
          </div>

          {/* elemento flutuante discreto */}
          <div className="absolute -left-3 bottom-8 hidden rounded-2xl border border-border/60 bg-card/90 px-4 py-3 shadow-md backdrop-blur-sm sm:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-complementary">Cuidado integrado</p>
            <p className="mt-0.5 text-sm font-medium text-primary">Atendimento individualizado</p>
          </div>
          <div className="absolute -right-2 top-10 hidden rounded-2xl border border-border/60 bg-card/90 px-4 py-3 shadow-md backdrop-blur-sm md:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-complementary">Bem-estar</p>
            <p className="mt-0.5 text-sm font-medium text-primary">Corpo cuidado por inteiro</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}