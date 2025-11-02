import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BlogCard from "@/components/BlogCard";
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
        <meta property="og:url" content="https://drandremolina.lovable.app/blog" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Blog - Dr. André Molina" />
        <meta name="twitter:description" content="Artigos sobre oncologia cutânea e prevenção" />
        
        {/* Blog Context */}
        <meta name="content-type" content="educational-medical-blog" />
        <meta name="article-topics" content="Melanoma, Carcinoma Basocelular, Prevenção, Tratamentos, Oncologia Cutânea" />
        
        <link rel="canonical" href="https://drandremolina.lovable.app/blog" />
      </Helmet>
      
      <StructuredData type="article" data={{
        title: "Blog - Oncologia Cutânea",
        description: "Artigos educativos sobre câncer de pele e oncologia cutânea",
        url: "https://drandremolina.lovable.app/blog"
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

          {/* Articles List */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-8">
                <BlogCard 
                  title="Imunoterapia antes da cirurgia: uma revolução no tratamento do melanoma"
                  date="Março 2025"
                  author="Dr. André Molina"
                  excerpt="Estudo internacional mostra que usar imunoterapia antes da cirurgia pode aumentar para 84% as chances de pacientes com melanoma ficarem livres da doença após 1 ano. Descubra como essa nova estratégia está mudando o tratamento do câncer de pele."
                  slug="imunoterapia-melanoma"
                />
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

export default Blog;