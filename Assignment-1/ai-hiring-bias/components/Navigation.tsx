'use client';

import Link from 'next/link';
import { BarChart3 } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-primary-600" />
            <span className="font-bold text-xl text-gray-900">AI Hiring Ethics</span>
          </Link>
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/dashboard" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
