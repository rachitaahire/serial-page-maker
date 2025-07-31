import { ChevronRight } from "lucide-react";

const ArticleHistory = () => {
  const articles = [
    {
      title: "React Hooks Guide",
      date: "Generated on Jan 15, 2025"
    },
    {
      title: "SEO Best Practices", 
      date: "Generated on Jan 14, 2025"
    },
    {
      title: "JavaScript Fundamentals",
      date: "Generated on Jan 13, 2025"
    }
  ];

  return (
    <div className="w-80 bg-card border-l border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-foreground">Article History</h2>
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </div>
      
      <div className="space-y-4">
        {articles.map((article, index) => (
          <div 
            key={index}
            className="p-4 bg-muted rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <h3 className="font-medium text-foreground mb-1">{article.title}</h3>
            <p className="text-sm text-muted-foreground">{article.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleHistory;