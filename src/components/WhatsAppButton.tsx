import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "5511971644726"; // Dr. André Molina's WhatsApp
  const message = "Olá! Gostaria de agendar uma consulta com o Dr. André Molina.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-medical shadow-lg hover:scale-110 transition-all duration-300 group"
      size="icon"
    >
      <MessageCircle className="h-6 w-6 text-green-500 group-hover:scale-110 transition-transform" />
      <span className="sr-only">Abrir WhatsApp</span>
    </Button>
  );
};

export default WhatsAppButton;