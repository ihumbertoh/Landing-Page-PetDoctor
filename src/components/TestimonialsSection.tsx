import { Star } from 'lucide-react';
import { TESTIMONIALS, buildWhatsAppUrl } from '../data/clinic';
import { FadeIn } from './FadeIn';
import { WhatsAppIcon } from './WhatsAppIcon';

export function TestimonialsSection() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <section id="depoimentos" className="scroll-mt-20 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-clinic-700">Depoimentos</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              O que dizem os tutores da Pituba e região.
            </h2>
          </div>

          <div className="flex flex-col items-start gap-1 md:items-end">
            <div
              className="flex items-center gap-1 text-amber-cta"
              aria-label="Avaliação média de 5,0 de 5 estrelas"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="h-4 w-4 fill-current"
                  aria-hidden="true"
                />
              ))}
              <span className="ml-1.5 text-sm font-semibold text-ink-900 tabular-nums">
                5,0 / 5,0
              </span>
            </div>
            <p className="text-xs text-ink-500">
              Avaliações reais de tutores atendidos na clínica
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.08} className="h-full">
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-ink-200 bg-white p-6 sm:p-7">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className="flex items-center gap-0.5 text-amber-cta"
                      aria-label={`Avaliação ${item.rating} de 5 estrelas`}
                    >
                      {Array.from({ length: item.rating }).map((_, idx) => (
                        <Star
                          key={idx}
                          className="h-4 w-4 fill-current"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-ink-500">
                      {item.service}
                    </span>
                  </div>

                  <blockquote className="mt-5 text-sm leading-relaxed text-ink-700 sm:text-[15px]">
                    “{item.quote}”
                  </blockquote>
                </div>

                <figcaption className="mt-6 border-t border-ink-100 pt-4">
                  <p className="font-display text-base font-semibold text-ink-900">
                    {item.author}
                  </p>
                  <p className="mt-0.5 text-xs text-ink-500">
                    <span>{item.petInfo}</span>
                    <span aria-hidden="true" className="mx-1.5">
                      ·
                    </span>
                    <span>{item.neighborhood}</span>
                  </p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>

        {/* Clean conversion callout band */}
        <FadeIn delay={0.08}>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-clinic-900 px-6 py-8 text-white sm:px-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                Seu pet merece esse mesmo cuidado de perto.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-clinic-100 sm:text-base">
                Chame nossa equipe no WhatsApp agora para consultar horários disponíveis
                ou tirar dúvidas sobre consultas, vacinas e banho e tosa.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2.5 rounded-lg bg-amber-cta px-6 py-3 text-sm font-semibold text-clinic-950 transition-colors duration-150 hover:bg-amber-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap shrink-0"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span>Agendar pelo WhatsApp</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
