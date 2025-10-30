import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-medical-office.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-medical-soft"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary border border-primary/20">
                <Shield className="h-4 w-4" />
                Especialista em Cirurgia Oncológica
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight whitespace-nowrap">
                Dr. André Molina
                <span className="block text-3xl md:text-4xl lg:text-5xl text-primary mt-2 whitespace-normal">Cirurgião Oncológico</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Especialista em Oncologia Cutânea com vasta experiência em tratamento de 
                melanoma, carcinoma basocelular, carcinoma espinocelular e neoplasias raras da pele.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg group"
                onClick={() => window.location.href = 'https://wa.me/5511971644726'}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Consulta
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <a href="/sobre">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 py-6 text-lg border-primary/20 hover:bg-primary/5 hover:border-primary/40"
                >
                  <Award className="h-5 w-5 mr-2" />
                  Conheça minha trajetória
                </Button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="card-medical rounded-3xl overflow-hidden">
              <img
                src={heroImage}
                alt="Dr. André Molina - Consultório de Cirurgia Oncológica"
                className="w-full h-[600px] object-cover"
                width="960"
                height="600"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            
            {/* Card overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 card-medical">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  ONCOLOGIA CUTÂNEA
                </h3>
                <p className="text-muted-foreground mb-4">
                  Tratamentos especializados em melanoma e carcinomas de pele
                </p>
                <a href="/cirurgias">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full text-sm">
                    Saiba mais
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;