
import React from 'react';
import { Check } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { title: "Eliminates Data Entry", desc: "Saves 20+ hours monthly with automated workflows and data synchronization." },
    { title: "Complete Context", desc: "Access all customer history and interactions instantly to close more deals." },
    { title: "Scalable Operations", desc: "Grow your revenue without proportional hiring. Let automation handle volume." },
    { title: "Reduced Human Error", desc: "Clean, accurate data through automated validation and deduplication logic." },
    { title: "Real-Time Visibility", desc: "Make decisions based on current data with live management dashboards." },
    { title: "Empowered Teams", desc: "Let your team focus on customers and strategy—not boring admin tasks." }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          What Business Process Automation Does
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {features.map((f, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                <Check className="text-[#0066cc] w-5 h-5" strokeWidth={3} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{f.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
