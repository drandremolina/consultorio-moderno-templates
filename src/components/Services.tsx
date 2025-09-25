import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Activity, 
  Shield, 
  Microscope,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Cirurgia Oncológica",
      description: "Procedimentos cirúrgicos especializados para tratamento de diversos tipos de câncer com técnicas minimamente invasivas.",
      features: ["Laparoscopia", "Cirurgia robótica", "Procedimentos mini-invasivos"]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Oncologia Clínica",
      description: "Tratamento clínico completo incluindo quimioterapia, imunoterapia e terapias alvo personalizadas.",
      features: ["Quimioterapia", "Imunoterapia", "Medicina personalizada"]
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Diagnóstico Precoce",
      description: "Programas de rastreamento e diagnóstico precoce para identificação de tumores em estágios iniciais.",
      features: ["Check-ups preventivos", "Exames de imagem", "Biópsias especializadas"]
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Acompanhamento",
      description: "Seguimento pós-operatório e acompanhamento oncológico contínuo para garantir a recuperação completa.",
      features: ["Follow-up especializado", "Reabilitação", "Cuidados paliativos"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Prevenção",
      description: "Orientação e programas de prevenção para reduzir os riscos de desenvolvimento de câncer.",
      features: ["Orientação nutricional", "Estilo de vida", "Genética oncológica"]
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Segunda Opinião",
      description: "Análise detalhada de casos complexos oferecendo uma segunda opinião médica especializada.",
      features: ["Revisão de casos", "Planos alternativos", "Consultoria especializada"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
            <Activity className="h-4 w-4" />
            Nossos Serviços
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Tratamentos especializados
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços oncológicos com foco na excelência médica 
            e no cuidado humanizado de cada paciente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-medical rounded-2xl h-full group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl gradient-medical flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {feature}
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
  );
};

export default Services;