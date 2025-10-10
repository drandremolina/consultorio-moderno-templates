import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Scissors, 
  ShieldCheck,
  ArrowRight,
  Clock,
  Award,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import perfusaoIlustracaoImg from "@/assets/perfusao-isolada-ilustracao.jpg";
import biopsiaIlustracaoImg from "@/assets/biopsia-linfonodo-ilustracao.jpg";
import { useState } from "react";
import StructuredData from "@/components/SEO/StructuredData";
import AIOptimization from "@/components/SEO/AIOptimization";
import { Helmet } from "react-helmet";

const Cirurgias = () => {
  const [expandedProcedimento, setExpandedProcedimento] = useState<number | null>(null);

  const procedimentos = [
    {
      title: "Ampliação de Margens",
      description: "Cirurgia para garantir a remoção completa do tumor com margens de segurança adequadas, reduzindo o risco de recidiva local.",
      details: [
        "Análise histopatológica das margens",
        "Planejamento cirúrgico personalizado",
        "Preservação máxima de tecido saudável",
        "Acompanhamento pós-operatório especializado"
      ],
      fullContent: {
        intro: "Após o diagnóstico de um melanoma, confirmado por uma biópsia, é muito comum que o médico indique um segundo procedimento cirúrgico chamado ampliação de margens. Embora o nome possa parecer técnico, o conceito por trás dele é simples e fundamental para garantir o sucesso do tratamento.",
        whatIs: "A ampliação de margens, também conhecida como excisão ampla, é uma cirurgia que consiste em remover uma área adicional de pele saudável ao redor da cicatriz da biópsia inicial. O objetivo é criar uma margem de segurança, garantindo que todas as células cancerígenas, incluindo aquelas que não são visíveis a olho nu, sejam completamente eliminadas.",
        analogy: "Para entender melhor, imagine que você encontra uma mancha de mofo em uma parede. Você não limpa apenas a mancha visível; você limpa também uma área ao redor para ter certeza de que eliminou qualquer esporo que possa ter se espalhado. A lógica da ampliação de margens é a mesma: remover o tumor primário e quaisquer células de melanoma que possam ter se infiltrado na pele adjacente.",
        whyNecessary: "O melanoma tem a capacidade de enviar \"raízes\" microscópicas para a pele ao redor do tumor principal. Essas células são invisíveis durante o exame clínico e, se não forem removidas, podem fazer com que o câncer volte a crescer no mesmo local, o que é chamado de recidiva local.",
        benefits: [
          "Assegura a remoção completa do tumor, eliminando qualquer célula cancerígena que possa ter permanecido no local",
          "Previne significativamente a recidiva local, reduzindo drasticamente o risco de o melanoma retornar",
          "Um controle local eficaz é o primeiro passo fundamental para um tratamento bem-sucedido e aumenta as chances de cura"
        ],
        marginDetermination: "O tamanho da margem de segurança não é escolhido aleatoriamente. Ele é determinado principalmente pela espessura do melanoma, uma medida conhecida como Índice de Breslow, que é calculada durante a análise microscópica da biópsia. Quanto mais espesso o melanoma, maior a probabilidade de existirem células espalhadas na pele adjacente e, portanto, maior a margem necessária para garantir a remoção completa.",
        marginTable: [
          { thickness: "Melanoma in situ", margin: "0,5 a 1 cm", characteristics: "Limitado à camada superficial da pele" },
          { thickness: "Até 1 mm", margin: "1 cm", characteristics: "Melanomas finos, menor risco" },
          { thickness: "Entre 1 e 2 mm", margin: "1 a 2 cm", characteristics: "Espessura intermediária" },
          { thickness: "Maior que 2 mm", margin: "2 cm", characteristics: "Melanomas espessos, maior risco" }
        ],
        depthNote: "Além da margem lateral (ao redor da lesão), a cirurgia também remove o tecido em profundidade, geralmente até uma camada de tecido conjuntivo chamada fáscia muscular. Isso garante que a remoção seja completa tanto horizontalmente quanto verticalmente.",
        procedure: "A ampliação de margens é geralmente realizada como um procedimento ambulatorial, sob anestesia local. O cirurgião marca cuidadosamente a área a ser removida, respeitando as margens recomendadas, e procede com a excisão. O tecido removido é enviado para análise patológica para confirmar que as margens estão livres de células cancerígenas.",
        reconstruction: "Após a remoção, dependendo do tamanho da área excisada, a ferida pode ser fechada diretamente com pontos ou pode necessitar de técnicas reconstrutivas mais elaboradas, como enxertos de pele ou retalhos locais. O objetivo é sempre obter o melhor resultado oncológico possível, preservando a função e a aparência da área tratada.",
        specialLocations: "Em áreas anatomicamente delicadas ou funcionalmente importantes, como o rosto, pálpebras, orelhas ou dedos, os cirurgiões precisam equilibrar cuidadosamente a segurança oncológica com a preservação da função e da estética. Nesses casos, as margens podem ser ligeiramente adaptadas ou técnicas cirúrgicas especiais podem ser utilizadas para preservar o máximo de tecido saudável possível.",
        recovery: "A maioria dos pacientes se recupera bem da ampliação de margens, com cicatrização completa em algumas semanas. É importante seguir todas as orientações médicas pós-operatórias, incluindo cuidados com a ferida, uso de medicações prescritas e comparecimento às consultas de acompanhamento.",
        pathologyResults: "O resultado da análise patológica das margens é crucial. Quando as margens estão \"livres\" ou \"negativas\" (sem células cancerígenas), isso indica que o tumor foi completamente removido. Em casos raros onde as margens são \"positivas\" (com células cancerígenas), pode ser necessária uma nova cirurgia para ampliar ainda mais a área de excisão.",
        followUp: "Mesmo após uma ampliação de margens bem-sucedida, o acompanhamento médico regular é essencial. Isso inclui exames clínicos periódicos para detectar possíveis recidivas locais ou o desenvolvimento de novos melanomas, além de exames de imagem quando indicados para monitorar possível disseminação da doença.",
        conclusion: "A ampliação de margens representa um passo crucial e rotineiro no tratamento cirúrgico do melanoma. Embora signifique passar por uma segunda pequena cirurgia, este procedimento oferece a melhor chance de remover completamente a doença do local original, prevenindo seu retorno e constituindo um pilar fundamental para a cura.",
        goldStandard: "O procedimento é baseado em décadas de pesquisa científica e experiência clínica, sendo considerado o padrão-ouro para o controle local do melanoma. Quando realizada por cirurgiões experientes e seguindo as diretrizes estabelecidas, a ampliação de margens oferece excelentes resultados oncológicos com mínima morbidade.",
        finalNote: "É natural ter dúvidas ou ansiedade sobre qualquer procedimento cirúrgico. Converse abertamente com seu médico sobre o procedimento, tire todas as suas dúvidas e discuta suas preocupações. Uma comunicação clara com a equipe médica é fundamental para que você se sinta seguro e bem informado durante todo o processo de tratamento."
      }
    },
    {
      title: "Cirurgia de Mohs e técnica \"En Face\"",
      description: "Técnica cirúrgica para remoção de tumores cutâneos com preservação máxima de tecido saudável.",
      details: [
        "Controle microscópico das margens em tempo real",
        "Preservação de tecido normal",
        "Menor necessidade de reconstrução"
      ],
      fullContent: {
        intro: "Quando se trata de remover um câncer de pele, especialmente em áreas visíveis e delicadas como o rosto, dois objetivos são primordiais: remover todo o tumor para evitar que ele volte e preservar o máximo de pele saudável possível para garantir o melhor resultado estético e funcional. Duas técnicas cirúrgicas se destacam por alcançar esses objetivos com excelência: a Cirurgia de Mohs e a Técnica En Face.",
        whyBetter: "Ambas resultam em melhores resultados no tratamento dos carcinomas de pele (como o carcinoma basocelular e o espinocelular) por permitirem uma análise completa das margens cirúrgicas em tempo real, ou seja, durante a própria cirurgia. Isso representa uma evolução significativa em relação à cirurgia convencional, onde o resultado da análise das margens só é conhecido dias após o procedimento.",
        mohsTitle: "A Cirurgia de Mohs",
        mohsIntro: "A Cirurgia Micrográfica de Mohs é considerada a técnica mais precisa e eficaz para tratar muitos tipos de câncer de pele. Desenvolvida pelo Dr. Frederic E. Mohs nos anos 1930 e aperfeiçoada ao longo das décadas, seu grande diferencial é a combinação de cirurgia e análise microscópica em um único procedimento ambulatorial.",
        mohsSteps: [
          "O cirurgião remove a camada visível do tumor, juntamente com uma fina camada de tecido ao redor. Esta primeira remoção é conservadora, retirando apenas o mínimo necessário.",
          "O tecido removido é levado ao laboratório (geralmente localizado na mesma clínica), onde é cuidadosamente mapeado e dividido em seções. O próprio cirurgião examina cada seção ao microscópio. Este mapa detalhado permite localizar exatamente onde, no paciente, eventuais células cancerígenas foram encontradas.",
          "Se o microscópio revelar que ainda existem células cancerígenas nas bordas, o cirurgião retorna ao paciente e remove outra fina camada de pele, mas apenas na localização exata onde o câncer foi identificado no mapa. Isso significa que áreas livres de tumor são preservadas.",
          "Este ciclo se repete quantas vezes forem necessárias até que o exame microscópico mostre que não há mais nenhuma célula cancerígena nas margens. Só então a cirurgia é finalizada e a ferida é reconstruída."
        ],
        mohsAdvantages: [
          "Taxas de cura excepcionais, podendo chegar a 99% para tumores que não foram tratados anteriormente e 94% para tumores recorrentes",
          "Máxima preservação de pele saudável, resultando em feridas menores e cicatrizes mais discretas",
          "Procedimento realizado em uma única visita, com anestesia local",
          "Análise de 100% das margens cirúrgicas, algo impossível na cirurgia convencional"
        ],
        enFaceTitle: "A Técnica En Face: Uma Alternativa Precisa e Acessível",
        enFaceIntro: "A técnica de congelação \"en face\" representa outra abordagem inovadora para a análise intraoperatória das margens cirúrgicas. Embora o conceito seja similar ao da Cirurgia de Mohs (verificar as margens durante a cirurgia), a maneira como o tecido é processado apresenta algumas diferenças técnicas. Esta técnica se apresenta como uma excelente alternativa, especialmente quando a Cirurgia de Mohs não está disponível ou quando se busca uma opção mais acessível.",
        enFaceSteps: [
          "Remoção do Tumor: O cirurgião remove o tumor com uma margem de segurança inicial, de forma similar a uma cirurgia convencional, mas com planejamento específico para a análise posterior.",
          "Processamento Especializado das Margens: O tecido removido é levado ao laboratório, onde o patologista realiza um processamento específico. Em vez de analisar o tumor em si, são cortadas as bordas (margens periféricas e profundas) em fatias finas e paralelas à superfície de corte. É como se estivéssemos \"descascando\" a borda da peça cirúrgica para examiná-la de frente, daí o nome \"en face\" (de frente, em francês).",
          "Análise por Congelação Rápida: Essas fatias são congeladas rapidamente a -30°C e cortadas em seções microscópicas de 5 micrômetros. Após coloração, são examinadas ao microscópio pelo patologista.",
          "Ampliação Direcionada: Se o patologista encontrar células cancerígenas em alguma das margens, ele informa imediatamente ao cirurgião, que ainda está com o paciente na sala de cirurgia. O cirurgião então remove mais tecido apenas na área comprometida, seguindo um mapa preciso.",
          "Confirmação Final: O processo é repetido até que todas as margens estejam livres de tumor, garantindo remoção completa antes do fechamento da ferida."
        ],
        enFaceAdvantages: [
          "Avaliação de 100% das margens cirúrgicas",
          "Concordância com o exame definitivo (processamento em parafina) de 98%",
          "Taxas de recidiva impressionantemente baixas: 1,4% no geral, 0,86% para tumores primários e 3,7% para tumores recorrentes",
          "Maior acessibilidade, pode ser realizada em centros que não possuem infraestrutura específica para Cirurgia de Mohs",
          "Menor custo operacional"
        ],
        intraoperativeControl: "A superioridade tanto da Cirurgia de Mohs quanto da técnica \"en face\" em relação à cirurgia convencional reside fundamentalmente no controle intraoperatório das margens. Esta diferença é transformadora para os resultados do tratamento.",
        conventionalVsAdvanced: "Na cirurgia convencional, o cirurgião trabalha \"às cegas\" em relação às margens microscópicas. Ele remove o tumor com uma margem de segurança baseada em protocolos estatísticos, mas sem saber se essa margem foi suficiente. O material é enviado para análise patológica e o resultado só chega dias depois. Se as margens estiverem comprometidas (contendo células cancerígenas), o paciente precisa retornar para uma nova cirurgia, passando novamente por todo o processo de preparação, anestesia e recuperação.",
        realTimeConfirmation: "Com as técnicas de Mohs e \"en face\", essa incerteza é eliminada. A análise microscópica acontece em tempo real, durante a própria cirurgia. O cirurgião tem certeza absoluta de que removeu todo o tumor antes de fechar a ferida. Isso significa que o paciente sai da sala de cirurgia com a garantia de que o tratamento foi completo.",
        indications: [
          "Carcinomas em localizações de alto risco, onde a preservação de tecido é crucial",
          "Tumores na face, especialmente ao redor dos olhos, nariz, lábios e orelhas",
          "Tumores recorrentes (que voltaram após tratamento anterior)",
          "Tumores com bordas mal definidas",
          "Tumores grandes ou agressivos",
          "Casos onde o paciente tem histórico de múltiplos cânceres de pele"
        ],
        conclusion: "A Cirurgia de Mohs e a técnica \"en face\" representam avanços fundamentais no tratamento do câncer de pele. Ambas oferecem o que há de mais moderno em termos de precisão cirúrgica: a capacidade de remover completamente o tumor preservando ao máximo o tecido saudável, tudo isso com confirmação microscópica em tempo real.",
        finalThought: "Enquanto a Cirurgia de Mohs permanece como o padrão-ouro para casos complexos e de alto risco, a técnica \"en face\" emerge como uma alternativa valiosa, oferecendo resultados comparáveis com maior acessibilidade. A escolha entre elas depende de fatores como disponibilidade local, características específicas do tumor e experiência da equipe médica.",
        hope: "O mais importante é que ambas as técnicas representam uma evolução significativa em relação aos métodos convencionais, oferecendo aos pacientes maiores chances de cura com melhores resultados estéticos e funcionais. Para quem enfrenta um diagnóstico de câncer de pele, saber que existem essas opções avançadas de tratamento traz tranquilidade e esperança de um resultado excelente."
      }
    },
    {
      title: "Biópsia de Linfonodo Sentinela",
      description: "Procedimento minimamente invasivo para detectar disseminação de células tumorais nos linfonodos regionais.",
      details: [
        "Técnica minimamente invasiva",
        "Estadiamento preciso do melanoma",
        "Redução da morbidade cirúrgica",
        "Guia para decisões terapêuticas"
      ],
      fullContent: {
        whatIs: "A biópsia de linfonodo sentinela é um procedimento médico minimamente invasivo usado para verificar se o melanoma se espalhou para os gânglios linfáticos próximos ao tumor original. Este exame é fundamental para determinar o estágio da doença e planejar o melhor tratamento.",
        importance: "O melanoma tem a característica de se espalhar rapidamente através do sistema linfático, que é como uma \"rede de transporte\" do nosso corpo. Os gânglios linfáticos funcionam como \"estações de filtro\" que capturam células cancerígenas que podem estar viajando pelo corpo. Quando o melanoma se espalha para os gânglios, o tratamento se torna mais complexo e o prognóstico pode ser diferente.",
        sentinelNodes: "Os linfonodos sentinelas são os primeiros gânglios linfáticos que recebem a drenagem do local onde estava o tumor. Imagine-os como a \"primeira parada\" que as células cancerígenas fariam se decidissem viajar pelo corpo. Se esses gânglios estiverem livres de câncer, é muito provável que os outros gânglios da região também estejam saudáveis.",
        beforeSurgery: [
          "Injeção de Material Rastreador: O médico injeta uma substância radioativa (em quantidade muito pequena e segura) ao redor do local onde estava o melanoma.",
          "Mapeamento: Usando um equipamento especial, a equipe médica mapeia o caminho que esse material percorre até chegar aos linfonodos sentinela."
        ],
        duringSurgery: [
          "Injeção de Corante Azul: Às vezes, também é injetado um corante azul que ajuda a visualizar os gânglios durante a operação.",
          "Localização: O cirurgião usa um detector de radiação para encontrar exatamente onde estão os linfonodos sentinela.",
          "Remoção: Os gânglios sentinela são cuidadosamente removidos através de uma pequena incisão.",
          "Análise: Os gânglios são enviados para o laboratório, onde são examinados em detalhes sob microscópio."
        ],
        benefits: [
          "Detecção Precoce: Identifica células cancerígenas que não podem ser vistas em exames de imagem.",
          "Estadiamento Preciso: Ajuda a determinar exatamente em que estágio está a doença.",
          "Planejamento do Tratamento: Orienta os médicos sobre qual é o melhor tratamento para cada caso.",
          "Prognóstico: Fornece informações importantes sobre as chances de recuperação.",
          "Prevenção: Se forem encontradas células cancerígenas, o procedimento de biópsia de linfonodo sentinela pode ser suficiente, sem necessidade de remover demais gânglios."
        ],
        whenRecommended: [
          "O melanoma tem espessura intermediária (entre 1,0 e 4,0 mm).",
          "Entre 0,8 e 1mm em condições especiais, como ulceração.",
          "Os gânglios linfáticos não estão visivelmente aumentados no exame físico.",
          "Não há sinais de metástase em exames de imagem.",
          "O paciente está em boas condições de saúde para o procedimento."
        ],
        risks: [
          "Dor leve no local da cirurgia",
          "Inchaço temporário",
          "Risco muito baixo de infecção",
          "Raramente, pode ocorrer linfedema (inchaço permanente) na região"
        ]
      }
    },
    {
      title: "Perfusão Isolada de Membro",
      description: "Tratamento regional avançado para melanomas e sarcomas de extremidades com alta concentração de quimioterápicos.",
      details: [
        "Tratamento regional especializado",
        "Alta concentração de medicamentos",
        "Preservação da função do membro",
        "Alternativa à amputação"
      ],
      fullContent: {
        whatIs: "A perfusão isolada de membro (ILP) é um procedimento especializado desenvolvido nos anos 1950 como alternativa à amputação. Permite administrar altas doses de quimioterapia diretamente no membro afetado, isolando-o da circulação sistêmica para tratar melanoma avançado e sarcomas de tecidos moles.",
        whenIndicated: [
          "Metástases de melanoma confinadas a um único membro",
          "Sarcomas de tecidos moles dos braços ou pernas",
          "Tumores irressecáveis ou com alto risco de amputação",
          "Lesões primárias limítrofe para ressecção",
          "Metástases em trânsito do melanoma"
        ],
        howItWorks: [
          "Isolamento vascular: clampeamento da artéria e veia principal do membro",
          "Aplicação de torniquete para isolar completamente a circulação",
          "Conexão de tubos a uma máquina de perfusão extracorpórea",
          "Circulação de quimioterapia aquecida (39-40°C) por 60-90 minutos",
          "Resfriamento e lavagem completa para remover medicamentos residuais",
          "Reconexão dos vasos sanguíneos e fechamento da incisão"
        ],
        medications: [
          "Melfalan: Quimioterápico principal que atua diretamente nas células tumorais",
          "TNF Beromun (tasonermina): Fator de necrose tumoral que potencializa o efeito da quimioterapia, especialmente eficaz em sarcomas",
          "TNF Beromun sempre usado em combinação com melfalan em perfusão de 90 minutos"
        ],
        efficacy: [
          "Taxa de resposta: 75% dos casos tratados",
          "Excelente controle local da doença",
          "Melhora significativa da sobrevida"
        ],
        sideEffects: [
          "Vermelhidão intensa (primeiras 48 horas)",
          "Descamação e bolhas na pele",
          "Inchaço e possível linfedema",
          "Alterações nas unhas",
          "Descoloração da pele (pode ser permanente)",
          "Dor, rigidez e formigamento temporários",
          "Risco de perda do membro (procedimento de grande porte e alta complexidade)"
        ],
        advantages: [
          "Evita a amputação em muitos casos",
          "Permite altas doses de quimioterapia, com reduzida toxicidade sistêmica",
          "Pode trazer controle local eficaz da doença",
          "Preservação da função do membro",
          "Alternativa para tumores irressecáveis"
        ]
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cirurgias Oncológicas - Dr. André Molina | Especialista em Oncologia Cutânea São Paulo</title>
        <meta name="description" content="Cirurgias oncológicas especializadas realizadas pelo Dr. André Molina em São Paulo: ampliação de margens, cirurgia de Mohs, biópsia de linfonodo sentinela, perfusão isolada de membro. Tratamento de melanoma e carcinomas com técnicas avançadas e precisão cirúrgica." />
        <meta name="keywords" content="cirurgia de mohs São Paulo, ampliação margens oncológicas, biópsia linfonodo sentinela SP, perfusão isolada membro, cirurgia oncológica São Paulo, Dr André Molina cirurgia, oncologia cutânea procedimentos, ressecção melanoma, microcirurgia dermatológica, excisão carcinoma basocelular" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cirurgias Oncológicas Especializadas - Dr. André Molina" />
        <meta property="og:description" content="Procedimentos cirúrgicos especializados em oncologia cutânea com técnicas avançadas: Mohs, linfonodo sentinela, perfusão isolada de membro." />
        <meta property="og:url" content="https://andremedina.com.br/cirurgias" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Cirurgias Oncológicas - Dr. André Molina" />
        <meta name="twitter:description" content="Procedimentos especializados em oncologia cutânea" />
        
        {/* Medical Context */}
        <meta name="surgical-procedures" content="Ampliação de Margens, Cirurgia de Mohs, Biópsia Linfonodo Sentinela, Perfusão Isolada de Membro" />
        <meta name="medical-techniques" content="Microcirurgia, Oncoplástica, Ressecção Ampla, Controle Histopatológico" />
        
        <link rel="canonical" href="https://andremedina.com.br/cirurgias" />
      </Helmet>
      
      <StructuredData type="article" data={{
        title: "Cirurgias Oncológicas Especializadas",
        description: "Procedimentos cirúrgicos avançados em oncologia cutânea",
        url: "https://andremedina.com.br/cirurgias"
      }} />
      <AIOptimization page="surgeries" />

      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary">
                  <Scissors className="h-4 w-4" />
                  Cirurgias Especializadas
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  Cirurgias Oncológicas
                  <span className="block text-primary">Especializadas</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Procedimentos cirúrgicos especializados em oncologia cutânea, utilizando as mais 
                  modernas técnicas para garantir os melhores resultados terapêuticos.
                </p>
              </div>
            </div>
          </section>

          {/* Procedimentos Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="space-y-16">
                {procedimentos.map((procedimento, index) => (
                  <div key={index} className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-foreground">
                          {index === 0 ? "Tratamento Melanoma - " : ""}{procedimento.title}
                        </h2>
                        
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {procedimento.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        {procedimento.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>

                      <Button 
                        onClick={() => setExpandedProcedimento(expandedProcedimento === index ? null : index)}
                        className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 group"
                      >
                        {expandedProcedimento === index ? 'Ver menos' : 'Saiba mais'}
                        {expandedProcedimento === index ? (
                          <ChevronUp className="h-4 w-4 ml-2 transition-transform" />
                        ) : (
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                        )}
                      </Button>

                      {/* Expanded Content for Ampliação de Margens */}
                      {expandedProcedimento === index && index === 0 && procedimento.fullContent && (
                        <div className="mt-8 space-y-8 p-6 bg-muted/30 rounded-xl">
                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Entendendo a Ampliação de Margens no Tratamento do Melanoma</h3>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.intro}</p>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">O que é a Ampliação de Margens?</h3>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.whatIs}</p>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.analogy}</p>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Por que a Ampliação de Margens é Necessária?</h3>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.whyNecessary}</p>
                            <p className="text-muted-foreground leading-relaxed mt-4">A ampliação de margens é um procedimento padrão e essencial que oferece múltiplos benefícios:</p>
                            <div className="space-y-2">
                              {procedimento.fullContent.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Como é Determinado o Tamanho da Margem?</h3>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.marginDetermination}</p>
                            
                            <div className="overflow-x-auto mt-4">
                              <table className="w-full border-collapse">
                                <thead>
                                  <tr className="bg-primary/10">
                                    <th className="border border-border p-3 text-left font-semibold text-foreground">Espessura do Melanoma (Índice de Breslow)</th>
                                    <th className="border border-border p-3 text-left font-semibold text-foreground">Margem de Segurança Recomendada</th>
                                    <th className="border border-border p-3 text-left font-semibold text-foreground">Características</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {procedimento.fullContent.marginTable.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-muted/20">
                                      <td className="border border-border p-3 text-muted-foreground">{row.thickness}</td>
                                      <td className="border border-border p-3 text-muted-foreground">{row.margin}</td>
                                      <td className="border border-border p-3 text-muted-foreground">{row.characteristics}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mt-4">{procedimento.fullContent.depthNote}</p>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">O Procedimento Cirúrgico</h3>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.procedure}</p>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.reconstruction}</p>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Considerações Especiais por Localização</h3>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.specialLocations}</p>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Resultados e Recuperação</h3>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.recovery}</p>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.pathologyResults}</p>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Importância do Acompanhamento</h3>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.followUp}</p>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Conclusão</h3>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.conclusion}</p>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.goldStandard}</p>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.finalNote}</p>
                            <p className="text-sm text-muted-foreground italic mt-6">
                              <strong>Aviso Legal:</strong> Este conteúdo tem caráter exclusivamente informativo e educativo, não substituindo em hipótese alguma a consulta com um médico especialista. As decisões sobre o tratamento devem sempre ser tomadas em conjunto com sua equipe médica, considerando as particularidades de cada caso.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Expanded Content for Cirurgia de Mohs e Técnica En Face */}
                      {expandedProcedimento === index && index === 1 && procedimento.fullContent && (
                        <div className="mt-8 space-y-8 p-6 bg-muted/30 rounded-xl">
                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Cirurgia de Mohs e Técnica En Face: Precisão no Tratamento do Câncer de Pele</h3>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.intro}</p>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.whyBetter}</p>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">{procedimento.fullContent.mohsTitle}</h3>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.mohsIntro}</p>
                            
                            <h4 className="text-xl font-medium text-foreground mt-4">Como Funciona a Cirurgia de Mohs</h4>
                            <p className="text-muted-foreground leading-relaxed">O procedimento é meticuloso e realizado em etapas sequenciais, tudo no mesmo dia, enquanto o paciente aguarda confortavelmente entre cada fase:</p>
                            <div className="space-y-3">
                              {procedimento.fullContent.mohsSteps.map((step, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold flex-shrink-0 mt-0.5">
                                    {idx + 1}
                                  </div>
                                  <span className="text-muted-foreground">{step}</span>
                                </div>
                              ))}
                            </div>

                            <h4 className="text-xl font-medium text-foreground mt-6">Por que a Cirurgia de Mohs é tão Eficaz</h4>
                            <p className="text-muted-foreground leading-relaxed">A Cirurgia de Mohs oferece vantagens únicas que a tornam o padrão-ouro para muitos carcinomas de pele:</p>
                            <div className="space-y-2">
                              {procedimento.fullContent.mohsAdvantages.map((advantage, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{advantage}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">{procedimento.fullContent.enFaceTitle}</h3>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.enFaceIntro}</p>
                            
                            <h4 className="text-xl font-medium text-foreground mt-4">Como Funciona a Técnica En Face</h4>
                            <p className="text-muted-foreground leading-relaxed">O procedimento "en face" segue uma sequência bem estruturada que garante análise completa das margens:</p>
                            <div className="space-y-3">
                              {procedimento.fullContent.enFaceSteps.map((step, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold flex-shrink-0 mt-0.5">
                                    {idx + 1}
                                  </div>
                                  <span className="text-muted-foreground">{step}</span>
                                </div>
                              ))}
                            </div>

                            <h4 className="text-xl font-medium text-foreground mt-6">Por que a Técnica En Face é tão Eficaz</h4>
                            <p className="text-muted-foreground leading-relaxed">A técnica "en face" demonstra eficácia comparável à Cirurgia de Mohs em muitos aspectos:</p>
                            <div className="space-y-2">
                              {procedimento.fullContent.enFaceAdvantages.map((advantage, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{advantage}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">A Revolução do Controle Intraoperatório</h3>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.intraoperativeControl}</p>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.conventionalVsAdvanced}</p>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.realTimeConfirmation}</p>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Indicações Específicas</h3>
                            <p className="text-muted-foreground leading-relaxed">Ambas as técnicas são especialmente indicadas para:</p>
                            <div className="space-y-2">
                              {procedimento.fullContent.indications.map((indication, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{indication}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Conclusão</h3>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.conclusion}</p>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.finalThought}</p>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.hope}</p>
                            <p className="text-sm text-muted-foreground italic mt-6">
                              <strong>Aviso Legal:</strong> Este conteúdo tem caráter exclusivamente informativo e educativo, não substituindo em hipótese alguma a consulta com um médico especialista. A indicação da melhor técnica para cada caso depende de vários fatores, como o tipo, tamanho, localização do tumor e características individuais do paciente. Sempre discuta com seu médico qual a melhor opção para o seu caso específico.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Expanded Content for Biópsia de Linfonodo Sentinela */}
                      {expandedProcedimento === index && index === 2 && procedimento.fullContent && (
                        <div className="mt-8 space-y-8 p-6 bg-muted/30 rounded-xl">
                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">O que é a Biópsia de Linfonodo Sentinela?</h3>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.whatIs}</p>
                          </div>

                          {/* Illustration */}
                          <div className="flex justify-center my-6">
                            <img 
                              src={biopsiaIlustracaoImg} 
                              alt="Ilustração do procedimento de biópsia de linfonodo sentinela em melanoma" 
                              className="max-w-full h-auto rounded-lg shadow-lg"
                            />
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Por que é Importante?</h3>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.importance}</p>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">O que são Linfonodos Sentinelas?</h3>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.sentinelNodes}</p>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Como Funciona o Procedimento?</h3>
                            
                            <div className="space-y-3">
                              <h4 className="text-lg font-medium text-foreground">Antes da Cirurgia</h4>
                              <div className="space-y-2">
                                {procedimento.fullContent.beforeSurgery.map((item, idx) => (
                                  <div key={idx} className="flex items-start gap-3">
                                    <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-3">
                              <h4 className="text-lg font-medium text-foreground">Durante a Cirurgia</h4>
                              <div className="space-y-2">
                                {procedimento.fullContent.duringSurgery.map((item, idx) => (
                                  <div key={idx} className="flex items-start gap-3">
                                    <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Benefícios do Procedimento</h3>
                            <div className="space-y-2">
                              {procedimento.fullContent.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Quando é Recomendado?</h3>
                            <p className="text-muted-foreground">A biópsia de linfonodo sentinela é geralmente recomendada quando:</p>
                            <div className="space-y-2">
                              {procedimento.fullContent.whenRecommended.map((condition, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{condition}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Riscos e Efeitos Colaterais</h3>
                            <p className="text-muted-foreground">Como qualquer procedimento cirúrgico, a biópsia de linfonodo sentinela pode ter alguns riscos, mas eles são considerados baixos:</p>
                            <div className="space-y-2">
                              {procedimento.fullContent.risks.map((risk, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{risk}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Expanded Content for Perfusão Isolada de Membro */}
                      {expandedProcedimento === index && index === 3 && procedimento.fullContent && (
                        <div className="mt-8 space-y-8 p-6 bg-muted/30 rounded-xl">
                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">O que é?</h3>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.whatIs}</p>
                          </div>

                          {/* Illustration */}
                          <div className="flex justify-center my-6">
                            <img 
                              src={perfusaoIlustracaoImg} 
                              alt="Ilustração do procedimento de perfusão isolada de membro" 
                              className="max-w-full h-auto rounded-lg shadow-lg"
                            />
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Quando é indicada?</h3>
                            <p className="text-muted-foreground">A perfusão isolada de membro é recomendada para:</p>
                            <div className="space-y-2">
                              {procedimento.fullContent.whenIndicated.map((indication, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{indication}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Como funciona o procedimento?</h3>
                            <p className="text-muted-foreground">O procedimento é realizado em etapas precisas:</p>
                            <div className="space-y-2">
                              {procedimento.fullContent.howItWorks.map((step, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Medicamentos utilizados</h3>
                            <div className="space-y-2">
                              {procedimento.fullContent.medications.map((medication, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{medication}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Eficácia do tratamento</h3>
                            <p className="text-muted-foreground">Estudos mostram resultados promissores:</p>
                            <div className="space-y-2">
                              {procedimento.fullContent.efficacy.map((result, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{result}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Efeitos colaterais</h3>
                            <p className="text-muted-foreground">Os efeitos são geralmente limitados ao membro tratado:</p>
                            <div className="space-y-2">
                              {procedimento.fullContent.sideEffects.map((effect, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{effect}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Vantagens do procedimento</h3>
                            <div className="space-y-2">
                              {procedimento.fullContent.advantages.map((advantage, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{advantage}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Conclusão</h3>
                            <p className="text-muted-foreground leading-relaxed">
                              A perfusão isolada de membro representa uma opção terapêutica valiosa para pacientes com melanoma avançado e sarcomas de tecidos moles confinados aos membros. O procedimento oferece boas taxas de resposta e controle local, frequentemente evitando a necessidade de amputação. O uso combinado de Beromun pode aumentar a eficácia.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                              Este tratamento altamente especializado deve ser realizado em centros de referência com equipe experiente, incluindo cirurgiões oncológicos e perfusionistas qualificados.
                            </p>
                            <p className="text-sm text-muted-foreground italic">
                              Este conteúdo é informativo e não substitui a consulta médica especializada.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
            <div className="container mx-auto px-4 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Precisa de uma Consulta Especializada?
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Agende sua consulta e receba o melhor tratamento oncológico 
                  com técnicas cirúrgicas de última geração.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-50 rounded-full px-8 py-6 text-lg"
                >
                  <Clock className="h-5 w-5 mr-2" />
                  Agendar Consulta
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
                >
                  <Award className="h-5 w-5 mr-2" />
                  Ver Currículo
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Cirurgias;