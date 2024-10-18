import React from 'react';
import { Activity, Cloud, Settings, User } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Cloud className="h-8 w-8 text-blue-500" />
          <span className="text-xl font-bold">AI-PGF</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="flex items-center"><Activity className="mr-1" /> Dashboard</a></li>
            <li><a href="#" className="flex items-center"><User className="mr-1" /> Profile</a></li>
            <li><a href="#" className="flex items-center"><Settings className="mr-1" /> Settings</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};