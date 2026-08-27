import React from "react";
import { services } from "@/config/business";
import { Reveal } from "./Reveal";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section id="servicos" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-complementary">
            Tratamentos
          </p>
          <h2 className="font-heading text-3xl font-semibold text-primary text-balance sm:text-4xl">
            Tratamentos para diferentes necessidades do seu corpo
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary/70">
            Conheça algumas das opções de cuidado oferecidas pela.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div key={service.id} id={`service-${service.id}`} className="transition-all duration-500 rounded-3xl">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}