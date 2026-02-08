
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
          Your request for a Free Business Process Audit has been received. One of our Zoho implementation experts will review your details and reach out within 24 business hours.
        </p>
        <button 
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 bg-[#0066cc] text-white px-12 py-4.5 rounded-2xl font-bold text-lg shadow-[0_10px_25px_-5px_rgba(0,102,204,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(0,102,204,0.4)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]"
        >
          <ArrowLeft size={20} />
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
