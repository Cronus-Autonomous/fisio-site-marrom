import React from "react";
import { whatsappMessages } from "@/config/business";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./Buttons";

export default function MidPageCTA() {
  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold leading-snug text-balance sm:text-4xl">
            Não sabe qual tratamento faz mais sentido para você?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Converse conosco pelo WhatsApp e conte o que você está buscando. Vamos orientar você
            sobre o próximo passo.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-9 flex justify-center">
          <WhatsAppButton
            href={whatsappMessages.midPage()}
            className="bg-accent text-accent-foreground hover:bg-[#8a3524] border-transparent"
          >
            Conversar pelo WhatsApp
          </WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}