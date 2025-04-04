
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { LogIn, LogOut, User } from "lucide-react";

export function Header() {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-neon/20 border border-neon/30 flex items-center justify-center">
                <span className="text-neon font-semibold">R</span>
              </div>
              <span className="font-semibold text-white">RiskLens</span>
            </div>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</Link>
          <Link to="/currency-insights" className="text-gray-400 hover:text-white transition-colors">Currency Insights</Link>
          <Link to="/risk-calculator" className="text-gray-400 hover:text-white transition-colors">Risk Calculator</Link>
          <Link to="/financial-planning" className="text-gray-400 hover:text-white transition-colors">Financial Planning</Link>
        </nav>
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-300 hidden md:block">
                <span className="font-medium">{user?.name || user?.email}</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-gray-600 text-gray-300 hover:text-white"
                onClick={logout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button className="bg-neon/20 hover:bg-neon/30 text-neon border border-neon/30">
                <User className="mr-2 h-4 w-4" />
                <span>Login</span>
              </Button>
            </Link>
          )}
          <Link to="/explore">
            <Button className="bg-neon hover:bg-neon/90">
              Explore RiskLens
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
