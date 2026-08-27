import React from "react";
import { MapPin, Navigation, MessageCircle } from "lucide-react";
import { contact, google, whatsappMessages } from "@/config/business";
import { Reveal } from "./Reveal";
import BusinessHours from "./BusinessHours";
import PaymentMethods from "./PaymentMethods";
import AccessibilityBlock from "./AccessibilityBlock";

export default function LocationSection() {
  const { address } = contact;
  const mapsQuery = encodeURIComponent(address.full);

  return (
    <section id="contato" className="bg-secondary/25 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-complementary">
            Localização
          </p>
          <h2 className="font-heading text-3xl font-semibold text-primary text-balance sm:text-4xl">
            Estamos em Londrina para cuidar de você.
          </h2>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Coluna info */}
          <Reveal className="flex flex-col gap-6">
            <div className="rounded-3xl border border-border/60 bg-card p-7">
              <div className="mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-complementary" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="font-heading text-xl font-semibold text-primary">Endereço</h3>
              </div>
              <address className="not-italic leading-relaxed text-primary/80">
                <p className="font-medium text-primary">{address.street}</p>
                <p>{address.district}</p>
                <p>{address.city} — {address.state}</p>
                <p>{address.zip}</p>
                <p>{address.country}</p>
              </address>
              <a
                href={google.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:bg-[#8a3524] hover:shadow-md min-h-[48px]"
              >
                <Navigation className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                Como chegar
              </a>
            </div>

            <BusinessHours />
            <PaymentMethods />
            <AccessibilityBlock />

            <a
              href={whatsappMessages.general()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 px-6 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 min-h-[48px]"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              Falar pelo WhatsApp
            </a>
          </Reveal>

          {/* Mapa */}
          <Reveal delay={0.1} className="overflow-hidden rounded-3xl border border-border/60 shadow-[0_18px_50px_-24px_rgba(89,48,45,0.3)]">
            <iframe
              title={`Mapa — ${address.street}, ${address.city}`}
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              className="h-full min-h-[420px] w-full"
              style={{ border: 0, filter: "sepia(0.15) saturate(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}