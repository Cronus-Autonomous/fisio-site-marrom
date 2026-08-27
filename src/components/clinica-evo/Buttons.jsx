import React from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// Botão CTA principal — cor accent #A6442E
export function PrimaryButton({ as = "a", href, onClick, children, className = "", ...props }) {
  const Comp = as;
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5",
        "text-[15px] font-semibold text-accent-foreground shadow-sm",
        "transition-all duration-300 ease-out",
        "hover:bg-[#8a3524] hover:shadow-md hover:-translate-y-0.5",
        "active:translate-y-0 active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "min-h-[48px] cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

// Botão secundário — outline
export function SecondaryButton({ as = "a", href, onClick, children, className = "", ...props }) {
  const Comp = as;
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-transparent px-7 py-3.5",
        "text-[15px] font-semibold text-primary",
        "transition-all duration-300 ease-out",
        "hover:border-primary/50 hover:bg-primary/5",
        "active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "min-h-[48px] cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

// Link de WhatsApp com ícone
export function WhatsAppButton({ href, children, variant = "primary", className = "" }) {
  const Btn = variant === "primary" ? PrimaryButton : SecondaryButton;
  return (
    <Btn href={href} target="_blank" rel="noopener noreferrer" className={className}>
      <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      {children}
    </Btn>
  );
}