import * as React from "react";

const faq = {
  title: "Perguntas frequentes",
  // description: '',
  items: [
    {
      q: "Quantas viagens posso criar usando o plano Free?",
      a: (
        <>
          No plano Free, você pode gerar até 1 viagem completa utilizando a
          inteligência artificial e embelezar títulos de viagens 3 vezes. Para
          mais funcionalidades, considere o plano Pro.
        </>
      ),
    },
    {
      q: "O que está incluído no plano Pro?",
      a: "O plano Pro oferece uma experiência sem anúncios, geração ilimitada de viagens com IA, embelezamento de títulos ilimitado, suporte prioritário, além de uma borda de avatar exclusiva e o título de usuário PRO.",
    },
    {
      q: "Posso mudar do plano Free para o plano Pro?",
      a: "Sim, você pode fazer o upgrade para o plano Pro a qualquer momento diretamente no aplicativo. Basta acessar a área de configurações e selecionar a opção de upgrade.",
    },
    {
      q: "O que acontece se eu não renovar o plano Pro?",
      a: "Se você não renovar o plano Pro, sua conta será automaticamente revertida para o plano Free, e você perderá o acesso às funcionalidades exclusivas do plano Pro, como a experiência sem anúncios e a geração ilimitada de viagens com IA.",
    },
  ],
};

export default faq;
