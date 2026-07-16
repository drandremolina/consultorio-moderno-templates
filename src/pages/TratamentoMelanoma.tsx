import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Helmet } from "react-helmet";
import StructuredData from "@/components/SEO/StructuredData";
import AIOptimization from "@/components/SEO/AIOptimization";
const TratamentoMelanoma = () => {
  return <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Tratamento do Melanoma | Dr. André Molina - Cirurgião Oncológico</title>
        <meta name="description" content="Tratamento completo do melanoma: cirurgia oncológica, imunoterapia e terapia-alvo. Saiba mais sobre estadiamento, fatores de risco e as abordagens terapêuticas mais modernas." />
        <meta name="keywords" content="tratamento melanoma, imunoterapia melanoma, terapia-alvo BRAF, cirurgia oncológica, estadiamento melanoma, pembrolizumabe, nivolumabe" />
        <link rel="canonical" href="https://www.drandremolina.com/tratamento-melanoma" />
        <meta property="og:title" content="Tratamento do Melanoma | Dr. André Molina" />
        <meta property="og:description" content="Abordagens modernas no tratamento do melanoma: cirurgia, imunoterapia e terapia-alvo com Dr. André Molina, especialista em oncologia cutânea." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.drandremolina.com/tratamento-melanoma" />
      </Helmet>

      <StructuredData type="article" data={{
      headline: "Tratamento do Melanoma",
      datePublished: new Date().toISOString(),
      author: "Dr. André Molina"
    }} />
      <AIOptimization page="oncology" customTerms={["melanoma", "imunoterapia", "terapia-alvo", "estadiamento", "BRAF", "pembrolizumabe", "nivolumabe", "tratamento melanoma"]} />

      <Header />
      <WhatsAppButton />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-medical-light to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Tratamento do Melanoma
              </h1>
              <p className="text-lg text-muted-foreground">
                Abordagens modernas e personalizadas no tratamento do melanoma cutâneo
              </p>
            </div>
          </div>
        </section>

        {/* Introdução */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="card-medical">
                <CardContent className="pt-6">
                  <p className="text-lg leading-relaxed text-foreground mb-4">
                    O melanoma é uma forma de câncer de pele que se origina nos melanócitos, as células responsáveis pela produção de melanina, o pigmento que dá cor à pele. Embora seja menos comum do que outros tipos de câncer de pele, como o carcinoma basocelular e o carcinoma espinocelular, o melanoma é reconhecido pela sua maior agressividade e potencial de metástase, o que o torna a forma mais letal de câncer cutâneo.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground">
                    A compreensão de sua epidemiologia, dos fatores que contribuem para o seu desenvolvimento e das abordagens terapêuticas é fundamental para a prevenção, o diagnóstico precoce e o manejo eficaz da doença.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Incidência e Epidemiologia */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Incidência e Epidemiologia</h2>
              <Card className="card-medical">
                <CardContent className="pt-6 space-y-4">
                  <p className="text-lg leading-relaxed text-foreground">
                    A incidência do melanoma tem apresentado uma tendência de crescimento em diversas partes do mundo, refletindo mudanças nos hábitos de exposição solar e uma maior expectativa de vida.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground">
                    Para o triênio de 2023 a 2025, o INCA estimou cerca de <strong>8.980 novos casos de melanoma por ano</strong> no país, o que corresponde a um risco de 4,13 por 100 mil habitantes. Essa estimativa inclui 4.640 casos em homens e 4.340 em mulheres. É importante notar que a distribuição da incidência não é homogênea no território nacional, sendo as regiões Sul e Sudeste as que apresentam as maiores taxas, o que está associado à maior concentração de populações com ascendência europeia e, consequentemente, fototipos de pele mais claros.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground">
                    Globalmente, a tendência de aumento é ainda mais acentuada. Projeções indicam que o número de casos anuais de melanoma no mundo poderá saltar de 325 mil em 2020 para cerca de <strong>510 mil em 2040</strong>, representando um aumento projetado de 57%. Tais dados reforçam a necessidade de campanhas de conscientização e de estratégias de saúde pública focadas na prevenção primária.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fatores de Risco */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Fatores de Risco</h2>
              <Card className="card-medical mb-6">
                <CardContent className="pt-6">
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    O desenvolvimento do melanoma é multifatorial, envolvendo uma complexa interação entre predisposição genética e fatores ambientais. O principal fator de risco modificável é a exposição à radiação ultravioleta (UV).
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Exposição UV e Histórico de Queimaduras</h3>
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    A exposição à radiação ultravioleta (UV), proveniente do sol e de fontes artificiais como câmaras de bronzeamento, é o fator de risco mais significativo para a maioria dos melanomas. A exposição intermitente e intensa, que resulta em queimaduras solares graves (especialmente aquelas com bolhas e ocorridas na infância e adolescência), aumenta drasticamente o risco de desenvolvimento da doença ao longo da vida. O uso de câmaras de bronzeamento artificial é classificado como carcinógeno humano e está fortemente correlacionado ao aumento da incidência de melanoma.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mb-4">Fatores Genéticos e Fenotípicos</h3>
                  <p className="text-lg leading-relaxed text-foreground mb-4">
                    A predisposição genética e as características físicas do indivíduo desempenham um papel crucial:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-lg text-foreground ml-4 mb-4">
                    <li><strong>Fototipo de Pele:</strong> Pessoas com pele clara, que se queimam facilmente e bronzeiam pouco (fototipos I e II), além de indivíduos com olhos azuis ou verdes e cabelos loiros ou ruivos, possuem um risco significativamente maior.</li>
                    <li><strong>Nevos (Pintas) Atípicos ou Múltiplos:</strong> A presença de um grande número de nevos comuns (geralmente mais de 50) ou de nevos atípicos (displásicos) é um marcador de risco elevado.</li>
                    <li><strong>Histórico Pessoal e Familiar:</strong> Indivíduos que já tiveram melanoma ou outros cânceres de pele, ou aqueles com histórico familiar da doença (parentes de primeiro grau), possuem um risco aumentado, sugerindo uma base genética para a susceptibilidade.</li>
                  </ul>
                  <p className="text-lg leading-relaxed text-foreground">
                    Outros fatores incluem a presença de nevos congênitos gigantes e a imunossupressão.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Estadiamento Clínico */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Estadiamento Clínico (EC) do Melanoma</h2>
              <Card className="card-medical mb-6">
                <CardContent className="pt-6">
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    O estadiamento do melanoma é um processo crucial que define a extensão da doença no organismo, orientando as decisões terapêuticas e fornecendo informações prognósticas. O sistema mais utilizado é o TNM (Tumor, Linfonodo, Metástase) da American Joint Committee on Cancer (AJCC), que classifica a doença em Estágios Clínicos (EC) de I a IV.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-foreground mb-4">
                    O estadiamento baseia-se em três características principais do tumor primário e da doença sistêmica:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-lg text-foreground ml-4 mb-6">
                    <li><strong>Espessura de Breslow (T):</strong> Medida da profundidade do tumor em milímetros. Tumores mais espessos (T) estão associados a um pior prognóstico.</li>
                    <li><strong>Ulceração:</strong> Presença de ruptura na pele sobre o tumor. A ulceração é um indicador de maior agressividade.</li>
                    <li><strong>Acometimento Linfonodal (N) e Metástase à Distância (M):</strong> Avaliação se o câncer se espalhou para os gânglios linfáticos regionais ou para órgãos distantes.</li>
                  </ol>

                  <p className="text-lg font-semibold text-foreground mb-4">
                    A seguir, um resumo dos Estágios Clínicos I, II, III e IV:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-border p-3 text-left font-semibold">Estágio Clínico (EC)</th>
                          <th className="border border-border p-3 text-left font-semibold">Extensão da Doença</th>
                          <th className="border border-border p-3 text-left font-semibold">Características Principais</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3 font-semibold">EC I</td>
                          <td className="border border-border p-3">Doença localizada (Melanoma fino)</td>
                          <td className="border border-border p-3">Tumor primário fino (geralmente &lt; 1,0 mm) ou com espessura intermediária, sem ulceração e sem disseminação para linfonodos ou órgãos distantes.</td>
                        </tr>
                        <tr className="bg-muted/30">
                          <td className="border border-border p-3 font-semibold">EC II</td>
                          <td className="border border-border p-3">Doença localizada (Melanoma espesso)</td>
                          <td className="border border-border p-3">Tumor primário mais espesso (geralmente &gt; 1,0 mm) ou com ulceração, mas ainda restrito ao local de origem, sem disseminação para linfonodos ou órgãos distantes.</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3 font-semibold">EC III</td>
                          <td className="border border-border p-3">Doença Loco Regional</td>
                          <td className="border border-border p-3">O tumor primário se espalhou para os gânglios linfáticos regionais (linfonodos) ou apresenta metástases de trânsito/satélite (lesões cutâneas ou subcutâneas entre o tumor primário e os linfonodos), mas não há metástase à distância.</td>
                        </tr>
                        <tr className="bg-muted/30">
                          <td className="border border-border p-3 font-semibold">EC IV</td>
                          <td className="border border-border p-3">Doença Generalizada (Sistêmica)</td>
                          <td className="border border-border p-3">Presença de metástase à distância (M), ou seja, o câncer se espalhou para órgãos internos como pulmão, cérebro, fígado ou linfonodos distantes.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tratamento */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Tratamento</h2>
              <Card className="card-medical mb-6">
                <CardContent className="pt-6">
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    O tratamento do melanoma é altamente individualizado e depende fundamentalmente do estágio da doença, mas também de fatores como o estado geral de saúde do paciente e a presença de mutações genéticas específicas no tumor (ex: mutação BRAF). As abordagens podem ser divididas em tratamento cirúrgico (local) e tratamento clínico (sistêmico).
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mb-4">Tratamento Cirúrgico</h3>
                  <p className="text-lg leading-relaxed text-foreground mb-4">
                    O tratamento cirúrgico é a espinha dorsal do manejo do melanoma, especialmente nos estágios iniciais.
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-lg text-foreground ml-4 mb-6">
                    <li><strong>Excisão Ampla:</strong> É o procedimento padrão para o tumor primário. Consiste na remoção do tumor com uma margem de segurança de pele saudável ao redor. A largura dessa margem é determinada pela espessura de Breslow do tumor.</li>
                    <li><strong>Biópsia do Linfonodo Sentinela (BLS):</strong>Biópsia do Linfonodo Sentinela (BLS):Biópsia do Linfonodo Sentinela (BLS):Biópsia do Linfonodo Sentinela (BLS): É um procedimento diagnóstico e prognóstico que pode ser recomendado para melanomas em Estágios I e II com risco de disseminação. Se a BLS for positiva (células cancerosas encontradas), o paciente passa a ser considerado estágio clínico lll novos tratamentos modernos podem ser utilizados.</li>
                    <li><strong>Dissecção Linfonodal:</strong>Dissecção Linfonodal:Dissecção Linfonodal: Remoção de todos os gânglios linfáticos de uma região específica, realizada quando há evidência de envolvimento linfonodal, sendo o tratamento padrão para a componente loco regional do Estágio III, porém devido a novos estudos e tecnologias, atualmente, houve uma redução significativa do uso dessas cirurgias radicais.</li>
                    <li><strong>Metastasectomia:</strong> Em casos selecionados de Estágio IV, a remoção cirúrgica de metástases isoladas pode ser considerada para alívio de sintomas ou controle da doença.</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-foreground mb-4">Tratamento Clínico (Sistêmico)</h3>
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    O tratamento clínico é a principal estratégia para o Estágio III (adjuvante, após a cirurgia) e o Estágio IV (tratamento primário). As opções mais recentes e eficazes incluem Imunoterapia e Terapia-Alvo, que revolucionaram o prognóstico da doença avançada.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mb-3">Imunoterapia</h4>
                  <p className="text-lg leading-relaxed text-foreground mb-4">
                    A imunoterapia utiliza medicamentos para estimular o próprio sistema imunológico do paciente a reconhecer e destruir as células cancerosas.
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-lg text-foreground ml-4 mb-6">
                    <li><strong>Inibidores de Checkpoint Imunológico:</strong>Dissecção Linfonodal: Remoção de todos os gânglios linfáticos de uma região específica, realizada quando há evidência de envolvimento linfonodal, sendo o tratamento padrão para a componente loco regional do Estágio III, porém devido a novos estudos e tecnologias, atualmente, houve uma redução significativa do uso dessas cirurgias radicais.</li>
                    <li><strong>Uso:</strong> Tratamento adjuvante (Estágios IIb, IIc e III) para reduzir o risco de recidiva e tratamento primário para o Estágio IV.</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-foreground mb-3">Terapia-Alvo</h4>
                  <p className="text-lg leading-relaxed text-foreground mb-4">
                    A terapia-alvo é utilizada quando o tumor apresenta mutações genéticas específicas, sendo a mais comum a mutação no gene BRAF (presente em cerca de metade dos melanomas).
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-lg text-foreground ml-4 mb-6">
                    <li><strong>Inibidores de BRAF e MEK:</strong> Para pacientes com melanoma positivo para mutação BRAF, a combinação de inibidores de BRAF (ex: dabrafenibe) e inibidores de MEK (ex: trametinibe) é altamente eficaz. Essa combinação bloqueia a via de sinalização que estimula o crescimento das células cancerosas mutadas.</li>
                    <li><strong>Uso:</strong> Tratamento adjuvante (Estágio III) e tratamento primário para o Estágio IV com mutação BRAF.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 gradient-medical text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Agende sua Consulta
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Tratamento especializado e personalizado para melanoma com as abordagens mais modernas
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={() => window.location.href = 'tel:+5511999999999'}>
                <Phone className="mr-2 h-5 w-5" />
                Entre em Contato
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default TratamentoMelanoma;