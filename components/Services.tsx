
import React from 'react';
import { GraduationCap, Wrench, Compass, Database } from 'lucide-react';

const Services: React.FC = () => {
  const offerings = [
    {
      icon: <GraduationCap className="text-[#0066cc]" size={20} />,
      question: "Want to familiarize your team with the Zoho products you use?",
      answer: "We provide tailored user training and continued post-purchase support services for long-term success."
    },
    {
      icon: <Wrench className="text-[#0066cc]" size={20} />,
      question: "Looking to build custom-solutions that meet your specific needs?",
      answer: "Our team can customize, build, and integrate bespoke solutions designed for your unique requirements."
    },
    {
      icon: <Compass className="text-[#0066cc]" size={20} />,
      question: "Not sure which Zoho product you need to work with?",
      answer: "We act as your strategic partner to pick the right Zoho products that align with your business goals."
    },
    {
      icon: <Database className="text-[#0066cc]" size={20} />,
      question: "Want to migrate your business data from existing systems to Zoho?",
      answer: "Our experts have the capability to migrate your data safely and securely to Zoho's ecosystem."
    }
  ];

  return (
    <section id="services" className="py-12 md:py-16 px-4 bg-white border-t border-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
            What else can we do?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Strategic services beyond implementation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 max-w-5xl mx-auto">
          {offerings.map((item, i) => (
            <div 
              key={i} 
              className="group px-7 py-5 rounded-[1.5rem] bg-white border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-[0_15px_30px_-10px_rgba(0,102,204,0.1)] transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="p-2 bg-blue-50/80 rounded-xl group-hover:bg-white group-hover:shadow-sm group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight pt-0.5">
                  {item.question}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#0066cc] text-white px-10 py-3.5 rounded-2xl font-bold text-lg shadow-[0_10px_25px_-5px_rgba(0,102,204,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(0,102,204,0.4)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]"
          >
            Let's Solve It
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
