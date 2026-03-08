'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import aiHiringData from '@/data/aiHiringData.json';

export default function GrowthChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        AI Recruitment Growth Over Time
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Year-over-year adoption of AI in hiring processes (2015-2024)
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={aiHiringData.industryAdoption}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="percentage" 
            stroke="#2563eb" 
            strokeWidth={3}
            name="Adoption Rate (%)"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
