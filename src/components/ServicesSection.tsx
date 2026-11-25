import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES, buildWhatsAppUrl, type ServiceItem } from '../data/clinic';
import { FadeIn } from './FadeIn';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

function ServiceCard({
  service,
  delay,
}: {
  service: ServiceItem;
  delay: number;
}) {
  const whatsappUrl = buildWhatsAppUrl(service.whatsappMessage);

  if (service.featured && service.image) {
    return (
      <FadeIn delay={delay} className="lg:col-span-2">
        <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white lg:flex-row">
        <div className="lg:w-[48%] lg:shrink-0">
          <ResilientImage
            src={service.image}
            alt={service.imageAlt || service.title}
            fallbackLabel={service.title}
            className="h-64 w-full object-cover object-center lg:h-full"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
          <div>
            <p className="text-xs font-medium text-clinic-700 tabular-nums">
              {service.number}. {service.subtitle}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink-900">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-700 sm:text-base">
              {service.description}
            </p>

            <ul className="mt-5 space-y-2.5 border-t border-ink-100 pt-5">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-ink-700"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-clinic-700"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-amber-cta px-5 py-2.5 text-sm font-semibold text-clinic-950 transition-colors duration-150 hover:bg-amber-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinic-900 whitespace-nowrap"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span>{service.ctaLabel}</span>
            </a>
          </div>
        </div>
      </article>
      </FadeIn>
    );
  }

  const isTinted = service.surface === 'tinted';

  return (
    <FadeIn delay={delay} className="h-full">
      <article
        className={`flex h-full flex-col overflow-hidden rounded-2xl border ${
          isTinted
            ? 'border-clinic-100 bg-clinic-50/90'
            : 'border-ink-200 bg-white'
        }`}
      >
      {service.image && (
        <div className="aspect-[4/3] w-full overflow-hidden border-b border-ink-100 bg-clinic-50">
          <ResilientImage
            src={service.image}
            alt={service.imageAlt || service.title}
            fallbackLabel={service.title}
            className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <p className="text-xs font-medium text-clinic-700 tabular-nums">
            {service.number}. {service.subtitle}
          </p>
          <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-ink-900">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-700">
            {service.description}
          </p>

          <ul className="mt-5 space-y-2 border-t border-ink-200/70 pt-4">
            {service.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-ink-700"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-clinic-700"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] w-full items-center justify-between gap-2 rounded-lg border border-clinic-800/15 bg-clinic-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-clinic-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinic-900 whitespace-nowrap"
          >
            <span className="inline-flex items-center gap-2">
              <WhatsAppIcon className="h-4 w-4 shrink-0 text-amber-cta" />
              <span>{service.ctaLabel}</span>
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

export function ServicesSection() {
  return (
    <section id="servicos" className="scroll-mt-20 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-clinic-700">Nossos serviços</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Saúde, bem-estar e praticidade para cada fase do seu pet.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink-500 sm:text-base">
            Escolha o atendimento ideal abaixo e agende em segundos direto pelo
            WhatsApp com nossa equipe na Pituba.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={(index % 3) * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
