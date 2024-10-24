import React from 'react';
import { Activity, Brain, Settings, User, UserPlus, Mail, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative">
            <Brain className="h-8 w-8 text-blue-500" />
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full animate-pulse" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">AI-PGF</span>
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><Link to="/" className="flex items-center hover:text-blue-500 transition-colors"><Home className="mr-1" /> Home</Link></li>
            <li><Link to="/dashboard" className="flex items-center hover:text-blue-500 transition-colors"><Activity className="mr-1" /> Dashboard</Link></li>
            <li><Link to="/contact" className="flex items-center hover:text-blue-500 transition-colors"><Mail className="mr-1" /> Contact</Link></li>
            <li><Link to="/profile" className="flex items-center hover:text-blue-500 transition-colors"><User className="mr-1" /> Profile</Link></li>
            <li><Link to="/settings" className="flex items-center hover:text-blue-500 transition-colors"><Settings className="mr-1" /> Settings</Link></li>
            <li><Link to="/auth" className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"><UserPlus className="mr-1 h-4 w-4" /> Sign Up</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};