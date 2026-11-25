export const CLINIC_INFO = {
  name: 'Pet Doctor Pituba',
  neighborhood: 'Pituba, Salvador - BA',
  whatsappNumber: '5571993661239',
  whatsappDisplay: '(71) 99366-1239',
  defaultWhatsappMessage: 'Olá! Vim pelo site e gostaria de agendar um atendimento.',
  instagramHandle: '@petdoctorpituba',
  instagramUrl: 'https://www.instagram.com/petdoctorpituba/',
  addressStreet: 'Av. Miguel Navarro y Cañizares, 115',
  addressCityZip: 'Pituba, Salvador - BA, 41815-340',
  fullAddress: 'Av. Miguel Navarro y Cañizares, 115 - Pituba, Salvador - BA, 41815-340',
  hours: '08:00–18:00',
  mapDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.+Miguel+Navarro+y+Ca%C3%B1izares%2C+115+-+Pituba%2C+Salvador+-+BA%2C+41815-340',
  mapEmbedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=-38.4595%2C-12.9975%2C-38.4470%2C-12.9893&layer=mapnik&marker=-12.9934%2C-38.4532',
} as const;

export function buildWhatsAppUrl(customMessage?: string): string {
  const text = customMessage ?? CLINIC_INFO.defaultWhatsappMessage;
  return `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const IMAGES = {
  heroVetCare: '/src/assets/images/hero_vet_care_1795631615376.jpg',
  consultaCat: '/src/assets/images/service_consulta_cat_1795631622271.jpg',
  banhoTosa: '/src/assets/images/service_banho_tosa_1795631642230.jpg',
  petshopFarmacia: '/src/assets/images/service_petshop_farmacia_1795631627514.jpg',
  diferenciaisTeam: '/src/assets/images/clinic_diferenciais_team_1795631634279.jpg',
} as const;

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  whatsappMessage: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  surface?: 'white' | 'tinted';
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'consultas',
    number: '01',
    title: 'Consultas Veterinárias',
    subtitle: 'Clínica geral e medicina preventiva',
    description:
      'Avaliação clínica detalhada e sem pressa para cães e gatos de todas as idades. Acompanhamento preventivo, check-up geriátrico e diagnóstico cuidadoso para manter seu pet saudável o ano inteiro.',
    highlights: [
      'Manejo gentil para reduzir o estresse de cães e gatos',
      'Plano preventivo personalizado conforme idade e porte',
      'Orientação clara sobre exames, alimentação e rotina',
    ],
    ctaLabel: 'Agendar consulta',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de agendar uma consulta veterinária na Pet Doctor Pituba.',
    image: IMAGES.consultaCat,
    imageAlt: 'Veterinária da Pet Doctor Pituba auscultando um gato tranquilo durante consulta humanizada',
    featured: true,
    surface: 'white',
  },
  {
    id: 'vacinacao',
    number: '02',
    title: 'Vacinação',
    subtitle: 'Imunização segura e atualizada',
    description:
      'Protocolo vacinal completo com vacinas de procedência controlada e refrigeração monitorada. Cuidamos do calendário de filhotes e reforços anuais com avaliação prévia em cada dose.',
    highlights: [
      'Vacinas múltiplas, antirrábica, gripe e giárdia',
      'Exame físico antes de cada aplicação',
      'Acompanhamento da carteira de vacinação',
    ],
    ctaLabel: 'Agendar vacinação',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de agendar a vacinação do meu pet.',
    surface: 'tinted',
  },
  {
    id: 'exames-cirurgias',
    number: '03',
    title: 'Exames e Cirurgias',
    subtitle: 'Diagnóstico preciso e centro cirúrgico',
    description:
      'Exames laboratoriais e de imagem para respostas ágeis, aliados a procedimentos cirúrgicos com avaliação pré-anestésica rigorosa, monitoramento constante e pós-operatório assistido.',
    highlights: [
      'Coleta laboratorial no local com agilidade',
      'Protocolos anestésicos seguros e monitorados',
      'Acompanhamento próximo na recuperação',
    ],
    ctaLabel: 'Agendar avaliação',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de informações sobre exames ou cirurgias para meu pet.',
    surface: 'white',
  },
  {
    id: 'banho-tosa',
    number: '04',
    title: 'Banho e Tosa',
    subtitle: 'Estética pet com bem-estar',
    description:
      'Ambiente higienizado, toalhas individuais e cosméticos dermatológicos suaves. Banho terapêutico, hidratação e tosa higiênica ou na tesoura respeitando o conforto de cada animal.',
    highlights: [
      'Produtos suaves e banhos medicamentosos sob orientação',
      'Cuidado especial para pelagens sensíveis e filhotes',
      'Horário marcado para evitar longas esperas',
    ],
    ctaLabel: 'Agendar banho e tosa',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de agendar banho e tosa para o meu pet.',
    image: IMAGES.banhoTosa,
    imageAlt: 'Cão Shih Tzu recém-saído do banho, limpo, calmo e envolto em toalha macia',
    surface: 'white',
  },
  {
    id: 'petshop-farmacia',
    number: '05',
    title: 'Pet Shop e Farmácia',
    subtitle: 'Tudo o que seu pet precisa no mesmo lugar',
    description:
      'Curadoria de rações super premium e terapêuticas, medicamentos veterinários confiáveis, antipulgas, petiscos naturais e acessórios essenciais com recomendação técnica da equipe.',
    highlights: [
      'Farmácia veterinária completa para iniciar tratamentos na hora',
      'Rações prescritas e linhas de alta qualidade nutricional',
      'Verificação rápida de disponibilidade pelo WhatsApp',
    ],
    ctaLabel: 'Consultar no WhatsApp',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de consultar produtos do Pet Shop ou Farmácia Veterinária.',
    image: IMAGES.petshopFarmacia,
    imageAlt: 'Espaço moderno de pet shop e farmácia veterinária com prateleiras organizadas de rações e medicamentos',
    surface: 'white',
  },
];

export const TRUST_SIGNALS = [
  {
    title: 'Atendimento humanizado',
    detail: 'Consultas sem pressa e manejo gentil para cães e gatos.',
  },
  {
    title: 'Equipe especializada',
    detail: 'Veterinários experientes e atualização clínica constante.',
  },
  {
    title: 'Cuidado completo',
    detail: 'Clínica, vacinas, exames, banho e farmácia em um só endereço.',
  },
  {
    title: 'Agendamento ágil',
    detail: 'Confirmação direta pelo WhatsApp, sem burocracia.',
  },
] as const;

export const DIFFERENTIALS = [
  {
    number: '01',
    title: 'Estrutura moderna e higienizada',
    description:
      'Consultórios climatizados, equipamentos atualizados e protocolos rigorosos de biossegurança para garantir tranquilidade em consultas, exames e procedimentos.',
  },
  {
    number: '02',
    title: 'Localização fácil na Pituba',
    description:
      'No coração da Pituba, com acesso prático para tutores do bairro e regiões vizinhas como Itaigara, Caminho das Árvores e Costa Azul.',
  },
  {
    number: '03',
    title: 'Cuidado individual para cada pet',
    description:
      'Sabemos que cada animal tem um temperamento. Adaptamos o ritmo do atendimento para cães mais agitados, pets idosos e gatos sensíveis.',
  },
  {
    number: '04',
    title: 'Acompanhamento próximo ao tutor',
    description:
      'Explicamos cada diagnóstico e prescrição em linguagem clara, mantendo canal aberto pelo WhatsApp para tirar dúvidas no pós-consulta.',
  },
] as const;

export interface TestimonialItem {
  id: string;
  author: string;
  petInfo: string;
  neighborhood: string;
  rating: number;
  service: string;
  quote: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'camila-mendes',
    author: 'Camila Mendes',
    petInfo: 'Tutora do Thor (Golden Retriever)',
    neighborhood: 'Pituba, Salvador',
    rating: 5,
    service: 'Consulta e Vacinação',
    quote:
      'O Thor sempre ficava muito agitado em outras clínicas, mas na Pet Doctor Pituba a equipe recebeu ele no chão, com paciência e carinho. Fizemos o check-up completo e atualizamos todas as vacinas sem nenhum estresse.',
  },
  {
    id: 'rafael-cerqueira',
    author: 'Rafael Cerqueira',
    petInfo: 'Tutor da Mia (SRD Felina)',
    neighborhood: 'Itaigara, Salvador',
    rating: 5,
    service: 'Exames e Clínica Felina',
    quote:
      'Levei a Mia preocupado porque ela parou de comer. Fui atendido no mesmo dia pelo WhatsApp, fizemos os exames ali mesmo e já saí com o tratamento da farmácia da clínica. Em dois dias ela já estava brincando de novo.',
  },
  {
    id: 'juliana-andrade',
    author: 'Juliana Andrade',
    petInfo: 'Tutora da Mel (Shih Tzu)',
    neighborhood: 'Caminho das Árvores, Salvador',
    rating: 5,
    service: 'Banho e Tosa',
    quote:
      'A Mel tem pele sensível e sempre voltava se coçando de outros pet shops. Aqui indicaram o banho dermatológico certo e ela volta cheirosa, calma e com o pelo super macio. Virou nossa clínica fixa na Pituba.',
  },
];

export const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Localização', href: '#localizacao' },
] as const;
