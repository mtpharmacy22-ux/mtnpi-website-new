import { MapPin, Mail, Phone } from "lucide-react";
import { navLinks, contact, brand } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="bg-forest-900 py-14 text-cream-100/80">
      <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/mtnpi-logo.svg"
              alt={`${brand.name} logo`}
              className="h-10 w-10"
            />
            <span className="font-display text-sm font-semibold text-cream-100">
              {brand.name}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">{brand.tagline}</p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-400/80">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-cream-100">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-400/80">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
              {contact.campus}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-gold-400" />
              <a href={`mailto:${contact.email}`} className="hover:text-cream-100">
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-gold-400" />
              {contact.phones[0]}
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-400/80">
            Affiliations
          </p>
          <p className="mt-4 text-sm leading-relaxed">
            INC / RUHS / RNC affiliated programs.
          </p>
        </div>
      </div>

      <div className="container-page mt-10 flex flex-col items-center justify-between gap-3 border-t border-cream-100/10 pt-6 text-xs text-cream-100/50 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
        <p>Jaipur, Rajasthan</p>
      </div>
    </footer>
  );
}
