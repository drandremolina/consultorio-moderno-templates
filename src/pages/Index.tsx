import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/SEO/StructuredData";
import AIOptimization from "@/components/SEO/AIOptimization";
import FAQSchema from "@/components/SEO/FAQSchema";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dr. André Molina - Tratamento Melanoma, Carcinoma Basocelular | Oncologia Cutânea SP</title>
        <meta name="description" content="Dr. André Molina, cirurgião oncológico especialista em tratamento de melanoma, carcinoma basocelular, biópsia de linfonodo sentinela, perfusão isolada de membro e cirurgia de Mohs. Oncologia cutânea em São Paulo." />
        <meta name="keywords" content="André Molina, Dr André Molina, melanoma, tratamento melanoma, carcinoma basocelular, tratamento carcinoma basocelular, biópsia linfonodo sentinela, biópsia de linfonodo sentinela, perfusão isolada membro, perfusão isolada de membro, cirurgia de Mohs, oncologia cutânea São Paulo, cirurgião oncológico, carcinoma espinocelular" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dr. André Molina - Tratamento Melanoma e Carcinoma Basocelular SP" />
        <meta property="og:description" content="Especialista em melanoma, carcinoma basocelular, biópsia de linfonodo sentinela, perfusão isolada de membro e cirurgia de Mohs. Oncologia cutânea em São Paulo." />
        <meta property="og:url" content="https://andremedina.com.br/" />
        <meta property="og:site_name" content="Dr. André Molina - Cirurgião Oncológico" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. André Molina - Cirurgião Oncológico" />
        <meta name="twitter:description" content="Especialista em oncologia cutânea e tratamento de melanoma em São Paulo" />
        
        {/* Additional Medical SEO */}
        <meta name="author" content="Dr. André Molina" />
        <meta name="medical-specialist" content="Cirurgião Oncológico" />
        <meta name="specialty" content="Oncologia Cutânea" />
        <meta name="location" content="São Paulo, SP, Brasil" />
        
        <link rel="canonical" href="https://andremedina.com.br/" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </Helmet>
      
      <StructuredData type="person" />
      <StructuredData type="medicalOrganization" />
      <AIOptimization page="home" />
      <FAQSchema />
      
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
