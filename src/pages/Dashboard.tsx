import { useState, useEffect } from "react";
import { fetchTopCurrencies } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface CurrencyPair {
  pair: string;
  rate: number;
  dailyChange: number;
  weeklyChange: number;
}

const Dashboard = () => {
  const [currencyPairs, setCurrencyPairs] = useState<CurrencyPair[]>([]);
  const [selectedPair, setSelectedPair] = useState<CurrencyPair | null>(null);
  const [showModal, setShowModal] = useState(false);
  const { toast } = useToast();

  // Mock data for the chart
  const chartData = Array.from({ length: 30 }, (_, i) => ({
    date: `2024-${String(i + 1).padStart(2, '0')}`,
    rate: 1 + Math.random() * 0.2,
  }));

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const rates = await fetchTopCurrencies();
        const pairs = Object.entries(rates).slice(0, 10).map(([currency, rate]) => ({
          pair: `USD/${currency}`,
          rate: rate as number,
          dailyChange: (Math.random() * 2 - 1) * 2, // Mock daily change
          weeklyChange: (Math.random() * 2 - 1) * 5, // Mock weekly change
        }));
        setCurrencyPairs(pairs);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to fetch currency rates. Please try again later.",
        });
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 60000);
    return () => clearInterval(interval);
  }, [toast]);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Currency Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currencyPairs.map((pair) => (
            <div
              key={pair.pair}
              className="glass p-6 rounded-xl hover:border-neon/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{pair.pair}</h3>
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    pair.dailyChange >= 0 ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {pair.dailyChange >= 0 ? "+" : ""}
                  {pair.dailyChange.toFixed(2)}%
                </span>
              </div>

              <div className="text-2xl font-bold mb-4">{pair.rate.toFixed(4)}</div>

              <div className="flex justify-between text-sm text-gray-400 mb-4">
                <span>Weekly: {pair.weeklyChange >= 0 ? "+" : ""}{pair.weeklyChange.toFixed(2)}%</span>
              </div>

              <Button
                className="w-full bg-neon/10 hover:bg-neon/20 text-neon"
                onClick={() => {
                  setSelectedPair(pair);
                  setShowModal(true);
                }}
              >
                View Details
              </Button>
            </div>
          ))}
        </div>

        {showModal && selectedPair && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="glass w-full max-w-3xl p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">{selectedPair.pair} History</h2>
              <div className="h-[400px] mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2563EB20" />
                    <XAxis dataKey="date" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1a1b1e",
                        border: "1px solid #2563EB50",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="rate"
                      stroke="#2563EB"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <Button
                className="w-full bg-neon hover:bg-neon/90"
                onClick={() => setShowModal(false)}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;