import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Search,
  BookOpen,
  Newspaper
} from "lucide-react";
import { Helmet } from "react-helmet";

const Blog = () => {
  const artigos = [
    {
      title: "Prevenção do Melanoma: Guia Completo",
      excerpt: "Entenda como prevenir o tipo mais agressivo de câncer de pele com medidas simples e eficazes do dia a dia.",
      categoria: "Prevenção",
      data: "15 de Janeiro, 2024",
      tempo: "5 min de leitura",
      imagem: "/api/placeholder/400/250"
    },
    {
      title: "Cirurgia de Mohs: Precisão no Tratamento",
      excerpt: "Conheça a técnica cirúrgica mais precisa para tratamento de carcinomas de pele com preservação máxima de tecido saudável.",
      categoria: "Tratamento",
      data: "10 de Janeiro, 2024",
      tempo: "7 min de leitura",
      imagem: "/api/placeholder/400/250"
    },
    {
      title: "Imunoterapia: Revolução no Tratamento do Melanoma",
      excerpt: "Descubra como a imunoterapia transformou o prognóstico de pacientes com melanoma avançado.",
      categoria: "Inovação",
      data: "5 de Janeiro, 2024",
      tempo: "6 min de leitura",
      imagem: "/api/placeholder/400/250"
    },
    {
      title: "Autoexame da Pele: Como Fazer Corretamente",
      excerpt: "Aprenda a técnica ABCDE para identificar precocemente possíveis alterações suspeitas na pele.",
      categoria: "Prevenção",
      data: "28 de Dezembro, 2023",
      tempo: "4 min de leitura",
      imagem: "/api/placeholder/400/250"
    },
    {
      title: "Carcinoma Basocelular: Sinais e Tratamentos",
      excerpt: "Tudo sobre o tipo mais comum de câncer de pele: como identificar, fatores de risco e opções terapêuticas.",
      categoria: "Educação",
      data: "20 de Dezembro, 2023",
      tempo: "8 min de leitura",
      imagem: "/api/placeholder/400/250"
    },
    {
      title: "Proteção Solar: Mitos e Verdades",
      excerpt: "Esclarecemos as principais dúvidas sobre protetor solar e como escolher o mais adequado para cada tipo de pele.",
      categoria: "Prevenção",
      data: "15 de Dezembro, 2023",
      tempo: "5 min de leitura",
      imagem: "/api/placeholder/400/250"
    }
  ];

  const categorias = ["Todos", "Prevenção", "Tratamento", "Inovação", "Educação"];

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

          {/* Search and Filter Section */}
          <section className="py-12 border-b">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Buscar artigos..."
                    className="w-full pl-10 pr-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categorias.map((categoria, index) => (
                    <Badge 
                      key={index}
                      variant={index === 0 ? "default" : "outline"}
                      className={`cursor-pointer px-4 py-2 rounded-full transition-colors ${
                        index === 0 
                          ? "bg-primary text-white hover:bg-primary/90" 
                          : "hover:bg-primary/10 hover:border-primary"
                      }`}
                    >
                      {categoria}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artigos.map((artigo, index) => (
                  <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-white">
                          {artigo.categoria}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Newspaper className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {artigo.data}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {artigo.tempo}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {artigo.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {artigo.excerpt}
                        </p>
                        
                        <Button 
                          variant="ghost" 
                          className="p-0 h-auto text-primary hover:text-primary/80 group/btn"
                        >
                          Ler artigo
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
            <div className="container mx-auto px-4 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Receba Novos Artigos
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Inscreva-se em nossa newsletter e fique atualizado com as últimas 
                  informações sobre oncologia cutânea e prevenção do câncer de pele.
                </p>
              </div>

              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-3 rounded-full text-foreground focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <Button 
                  className="bg-white text-primary hover:bg-gray-50 rounded-full px-6"
                >
                  Inscrever
                </Button>
              </div>

              <p className="text-sm opacity-75">
                * Não enviamos spam. Você pode cancelar a inscrição a qualquer momento.
              </p>
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