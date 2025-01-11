import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CurrencyConverter } from "@/components/CurrencyConverter";

const Index = () => {
  return (
    <div className="min-h-screen grid-background">
      <Header />
      
      <div className="relative">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-neon/20 text-neon px-4 py-2 rounded-full text-sm">
          Welcome to the beta version!
        </div>
      </div>

      <main className="pt-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
              A Touch of Class in<br />Your Every Financial Decision.
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
              Financial decisions don't have to be stressful or complicated. Here, we believe
              in taking a sophisticated approach to your money management.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button className="bg-neon hover:bg-neon/90 min-w-[200px]">
                Get started for free
              </Button>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-white/10 border border-white/20"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">
                  Trusted by over +20K<br />people in the Europe.
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-24">
            <div className="glass p-6">
              <h3 className="text-lg font-medium mb-2">Bills Management</h3>
              <p className="text-sm text-gray-400 mb-4">
                Easily manage, pay and reconcile business bills.
              </p>
              <Button variant="outline" className="w-full">Show as List</Button>
            </div>

            <div className="glass p-6">
              <h3 className="text-lg font-medium mb-2">Online Money Exchange</h3>
              <p className="text-sm text-gray-400 mb-4">
                Exchange money online with real-time rates.
              </p>
              <CurrencyConverter />
            </div>

            <div className="glass p-6">
              <h3 className="text-lg font-medium mb-2">My Credit Card</h3>
              <p className="text-sm text-gray-400 mb-4">
                View and manage your credit card details.
              </p>
              <Button variant="outline">Show Balance</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;