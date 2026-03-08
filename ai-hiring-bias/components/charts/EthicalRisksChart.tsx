'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import aiHiringData from '@/data/aiHiringData.json';

const COLORS = ['#ef4444', '#f97316', '#a855f7', '#3b82f6'];

export default function EthicalRisksChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Distribution of Ethical Risks
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Primary ethical concerns in AI-based hiring systems
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={aiHiringData.ethicalRisks}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percentage }) => `${name}: ${percentage}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="percentage"
          >
            {aiHiringData.ethicalRisks.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
