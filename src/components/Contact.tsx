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
                    <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
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
                    <p className="text-muted-foreground">contato@andremedina.com.br</p>
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
                    <p className="text-muted-foreground">Av. Paulista, 1000</p>
                    <p className="text-muted-foreground">Bela Vista - São Paulo/SP</p>
                    <p className="text-muted-foreground">CEP: 01310-100</p>
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
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábados: 8h às 12h</p>
                      <p>Domingos: Fechado</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-medical rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  Solicite seu agendamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(11) 99999-9999" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Data preferencial</Label>
                    <Input id="date" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialty">Especialidade</Label>
                  <select className="w-full p-3 rounded-lg border border-input bg-background">
                    <option>Consulta Oncológica Geral</option>
                    <option>Cirurgia Oncológica</option>
                    <option>Segunda Opinião</option>
                    <option>Acompanhamento Pós-operatório</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Descreva brevemente seu caso ou dúvida..."
                    rows={4}
                  />
                </div>

                <Button className="btn-medical rounded-full px-8 w-full text-lg py-6">
                  <Calendar className="h-5 w-5 mr-2" />
                  Enviar solicitação
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Retornaremos seu contato em até 24 horas úteis para confirmar o agendamento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;