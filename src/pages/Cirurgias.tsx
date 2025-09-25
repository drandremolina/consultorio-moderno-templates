import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Scissors, 
  Target, 
  Activity, 
  Microscope,
  ArrowRight,
  Shield,
  Heart
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Cirurgias = () => {
  const procedures = [
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Ampliação de Margens",
      description: "Procedimento cirúrgico para garantir a remoção completa de tumores cutâneos com margens de segurança adequadas.",
      details: [
        "Análise histopatológica das margens",
        "Reconstrução imediata quando necessária",
        "Controle oncológico rigoroso"
      ]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Cirurgia de Mohs",
      description: "Técnica cirúrgica de alta precisão para remoção de tumores de pele com máxima preservação de tecido saudável.",
      details: [
        "Controle microscópico das margens",
        "Maior taxa de cura",
        "Preservação máxima de tecido normal"
      ]
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Biópsia de Linfonodo Sentinela",
      description: "Procedimento minimamente invasivo para estadiamento de melanomas e outros tumores cutâneos.",
      details: [
        "Mapeamento linfático com radiofármaco",
        "Técnica minimamente invasiva",
        "Estadiamento preciso do tumor"
      ]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Perfusão Isolada de Membro",
      description: "Técnica especializada para tratamento de melanomas e sarcomas de extremidades em estágios avançados.",
      details: [
        "Alta concentração de quimioterápicos locais",
        "Preservação do membro",
        "Tratamento de tumores irressecáveis"
      ]
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Ressecção de Tumores Complexos",
      description: "Cirurgias oncológicas complexas para tumores cutâneos de grande porte ou em localizações desafiadoras.",
      details: [
        "Planejamento cirúrgico detalhado",
        "Reconstrução especializada",
        "Equipe multidisciplinar"
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Linfadenectomia",
      description: "Remoção cirúrgica de cadeias ganglionares comprometidas por metástases de tumores cutâneos.",
      details: [
        "Técnica de preservação nervosa",
        "Controle de complicações",
        "Seguimento oncológico rigoroso"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
                <Scissors className="h-4 w-4" />
                Procedimentos Cirúrgicos
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Cirurgias Especializadas
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Procedimentos cirúrgicos especializados em oncologia cutânea com 
                técnicas avançadas e cuidado personalizado para cada paciente.
              </p>
            </div>
          </div>
        </section>

        {/* Procedures Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {procedures.map((procedure, index) => (
                <Card key={index} className="card-medical rounded-2xl h-full group">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 rounded-2xl gradient-medical flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                      {procedure.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {procedure.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {procedure.description}
                    </CardDescription>
                    
                    <ul className="space-y-2">
                      {procedure.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 group/btn mt-6"
                    >
                      Saiba mais
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Cirurgias;