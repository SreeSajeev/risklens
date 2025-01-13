import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CurrencyConverter } from "@/components/CurrencyConverter";
import { Link } from "react-router-dom";
import { Calculator } from "lucide-react";

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
            <div className="glass p-6 group hover:border-neon/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="w-5 h-5 text-neon" />
                <h3 className="text-lg font-medium">Risk Score Calculator</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Assess your investment risk instantly by analyzing investment amount, volatility, and risk tolerance. Get clear insights with our easy-to-use calculator.
                <br /><br />
                Whether you're a cautious investor or looking to take on more risk, the Risk Calculator gives you a clear understanding of how external factors like exchange rate fluctuations might impact your portfolio. 
                Make informed decisions with ease and confidence, knowing the risk associated with your investments.
              </p>
              <Link to="/risk-calculator">
                <Button variant="outline" className="w-full group-hover:border-neon/50 group-hover:text-neon transition-colors">
                  Try It Now
                </Button>
              </Link>
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
              <h3 className="text-lg font-medium mb-2">Financial Planning</h3>
              <p className="text-sm text-gray-400 mb-4">
              Plan your future expenses and income with currency exchange rate projections.
              Easily assess how fluctuations in currency exchange rates could impact your financial future. 
              <br /><br />
              Whether you are a business owner managing international transactions or an individual planning personal finances,
              this tool helps you forecast changes in your income, expenses, or profits based on real-time exchange rate projections.
              </p>
              <Button variant="outline">Plan your Future Now!</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;