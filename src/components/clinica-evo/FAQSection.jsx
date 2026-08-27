import React, { useState } from "react";
import { faqItems } from "@/config/business";
import { Reveal } from "./Reveal";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-semibold text-primary text-balance sm:text-4xl">
            Perguntas frequentes
          </h2>
        </Reveal>

        <div className="divide-y divide-border/60 border-y border-border/60">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={(i % 6) * 0.04}>
                <div>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-lg font-medium text-primary">{item.question}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-secondary/60 text-accent transition-colors">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-400 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pr-12 text-[15px] leading-relaxed text-primary/75">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}