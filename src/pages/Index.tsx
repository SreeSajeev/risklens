import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CurrencyConverter } from "@/components/CurrencyConverter";

const Index = () => {
  return (
    <div className="min-h-screen grid-background">
      <Header />
      
      <div className="relative">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-neon/20 text-neon px-4 py-2 rounded-full text-sm">
        Navigate currency markets with confidence!
        </div>
      </div>

      <main className="pt-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            Track, Predict, and Protect:<br />Empower Your Currency Decisions
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            RiskLens helps you navigate currency exchange with real-time data, predictive insights, and risk analysis for smarter financial decisions. 
            Stay ahead with advanced forecasting and geopolitical tracking.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button className="bg-neon hover:bg-neon/90 min-w-[200px]">
                Get started for free
              </Button>
      
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-24">
            <div className="glass p-6">
              <h3 className="text-lg font-medium mb-2">Currency Alerts</h3>
              <p className="text-sm text-gray-400 mb-4">
              Set custom alerts to track exchange rate fluctuations,
              receive real-time notifications,
              and stay informed about key market movements.
              </p>
              <Button variant="outline" className="w-full">Set Alert</Button>
            </div>

            <div className="glass p-6">
              <h3 className="text-lg font-medium mb-2">Market Predictions</h3>
              <p className="text-sm text-gray-400 mb-4">
              Get short-term predictions based on real-time data and forecasting models.
              </p>
              <CurrencyConverter />
              <Button variant="outline" className="w-full">View Predictions</Button>
            </div>

            <div className="glass p-6">
              <h3 className="text-lg font-medium mb-2">Geopolitical Risk Tracker</h3>
              <p className="text-sm text-gray-400 mb-4">
              Stay informed on global events, 
              from geopolitical shifts to economic policies,
              and understand their potential impact on currency markets.
              </p>
              <Button variant="outline">Track Risks</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;