
import React from 'react';

interface PageProps {
  onNavigate: (view: string) => void;
}

const TermsOfUsage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-10">Terms of Usage</h1>
        
        <div className="text-gray-600 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing or using the yLamda website, you agree to comply with and be bound by these Terms of Usage. If you do not agree, please refrain from using our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on this site, including text, graphics, logos, and software, is the property of yLamda and is protected by international copyright laws. Unauthorized use of any materials is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Obligations</h2>
            <p className="leading-relaxed">
              You agree to provide accurate and truthful information when filling out our forms. You are prohibited from using this site for any unlawful purpose or to transmit any malicious code.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h2>
            <p className="leading-relaxed">
              yLamda provides its services "as is" and does not guarantee specific results from its CRM implementation services. We shall not be liable for any direct, indirect, or consequential damages resulting from the use of our services or website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Governing Law</h2>
            <p className="leading-relaxed">
              These terms are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
            </p>
          </section>

          <div className="pt-10 border-t border-gray-100">
            <button 
              onClick={() => onNavigate('home')}
              className="text-[#0066cc] font-bold hover:underline"
            >
              &larr; Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUsage;
