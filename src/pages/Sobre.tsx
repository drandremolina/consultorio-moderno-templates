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
import StructuredData from "@/components/SEO/StructuredData";
import AIOptimization from "@/components/SEO/AIOptimization";
import { Helmet } from "react-helmet";
import drMolinaPhoto from "@/assets/dr-andre-molina-photo.jpg";

const Sobre = () => {
  const formacao = [
    "Graduação em Medicina - Universidade Estadual do Oeste do Paraná",
    "Residência em Cirurgia Oncológica - A. C. Camargo Cancer Center",
    "Mestrado em Oncologia",
    "Membro do Grupo Brasileiro de Melanoma",
    "Membro da Sociedade Brasileira de Cirurgia Oncológica"
  ];


  const membros = [
    "Grupo Brasileiro de Melanoma",
    "Sociedade Brasileira de Cirurgia Oncológica"
  ];

  return (
    <>
      <Helmet>
        <title>Dr. André Molina - Sobre | Cirurgião Oncológico Especialista em Oncologia Cutânea</title>
        <meta name="description" content="Conheça a trajetória do Dr. André Molina, cirurgião oncológico com especialização em oncologia cutânea. Formação acadêmica pela Universidade Estadual do Oeste do Paraná, residência no A.C. Camargo Cancer Center, membro do Grupo Brasileiro de Melanoma e dedicação ao tratamento personalizado do câncer de pele em São Paulo." />
        <meta name="keywords" content="Dr André Molina sobre, Andre Molina formação, especialização oncologia cutânea, A.C. Camargo residência, Grupo Brasileiro Melanoma, cirurgião oncológico São Paulo, curriculum médico, trajetória profissional oncologia, formação acadêmica oncologia cutânea" />
        
        {/* Open Graph */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Sobre Dr. André Molina - Cirurgião Oncológico Especialista" />
        <meta property="og:description" content="Trajetória profissional, formação acadêmica pela Universidade Estadual do Oeste do Paraná e especialização em oncologia cutânea do Dr. André Molina em São Paulo." />
        <meta property="og:url" content="https://drandremolina.lovable.app/sobre" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Sobre Dr. André Molina" />
        <meta name="twitter:description" content="Formação e experiência em oncologia cutânea" />
        
        {/* Professional Context */}
        <meta name="professional-background" content="Medicina Universidade Estadual do Oeste do Paraná, Cirurgia Geral, Oncologia Cutânea A.C. Camargo" />
        <meta name="medical-education" content="Especialização em Cirurgia Oncológica, Mestrado em Oncologia" />
        <meta name="professional-memberships" content="Grupo Brasileiro de Melanoma, Sociedade Brasileira de Cirurgia Oncológica" />
        
        <link rel="canonical" href="https://drandremolina.lovable.app/sobre" />
      </Helmet>
      
      <StructuredData type="person" />
      <AIOptimization page="about" />

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
              <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-foreground">
                      Sobre o Dr. André Molina
                    </h2>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      O Dr. André Molina é médico formado pela Universidade Estadual do Oeste do Paraná e realizou residência em Cirurgia Oncológica no A.C. Camargo Cancer Center, instituição de referência no tratamento do câncer na América Latina.
                    </p>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Concluiu o Mestrado em Oncologia, dedicando-se ao aperfeiçoamento das práticas cirúrgicas e ao cuidado integral do paciente oncológico.
                    </p>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Concluiu o programa PPCR - Principles and Practice of Clinical Research - Harvard T.H. Chan School of Public Health, e atualmente atua como Teaching Assistant do programa.
                    </p>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      É membro do Grupo Brasileiro de Melanoma e da Sociedade Brasileira de Cirurgia Oncológica, participando ativamente de congressos, pesquisas e discussões científicas que atualizam e consolidam sua prática clínica.
                    </p>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Seu trabalho é pautado pelo rigor técnico, atualização constante e compromisso em oferecer um atendimento de excelência aos pacientes.
                    </p>
                  </div>

                  {/* Lattes CV Link */}
                  <div className="pt-4">
                    <a 
                      href="http://lattes.cnpq.br/3560266661123900" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      <BookOpen className="h-4 w-4" />
                      Currículo Lattes
                      <ArrowRight className="h-4 w-4" />
                    </a>
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
                  <div className="flex justify-center">
                    <div className="relative w-72 h-72">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl"></div>
                      <img 
                        src={drMolinaPhoto}
                        alt="Dr. André Molina - Cirurgião Oncológico especialista em Oncologia Cutânea"
                        className="relative w-full h-full rounded-full object-cover object-center shadow-2xl"
                        style={{ objectPosition: '50% 20%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Especialidades */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Especialidades
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Áreas de atuação e procedimentos especializados.
                  </p>
                </div>

                <div className="space-y-8">
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

                <div className="space-y-8">
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
                          <a href="https://maps.app.goo.gl/aH8Fc7qk3miLDEro6" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            <p className="text-foreground font-medium hover:text-primary transition-colors">Rua Adma Jafet, 74, cj 161</p>
                            <p className="text-muted-foreground hover:text-primary transition-colors">Bela Vista, São Paulo - SP</p>
                            <p className="text-muted-foreground hover:text-primary transition-colors">CEP 01308-050</p>
                          </a>
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