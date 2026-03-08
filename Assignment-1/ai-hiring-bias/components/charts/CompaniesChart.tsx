'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import aiHiringData from '@/data/aiHiringData.json';

export default function CompaniesChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        AI Adoption by Industry
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Percentage of companies using AI in recruitment across different sectors
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={aiHiringData.companiesUsingAI}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="industry" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="percentage" fill="#2563eb" name="Adoption Rate (%)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
