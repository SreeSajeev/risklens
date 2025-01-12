import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownUp } from "lucide-react";
import { fetchExchangeRate } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";

const CURRENCIES = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "INR"];

export function CurrencyConverter() {
  const [amount, setAmount] = useState<string>("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState<string>("");
  const [rate, setRate] = useState<number | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const updateRate = async () => {
      try {
        const newRate = await fetchExchangeRate(fromCurrency, toCurrency);
        setRate(newRate);
        const converted = (parseFloat(amount) * newRate).toFixed(2);
        setConvertedAmount(converted);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to fetch exchange rate. Please try again later.",
        });
      }
    };

    if (amount && !isNaN(parseFloat(amount))) {
      updateRate();
    }

    const interval = setInterval(updateRate, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [amount, fromCurrency, toCurrency, toast]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleReset = () => {
    setAmount("1");
    setFromCurrency("USD");
    setToCurrency("EUR");
  };

  return (
    <div className="glass p-6 w-full max-w-md mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Amount</label>
            <input
              type="number"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-32 text-white"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">From</label>
            <select
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-24 text-white"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {CURRENCIES.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="ghost" size="icon" onClick={handleSwap}>
            <ArrowDownUp className="h-4 w-4 text-neon" />
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Converted Amount</label>
            <input
              type="text"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-32 text-white"
              value={convertedAmount}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">To</label>
            <select
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-24 text-white"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {CURRENCIES.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        {rate && (
          <div className="text-sm text-gray-400 text-center">
            1 {fromCurrency} = {rate.toFixed(4)} {toCurrency}
          </div>
        )}

        <div className="flex gap-4">
          <Button variant="outline" className="w-full" onClick={handleReset}>
            Reset
          </Button>
          <Button className="w-full bg-neon hover:bg-neon/90" onClick={() => window.location.href = '/dashboard'}>
            View Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}