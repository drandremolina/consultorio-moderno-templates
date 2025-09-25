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
    "Graduado pela Universidade Estadual do Oeste do Paraná",
    "Residência em Cirurgia Oncológica no A. C. Camargo Cancer Center",
    "Mestrado em Oncologia",
    "Membro do Grupo Brasileiro de Melanoma",
    "Membro da Sociedade Brasileira de Cirurgia Oncológica"
  ];

  const stats = [
    { icon: <GraduationCap className="h-6 w-6" />, label: "Formação", value: "UNIOESTE" },
    { icon: <Award className="h-6 w-6" />, label: "Residência", value: "A.C.Camargo" },
    { icon: <Users className="h-6 w-6" />, label: "Especialização", value: "Oncologia Cutânea" },
    { icon: <BookOpen className="h-6 w-6" />, label: "Titulação", value: "Mestrado" }
  ];

  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary">
                <Award className="h-4 w-4" />
                Sobre o Médico
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Dr. André Molina
              </h2>
              
              <p className="text-xl text-primary font-medium">
                Cirurgião Oncológico | CRM-SP 113993 RQE 68140
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Especialista em oncologia cutânea com sólida formação acadêmica e ampla 
                experiência no tratamento de melanoma, carcinoma basocelular e outros tumores de pele. 
                Graduado pela Universidade Estadual do Oeste do Paraná.
              </p>
              
              <p>
                Realizou residência em cirurgia oncológica no renomado A. C. Camargo Cancer Center, 
                um dos principais centros de referência em oncologia do Brasil. Possui Mestrado em 
                Oncologia e é membro ativo do Grupo Brasileiro de Melanoma.
              </p>
              
              <p>
                Como membro da Sociedade Brasileira de Cirurgia Oncológica, mantém-se constantemente 
                atualizado com as mais modernas técnicas cirúrgicas e tratamentos inovadores, 
                oferecendo cuidado personalizado e humanizado a cada paciente.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Formação e Especializações</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              onClick={() => window.open('http://lattes.cnpq.br/3560266661123900', '_blank')}
              className="btn-medical rounded-full px-8 group"
            >
              Ver currículo completo
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="card-medical rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-2xl gradient-medical flex items-center justify-center text-white mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main achievement card */}
            <Card className="card-medical rounded-2xl gradient-medical text-white">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Especialista em Oncologia Cutânea
                </h3>
                <p className="opacity-90">
                  Membro do Grupo Brasileiro de Melanoma e da Sociedade Brasileira 
                  de Cirurgia Oncológica, com expertise em tratamentos avançados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;