import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-card border-b border-border">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <h1 className="text-xl font-semibold text-foreground">SEO AutoGen</h1>
      </div>
      
      <nav className="flex items-center gap-8">
        <a href="/" className="text-foreground hover:text-primary transition-colors">
          Dashboard
        </a>
        <a href="/history" className="text-muted-foreground hover:text-primary transition-colors">
          History
        </a>
        <a href="/settings" className="text-muted-foreground hover:text-primary transition-colors">
          Settings
        </a>
        
        <Avatar className="w-8 h-8">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback className="bg-slate-200 text-slate-700 text-sm">JD</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  );
};

export default Header;