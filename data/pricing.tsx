import { HStack, Text } from "@chakra-ui/react";

export default {
  title: "Planos para cada tipo de viajante",
  description:
    "Escolha o plano que melhor se adapta às suas necessidades e aproveite ao máximo sua experiência de viagem.",
  plans: [
    {
      id: "free",
      title: "Free",
      description: "Ideal para começar sua jornada.",
      price: "Grátis",
      features: [
        {
          title: "Beleza de títulos de viagens (3x)",
        },
        {
          title: "Geração de viagem com IA (1x)",
        },
        {
          title: "Acesso completo ao app",
        },
        {
          title: "Suporte básico",
        },
        {
          title: "Com anúncios",
        },
      ],
      action: {
        href: "#",
      },
    },
    {
      id: "pro",
      title: "Pro",
      description:
        "Para viajantes frequentes que querem mais controle e liberdade.",
      price: "R$12,00/mês",
      isRecommended: true,
      features: [
        {
          title: "Sem anúncios",
        },
        {
          title: "Geração de conteúdo ilimitado com IA",
        },
        {
          title: "Beleza de títulos de viagens ilimitado",
        },
        {
          title: "Suporte prioritário",
        },
        {
          title: "Borda de avatar exclusiva",
        },
        {
          title: "Título de usuário PRO",
        },
      ],
      action: {
        href: "#",
      },
    },
  ],
};
