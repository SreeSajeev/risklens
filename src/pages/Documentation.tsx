import React from "react";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, BarChart, Layers, Shield, TrendingUp as TrendIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Documentation = () => {
  return (
    <div className="min-h-screen grid-background">
      <Header />

      <main className="pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-center">
            RiskLens Documentation
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Introduction
            </h2>
            <p className="text-gray-400">
              Welcome to the RiskLens documentation. This guide provides
              detailed information on how to use RiskLens to track, predict,
              and protect your currency decisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass p-6">
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendIcon className="w-5 h-5 text-neon" />
                    <h3 className="text-lg font-medium">Real-Time Data</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Access up-to-the-minute currency exchange rates and market
                    data.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass p-6">
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-neon" />
                    <h3 className="text-lg font-medium">
                      Predictive Insights
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Utilize advanced forecasting models to anticipate currency
                    movements.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass p-6">
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-neon" />
                    <h3 className="text-lg font-medium">Risk Analysis</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Evaluate potential risks and make informed financial
                    decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass p-6">
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-neon" />
                    <h3 className="text-lg font-medium">
                      Geopolitical Tracking
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Stay informed about global events that may impact currency
                    values.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Getting Started
            </h2>
            <ol className="list-decimal pl-5 text-gray-400">
              <li>
                <p>
                  Create an account or log in to access the RiskLens dashboard.
                </p>
              </li>
              <li>
                <p>
                  Explore the dashboard to view real-time currency data and
                  market trends.
                </p>
              </li>
              <li>
                <p>
                  Use the risk calculator to assess potential investment risks.
                </p>
              </li>
              <li>
                <p>
                  Utilize financial planning tools to forecast future expenses
                  and income.
                </p>
              </li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Detailed Guides
            </h2>
            <div className="grid md:grid-cols-1 gap-6">
              <Card className="glass p-6">
                <CardContent className="space-y-2">
                  <h3 className="text-lg font-medium">
                    Risk Score Calculator
                  </h3>
                  <p className="text-sm text-gray-400">
                    Learn how to use the risk score calculator to evaluate
                    investment risks based on investment amount, volatility,
                    and risk tolerance.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass p-6">
                <CardContent className="space-y-2">
                  <h3 className="text-lg font-medium">
                    Currency Converter
                  </h3>
                  <p className="text-sm text-gray-400">
                    Understand how to convert currencies and view historical
                    exchange rates.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass p-6">
                <CardContent className="space-y-2">
                  <h3 className="text-lg font-medium">
                    Financial Planning Tool
                  </h3>
                  <p className="text-sm text-gray-400">
                    Discover how to plan future expenses and income with
                    currency exchange rate projections.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Troubleshooting
            </h2>
            <p className="text-gray-400">
              If you encounter any issues while using RiskLens, please refer to
              the FAQ section or contact our support team for assistance.
            </p>
          </section>

          <div className="mt-12">
            <Link to="/" className="inline-flex items-center text-blue-500">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Documentation;
