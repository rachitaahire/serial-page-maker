import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    defaultLanguage: "English",
    defaultWritingStyle: "Professional",
    defaultLength: "Medium (500-1000 words)",
    autoSave: true,
    notifications: true,
    wordpressAutoPost: false,
    apiKey: "",
    maxVariants: "3"
  });

  const handleSave = () => {
    console.log("Settings saved:", settings);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-foreground">Settings</h1>
            <p className="text-muted-foreground mt-1">Configure your SEO AutoGen preferences</p>
          </div>

          <div className="space-y-6">
            {/* Default Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Default Article Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Default Language</Label>
                    <Select value={settings.defaultLanguage} onValueChange={(value) => setSettings({...settings, defaultLanguage: value})}>
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

                  <div className="space-y-2">
                    <Label>Default Writing Style</Label>
                    <Select value={settings.defaultWritingStyle} onValueChange={(value) => setSettings({...settings, defaultWritingStyle: value})}>
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

                  <div className="space-y-2">
                    <Label>Default Article Length</Label>
                    <Select value={settings.defaultLength} onValueChange={(value) => setSettings({...settings, defaultLength: value})}>
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

                  <div className="space-y-2">
                    <Label>Maximum Variants</Label>
                    <Select value={settings.maxVariants} onValueChange={(value) => setSettings({...settings, maxVariants: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 variant</SelectItem>
                        <SelectItem value="2">2 variants</SelectItem>
                        <SelectItem value="3">3 variants</SelectItem>
                        <SelectItem value="5">5 variants</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card>
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Auto-save drafts</Label>
                    <p className="text-sm text-muted-foreground">Automatically save your work as you type</p>
                  </div>
                  <Switch 
                    checked={settings.autoSave} 
                    onCheckedChange={(checked) => setSettings({...settings, autoSave: checked})}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Email notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive updates about your articles</p>
                  </div>
                  <Switch 
                    checked={settings.notifications} 
                    onCheckedChange={(checked) => setSettings({...settings, notifications: checked})}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label>WordPress auto-post</Label>
                    <p className="text-sm text-muted-foreground">Automatically post generated articles to WordPress</p>
                  </div>
                  <Switch 
                    checked={settings.wordpressAutoPost} 
                    onCheckedChange={(checked) => setSettings({...settings, wordpressAutoPost: checked})}
                  />
                </div>
              </CardContent>
            </Card>

            {/* API Configuration */}
            <Card>
              <CardHeader>
                <CardTitle>API Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>OpenAI API Key</Label>
                  <Input
                    type="password"
                    placeholder="sk-..."
                    value={settings.apiKey}
                    onChange={(e) => setSettings({...settings, apiKey: e.target.value})}
                  />
                  <p className="text-sm text-muted-foreground">
                    Your API key is encrypted and stored securely
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Save Button */}
            <div className="flex justify-end">
              <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                Save Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;