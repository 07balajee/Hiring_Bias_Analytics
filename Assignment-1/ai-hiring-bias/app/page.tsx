import Navigation from '@/components/Navigation';
import StakeholderSection from '@/components/StakeholderSection';
import EthicalDecision from '@/components/EthicalDecision';
import QRCodeSection from '@/components/QRCodeSection';
import { AlertTriangle, TrendingUp, Shield, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Hiring Bias
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-blue-100">
              Business Ethics Case Study
            </p>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              An interactive exploration of ethical challenges in AI-powered recruitment systems
            </p>
            <Link 
              href="/dashboard"
              className="inline-block px-8 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              View Statistics Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              The Rise of AI in Recruitment
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Modern companies increasingly rely on <strong>artificial intelligence</strong> to streamline 
                their hiring processes. AI-powered systems can scan thousands of resumes in seconds, 
                identify qualified candidates, and even conduct preliminary interviews through chatbots.
              </p>
              <p>
                While these technologies promise efficiency and cost reduction, they raise critical 
                <strong> ethical concerns</strong> that business leaders and society must address:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Risks Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Ethical Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500">
              <AlertTriangle className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Algorithmic Bias
              </h3>
              <p className="text-gray-600">
                AI systems can perpetuate historical discrimination when trained on biased data, 
                disadvantaging certain demographics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
              <Shield className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Lack of Transparency
              </h3>
              <p className="text-gray-600">
                &quot;Black box&quot; algorithms make decisions without clear explanations, 
                making it difficult to identify or challenge unfair outcomes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
              <Users className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Data Privacy
              </h3>
              <p className="text-gray-600">
                Collection and analysis of personal data raises concerns about consent, 
                security, and potential misuse of sensitive information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <TrendingUp className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Accountability Issues
              </h3>
              <p className="text-gray-600">
                When AI makes hiring decisions, it&apos;s unclear who bears responsibility 
                for discriminatory outcomes or errors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Section */}
      <StakeholderSection />

      {/* Ethical Decision Section */}
      <EthicalDecision />

      {/* QR Code Section */}
      <QRCodeSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Business Ethics Assignment - AI Hiring Bias Case Study
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Created for academic purposes • March 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
