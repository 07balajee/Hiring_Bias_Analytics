'use client';

import { QrCode, Download, Printer } from 'lucide-react';

export default function QRCodeSection() {
  const websiteUrl = "https://your-vercel-app.vercel.app"; // Update after deployment
  
  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-blue-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Share This Research
            </h2>
            <p className="text-lg text-gray-600">
              Scan the QR code to access this interactive case study on any device
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="bg-gray-100 p-8 rounded-lg">
              <QrCode className="h-48 w-48 text-primary-600" />
              <p className="text-center mt-4 text-sm text-gray-600">
                QR Code Placeholder
              </p>
              <p className="text-center text-xs text-gray-500 mt-1">
                Generate at: qr-code-generator.com
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">For Poster Integration:</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  <li>Deploy this site to Vercel</li>
                  <li>Generate QR code with your URL</li>
                  <li>Print and add to your poster</li>
                  <li>Enable interactive engagement</li>
                </ol>
              </div>

              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  <Download className="h-4 w-4" />
                  Download QR
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  <Printer className="h-4 w-4" />
                  Print View
                </button>
              </div>
              
              <div className="text-center text-sm text-gray-600 mt-4">
                <p className="font-mono bg-gray-100 p-2 rounded">
                  {websiteUrl}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
