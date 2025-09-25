import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  User, 
  ArrowRight,
  BookOpen
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Blog = () => {
  const blogPosts = [
    {
      title: "Avanços na Imunoterapia para Melanoma em 2024",
      excerpt: "Conheça as mais recentes descobertas em imunoterapia e como elas estão transformando o tratamento do melanoma avançado.",
      category: "Tratamento",
      date: "15 de março, 2024",
      readTime: "5 min",
      featured: true
    },
    {
      title: "Prevenção do Câncer de Pele: Mitos e Verdades",
      excerpt: "Esclarecemos os principais mitos sobre proteção solar e prevenção do câncer de pele com base em evidências científicas.",
      category: "Prevenção",
      date: "28 de fevereiro, 2024",
      readTime: "4 min",
      featured: false
    },
    {
      title: "Cirurgia de Mohs: Precisão no Tratamento",
      excerpt: "Entenda como a cirurgia de Mohs oferece maior precisão na remoção de tumores cutâneos preservando tecido saudável.",
      category: "Cirurgia",
      date: "10 de fevereiro, 2024",
      readTime: "6 min",
      featured: false
    },
    {
      title: "Reconhecendo os Sinais do Melanoma",
      excerpt: "Aprenda a identificar os sinais de alerta do melanoma usando a regra ABCDE e quando procurar avaliação médica.",
      category: "Diagnóstico",
      date: "25 de janeiro, 2024",
      readTime: "3 min",
      featured: false
    },
    {
      title: "Inovações em Perfusão Isolada de Membro",
      excerpt: "Descobra como as novas técnicas de perfusão isolada estão melhorando os resultados no tratamento de melanomas avançados.",
      category: "Tratamento",
      date: "12 de janeiro, 2024",
      readTime: "7 min",
      featured: false
    },
    {
      title: "Carcinoma de Células de Merkel: Tumor Raro mas Agressivo",
      excerpt: "Conheça este tumor neuroendócrino raro, seus fatores de risco e as opções de tratamento mais eficazes.",
      category: "Diagnóstico",
      date: "20 de dezembro, 2023",
      readTime: "5 min",
      featured: false
    }
  ];

  const categories = ["Todos", "Tratamento", "Prevenção", "Cirurgia", "Diagnóstico"];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
                <BookOpen className="h-4 w-4" />
                Blog Médico
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Notícias e Artigos
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Mantenha-se atualizado com as últimas novidades em oncologia cutânea, 
                tratamentos inovadores e dicas de prevenção.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post, index) => (
          <section key={index} className="py-16">
            <div className="container mx-auto px-4">
              <Card className="card-medical rounded-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/20 p-12 flex items-center">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-primary text-white">Destaque</Badge>
                        <Badge variant="outline">{post.category}</Badge>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-foreground">
                        {post.title}
                      </h2>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Dr. André Molina
                        </div>
                        <span>{post.readTime} de leitura</span>
                      </div>
                      
                      <Button className="btn-medical rounded-full group">
                        Ler artigo completo
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-medical aspect-[4/3] lg:aspect-auto"></div>
                </div>
              </Card>
            </div>
          </section>
        ))}

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <Card key={index} className="card-medical rounded-2xl group cursor-pointer hover:shadow-lg transition-all">
                  <div className="bg-gradient-medical aspect-[16/9] rounded-t-2xl"></div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <span>{post.readTime} de leitura</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-gradient-medical text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Receba nossas atualizações
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Inscreva-se para receber os últimos artigos sobre oncologia cutânea 
              e avanços em tratamentos diretamente em seu e-mail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 rounded-full text-foreground"
              />
              <Button variant="secondary" className="rounded-full px-8">
                Inscrever-se
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;