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
      title: "Cirurgia de Mohs",
      description: "Técnica cirúrgica de alta precisão para remoção de tumores cutâneos com controle microscópico das margens.",
      features: ["Controle microscópico", "Preservação de tecido", "Alta taxa de cura"]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Tratamento de Melanoma",
      description: "Abordagem multidisciplinar para melanoma incluindo cirurgia, biópsia de linfonodo sentinela e imunoterapia.",
      features: ["Estadiamento completo", "Cirurgia especializada", "Imunoterapia avançada"]
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Carcinoma Basocelular",
      description: "Tratamento especializado para carcinomas basocelulares com técnicas que garantem máxima eficácia.",
      features: ["Excisão completa", "Reconstrução estética", "Seguimento oncológico"]
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Perfusão Isolada de Membro",
      description: "Técnica avançada para tratamento de melanomas e sarcomas de extremidades em estágios avançados.",
      features: ["Técnica especializada", "Preservação do membro", "Resultados superiores"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Biópsia de Linfonodo Sentinela",
      description: "Procedimento minimamente invasivo para estadiamento preciso de melanomas.",
      features: ["Mapeamento linfático", "Técnica minimamente invasiva", "Estadiamento preciso"]
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Ampliação de Margens",
      description: "Procedimento cirúrgico para garantir remoção completa de tumores com margens de segurança.",
      features: ["Controle oncológico", "Análise histopatológica", "Reconstrução imediata"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
            <Activity className="h-4 w-4" />
            Cirurgias Especializadas
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Procedimentos em Oncologia Cutânea
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos cirurgias especializadas para tratamento de melanoma, carcinoma basocelular 
            e outros tumores de pele com técnicas avançadas e cuidado personalizado.
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