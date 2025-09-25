import { Helmet } from "react-helmet";

interface StructuredDataProps {
  type: "person" | "organization" | "medicalOrganization" | "article";
  data?: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getStructuredData = () => {
    switch (type) {
      case "person":
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://andremedina.com.br/#person",
          "name": "Dr. André Molina",
          "alternateName": "André Molina",
          "jobTitle": "Cirurgião Oncológico",
          "description": "Cirurgião oncológico especialista em oncologia cutânea, tratamento de melanoma, carcinoma basocelular, carcinoma espinocelular e cirurgia de Mohs em São Paulo.",
          "speciality": [
            "Oncologia Cutânea",
            "Cirurgia Oncológica", 
            "Melanoma",
            "Carcinoma Basocelular",
            "Carcinoma Espinocelular",
            "Cirurgia de Mohs",
            "Biópsia Linfonodo Sentinela",
            "Perfusão Isolada de Membro"
          ],
          "medicalSpecialty": [
            "https://schema.org/Oncology",
            "https://schema.org/Dermatology",
            "https://schema.org/Surgery"
          ],
          "worksFor": {
            "@type": "MedicalOrganization",
            "name": "Clínica Dr. André Molina",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Exemplo, 123",
              "addressLocality": "São Paulo",
              "addressRegion": "SP",
              "addressCountry": "BR"
            },
            "telephone": "+55-11-3258-3636"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+55-11-3258-3636",
              "contactType": "appointment booking",
              "availableLanguage": "Portuguese"
            },
            {
              "@type": "ContactPoint", 
              "telephone": "+55-11-97164-4726",
              "contactType": "customer service",
              "availableLanguage": "Portuguese"
            }
          ],
          "url": "https://andremedina.com.br",
          "sameAs": [
            "https://wa.me/5511971644726"
          ]
        };

      case "medicalOrganization":
        return {
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "@id": "https://andremedina.com.br/#organization",
          "name": "Dr. André Molina - Cirurgião Oncológico",
          "description": "Clínica especializada em oncologia cutânea, tratamento de melanoma, carcinomas de pele e cirurgias oncológicas especializadas.",
          "medicalSpecialty": [
            "Oncologia Cutânea",
            "Cirurgia Oncológica",
            "Dermatologia Oncológica"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Exemplo, 123",
            "addressLocality": "São Paulo", 
            "addressRegion": "SP",
            "postalCode": "01000-000",
            "addressCountry": "BR"
          },
          "telephone": "+55-11-3258-3636",
          "url": "https://andremedina.com.br",
          "founder": {
            "@type": "Person",
            "name": "Dr. André Molina"
          },
          "employee": {
            "@type": "Person", 
            "name": "Dr. André Molina",
            "jobTitle": "Cirurgião Oncológico"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-11-3258-3636",
            "contactType": "appointment booking",
            "availableLanguage": "Portuguese"
          }
        };

      case "article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data?.title || "Oncologia Cutânea - Dr. André Molina",
          "description": data?.description || "Informações especializadas sobre tratamento de câncer de pele, melanoma e carcinomas.",
          "author": {
            "@type": "Person",
            "name": "Dr. André Molina"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Dr. André Molina",
            "logo": {
              "@type": "ImageObject",
              "url": "https://andremedina.com.br/logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data?.url || "https://andremedina.com.br"
          },
          "datePublished": new Date().toISOString(),
          "dateModified": new Date().toISOString()
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;