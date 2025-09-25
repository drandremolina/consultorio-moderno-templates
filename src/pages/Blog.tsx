import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  BookOpen,
  Newspaper
} from "lucide-react";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Dr. André Molina | Artigos sobre Oncologia Cutânea e Câncer de Pele</title>
        <meta name="description" content="Artigos especializados sobre melanoma, carcinoma basocelular, prevenção do câncer de pele e tratamentos oncológicos. Blog do Dr. André Molina." />
        <meta name="keywords" content="blog oncologia cutânea, artigos melanoma, prevenção câncer de pele, carcinoma basocelular, cirurgia de mohs, André Molina" />
        <meta property="og:title" content="Blog - Dr. André Molina | Oncologia Cutânea" />
        <meta property="og:description" content="Artigos e informações especializadas sobre câncer de pele e oncologia cutânea." />
        <link rel="canonical" href="/blog" />
      </Helmet>

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

          {/* Content Area */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Newspaper className="h-12 w-12 text-primary" />
                </div>
                
                <h2 className="text-2xl font-semibold text-foreground">
                  Blog em Desenvolvimento
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Em breve, você encontrará aqui artigos atualizados sobre oncologia cutânea, 
                  tratamentos inovadores e informações importantes sobre saúde da pele.
                </p>
                
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3"
                  onClick={() => window.location.href = 'https://wa.me/5511971644726'}
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Agendar Consulta
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

export default Blog;