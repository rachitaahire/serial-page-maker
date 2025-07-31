import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, Trash2, Calendar } from "lucide-react";

const History = () => {
  const articles = [
    {
      id: 1,
      title: "Complete Guide to React Hooks: useState, useEffect, and Beyond",
      keywords: ["React", "Hooks", "useState", "useEffect"],
      language: "English",
      wordCount: 1250,
      status: "Completed",
      createdAt: "Jan 15, 2025",
      writingStyle: "Professional"
    },
    {
      id: 2,
      title: "SEO Best Practices for Modern Websites in 2025",
      keywords: ["SEO", "Optimization", "Website", "Google"],
      language: "English", 
      wordCount: 890,
      status: "Completed",
      createdAt: "Jan 14, 2025",
      writingStyle: "Professional"
    },
    {
      id: 3,
      title: "JavaScript ES6+ Features Every Developer Should Know",
      keywords: ["JavaScript", "ES6", "Arrow Functions", "Promises"],
      language: "English",
      wordCount: 1450,
      status: "Completed", 
      createdAt: "Jan 13, 2025",
      writingStyle: "Professional"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Article History</h1>
              <p className="text-muted-foreground mt-1">Manage and view your generated articles</p>
            </div>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export All
            </Button>
          </div>

          <div className="grid gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.createdAt}
                        </div>
                        <span>{article.wordCount} words</span>
                        <span>{article.language}</span>
                        <span>{article.writingStyle}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {article.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {article.keywords.map((keyword, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;