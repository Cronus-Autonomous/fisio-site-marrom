import React from "react";
import { differentials } from "@/config/business";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-complementary">
            Diferenciais
          </p>
          <h2 className="font-heading text-3xl font-semibold text-primary text-balance sm:text-4xl">
            Por que escolher a Clínica Evo?
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((d, i) => (
            <Reveal
              key={d.title}
              delay={i * 0.08}
              className="flex flex-col rounded-3xl border border-border/50 bg-card/50 p-7 text-center transition-all duration-500 hover:border-secondary hover:bg-card"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/25">
                <Icon name={d.icon} className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold leading-snug text-primary">
                {d.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary/70">{d.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}