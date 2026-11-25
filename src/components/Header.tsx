import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CLINIC_INFO, NAV_LINKS, buildWhatsAppUrl } from '../data/clinic';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-5 sm:px-8">
        {/* Zone 1: Single clean wordmark */}
        <a
          href="#inicio"
          className="font-display text-lg font-bold tracking-tight text-clinic-900 transition-colors duration-150 hover:text-clinic-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clinic-700 whitespace-nowrap shrink-0"
        >
          {CLINIC_INFO.name}
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 underline-offset-4 transition-colors duration-150 hover:text-clinic-900 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clinic-700 whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action (desktop) + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[40px] items-center gap-2 rounded-lg bg-amber-cta px-4 py-2 text-sm font-semibold text-clinic-950 transition-colors duration-150 hover:bg-amber-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinic-900 whitespace-nowrap shrink-0 md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span>Agendar no WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-ink-200 text-ink-900 transition-colors duration-150 hover:bg-clinic-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinic-700 md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Menu móvel"
          className="border-t border-ink-200 bg-white px-5 pb-6 pt-4 md:hidden"
        >
          <div className="flex flex-col divide-y divide-ink-100">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center text-base font-medium text-ink-900 transition-colors duration-150 hover:text-clinic-700"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-amber-cta px-5 py-3 text-sm font-semibold text-clinic-950 transition-colors duration-150 hover:bg-amber-cta-hover whitespace-nowrap"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span>Agendar no WhatsApp</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
