import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BlogArticle from "@/components/BlogArticle";
import StructuredData from "@/components/SEO/StructuredData";
import AIOptimization from "@/components/SEO/AIOptimization";
import { Helmet } from "react-helmet";
import { BookOpen } from "lucide-react";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Dr. André Molina | Artigos sobre Oncologia Cutânea e Câncer de Pele</title>
        <meta name="description" content="Artigos especializados sobre melanoma, carcinoma basocelular, prevenção do câncer de pele e tratamentos oncológicos modernos. Blog informativo do Dr. André Molina sobre oncologia cutânea em São Paulo." />
        <meta name="keywords" content="blog oncologia cutânea São Paulo, artigos melanoma, prevenção câncer de pele, carcinoma basocelular informações, cirurgia de mohs artigos, André Molina blog, dermatologia oncológica, imunoterapia melanoma" />
        
        {/* Open Graph */}
        <meta property="og:type" content="blog" />
        <meta property="og:title" content="Blog - Dr. André Molina | Oncologia Cutânea" />
        <meta property="og:description" content="Artigos e informações especializadas sobre câncer de pele, melanoma e oncologia cutânea." />
        <meta property="og:url" content="https://andremedina.com.br/blog" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Blog - Dr. André Molina" />
        <meta name="twitter:description" content="Artigos sobre oncologia cutânea e prevenção" />
        
        {/* Blog Context */}
        <meta name="content-type" content="educational-medical-blog" />
        <meta name="article-topics" content="Melanoma, Carcinoma Basocelular, Prevenção, Tratamentos, Oncologia Cutânea" />
        
        <link rel="canonical" href="https://andremedina.com.br/blog" />
      </Helmet>
      
      <StructuredData type="article" data={{
        title: "Blog - Oncologia Cutânea",
        description: "Artigos educativos sobre câncer de pele e oncologia cutânea",
        url: "https://andremedina.com.br/blog"
      }} />
      <AIOptimization page="blog" />

      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary">
                  <BookOpen className="h-4 w-4" />
                  Blog Especializado
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  Artigos e
                  <span className="block text-primary">Informações</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Conteúdo especializado sobre oncologia cutânea, prevenção do câncer de pele 
                  e as mais modernas técnicas de tratamento.
                </p>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <BlogArticle 
                title="Imunoterapia antes da cirurgia: uma revolução no tratamento do melanoma"
                date="Março 2025"
                author="Dr. André Molina"
                content={
                  <div className="space-y-6 text-foreground">
                    <p className="text-lg leading-relaxed">
                      Imagine se, antes de uma grande batalha, fosse possível treinar o exército com o inimigo ainda à vista. 
                      Foi exatamente essa a lógica usada por pesquisadores que testaram uma nova forma de tratar o melanoma 
                      (um dos tipos mais agressivos de câncer de pele) quando ele já se espalhou para os linfonodos.
                    </p>

                    <p className="leading-relaxed">
                      Até pouco tempo, a regra era simples: primeiro operar, depois tratar com medicamentos. 
                      Mas um estudo internacional recente mostrou que inverter essa ordem pode trazer resultados muito melhores.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">O que mudou?</h2>
                    
                    <p className="leading-relaxed">
                      Agora, em alguns casos, os médicos podem usar a imunoterapia antes da cirurgia. 
                      Os remédios nivolumabe e ipilimumabe atuam como "despertadores" do sistema de defesa, 
                      ajudando o corpo a reconhecer e atacar as células do câncer.
                    </p>

                    <p className="leading-relaxed">
                      Quando dados antes da cirurgia, eles encontram o tumor ainda no organismo e conseguem "treinar" 
                      o sistema imunológico de forma mais completa. É como se o corpo aprendesse a lutar contra o 
                      inimigo com um mapa em mãos.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Os resultados do estudo</h2>
                    
                    <p className="leading-relaxed">
                      O trabalho, publicado no renomado New England Journal of Medicine, acompanhou pacientes com 
                      melanoma em linfonodos. Os resultados foram animadores:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-foreground">
                      <li>
                        <strong>84% dos pacientes</strong> que receberam imunoterapia antes da cirurgia estavam livres 
                        da doença após 1 ano, contra 57% dos que trataram apenas depois da cirurgia.
                      </li>
                      <li>
                        Em mais da <strong>metade dos pacientes</strong>, o tumor praticamente desapareceu já na 
                        análise do material retirado na cirurgia.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                      O que isso significa para os pacientes?
                    </h2>
                    
                    <ul className="list-disc pl-6 space-y-2 text-foreground">
                      <li>Menor risco de o melanoma voltar cedo.</li>
                      <li>Possibilidade de precisar de menos tratamento após a cirurgia, em quem responde muito bem.</li>
                      <li>Mais esperança de controle da doença no longo prazo.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Existem riscos?</h2>
                    
                    <p className="leading-relaxed">
                      Sim. Como toda imunoterapia, esses medicamentos podem causar efeitos colaterais, já que "ligam" 
                      o sistema de defesa de forma intensa. Os mais comuns são alterações hormonais e inflamações em 
                      órgãos, geralmente controlados com acompanhamento médico.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                      Uma nova era no tratamento do melanoma
                    </h2>
                    
                    <p className="leading-relaxed">
                      Essa estratégia ainda está em fase de incorporação, mas já mostra um caminho promissor: 
                      em vez de esperar a cirurgia para começar a agir, o tratamento começa antes, aumentando 
                      as chances de vitória contra o câncer.
                    </p>
                  </div>
                }
              />
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Blog;