import { whatsappLink, whatsappMessages } from "@/config/business";
import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="text-3xl leading-tight tracking-tight text-cocoa sm:text-[2.75rem]">
            Seu corpo está pedindo cuidado?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cocoa/75 sm:text-lg">
            Agende uma avaliação e descubra qual abordagem pode fazer mais sentido para você.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton href={whatsappLink(whatsappMessages.final)} size="lg" withWhatsApp>
              Agendar pelo WhatsApp
            </CTAButton>
            <CTAButton href="#servicos" variant="outline" size="lg" external={false}>
              Conhecer os tratamentos
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
