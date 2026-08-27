import React from "react";
import { processSteps, whatsappMessages } from "@/config/business";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./Buttons";

export default function ProcessSection() {
  return (
    <section className="bg-secondary/25 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="mb-14 text-center">
          <h2 className="font-heading text-3xl font-semibold text-primary text-balance sm:text-4xl">
            Começar seu cuidado é simples.
          </h2>
        </Reveal>

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08} className="relative">
              <span className="font-heading text-5xl font-semibold text-secondary/50">
                {step.number}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary/70">{step.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12 text-center">
          <WhatsAppButton href={whatsappMessages.final()}>
            Agendar pelo WhatsApp
          </WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}