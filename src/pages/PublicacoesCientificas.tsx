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
      title: "Advances in Melanoma Treatment",
      journal: "Journal of Clinical Oncology",
      year: 2024,
      type: "Artigo Original",
      link: "#"
    },
    {
      title: "Surgical Techniques in Cutaneous Oncology",
      journal: "Surgical Oncology Review",
      year: 2023,
      type: "Revisão",
      link: "#"
    },
    {
      title: "Immunotherapy in Skin Cancer",
      journal: "Cancer Research",
      year: 2023,
      type: "Estudo Clínico",
      link: "#"
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
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2 flex items-center gap-2">
                              <FileText className="w-5 h-5 text-cyan-500" />
                              {pub.title}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {pub.journal} • {pub.year}
                            </CardDescription>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300">
                              {pub.type}
                            </span>
                            <a 
                              href={pub.link}
                              className="text-cyan-500 hover:text-cyan-600 transition-colors flex items-center gap-1 text-sm"
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
