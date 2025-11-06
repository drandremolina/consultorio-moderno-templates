import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-medical-office.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-white">
      
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary">
                <Shield className="h-4 w-4" />
                Especialista em Cirurgia Oncológica
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                Dr. André Molina
                <span className="block text-3xl md:text-4xl lg:text-5xl text-primary mt-3 font-normal">Cirurgião Oncológico</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Especialista em Oncologia Cutânea com vasta experiência em tratamento de 
                melanoma, carcinoma basocelular, carcinoma de Merkel e carcinoma espinocelular. 
                Realiza biópsia de linfonodo sentinela, perfusão isolada de membro e ampliação de margens oncológicas.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base font-medium shadow-sm group"
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
                  className="rounded-full px-8 py-6 text-base font-medium border-border hover:bg-muted"
                >
                  Conheça minha trajetória
                </Button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
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
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border/50">
                <h3 className="text-base font-semibold text-foreground mb-2 uppercase tracking-wide">
                  Oncologia Cutânea
                </h3>
                <p className="text-sm text-muted-foreground mb-4 font-light">
                  Melanoma, Carcinoma Basocelular, Carcinoma de Merkel e Biópsia de Linfonodo Sentinela
                </p>
                <a href="/oncologia-cutanea">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full text-sm font-medium">
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