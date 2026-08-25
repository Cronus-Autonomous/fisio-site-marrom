export const business = {
  name: "Espaço Sueli Pereira",
  tagline: "Fisioterapia Manual • Massoterapia • Estética Integrativa",
  city: "Londrina",
  state: "PR",
  address: {
    street: "Rua Meyer, 120",
    district: "Jardim Higienópolis",
    city: "Londrina",
    state: "PR",
    postalCode: "86050-160",
    country: "Brasil",
  },
  /** Altere apenas aqui para trocar o número de WhatsApp do negócio. */
  whatsapp: {
    /** Formato internacional, apenas dígitos. */
    number: "5543996169287",
    display: "+55 43 9616-9287",
  },
  social: {
    instagram: "https://www.instagram.com/fisiosuelipereira",
    /** Adicione novas redes aqui quando os links reais forem fornecidos. */
  },
  maps: {
    reviewsUrl: "https://maps.app.goo.gl/sWQe7yh7TKuY6yb39",
    directionsUrl: "https://maps.app.goo.gl/sWQe7yh7TKuY6yb39",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.7586792998436!2d-51.173633921698645!3d-23.324512924721486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb43b442274551%3A0xc4269f9ed1b06cae!2sEspa%C3%A7o%20Sueli%20Pereira%2C%20Fisioterapia%20manual%2C%20massoterapia%20e%20est%C3%A9tica%20integrativa!5e0!3m2!1spt-BR!2sbr!4v1787663372038!5m2!1spt-BR!2sbr",
  },
  /** 0 = domingo ... 6 = sábado. null = fechado. */
  hours: [
    { label: "Domingo", short: "Dom", open: null, close: null },
    { label: "Segunda-feira", short: "Seg", open: "09:00", close: "19:00" },
    { label: "Terça-feira", short: "Ter", open: "09:00", close: "19:00" },
    { label: "Quarta-feira", short: "Qua", open: "09:00", close: "19:00" },
    { label: "Quinta-feira", short: "Qui", open: "09:00", close: "19:00" },
    { label: "Sexta-feira", short: "Sex", open: "09:00", close: "19:00" },
    { label: "Sábado", short: "Sáb", open: "09:00", close: "17:00" },
  ] as const,
  paymentMethods: [
    "Cartão de crédito",
    "Cartão de débito",
    "Pagamento por aproximação (NFC)",
    "American Express",
    "Diners Club",
    "Mastercard",
    "Visa",
  ],
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${business.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  header: "Olá! Gostaria de agendar uma consulta no Espaço Sueli Pereira.",
  hero: "Olá! Gostaria de agendar uma avaliação no Espaço Sueli Pereira.",
  sobre: "Olá! Gostaria de conhecer melhor o Espaço Sueli Pereira.",
  painPoints: "Olá! Gostaria de agendar uma avaliação no Espaço Sueli Pereira.",
  final: "Olá! Gostaria de conhecer os tratamentos e agendar uma avaliação.",
  service: (servico: string) =>
    `Olá! Tenho interesse em saber mais sobre o tratamento de ${servico}.`,
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "activity" | "hand" | "flower" | "droplets" | "heart-pulse" | "bandage" | "sparkles";
};

export const services: Service[] = [
  {
    id: "dor-tensao",
    title: "Tratamento para dor e tensão muscular",
    description:
      "Atendimento personalizado para aliviar desconfortos, reduzir tensões e melhorar sua mobilidade.",
    icon: "activity",
  },
  {
    id: "fisioterapia-manual",
    title: "Fisioterapia Manual",
    description:
      "Técnicas especializadas para melhorar movimentos, reduzir dores e promover recuperação funcional.",
    icon: "hand",
  },
  {
    id: "massoterapia",
    title: "Massoterapia",
    description:
      "Cuidados corporais para aliviar tensões, promover relaxamento e melhorar a sensação de bem-estar.",
    icon: "flower",
  },
  {
    id: "drenagem-linfatica",
    title: "Drenagem Linfática",
    description:
      "Técnica manual voltada à melhora da circulação linfática, redução de inchaço e sensação de leveza.",
    icon: "droplets",
  },
  {
    id: "lipedema",
    title: "Tratamento para Lipedema",
    description:
      "Abordagem individualizada para auxiliar no cuidado corporal e na qualidade de vida.",
    icon: "heart-pulse",
  },
  {
    id: "pos-operatorio",
    title: "Pós-operatório de Cirurgia Plástica",
    description:
      "Cuidados especializados para auxiliar na recuperação e no acompanhamento do período pós-operatório.",
    icon: "bandage",
  },
  {
    id: "estetica-integrativa",
    title: "Estética Integrativa",
    description:
      "Tratamentos que unem cuidado corporal, bem-estar, autoestima e uma visão integrada do corpo.",
    icon: "sparkles",
  },
];

export type GoogleReview = {
  author: string;
  rating: number;
  comment: string;
  date?: string;
  avatarUrl?: string;
};

/**
 * Avaliações reais do Google Meu Negócio.
 * Mantido vazio de propósito: nenhuma avaliação deve ser inventada.
 * Basta popular este array (ou conectar a API do Google) para exibi-las.
 */
export const googleReviews: GoogleReview[] = [];
