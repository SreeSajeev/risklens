import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-neon/20 border border-neon/30 flex items-center justify-center">
            <span className="text-neon font-semibold">R</span>
          </div>
          <span className="font-semibold text-white">RiskLens</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Market</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            Pricing
          </Button>
          <Button className="bg-neon hover:bg-neon/90">
            Create account
          </Button>
        </div>
      </div>
    </header>
  );
}