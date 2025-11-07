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
  Stethoscope,
  FileText,
  ExternalLink
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

  const publications = [
    {
      title: "Metastatic area ratio can help predict nonsentinel node positivity in melanoma patients",
      journal: "Melanoma Res (2016)",
      year: 2016,
      type: "Melanoma",
      abstract: "Estudo sobre a relação entre a área metastática e a positividade de linfonodos não-sentinela em pacientes com melanoma.",
      link: "https://pubmed.ncbi.nlm.nih.gov/26397049/"
    },
    {
      title: "Isolated limb perfusion with hyperthermia and chemotherapy: predictive factors for regional toxicity",
      journal: "Clinics (Sao Paulo) (2012)",
      year: 2012,
      type: "Perfusão Isolada de Membro",
      abstract: "Análise dos fatores preditivos para toxicidade regional em perfusão isolada de membro com hipertermia e quimioterapia.",
      link: "https://pubmed.ncbi.nlm.nih.gov/22473404/"
    },
    {
      title: "Isolated limb infusion with hyperthermia and chemotherapy for advanced limb malignancy: factors influencing toxicity",
      journal: "ANZ J Surg (2014)",
      year: 2014,
      type: "Perfusão Isolada de Membro",
      abstract: "Estudo sobre fatores que influenciam a toxicidade em infusão isolada de membro para malignidades avançadas.",
      link: "https://pubmed.ncbi.nlm.nih.gov/22998400/"
    },
    {
      title: "Artificial dermis (Matriderm®) followed by skin graft as an option in dermatofibrosarcoma protuberans with complete circumferential and peripheral deep margin assessment",
      journal: "Int Wound J (2015)",
      year: 2015,
      type: "Dermatofibrossarcoma",
      abstract: "Uso de derme artificial seguida de enxerto de pele no tratamento de dermatofibrossarcoma protuberans.",
      link: "https://pubmed.ncbi.nlm.nih.gov/24102765/"
    },
    {
      title: "Dermatofibrosarcoma protuberans of the vulva: margins assessment and reconstructive options - a report of two cases",
      journal: "World J Surg Oncol (2014)",
      year: 2014,
      type: "Dermatofibrossarcoma",
      abstract: "Relato de dois casos de dermatofibrossarcoma protuberans da vulva com avaliação de margens e opções reconstrutivas.",
      link: "https://pubmed.ncbi.nlm.nih.gov/25547686/"
    },
    {
      title: "Evaluation of melanoma features and their relationship with nodal disease: the importance of the pathological report",
      journal: "Tumori (2015)",
      year: 2015,
      type: "Melanoma",
      abstract: "Avaliação das características do melanoma e sua relação com doença nodal: a importância do relatório patológico.",
      link: "https://pubmed.ncbi.nlm.nih.gov/25983100/"
    },
    {
      title: "Popliteal sentinel lymph node involvement in melanoma patients",
      journal: "Clinical Study (2015)",
      year: 2015,
      type: "Linfonodo Sentinela",
      abstract: "Estudo sobre o envolvimento do linfonodo sentinela poplíteo em pacientes com melanoma.",
      link: "https://pubmed.ncbi.nlm.nih.gov/26227662/"
    },
    {
      title: "Relapse in dermatofibrosarcoma protuberans: A histological and molecular analysis",
      journal: "Research Article (2018)",
      year: 2018,
      type: "Dermatofibrossarcoma",
      abstract: "Análise histológica e molecular da recidiva em dermatofibrossarcoma protuberans.",
      link: "https://pubmed.ncbi.nlm.nih.gov/29509956/"
    },
    {
      title: "Local therapy in advanced melanoma after immune checkpoint inhibitors aiming to achieve complete response",
      journal: "Clinical Study (2024)",
      year: 2024,
      type: "Melanoma",
      abstract: "Terapia local em melanoma avançado após inibidores de checkpoint imunológico visando resposta completa.",
      link: "https://pubmed.ncbi.nlm.nih.gov/38845222/"
    },
    {
      title: "Brazilian Society of Surgical Oncology recommendations on Merkel cell carcinoma surgical treatment",
      journal: "Guidelines (2024)",
      year: 2024,
      type: "Carcinoma de Merkel",
      abstract: "Recomendações da Sociedade Brasileira de Oncologia Cirúrgica sobre o tratamento cirúrgico do carcinoma de células de Merkel.",
      link: "https://pubmed.ncbi.nlm.nih.gov/39181759/"
    },
    {
      title: "Confocal reflectance microscopy in basal cell carcinoma associated with nevus sebaceous: case report",
      journal: "Case Report (2005)",
      year: 2005,
      type: "Carcinoma Basocelular",
      abstract: "Microscopia confocal de reflectância em carcinoma basocelular associado a nevo sebáceo: relato de caso.",
      link: "https://pubmed.ncbi.nlm.nih.gov/15745524/"
    },
    {
      title: "Metabolic investigation of patients with urolithiasis in a specific region",
      journal: "Research Article (2023)",
      year: 2023,
      type: "Urologia",
      abstract: "Investigação metabólica de pacientes com urolitíase em uma região específica.",
      link: "https://pubmed.ncbi.nlm.nih.gov/36766767/"
    }
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
                {/* Photo */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
                    <img 
                      src={drMolinaPhoto}
                      alt="Dr. André Molina - Cirurgião Oncológico especialista em Oncologia Cutânea"
                      className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-2xl ring-4 ring-primary/20"
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                </div>
                
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

          {/* Publicações Científicas */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center space-y-4 mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500 text-white mb-6">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Publicações Científicas
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Contribuições acadêmicas e científicas para o avanço da cirurgia oncológica e oncologia cutânea
                  </p>
                </div>

                <div className="grid gap-6">
                  {publications.map((pub, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
                          <div className="flex-1 space-y-3">
                            <div className="flex items-start gap-2">
                              <FileText className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                              <div className="space-y-2">
                                <h3 className="text-xl font-semibold leading-tight">
                                  {pub.title}
                                </h3>
                                <p className="text-base text-muted-foreground">
                                  {pub.journal} • {pub.year}
                                </p>
                              </div>
                            </div>
                            {pub.abstract && (
                              <p className="text-sm text-muted-foreground leading-relaxed pl-7">
                                {pub.abstract}
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col items-start md:items-end gap-2 pl-7 md:pl-0">
                            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300">
                              {pub.type}
                            </span>
                            <a 
                              href={pub.link}
                              className="text-cyan-500 hover:text-cyan-600 transition-colors flex items-center gap-1 text-sm font-medium"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Ver publicação
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Info Box */}
                <div className="mt-12 p-6 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-900">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Compromisso com a Ciência
                  </h3>
                  <p className="text-muted-foreground">
                    O Dr. André Molina mantém ativo envolvimento em pesquisas científicas e publicações acadêmicas, 
                    contribuindo para o avanço do conhecimento em cirurgia oncológica e oncologia cutânea. 
                    Seu trabalho visa melhorar continuamente os tratamentos e resultados para pacientes oncológicos.
                  </p>
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