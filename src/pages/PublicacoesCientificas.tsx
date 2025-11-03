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
      title: "Metastatic area ratio can help predict nonsentinel node positivity in melanoma patients",
      journal: "Journal of Surgical Oncology",
      year: 2015,
      type: "Artigo Original",
      abstract: "Estudo sobre a relação entre a proporção de área metastática e a positividade de linfonodos não-sentinela em pacientes com melanoma.",
      link: "https://pubmed.ncbi.nlm.nih.gov/26397049/"
    },
    {
      title: "Isolated limb perfusion with hyperthermia and chemotherapy: predictive factors for regional toxicity",
      journal: "Annals of Surgical Oncology",
      year: 2012,
      type: "Artigo Original",
      abstract: "Análise dos fatores preditivos de toxicidade regional em perfusão isolada de membro com hipertermia e quimioterapia.",
      link: "https://pubmed.ncbi.nlm.nih.gov/22473404/"
    },
    {
      title: "Isolated limb infusion with hyperthermia and chemotherapy for advanced limb malignancy: factors influencing toxicity",
      journal: "Journal of Surgical Oncology",
      year: 2012,
      type: "Artigo Original",
      abstract: "Investigação dos fatores que influenciam a toxicidade em infusão isolada de membro para malignidades avançadas.",
      link: "https://pubmed.ncbi.nlm.nih.gov/22998400/"
    },
    {
      title: "Artificial dermis (Matriderm®) followed by skin graft as an option in dermatofibrosarcoma protuberans with complete circumferential and peripheral deep margin assessment",
      journal: "Journal of Skin Cancer",
      year: 2013,
      type: "Relato de Caso",
      abstract: "Uso de derme artificial seguida de enxerto de pele em dermatofibrosarcoma protuberans com avaliação completa de margens.",
      link: "https://pubmed.ncbi.nlm.nih.gov/24102765/"
    },
    {
      title: "Dermatofibrosarcoma protuberans of the vulva: margins assessment and reconstructive options - a report of two cases",
      journal: "Journal of Lower Genital Tract Disease",
      year: 2015,
      type: "Relato de Caso",
      abstract: "Relato de casos sobre avaliação de margens e opções reconstrutivas em dermatofibrosarcoma protuberans da vulva.",
      link: "https://pubmed.ncbi.nlm.nih.gov/25547686/"
    },
    {
      title: "Evaluation of melanoma features and their relationship with nodal disease: the importance of the pathological report",
      journal: "Melanoma Research",
      year: 2015,
      type: "Artigo Original",
      abstract: "Avaliação das características do melanoma e sua relação com doença nodal, destacando a importância do laudo patológico.",
      link: "https://pubmed.ncbi.nlm.nih.gov/25983100/"
    },
    {
      title: "Popliteal sentinel lymph node involvement in melanoma patients",
      journal: "Melanoma Research",
      year: 2015,
      type: "Artigo Original",
      abstract: "Estudo sobre o envolvimento do linfonodo sentinela poplíteo em pacientes com melanoma.",
      link: "https://pubmed.ncbi.nlm.nih.gov/26227662/"
    },
    {
      title: "Relapse in dermatofibrosarcoma protuberans: A histological and molecular analysis",
      journal: "Journal of Surgical Oncology",
      year: 2018,
      type: "Artigo Original",
      abstract: "Análise histológica e molecular da recidiva em dermatofibrosarcoma protuberans.",
      link: "https://pubmed.ncbi.nlm.nih.gov/29509956/"
    },
    {
      title: "Role of Annexin A1 Secreted by Neutrophils in Melanoma Metastasis",
      journal: "International Journal of Molecular Sciences",
      year: 2023,
      type: "Artigo Original",
      abstract: "Estudo sobre o papel da Anexina A1 secretada por neutrófilos na metástase do melanoma.",
      link: "https://pubmed.ncbi.nlm.nih.gov/36766767/"
    },
    {
      title: "Local therapy in advanced melanoma after immune checkpoint inhibitors aiming to achieve complete response",
      journal: "Journal of Clinical Oncology",
      year: 2024,
      type: "Artigo Original",
      abstract: "Terapia local em melanoma avançado após inibidores de checkpoint imunológico visando resposta completa.",
      link: "https://pubmed.ncbi.nlm.nih.gov/38845222/"
    },
    {
      title: "Brazilian Society of Surgical Oncology recommendations on Merkel cell carcinoma surgical treatment",
      journal: "Brazilian Journal of Oncology",
      year: 2024,
      type: "Consenso",
      abstract: "Recomendações da Sociedade Brasileira de Cirurgia Oncológica sobre tratamento cirúrgico do carcinoma de células de Merkel.",
      link: "https://pubmed.ncbi.nlm.nih.gov/38845222/"
    },
    {
      title: "Confocal reflectance microscopy in basal cell carcinoma associated with nevus sebaceous: case report",
      journal: "Journal of Dermatological Case Reports",
      year: 2024,
      type: "Relato de Caso",
      abstract: "Relato de caso sobre microscopia confocal de reflectância em carcinoma basocelular associado a nevo sebáceo.",
      link: "https://pubmed.ncbi.nlm.nih.gov/39181759/"
    },
    {
      title: "Metabolic investigation of patients with urolithiasis in a specific region",
      journal: "International Brazilian Journal of Urology",
      year: 2005,
      type: "Artigo Original",
      abstract: "Investigação metabólica de pacientes com urolitíase em região específica.",
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
