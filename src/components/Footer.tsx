import { Instagram } from 'lucide-react';
import { CLINIC_INFO, NAV_LINKS, buildWhatsAppUrl } from '../data/clinic';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a
              href="#inicio"
              className="font-display text-lg font-bold tracking-tight text-clinic-900"
            >
              {CLINIC_INFO.name}
            </a>
            <p className="mt-1 text-sm text-ink-500">
              Clínica Veterinária, Banho e Tosa e Pet Shop · {CLINIC_INFO.neighborhood}
            </p>
          </div>

          <nav
            aria-label="Navegação do rodapé"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-ink-700"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-150 hover:text-clinic-900 hover:underline underline-offset-4 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-sm font-medium">
            <a
              href={CLINIC_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-700 transition-colors duration-150 hover:text-clinic-900 whitespace-nowrap"
            >
              <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{CLINIC_INFO.instagramHandle}</span>
            </a>
            <span aria-hidden="true" className="text-ink-200">
              /
            </span>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-clinic-800 transition-colors duration-150 hover:text-clinic-950 tabular-nums whitespace-nowrap"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span>{CLINIC_INFO.whatsappDisplay}</span>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-ink-100 pt-6 text-xs text-ink-500 sm:flex sm:items-center sm:justify-between">
          <p>
            © {currentYear} {CLINIC_INFO.name}. Todos os direitos reservados.
          </p>
          <p className="mt-2 sm:mt-0 tabular-nums">
            {CLINIC_INFO.fullAddress} · {CLINIC_INFO.hours}
          </p>
        </div>
      </div>
    </footer>
  );
}
