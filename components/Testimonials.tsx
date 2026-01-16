
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Arjun Mehta",
      role: "CEO, TechFlow Solutions",
      text: "yLamda transformed our messy sales process into a well-oiled machine. Our response time dropped from 4 hours to 4 minutes.",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: "Operations Director, LuxReal",
      text: "The data migration was flawless. We've tried other consultants, but nobody understands Zoho CRM workflows like the yLamda team.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Founder, GreenEdge Retail",
      text: "We finally have visibility into our sales pipeline. The management dashboards they built are worth every penny.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative group transition-all hover:shadow-xl">
              <Quote className="absolute top-6 right-8 text-blue-50 group-hover:text-blue-100 transition-colors" size={48} />
              <div className="flex gap-1 mb-4">
                {[...Array(rev.rating)].map((_, idx) => (
                  <Star key={idx} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{rev.text}"</p>
              <div>
                <div className="font-bold text-gray-900">{rev.name}</div>
                <div className="text-sm text-gray-500 font-medium">{rev.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
