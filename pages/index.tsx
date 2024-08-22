import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { GeminiLogo, ReactLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCode,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Ready Travel App"
        description="Seu aplicativo de viagens gratuito!"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Explore o Mundo com Estilo
                <Br /> Planeje Viagens Inesquecíveis com Facilidade
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                ReadyApp <Em>é a sua plataforma de viagens intuitiva</Em>
                <Br /> que oferece todas as ferramentas necessárias para
                planejar e vivenciar aventuras incríveis, <Br /> tudo em um só
                lugar.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <ReactLogo height="28px" /> <GeminiLogo height="20px" />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                {/* <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Sign Up
                </ButtonLink> */}
                <ButtonLink
                  size="lg"
                  href="#"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  objectFit="none"
                  alt="Screenshot of a home Ready Travel App"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Acessível",
            icon: FiSmile,
            description:
              "Todas as funcionalidades foram projetadas para serem intuitivas e fáceis de usar.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Personalizável",
            icon: FiSliders,
            description:
              "Customize totalmente sua experiência de viagem, ajustando preferências e estilos de acordo com sua marca ou gosto pessoal.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Modular",
            icon: FiGrid,
            description:
              "Combine diferentes funcionalidades para planejar sua viagem do jeito que você precisa, criando uma experiência única.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Produtivo",
            icon: FiThumbsUp,
            description:
              "Desenvolvido para facilitar o planejamento de viagens, permitindo que você organize tudo rapidamente e sem complicações.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  return (
    <Highlights>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Planejamento Inteligente de Viagens"
      >
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Planeje suas viagens de forma inteligente com a ajuda da nossa{" "}
            <Em>AI integrada</Em>. Crie itinerários personalizados, encontre os
            melhores restaurantes e descubra novas aventuras em poucos minutos.
          </Text>
        </VStack>
      </HighlightsItem>

      <HighlightsItem title="Interação Social">
        <Text color="muted" fontSize="lg">
          Conecte-se com outros viajantes! Veja as viagens de outras pessoas,
          deixe comentários, curta suas aventuras favoritas e compartilhe suas
          próprias experiências com a comunidade.
        </Text>
      </HighlightsItem>

      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Viajante Experiente"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “Este aplicativo transformou a forma como planejo minhas viagens. A
        geração de itinerários com AI é incrível, e adoro poder explorar viagens
        de outros usuários e compartilhar as minhas próprias.”
      </HighlightsTestimonialItem>

      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Tudo o que Você Precisa para Viajar"
      >
        <Text color="muted" fontSize="lg">
          Nosso aplicativo cobre todas as suas necessidades de viagem. Desde a
          criação de roteiros detalhados até a escolha dos melhores
          restaurantes, você tem tudo à sua disposição para uma viagem
          inesquecível.
        </Text>
        <Wrap mt="8">
          {[
            "geração de viagens com AI",
            "itinerários personalizados",
            "exploração de restaurantes",
            "interação social",
            "comentários e curtidas",
            "compartilhamento de viagens",
            "descoberta de novas aventuras",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Seu companheiro de viagem
          <Br /> completo e inteligente.
        </Heading>
      }
      description={
        <>
          Nosso aplicativo oferece tudo o que você precisa para planejar e viver
          suas viagens de forma única e inesquecível.
          <Br />
          Personalize suas aventuras, conecte-se com outros viajantes e
          aproveite ao máximo cada destino.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Criação de Viagens com AI.",
          icon: FiBox,
          description:
            "Gere itinerários personalizados e descubra os melhores destinos com a ajuda da nossa inteligência artificial integrada.",
          variant: "inline",
        },
        {
          title: "Planejamento Detalhado.",
          icon: FiLock,
          description:
            "Organize sua viagem em detalhes, incluindo reservas de restaurantes, atividades diárias e muito mais, tudo em um só lugar.",
          variant: "inline",
        },
        {
          title: "Exploração Social.",
          icon: FiSearch,
          description:
            "Descubra viagens de outros usuários, veja recomendações, deixe comentários e curta as melhores aventuras.",
          variant: "inline",
        },
        {
          title: "Compartilhamento de Experiências.",
          icon: FiUserPlus,
          description:
            "Compartilhe suas viagens com a comunidade, adicione fotos, dicas e inspire outros viajantes.",
          variant: "inline",
        },
        {
          title: "Notificações Inteligentes.",
          icon: FiFlag,
          description:
            "Receba notificações sobre suas viagens, lembretes de atividades e sugestões personalizadas para aproveitar cada momento.",
          variant: "inline",
        },
        {
          title: "Interatividade Simples.",
          icon: FiTrendingUp,
          description:
            "Navegue de forma intuitiva e interaja com o conteúdo de maneira fluida, facilitando o uso do aplicativo em qualquer situação.",
          variant: "inline",
        },
        {
          title: "Temas Personalizáveis.",
          icon: FiToggleLeft,
          description:
            "Personalize a aparência do aplicativo com temas variados, incluindo suporte a modo escuro, para tornar sua experiência ainda mais agradável.",
          variant: "inline",
        },
        {
          title: "Suporte ao Viajante.",
          icon: FiTerminal,
          description:
            "Tenha à disposição guias, dicas e suporte para qualquer dúvida que surgir durante a sua viagem.",
          variant: "inline",
        },
        {
          title: "Integração Completa.",
          icon: FiCode,
          description: (
            <>
              O aplicativo se integra perfeitamente com outras ferramentas e
              serviços, garantindo que todas as suas necessidades de viagem
              sejam atendidas em um único lugar.
            </>
          ),
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        O IVA pode ser aplicado dependendo da sua localização.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Support us by becoming a stargazer! 🚀 ",
        description:
          '<img src="https://img.shields.io/github/stars/ready-app?style=social&label=Star" />',
        href: "https://github.com/pedrogiampietro/ready-app",
        action: false,
      },
    },
  };
}
