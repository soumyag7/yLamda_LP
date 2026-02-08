
import React from 'react';

const Problems: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-white max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
          Cost of Manual Process
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-[#0066cc]/80">
          Does This Sound Familiar?
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {[
          {
            title: "Scattered Data",
            description: "Leads in Excel. Orders in WhatsApp. Payments in Tally. Nothing connects."
          },
          {
            title: "Missed Follow-Ups",
            description: "Someone forgot to update the sheet. The deal is gone!"
          },
          {
            title: "Daily Firefighting",
            description: '"Where is this order?" "Who spoke to this client?" You spend all day chasing answers.'
          },
          {
            title: "Growth = More Chaos",
            description: "More business means hiring more people just to manage more spreadsheets."
          }
        ].map((problem, i) => (
          <div key={i} className="group bg-gradient-to-br from-blue-50/50 to-white p-8 rounded-3xl border-l-4 border-[#0066cc] hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 hover:translate-y-[-4px]">
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0066cc] transition-colors">{problem.title}</h3>
            <p className="text-gray-600 leading-relaxed">{problem.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button 
          onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-block bg-[#0066cc] text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-[0_10px_25px_-5px_rgba(0,102,204,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(0,102,204,0.4)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]"
        >
          Take Action
        </button>
        <p className="mt-4 text-gray-500 text-sm font-medium italic">
          Your business has outgrown manual tools
        </p>
      </div>
    </section>
  );
};

export default Problems;
