// Dados centrais do site — usados em toda a aplicação
export const site = {
  name: "Caroli Soluções em Saúde",
  shortName: "Caroli",
  description:
    "Consultoria especializada em planos de saúde. Encontramos a melhor proteção para você, sua família e sua empresa com atendimento humanizado e consultivo.",
  url: "https://carolisolucoes.com.br",
  phone: "+55 (11) 99999-0000",
  phoneRaw: "5511999990000",
  whatsapp: "5511999990000",
  email: "contato@carolisolucoes.com.br",
  address: "Av. Paulista, 1000 — Bela Vista, São Paulo — SP, 01310-100",
  hours: "Seg a Sex, 9h às 18h",
  social: {
    instagram: "https://instagram.com/carolisolucoes",
    facebook: "https://facebook.com/carolisolucoes",
    linkedin: "https://linkedin.com/company/carolisolucoes",
    youtube: "https://youtube.com/@carolisolucoes",
  },
}

export const whatsappLink = (message = "Olá! Gostaria de solicitar uma cotação de plano de saúde.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`

export const nav = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "A Proprietária", href: "/a-proprietaria" },
  { label: "Planos", href: "/planos" },
  { label: "Operadoras", href: "/operadoras" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
]

export const benefits = [
  {
    icon: "user-check",
    title: "Atendimento Personalizado",
    description: "Cada família é única. Analisamos seu perfil para indicar o plano que realmente faz sentido para você.",
  },
  {
    icon: "scale",
    title: "Comparação entre Operadoras",
    description: "Comparamos coberturas, redes e valores das principais operadoras para você decidir com clareza.",
  },
  {
    icon: "clock",
    title: "Economia de Tempo",
    description: "Cuidamos de toda a pesquisa e burocracia. Você recebe as melhores opções sem esforço.",
  },
  {
    icon: "heart-handshake",
    title: "Atendimento Humanizado",
    description: "Falamos a sua língua, sem termos complicados. Um relacionamento de confiança de verdade.",
  },
  {
    icon: "shield-check",
    title: "Suporte Antes e Depois",
    description: "Acompanhamos você na contratação e continuamos por perto sempre que precisar do plano.",
  },
]

export const steps = [
  {
    number: "01",
    title: "Você entra em contato",
    description: "Fale conosco pelo WhatsApp ou formulário. Sem compromisso, no seu tempo.",
  },
  {
    number: "02",
    title: "Nós entendemos sua necessidade",
    description: "Conversamos sobre sua rotina, orçamento e prioridades de cobertura.",
  },
  {
    number: "03",
    title: "Encontramos o plano ideal",
    description: "Apresentamos as melhores opções e cuidamos de toda a contratação para você.",
  },
]

export type Operator = {
  name: string
  slug: string
  color: string
  tagline: string
  description: string
  highlights: string[]
  segments: string[]
}

export const operators: Operator[] = [
  {
    name: "Amil",
    slug: "amil",
    color: "#0067b1",
    tagline: "Uma das maiores redes do Brasil",
    description:
      "A Amil é uma das operadoras mais reconhecidas do país, com ampla rede credenciada e planos para todos os perfis, do individual ao empresarial.",
    highlights: [
      "Rede nacional de hospitais e laboratórios",
      "Planos individuais, familiares e empresariais",
      "Aplicativo completo para o beneficiário",
      "Programas de prevenção e bem-estar",
    ],
    segments: ["Individual", "Familiar", "Empresarial"],
  },
  {
    name: "Bradesco Saúde",
    slug: "bradesco-saude",
    color: "#cc092f",
    tagline: "Tradição e solidez em saúde",
    description:
      "A Bradesco Saúde oferece planos com livre escolha e reembolso, ideais para quem valoriza flexibilidade e uma rede de referência nacional.",
    highlights: [
      "Livre escolha com reembolso",
      "Rede referenciada premium",
      "Cobertura nacional",
      "Foco em planos empresariais e por adesão",
    ],
    segments: ["Empresarial", "Por Adesão", "Familiar"],
  },
  {
    name: "SulAmérica",
    slug: "sulamerica",
    color: "#f47920",
    tagline: "Saúde integrada e digital",
    description:
      "A SulAmérica se destaca por soluções digitais, telemedicina e programas de saúde integrada que acompanham o beneficiário no dia a dia.",
    highlights: [
      "Telemedicina 24 horas",
      "Programas de saúde e bem-estar",
      "Reembolso e livre escolha",
      "Experiência digital completa",
    ],
    segments: ["Empresarial", "Por Adesão", "Individual"],
  },
  {
    name: "Unimed",
    slug: "unimed",
    color: "#00995d",
    tagline: "A maior rede de cooperativas médicas",
    description:
      "A Unimed é referência em cobertura regional forte e atendimento próximo, presente em praticamente todo o território nacional.",
    highlights: [
      "Presença em todo o Brasil",
      "Hospitais próprios em muitas regiões",
      "Atendimento humanizado e regional",
      "Planos para todos os portes",
    ],
    segments: ["Individual", "Familiar", "Empresarial"],
  },
  {
    name: "NotreDame Intermédica",
    slug: "notredame-intermedica",
    color: "#005baa",
    tagline: "Rede própria e custo acessível",
    description:
      "A NotreDame Intermédica (GNDI) combina rede própria de hospitais e clínicas com valores competitivos, ideal para empresas e famílias.",
    highlights: [
      "Rede própria verticalizada",
      "Ótimo custo-benefício",
      "Foco em planos empresariais",
      "Pronto atendimento próprio",
    ],
    segments: ["Empresarial", "Familiar"],
  },
  {
    name: "Hapvida",
    slug: "hapvida",
    color: "#e30613",
    tagline: "Saúde acessível com estrutura própria",
    description:
      "A Hapvida oferece planos com forte presença regional e estrutura própria de atendimento, com foco em acessibilidade e cobertura completa.",
    highlights: [
      "Estrutura própria de atendimento",
      "Valores acessíveis",
      "Forte presença no Norte e Nordeste",
      "Planos empresariais e familiares",
    ],
    segments: ["Empresarial", "Familiar"],
  },
]

export const plans = [
  {
    slug: "individual",
    icon: "user",
    title: "Plano Individual",
    tagline: "Proteção sob medida para você",
    forWho: "Ideal para quem busca cobertura pessoal com liberdade de escolha e atendimento de qualidade.",
    highlights: [
      "Cobertura completa conforme a ANS",
      "Livre escolha da rede credenciada",
      "Sem necessidade de vínculo empregatício",
      "Portabilidade de carências",
    ],
    coverage: "Consultas, exames, internações e urgência/emergência.",
  },
  {
    slug: "familiar",
    icon: "users",
    title: "Plano Familiar",
    tagline: "Cuidado para quem você ama",
    forWho: "Perfeito para famílias que querem proteger todos os membros com um único contrato.",
    highlights: [
      "Economia ao incluir dependentes",
      "Cobertura para todas as idades",
      "Rede ampla de hospitais e clínicas",
      "Inclusão de recém-nascidos",
    ],
    coverage: "Pediatria, obstetrícia, especialidades e internações.",
  },
  {
    slug: "empresarial",
    icon: "building-2",
    title: "Plano Empresarial",
    tagline: "Saúde que valoriza seu time",
    forWho: "Para empresas, MEI e pequenos negócios que desejam oferecer um benefício competitivo.",
    highlights: [
      "Valores reduzidos a partir de 2 vidas",
      "Disponível para MEI e pequenas empresas",
      "Carências reduzidas ou zeradas",
      "Gestão simplificada do contrato",
    ],
    coverage: "Cobertura ambulatorial e hospitalar para colaboradores.",
  },
  {
    slug: "por-adesao",
    icon: "id-card",
    title: "Plano por Adesão",
    tagline: "Vantagens de grupo para você",
    forWho: "Para profissionais vinculados a sindicatos, conselhos e associações de classe.",
    highlights: [
      "Mensalidades mais acessíveis",
      "Ampla rede credenciada",
      "Vínculo a entidades de classe",
      "Coberturas conforme a categoria",
    ],
    coverage: "Consultas, exames e internações com condições de grupo.",
  },
]

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
    quote: "Consegui um plano excelente pelo meu conselho de classe, algo que eu nem sabia que existia.",
  },
]

export const faqs = [
  {
    question: "Como funciona a carência?",
    answer:
      "Carência é o período que você aguarda após a contratação para usar certos serviços. Varia conforme o procedimento — urgências costumam ter 24h, enquanto partos podem chegar a 300 dias. Ajudamos a reduzir ou aproveitar portabilidade de carências.",
    category: "Carência",
  },
  {
    question: "Vale a pena contratar por corretora?",
    answer:
      "Sim. O valor do plano é o mesmo, mas você ganha consultoria especializada, comparação entre operadoras e suporte contínuo — tudo sem custo adicional.",
    category: "Contratação",
  },
  {
    question: "Posso trocar de plano?",
    answer:
      "Pode. Existe a portabilidade de carências, que permite mudar de operadora aproveitando o tempo já cumprido, desde que cumpridos alguns requisitos. Nós orientamos todo o processo.",
    category: "Troca de plano",
  },
  {
    question: "O plano cobre parto?",
    answer:
      "Planos com segmentação hospitalar com obstetrícia cobrem parto. Normalmente há carência de até 300 dias. Indicamos o plano certo se essa cobertura for prioridade para você.",
    category: "Cobertura",
  },
  {
    question: "Existe reajuste?",
    answer:
      "Sim, há reajuste anual (por variação de custos) e, em alguns casos, por mudança de faixa etária. Explicamos as regras de cada operadora antes da contratação.",
    category: "Reajustes",
  },
  {
    question: "Como funciona a coparticipação?",
    answer:
      "Na coparticipação você paga uma mensalidade menor e um valor por uso (consultas, exames). É ideal para quem usa o plano com menos frequência. Avaliamos se compensa no seu caso.",
    category: "Coparticipação",
  },
]

export const blogCategories = [
  "Individual",
  "Familiar",
  "Empresarial",
  "MEI",
  "Operadoras",
  "Carência",
  "Saúde",
  "Bem-estar",
  "Dicas",
  "Legislação",
]

export type BlogSection = {
  heading?: string
  paragraphs: string[]
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readingTime: string
  image: string
  body: BlogSection[]
}

const defaultBody = (topic: string): BlogSection[] => [
  {
    paragraphs: [
      `Entender ${topic} faz toda a diferença na hora de escolher e usar o seu plano de saúde com tranquilidade. Neste conteúdo, explicamos de forma simples e direta o que você precisa saber.`,
    ],
  },
  {
    heading: "O que você precisa saber",
    paragraphs: [
      "As regras variam conforme a operadora e o tipo de contrato, por isso é fundamental comparar as opções disponíveis antes de decidir.",
      "Nossa consultoria acompanha você em cada etapa, esclarecendo dúvidas sobre coberturas, prazos e valores sem qualquer custo adicional.",
    ],
  },
  {
    heading: "Como a Caroli pode ajudar",
    paragraphs: [
      "Analisamos o seu perfil e apresentamos as melhores alternativas entre as principais operadoras do mercado, sempre com transparência.",
      "Fale com a gente pelo WhatsApp e receba uma orientação personalizada para tomar a melhor decisão para você e sua família.",
    ],
  },
]

export const blogPosts: BlogPost[] = [
  {
    slug: "como-funciona-carencia-plano-saude",
    title: "Como funciona a carência no plano de saúde?",
    excerpt: "Entenda os prazos de carência, quais serviços têm liberação imediata e como a portabilidade pode ajudar.",
    category: "Carência",
    date: "2026-06-28",
    readingTime: "5 min",
    image: "https://placehold.co/800x500/ecfdf3/16a34a?text=Care%CC%82ncia",
    body: [
      {
        paragraphs: [
          "A carência é o período que você precisa aguardar, após a assinatura do contrato, para ter acesso a determinados procedimentos do plano de saúde. Ela existe para equilibrar o uso dos serviços entre todos os beneficiários.",
        ],
      },
      {
        heading: "Prazos mais comuns",
        paragraphs: [
          "Urgência e emergência costumam ter carência de apenas 24 horas. Consultas e exames simples variam de 30 a 60 dias, enquanto internações podem chegar a 180 dias e partos a até 300 dias.",
          "Esses prazos são limites máximos definidos pela ANS, mas cada operadora pode oferecer condições melhores, especialmente em planos empresariais.",
        ],
      },
      {
        heading: "Portabilidade de carências",
        paragraphs: [
          "Se você já tem um plano e cumpriu as carências, pode trocar de operadora sem precisar cumpri-las novamente, desde que atenda a alguns requisitos de tempo e compatibilidade.",
          "Nós ajudamos a verificar se você tem direito à portabilidade e cuidamos de todo o processo para que a transição seja tranquila.",
        ],
      },
    ],
  },
  {
    slug: "plano-familiar-vale-a-pena",
    title: "Plano familiar vale a pena? Veja quando faz sentido",
    excerpt: "Comparamos custos e coberturas para ajudar sua família a decidir com segurança.",
    category: "Familiar",
    date: "2026-06-20",
    readingTime: "6 min",
    image: "https://placehold.co/800x500/eef2f7/24406b?text=Fami%CC%81lia",
    body: defaultBody("quando um plano familiar realmente vale a pena"),
  },
  {
    slug: "plano-saude-mei-guia",
    title: "Plano de saúde para MEI: o guia completo",
    excerpt: "Descubra como o MEI pode contratar plano empresarial com valores mais acessíveis.",
    category: "MEI",
    date: "2026-06-12",
    readingTime: "7 min",
    image: "https://placehold.co/800x500/ecfdf3/128a3f?text=MEI",
    body: defaultBody("como o MEI pode contratar um plano de saúde empresarial"),
  },
  {
    slug: "diferenca-entre-operadoras",
    title: "As diferenças entre as principais operadoras do mercado",
    excerpt: "Amil, Bradesco, SulAmérica, Unimed e mais: entenda o que muda entre elas.",
    category: "Operadoras",
    date: "2026-06-05",
    readingTime: "8 min",
    image: "https://placehold.co/800x500/eef2f7/16294a?text=Operadoras",
    body: defaultBody("as diferenças entre as principais operadoras do mercado"),
  },
  {
    slug: "coparticipacao-entenda",
    title: "Coparticipação: entenda se compensa para você",
    excerpt: "Um guia direto sobre planos com coparticipação e para quem eles são indicados.",
    category: "Dicas",
    date: "2026-05-29",
    readingTime: "4 min",
    image: "https://placehold.co/800x500/ecfdf3/0f6f34?text=Coparticipac%CC%A7a%CC%83o",
    body: defaultBody("como funciona a coparticipação e para quem ela compensa"),
  },
  {
    slug: "check-up-anual-importancia",
    title: "A importância do check-up anual para sua saúde",
    excerpt: "Prevenção é o melhor investimento. Veja os exames essenciais para cada fase da vida.",
    category: "Bem-estar",
    date: "2026-05-21",
    readingTime: "5 min",
    image: "https://placehold.co/800x500/eef2f7/24406b?text=Check-up",
    body: defaultBody("a importância do check-up anual para a sua saúde"),
  },
]
