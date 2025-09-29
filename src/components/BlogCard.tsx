import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  slug: string;
}

const BlogCard = ({ title, date, author, excerpt, slug }: BlogCardProps) => {
  return (
    <Card className="p-6 hover:shadow-xl transition-shadow duration-300 bg-card border-border">
      <article className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
          <Link to={`/blog/${slug}`}>
            {title}
          </Link>
        </h2>
        
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

        <p className="text-muted-foreground leading-relaxed">
          {excerpt}
        </p>

        <Link to={`/blog/${slug}`}>
          <Button variant="outline" className="group">
            Ler artigo completo
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </article>
    </Card>
  );
};

export default BlogCard;
