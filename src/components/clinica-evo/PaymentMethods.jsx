import React from "react";
import { paymentMethods } from "@/config/business";
import { CreditCard } from "lucide-react";

export default function PaymentMethods() {
  return (
    <div className="rounded-3xl border border-border/60 bg-card p-7">
      <div className="mb-4 flex items-center gap-2">
        <CreditCard className="h-5 w-5 text-complementary" strokeWidth={1.5} aria-hidden="true" />
        <h3 className="font-heading text-xl font-semibold text-primary">Facilidade para o seu atendimento</h3>
      </div>
      <p className="mb-4 text-sm text-primary/70">Aceitamos:</p>
      <div className="flex flex-wrap gap-2">
        {paymentMethods.map((m) => (
          <span
            key={m}
            className="rounded-full border border-secondary/60 bg-secondary/15 px-3.5 py-1.5 text-xs font-medium text-primary/80"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}