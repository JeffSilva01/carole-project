// Site-wide data
export const site = {
  name: "Caroli Soluções em Saúde",
  shortName: "Caroli",
  description:
    "Consultoria especializada em planos de saúde. Encontramos a melhor proteção para você, sua família e sua empresa com atendimento humanizado e consultivo.",
  url: "https://carolisolucoes.com.br",
  phone: "+55 (85) 99732-2960",
  phoneRaw: "5585997322960",
  whatsapp: "5585997322960",
  email: "contato@carolisolucoes.com.br",
  address:
    "Av. Treze de Maio, 1422 - Lj 17 - Fátima, Fortaleza - CE, 60040-531, Brasil",
  hours: "Seg a Sex, 8h às 17h",
  social: {
    instagram: "https://instagram.com/carolisolucoesemsaude",
    facebook: "https://facebook.com/carolisolucoes",
    linkedin: "https://linkedin.com/company/carolisolucoes",
  },
};

export const whatsappLink = (
  message = "Olá! Gostaria de solicitar uma cotação de plano de saúde.",
) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const nav = [
  { label: "Início", href: "/" },
  { label: "Operadoras", href: "/#operators" },
  { label: "Contato", href: "/#contact" },
];

export const benefits = [
  {
    icon: "user-check",
    title: "Atendimento Personalizado",
    description:
      "Cada família é única. Analisamos seu perfil para indicar o plano que realmente faz sentido para você.",
  },
  {
    icon: "scale",
    title: "Comparação entre Operadoras",
    description:
      "Comparamos coberturas, redes e valores das principais operadoras para você decidir com clareza.",
  },
  {
    icon: "clock",
    title: "Economia de Tempo",
    description:
      "Cuidamos de toda a pesquisa e burocracia. Você recebe as melhores opções sem esforço.",
  },
  {
    icon: "heart-handshake",
    title: "Atendimento Humanizado",
    description:
      "Falamos a sua língua, sem termos complicados. Um relacionamento de confiança de verdade.",
  },
  {
    icon: "shield-check",
    title: "Suporte Antes e Depois",
    description:
      "Acompanhamos você na contratação e continuamos por perto sempre que precisar do plano.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Você entra em contato",
    description:
      "Fale conosco pelo WhatsApp ou formulário. Sem compromisso, no seu tempo.",
  },
  {
    number: "02",
    title: "Nós entendemos sua necessidade",
    description:
      "Conversamos sobre sua rotina, orçamento e prioridades de cobertura.",
  },
  {
    number: "03",
    title: "Encontramos o plano ideal",
    description:
      "Apresentamos as melhores opções e cuidamos de toda a contratação para você.",
  },
];

export type Operator = {
  name: string;
  logoUrl?: string;
};

export const operators: Operator[] = [
  {
    name: "Amil",
    logoUrl: "/images/amil-logo.webp",
  },
  {
    name: "Bradesco Saúde",
    logoUrl: "/images/bradesco-logo.webp",
  },
  {
    name: "SulAmérica",
    logoUrl: "/images/sulamerica-logo.webp",
  },
  {
    name: "Unimed",
    logoUrl: "/images/unimed_guarulhos-logo.webp",
  },
  {
    name: "Hapvida",
    logoUrl: "/images/hapvida-logo.webp",
  },
];

export const testimonials = [
  {
    name: "Fernanda Souza",
    role: "Cliente — Plano Familiar",
    quote:
      "A Caroli entendeu exatamente o que minha família precisava. Economizamos e ganhamos uma cobertura muito melhor.",
  },
  {
    name: "Ricardo Almeida",
    role: "Empresário — Plano Empresarial",
    quote:
      "Atendimento impecável do começo ao fim. Contratei o plano dos meus funcionários com total tranquilidade.",
  },
  {
    name: "Juliana Martins",
    role: "Cliente — Plano Individual",
    quote:
      "Me senti acolhida em cada etapa. Explicaram tudo com paciência e sem enrolação. Recomendo de olhos fechados.",
  },
  {
    name: "Marcos Pereira",
    role: "Cliente — Plano por Adesão",
    quote:
      "Consegui um plano excelente pelo meu conselho de classe, algo que eu nem sabia que existia.",
  },
];

export const faqs = [
  {
    question: "Como funciona a carência?",
    answer:
      "Carência é o período que você aguarda após a contratação para usar certos serviços. Varia conforme o procedimento — urgências costumam ter 24h, enquanto partos podem chegar a 300 dias. Ajudamos a reduzir ou aproveitar portabilidade de carências.",
    category: "waiting-period",
  },
  {
    question: "Vale a pena contratar por corretora?",
    answer:
      "Sim. O valor do plano é o mesmo, mas você ganha consultoria especializada, comparação entre operadoras e suporte contínuo — tudo sem custo adicional.",
    category: "enrollment",
  },
  {
    question: "Posso trocar de plano?",
    answer:
      "Pode. Existe a portabilidade de carências, que permite mudar de operadora aproveitando o tempo já cumprido, desde que cumpridos alguns requisitos. Nós orientamos todo o processo.",
    category: "plan-switching",
  },
  {
    question: "O plano cobre parto?",
    answer:
      "Planos com segmentação hospitalar com obstetrícia cobrem parto. Normalmente há carência de até 300 dias. Indicamos o plano certo se essa cobertura for prioridade para você.",
    category: "coverage",
  },
  {
    question: "Existe reajuste?",
    answer:
      "Sim, há reajuste anual (por variação de custos) e, em alguns casos, por mudança de faixa etária. Explicamos as regras de cada operadora antes da contratação.",
    category: "price-adjustments",
  },
  {
    question: "Como funciona a coparticipação?",
    answer:
      "Na coparticipação você paga uma mensalidade menor e um valor por uso (consultas, exames). É ideal para quem usa o plano com menos frequência. Avaliamos se compensa no seu caso.",
    category: "cost-sharing",
  },
];
