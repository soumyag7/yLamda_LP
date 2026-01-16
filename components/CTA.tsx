
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#0066cc] to-[#0052a3] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">When you work with yLamda</h2>
        <p className="text-xl text-blue-100 mb-12">Experience a partnership built on your success.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16 text-left max-w-3xl mx-auto">
          {[
            "Deep industry-specific understanding",
            "Personal commitment to your ROI",
            "Hands-on training for high adoption",
            "Involved support until you're confident",
            "Frees your team for high-value tasks",
            "Proven 5-6 week delivery model"
          ].map((point, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="text-blue-300 flex-shrink-0" size={24} />
              <span className="text-lg font-medium">{point}</span>
            </div>
          ))}
        </div>

        <button 
           onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
           className="bg-white text-[#0066cc] px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95"
        >
          Let's Connect
        </button>
      </div>
    </section>
  );
};

export default CTA;
