# BACKUP COMPLETO - Site Dr. André Molina
## Cirurgião Oncológico Especialista em Oncologia Cutânea

**Data do Backup:** 25/09/2025  
**URL:** https://andremedina.com.br  
**Tecnologias:** React + Vite + TypeScript + Tailwind CSS + Shadcn/UI

---

## 📋 INFORMAÇÕES DO PROJETO

### Estrutura Geral
- **Tipo:** Site médico institucional
- **Especialidade:** Oncologia Cutânea
- **Profissional:** Dr. André Molina
- **Localização:** São Paulo, SP, Brasil
- **Funcionalidades:** Informações médicas, procedimentos, contato, WhatsApp

### Páginas Principais
1. **Home (/)** - Página inicial
2. **Sobre (/sobre)** - Informações do médico
3. **Cirurgias (/cirurgias)** - Procedimentos especializados
4. **Oncologia Cutânea (/oncologia-cutanea)** - Informações sobre câncer de pele
5. **Blog (/blog)** - Artigos médicos
6. **Contato (/contato)** - Formulário e informações de contato

---

## 🏗️ ARQUITETURA DO SISTEMA

### Stack Tecnológico
```
Frontend: React 18.3.1 + TypeScript
Build: Vite
Styling: Tailwind CSS + CSS Variables (Design System)
Components: Shadcn/UI + Radix UI
Routing: React Router DOM 6.30.1
SEO: React Helmet + Structured Data + AI Optimization
Icons: Lucide React
Animations: Tailwind CSS Animate
```

### Design System (src/index.css)
```css
:root {
  /* Core Colors */
  --background: 0 0% 100%;
  --foreground: 210 19% 20%;
  --primary: 186 100% 50%;
  --secondary: 186 25% 95%;
  --accent: 186 100% 50%;
  
  /* Medical Theme */
  --medical-primary: 186 100% 50%;
  --medical-secondary: 186 80% 45%;
  --medical-light: 186 50% 90%;
  --medical-gradient: linear-gradient(135deg, hsl(186 100% 50%), hsl(186 80% 45%));
  
  /* Shadows */
  --shadow-medical: 0 10px 40px -10px hsl(186 100% 50% / 0.3);
  --shadow-soft: 0 4px 20px -4px hsl(186 30% 20% / 0.1);
}
```

---

## 📄 CONTEÚDO DAS PÁGINAS

### HOME PAGE (Index.tsx)
**Meta Tags:**
- Title: "Dr. André Molina - Cirurgião Oncológico Especialista em Oncologia Cutânea | São Paulo"
- Description: "Dr. André Molina, cirurgião oncológico especializado em melanoma, carcinoma basocelular..."
- Keywords: "André Molina, Andre Molina, melanoma São Paulo, carcinoma basocelular..."

**Componentes:**
- Header (navegação principal)
- Hero (seção principal com imagem)
- About (informações sobre o médico)
- Contact (formulário de contato)
- Footer (rodapé com informações)
- WhatsAppButton (botão flutuante)

### ONCOLOGIA CUTÂNEA (/oncologia-cutanea)

**Principais Condições Tratadas:**

1. **Melanoma**
   - Incidência: 4% dos cânceres de pele, 80% das mortes
   - Fatores: Exposição solar, histórico familiar, pele clara, múltiplas pintas
   - Tratamento: Excisão cirúrgica, biópsia linfonodo sentinela, imunoterapia

2. **Carcinoma Basocelular**
   - Incidência: 70% dos cânceres de pele
   - Fatores: Exposição UV crônica, idade avançada, pele clara
   - Tratamento: Excisão cirúrgica, cirurgia de Mohs

3. **Carcinoma Espinocelular**
   - Incidência: 25% dos cânceres de pele
   - Fatores: Exposição UV, lesões pré-malignas, imunossupressão
   - Tratamento: Excisão com margens, avaliação linfonodos

4. **Carcinoma de Células de Merkel**
   - Incidência: 0,7 casos por 100.000 habitantes
   - Fatores: Idade avançada, imunossupressão, polyomavirus
   - Tratamento: Excisão ampla, radioterapia, imunoterapia

5. **Dermatofibrossarcoma Protuberante**
   - Incidência: <1% dos sarcomas
   - Fatores: Trauma prévio, predisposição genética
   - Tratamento: Excisão ampla, cirurgia de Mohs

**Imunoterapias:**

1. **Imunoterapia no Melanoma**
   - Medicamentos: Pembrolizumab (Keytruda®), Nivolumab (Opdivo®), Ipilimumab (Yervoy®)
   - Indicações: Neoadjuvante, adjuvante, doença metastática
   - Benefícios: Melhora da sobrevida, respostas duradouras

2. **Imunoterapia no Carcinoma Espinocelular**
   - Medicamentos: Cemiplimab, Pembrolizumab
   - Indicações: Tumores localmente avançados, metastáticos
   - Benefícios: Controle da doença, melhora qualidade de vida

### CIRURGIAS (/cirurgias)

**Procedimentos Especializados:**

1. **Ampliação de Margens**
   - Análise histopatológica das margens
   - Planejamento cirúrgico personalizado
   - Preservação máxima de tecido saudável

2. **Cirurgia de Mohs**
   - Controle microscópico das margens em tempo real
   - Preservação de tecido normal
   - Menor necessidade de reconstrução

3. **Biópsia de Linfonodo Sentinela**
   - **O que é:** Procedimento minimamente invasivo para detectar disseminação
   - **Importância:** Estadiamento preciso do melanoma
   - **Procedimento:** 
     - Antes: Injeção de material rastreador, mapeamento
     - Durante: Corante azul, localização, remoção, análise
   - **Benefícios:** Detecção precoce, estadiamento preciso, planejamento tratamento
   - **Indicações:** Melanoma 1,0-4,0mm espessura, casos especiais 0,8-1mm
   - **Riscos:** Dor leve, inchaço, baixo risco infecção

4. **Perfusão Isolada de Membro**
   - **O que é:** Tratamento regional com alta concentração de quimioterapia
   - **Indicações:** 
     - Metástases melanoma confinadas ao membro
     - Sarcomas de tecidos moles
     - Tumores irressecáveis
   - **Como funciona:**
     - Isolamento vascular
     - Aplicação de torniquete
     - Circulação de quimioterapia aquecida (39-40°C, 60-90min)
   - **Medicamentos:**
     - Melfalan (principal)
     - TNF Beromun (tasonermina) - potencializa efeito
   - **Eficácia:** 75% taxa de resposta
   - **Efeitos colaterais:** Vermelhidão, descamação, inchaço, alterações unhas
   - **Vantagens:** Evita amputação, altas doses locais, preserva função

---

## 🎨 ASSETS E ILUSTRAÇÕES

### Imagens Médicas
- `hero-medical.jpg` - Imagem principal do hero
- `hero-medical-office.jpg` - Consultório médico
- `hero-medical-professional.jpg` - Profissional médico
- `perfusao-isolada-ilustracao.jpg` - Ilustração perfusão isolada
- `biopsia-linfonodo-ilustracao.jpg` - Ilustração biópsia linfonodo

### Componentes UI Principais
- Button (variantes: default, outline, secondary, destructive)
- Card (estrutura de conteúdo)
- Accordion (conteúdo expansível)
- Dialog (modais)
- Form (formulários com validação)

---

## 🔧 CONFIGURAÇÕES TÉCNICAS

### Meta Tags SEO Principais
```html
<title>Dr. André Molina - Cirurgião Oncológico | Especialista em Oncologia Cutânea</title>
<meta name="description" content="Dr. André Molina, cirurgião oncológico especialista em oncologia cutânea. Tratamento especializado em melanoma, carcinoma basocelular e carcinomas de pele com técnicas avançadas em São Paulo."/>
<meta name="keywords" content="André Molina, Andre Molina, cirurgião oncológico, oncologia cutânea, melanoma São Paulo, carcinoma basocelular, tratamento câncer pele"/>
<link rel="canonical" href="https://andremedina.com.br"/>
```

### Estrutura de Dados (JSON-LD)
- Person (Dr. André Molina)
- Medical Organization
- Articles (páginas de conteúdo)

### Funcionalidades Especiais
- **SEO AI Optimization:** Meta tags específicas para indexação por IA
- **WhatsApp Integration:** Botão flutuante para contato direto
- **Responsive Design:** Design responsivo para todos os dispositivos
- **Structured Data:** Schema.org para melhor indexação
- **Dark Mode Support:** Sistema de cores preparado para modo escuro

---

## 📱 CONTATOS E INFORMAÇÕES

### Informações do Médico
- **Nome:** Dr. André Molina
- **Especialidade:** Cirurgião Oncológico
- **Subespecialidade:** Oncologia Cutânea
- **Localização:** São Paulo, SP
- **Site:** https://andremedina.com.br

### Funcionalidades de Contato
- Formulário de contato integrado
- WhatsApp button flutuante
- Informações de localização
- Links para redes sociais

---

## 📦 DEPENDÊNCIAS PRINCIPAIS

```json
{
  "@radix-ui/*": "Componentes UI base",
  "@tanstack/react-query": "Gerenciamento de estado/cache",
  "react": "18.3.1",
  "react-dom": "18.3.1", 
  "react-router-dom": "6.30.1",
  "react-helmet": "6.1.0",
  "lucide-react": "0.462.0",
  "tailwindcss": "Styling framework",
  "class-variance-authority": "Component variants",
  "clsx": "Conditional classes",
  "zod": "Schema validation"
}
```

---

## 🚀 DEPLOY E HOSPEDAGEM

### Configuração Atual
- **Platform:** Lovable
- **Domain:** andremedina.com.br
- **Build:** Vite production build
- **Assets:** Static files servidos via CDN

### Arquivos de Configuração
- `vite.config.ts` - Configuração do Vite
- `tailwind.config.ts` - Configuração do Tailwind
- `tsconfig.json` - Configuração TypeScript
- `index.html` - Template HTML base

---

## 💾 BACKUP ESTRUTURAL

### Estrutura de Diretórios
```
src/
├── components/
│   ├── ui/           # Componentes base (shadcn)
│   ├── SEO/          # Componentes SEO
│   ├── Header.tsx    # Navegação principal
│   ├── Hero.tsx      # Seção hero
│   ├── About.tsx     # Seção sobre
│   ├── Contact.tsx   # Formulário contato
│   ├── Footer.tsx    # Rodapé
│   └── WhatsAppButton.tsx
├── pages/
│   ├── Index.tsx          # Home
│   ├── Sobre.tsx          # Sobre o médico
│   ├── Cirurgias.tsx      # Procedimentos
│   ├── OncologiaCutanea.tsx # Informações médicas
│   ├── Blog.tsx           # Artigos
│   ├── Contato.tsx        # Contato
│   └── NotFound.tsx       # 404
├── assets/           # Imagens e recursos
├── hooks/            # React hooks customizados
├── lib/              # Utilitários
├── App.tsx           # Componente principal
├── main.tsx          # Entry point
└── index.css         # Estilos globais e design system
```

---

## 📝 NOTAS IMPORTANTES

1. **Design System:** Todo o visual é baseado no design system definido no `index.css`
2. **SEO Otimizado:** Todas as páginas têm meta tags completas e structured data
3. **Responsivo:** Layout adaptado para desktop, tablet e mobile
4. **Acessibilidade:** Componentes seguem padrões WCAG
5. **Performance:** Otimizado para carregamento rápido
6. **Manutenibilidade:** Código modular e bem documentado

---

**FIM DO BACKUP**  
*Este backup contém todas as informações essenciais para reconstruir o site Dr. André Molina*