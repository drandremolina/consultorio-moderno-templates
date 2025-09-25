import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-medical-no-person.jpg";

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
                Especialista em Oncologia Cutânea
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                <span className="block text-primary">Dr. André Molina</span>
                Cirurgião Oncológico
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Especialista em oncologia cutânea com formação no A. C. Camargo Cancer Center. 
                Tratamento avançado de melanoma, carcinoma basocelular e outros tumores de pele.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">CRM-SP</div>
                <div className="text-sm text-muted-foreground">113993</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">RQE</div>
                <div className="text-sm text-muted-foreground">68140</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Mestrado</div>
                <div className="text-sm text-muted-foreground">em Oncologia</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-medical rounded-full px-8 py-6 text-lg group">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Consulta
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg border-primary/20 hover:bg-primary/5 hover:border-primary/40"
              >
                <Award className="h-5 w-5 mr-2" />
                Conheça minha trajetória
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="card-medical rounded-3xl overflow-hidden">
              <img
                src={heroImage}
                alt="Dr. André Molina - Cirurgião Oncológico especialista em Oncologia Cutânea"
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Card overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 card-medical">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  ONCOLOGIA CUTÂNEA
                </h3>
                <p className="text-muted-foreground mb-4">
                  Especialista em melanoma, carcinoma basocelular e outros tumores de pele
                </p>
                <Button className="btn-medical rounded-full text-sm">
                  Saiba mais
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;