import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Heart 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full gradient-medical flex items-center justify-center text-white font-bold text-xl">
                Dr
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. André Molina</h3>
                <p className="text-white/70">Cirurgião Oncológico - Oncologia Cutânea</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed max-w-md">
              Dedicado ao tratamento oncológico de excelência, combinando experiência, 
              tecnologia avançada e cuidado humanizado para oferecer a melhor assistência 
              aos pacientes.
            </p>

            {/* Social media */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/70">Siga-nos:</span>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.instagram.com/dr.andremolina?igsh=ZDZ2bTFocGlsbjcy&utm_source=qr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <nav className="space-y-3 text-white/80">
              <a href="#inicio" className="block hover:text-primary transition-colors">
                Início
              </a>
              <a href="#sobre" className="block hover:text-primary transition-colors">
                Sobre o Médico
              </a>
              <a href="/cirurgias" className="block hover:text-primary transition-colors">
                Cirurgias
              </a>
              <a href="#contato" className="block hover:text-primary transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-4 text-white/80">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:01132583636" className="hover:text-primary transition-colors">(11) 3258-3636</a>
                  <br />
                  <a href="https://wa.me/5511971644726" className="text-sm text-white/60 hover:text-primary transition-colors">(11) 97164-4726 WhatsApp</a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>contato@exactaoncologia.com.br</p>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="https://maps.app.goo.gl/aH8Fc7qk3miLDEro6" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <p>Rua Adma Jafet, 74, cj 161</p>
                  <p>Bela Vista, São Paulo - SP CEP 01308-050</p>
                </a>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/10 text-sm text-white/60">
              <p>Responsável Técnico: André Molina</p>
              <p>CRM-SP 113993 RQE 68140</p>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <span>© 2024 Dr. André Medina. Todos os direitos reservados.</span>
            </div>
            
            <div className="flex items-center gap-1">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>para cuidar da sua saúde</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;