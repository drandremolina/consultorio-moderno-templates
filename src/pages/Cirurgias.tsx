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
      ]
    },
    {
      title: "Cirurgia de Mohs",
      description: "Técnica cirúrgica para remoção de tumores cutâneos com preservação máxima de tecido saudável.",
      details: [
        "Controle microscópico das margens em tempo real",
        "Preservação de tecido normal",
        "Menor necessidade de reconstrução"
      ]
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
      ]
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
                          {procedimento.title}
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

                      {/* Expanded Content for Biópsia de Linfonodo Sentinela */}
                      {expandedProcedimento === index && index === 2 && procedimento.fullContent && (
                        <div className="mt-8 space-y-8 p-6 bg-muted/30 rounded-xl">
                          <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">O que é a Biópsia de Linfonodo Sentinela?</h3>
                            <p className="text-muted-foreground leading-relaxed">{procedimento.fullContent.whatIs}</p>
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