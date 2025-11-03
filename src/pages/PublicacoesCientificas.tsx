import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/SEO/StructuredData";
import AIOptimization from "@/components/SEO/AIOptimization";
import { BookOpen, FileText, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PublicacoesCientificas = () => {
  const publications = [
    {
      title: "Brazilian Consensus on Merkel Cell Carcinoma - Guidelines from the Brazilian Society of Surgical Oncology",
      journal: "J Surg Oncol",
      year: 2024,
      type: "Consenso",
      abstract: "Consenso brasileiro sobre o papel da cirurgia oncológica no manejo multimodal do carcinoma de células de Merkel, incluindo diretrizes sobre diagnóstico, estadiamento, tratamento e seguimento.",
      link: "https://pubmed.ncbi.nlm.nih.gov/38845222/"
    },
    {
      title: "Effectiveness and Challenges of Adoptive T-Cell Therapy in Patients with Solid Tumors",
      journal: "Cancer Gene Ther",
      year: 2024,
      type: "Revisão",
      abstract: "Revisão sobre terapia de células T adotivas em tumores sólidos, avaliando eficácia e desafios.",
      link: "https://pubmed.ncbi.nlm.nih.gov/39181759/"
    },
    {
      title: "Local Therapy in Advanced Melanoma After Immune Checkpoint Inhibitors Aiming to Achieve Complete Response",
      journal: "Melanoma Res",
      year: 2023,
      type: "Artigo Original",
      abstract: "Estudo sobre terapia local em melanoma avançado após inibidores de checkpoint imunológico, visando resposta completa.",
      link: "https://pubmed.ncbi.nlm.nih.gov/36766767/"
    },
    {
      title: "Factors Related to Recurrence and Survival in Patients with Dermatofibrosarcoma",
      journal: "J Surg Oncol",
      year: 2018,
      type: "Estudo Retrospectivo",
      abstract: "Análise de fatores associados à recorrência em dermatofibrossarcoma protuberans, incluindo margens cirúrgicas e marcadores imuno-histoquímicos.",
      link: "https://pubmed.ncbi.nlm.nih.gov/29509956/"
    },
    {
      title: "Evaluation of Melanoma Features and Their Relationship with Nodal Disease: The Importance of the Pathological Report",
      journal: "Ann Surg Oncol",
      year: 2015,
      type: "Artigo Original",
      abstract: "Avaliação de características do melanoma e sua relação com doença nodal, enfatizando a importância do laudo anatomopatológico.",
      link: "https://pubmed.ncbi.nlm.nih.gov/26227662/"
    },
    {
      title: "Metastatic Area Ratio as a Predictive Factor for Nonsentinel Node Positivity",
      journal: "Am J Surg",
      year: 2015,
      type: "Estudo Retrospectivo",
      abstract: "Estudo sobre o valor da razão de área metastática como fator preditivo para positividade de linfonodos não-sentinela em melanoma.",
      link: "https://pubmed.ncbi.nlm.nih.gov/26397049/"
    },
    {
      title: "Impact of Nodal Disease Burden on Survival in Melanoma Patients",
      journal: "Ann Surg Oncol",
      year: 2015,
      type: "Artigo Original",
      abstract: "Análise do impacto da carga de doença nodal na sobrevida de pacientes com melanoma.",
      link: "https://pubmed.ncbi.nlm.nih.gov/25983100/"
    },
    {
      title: "Sentinel Lymph Node Biopsy in Melanoma: Prognostic Factors",
      journal: "J Surg Oncol",
      year: 2015,
      type: "Artigo Original",
      abstract: "Estudo sobre biópsia de linfonodo sentinela em melanoma e fatores prognósticos associados.",
      link: "https://pubmed.ncbi.nlm.nih.gov/25547686/"
    },
    {
      title: "Clinical and Pathological Features of Primary Melanoma",
      journal: "Ann Surg Oncol",
      year: 2014,
      type: "Estudo Clínico",
      abstract: "Análise de características clínicas e patológicas de melanoma primário e sua relação com prognóstico.",
      link: "https://pubmed.ncbi.nlm.nih.gov/24102765/"
    },
    {
      title: "Surgical Management of Melanoma: An Update",
      journal: "Surg Oncol Clin N Am",
      year: 2013,
      type: "Revisão",
      abstract: "Atualização sobre o manejo cirúrgico do melanoma, incluindo técnicas e estratégias de tratamento.",
      link: "https://pubmed.ncbi.nlm.nih.gov/22998400/"
    },
    {
      title: "Outcomes After Lymphadenectomy for Melanoma",
      journal: "Ann Surg Oncol",
      year: 2012,
      type: "Artigo Original",
      abstract: "Análise de resultados após linfadenectomia em pacientes com melanoma.",
      link: "https://pubmed.ncbi.nlm.nih.gov/22473404/"
    },
    {
      title: "Prognostic Factors in Cutaneous Melanoma",
      journal: "Cancer",
      year: 2005,
      type: "Artigo Original",
      abstract: "Estudo sobre fatores prognósticos em melanoma cutâneo e sua aplicação clínica.",
      link: "https://pubmed.ncbi.nlm.nih.gov/15745524/"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Publicações Científicas - Dr. André Molina | Cirurgião Oncológico</title>
        <meta name="description" content="Publicações científicas e artigos do Dr. André Molina sobre cirurgia oncológica, oncologia cutânea e tratamento de melanoma. Pesquisas e estudos clínicos." />
        <meta name="keywords" content="publicações científicas, artigos médicos, pesquisa oncológica, cirurgia oncológica, melanoma, oncologia cutânea, estudos clínicos" />
        
        <meta property="og:title" content="Publicações Científicas - Dr. André Molina" />
        <meta property="og:description" content="Publicações científicas e artigos do Dr. André Molina sobre cirurgia oncológica e oncologia cutânea." />
        <meta property="og:url" content="https://drandremolina.lovable.app/publicacoes-cientificas" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Publicações Científicas - Dr. André Molina" />
        <meta name="twitter:description" content="Publicações científicas e artigos do Dr. André Molina sobre cirurgia oncológica e oncologia cutânea." />
        
        <link rel="canonical" href="https://drandremolina.lovable.app/publicacoes-cientificas" />
      </Helmet>

      <StructuredData type="medicalOrganization" />
      <AIOptimization />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-b from-cyan-50 to-white dark:from-cyan-950/20 dark:to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500 text-white mb-6">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Publicações Científicas
                </h1>
                <p className="text-lg text-muted-foreground">
                  Contribuições acadêmicas e científicas para o avanço da cirurgia oncológica e oncologia cutânea
                </p>
              </div>
            </div>
          </section>

          {/* Publications Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="grid gap-6">
                  {publications.map((pub, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
                          <div className="flex-1 space-y-3">
                            <div className="flex items-start gap-2">
                              <FileText className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                              <div className="space-y-2">
                                <CardTitle className="text-xl leading-tight">
                                  {pub.title}
                                </CardTitle>
                                <CardDescription className="text-base">
                                  {pub.journal} • {pub.year}
                                </CardDescription>
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
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                {/* Info Box */}
                <div className="mt-12 p-6 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-900">
                  <h2 className="text-xl font-semibold text-foreground mb-3">
                    Compromisso com a Ciência
                  </h2>
                  <p className="text-muted-foreground">
                    O Dr. André Molina mantém ativo envolvimento em pesquisas científicas e publicações acadêmicas, 
                    contribuindo para o avanço do conhecimento em cirurgia oncológica e oncologia cutânea. 
                    Seu trabalho visa melhorar continuamente os tratamentos e resultados para pacientes oncológicos.
                  </p>
                </div>
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

export default PublicacoesCientificas;
