import React from "react";
import { valuePillars } from "@/config/business";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

export default function ValueProposition() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-semibold leading-snug text-primary text-balance sm:text-[2rem]">
            Mais do que tratar um desconforto, queremos entender o que seu corpo precisa.
          </h2>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-3">
          {valuePillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1} className="text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-secondary/60 bg-secondary/20">
                <Icon name={pillar.icon} className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary">{pillar.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-primary/70">{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}