import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  Users, 
  BookOpen,
  CheckCircle,
  ArrowRight,
  MapPin,
  Calendar,
  Stethoscope
} from "lucide-react";
import { Helmet } from "react-helmet";

const Sobre = () => {
  const formacao = [
    "Graduação em Medicina - Universidade Estadual do Oeste do Paraná (UNIOESTE)",
    "Residência em Cirurgia Oncológica - A. C. Camargo Cancer Center",
    "Mestrado em Oncologia",
    "Membro do Grupo Brasileiro de Melanoma",
    "Membro da Sociedade Brasileira de Cirurgia Oncológica"
  ];

  const especializacoes = [
    "Cirurgia Oncológica Cutânea",
    "Cirurgia de Mohs",
    "Biópsia de Linfonodo Sentinela",
    "Perfusão Isolada de Membro",
    "Ampliação de Margens Cirúrgicas",
    "Tratamento de Melanoma",
    "Tratamento de Carcinomas Cutâneos"
  ];

  const membros = [
    "Grupo Brasileiro de Melanoma",
    "Sociedade Brasileira de Cirurgia Oncológica",
    "Sociedade Brasileira de Dermatologia (Associate)",
    "International Society of Surgical Oncology"
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Dr. André Molina - Cirurgião Oncológico Especialista em Oncologia Cutânea</title>
        <meta name="description" content="Conheça o Dr. André Molina, cirurgião oncológico especializado em oncologia cutânea. Formação pela UNIOESTE, residência no A.C. Camargo, membro do Grupo Brasileiro de Melanoma." />
        <meta name="keywords" content="André Molina, cirurgião oncológico, oncologia cutânea, UNIOESTE, A.C. Camargo, Grupo Brasileiro de Melanoma, CRM-SP 113993" />
        <meta property="og:title" content="Sobre Dr. André Molina - Cirurgião Oncológico" />
        <meta property="og:description" content="Cirurgião oncológico especializado em oncologia cutânea com vasta experiência em tratamento de melanoma e carcinomas de pele." />
        <link rel="canonical" href="/sobre" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary">
                  <Stethoscope className="h-4 w-4" />
                  Sobre o Especialista
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  Dr. André Molina
                  <span className="block text-primary">Cirurgião Oncológico</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Especialista em Oncologia Cutânea com vasta experiência em cirurgias oncológicas 
                  e tratamento de melanoma e carcinomas de pele.
                </p>
                
                <div className="text-lg text-primary font-medium">
                  CRM-SP 113993 | RQE 68140
                </div>
              </div>
            </div>
          </section>

          {/* Perfil Profissional */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-foreground">
                      Perfil Profissional
                    </h2>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                       O Dr. André Molina é cirurgião oncológico especializado em oncologia cutânea, 
                       com vasta experiência clínica no tratamento de tumores de pele, especialmente 
                       melanoma e carcinomas cutâneos.
                     </p>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Sua trajetória profissional é marcada pela dedicação ao aprimoramento 
                      contínuo e pela busca das mais modernas técnicas cirúrgicas, sempre 
                      priorizando o cuidado humanizado e personalizado para cada paciente.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Especialização</h3>
                      <p className="text-muted-foreground">Cirurgia Oncológica - Oncologia Cutânea</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="overflow-hidden border-0 shadow-lg">
                    <CardContent className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                      <div className="aspect-square bg-white rounded-2xl flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-2xl font-bold">
                            AM
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-xl font-bold text-foreground">Dr. André Molina</h3>
                            <p className="text-muted-foreground">Cirurgião Oncológico</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Especialidades */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-4">
              <div className="space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Especialidades
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Áreas de atuação e procedimentos especializados.
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white">
                          <GraduationCap className="h-8 w-8" />
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-foreground">
                            Formação
                          </h3>
                          
                          <div className="space-y-3">
                            {formacao.map((item, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white">
                          <Award className="h-8 w-8" />
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-foreground">
                            Especializações
                          </h3>
                          
                          <div className="space-y-3">
                            {especializacoes.map((item, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white">
                          <Users className="h-8 w-8" />
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-foreground">
                            Membros & Sociedades
                          </h3>
                          
                          <div className="space-y-3">
                            {membros.map((item, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Informações de Contato */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center space-y-4 mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Informações de Contato
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Agende sua consulta e receba atendimento especializado.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <MapPin className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground">Localização</h3>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-foreground font-medium">Rua Adma Jafet, 74, cj 161</p>
                          <p className="text-muted-foreground">Bela Vista, São Paulo - SP</p>
                          <p className="text-muted-foreground">CEP 01308-050</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <Calendar className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground">Horário</h3>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-foreground font-medium">Segunda a Sexta</p>
                          <p className="text-muted-foreground">8h às 19h</p>
                          <p className="text-muted-foreground text-sm">
                            *Atendimento mediante agendamento
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
            <div className="container mx-auto px-4 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Agende sua Consulta
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Receba atendimento especializado em oncologia cutânea com 
                  cuidado personalizado e tecnologia de ponta.
                </p>
              </div>

              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-50 rounded-full px-8 py-6 text-lg group"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Marcar Consulta
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

export default Sobre;