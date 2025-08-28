import { Bell, Search, Settings, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

export const Header = () => {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Navigation */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-primary-foreground rounded-full border-t-transparent animate-spin" />
              </div>
              <h1 className="text-xl font-bold text-primary">MarketFlow</h1>
            </div>

            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" className="text-primary font-medium">
                Dashboard
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                ConnectOS
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                InsightEngine
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Reports
              </Button>
            </nav>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search insights, campaigns..." 
                className="pl-10 w-64 bg-muted/50"
              />
            </div>

            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent">
                3
              </Badge>
            </Button>

            <Button variant="ghost" size="sm">
              <Settings className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};