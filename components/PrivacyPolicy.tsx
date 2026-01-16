
import React from 'react';

interface PageProps {
  onNavigate: (view: string) => void;
}

const PrivacyPolicy: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-10">Privacy Policy</h1>
        
        <div className="text-gray-600 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed">
              When you visit our landing page and fill out our contact form, we collect the personal information you provide, including your name, work email address, phone number, and industry. We also automatically collect certain technical information, such as your IP address and browsing behavior, via cookies to improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">We use the collected data for the following purposes:</p>
            <ul className="list-disc ml-6 space-y-3">
              <li>To provide the requested CRM audit and consulting services.</li>
              <li>To contact you regarding your inquiry.</li>
              <li>To send occasional marketing updates (you can opt-out at any time).</li>
              <li>To analyze website performance and improve user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or alteration. Your lead data is stored securely and is only accessible by authorized yLamda personnel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing with Third Parties</h2>
            <p className="leading-relaxed">
              We do not sell your personal data. We may share information with trusted service providers (like Google Sheets or CRM tools) solely to fulfill your requests and maintain our business operations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="leading-relaxed">
              You have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us at soumya@ylamda.com.
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

export default PrivacyPolicy;
