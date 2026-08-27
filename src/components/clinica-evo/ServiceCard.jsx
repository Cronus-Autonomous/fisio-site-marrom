import React from "react";
import { ArrowRight } from "lucide-react";
import { services, whatsappMessages } from "@/config/business";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

export default function ServiceCard({ service, index }) {
  return (
    <Reveal
      delay={(index % 3) * 0.08}
      className="group flex h-full flex-col rounded-3xl border border-border/60 bg-card p-7 shadow-[0_8px_30px_-18px_rgba(89,48,45,0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-secondary hover:shadow-[0_18px_40px_-22px_rgba(89,48,45,0.35)]"
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/30 transition-colors duration-500 group-hover:bg-accent/10">
          <Icon name={service.icon} className="h-7 w-7 text-accent" />
        </div>
        <span className="font-heading text-3xl font-medium text-secondary/70">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="font-heading text-xl font-semibold leading-snug text-primary">
        {service.name}
      </h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-primary/70">
        {service.description}
      </p>

      <a
        href={whatsappMessages.service(service.name)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-[#8a3524]"
      >
        Quero saber mais
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.75} aria-hidden="true" />
      </a>
    </Reveal>
  );
}