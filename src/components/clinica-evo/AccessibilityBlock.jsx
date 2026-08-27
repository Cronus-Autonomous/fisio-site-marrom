import React from "react";
import { Reveal } from "./Reveal";
import { HeartHandshake, Flag } from "lucide-react";

export default function AccessibilityBlock() {
  return (
    <Reveal className="rounded-3xl border border-secondary/50 bg-secondary/20 p-7">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-complementary/15">
          <HeartHandshake className="h-6 w-6 text-complementary" strokeWidth={1.5} aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold text-primary">
            Um espaço onde você pode se sentir à vontade.
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-primary/75">
            <li className="flex items-center gap-2">
              <Flag className="h-4 w-4 text-complementary" strokeWidth={1.5} aria-hidden="true" />
              Espaço seguro para pessoas transgênero.
            </li>
            <li className="flex items-center gap-2">
              <Flag className="h-4 w-4 text-complementary" strokeWidth={1.5} aria-hidden="true" />
              Atendimento acolhedor à comunidade LGBTQ+.
            </li>
          </ul>
        </div>
      </div>
    </Reveal>
  );
}