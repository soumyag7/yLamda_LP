
import React, { useState } from 'react';
import { LeadFormData } from '../types';
import { ShieldCheck, Zap, Users, Loader2 } from 'lucide-react';

const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

interface HeroProps {
  onNavigate: (view: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    industry: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      if (SCRIPT_URL.includes('YOUR_SCRIPT_ID')) {
        await new Promise(resolve => setTimeout(resolve, 1200));
        console.warn("Form submitted to placeholder. Redirecting to Thank You page for demo.");
      } else {
        await fetch(SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      }
      
      onNavigate('thank-you');
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-8 px-4 md:pt-16 md:pb-16 border-b border-gray-50">
      <div className="absolute inset-0 bg-[#f8fbff] z-0">
        {/* Fix: Removed duplicated/malformed div tag on line 70 */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-50/80 rounded-full blur-[100px]"></div>
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#0066cc 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-sm font-bold mb-8 backdrop-blur-sm uppercase">
              < Zap size={14} className="fill-blue-700" />
              <span>Business Process Automation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Tired of Chaotic <span className="text-[#0066cc]">Business Process ?</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
              We build custom Zoho CRM systems that replace manual mess with automated workflows.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: <ShieldCheck className="text-blue-600" />, text: "One system for all your leads & orders" },
                { icon: <Users className="text-blue-600" />, text: "Less manual work, fewer mistakes" },
                { icon: <Zap className="text-blue-600" />, text: "Real-time dashboards for full visibility" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700 font-semibold">
                  <div className="bg-white p-1 rounded-md shadow-sm border border-gray-100">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="hero-form" className="lg:w-1/2 w-full scroll-mt-24 md:scroll-mt-32">
            <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,102,204,0.12)] border border-white min-h-[480px] flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Book Your Free Systems Audit</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Full Name" 
                    disabled={status === 'submitting'}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none bg-white/50 focus:bg-white transition-all shadow-sm disabled:opacity-50"
                  />
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="Work Email" 
                    disabled={status === 'submitting'}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none bg-white/50 focus:bg-white transition-all shadow-sm disabled:opacity-50"
                  />
                </div>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  placeholder="Phone Number" 
                  disabled={status === 'submitting'}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none bg-white/50 focus:bg-white transition-all shadow-sm disabled:opacity-50"
                />
                <input 
                  type="text" 
                  name="industry" 
                  required 
                  placeholder="Industry (e.g. Real Estate, Tech)" 
                  disabled={status === 'submitting'}
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none bg-white/50 focus:bg-white transition-all shadow-sm disabled:opacity-50"
                />
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-[#0066cc] text-white py-5 rounded-2xl font-bold text-lg shadow-[0_10px_30px_-5px_rgba(0,102,204,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(0,102,204,0.5)] hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Processing...
                    </>
                  ) : status === 'error' ? (
                    'Try Again'
                  ) : (
                    "Let's Connect"
                  )}
                </button>
              </form>
              <p className="mt-5 text-center text-xs text-gray-400">
                Guaranteed response within 1 business day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
