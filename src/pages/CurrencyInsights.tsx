import React, { useState } from 'react';
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useQuery } from '@tanstack/react-query';
import { fetchTopCurrencies } from '@/lib/api';
import { ArrowUpRight, ArrowDownRight, TrendingUp, LineChart as LineChartIcon } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface CurrencyRate {
  date: string;
  USD_EUR: number;
  USD_GBP: number;
}

const CurrencyInsights = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('1W');
  const [selectedPair, setSelectedPair] = useState('USD/EUR');
  const [showMovingAverage, setShowMovingAverage] = useState(false);
  const { toast } = useToast();

  const { data: topCurrencies, isLoading, error } = useQuery({
    queryKey: ['topCurrencies'],
    queryFn: fetchTopCurrencies,
    meta: {
      onError: (error: Error) => {
        toast({
          variant: "destructive",
          title: "Error fetching currency data",
          description: "Please try again later.",
        });
        console.error("API Error:", error);
      }
    }
  });

  // Mock data for demonstration - replace with real API data
  const mockHistoricalData: CurrencyRate[] = [
    { date: '2024-01', USD_EUR: 0.92, USD_GBP: 0.79 },
    { date: '2024-02', USD_EUR: 0.93, USD_GBP: 0.78 },
    { date: '2024-03', USD_EUR: 0.91, USD_GBP: 0.77 },
  ];

  const trendCards = [
    {
      title: 'Top Mover',
      value: '+3.2%',
      pair: 'EUR/USD',
      icon: <ArrowUpRight className="w-6 h-6 text-green-500" />,
      trend: 'up'
    },
    {
      title: 'Biggest Drop',
      value: '-2.1%',
      pair: 'GBP/USD',
      icon: <ArrowDownRight className="w-6 h-6 text-red-500" />,
      trend: 'down'
    },
    {
      title: 'Most Stable',
      value: '±0.3%',
      pair: 'USD/JPY',
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      trend: 'stable'
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-neon"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Error Loading Data</h2>
          <p className="text-muted-foreground">Please try refreshing the page.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-40 py-2">
        <div className="container flex items-center gap-4">
          <Button variant="ghost" className="gap-2">
            <LineChartIcon className="w-4 h-4" />
            Historical
          </Button>
          <Button variant="ghost" className="gap-2">
            <TrendingUp className="w-4 h-4" />
            Trends
          </Button>
        </div>
      </nav>

      <main className="container pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          <Card className="p-6 h-fit sticky top-32">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground">Time Range</label>
                <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1W">1 Week</SelectItem>
                    <SelectItem value="1M">1 Month</SelectItem>
                    <SelectItem value="3M">3 Months</SelectItem>
                    <SelectItem value="1Y">1 Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground">Currency Pair</label>
                <Select value={selectedPair} onValueChange={setSelectedPair}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select currency pair" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD/EUR">USD/EUR</SelectItem>
                    <SelectItem value="USD/GBP">USD/GBP</SelectItem>
                    <SelectItem value="USD/JPY">USD/JPY</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm text-muted-foreground">Show Moving Average</label>
                <Switch checked={showMovingAverage} onCheckedChange={setShowMovingAverage} />
              </div>

              <Button className="w-full bg-neon hover:bg-neon/90">Apply Filters</Button>
            </div>
          </Card>

          <div className="space-y-8">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Historical Comparison</h2>
              <div className="h-[400px] w-full">
                <ChartContainer
                  config={{
                    USD_EUR: { label: "USD/EUR", color: "#3B82F6" },
                    USD_GBP: { label: "USD/GBP", color: "#10B981" }
                  }}
                >
                  <LineChart data={mockHistoricalData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="date" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip content={<ChartTooltip />} />
                    <Legend />
                    <Line type="monotone" dataKey="USD_EUR" stroke="#3B82F6" dot={false} />
                    <Line type="monotone" dataKey="USD_GBP" stroke="#10B981" dot={false} />
                  </LineChart>
                </ChartContainer>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {trendCards.map((card, index) => (
                <Card key={index} className="p-6 hover:border-neon transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-sm text-muted-foreground">{card.title}</h3>
                      <p className="text-2xl font-semibold">{card.value}</p>
                      <p className="text-sm text-muted-foreground">{card.pair}</p>
                    </div>
                    {card.icon}
                  </div>
                  <div className="h-[60px] mt-4">
                    <div className="w-full h-full bg-muted/20 rounded animate-pulse" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CurrencyInsights;