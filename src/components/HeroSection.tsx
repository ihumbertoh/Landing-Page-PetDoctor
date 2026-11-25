import { ArrowDownRight, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO, IMAGES, TRUST_SIGNALS, buildWhatsAppUrl } from '../data/clinic';
import { FadeIn } from './FadeIn';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

export function HeroSection() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <section
      id="inicio"
      className="bg-gradient-to-b from-clinic-50/70 via-white to-white pt-24 pb-16 sm:pt-28 lg:pt-32 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <FadeIn
            immediate
            distance={14}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <p className="text-sm font-medium text-clinic-700">
              <span>{CLINIC_INFO.neighborhood}</span>
              <span aria-hidden="true" className="mx-2 text-ink-200">
                /
              </span>
              <span>Clínica Veterinária e Pet Shop</span>
            </p>

            <h1 className="mt-4 font-display text-[clamp(2.25rem,4.1vw,3.55rem)] font-bold leading-[1.08] tracking-tight text-ink-900">
              Cuidado veterinário completo com carinho e segurança na Pituba.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700 sm:text-lg">
              Da consulta preventiva ao banho relaxante, cuidamos do seu cão ou gato
              com atenção individual, estrutura moderna e uma equipe apaixonada por
              saúde animal.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-amber-cta px-6 py-3 text-base font-semibold text-clinic-950 transition-colors duration-150 hover:bg-amber-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinic-900 whitespace-nowrap shrink-0"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span>Agendar no WhatsApp</span>
              </a>

              <a
                href="#servicos"
                className="inline-flex min-h-[44px] items-center justify-center gap-1.5 px-2 py-2 text-sm font-semibold text-clinic-800 underline-offset-4 transition-colors duration-150 hover:text-clinic-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clinic-700 whitespace-nowrap shrink-0"
              >
                <span>Conhecer serviços</span>
                <ArrowDownRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </FadeIn>

          <FadeIn immediate delay={0.1} distance={16} className="lg:col-span-6">
            <div className="h-full overflow-hidden rounded-2xl border border-ink-200 bg-clinic-50">
              <ResilientImage
                src={IMAGES.heroVetCare}
                alt="Veterinária da Pet Doctor Pituba examinando com carinho um cão Golden Retriever feliz em consultório claro e moderno"
                fallbackLabel="Atendimento veterinário acolhedor na Pituba"
                loading="eager"
                className="h-full min-h-[300px] w-full object-cover object-center sm:min-h-[380px] lg:min-h-[460px]"
              />
            </div>
          </FadeIn>
        </div>

        {/* Full-width trust strip below the hero split */}
        <div
          aria-label="Selos de confiança da Pet Doctor Pituba"
          className="mt-12 grid grid-cols-1 gap-6 border-t border-ink-200 pt-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8"
        >
          {TRUST_SIGNALS.map((signal, index) => (
            <FadeIn
              key={signal.title}
              delay={index * 0.06}
              distance={14}
              className="flex items-start gap-3"
            >
              <ShieldCheck
                className="mt-0.5 h-5 w-5 shrink-0 text-clinic-700"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-sans text-sm font-semibold text-ink-900">
                  {signal.title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">
                  {signal.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
