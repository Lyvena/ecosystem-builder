import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, Users, Sparkles, Network } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 mb-16">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <Brain className="h-16 w-16 text-blue-500" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
              AI-PGF Ecosystem Builder
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering the future of public goods funding through artificial intelligence and community collaboration.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/auth">
              <Button className="text-lg px-6 py-6">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 border rounded-lg shadow-sm">
            <Users className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Building</h3>
            <p className="text-gray-600">Connect with like-minded individuals and organizations in the public goods space.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <Sparkles className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
            <p className="text-gray-600">Leverage artificial intelligence to optimize funding strategies and decision-making.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <Network className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ecosystem Growth</h3>
            <p className="text-gray-600">Foster sustainable growth and innovation in public goods funding.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;