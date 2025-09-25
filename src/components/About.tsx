import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Award, 
  Users, 
  BookOpen,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const About = () => {
  const achievements = [
    "Graduação em Medicina - Universidade Estadual do Oeste do Paraná",
    "Residência em Cirurgia Oncológica - A. C. Camargo Cancer Center", 
    "Mestrado em Oncologia",
    "Membro do Grupo Brasileiro de Melanoma",
    "PPCR - Principles and Practice of Clinical Research - Harvard T.H. Chan School of Public Health",
    "Membro da Sociedade Brasileira de Cirurgia Oncológica"
  ];

  const stats = [
    { icon: <Award className="h-6 w-6" />, label: "Especialidade", value: "Oncologia Cutânea" }
  ];

  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header Section - Centralized */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
            <Award className="h-4 w-4" />
            Sobre o Médico
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Dr. André Molina
          </h2>
          
          <p className="text-xl text-primary font-medium">
            Cirurgião Oncológico | CRM-SP 113993 RQE 68140
          </p>
        </div>

        {/* Main Content - Centralized */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg text-center">
            <p>
              O Dr. André Molina é reconhecido pela excelência no tratamento de tumores complexos 
              e pelo cuidado humanizado com seus pacientes.
            </p>
            
            <p>
              Atualmente atende em seu consultório particular e em hospitais renomados de 
              São Paulo, combinando tecnologia de ponta com um atendimento personalizado 
              e acolhedor.
            </p>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground text-center">Especializações</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <a 
              href="http://lattes.cnpq.br/3560266661123900" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium border border-primary/20 rounded-full px-8 py-3 hover:bg-primary/5"
            >
              <BookOpen className="h-4 w-4" />
              Currículo Lattes
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;