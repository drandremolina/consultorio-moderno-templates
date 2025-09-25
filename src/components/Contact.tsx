import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
            Estou aqui para ajudá-lo com o melhor tratamento oncológico. 
            Entre em contato e vamos cuidar da sua saúde juntos.
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
                    <h3 className="font-semibold text-foreground mb-1">Telefones</h3>
                    <a href="tel:01132583636" className="text-muted-foreground hover:text-primary transition-colors">(11) 3258-3636</a>
                    <p className="text-muted-foreground">(11) 97164-4726</p>
                    <p className="text-sm text-muted-foreground mt-1">WhatsApp disponível</p>
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
                    <p className="text-muted-foreground">Bela Vista - São Paulo/SP</p>
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

          {/* WhatsApp CTA */}
          <div className="lg:col-span-2">
            <Card className="card-medical rounded-2xl gradient-medical text-white">
              <CardContent className="p-12 text-center">
                <MessageCircle className="h-16 w-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Agende sua consulta pelo WhatsApp
                </h3>
                <p className="text-xl opacity-90 mb-8">
                  Entre em contato diretamente pelo WhatsApp para agendamento rápido e prático.
                </p>
                <Button 
                  onClick={() => window.open('https://wa.me/5511971644726', '_blank')}
                  className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-3 text-lg font-semibold"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;