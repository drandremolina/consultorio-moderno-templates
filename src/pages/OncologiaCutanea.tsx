import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  Shield, 
  Microscope, 
  Heart, 
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Info
} from "lucide-react";
import { useState } from "react";
import StructuredData from "@/components/SEO/StructuredData";
import AIOptimization from "@/components/SEO/AIOptimization";
import { Helmet } from "react-helmet";

const OncologiaCutanea = () => {
  const [expandedImunotherapy, setExpandedImunotherapy] = useState<number | null>(null);
  const condicoes = [
    {
      title: "Melanoma",
      incidencia: "Representa 4% dos cânceres de pele, mas é responsável por 80% das mortes",
      fatores: ["Exposição solar excessiva", "Histórico familiar", "Pele clara", "Múltiplas pintas"],
      patogenia: "Origina-se dos melanócitos, células produtoras de melanina. Pode surgir em pele normal ou a partir de nevos pré-existentes.",
      tratamento: "Excisão cirúrgica com margens adequadas, biópsia de linfonodo sentinela quando indicada, imunoterapia para casos avançados."
    },
    {
      title: "Carcinoma Basocelular",
      incidencia: "Tipo mais comum de câncer de pele, representa 70% dos casos",
      fatores: ["Exposição UV crônica", "Idade avançada", "Pele clara", "Imunossupressão"],
      patogenia: "Origina-se das células basais da epiderme. Crescimento lento e baixo potencial metastático.",
      tratamento: "Excisão cirúrgica convencional, cirurgia de Mohs para casos complexos, terapias tópicas em casos selecionados."
    },
    {
      title: "Carcinoma Espinocelular da Pele",
      incidencia: "Segundo tipo mais comum, representa 25% dos cânceres de pele",
      fatores: ["Exposição UV", "Lesões pré-malignas", "Imunossupressão", "Infecção por HPV"],
      patogenia: "Desenvolve-se a partir dos queratinócitos da epiderme. Pode ter comportamento mais agressivo que o carcinoma basocelular.",
      tratamento: "Excisão cirúrgica com margens adequadas, avaliação de linfonodos regionais, radioterapia adjuvante quando necessário."
    },
    {
      title: "Carcinoma de Células de Merkel",
      incidencia: "Tumor raro e agressivo, incidência de 0,7 casos por 100.000 habitantes",
      fatores: ["Idade avançada", "Imunossupressão", "Exposição UV", "Polyomavirus de Merkel"],
      patogenia: "Tumor neuroendócrino da pele com alto potencial metastático. Frequentemente associado ao polyomavirus de Merkel.",
      tratamento: "Excisão ampla, biópsia de linfonodo sentinela, radioterapia adjuvante, imunoterapia para doença metastática."
    },
    {
      title: "Dermatofibrossarcoma Protuberante",
      incidencia: "Sarcoma cutâneo raro, representa menos de 1% dos sarcomas de partes moles",
      fatores: ["Predisposição genética", "Radiação prévia"],
      patogenia: "Sarcoma de baixo grau com alta tendência à recidiva local se incompletamente excisado.",
      tratamento: "Excisão cirúrgica com margens amplas, cirurgia de Mohs em casos selecionados, terapia-alvo para casos avançados."
    }
  ];

  const imunoterapias = [
    {
      title: "Imunoterapia no Melanoma",
      description: "Revolucionou o tratamento do melanoma avançado com drogas como pembrolizumab, nivolumab e ipilimumab.",
      beneficios: [
        "Melhora significativa da sobrevida global",
        "Respostas duradouras em muitos pacientes",
        "Menor toxicidade que quimioterapia tradicional",
        "Possibilidade de uso neoadjuvante e adjuvante"
      ],
      detailedInfo: {
        description: "A imunoterapia é um tratamento que estimula o sistema imunológico do próprio paciente a combater o câncer. No melanoma, essa abordagem revolucionou o tratamento e melhorou significativamente as chances de cura e sobrevivência.",
        medications: "Inibidores de PD-1 (Pembrolizumab - Keytruda®, Nivolumab - Opdivo®), Inibidor de CTLA-4 (Ipilimumab - Yervoy®), Inibidor de LAG-3 (Relatlimab), Combinações Fixas (Opdualag® - nivolumab + relatlimab)",
        indications: [
          "Antes da Cirurgia (Neoadjuvante): Pode reduzir o tamanho do tumor antes da remoção cirúrgica. Altas taxas de resposta, principalmente em pacientes com melanoma estágio III",
          "Após a Cirurgia (Adjuvante): Intenção de prevenir o retorno do câncer após a remoção do tumor. Indicado para melanomas estágio metastático",
          "Doença Avançada (Metastática): Primeira linha de tratamento para melanoma metastático. Pode ser usado em monoterapia ou combinação"
        ],
        specificIndications: [
          "Nivolumab + Ipilimumab é uma combinação eficaz",
          "Opdualag® (nivolumab + relatlimab) é nova opção para casos não tratados",
          "Melhora significativa na sobrevida",
          "Respostas podem ser duradouras"
        ],
        benefits: [
          "Melhora significativa na sobrevida",
          "Respostas podem ser duradouras",
          "Qualidade de vida preservada",
          "Pode levar à remissão completa da doença"
        ],
        administration: "Os medicamentos são aplicados por infusão intravenosa, dependendo do protocolo escolhido pelo oncologista."
      }
    },
    {
      title: "Imunoterapia no Carcinoma Espinocelular",
      description: "Cemiplimab e pembrolizumab aprovados para carcinoma espinocelular avançado localmente ou metastático.",
      beneficios: [
        "Opção para pacientes com tumores localmente avançados e metastáticos",
        "Melhora da qualidade de vida",
        "Controle da doença em casos refratários",
        "Perfil de segurança favorável"
      ],
      detailedInfo: {
        description: "A imunoterapia é um tratamento que fortalece o sistema imunológico para reconhecer e destruir células cancerígenas. No carcinoma espinocelular avançado da pele, representa uma opção terapêutica importante quando outros tratamentos não são adequados.",
        medications: "Inibidores de PD-1 (cemiplimab e pembrolizumab)",
        indications: [
          "Antes da Cirurgia (Neoadjuvante): Em tumores grandes que podem se beneficiar da redução de tamanho",
          "Após a Cirurgia (Adjuvante): Para prevenir recidiva em casos de alto risco",
          "Doença Avançada: Primeira opção quando cirurgia ou radioterapia não são viáveis"
        ],
        specificIndications: [
          "Carcinomas espinocelulares localmente avançados",
          "Tumores metastáticos", 
          "Casos com recidiva após tratamentos convencionais",
          "Pacientes não candidatos à cirurgia ou radioterapia"
        ],
        benefits: [
          "Controle da doença em casos avançados",
          "Melhora da qualidade de vida",
          "Respostas duradouras em alguns pacientes",
          "Alternativa quando cirurgia não é possível"
        ],
        administration: "O cemiplimab e pembrolizumab são administrados por infusão intravenosa, conforme protocolo médico."
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>Oncologia Cutânea - Dr. André Molina | Tratamento de Melanoma e Carcinomas São Paulo</title>
        <meta name="description" content="Dr. André Molina, especialista em oncologia cutânea em São Paulo. Informações completas sobre melanoma, carcinoma basocelular, carcinoma espinocelular, carcinoma de células de Merkel, dermatofibrossarcoma e imunoterapia. Tratamento especializado com técnicas avançadas." />
        <meta name="keywords" content="oncologia cutânea São Paulo, melanoma tratamento SP, carcinoma basocelular São Paulo, carcinoma espinocelular, câncer de pele São Paulo, Dr André Molina oncologia, dermatologia oncológica SP, imunoterapia melanoma, carcinoma células Merkel, dermatofibrossarcoma protuberante" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Oncologia Cutânea - Tratamento Especializado de Câncer de Pele" />
        <meta property="og:description" content="Informações detalhadas sobre melanoma, carcinomas e imunoterapia com Dr. André Molina, especialista em oncologia cutânea em São Paulo." />
        <meta property="og:url" content="https://andremedina.com.br/oncologia-cutanea" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Oncologia Cutânea - Dr. André Molina" />
        <meta name="twitter:description" content="Tratamento especializado em câncer de pele e melanoma" />
        
        {/* Medical Conditions */}
        <meta name="skin-cancer-types" content="Melanoma, Carcinoma Basocelular, Carcinoma Espinocelular, Carcinoma de Células de Merkel, Dermatofibrossarcoma" />
        <meta name="treatment-modalities" content="Imunoterapia, Cirurgia Oncológica, Terapia Alvo, Radioterapia Adjuvante" />
        <meta name="medical-information" content="Fatores de risco, patogenia, estadiamento, tratamento" />
        
        <link rel="canonical" href="https://andremedina.com.br/oncologia-cutanea" />
      </Helmet>
      
      <StructuredData type="article" data={{
        title: "Oncologia Cutânea - Tratamento de Câncer de Pele",
        description: "Informações especializadas sobre melanoma, carcinomas e tratamentos em oncologia cutânea",
        url: "https://andremedina.com.br/oncologia-cutanea"
      }} />
      <AIOptimization page="oncology" />

      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary">
                  <Microscope className="h-4 w-4" />
                  Oncologia Cutânea
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  Câncer de Pele
                  <span className="block text-primary">Informações Essenciais</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Conheça os principais tipos de câncer de pele, fatores de risco, 
                  tratamentos disponíveis e as mais modernas terapias oncológicas.
                </p>
              </div>
            </div>
          </section>

          {/* Condições Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="space-y-16">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Principais Tipos de Câncer de Pele
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Entenda as características, fatores de risco e tratamentos para cada tipo de tumor cutâneo.
                  </p>
                </div>

                <div className="space-y-12">
                  {condicoes.map((condicao, index) => (
                    <Card key={index} className="overflow-hidden border-0 shadow-lg">
                      <CardContent className="p-8">
                        <div className="grid lg:grid-cols-3 gap-8">
                          <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-foreground">
                              {condicao.title}
                            </h3>
                            
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold text-foreground mb-2">Incidência</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                  {condicao.incidencia}
                                </p>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold text-foreground mb-2">Fatores de Risco</h4>
                                <div className="space-y-2">
                                  {condicao.fatores.map((fator, idx) => (
                                    <div key={idx} className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                      <span className="text-muted-foreground text-sm">{fator}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Patogenia</h4>
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {condicao.patogenia}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Tratamento</h4>
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {condicao.tratamento}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Imunoterapia Section */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-4">
              <div className="space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Imunoterapia Oncológica
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Tratamentos inovadores que revolucionaram a oncologia cutânea.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {imunoterapias.map((terapia, index) => (
                    <Card key={index} className="overflow-hidden border-0 shadow-lg">
                      <CardContent className="p-8">
                          <div className="space-y-6">
                            <h3 className="text-xl font-bold text-foreground">
                              {terapia.title}
                            </h3>
                            
                            <p className="text-muted-foreground leading-relaxed">
                              {terapia.description}
                            </p>
                            
                            <div className="space-y-3">
                              <h4 className="font-semibold text-foreground">Benefícios:</h4>
                              {terapia.beneficios.map((beneficio, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground text-sm">{beneficio}</span>
                                </div>
                              ))}
                            </div>

                            {terapia.detailedInfo && (
                              <Button 
                                onClick={() => setExpandedImunotherapy(expandedImunotherapy === index ? null : index)}
                                className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 group"
                              >
                                {expandedImunotherapy === index ? 'Ver menos' : 'Saiba mais'}
                                {expandedImunotherapy === index ? (
                                  <ChevronDown className="h-4 w-4 ml-2 transition-transform rotate-180" />
                                ) : (
                                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                                )}
                              </Button>
                            )}

                          {/* Detailed Information Section */}
                          {terapia.detailedInfo && expandedImunotherapy === index && (
                            <div className="mt-6 pt-6 border-t border-border space-y-6">
                              <div className="space-y-4">
                                <h4 className="font-semibold text-foreground">O que é a Imunoterapia?</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                  {terapia.detailedInfo.description}
                                </p>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-foreground">Principais Medicamentos</h4>
                                <p className="text-muted-foreground text-sm">
                                  {terapia.detailedInfo.medications}
                                </p>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-foreground">Quando a Imunoterapia é Utilizada</h4>
                                <div className="space-y-2">
                                  {terapia.detailedInfo.indications.map((indication, idx) => (
                                    <div key={idx} className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                      <span className="text-muted-foreground text-sm">{indication}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-foreground">Indicações Específicas</h4>
                                <div className="space-y-2">
                                  {terapia.detailedInfo.specificIndications.map((indication, idx) => (
                                    <div key={idx} className="flex items-start gap-2">
                                      <Target className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                      <span className="text-muted-foreground text-sm">{indication}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold text-foreground">Administração</h4>
                                <p className="text-muted-foreground text-sm">
                                  {terapia.detailedInfo.administration}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
            <div className="container mx-auto px-4 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Tem Suspeita de Câncer de Pele?
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  O diagnóstico precoce é fundamental. Agende uma consulta especializada 
                  para avaliação e orientações personalizadas.
                </p>
              </div>

              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-50 rounded-full px-8 py-6 text-lg group"
              >
                <Target className="h-5 w-5 mr-2" />
                Agendar Avaliação
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default OncologiaCutanea;