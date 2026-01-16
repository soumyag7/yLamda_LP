
import React from 'react';
import { TrendingUp, Clock, Target } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    { 
      percentage: "50-60%", 
      title: "Less Manual Work", 
      desc: "We eliminate redundant tasks so your team can focus on selling, not spreadsheets.",
      icon: <Clock className="w-8 h-8 text-white mb-4" />
    },
    { 
      percentage: "30-40%", 
      title: "Increase in Capacity", 
      desc: "Handle more clients with the same headcount. Automation is the only way to scale sustainably.",
      icon: <TrendingUp className="w-8 h-8 text-white mb-4" />
    },
    { 
      percentage: "25-35%", 
      title: "Faster Response", 
      desc: "Speed to lead is the #1 factor in closing. Our automated workflows ensure no lead waits.",
      icon: <Target className="w-8 h-8 text-white mb-4" />
    }
  ];

  return (
    <section id="benefits" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Expected Impact of yLamda
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Potential efficiency gains based on industry benchmarks for CRM automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="bg-[#0066cc] rounded-[2rem] p-10 text-white transform transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-200">
              {b.icon}
              <div className="text-5xl font-black mb-4">{b.percentage}</div>
              <h3 className="text-xl font-bold mb-4">{b.title}</h3>
              <p className="text-blue-50 leading-relaxed text-sm opacity-90">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
             onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
             className="bg-[#0066cc] text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-100 hover:bg-[#0052a3] transition-all active:scale-95"
          >
            Help Me Start
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
