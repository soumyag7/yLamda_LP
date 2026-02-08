
import React from 'react';
import { ClipboardCheck, PencilRuler, Rocket } from 'lucide-react';

const ChaosToSystem: React.FC = () => {
  const steps = [
    {
      title: "Diagnose",
      body: "We map your current process and tools to understand where things break.",
      icon: <ClipboardCheck className="w-7 h-7 text-[#0066cc]" />
    },
    {
      title: "Design",
      body: "We build a plan with Zoho: which apps, what automations, what dashboards.",
      icon: <PencilRuler className="w-7 h-7 text-[#0066cc]" />
    },
    {
      title: "Deploy",
      body: "We configure, migrate data, and train your team so they actually use it.",
      icon: <Rocket className="w-7 h-7 text-[#0066cc]" />
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-white scroll-mt-20 border-t border-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-8 tracking-tight">
          From Chaos to System in 3 Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group px-8 py-6 rounded-[1.5rem] bg-white border border-gray-200 shadow-sm hover:border-blue-400 hover:shadow-[0_15px_30px_-10px_rgba(0,102,204,0.12)] transition-all duration-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl shadow-sm group-hover:bg-white group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-base">
                {step.body}
              </p>
              
              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 z-0 opacity-50"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm font-medium italic mb-5">
            Phased rollout. Your work never stops.
          </p>
          <button 
            onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block bg-[#0066cc] text-white px-12 py-4 rounded-2xl font-black text-lg shadow-[0_10px_30px_-5px_rgba(0,102,204,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(0,102,204,0.5)] hover:-translate-y-1 hover:scale-[1.05] transition-all duration-300 active:scale-[0.98]"
          >
            Help Me Start
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChaosToSystem;
