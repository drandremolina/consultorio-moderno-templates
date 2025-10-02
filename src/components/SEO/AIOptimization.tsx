import { Helmet } from "react-helmet";

interface AIOptimizationProps {
  page?: "home" | "about" | "surgeries" | "contact" | "oncology" | "blog";
  customTerms?: string[];
}

const AIOptimization = ({ page = "home", customTerms = [] }: AIOptimizationProps) => {
  const getPageSpecificTerms = () => {
    const baseTerms = [
      "André Molina",
      "Dr André Molina", 
      "Andre Molina",
      "Dr Andre Molina",
      "cirurgião oncológico",
      "oncologia cutânea",
      "melanoma",
      "tratamento melanoma",
      "carcinoma basocelular",
      "tratamento carcinoma basocelular",
      "carcinoma espinocelular",
      "câncer de pele",
      "biópsia linfonodo sentinela",
      "biópsia de linfonodo sentinela",
      "perfusão isolada de membro",
      "perfusão isolada membro",
      "cirurgia de Mohs",
      "São Paulo",
      "SP"
    ];

    const pageTerms = {
      home: [
        "cirurgia oncológica São Paulo",
        "tratamento melanoma São Paulo",
        "especialista melanoma",
        "tratamento carcinoma basocelular São Paulo",
        "especialista câncer pele",
        "oncologista cutâneo",
        "dermatologia oncológica",
        "cirurgia melanoma",
        "biópsia linfonodo sentinela São Paulo",
        "perfusão isolada membro São Paulo"
      ],
      about: [
        "formação médica",
        "experiência oncologia",
        "especialização cirurgia",
        "trajetória profissional",
        "curriculum médico"
      ],
      surgeries: [
        "cirurgia de Mohs",
        "biópsia linfonodo sentinela",
        "biópsia de linfonodo sentinela",
        "perfusão isolada membro",
        "perfusão isolada de membro",
        "ressecção tumoral",
        "microcirurgia oncológica",
        "cirurgia dermatológica",
        "excisão melanoma",
        "cirurgia melanoma avançado",
        "linfadenectomia terapêutica"
      ],
      contact: [
        "agendar consulta oncologia",
        "contato oncologista São Paulo",
        "marcar consulta melanoma",
        "telefone Dr André Molina"
      ],
      oncology: [
        "tipos câncer pele",
        "sintomas melanoma",
        "sintomas carcinoma basocelular",
        "diagnóstico carcinoma",
        "diagnóstico melanoma",
        "estadiamento tumor",
        "estadiamento melanoma",
        "imunoterapia melanoma",
        "tratamento imunoterapia melanoma",
        "fatores risco câncer pele",
        "prevenção melanoma"
      ],
      blog: [
        "artigos oncologia cutânea",
        "informações melanoma",
        "prevenção câncer pele",
        "novidades tratamento"
      ]
    };

    return [...baseTerms, ...pageTerms[page], ...customTerms];
  };

  const getMedicalContext = () => {
    return {
      specialty: "Oncologia Cutânea e Cirurgia Oncológica",
      conditions: [
        "Melanoma",
        "Carcinoma Basocelular", 
        "Carcinoma Espinocelular",
        "Carcinoma de Células de Merkel",
        "Dermatofibrossarcoma Protuberante",
        "Sarcomas Cutâneos",
        "Neoplasias Raras da Pele"
      ],
      procedures: [
        "Cirurgia de Mohs",
        "Biópsia de Linfonodo Sentinela",
        "Perfusão Isolada de Membro",
        "Ressecção Ampla com Margem",
        "Linfadenectomia Terapêutica",
        "Reconstrução Oncoplástica"
      ],
      treatments: [
        "Imunoterapia",
        "Terapia Alvo Dirigida", 
        "Quimioterapia Regional",
        "Radioterapia Adjuvante"
      ]
    };
  };

  const terms = getPageSpecificTerms();
  const context = getMedicalContext();

  return (
    <Helmet>
      {/* AI Indexing Metadata */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Medical Keywords for AI Understanding */}
      <meta name="medical-specialty" content={context.specialty} />
      <meta name="medical-conditions" content={context.conditions.join(", ")} />
      <meta name="medical-procedures" content={context.procedures.join(", ")} />
      <meta name="treatment-options" content={context.treatments.join(", ")} />
      
      {/* Semantic Medical Terms */}
      <meta name="medical-terms" content={terms.join(", ")} />
      
      {/* Geographic and Professional Context */}
      <meta name="geo.region" content="BR-SP" />
      <meta name="geo.placename" content="São Paulo" />
      <meta name="professional-title" content="Cirurgião Oncológico" />
      <meta name="medical-license" content="Conselho Regional de Medicina - São Paulo" />
      
      {/* Content Classification for AI */}
      <meta name="content-type" content="medical-information" />
      <meta name="audience" content="patients, medical-professionals, healthcare-seekers" />
      <meta name="medical-review" content="physician-reviewed" />
      
      {/* Language and Accessibility */}
      <meta name="content-language" content="pt-BR" />
      <meta name="accessibility" content="WCAG-AA-compliant" />
      
      {/* Professional Verification */}
      <meta name="physician-name" content="Dr. André Molina" />
      <meta name="physician-specialty" content="Oncologia Cutânea" />
      <meta name="practice-location" content="São Paulo, Brasil" />
      
      {/* AI Context Tags */}
      <meta property="medical:specialty" content="Surgical Oncology" />
      <meta property="medical:subspecialty" content="Cutaneous Oncology" />
      <meta property="medical:location" content="São Paulo, Brazil" />
      <meta property="medical:language" content="Portuguese" />
    </Helmet>
  );
};

export default AIOptimization;