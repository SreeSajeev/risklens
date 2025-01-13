import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Gauge } from "lucide-react";
import { Link } from "react-router-dom";

type VolatilityLevel = "low" | "medium" | "high";
type RiskTolerance = "low" | "medium" | "high";

const RiskCalculator = () => {
  const [amount, setAmount] = useState<string>("");
  const [volatility, setVolatility] = useState<VolatilityLevel>("medium");
  const [riskTolerance, setRiskTolerance] = useState<RiskTolerance>("medium");
  const [riskScore, setRiskScore] = useState<number | null>(null);

  const volatilityFactors = {
    low: 0.02,
    medium: 0.05,
    high: 0.1,
  };

  const riskToleranceWeights = {
    low: 2,
    medium: 1.5,
    high: 1,
  };

  const calculateRiskScore = () => {
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount)) return;

    const score = (numericAmount * volatilityFactors[volatility]) / riskToleranceWeights[riskTolerance];
    setRiskScore(Math.min(100, Math.max(0, score)));
  };

  const getRiskCategory = (score: number) => {
    if (score < 33) return "Low Risk";
    if (score < 66) return "Medium Risk";
    return "High Risk";
  };

  const resetCalculator = () => {
    setAmount("");
    setVolatility("medium");
    setRiskTolerance("medium");
    setRiskScore(null);
  };

  return (
    <div className="min-h-screen bg-background pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 group">
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <Card className="w-full animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Risk Score Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Investment Amount ($)</label>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter investment amount"
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Exchange Rate Volatility</label>
                <Select value={volatility} onValueChange={(value: VolatilityLevel) => setVolatility(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select volatility level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Risk Tolerance</label>
                <Select value={riskTolerance} onValueChange={(value: RiskTolerance) => setRiskTolerance(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select risk tolerance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-4">
                <Button onClick={calculateRiskScore} className="flex-1">Calculate Risk Score</Button>
                <Button variant="outline" onClick={resetCalculator} className="flex-1">Reset</Button>
              </div>
            </div>

            {riskScore !== null && (
              <div className="space-y-4 animate-fade-in">
                <div className="relative h-4 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-primary transition-all duration-500"
                    style={{ width: `${riskScore}%` }}
                  />
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold mb-2">
                    Risk Score: {riskScore.toFixed(1)}
                  </p>
                  <p className="text-muted-foreground">
                    Category: {getRiskCategory(riskScore)}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RiskCalculator;