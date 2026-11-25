import { DIFFERENTIALS, IMAGES, buildWhatsAppUrl } from '../data/clinic';
import { FadeIn } from './FadeIn';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

export function DifferentialsSection() {
  const whatsappUrl = buildWhatsAppUrl(
    'Olá! Vim pelo site e gostaria de conhecer a Pet Doctor Pituba e agendar um atendimento.'
  );

  return (
    <section
      id="diferenciais"
      className="scroll-mt-20 border-y border-ink-200/80 bg-clinic-50/55 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          <FadeIn className="lg:col-span-5">
            <div className="h-full overflow-hidden rounded-2xl border border-ink-200 bg-white">
              <ResilientImage
                src={IMAGES.diferenciaisTeam}
                alt="Veterinária recebendo tutora sorridente com seu cão na recepção moderna da Pet Doctor Pituba"
                fallbackLabel="Recepção acolhedora da Pet Doctor Pituba"
                className="h-full min-h-[320px] w-full object-cover object-center lg:min-h-[540px]"
              />
            </div>
          </FadeIn>

          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <FadeIn delay={0.05}>
                <p className="text-sm font-medium text-clinic-700">
                  Por que escolher a Pet Doctor Pituba
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                  Clínica de confiança no coração da Pituba, feita para tutores exigentes.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-700">
                  Combinamos rigor técnico veterinário com um ambiente leve e acolhedor,
                  para que cada visita seja tranquila tanto para o seu pet quanto para
                  você.
                </p>
              </FadeIn>

              <ol className="mt-8 divide-y divide-ink-200/90 border-y border-ink-200/90">
                {DIFFERENTIALS.map((item, index) => (
                  <li key={item.number}>
                    <FadeIn
                      delay={0.06 * index}
                      distance={14}
                      className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-12 sm:gap-6"
                    >
                      <div className="flex items-baseline gap-3 sm:col-span-5">
                        <span className="font-display text-sm font-bold text-clinic-700 tabular-nums">
                          {item.number}.
                        </span>
                        <h3 className="font-display text-lg font-semibold text-ink-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-ink-700 sm:col-span-7">
                        {item.description}
                      </p>
                    </FadeIn>
                  </li>
                ))}
              </ol>
            </div>

            <FadeIn
              delay={0.12}
              distance={14}
              className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="text-sm text-ink-700">
                Quer saber se temos horário hoje para seu cão ou gato?
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-amber-cta px-6 py-3 text-sm font-semibold text-clinic-950 transition-colors duration-150 hover:bg-amber-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinic-900 whitespace-nowrap shrink-0"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                <span>Falar com a equipe</span>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
