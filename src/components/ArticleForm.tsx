import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Wand2 } from "lucide-react";

const ArticleForm = () => {
  const [formData, setFormData] = useState({
    topic: "",
    keywords: "",
    language: "English",
    writingStyle: "Professional",
    articleLength: "Medium (500-1000 words)",
    targetAudience: "General Public",
    variants: "Max 3 for demo",
    wordpressUrl: "",
    username: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex-1 max-w-4xl mx-auto p-8">
      <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
        <h1 className="text-2xl font-semibold text-foreground mb-8">Create SEO Optimized Article</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Topic Section */}
          <div className="space-y-2">
            <Label htmlFor="topic" className="text-sm font-medium text-foreground">
              Topic
            </Label>
            <Textarea
              id="topic"
              placeholder="Enter your article topic or provide a brief description..."
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              className="min-h-[120px] resize-none"
            />
            <p className="text-sm text-muted-foreground">
              Provide a clear topic or description for your article
            </p>
          </div>

          {/* Keywords Section */}
          <div className="space-y-2">
            <Label htmlFor="keywords" className="text-sm font-medium text-foreground">
              Keywords (Comma Separated)
            </Label>
            <Input
              id="keywords"
              placeholder="e.g. Reactjs, Hook, Context"
              value={formData.keywords}
              onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
            />
            <p className="text-sm text-muted-foreground">
              Add relevant keywords to optimize your content
            </p>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Language */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">Language</Label>
              <Select value={formData.language} onValueChange={(value) => setFormData({ ...formData, language: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Spanish">Spanish</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                  <SelectItem value="German">German</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Writing Style */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">Writing Style</Label>
              <Select value={formData.writingStyle} onValueChange={(value) => setFormData({ ...formData, writingStyle: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Professional">Professional</SelectItem>
                  <SelectItem value="Casual">Casual</SelectItem>
                  <SelectItem value="Academic">Academic</SelectItem>
                  <SelectItem value="Creative">Creative</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Article Length */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">Article Length</Label>
              <Select value={formData.articleLength} onValueChange={(value) => setFormData({ ...formData, articleLength: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Short (300-500 words)">Short (300-500 words)</SelectItem>
                  <SelectItem value="Medium (500-1000 words)">Medium (500-1000 words)</SelectItem>
                  <SelectItem value="Long (1000-2000 words)">Long (1000-2000 words)</SelectItem>
                  <SelectItem value="Extended (2000+ words)">Extended (2000+ words)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Target Audience */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">Target Audience</Label>
              <Select value={formData.targetAudience} onValueChange={(value) => setFormData({ ...formData, targetAudience: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="General Public">General Public</SelectItem>
                  <SelectItem value="Beginners">Beginners</SelectItem>
                  <SelectItem value="Professionals">Professionals</SelectItem>
                  <SelectItem value="Experts">Experts</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Variants */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-foreground">Variants</Label>
            <Select value={formData.variants} onValueChange={(value) => setFormData({ ...formData, variants: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Max 3 for demo">Max 3 for demo</SelectItem>
                <SelectItem value="1 variant">1 variant</SelectItem>
                <SelectItem value="2 variants">2 variants</SelectItem>
                <SelectItem value="3 variants">3 variants</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Generate Button */}
          <Button type="submit" className="w-full h-12 bg-slate-600 hover:bg-slate-700 text-white">
            <Wand2 className="w-4 h-4 mr-2" />
            Generate Article
          </Button>

          <Separator className="my-8" />

          {/* WordPress Integration */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">W</span>
              </div>
              <h2 className="text-lg font-medium text-foreground">WordPress Integration</h2>
            </div>
            
            <p className="text-sm text-muted-foreground">
              To automatically post to your WordPress blog, install our plugin and provide your credentials below:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="wordpressUrl" className="text-sm font-medium text-foreground">
                  WordPress Admin URL
                </Label>
                <Input
                  id="wordpressUrl"
                  placeholder="https://yoursite.com/wp-admin"
                  value={formData.wordpressUrl}
                  onChange={(e) => setFormData({ ...formData, wordpressUrl: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium text-foreground">
                  Username
                </Label>
                <Input
                  id="username"
                  placeholder="admin"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleForm;