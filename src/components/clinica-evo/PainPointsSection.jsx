import React from "react";
import { painPoints, whatsappMessages } from "@/config/business";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./Buttons";

export default function PainPointsSection() {
  return (
    <section className="bg-secondary/25 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-semibold text-primary text-balance sm:text-4xl">
            Talvez você esteja procurando exatamente isso.
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {painPoints.map((point, i) => (
            <Reveal
              key={point}
              delay={(i % 2) * 0.08}
              className="flex items-start gap-3 rounded-2xl border border-border/50 bg-card/60 p-5"
            >
              <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-complementary" aria-hidden="true" />
              <p className="text-[15px] leading-relaxed text-primary/85">{point}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10 text-center">
          <WhatsAppButton href={whatsappMessages.painPoint()}>
            Quero conversar sobre meu caso
          </WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}