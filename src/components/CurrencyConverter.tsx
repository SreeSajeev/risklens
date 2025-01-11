import { Button } from "@/components/ui/button";
import { ArrowDownUp } from "lucide-react";

export function CurrencyConverter() {
  return (
    <div className="glass p-6 w-full max-w-md">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Amount</label>
            <input
              type="number"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-32 text-white"
              defaultValue="230.00"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Currency</label>
            <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-24 text-white">
              <option>EUR</option>
              <option>USD</option>
              <option>GBP</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="ghost" size="icon">
            <ArrowDownUp className="h-4 w-4 text-neon" />
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Amount</label>
            <input
              type="number"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-32 text-white"
              defaultValue="244.89"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Currency</label>
            <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-24 text-white">
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}