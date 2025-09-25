import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/SEO/StructuredData";
import AIOptimization from "@/components/SEO/AIOptimization";
import { Helmet } from "react-helmet";

const Contato = () => {
  return (
    <>
      <Helmet>
        <title>Contato - Dr. André Molina | Agende sua Consulta de Oncologia Cutânea São Paulo</title>
        <meta name="description" content="Entre em contato com Dr. André Molina para agendar sua consulta especializada em oncologia cutânea em São Paulo. Telefone: (11) 3258-3636, WhatsApp: (11) 97164-4726. Atendimento para melanoma, carcinoma basocelular e outras neoplasias da pele." />
        <meta name="keywords" content="contato Dr André Molina, agendar consulta oncologia cutânea São Paulo, telefone médico São Paulo SP, whatsapp oncologista, marcar consulta melanoma, contato cirurgião oncológico, agendamento dermatologia oncológica" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contato - Dr. André Molina | Agende sua Consulta" />
        <meta property="og:description" content="Agende sua consulta especializada em oncologia cutânea com Dr. André Molina em São Paulo." />
        <meta property="og:url" content="https://andremedina.com.br/contato" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contato - Dr. André Molina" />
        <meta name="twitter:description" content="Agende sua consulta em oncologia cutânea" />
        
        {/* Contact Information */}
        <meta name="contact-phone" content="+55-11-3258-3636" />
        <meta name="contact-whatsapp" content="+55-11-97164-4726" />
        <meta name="appointment-booking" content="available" />
        
        <link rel="canonical" href="https://andremedina.com.br/contato" />
      </Helmet>
      
      <StructuredData type="medicalOrganization" />
      <AIOptimization page="contact" />
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Contato;