// Configuração centralizada do Clínica Evo.
// Altere os dados aqui — todos os componentes consomem este arquivo.

export const business = {
  name: "Clínica Evo",
  tagline: "Fisioterapia Manual • Massoterapia • Estética Integrativa",
  shortTagline: "Fisioterapia • Massoterapia • Estética Integrativa",
  specialties: ["Fisioterapia Manual", "Massoterapia", "Estética Integrativa"],
};

export const contact = {
  // Número ainda não fornecido — placeholder configurável.
  // Formato internacional sem "+" ou espaços quando configurado.
  whatsappNumber: "", // ex: "5543999999999"
  address: {
    street: "Rua Meyer, 120",
    district: "Jardim Higienópolis",
    city: "Londrina",
    state: "PR",
    zip: "86050-160",
    country: "Brasil",
    full: "Rua Meyer, 120, Jardim Higienópolis, Londrina — PR, 86050-160, Brasil",
  },
};

export const socialLinks = {
  instagram: "", // https://instagram.com/...
  facebook: "", // https://facebook.com/...
  whatsapp: "", // link completo opcional (sobrescreve o número)
};

export const google = {
  reviewsUrl: "", // URL real do Google Business Profile (a preencher)
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Meyer+120+Jardim+Higienopolis+Londrina+PR+86050-160",
  // Avaliações reais — preencher quando disponível. Estrutura preparada.
  reviews: [],
};

// Horários de atendimento (Londrina/PR — America/Sao_Paulo, UTC-3)
export const openingHours = [
  { day: "Segunda-feira", open: "09:00", close: "19:00" },
  { day: "Terça-feira", open: "09:00", close: "19:00" },
  { day: "Quarta-feira", open: "09:00", close: "19:00" },
  { day: "Quinta-feira", open: "09:00", close: "19:00" },
  { day: "Sexta-feira", open: "09:00", close: "19:00" },
  { day: "Sábado", open: "09:00", close: "17:00" },
  { day: "Domingo", open: null, close: null },
];

export const paymentMethods = [
  "Cartão de crédito",
  "Cartão de débito",
  "Pagamento por aproximação (NFC)",
  "American Express",
  "Diners Club",
  "Mastercard",
  "Visa",
];

export const services = [
  {
    id: "fisioterapia-manual",
    name: "Fisioterapia Manual",
    description:
      "Técnicas manuais e atendimento individualizado para auxiliar no alívio de dores, melhora da mobilidade e recuperação funcional.",
    icon: "Hand",
  },
  {
    id: "massoterapia",
    name: "Massoterapia",
    description:
      "Cuidados corporais voltados ao relaxamento, alívio de tensões musculares e promoção de bem-estar.",
    icon: "Sparkles",
  },
  {
    id: "dor-tensao-muscular",
    name: "Tratamento para Dor e Tensão Muscular",
    description:
      "Uma abordagem personalizada para pessoas que convivem com desconfortos, tensão muscular e limitações no dia a dia.",
    icon: "Activity",
  },
  {
    id: "drenagem-linfatica",
    name: "Drenagem Linfática",
    description:
      "Técnica manual voltada ao cuidado corporal, circulação linfática e redução da sensação de inchaço.",
    icon: "Droplets",
  },
  {
    id: "lipedema",
    name: "Tratamento para Lipedema",
    description:
      "Atendimento individualizado para auxiliar no cuidado corporal e no bem-estar de pessoas com lipedema.",
    icon: "HeartPulse",
  },
  {
    id: "pos-operatorio",
    name: "Pós-operatório de Cirurgia Plástica",
    description:
      "Cuidados especializados para acompanhar o período de recuperação após procedimentos de cirurgia plástica.",
    icon: "ShieldPlus",
  },
  {
    id: "estetica-integrativa",
    name: "Estética Integrativa",
    description:
      "Uma abordagem que conecta cuidado corporal, bem-estar, autoestima e atenção integral ao corpo.",
    icon: "Flower2",
  },
];

export const needs = [
  { id: "dor", label: "Alívio para dores", target: "fisioterapia-manual" },
  { id: "tensao", label: "Reduzir tensão muscular", target: "massoterapia" },
  { id: "mobilidade", label: "Melhorar mobilidade", target: "fisioterapia-manual" },
  { id: "drenagem", label: "Drenagem linfática", target: "drenagem-linfatica" },
  { id: "lipedema", label: "Cuidado para lipedema", target: "lipedema" },
  { id: "pos-op", label: "Recuperação pós-operatória", target: "pos-operatorio" },
  { id: "relaxamento", label: "Relaxamento e bem-estar", target: "massoterapia" },
  { id: "estetica", label: "Estética integrativa", target: "estetica-integrativa" },
];

export const painPoints = [
  "Convivo com dores ou tensão muscular.",
  "Quero voltar a me movimentar melhor.",
  "Preciso de cuidados no meu pós-operatório.",
  "Sinto meu corpo pesado ou inchado.",
  "Quero cuidar do meu corpo com mais atenção.",
  "Procuro um atendimento mais próximo e individualizado.",
];

export const differentials = [
  {
    icon: "UserRound",
    title: "Atendimento individualizado",
    description:
      "Cada pessoa possui necessidades diferentes. O cuidado começa entendendo você.",
  },
  {
    icon: "Layers",
    title: "Abordagem integrada",
    description:
      "Fisioterapia, massoterapia e estética integrativa em uma visão ampla do corpo.",
  },
  {
    icon: "HeartHandshake",
    title: "Atendimento humanizado",
    description:
      "Um espaço acolhedor, respeitoso e pensado para que você se sinta confortável.",
  },
  {
    icon: "Target",
    title: "Foco nas suas necessidades",
    description:
      "O tratamento é direcionado de acordo com o objetivo e as necessidades identificadas durante o atendimento.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Entre em contato",
    description:
      "Fale pelo WhatsApp e conte brevemente o que está buscando.",
  },
  {
    number: "02",
    title: "Agende sua avaliação",
    description: "Escolha o melhor horário para seu atendimento.",
  },
  {
    number: "03",
    title: "Entendemos suas necessidades",
    description: "O atendimento começa com uma abordagem individualizada.",
  },
  {
    number: "04",
    title: "Definimos o melhor cuidado",
    description:
      "A partir da avaliação, são consideradas as opções de tratamento mais adequadas para sua necessidade.",
  },
];

export const valuePillars = [
  {
    icon: "Ear",
    title: "Escuta",
    description:
      "Entender suas necessidades é o primeiro passo para um cuidado realmente individualizado.",
  },
  {
    icon: "HandHeart",
    title: "Cuidado",
    description:
      "Utilizamos diferentes técnicas de acordo com a necessidade de cada atendimento.",
  },
  {
    icon: "Leaf",
    title: "Bem-estar",
    description:
      "Um cuidado que considera corpo, conforto, autoestima e qualidade de vida.",
  },
];

export const faqItems = [
  {
    question: "Preciso agendar antes de ir ao espaço?",
    answer:
      "Sim. O ideal é entrar em contato previamente pelo WhatsApp para verificar disponibilidade e escolher o melhor horário.",
  },
  {
    question: "Como saber qual tratamento é mais adequado para mim?",
    answer:
      "O atendimento começa entendendo suas necessidades e objetivos. A partir disso, é possível orientar sobre as opções de cuidado mais adequadas.",
  },
  {
    question: "Quanto tempo dura cada atendimento?",
    answer:
      "A duração pode variar de acordo com o tratamento escolhido. Confirme o tempo específico ao realizar seu agendamento.",
  },
  {
    question: "A drenagem linfática é indicada para qualquer pessoa?",
    answer:
      "A indicação depende das características e necessidades de cada pessoa. Converse com a profissional para entender se o tratamento é adequado para você.",
  },
  {
    question: "Vocês atendem pós-operatório de cirurgia plástica?",
    answer:
      "Sim. O espaço oferece atendimento direcionado ao cuidado no período pós-operatório. Entre em contato para entender como funciona o acompanhamento.",
  },
  {
    question: "Como faço para agendar?",
    answer:
      "É simples. Clique em qualquer botão de WhatsApp da página e envie uma mensagem. A equipe poderá orientar você e verificar os horários disponíveis.",
  },
];

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

// ---------- Helpers de WhatsApp ----------

const WHATSAPP_BASE = "https://wa.me/";

function buildWaLink(message) {
  const number = socialLinks.whatsapp || contact.whatsappNumber;
  if (!number) {
    // Sem número configurado: retorna link wa.me sem número com mensagem pré-preenchida
    // (o usuário preenche o número depois). Usamos um link seguro que não dispara.
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
  }
  return `${WHATSAPP_BASE}${number}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  hero: () =>
    buildWaLink("Olá! Gostaria de agendar uma avaliação no Clínica Evo."),
  service: (serviceName) =>
    buildWaLink(
      `Olá! Tenho interesse em saber mais sobre ${serviceName}. Gostaria de entender como funciona o atendimento.`
    ),
  midPage: () =>
    buildWaLink(
      "Olá! Não sei exatamente qual tratamento seria mais adequado para mim. Gostaria de conversar e receber uma orientação."
    ),
  final: () =>
    buildWaLink("Olá! Gostaria de agendar um atendimento no Clínica Evo."),
  painPoint: () =>
    buildWaLink("Olá! Gostaria de conversar sobre meu caso no Clínica Evo."),
  need: (needLabel) =>
    buildWaLink(
      `Olá! Estou buscando ajuda com ${needLabel}. Gostaria de saber mais sobre o atendimento.`
    ),
  general: () => buildWaLink("Olá! Gostaria de mais informações sobre o Clínica Evo."),
};

// Helper para saber se o WhatsApp está configurado
export const isWhatsappConfigured = () =>
  Boolean(socialLinks.whatsapp || contact.whatsappNumber);