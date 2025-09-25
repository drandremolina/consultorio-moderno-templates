import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 gradient-medical-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
            <MessageCircle className="h-4 w-4" />
            Entre em Contato
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Agende sua consulta
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre em contato conosco pelos canais abaixo para agendar sua consulta especializada.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="card-medical rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl gradient-medical flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                    <a href="tel:01132583636" className="text-muted-foreground hover:text-primary transition-colors">(11) 3258-3636</a>
                    <br />
                    <a href="https://wa.me/5511971644726" className="text-sm text-muted-foreground hover:text-primary transition-colors mt-1 inline-block">(11) 97164-4726 WhatsApp</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-medical rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl gradient-medical flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                    <p className="text-muted-foreground">contato@exactaoncologia.com.br</p>
                    <p className="text-sm text-muted-foreground mt-1">Resposta em até 24h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-medical rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl gradient-medical flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                    <p className="text-muted-foreground">Rua Adma Jafet, 74, cj 161</p>
                    <p className="text-muted-foreground">Bela Vista, São Paulo - SP</p>
                    <p className="text-muted-foreground">CEP: 01308-050</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-medical rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl gradient-medical flex items-center justify-center text-white flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Horários</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Segunda a Sexta: 8h às 19h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="lg:col-span-2">
            <Card className="card-medical rounded-2xl">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white">
                  <Calendar className="h-8 w-8" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    Agende sua Consulta
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Entre em contato através do WhatsApp ou telefone para agendar sua consulta especializada.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-6 text-lg"
                    onClick={() => window.location.href = 'https://wa.me/5511971644726'}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </Button>
                  
                  <a href="tel:01132583636">
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary/5 rounded-full px-8 py-6 text-lg"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Ligar Agora
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;