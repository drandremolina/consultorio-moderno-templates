import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-medical-professional.jpg";
import option1 from "@/assets/hero-option-1.jpg";
import option2 from "@/assets/hero-option-2.jpg"; 
import option3 from "@/assets/hero-option-3.jpg";
import option4 from "@/assets/hero-option-4.jpg";
import option5 from "@/assets/hero-option-5.jpg";

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

          {/* Image Options Preview */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Escolha uma opção de imagem:</h3>
            
            {/* Current Image */}
            <div className="relative">
              <div className="card-medical rounded-3xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Opção Atual - Dr. André Molina"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-sm">
                Atual
              </div>
            </div>

            {/* New Options Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <div className="card-medical rounded-2xl overflow-hidden">
                  <img
                    src={option1}
                    alt="Opção 1 - Ambiente médico com estetoscópio"
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <div className="absolute top-2 left-2 bg-secondary text-white px-2 py-1 rounded text-sm">
                  Opção 1
                </div>
              </div>

              <div className="relative">
                <div className="card-medical rounded-2xl overflow-hidden">
                  <img
                    src={option2}
                    alt="Opção 2 - Equipamentos de oncologia"
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <div className="absolute top-2 left-2 bg-secondary text-white px-2 py-1 rounded text-sm">
                  Opção 2
                </div>
              </div>

              <div className="relative">
                <div className="card-medical rounded-2xl overflow-hidden">
                  <img
                    src={option3}
                    alt="Opção 3 - Consultório médico"
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <div className="absolute top-2 left-2 bg-secondary text-white px-2 py-1 rounded text-sm">
                  Opção 3
                </div>
              </div>

              <div className="relative">
                <div className="card-medical rounded-2xl overflow-hidden">
                  <img
                    src={option4}
                    alt="Opção 4 - Laboratório médico"
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <div className="absolute top-2 left-2 bg-secondary text-white px-2 py-1 rounded text-sm">
                  Opção 4
                </div>
              </div>
            </div>

            {/* Option 5 */}
            <div className="relative">
              <div className="card-medical rounded-3xl overflow-hidden">
                <img
                  src={option5}
                  alt="Opção 5 - Diplomas e certificados"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="absolute top-2 left-2 bg-secondary text-white px-2 py-1 rounded text-sm">
                Opção 5
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;