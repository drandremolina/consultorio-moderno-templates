import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet";

const Contato = () => {
  return (
    <>
      <Helmet>
        <title>Contato - Dr. André Molina | Agende sua Consulta de Oncologia Cutânea</title>
        <meta name="description" content="Entre em contato com Dr. André Molina para agendar sua consulta especializada em oncologia cutânea. Telefone: (11) 3258-3636, WhatsApp: (11) 97164-4726." />
        <meta name="keywords" content="contato Dr André Molina, agendar consulta oncologia cutânea, telefone médico São Paulo, whatsapp oncologista" />
        <link rel="canonical" href="/contato" />
      </Helmet>
      
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