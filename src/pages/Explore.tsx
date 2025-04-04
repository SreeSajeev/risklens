
import { Button } from "@/components/ui/button";
import { DollarSign, BarChart3, TrendingUp, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Explore = () => {
  const features = [
    {
      title: "Currency Converter",
      description: "The Currency Converter provides users with the ability to easily convert a wide range of currencies in real time, ensuring that users can get accurate and up-to-date conversion rates for different currencies.",
      icon: <DollarSign className="w-12 h-12 text-neon" />,
      link: "/",
      buttonText: "Try it now"
    },
    {
      title: "Dashboard",
      description: "The Dashboard provides a dynamic, real-time view of the currency market, featuring live exchange rates, detailed performance metrics, and predictive trend analysis.",
      icon: <BarChart3 className="w-12 h-12 text-neon" />,
      link: "/dashboard",
      buttonText: "View Dashboard"
    },
    {
      title: "Currency Insights",
      description: "The Currency Insights feature provides real-time updates on currency trends, historical comparisons, and forecasts. This allows users to make informed decisions based on up-to-date market information. It highlights key trends, fluctuations, and helps users track market shifts.",
      icon: <TrendingUp className="w-12 h-12 text-neon" />,
      link: "/currency-insights",
      buttonText: "Explore Insights"
    },
    {
      title: "Project Documentation",
      description: "Comprehensive documentation about RiskLens including project overview, intended users, features, technical details, and future roadmap. Understand how the platform works and how it can benefit your financial planning.",
      icon: <FileText className="w-12 h-12 text-neon" />,
      link: "/documentation",
      buttonText: "View Documentation"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-center mb-4 animate-fade-in">
            Explore RiskLens Features
          </h1>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto animate-fade-in">
            Discover powerful tools for currency analysis, conversion, and market insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="mb-6">{feature.icon}</div>
              <h2 className="text-2xl font-semibold mb-4">{feature.title}</h2>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              <Link to={feature.link}>
                <Button className="w-full bg-neon hover:bg-neon/90">
                  {feature.buttonText}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
