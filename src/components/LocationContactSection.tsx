import { useState, type FormEvent } from 'react';
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Instagram,
  MapPin,
  Phone,
} from 'lucide-react';
import { CLINIC_INFO, SERVICES, buildWhatsAppUrl } from '../data/clinic';
import { FadeIn } from './FadeIn';
import { WhatsAppIcon } from './WhatsAppIcon';

type PetSpecies = 'Cão' | 'Gato' | 'Outro';

interface FormState {
  ownerName: string;
  phone: string;
  petName: string;
  species: PetSpecies;
  service: string;
  notes: string;
}

interface FormErrors {
  ownerName?: string;
  phone?: string;
}

function formatBrazilPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const INITIAL_FORM: FormState = {
  ownerName: '',
  phone: '',
  petName: '',
  species: 'Cão',
  service: SERVICES[0].title,
  notes: '',
};

export function LocationContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    if (form.ownerName.trim().length < 2) {
      nextErrors.ownerName = 'Informe seu nome para iniciarmos o atendimento.';
    }
    const phoneDigits = form.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      nextErrors.phone = 'Informe um número de WhatsApp válido com DDD.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});

    const petLabel = form.petName.trim()
      ? `${form.petName.trim()} (${form.species})`
      : form.species;

    const lines = [
      'Olá! Vim pelo site da Pet Doctor Pituba e gostaria de agendar um atendimento.',
      `• Tutor(a): ${form.ownerName.trim()}`,
      `• WhatsApp: ${form.phone.trim()}`,
      `• Pet: ${petLabel}`,
      `• Serviço: ${form.service}`,
    ];

    if (form.notes.trim()) {
      lines.push(`• Observações: ${form.notes.trim()}`);
    }

    setSubmittedMessage(lines.join('\n'));
  };

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmittedMessage(null);
  };

  return (
    <section
      id="localizacao"
      className="scroll-mt-20 border-t border-ink-200/80 bg-clinic-50/45 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-medium text-clinic-700">
            Localização e contato
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Venha nos visitar na Pituba ou agende agora mesmo.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-700">
            Estamos prontos para receber você e seu pet com facilidade de acesso na
            Pituba, Salvador.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left column: Address, hours, Instagram, and Map Space */}
          <FadeIn className="flex flex-col justify-between gap-6 lg:col-span-6">
            <div className="rounded-2xl border border-ink-200 bg-white p-6 sm:p-8">
              <dl className="divide-y divide-ink-100">
                <div className="flex items-start gap-3.5 pb-5">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-clinic-700"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-semibold text-ink-500">
                      Endereço
                    </dt>
                    <dd className="mt-1 text-base font-medium text-ink-900">
                      {CLINIC_INFO.addressStreet}
                    </dd>
                    <dd className="mt-0.5 text-sm text-ink-500">
                      {CLINIC_INFO.addressCityZip}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 py-5">
                  <Clock
                    className="mt-0.5 h-5 w-5 shrink-0 text-clinic-700"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-semibold text-ink-500">
                      Horário de funcionamento
                    </dt>
                    <dd className="mt-1 text-base font-medium text-ink-900 tabular-nums">
                      {CLINIC_INFO.hours}
                    </dd>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 pt-5 sm:grid-cols-2">
                  <div className="flex items-start gap-3.5">
                    <Phone
                      className="mt-0.5 h-5 w-5 shrink-0 text-clinic-700"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-xs font-semibold text-ink-500">
                        WhatsApp
                      </dt>
                      <dd className="mt-1">
                        <a
                          href={buildWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-semibold text-clinic-800 underline-offset-4 transition-colors duration-150 hover:text-clinic-950 hover:underline tabular-nums"
                        >
                          {CLINIC_INFO.whatsappDisplay}
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Instagram
                      className="mt-0.5 h-5 w-5 shrink-0 text-clinic-700"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-xs font-semibold text-ink-500">
                        Instagram
                      </dt>
                      <dd className="mt-1">
                        <a
                          href={CLINIC_INFO.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-base font-semibold text-clinic-800 underline-offset-4 transition-colors duration-150 hover:text-clinic-950 hover:underline"
                        >
                          <span>{CLINIC_INFO.instagramHandle}</span>
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      </dd>
                    </div>
                  </div>
                </div>
              </dl>
            </div>

            {/* Map embed space centered on Pituba, Salvador - BA */}
            <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white">
              <div className="relative min-h-[240px] flex-1 bg-clinic-50">
                <iframe
                  title="Mapa da Pet Doctor Pituba — Av. Miguel Navarro y Cañizares, 115, Pituba, Salvador - BA"
                  src={CLINIC_INFO.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full min-h-[240px] w-full border-0"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink-100 px-5 py-3.5 text-sm">
                <span className="font-medium text-ink-700">
                  {CLINIC_INFO.addressStreet} · Pituba
                </span>
                <a
                  href={CLINIC_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-clinic-800 underline-offset-4 hover:text-clinic-950 hover:underline whitespace-nowrap"
                >
                  <span>Como chegar no Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right column: Quick booking / contact form */}
          <FadeIn delay={0.1} className="lg:col-span-6">
            <div className="h-full rounded-2xl border border-ink-200 bg-white p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold tracking-tight text-ink-900">
                Agendamento rápido
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                Preencha os dados do seu pet abaixo para gerar sua solicitação pronta
                e concluir o agendamento direto no WhatsApp.
              </p>

              {submittedMessage ? (
                <div
                  role="status"
                  className="mt-6 rounded-xl border border-clinic-100 bg-clinic-50 p-6"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-clinic-700"
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="font-display text-lg font-bold text-ink-900">
                        Mensagem pronta para o WhatsApp
                      </h4>
                      <p className="mt-1 text-sm text-ink-700">
                        Clique no botão abaixo para enviar seu pedido de agendamento
                        diretamente para a equipe da Pet Doctor Pituba.
                      </p>
                    </div>
                  </div>

                  <pre className="mt-4 whitespace-pre-wrap rounded-lg border border-ink-200 bg-white p-4 font-sans text-sm leading-relaxed text-ink-700">
                    {submittedMessage}
                  </pre>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={buildWhatsAppUrl(submittedMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-lg bg-amber-cta px-5 py-3 text-sm font-semibold text-clinic-950 transition-colors duration-150 hover:bg-amber-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinic-900 whitespace-nowrap"
                    >
                      <WhatsAppIcon className="h-4 w-4 shrink-0" />
                      <span>Enviar agora no WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-ink-200 bg-white px-4 py-3 text-sm font-semibold text-ink-700 transition-colors duration-150 hover:bg-clinic-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinic-700 whitespace-nowrap"
                    >
                      Editar dados
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-6 space-y-5"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="owner-name"
                        className="block text-sm font-medium text-ink-900"
                      >
                        Seu nome <span className="text-clinic-700">*</span>
                      </label>
                      <input
                        id="owner-name"
                        name="ownerName"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Ex.: Mariana Souza"
                        value={form.ownerName}
                        onChange={(e) => {
                          setForm((prev) => ({
                            ...prev,
                            ownerName: e.target.value,
                          }));
                          if (errors.ownerName) {
                            setErrors((prev) => ({
                              ...prev,
                              ownerName: undefined,
                            }));
                          }
                        }}
                        aria-invalid={Boolean(errors.ownerName)}
                        aria-describedby={
                          errors.ownerName ? 'owner-name-error' : undefined
                        }
                        className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-500/70 focus:border-clinic-700 focus:outline-none focus:ring-2 focus:ring-clinic-700/20"
                      />
                      {errors.ownerName && (
                        <p
                          id="owner-name-error"
                          role="alert"
                          className="mt-1.5 text-xs font-medium text-red-700"
                        >
                          {errors.ownerName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="owner-phone"
                        className="block text-sm font-medium text-ink-900"
                      >
                        WhatsApp / Telefone <span className="text-clinic-700">*</span>
                      </label>
                      <input
                        id="owner-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="(71) 99999-9999"
                        value={form.phone}
                        onChange={(e) => {
                          setForm((prev) => ({
                            ...prev,
                            phone: formatBrazilPhone(e.target.value),
                          }));
                          if (errors.phone) {
                            setErrors((prev) => ({ ...prev, phone: undefined }));
                          }
                        }}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={
                          errors.phone ? 'owner-phone-error' : undefined
                        }
                        className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-500/70 tabular-nums focus:border-clinic-700 focus:outline-none focus:ring-2 focus:ring-clinic-700/20"
                      />
                      {errors.phone && (
                        <p
                          id="owner-phone-error"
                          role="alert"
                          className="mt-1.5 text-xs font-medium text-red-700"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="pet-name"
                        className="block text-sm font-medium text-ink-900"
                      >
                        Nome do pet
                      </label>
                      <input
                        id="pet-name"
                        name="petName"
                        type="text"
                        placeholder="Ex.: Thor, Mia..."
                        value={form.petName}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            petName: e.target.value,
                          }))
                        }
                        className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-500/70 focus:border-clinic-700 focus:outline-none focus:ring-2 focus:ring-clinic-700/20"
                      />
                    </div>

                    <div>
                      <span className="block text-sm font-medium text-ink-900">
                        Espécie
                      </span>
                      <div
                        role="group"
                        aria-label="Espécie do pet"
                        className="mt-1.5 grid grid-cols-3 gap-1 rounded-lg bg-clinic-50 p-1"
                      >
                        {(['Cão', 'Gato', 'Outro'] as const).map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() =>
                              setForm((prev) => ({ ...prev, species: option }))
                            }
                            aria-pressed={form.species === option}
                            className={`min-h-[36px] rounded-md px-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap ${
                              form.species === option
                                ? 'bg-white text-clinic-900 shadow-xs'
                                : 'text-ink-700 hover:text-clinic-900'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service-select"
                      className="block text-sm font-medium text-ink-900"
                    >
                      Serviço desejado
                    </label>
                    <select
                      id="service-select"
                      name="service"
                      value={form.service}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, service: e.target.value }))
                      }
                      className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 focus:border-clinic-700 focus:outline-none focus:ring-2 focus:ring-clinic-700/20"
                    >
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="Outro assunto">Outro assunto</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-sm font-medium text-ink-900"
                    >
                      Preferência de dia/horário ou observação
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      placeholder="Ex.: Gostaria de horário pela manhã ou tirar dúvida sobre vacina..."
                      value={form.notes}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, notes: e.target.value }))
                      }
                      className="mt-1.5 block w-full resize-none rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-500/70 focus:border-clinic-700 focus:outline-none focus:ring-2 focus:ring-clinic-700/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-amber-cta px-6 py-3 text-sm font-semibold text-clinic-950 transition-colors duration-150 hover:bg-amber-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinic-900 whitespace-nowrap"
                  >
                    <WhatsAppIcon className="h-4 w-4 shrink-0" />
                    <span>Continuar agendamento no WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
