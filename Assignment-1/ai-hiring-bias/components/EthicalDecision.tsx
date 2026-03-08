'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle, GitMerge } from 'lucide-react';

type DecisionOption = 'yes' | 'no' | 'hybrid' | null;

interface DecisionData {
  icon: any;
  title: string;
  color: string;
  explanation: string;
  risks?: string[];
  benefits?: string[];
}

const decisionData: Record<'yes' | 'no' | 'hybrid', DecisionData> = {
  yes: {
    icon: CheckCircle2,
    title: 'Full AI Autonomy',
    color: 'red',
    explanation: 'Allowing AI to make final hiring decisions raises serious ethical concerns: it removes human judgment, increases accountability gaps, and can perpetuate historical biases in training data. While efficient, this approach lacks empathy and contextual understanding essential for fair hiring.',
    risks: ['High bias risk', 'No human oversight', 'Accountability issues', 'Lacks contextual judgment']
  },
  no: {
    icon: XCircle,
    title: 'No AI in Hiring',
    color: 'green',
    explanation: 'Completely rejecting AI in hiring preserves human judgment but sacrifices efficiency and may reintroduce human biases. This approach ensures accountability but can be time-consuming and may not scale well for large organizations processing thousands of applications.',
    risks: ['Inefficient for scale', 'Still vulnerable to human bias', 'Higher costs', 'Slower process']
  },
  hybrid: {
    icon: GitMerge,
    title: 'Hybrid Approach',
    color: 'blue',
    explanation: 'The hybrid model is ethically optimal: AI screens and ranks candidates based on objective criteria, while humans make final decisions. This combines efficiency with ethical oversight, ensuring transparency, accountability, and the ability to detect and correct algorithmic bias.',
    benefits: ['Balanced efficiency', 'Human oversight', 'Bias detection possible', 'Maintains accountability']
  }
};

export default function EthicalDecision() {
  const [selected, setSelected] = useState<DecisionOption>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ethical Decision Framework
          </h2>
          <p className="text-lg text-gray-600">
            Should AI fully decide hiring decisions?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <button
            onClick={() => setSelected('yes')}
            className={`p-6 rounded-lg border-2 transition-all duration-300 ${
              selected === 'yes'
                ? 'border-red-500 bg-red-50 shadow-lg'
                : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
            }`}
          >
            <CheckCircle2 className="h-12 w-12 text-red-500 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Yes</h3>
            <p className="text-sm text-gray-600">Full AI autonomy</p>
          </button>

          <button
            onClick={() => setSelected('no')}
            className={`p-6 rounded-lg border-2 transition-all duration-300 ${
              selected === 'no'
                ? 'border-green-500 bg-green-50 shadow-lg'
                : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
            }`}
          >
            <XCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No</h3>
            <p className="text-sm text-gray-600">Human-only decisions</p>
          </button>

          <button
            onClick={() => setSelected('hybrid')}
            className={`p-6 rounded-lg border-2 transition-all duration-300 ${
              selected === 'hybrid'
                ? 'border-primary-500 bg-primary-50 shadow-lg'
                : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50'
            }`}
          >
            <GitMerge className="h-12 w-12 text-primary-500 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Hybrid</h3>
            <p className="text-sm text-gray-600">AI + Human oversight</p>
          </button>
        </div>

        {selected && (
          <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200 animate-fadeIn">
            <div className="flex items-center mb-4">
              {(() => {
                const Icon = decisionData[selected].icon;
                return <Icon className={`h-8 w-8 text-${decisionData[selected].color}-500 mr-3`} />;
              })()}
              <h3 className="text-2xl font-bold text-gray-900">
                {decisionData[selected].title}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              {decisionData[selected].explanation}
            </p>
            {'risks' in decisionData[selected] && (
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Concerns:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {decisionData[selected].risks?.map((risk, index) => (
                    <li key={index}>{risk}</li>
                  ))}
                </ul>
              </div>
            )}
            {'benefits' in decisionData[selected] && (
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {decisionData[selected].benefits?.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
