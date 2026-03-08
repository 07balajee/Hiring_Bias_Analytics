'use client';

import Navigation from '@/components/Navigation';
import CompaniesChart from '@/components/charts/CompaniesChart';
import EthicalRisksChart from '@/components/charts/EthicalRisksChart';
import GrowthChart from '@/components/charts/GrowthChart';
import { TrendingUp, AlertCircle, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Dashboard Header */}
      <section className="bg-gradient-to-r from-primary-600 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Statistics Dashboard</h1>
              <p className="text-blue-100 text-lg">
                Data-driven insights into AI hiring adoption and ethical concerns
              </p>
            </div>
            <BarChart3 className="h-16 w-16 text-blue-200 hidden md:block" />
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Current AI Adoption</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">86%</p>
                  <p className="text-green-600 text-sm mt-1 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +7% from 2023
                  </p>
                </div>
                <div className="bg-primary-100 p-3 rounded-full">
                  <TrendingUp className="h-8 w-8 text-primary-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Primary Ethical Risk</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">35%</p>
                  <p className="text-gray-600 text-sm mt-1">Algorithmic Bias</p>
                </div>
                <div className="bg-red-100 p-3 rounded-full">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Top Industry Adopter</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">92%</p>
                  <p className="text-gray-600 text-sm mt-1">Technology Sector</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Growth Chart - Full Width */}
            <GrowthChart />

            {/* Two Column Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <CompaniesChart />
              <EthicalRisksChart />
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Rapid Growth</h3>
                <p className="text-gray-700 text-sm">
                  AI adoption in recruitment has grown from just 8% in 2015 to 86% in 2024, 
                  demonstrating the technology&apos;s widespread acceptance despite ethical concerns.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Bias Remains Top Concern</h3>
                <p className="text-gray-700 text-sm">
                  Algorithmic bias accounts for 35% of ethical risks, highlighting the need for 
                  diverse training data and regular algorithm audits.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Industry Variance</h3>
                <p className="text-gray-700 text-sm">
                  Technology companies lead adoption at 92%, while traditional manufacturing 
                  sectors lag at 58%, reflecting varying digital maturity levels.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Transparency Gap</h3>
                <p className="text-gray-700 text-sm">
                  28% of concerns relate to lack of transparency, emphasizing the need for 
                  explainable AI systems in high-stakes hiring decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Understanding the Full Picture
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            These statistics reveal the ethical complexity of AI in hiring. 
            Explore stakeholder perspectives and ethical frameworks on our main page.
          </p>
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
          >
            Back to Case Study
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Business Ethics Assignment - AI Hiring Bias Statistics
          </p>
          <p className="text-gray-500 text-sm mt-2">
            All data is for educational purposes • March 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
