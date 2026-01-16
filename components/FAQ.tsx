
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long does implementation take?",
      a: (
        <>
          Typically, <strong>5 - 6 weeks from start to full go-live</strong>.
          <ul className="list-disc ml-5 mt-3 space-y-1">
            <li><strong>Week 1:</strong> Discovery & Diagnosis</li>
            <li><strong>Week 2:</strong> Planning & Strategy Approval</li>
            <li><strong>Week 3-4:</strong> Custom Build & Testing</li>
            <li><strong>Week 5:</strong> Go-Live Transition</li>
            <li><strong>Week 6:</strong> Full Team Training</li>
          </ul>
        </>
      )
    },
    {
      q: "Will our team be able to use it?",
      a: "Absolutely. We handle the technical setup while you focus on the business. We provide hands-on training sessions, complete documentation, and video tutorials customized for your setup. We don't leave you hanging."
    },
    {
      q: "What happens to our existing data?",
      a: "We migrate it cleanly into Zoho. No data loss. We handle exports, cleanup, deduplication, and validation Import. Your entire customer history stays intact."
    },
    {
      q: "What if we need to customize things later?",
      a: "Customization is built into our core process. We design around your workflows, not generic templates. If you need specific integrations or complex custom fields later, we're here to help."
    },
    {
      q: "Do you provide ongoing support?",
      a: "Yes. After go-live, we offer various support tiers for workflow optimization, feature updates, and staff questions. We typically respond to support tickets within 24 hours."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Questions About Implementation?
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full flex justify-between items-center p-6 text-left font-bold text-lg transition-colors ${openIndex === i ? 'bg-blue-50 text-[#0066cc]' : 'bg-white text-gray-900 hover:bg-gray-50'}`}
              >
                {faq.q}
                <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="p-6 bg-gray-50 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
