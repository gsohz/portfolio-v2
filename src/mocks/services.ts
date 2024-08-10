interface Topic {
  title: string;
  bullets: string[];
}

export interface Service {
  title: string;
  topics: Topic[];
}

const services: Service[] = [
  {
    title: "Desenvolvimento de Sites",
    topics: [
      {
        title: "Desenvolvimento de Sites",
        bullets: [
          "Criação de layouts modernos e responsivos.",
          "Foco na usabilidade e na experiência do usuário.",
        ],
      },
      {
        title: "Implementação Completa",
        bullets: [
          "Desenvolvimento de sites com as melhores práticas de codificação.",
          "Integração de funcionalidades como formulários de contato e blogs.",
        ],
      },
      {
        title: "Configuração de Hospedagem",
        bullets: [
          "Suporte na escolha da melhor hospedagem.",
          "Configuração do servidor e domínio.",
        ],
      },
      {
        title: "Entrega de Site Online",
        bullets: [
          "Lançamento do site, garantindo que esteja 100% funcional.",
          "Testes de performance e segurança.",
        ],
      },
    ],
  },
  {
    title: "Desenvolvimento de Sistemas",
    topics: [
      {
        title: "Sistemas Personalizados",
        bullets: [
          "Desenvolvimento de sistemas sob medida para atender às necessidades do seu negócio.",
        ],
      },
      {
        title: "APIs Personalizadas",
        bullets: [
          "Criação de APIs sob medida para facilitar a integração entre diferentes sistemas.",
        ],
      },
      {
        title: "Integração de APIs",
        bullets: ["Conexão de sistemas com outras plataformas e serviços."],
      },
      {
        title: "Manutenção e Suporte",
        bullets: [
          "Atualizações regulares e suporte técnico para garantir o bom funcionamento.",
        ],
      },
    ],
  },
];

export default services;
