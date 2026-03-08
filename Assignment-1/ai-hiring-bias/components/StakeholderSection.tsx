'use client';

import { Users, Building2, Briefcase, Globe } from 'lucide-react';

const stakeholders = [
  {
    icon: Users,
    title: 'Job Applicants',
    description: 'Individuals seeking employment who may be subject to algorithmic screening and potential bias.',
    impact: 'High'
  },
  {
    icon: Briefcase,
    title: 'HR Departments',
    description: 'Human resource professionals using AI tools to streamline recruitment processes.',
    impact: 'Direct'
  },
  {
    icon: Building2,
    title: 'Companies',
    description: 'Organizations implementing AI hiring systems for efficiency and cost reduction.',
    impact: 'Strategic'
  },
  {
    icon: Globe,
    title: 'Society',
    description: 'Broader community affected by employment inequality and systemic discrimination.',
    impact: 'Systemic'
  }
];

export default function StakeholderSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Key Stakeholders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Understanding who is affected by AI-based hiring decisions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stakeholders.map((stakeholder, index) => {
            const Icon = stakeholder.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 mx-auto">
                  <Icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {stakeholder.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 text-center">
                  {stakeholder.description}
                </p>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                    Impact: {stakeholder.impact}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
