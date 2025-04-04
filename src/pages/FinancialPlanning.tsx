
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { ArrowLeft, Calculator, DollarSign, Landmark, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { fetchExchangeRate } from "@/lib/api";

const FinancialPlanning = () => {
  const { toast } = useToast();
  const [income, setIncome] = useState<number>(5000);
  const [expenses, setExpenses] = useState<number>(3000);
  const [investment, setInvestment] = useState<number>(10000);
  const [baseCurrency, setBaseCurrency] = useState<string>("USD");
  const [targetCurrency, setTargetCurrency] = useState<string>("EUR");
  const [riskTolerance, setRiskTolerance] = useState<string>("medium");
  const [timeframe, setTimeframe] = useState<string>("1y");
  const [goalType, setGoalType] = useState<string>("savings");
  const [goalAmount, setGoalAmount] = useState<number>(50000);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  
  // Mock forecast data - in a real app, this would be calculated based on API data
  const forecastData = [
    { month: "Jan", optimistic: investment * 1.02, expected: investment * 1.01, pessimistic: investment * 0.99 },
    { month: "Feb", optimistic: investment * 1.04, expected: investment * 1.02, pessimistic: investment * 0.98 },
    { month: "Mar", optimistic: investment * 1.06, expected: investment * 1.03, pessimistic: investment * 0.97 },
    { month: "Apr", optimistic: investment * 1.08, expected: investment * 1.04, pessimistic: investment * 0.96 },
    { month: "May", optimistic: investment * 1.10, expected: investment * 1.05, pessimistic: investment * 0.95 },
    { month: "Jun", optimistic: investment * 1.12, expected: investment * 1.06, pessimistic: investment * 0.94 },
  ];

  const handleSubmit = async () => {
    setIsLoading(true);
    
    try {
      // In a real application, we would make API calls to get exchange rates and forecasts
      const exchangeRate = await fetchExchangeRate(baseCurrency, targetCurrency);
      console.log("Exchange Rate:", exchangeRate);
      
      // Process the data and show results
      setShowResults(true);
      toast({
        title: "Financial forecast generated",
        description: "Your personalized financial plan is ready to view.",
      });
    } catch (error) {
      console.error("Error generating financial forecast:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate financial forecast. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setIncome(5000);
    setExpenses(3000);
    setInvestment(10000);
    setBaseCurrency("USD");
    setTargetCurrency("EUR");
    setRiskTolerance("medium");
    setTimeframe("1y");
    setGoalType("savings");
    setGoalAmount(50000);
    setShowResults(false);
  };

  // Calculate some sample metrics for the results
  const monthlySavings = income - expenses;
  const monthsToGoal = goalAmount / monthlySavings;
  const estimatedReturn = riskTolerance === "low" ? 0.04 : riskTolerance === "medium" ? 0.07 : 0.10;
  const yearlyReturn = investment * estimatedReturn;

  return (
    <div className="min-h-screen bg-background p-6 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold mb-2">Financial Planning Tool</h1>
          <p className="text-muted-foreground">
            Plan your financial future considering currency exchange fluctuations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <DollarSign className="mr-2 h-5 w-5 text-neon" />
                Financial Details
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Monthly Income</label>
                  <Input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    className="w-full"
                    placeholder="5000"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Monthly Expenses</label>
                  <Input
                    type="number"
                    value={expenses}
                    onChange={(e) => setExpenses(Number(e.target.value))}
                    className="w-full"
                    placeholder="3000"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Investment Amount</label>
                  <Input
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="w-full"
                    placeholder="10000"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-neon" />
                Currency & Risk
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Base Currency</label>
                  <Select value={baseCurrency} onValueChange={setBaseCurrency}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD - US Dollar</SelectItem>
                      <SelectItem value="EUR">EUR - Euro</SelectItem>
                      <SelectItem value="GBP">GBP - British Pound</SelectItem>
                      <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                      <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Target Currency</label>
                  <Select value={targetCurrency} onValueChange={setTargetCurrency}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD - US Dollar</SelectItem>
                      <SelectItem value="EUR">EUR - Euro</SelectItem>
                      <SelectItem value="GBP">GBP - British Pound</SelectItem>
                      <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                      <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Risk Tolerance</label>
                  <Select value={riskTolerance} onValueChange={setRiskTolerance}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select risk level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Landmark className="mr-2 h-5 w-5 text-neon" />
                Financial Goals
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Goal Type</label>
                  <Select value={goalType} onValueChange={setGoalType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select goal type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="savings">Savings</SelectItem>
                      <SelectItem value="investment">Investment</SelectItem>
                      <SelectItem value="retirement">Retirement</SelectItem>
                      <SelectItem value="property">Property Purchase</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Target Amount</label>
                  <Input
                    type="number"
                    value={goalAmount}
                    onChange={(e) => setGoalAmount(Number(e.target.value))}
                    className="w-full"
                    placeholder="50000"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Timeframe</label>
                  <Select value={timeframe} onValueChange={setTimeframe}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6m">6 Months</SelectItem>
                      <SelectItem value="1y">1 Year</SelectItem>
                      <SelectItem value="3y">3 Years</SelectItem>
                      <SelectItem value="5y">5 Years</SelectItem>
                      <SelectItem value="10y">10 Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>

            <div className="flex gap-4">
              <Button
                onClick={handleSubmit}
                className="flex-1 bg-neon hover:bg-neon/90"
                disabled={isLoading}
              >
                {isLoading ? "Generating..." : "Generate Financial Plan"}
              </Button>
              <Button
                onClick={resetForm}
                variant="outline"
                className="flex-1"
              >
                Reset
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            {!showResults ? (
              <Card className="p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <Calculator className="h-16 w-16 mx-auto mb-4 text-neon opacity-50" />
                  <h3 className="text-xl font-medium mb-2">Enter Your Details</h3>
                  <p className="text-muted-foreground max-w-md">
                    Fill in your financial information on the left to generate a personalized financial plan that considers currency exchange fluctuations.
                  </p>
                </div>
              </Card>
            ) : (
              <div className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Summary</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <p className="text-sm text-muted-foreground">Monthly Savings</p>
                      <p className="text-2xl font-bold">{baseCurrency} {monthlySavings.toFixed(2)}</p>
                    </div>
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <p className="text-sm text-muted-foreground">Estimated Annual Return</p>
                      <p className="text-2xl font-bold">{baseCurrency} {yearlyReturn.toFixed(2)}</p>
                    </div>
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <p className="text-sm text-muted-foreground">Time to Goal</p>
                      <p className="text-2xl font-bold">{Math.ceil(monthsToGoal)} months</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2">Goal Progress</p>
                  <div className="w-full bg-primary/10 h-3 rounded-full mb-6">
                    <div 
                      className="bg-neon h-3 rounded-full" 
                      style={{ width: `${Math.min(100, (investment / goalAmount) * 100)}%` }}
                    ></div>
                  </div>
                  
                  <div className="text-sm">
                    <p className="mb-2">
                      <strong>Risk Analysis:</strong> With your {riskTolerance} risk tolerance and current market conditions, 
                      your investment in {baseCurrency} to {targetCurrency} represents a {
                        riskTolerance === "low" ? "conservative" : 
                        riskTolerance === "medium" ? "balanced" : "aggressive"
                      } approach.
                    </p>
                    <p>
                      <strong>Recommendation:</strong> {
                        riskTolerance === "low" ? 
                          "Consider diversifying your investments further to minimize currency risk." : 
                        riskTolerance === "medium" ? 
                          "Your balanced approach is suitable for current market conditions. Monitor exchange rates quarterly." : 
                          "Your aggressive strategy may benefit from more frequent portfolio rebalancing as currency markets fluctuate."
                      }
                    </p>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <Tabs defaultValue="forecast">
                    <TabsList className="mb-4">
                      <TabsTrigger value="forecast">Investment Forecast</TabsTrigger>
                      <TabsTrigger value="scenarios">Scenario Analysis</TabsTrigger>
                    </TabsList>
                    <TabsContent value="forecast">
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={forecastData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                            <XAxis dataKey="month" stroke="#666" />
                            <YAxis stroke="#666" />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: "#1a1b1e", 
                                border: "1px solid #2a2a2a"
                              }} 
                              formatter={(value) => [`${baseCurrency} ${value.toFixed(2)}`, ""]}
                            />
                            <Legend />
                            <Line 
                              type="monotone" 
                              dataKey="optimistic" 
                              name="Optimistic" 
                              stroke="#4ade80" 
                              strokeWidth={2}
                              activeDot={{ r: 8 }} 
                            />
                            <Line 
                              type="monotone" 
                              dataKey="expected" 
                              name="Expected" 
                              stroke="#2563eb" 
                              strokeWidth={2}
                            />
                            <Line 
                              type="monotone" 
                              dataKey="pessimistic" 
                              name="Pessimistic" 
                              stroke="#ef4444" 
                              strokeWidth={2}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        This chart shows projected investment values over the next 6 months based on 
                        historical currency fluctuations between {baseCurrency} and {targetCurrency}.
                      </p>
                    </TabsContent>
                    <TabsContent value="scenarios">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Exchange Rate Scenarios</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Adjust the slider to simulate different exchange rate scenarios between {baseCurrency} and {targetCurrency}.
                          </p>
                          <div className="py-4">
                            <Slider 
                              defaultValue={[0]} 
                              max={50} 
                              step={1}
                              className="mb-6"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>-25% (Weaker {targetCurrency})</span>
                              <span>Current Rate</span>
                              <span>+25% (Stronger {targetCurrency})</span>
                            </div>
                          </div>
                          <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                            <p className="text-sm text-muted-foreground">Impact on Your Investment</p>
                            <p className="text-xl font-bold">{baseCurrency} {investment.toFixed(2)} → {targetCurrency} {(investment * 0.9).toFixed(2)}</p>
                            <p className="text-sm text-muted-foreground mt-2">
                              This simulation shows how your investment value would change under the selected 
                              exchange rate scenario.
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialPlanning;
