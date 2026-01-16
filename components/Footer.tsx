
import React from 'react';
import { Phone, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div 
          className="text-3xl font-bold mb-8 cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          y<span className="text-blue-500">Lamda</span>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
          <a href="tel:+917396923530" className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors text-lg">
            <Phone size={20} className="text-[#0066cc]" /> +91 73969 23530
          </a>
          <a href="mailto:soumya@ylamda.com" className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors text-lg">
            <Mail size={20} className="text-[#0066cc]" /> soumya@ylamda.com
          </a>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} yLamda. All rights reserved.</p>
          <div className="flex gap-6">
            <button 
              onClick={() => onNavigate('privacy-policy')}
              className="hover:text-blue-400 transition-colors focus:outline-none"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onNavigate('terms-of-usage')}
              className="hover:text-blue-400 transition-colors focus:outline-none"
            >
              Terms of Usage
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
