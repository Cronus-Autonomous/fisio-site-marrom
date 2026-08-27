import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { needs, whatsappMessages } from "@/config/business";
import { Reveal, scrollToId } from "./Reveal";
import { cn } from "@/lib/utils";

export default function NeedSelector() {
  const [selected, setSelected] = useState(null);

  const handleClick = (need) => {
    setSelected(need.id);
    // scroll suave para o serviço relacionado
    setTimeout(() => {
      const el = document.getElementById(`service-${need.target}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("ring-2", "ring-accent", "ring-offset-4", "ring-offset-background");
        setTimeout(() => {
          el.classList.remove("ring-2", "ring-accent", "ring-offset-4", "ring-offset-background");
        }, 1800);
      }
    }, 80);
  };

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-8 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-complementary">
            Como podemos te ajudar?
          </p>
          <h2 className="font-heading text-3xl font-semibold text-primary text-balance sm:text-4xl">
            O que você está buscando hoje?
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {needs.map((need) => (
            <button
              key={need.id}
              onClick={() => handleClick(need)}
              className={cn(
                "inline-flex min-h-[48px] items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300",
                selected === need.id
                  ? "border-accent bg-accent text-accent-foreground shadow-md"
                  : "border-secondary/70 bg-card/60 text-primary/80 hover:border-primary/40 hover:bg-secondary/30"
              )}
            >
              {need.label}
            </button>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mt-8 text-center">
          <button
            onClick={() => scrollToId("#servicos")}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-[#8a3524]"
          >
            Ver todos os tratamentos
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}