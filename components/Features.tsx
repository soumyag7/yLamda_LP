
import React from 'react';
import { Check } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { 
      title: "Less Chaos", 
      desc: "One system instead of 10 Excel files and endless WhatsApp groups." 
    },
    { 
      title: "More Profit", 
      desc: "Same team. More work. Fewer errors. Better margins." 
    },
    { 
      title: "Happier Teams", 
      desc: "Less copy-paste admin. More time for real work." 
    },
    { 
      title: "Clear Visibility", 
      desc: "Open one dashboard. See everything instantly." 
    }
  ];

  return (
    <section id="features" className="py-12 md:py-16 px-4 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What Changes with Automation
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                <Check className="text-[#0066cc] w-5 h-5" strokeWidth={3} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h4>
                <p className="text-gray-600 text-base leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
