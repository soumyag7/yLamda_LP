
import React from 'react';
import { TrendingUp, Clock, Target } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    { 
      percentage: "50-60%", 
      title: "Less Manual Work", 
      desc: "We eliminate redundant tasks so your team can focus on selling, not spreadsheets.",
      icon: <Clock className="w-5 h-5 text-white" />
    },
    { 
      percentage: "30-40%", 
      title: "Increase in Capacity", 
      desc: "Handle more clients with the same headcount. Automation is the only way to scale.",
      icon: <TrendingUp className="w-5 h-5 text-white" />
    },
    { 
      percentage: "25-35%", 
      title: "Faster Response", 
      desc: "Speed to lead is key. Our automated workflows ensure no lead waits in line.",
      icon: <Target className="w-5 h-5 text-white" />
    }
  ];

  return (
    <section id="benefits" className="py-10 md:py-14 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
            Expected Impact of Automation
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            Based on industry benchmarks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <div key={i} className="bg-[#0066cc] rounded-[1.5rem] px-6 py-5 text-white transform transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(0,102,204,0.3)] hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm flex-shrink-0">
                  {b.icon}
                </div>
                <div className="text-2xl font-black tracking-tight">{b.percentage}</div>
              </div>
              <h3 className="text-lg font-bold mb-1.5">{b.title}</h3>
              <p className="text-blue-50/85 leading-snug text-sm">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button 
             onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
             className="bg-[#0066cc] text-white px-10 py-3.5 rounded-2xl font-bold text-lg shadow-[0_10px_25px_-5px_rgba(0,102,204,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(0,102,204,0.4)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]"
          >
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
