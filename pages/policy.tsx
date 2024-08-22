import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Box p={8} maxWidth="800px" mx="auto">
      <VStack align="stretch" spacing={6}>
        <Heading as="h1" size="xl" textAlign="center">
          Política de Privacidade
        </Heading>

        <Text fontSize="md">
          Bem-vindo ao Ready Travel. Esta Política de Privacidade descreve como
          coletamos, usamos e protegemos suas informações pessoais quando você
          utiliza nosso aplicativo de viagens.
        </Text>

        <Heading as="h2" size="lg">
          1. Informações que Coletamos
        </Heading>
        <Text fontSize="md">
          Coletamos informações que você nos fornece diretamente, como ao criar
          uma conta, planejar uma viagem ou interagir com outros usuários. As
          informações podem incluir seu nome, e-mail, preferências de viagem, e
          qualquer outro dado que você decida compartilhar.
        </Text>

        <Heading as="h2" size="lg">
          2. Como Usamos Suas Informações
        </Heading>
        <Text fontSize="md">
          Usamos suas informações para fornecer e melhorar nossos serviços, como
          gerar itinerários personalizados, sugerir destinos e restaurantes, e
          conectar você com outros viajantes. Também podemos usar suas
          informações para enviar notificações e atualizações relacionadas ao
          aplicativo.
        </Text>

        <Heading as="h2" size="lg">
          3. Compartilhamento de Informações
        </Heading>
        <Text fontSize="md">
          Não compartilhamos suas informações pessoais com terceiros, exceto
          quando necessário para fornecer nossos serviços, cumprir com a lei, ou
          proteger nossos direitos. Podemos compartilhar informações agregadas e
          anônimas para fins de análise e melhoria do serviço.
        </Text>

        <Heading as="h2" size="lg">
          4. Armazenamento e Segurança
        </Heading>
        <Text fontSize="md">
          Armazenamos suas informações em servidores seguros e tomamos medidas
          para proteger seus dados contra acesso não autorizado, alteração ou
          divulgação. No entanto, nenhum sistema de segurança é infalível, e não
          podemos garantir a segurança absoluta das informações.
        </Text>

        <Heading as="h2" size="lg">
          5. Seus Direitos
        </Heading>
        <Text fontSize="md">
          Você tem o direito de acessar, corrigir ou excluir suas informações
          pessoais a qualquer momento. Para exercer esses direitos, entre em
          contato conosco através do suporte do aplicativo.
        </Text>

        <Heading as="h2" size="lg">
          6. Alterações nesta Política
        </Heading>
        <Text fontSize="md">
          Podemos atualizar esta Política de Privacidade periodicamente para
          refletir mudanças em nossas práticas ou em leis aplicáveis.
          Notificaremos você sobre qualquer alteração significativa através do
          aplicativo ou por e-mail.
        </Text>

        <Heading as="h2" size="lg">
          7. Contato
        </Heading>
        <Text fontSize="md">
          Se você tiver dúvidas ou preocupações sobre esta Política de
          Privacidade, entre em contato conosco através do e-mail
          suporte@readytravel.com.
        </Text>

        <Text fontSize="sm" color="gray.500" textAlign="center">
          Última atualização: 21/08/2024 ás 22:43
        </Text>
      </VStack>
    </Box>
  );
};

export default PrivacyPolicy;
