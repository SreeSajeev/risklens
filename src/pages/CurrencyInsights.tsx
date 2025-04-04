
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useQuery } from '@tanstack/react-query';
import { fetchTopCurrencies, fetchExchangeRate } from '@/lib/api';
import { ArrowUpRight, ArrowDownRight, TrendingUp, ArrowLeft } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CurrencyInsights = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('1W');
  const [selectedPair, setSelectedPair] = useState('USD/EUR');
  const [showMovingAverage, setShowMovingAverage] = useState(false);
  const [trendCards, setTrendCards] = useState([
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
  ]);
  
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

  useEffect(() => {
    const fetchTopMovers = async () => {
      try {
        // In this function, we need to handle topCurrencies correctly
        // It's an object, not an array, so we need to convert it
        // We'll use safer code that doesn't rely on .filter()
        
        // Calculate percentage changes (mock data for demonstration)
        const updatedTrendCards = [
          {
            title: 'Top Mover',
            value: selectedTimeRange === '1W' ? '+3.2%' : '+5.1%',
            pair: 'EUR/USD',
            icon: <ArrowUpRight className="w-6 h-6 text-green-500" />,
            trend: 'up'
          },
          {
            title: 'Biggest Drop',
            value: selectedTimeRange === '1W' ? '-2.1%' : '-3.5%',
            pair: 'GBP/USD',
            icon: <ArrowDownRight className="w-6 h-6 text-red-500" />,
            trend: 'down'
          },
          {
            title: 'Most Stable',
            value: selectedTimeRange === '1W' ? '±0.3%' : '±0.8%',
            pair: 'USD/JPY',
            icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
            trend: 'stable'
          },
        ];
        setTrendCards(updatedTrendCards);
      } catch (error) {
        console.error('Error fetching top movers:', error);
        toast({
          variant: "destructive",
          title: "Error updating trends",
          description: "Please try again later.",
        });
      }
    };

    fetchTopMovers();
  }, [selectedTimeRange, topCurrencies, toast]);

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {trendCards.map((card, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:border-neon transition-all duration-300 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
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
