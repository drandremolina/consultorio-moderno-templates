import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
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
                <p className="text-white/70">Oncologia Cutânea</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed max-w-md">
              Especialista em oncologia cutânea com sólida formação acadêmica e ampla experiência 
              no tratamento de melanoma, carcinoma basocelular e outros tumores de pele.
            </p>

            {/* Social media */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/70">Siga-nos:</span>
              <div className="flex items-center gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                >
                  <Linkedin className="h-5 w-5" />
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
              <a href="/oncologia-cutanea" className="block hover:text-primary transition-colors">
                Oncologia Cutânea
              </a>
              <a href="/blog" className="block hover:text-primary transition-colors">
                Blog
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
                  <p>(11) 97164-4726</p>
                  <p className="text-sm text-white/60">WhatsApp disponível</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>contato@exactaoncologia.com.br</p>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p>Rua Adma Jafet, 74, cj 161</p>
                  <p>Bela Vista - São Paulo/SP</p>
                  <p>CEP: 01308-050</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <span>© 2024 Dr. André Molina. Todos os direitos reservados.</span>
              <span className="text-xs">Responsável Técnico: André Molina CRM-SP 113993 RQE 68140</span>
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