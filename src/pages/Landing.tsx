import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, Users, Sparkles, Network, Bot, Shield, Rocket } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 mb-16 animate-fade-in">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="relative">
              <Brain className="h-16 w-16 text-blue-500 animate-pulse" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full animate-ping" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text animate-gradient">
              AI-PGF Ecosystem Builder
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering the future of public goods funding through artificial intelligence and community collaboration.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/auth">
              <Button className="text-lg px-6 py-6 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 bg-white">
            <Users className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Building</h3>
            <p className="text-gray-600">Connect with like-minded individuals and organizations in the public goods space.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 bg-white">
            <Bot className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
            <p className="text-gray-600">Leverage artificial intelligence to optimize funding strategies and decision-making.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 bg-white">
            <Network className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ecosystem Growth</h3>
            <p className="text-gray-600">Foster sustainable growth and innovation in public goods funding.</p>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-12">Powered by Advanced AI</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
              <Shield className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Smart Security</h3>
              <p className="text-gray-600">AI-powered threat detection and prevention</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
              <Sparkles className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Intelligent Analysis</h3>
              <p className="text-gray-600">Advanced data analytics and insights</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
              <Rocket className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Automated Growth</h3>
              <p className="text-gray-600">AI-driven ecosystem expansion strategies</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;