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
    "Formado pela Faculdade de Medicina da USP",
    "Residência em Cirurgia Geral no Hospital das Clínicas",
    "Fellowships em Oncologia nos EUA e Europa",
    "Mais de 50 publicações científicas",
    "Membro da Sociedade Brasileira de Oncologia"
  ];

  const stats = [
    { icon: <GraduationCap className="h-6 w-6" />, label: "Formação", value: "USP" },
    { icon: <Award className="h-6 w-6" />, label: "Experiência", value: "15+ anos" },
    { icon: <Users className="h-6 w-6" />, label: "Pacientes", value: "2000+" },
    { icon: <BookOpen className="h-6 w-6" />, label: "Publicações", value: "50+" }
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
                Dr. André Medina
              </h2>
              
              <p className="text-xl text-primary font-medium">
                Cirurgião Oncológico | CRM 123456-SP
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Com mais de 15 anos de experiência em cirurgia oncológica, o Dr. André Medina 
                é reconhecido pela excelência no tratamento de tumores complexos e pelo cuidado 
                humanizado com seus pacientes.
              </p>
              
              <p>
                Formado pela prestigiosa Faculdade de Medicina da USP, realizou fellowships 
                internacionais em centros de referência nos Estados Unidos e Europa, sempre 
                em busca das mais modernas técnicas cirúrgicas.
              </p>
              
              <p>
                Atualmente atende em seu consultório particular e em hospitais renomados de 
                São Paulo, combinando tecnologia de ponta com um atendimento personalizado 
                e acolhedor.
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

            <Button className="btn-medical rounded-full px-8 group">
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
                  Certificação Internacional
                </h3>
                <p className="opacity-90">
                  Reconhecido pela International Society of Surgical Oncology 
                  como especialista em cirurgias oncológicas complexas.
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