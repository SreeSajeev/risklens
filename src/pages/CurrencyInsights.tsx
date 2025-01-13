import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useQuery } from '@tanstack/react-query';
import { fetchTopCurrencies, fetchExchangeRate } from '@/lib/api';
import { ArrowUpRight, ArrowDownRight, TrendingUp, LineChart as LineChartIcon, ArrowLeft } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";

const CurrencyInsights = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('1W');
  const [selectedPair, setSelectedPair] = useState('USD/EUR');
  const [showMovingAverage, setShowMovingAverage] = useState(false);
  const [filteredData, setFilteredData] = useState<any[]>([]);
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

  const currencyData = [
    { date: '2024-03-01', rate: 1.0843, change: '+0.12%', volume: '1.2B' },
    { date: '2024-03-02', rate: 1.0856, change: '+0.15%', volume: '1.1B' },
    { date: '2024-03-03', rate: 1.0832, change: '-0.22%', volume: '1.3B' },
    { date: '2024-03-04', rate: 1.0867, change: '+0.32%', volume: '1.4B' },
    { date: '2024-03-05', rate: 1.0845, change: '-0.20%', volume: '1.2B' },
  ];

  useEffect(() => {
    const now = new Date();
    const filterData = () => {
      switch (selectedTimeRange) {
        case '1W':
          const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          setFilteredData(currencyData.filter(item => new Date(item.date) >= weekAgo));
          break;
        case '1M':
          const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          setFilteredData(currencyData.filter(item => new Date(item.date) >= monthAgo));
          break;
        default:
          setFilteredData(currencyData);
      }
    };
    filterData();
  }, [selectedTimeRange]);

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
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="container pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          <Card className="p-6 h-fit sticky top-32 animate-fade-in">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground">Time Range</label>
                <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
                  <SelectTrigger className="w-full transition-all duration-300 hover:border-neon">
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
                  <SelectTrigger className="w-full transition-all duration-300 hover:border-neon">
                    <SelectValue placeholder="Select currency pair" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD/EUR">USD/EUR</SelectItem>
                    <SelectItem value="USD/GBP">USD/GBP</SelectItem>
                    <SelectItem value="USD/JPY">USD/JPY</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm text-muted-foreground">Show Moving Average</label>
                <Switch 
                  checked={showMovingAverage} 
                  onCheckedChange={setShowMovingAverage}
                  className="data-[state=checked]:bg-neon"
                />
              </div>

              <Button className="w-full bg-neon hover:bg-neon/90 transition-all duration-300 transform hover:scale-105">
                Apply Filters
              </Button>
            </div>
          </Card>

          <div className="space-y-8">
            <Card className="p-6 animate-fade-in">
              <h2 className="text-xl font-semibold mb-6">Historical Data</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Rate</TableHead>
                      <TableHead>Change</TableHead>
                      <TableHead>Volume</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredData.map((row, index) => (
                      <TableRow key={index} className="hover:bg-neon/5 transition-colors duration-200">
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.rate}</TableCell>
                        <TableCell>{row.change}</TableCell>
                        <TableCell>{row.volume}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CurrencyInsights;

