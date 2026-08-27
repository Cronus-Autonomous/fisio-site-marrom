import React from "react";
import { ArrowRight } from "lucide-react";
import { business, whatsappMessages } from "@/config/business";
import { Reveal, scrollToId } from "./Reveal";
import logo from "@/assets/atendimento.jpg";

const ABOUT_IMG = "https://static.wixstatic.com/media/12d367_4f26ccd17f8f4e3a8958306ea08c2332~mv2.png";

export default function AboutSection() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-secondary/25 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Imagem */}
        <Reveal className="order-1">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_60px_-24px_rgba(89,48,45,0.3)]">
            <img
              src={logo}
              alt="Interior da Clínica Evo — ambiente acolhedor e minimalista"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              width={720}
              height={540}
            />
          </div>
        </Reveal>

        {/* Conteúdo */}
        <Reveal delay={0.1} className="order-2">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-complementary">
            {business.name}
          </p>
          <h2 className="font-heading text-3xl font-semibold leading-tight text-primary text-balance sm:text-4xl">
            Seu corpo merece ser cuidado por inteiro.
          </h2>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-primary/75">
            <p>
              Na Clínica Evo, cuidamos da sua saúde e bem-estar de forma integrada.
            </p>
            <p>
              Combinamos fisioterapia especializada com técnicas de estética integrativa para
              tratar o corpo como um todo — aliviando dores, melhorando a mobilidade e cuidando
              também da beleza e autoestima.
            </p>
            <p>
              O atendimento é humanizado, individualizado e focado em compreender as
              necessidades de cada pessoa.
            </p>
          </div>

          <p className="mt-7 border-l-2 border-accent pl-5 font-heading text-xl italic text-primary">
            “Cuidado que começa entendendo você.”
          </p>

          <button
            onClick={() => scrollToId("#contato")}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/25 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 min-h-[48px] cursor-pointer"
          >
            Conhecer a clínica
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}