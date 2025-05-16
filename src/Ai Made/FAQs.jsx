import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqsData } from '../assets/config';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqsData.map((faq, index) => (
            <div key={faq.id} className="bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-300">
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-medium text-gray-800 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-500" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                } px-6 pb-5`}
              >
                <p className="text-gray-600 text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
