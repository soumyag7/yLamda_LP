
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { n: 1, t: "DIAGNOSIS", d: "We audit your current systems, workflows, and data silos." },
    { n: 2, t: "STRATEGY", d: "We design a Zoho solution mapped specifically to your goals." },
    { n: 3, t: "APPROVAL", d: "We walk through the plan and ensure total alignment." },
    { n: 4, t: "BUILD & TEST", d: "Configuration, customization, and rigorous stress testing." },
    { n: 5, t: "GO-LIVE", d: "Seamless switch from legacy systems to Zoho CRM." },
    { n: 6, t: "TRAINING", d: "Your team gets hands-on sessions for immediate adoption." },
    { n: 7, t: "SUPPORT", d: "Ongoing availability for tweaks and feature requests." }
  ];

  return (
    <section id="process" className="py-16 md:py-20 px-4 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          How We Implement Your Zoho System
        </h2>
        
        {/* Visual Line (Desktop only) */}
        <div className="hidden lg:block absolute top-[55%] left-0 w-full h-0.5 bg-blue-100 z-0"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 relative z-10">
          {steps.map((s, i) => (
            <div 
              key={i} 
              className={`bg-white p-6 rounded-2xl border border-gray-100 text-center transition-all hover:border-[#0066cc] hover:shadow-xl group ${i % 2 !== 0 ? 'lg:mt-12' : 'lg:mb-12'}`}
            >
              <div className="w-12 h-12 bg-[#0066cc] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform">
                {s.n}
              </div>
              <h4 className="text-sm font-black text-gray-900 mb-2 tracking-wider">{s.t}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#0066cc] text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-[0_10px_25px_-5px_rgba(0,102,204,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(0,102,204,0.4)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]"
          >
            Book A Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
