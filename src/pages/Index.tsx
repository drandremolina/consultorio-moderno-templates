import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dr. André Molina - Cirurgião Oncológico Especialista em Oncologia Cutânea | São Paulo</title>
        <meta name="description" content="Dr. André Molina, cirurgião oncológico especializado em melanoma, carcinoma basocelular, cirurgia de Mohs, biópsia linfonodo sentinela. Atendimento em São Paulo." />
        <meta name="keywords" content="André Molina, melanoma, carcinoma basocelular, cirurgia de mohs, linfonodo sentinela, perfusão isolada de membro, oncologia cutânea, carcinoma de pele, tratamento melanoma, São Paulo" />
        <meta property="og:title" content="Dr. André Molina - Cirurgião Oncológico" />
        <meta property="og:description" content="Especialista em oncologia cutânea com vasta experiência em tratamento de melanoma e carcinomas de pele." />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
