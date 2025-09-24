import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/30">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Av. Paulista, 1000 - São Paulo</span>
            </div>
          </div>
          <div className="text-primary font-medium">
            Seg - Sex: 8h às 18h | Sáb: 8h às 12h
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full gradient-medical flex items-center justify-center text-white font-bold text-xl">
              Dr
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Dr. André Medina</h2>
              <p className="text-sm text-muted-foreground">Cirurgião Oncológico</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre
            </a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors font-medium">
              Serviços
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-medical rounded-full px-6">
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/30">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
                Início
              </a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium">
                Sobre
              </a>
              <a href="#servicos" className="text-foreground hover:text-primary transition-colors font-medium">
                Serviços
              </a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors font-medium">
                Contato
              </a>
              <Button className="btn-medical rounded-full px-6 w-fit">
                Agendar Consulta
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;