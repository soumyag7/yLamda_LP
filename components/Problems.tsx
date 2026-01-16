
import React from 'react';

const Problems: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-16">
        Hidden Costs of Manual Processes
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Lost Productivity",
            description: "Your team spends hours managing the same data among multiple disconnected systems."
          },
          {
            title: "Missed Opportunities",
            description: "A prospect calls. Your team has no context. They lose the deal because of information gaps."
          },
          {
            title: "Inefficient Operations",
            description: "More customers need more staff. You're trapped by manual processes that don't scale."
          }
        ].map((problem, i) => (
          <div key={i} className="group bg-gradient-to-br from-blue-50/50 to-white p-8 rounded-3xl border-l-4 border-[#0066cc] hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 hover:translate-y-[-4px]">
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0066cc] transition-colors">{problem.title}</h3>
            <p className="text-gray-600 leading-relaxed">{problem.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button 
          onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-block bg-[#0066cc] text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-100 hover:bg-[#0052a3] transition-all active:scale-95"
        >
          Take Action
        </button>
      </div>
    </section>
  );
};

export default Problems;
