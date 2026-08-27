import React, { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { business, navLinks, whatsappMessages } from "@/config/business";
import { useActiveSection, scrollToId } from "./Reveal";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ids = ["inicio", "sobre", "servicos", "diferenciais", "depoimentos", "contato"];
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => scrollToId(href), 50);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(89,48,45,0.08)] py-2"
          : "bg-transparent py-4"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Navegação principal">
        <img
              src={logo}
              alt="Interior da Clínica Evo — ambiente acolhedor e minimalista"
              className="w-20 object-cover"
              loading="lazy"
              width={40}
              height={40}
            />

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="nav-underline text-sm font-medium text-primary/80 transition-colors hover:text-primary"
                  data-active={active === id}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href={whatsappMessages.hero()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-all duration-300 hover:bg-[#8a3524] hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] lg:inline-flex min-h-[44px]"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          Agendar consulta
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-primary transition-colors hover:bg-primary/5 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-out lg:hidden",
          open ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mx-4 mt-3 rounded-3xl border border-border/60 bg-card/95 p-6 shadow-lg backdrop-blur-md">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-primary/85 transition-colors hover:bg-secondary/40 hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappMessages.hero()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-sm transition-all hover:bg-[#8a3524] min-h-[48px]"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            Agendar consulta
          </a>
        </div>
      </div>
    </header>
  );
}