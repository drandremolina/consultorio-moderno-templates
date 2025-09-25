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
              <Phone className="h-4 w-4 text-cyan-500" />
              <span>(11) 3258-3636</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-500" />
              <span>Rua Adma Jafet, 74, cj 161 - Bela Vista</span>
            </div>
          </div>
          <div className="text-cyan-500 font-medium">
            Seg - Sex: 8h às 19h
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-xl">
              AM
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Dr. André Molina</h2>
              <p className="text-sm text-muted-foreground">Cirurgia Oncológica - Oncologia Cutânea</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://wa.me/5511971644726" target="_blank" rel="noopener noreferrer">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-6">
                Agendar Consulta
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Navigation - Below main header */}
        <div className="hidden md:block border-t border-border/30">
          <nav className="flex items-center space-x-8 py-3">
            <a href="/" className="text-foreground hover:text-cyan-500 transition-colors font-medium">
              Início
            </a>
            <a href="/sobre" className="text-foreground hover:text-cyan-500 transition-colors font-medium">
              Sobre
            </a>
            <a href="/cirurgias" className="text-foreground hover:text-cyan-500 transition-colors font-medium">
              Cirurgias
            </a>
            <a href="/oncologia-cutanea" className="text-foreground hover:text-cyan-500 transition-colors font-medium">
              Oncologia Cutânea
            </a>
            <a href="/blog" className="text-foreground hover:text-cyan-500 transition-colors font-medium">
              Blog
            </a>
            <a href="#contato" className="text-foreground hover:text-cyan-500 transition-colors font-medium">
              Contato
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/30">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-foreground hover:text-cyan-500 transition-colors font-medium">
                Início
              </a>
              <a href="/sobre" className="text-foreground hover:text-cyan-500 transition-colors font-medium">
                Sobre
              </a>
              <a href="/cirurgias" className="text-foreground hover:text-cyan-500 transition-colors font-medium">
                Cirurgias
              </a>
              <a href="/oncologia-cutanea" className="text-foreground hover:text-cyan-500 transition-colors font-medium">
                Oncologia Cutânea
              </a>
              <a href="/blog" className="text-foreground hover:text-cyan-500 transition-colors font-medium">
                Blog
              </a>
              <a href="#contato" className="text-foreground hover:text-cyan-500 transition-colors font-medium">
                Contato
              </a>
              <a href="https://wa.me/5511971644726" target="_blank" rel="noopener noreferrer">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-6 w-fit">
                  Agendar Consulta
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;