import React from 'react';
import { Header } from '../components/Header';
import { AgentDashboard } from '../components/AgentDashboard';
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">AI-PGF Ecosystem Builder Agent</h1>
        <AgentDashboard />
      </main>
    </div>
  );
};

export default Index;