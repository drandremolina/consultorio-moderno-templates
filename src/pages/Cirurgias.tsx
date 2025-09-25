import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Scissors, 
  Search, 
  Target, 
  Heart, 
  Microscope, 
  ShieldCheck,
  ArrowRight,
  Clock,
  Award
} from "lucide-react";
import { Helmet } from "react-helmet";

const Cirurgias = () => {
  const procedimentos = [
    {
      icon: <Target className="h-8 w-8" />,
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
      icon: <Scissors className="h-8 w-8" />,
      title: "Cirurgia de Mohs",
      description: "Técnica cirúrgica para remoção de tumores cutâneos com preservação máxima de tecido saudável.",
      details: [
        "Controle microscópico das margens em tempo real",
        "Preservação de tecido normal",
        "Menor necessidade de reconstrução"
      ]
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Biópsia de Linfonodo Sentinela",
      description: "Procedimento minimamente invasivo para detectar disseminação de células tumorais nos linfonodos regionais.",
      details: [
        "Técnica minimamente invasiva",
        "Estadiamento preciso do melanoma",
        "Redução da morbidade cirúrgica",
        "Guia para decisões terapêuticas"
      ]
    },
    {
      icon: <Heart className="h-8 w-8" />,
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
        <title>Cirurgias Oncológicas - Dr. André Molina | Especialista em Oncologia Cutânea</title>
        <meta name="description" content="Cirurgias oncológicas especializadas: ampliação de margens, cirurgia de Mohs, biópsia de linfonodo sentinela, perfusão isolada de membro. Dr. André Molina, cirurgião oncológico em São Paulo." />
        <meta name="keywords" content="cirurgia de mohs, ampliação de margens, biópsia linfonodo sentinela, perfusão isolada de membro, cirurgia oncológica, André Molina, melanoma, carcinoma basocelular" />
        <meta property="og:title" content="Cirurgias Oncológicas - Dr. André Molina" />
        <meta property="og:description" content="Especialista em cirurgias oncológicas cutâneas com técnicas avançadas e cuidado personalizado." />
        <link rel="canonical" href="/cirurgias" />
      </Helmet>

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
                  <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white">
                        {procedimento.icon}
                      </div>
                      
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

                      <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 group">
                        Saiba mais
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <Card className="overflow-hidden border-0 shadow-lg">
                        <CardContent className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                          <div className="aspect-video bg-white rounded-xl flex items-center justify-center">
                            <div className="text-center space-y-4">
                              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white">
                                {procedimento.icon}
                              </div>
                              <div className="text-muted-foreground">
                                Imagem ilustrativa do procedimento
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
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