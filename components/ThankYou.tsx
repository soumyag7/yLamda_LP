
import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';

interface PageProps {
  onNavigate: (view: string) => void;
}

const ThankYou: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 bg-gray-50">
      <div className="max-w-2xl w-full bg-white rounded-[2.5rem] p-12 text-center shadow-xl border border-gray-100">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="text-green-600 w-12 h-12" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Thank You!</h1>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          Your request for a Free CRM Audit has been received. One of our Zoho implementation experts will review your details and reach out within 24 business hours.
        </p>
        <button 
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 bg-[#0066cc] text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-100 hover:bg-[#0052a3] transition-all"
        >
          <ArrowLeft size={20} />
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
