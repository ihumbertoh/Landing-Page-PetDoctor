import { buildWhatsAppUrl } from '../data/clinic';
import { WhatsAppIcon } from './WhatsAppIcon';

export function FloatingWhatsApp() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar atendimento pelo WhatsApp da Pet Doctor Pituba"
      className="fixed right-4 bottom-4 z-50 inline-flex h-12 items-center gap-2 rounded-full bg-clinic-900 px-4 text-sm font-semibold text-white shadow-lg transition-transform duration-150 hover:-translate-y-0.5 hover:bg-clinic-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinic-900 sm:right-6 sm:bottom-6 sm:h-13 sm:px-5 whitespace-nowrap"
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0 text-amber-cta" />
      <span className="hidden sm:inline">Agendar no WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}
