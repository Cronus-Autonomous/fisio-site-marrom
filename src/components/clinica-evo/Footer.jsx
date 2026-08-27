import React from "react";
import { Instagram, Facebook, MessageCircle, MapPin, Clock } from "lucide-react";
import { business, contact, navLinks, socialLinks, openingHours, whatsappMessages } from "@/config/business";
import { scrollToId } from "./Reveal";

export default function Footer() {
  const { address } = contact;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-heading text-xl font-semibold">{business.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
              {business.tagline}
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-primary-foreground/10"
                >
                  <Instagram className="h-5 w-5" strokeWidth={1.5} />
                </a>
              )}
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-primary-foreground/10"
                >
                  <Facebook className="h-5 w-5" strokeWidth={1.5} />
                </a>
              )}
              <a
                href={whatsappMessages.general()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-primary-foreground/10"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground/60">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(link.href);
                    }}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground/60">
              Contato
            </h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-complementary" strokeWidth={1.5} aria-hidden="true" />
                <span>
                  {address.street}, {address.district}
                  <br />
                  {address.city} — {address.state}, {address.zip}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-complementary" strokeWidth={1.5} aria-hidden="true" />
                <span>
                  Seg–Sex: 09:00 — 19:00
                  <br />
                  Sábado: 09:00 — 17:00
                </span>
              </li>
            </ul>
          </div>

          {/* Localização resumo */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground/60">
              Localização
            </h3>
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              {address.street}
              <br />
              {address.district}
              <br />
              {address.city} — {address.state}
              <br />
              {address.zip}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 sm:flex-row">
          <p className="text-xs text-primary-foreground/60">
            © {year} {business.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground">
              Política de Privacidade
            </a>
            <a href="#" className="text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}