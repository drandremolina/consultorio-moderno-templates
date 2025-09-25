import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Info, 
  AlertTriangle, 
  Activity, 
  Shield,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const OncologiaCutanea = () => {
  const conditions = [
    {
      title: "Melanoma",
      description: "Tumor maligno originado dos melanócitos, células produtoras de melanina.",
      incidence: "Representa 4% dos cânceres de pele, mas é responsável por 80% das mortes.",
      riskFactors: [
        "Exposição solar excessiva",
        "Histórico familiar",
        "Múltiplas pintas",
        "Pele clara",
        "Queimaduras solares na infância"
      ],
      treatment: "O tratamento varia conforme o estágio, incluindo excisão cirúrgica, biópsia de linfonodo sentinela, imunoterapia e terapias-alvo."
    },
    {
      title: "Carcinoma Basocelular",
      description: "Tumor mais comum da pele, originado das células basais da epiderme.",
      incidence: "Representa 70% dos cânceres de pele não-melanoma.",
      riskFactors: [
        "Exposição solar crônica",
        "Idade avançada",
        "Pele clara",
        "Radiação ionizante",
        "Imunossupressão"
      ],
      treatment: "Excisão cirúrgica simples, cirurgia de Mohs, crioterapia ou terapias tópicas dependendo da localização e tamanho."
    },
    {
      title: "Carcinoma Espinocelular da Pele",
      description: "Tumor originado dos queratinócitos da camada espinhosa da epiderme.",
      incidence: "Segundo câncer de pele mais comum, com potencial metastático.",
      riskFactors: [
        "Exposição solar cumulativa",
        "Queratoses actínicas",
        "Imunossupressão",
        "Infecção por HPV",
        "Cicatrizes crônicas"
      ],
      treatment: "Excisão cirúrgica com margens adequadas, radioterapia em casos selecionados e imunoterapia para casos avançados."
    },
    {
      title: "Carcinoma de Células de Merkel",
      description: "Tumor neuroendócrino raro e agressivo da pele.",
      incidence: "Extremamente raro, com incidência de 0,7 casos por 100.000 habitantes/ano.",
      riskFactors: [
        "Idade avançada",
        "Exposição solar",
        "Imunossupressão",
        "Poliomavírus de Merkel",
        "Pele clara"
      ],
      treatment: "Excisão ampla, biópsia de linfonodo sentinela, radioterapia adjuvante e imunoterapia para casos metastáticos."
    },
    {
      title: "Dermatofibrossarcoma Protuberante",
      description: "Sarcoma cutâneo de baixo grau com alto potencial de recidiva local.",
      incidence: "Tumor raro, representando menos de 1% dos sarcomas de partes moles.",
      riskFactors: [
        "Trauma local prévio",
        "Predisposição genética",
        "Não relacionado à exposição solar"
      ],
      treatment: "Excisão ampla com margens extensas, cirurgia de Mohs ou terapia-alvo com imatinibe em casos avançados."
    }
  ];

  const immunotherapyInfo = [
    {
      title: "Imunoterapia no Melanoma",
      description: "Revolução no tratamento do melanoma avançado com inibidores de checkpoint imunológico.",
      content: "Os inibidores de PD-1 (pembrolizumab, nivolumab) e CTLA-4 (ipilimumab) transformaram o prognóstico do melanoma metastático. Estas medicações ativam o sistema imunológico para reconhecer e destruir as células tumorais. A resposta pode ser duradoura, com alguns pacientes mantendo remissão completa por anos."
    },
    {
      title: "Imunoterapia no Carcinoma Espinocelular",
      description: "Opção terapêutica para casos avançados e não ressecáveis.",
      content: "O pembrolizumab é aprovado para carcinomas espinocelulares cutâneos localmente avançados ou metastáticos. A imunoterapia oferece uma alternativa importante para tumores que não respondem à cirurgia ou radioterapia, especialmente em pacientes imunossuprimidos."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
                <Info className="h-4 w-4" />
                Informações Médicas
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Oncologia Cutânea
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Informações detalhadas sobre os principais tipos de câncer de pele, 
                fatores de risco, diagnóstico e opções de tratamento.
              </p>
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tipos de Câncer de Pele
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Conheça os principais tipos de tumores cutâneos, suas características e tratamentos.
              </p>
            </div>

            <div className="space-y-8">
              {conditions.map((condition, index) => (
                <Card key={index} className="card-medical rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl gradient-medical flex items-center justify-center text-white">
                        <AlertTriangle className="h-6 w-6" />
                      </div>
                      {condition.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground">
                      {condition.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Incidência:</h4>
                      <p className="text-muted-foreground">{condition.incidence}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Fatores de Risco:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {condition.riskFactors.map((factor, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            {factor}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Tratamento:</h4>
                      <p className="text-muted-foreground">{condition.treatment}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Immunotherapy Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Imunoterapia
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Avanços revolucionários no tratamento de tumores cutâneos avançados.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {immunotherapyInfo.map((info, index) => (
                <Card key={index} className="card-medical rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl gradient-medical flex items-center justify-center text-white">
                        <Shield className="h-6 w-6" />
                      </div>
                      {info.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground">
                      {info.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{info.content}</p>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 group/btn mt-6"
                    >
                      Saiba mais
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default OncologiaCutanea;