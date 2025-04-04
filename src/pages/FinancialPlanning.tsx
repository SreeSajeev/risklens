import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BarChart3, LineChart, PieChart, Percent } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";
import { useToast } from "@/hooks/use-toast";

const FinancialPlanning = () => {
  const [duration, setDuration] = useState("1");
  const [initialInvestment, setInitialInvestment] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState("");
  const [futureValue, setFutureValue] = useState(0);
  const [showChart, setShowChart] = useState(false);
  const [chartType, setChartType] = useState("area");
  const { toast } = useToast();

  const calculateFutureValue = () => {
    if (!initialInvestment || !monthlyContribution || !expectedReturn || !duration || !exchangeRate) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const initial = parseFloat(initialInvestment);
    const monthly = parseFloat(monthlyContribution);
    const rate = parseFloat(expectedReturn) / 100 / 12;
    const nper = parseInt(duration) * 12;
    const exRate = parseFloat(exchangeRate);

    let calculatedFutureValue = initial * Math.pow(1 + rate, nper) + monthly * ((Math.pow(1 + rate, nper) - 1) / rate);
    calculatedFutureValue *= exRate;

    setFutureValue(calculatedFutureValue);
    setShowChart(true);
  };

  const generateChartData = () => {
    const initial = parseFloat(initialInvestment);
    const monthly = parseFloat(monthlyContribution);
    const rate = parseFloat(expectedReturn) / 100 / 12;
    const nper = parseInt(duration) * 12;
    const exRate = parseFloat(exchangeRate);
    let cumulativeValue = initial;
    let data = [];

    for (let i = 1; i <= nper; i++) {
      cumulativeValue = cumulativeValue * (1 + rate) + monthly;
      data.push({
        month: i,
        value: cumulativeValue * exRate,
      });
    }
    return data;
  };

  // Fix the toFixed error by using type checking
  const formatCurrency = (value: any) => {
    if (typeof value === 'number') {
      return value.toFixed(2);
    }
    return value;
  };

  return (
    <div className="min-h-screen grid-background">
      <Header />

      <main className="pt-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Financial Planning Tool</CardTitle>
              <CardDescription>
                Estimate your future investment value based on your inputs.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="initialInvestment">Initial Investment</Label>
                  <Input
                    type="number"
                    id="initialInvestment"
                    placeholder="Enter initial investment"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="monthlyContribution">Monthly Contribution</Label>
                  <Input
                    type="number"
                    id="monthlyContribution"
                    placeholder="Enter monthly contribution"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expectedReturn">Expected Annual Return (%)</Label>
                  <Input
                    type="number"
                    id="expectedReturn"
                    placeholder="Enter expected annual return"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="duration">Investment Duration (Years)</Label>
                  <Input
                    type="number"
                    id="duration"
                    placeholder="Enter investment duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currency">Currency</Label>
                  <Select onValueChange={setCurrency} defaultValue={currency}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="GBP">GBP</SelectItem>
                      <SelectItem value="JPY">JPY</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="exchangeRate">Exchange Rate (to USD)</Label>
                  <Input
                    type="number"
                    id="exchangeRate"
                    placeholder="Enter exchange rate"
                    value={exchangeRate}
                    onChange={(e) => setExchangeRate(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-neon hover:bg-neon/90" onClick={calculateFutureValue}>
                Calculate Future Value <ArrowRight className="ml-2" />
              </Button>
            </CardFooter>
          </Card>

          {showChart && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Projected Investment Growth</CardTitle>
                <CardDescription>
                  Here's a projection of how your investment might grow over time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="area" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="area" onClick={() => setChartType("area")}>
                      <LineChart className="mr-2 h-4 w-4" />
                      Area Chart
                    </TabsTrigger>
                    <TabsTrigger value="bar" onClick={() => setChartType("bar")}>
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Bar Chart
                    </TabsTrigger>
                    <TabsTrigger value="pie" onClick={() => setChartType("pie")}>
                      <PieChart className="mr-2 h-4 w-4" />
                      Pie Chart
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="area">
                    <ResponsiveContainer width="100%" height={400}>
                      <AreaChart
                        data={generateChartData()}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => formatCurrency(value)}/>
                        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#c6b6e9" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </TabsContent>
                  <TabsContent value="bar">
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart
                        data={generateChartData()}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => formatCurrency(value)}/>
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </TabsContent>
                  <TabsContent value="pie">
                    <div>
                      <p className="text-center text-gray-500">Pie chart is not available for this type of data.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <p className="text-lg font-semibold">
                  Future Value: {currency} {formatCurrency(futureValue)}
                </p>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default FinancialPlanning;
