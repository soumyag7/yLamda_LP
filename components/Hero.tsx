import React, { useState } from 'react';
import { LeadFormData } from '../types';
import { ShieldCheck, Zap, Users, Loader2 } from 'lucide-react';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxkkPcqGDbsk6tB_jbljWj4h25AC865zQXNgZ2LIWiEoqkz-wXe5K-wMtUn4sxns_T5JA/exec';

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

  const [status, setStatus] = useState<'idle' | 'submitting' | 'error' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Format data correctly for Google Sheets
      const params = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        industry: formData.industry
      });

      // Send to Google Sheets
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: params
      });

      // Show success status
      setStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        industry: ''
      });

      // Redirect to thank you page after 1.5 seconds
      setTimeout(() => {
        onNavigate('thank-you');
      }, 1500);

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
    <section className="relative overflow-hidden bg-white pt-10 pb-12 px-4 md:pt-16 md:pb-24 border-b border-gray-50">
      <div className="absolute inset-0 bg-[#f8fbff] z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-50/80 rounded-full blur-[100px]"></div>
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#0066cc 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-sm font-bold mb-8 backdrop-blur-sm">
              <Zap size={14} className="fill-blue-700" />
              <span>SPECIALIZED CRM CONFIGURATION</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Scale Your Revenue, Not Your <span className="text-[#0066cc]">Workload</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
              We build custom Zoho CRM systems that eliminate manual work and help your team focus on clients.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                { icon: <ShieldCheck className="text-blue-600" />, text: "Secure Data Migration Planning" },
                { icon: <Users className="text-blue-600" />, text: "Tailored Workflows for Your Unique Process" },
                { icon: <Zap className="text-blue-600" />, text: "Automation Focused on Saving You Time" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700 font-semibold">
                  <div className="bg-white p-1 rounded-md shadow-sm border border-gray-100">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="py-6 border-t border-gray-200/50">
              <p className="text-sm text-gray-500 italic">
                Get <span className="font-bold text-gray-900">Direct Expert Support</span> for your CRM journey.
              </p>
            </div>
          </div>

          <div id="hero-form" className="lg:w-1/2 w-full scroll-mt-24 md:scroll-mt-32">
            <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,102,204,0.12)] border border-white min-h-[480px] flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free CRM Audit</h3>
              <p className="text-gray-500 mb-8">Tell us about your business and we'll show you how much you can automate.</p>
              
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700 text-center font-semibold">
                  ✓ Thank you! We'll be in touch within 24 hours.
                </div>
              )}

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
                  disabled={status === 'submitting' || status === 'success'}
                  className="w-full bg-[#0066cc] text-white py-4.5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 hover:bg-[#0052a3] transition-all transform hover:scale-[1.01] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Processing...
                    </>
                  ) : status === 'error' ? (
                    'Try Again'
                  ) : status === 'success' ? (
                    'Redirecting...'
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
