
import { ArrowLeft, Book, Code, FileText, Layout, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background p-6 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold mb-2">RiskLens Documentation</h1>
          <p className="text-muted-foreground">
            Comprehensive documentation for understanding and using the RiskLens platform
          </p>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Project Overview</TabsTrigger>
            <TabsTrigger value="users">Intended Users</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="technical">Technical Documentation</TabsTrigger>
            <TabsTrigger value="usage">How to Use</TabsTrigger>
            <TabsTrigger value="roadmap">Future Enhancements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <Card className="p-8">
              <div className="flex items-start mb-6">
                <FileText className="h-8 w-8 mr-4 text-neon" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                  <div className="prose prose-invert max-w-none">
                    <p>
                      RiskLens is a comprehensive financial analysis platform that focuses on currency risk 
                      management and investment planning in international markets. It provides users with 
                      tools to assess, monitor, and mitigate financial risks associated with currency 
                      fluctuations and global market volatility.
                    </p>
                    
                    <h3 className="text-xl font-medium mt-6 mb-3">The Problem</h3>
                    <p>
                      In today's interconnected global economy, individuals and businesses face significant 
                      challenges when dealing with multiple currencies:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Unpredictable Exchange Rates:</strong> Currency values fluctuate constantly, 
                        making financial planning difficult.
                      </li>
                      <li>
                        <strong>Hidden Risks:</strong> Many investors don't fully understand how currency 
                        movements affect their portfolios.
                      </li>
                      <li>
                        <strong>Lack of User-Friendly Tools:</strong> Existing financial analysis tools are 
                        often complex and intimidating for average users.
                      </li>
                    </ul>
                    
                    <h3 className="text-xl font-medium mt-6 mb-3">Key Benefits</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Simplified Risk Assessment:</strong> Clear, easy-to-understand risk scores 
                        for investments across different currencies.
                      </li>
                      <li>
                        <strong>Data-Driven Insights:</strong> Real-time market data and predictive analytics 
                        to inform financial decisions.
                      </li>
                      <li>
                        <strong>Personalized Financial Planning:</strong> Custom tools that account for 
                        individual risk tolerance and financial goals.
                      </li>
                      <li>
                        <strong>Intuitive Visualization:</strong> Charts and graphs that make complex 
                        financial data accessible to all users.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="users">
            <Card className="p-8">
              <div className="flex items-start mb-6">
                <User className="h-8 w-8 mr-4 text-neon" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Intended Users</h2>
                  <div className="prose prose-invert max-w-none">
                    <p>
                      RiskLens is designed to serve a diverse range of users with varying levels of financial expertise:
                    </p>
                    
                    <h3 className="text-xl font-medium mt-6 mb-3">Individual Investors</h3>
                    <p>
                      People who manage their own investment portfolios and want to understand how currency 
                      fluctuations might impact their returns. This includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Retail investors with international stock holdings</li>
                      <li>People planning for retirement with global investments</li>
                      <li>Individuals who frequently transfer money across borders</li>
                    </ul>
                    
                    <h3 className="text-xl font-medium mt-6 mb-3">Small Business Owners</h3>
                    <p>
                      Entrepreneurs and business owners who operate internationally and need to manage currency risks:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Import/export businesses</li>
                      <li>E-commerce sellers with international customers</li>
                      <li>Service providers with global clients</li>
                    </ul>
                    
                    <h3 className="text-xl font-medium mt-6 mb-3">Financial Advisors</h3>
                    <p>
                      Professionals who guide clients on investment strategies and need tools to explain 
                      currency risk clearly:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Independent financial advisors</li>
                      <li>Wealth managers</li>
                      <li>Investment consultants</li>
                    </ul>
                    
                    <h3 className="text-xl font-medium mt-6 mb-3">Financial Education</h3>
                    <p>
                      Students and educators in the field of finance who can use RiskLens as a learning tool:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Finance and economics students</li>
                      <li>Financial literacy programs</li>
                      <li>Self-directed learners</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="features">
            <Card className="p-8">
              <div className="flex items-start mb-6">
                <Layout className="h-8 w-8 mr-4 text-neon" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Features & Functionality</h2>
                  
                  <div className="space-y-8">
                    <div className="bg-primary/10 p-6 rounded-lg">
                      <h3 className="text-xl font-medium mb-3">Dashboard Overview</h3>
                      <p className="mb-4">
                        A comprehensive dashboard displaying real-time market tracking, user-specific financial 
                        forecasts, and geopolitical risk alerts.
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Real-time currency rate monitoring</li>
                        <li>Interactive charts and visualizations</li>
                        <li>Personalized watchlist for currencies of interest</li>
                        <li>Historical performance data</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/10 p-6 rounded-lg">
                      <h3 className="text-xl font-medium mb-3">Risk Score Calculator</h3>
                      <p className="mb-4">
                        An intuitive tool that allows users to enter investment details and generates a 
                        numerical risk assessment.
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Input fields for investment amount, volatility, and risk tolerance</li>
                        <li>Risk calculation formula that weighs multiple factors</li>
                        <li>Visual representation of risk level</li>
                        <li>Personalized recommendations based on results</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/10 p-6 rounded-lg">
                      <h3 className="text-xl font-medium mb-3">Market Predictions</h3>
                      <p className="mb-4">
                        Short-term currency forecasts based on sophisticated predictive models and real-time data.
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Currency conversion calculator</li>
                        <li>Trend analysis for major currency pairs</li>
                        <li>Prediction confidence indicators</li>
                        <li>Alert system for significant market movements</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/10 p-6 rounded-lg">
                      <h3 className="text-xl font-medium mb-3">Financial Planning Tool</h3>
                      <p className="mb-4">
                        A comprehensive tool for assessing future income, expenses, and financial goals 
                        with consideration for exchange rate fluctuations.
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Input for current income and expenses</li>
                        <li>Investment amount and currency selection</li>
                        <li>Financial goal setting and tracking</li>
                        <li>Scenario planning for different economic conditions</li>
                        <li>Personalized recommendations based on user profiles</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="technical">
            <Card className="p-8">
              <div className="flex items-start mb-6">
                <Code className="h-8 w-8 mr-4 text-neon" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Technical Documentation</h2>
                  
                  <h3 className="text-xl font-medium mb-3">Tech Stack</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Frontend</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>React with TypeScript</li>
                        <li>Vite for build tooling</li>
                        <li>Tailwind CSS for styling</li>
                        <li>Shadcn UI for component library</li>
                        <li>Recharts for data visualization</li>
                        <li>React Router for navigation</li>
                        <li>TanStack Query for data fetching</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">APIs & Services</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>ExchangeRate-API for currency data</li>
                        <li>Custom algorithm for risk assessment</li>
                        <li>HTTP client for API communication</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-medium mb-3">System Architecture</h3>
                  <div className="bg-primary/10 p-6 rounded-lg mb-8">
                    <p className="mb-4">
                      RiskLens follows a component-based architecture using React, with a clear separation of concerns:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Pages:</strong> Top-level components representing different routes in the application</li>
                      <li><strong>Components:</strong> Reusable UI elements that make up the interface</li>
                      <li><strong>Lib:</strong> Utility functions, API clients, and business logic</li>
                      <li><strong>Hooks:</strong> Custom React hooks for shared functionality</li>
                    </ul>
                    <p className="mt-4">
                      Data flows from the external APIs through our API client layer, into React components 
                      via TanStack Query, with state management handled through React's built-in hooks.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-medium mb-3">User Journey</h3>
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <p className="mb-4">
                      A typical user journey through the RiskLens platform:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Landing page introduction to RiskLens features</li>
                      <li>Exploration of specific tools (Risk Calculator, Market Predictions, etc.)</li>
                      <li>Input of financial details and preferences</li>
                      <li>Receiving personalized analysis and recommendations</li>
                      <li>Exploring different scenarios and outcomes</li>
                      <li>Making informed financial decisions based on insights</li>
                    </ol>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="usage">
            <Card className="p-8">
              <div className="flex items-start mb-6">
                <Book className="h-8 w-8 mr-4 text-neon" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">How to Use the Platform</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-medium mb-3">Getting Started</h3>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>Visit the RiskLens landing page to explore available features</li>
                        <li>Navigate to the specific tool that meets your current needs</li>
                        <li>For first-time users, we recommend starting with the Dashboard to get an overview of current market conditions</li>
                      </ol>
                    </div>
                    
                    <div className="bg-primary/10 p-6 rounded-lg">
                      <h3 className="text-xl font-medium mb-3">Using the Risk Score Calculator</h3>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>Navigate to the Risk Score Calculator from the landing page or navigation menu</li>
                        <li>Enter your investment amount in your preferred currency</li>
                        <li>Select the volatility level (Low, Medium, or High) based on the currencies involved</li>
                        <li>Specify your risk tolerance (Low, Medium, or High)</li>
                        <li>Click "Calculate" to generate your risk score</li>
                        <li>Review the visual representation and explanation of your risk score</li>
                        <li>Use the provided recommendations to inform your investment decisions</li>
                      </ol>
                    </div>
                    
                    <div className="bg-primary/10 p-6 rounded-lg">
                      <h3 className="text-xl font-medium mb-3">Exploring the Dashboard</h3>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>Navigate to the Dashboard from the landing page or navigation menu</li>
                        <li>View real-time currency rates for major pairs</li>
                        <li>Click on a currency pair to see detailed information and historical charts</li>
                        <li>Use the filtering options to customize the displayed data</li>
                        <li>Set up alerts for specific currency movements if needed</li>
                      </ol>
                    </div>
                    
                    <div className="bg-primary/10 p-6 rounded-lg">
                      <h3 className="text-xl font-medium mb-3">Using the Financial Planning Tool</h3>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>Access the Financial Planning Tool from the landing page</li>
                        <li>Enter your current income, expenses, and investment amount</li>
                        <li>Select your base currency and target currency of interest</li>
                        <li>Specify your risk tolerance and financial goals</li>
                        <li>Generate your personalized financial plan</li>
                        <li>Explore different scenarios using the scenario planning feature</li>
                        <li>Review recommendations and adjust your strategy as needed</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="roadmap">
            <Card className="p-8">
              <div className="flex items-start mb-6">
                <TrendingUp className="h-8 w-8 mr-4 text-neon" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Future Enhancements & Roadmap</h2>
                  
                  <p className="mb-6">
                    RiskLens is continually evolving to provide more comprehensive tools and insights. 
                    Here's what we're planning for future releases:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-primary/10 p-6 rounded-lg">
                      <h3 className="text-xl font-medium mb-3">Near-Term Enhancements (Q2-Q3 2025)</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Advanced Analytics:</strong> Deeper insights into currency correlations and market patterns.
                        </li>
                        <li>
                          <strong>Portfolio Integration:</strong> Ability to import existing investment portfolios for comprehensive analysis.
                        </li>
                        <li>
                          <strong>Mobile Responsiveness:</strong> Enhanced mobile experience with responsive design improvements.
                        </li>
                        <li>
                          <strong>User Accounts:</strong> Personal accounts to save preferences, watchlists, and historical analyses.
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/10 p-6 rounded-lg">
                      <h3 className="text-xl font-medium mb-3">Mid-Term Roadmap (Q4 2025 - Q1 2026)</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>AI-Powered Recommendations:</strong> More sophisticated algorithm for personalized financial advice.
                        </li>
                        <li>
                          <strong>Social Features:</strong> Community insights and shared strategies among users.
                        </li>
                        <li>
                          <strong>Expanded Currency Coverage:</strong> Support for emerging market currencies and crypto assets.
                        </li>
                        <li>
                          <strong>Advanced Scenario Planning:</strong> More detailed "what-if" analysis with multiple variables.
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/10 p-6 rounded-lg">
                      <h3 className="text-xl font-medium mb-3">Long-Term Vision (2026 and beyond)</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Integration with Financial Institutions:</strong> Direct connections to banking and investment platforms.
                        </li>
                        <li>
                          <strong>Automated Portfolio Rebalancing:</strong> Suggestions for portfolio adjustments based on currency risk.
                        </li>
                        <li>
                          <strong>Enterprise Solutions:</strong> Specialized tools for business users with complex international operations.
                        </li>
                        <li>
                          <strong>Educational Platform:</strong> Comprehensive learning resources for financial literacy around currency risk.
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <p>
                      We welcome feedback from our users to help prioritize these enhancements and identify 
                      additional features that would be valuable for your financial planning needs.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Link to="/">
            <Button className="bg-neon hover:bg-neon/90">
              Return to RiskLens Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
