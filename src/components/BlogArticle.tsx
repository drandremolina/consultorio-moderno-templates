import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, User } from "lucide-react";

interface BlogArticleProps {
  title: string;
  date: string;
  author: string;
  content: React.ReactNode;
}

const BlogArticle = ({ title, date, author, content }: BlogArticleProps) => {
  return (
    <article className="max-w-4xl mx-auto">
      <Card className="p-8 md:p-12 bg-card border-border shadow-lg">
        {/* Header */}
        <header className="mb-8 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {content}
        </div>

        {/* Contact Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <Card className="bg-primary/5 border-primary/20 p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Tem dúvidas sobre este tratamento?
            </h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato conosco para mais informações sobre imunoterapia e tratamento de melanoma.
            </p>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.location.href = 'mailto:contato@exactaoncologia.com.br?subject=Dúvida sobre Imunoterapia'}
            >
              <Mail className="h-4 w-4 mr-2" />
              Enviar Pergunta
            </Button>
          </Card>
        </div>
      </Card>
    </article>
  );
};

export default BlogArticle;
