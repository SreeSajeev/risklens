import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CurrencyConverter } from "@/components/CurrencyConverter";

const Index = () => {
  return (
    <div className="min-h-screen grid-background">
      <Header />
      
      <div className="relative">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-neon/20 text-neon px-4 py-2 rounded-full text-sm">
        Track, Predict, and Protect Your Currency Investments.!
        </div>
      </div>

      <main className="pt-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            Track, Predict, and Protect:<br />Empower Your Currency Decisions with Real-Time Insights.
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            RiskLens helps you navigate the dynamic world of currency exchange. With real-time data, predictive insights, and risk analysis, you can make smarter, data-driven financial decisions. 
            Stay ahead of the market with cutting-edge forecasting models and geopolitical risk tracking.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button className="bg-neon hover:bg-neon/90 min-w-[200px]">
                Get started for free
              </Button>
      
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-24">
            <div className="glass p-6">
              <h3 className="text-lg font-medium mb-2">Bills Management</h3>
              <p className="text-sm text-gray-400 mb-4">
                Easily manage, pay and reconcile business bills.
              </p>
              <Button variant="outline" className="w-full">Show as List</Button>
            </div>

            <div className="glass p-6">
              <h3 className="text-lg font-medium mb-2">Online Money Exchange</h3>
              <p className="text-sm text-gray-400 mb-4">
                Exchange money online with real-time rates.
              </p>
              <CurrencyConverter />
            </div>

            <div className="glass p-6">
              <h3 className="text-lg font-medium mb-2">My Credit Card</h3>
              <p className="text-sm text-gray-400 mb-4">
                View and manage your credit card details.
              </p>
              <Button variant="outline">Show Balance</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;