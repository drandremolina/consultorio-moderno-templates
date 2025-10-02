import { Helmet } from "react-helmet";

const FAQSchema = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é melanoma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O melanoma é um tipo de câncer de pele que se desenvolve nos melanócitos, células produtoras de pigmento. É o tipo mais agressivo de câncer de pele e requer tratamento especializado por um cirurgião oncológico."
        }
      },
      {
        "@type": "Question",
        "name": "Como é feito o tratamento de melanoma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O tratamento do melanoma pode incluir cirurgia oncológica, biópsia de linfonodo sentinela, imunoterapia e em casos avançados, perfusão isolada de membro. O Dr. André Molina é especialista em todas essas técnicas avançadas."
        }
      },
      {
        "@type": "Question",
        "name": "O que é carcinoma basocelular?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O carcinoma basocelular é o tipo mais comum de câncer de pele. Embora raramente metastatize, requer tratamento adequado. A cirurgia de Mohs é uma das técnicas mais eficazes para seu tratamento."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona a biópsia de linfonodo sentinela?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A biópsia de linfonodo sentinela é um procedimento para avaliar se o melanoma se espalhou para os gânglios linfáticos. É essencial para o estadiamento correto e definição do melhor tratamento."
        }
      },
      {
        "@type": "Question",
        "name": "O que é perfusão isolada de membro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A perfusão isolada de membro é uma técnica especializada usada no tratamento de melanomas em estágios avançados nas extremidades. Permite administrar altas doses de quimioterapia localmente, preservando o membro."
        }
      },
      {
        "@type": "Question",
        "name": "Qual é a diferença entre carcinoma basocelular e carcinoma espinocelular?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O carcinoma basocelular é o mais comum e menos agressivo, raramente metastatiza. O carcinoma espinocelular é mais agressivo que o basocelular e tem maior potencial de metástase, requerendo tratamento mais agressivo."
        }
      },
      {
        "@type": "Question",
        "name": "O que é a cirurgia de Mohs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A cirurgia de Mohs é uma técnica microcirúrgica que remove o câncer de pele camada por camada, examinando cada camada ao microscópio até que todas as células cancerosas sejam removidas. Tem as maiores taxas de cura para carcinoma basocelular e espinocelular."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqData)}
      </script>
    </Helmet>
  );
};

export default FAQSchema;
