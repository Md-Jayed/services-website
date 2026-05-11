import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: 'Do you offer 24/7 service?',
    answer: 'Yes, we provide 24/7 emergency locksmith services and automotive locksmith assistance every day of the year, including weekends and holidays. We always have technicians on standby.'
  },
  {
    question: 'How fast can you arrive?',
    answer: 'Our average arrival time is between 15 and 20 minutes for emergency calls within our primary service areas. We dispatch the technician closest to your location immediately upon receiving your call.'
  },
  {
    question: 'Can you replace high-tech car keys?',
    answer: 'Absolutely. We specialize in cutting and programming high-security transponder keys, laser-cut keys, and keyless entry remotes (fobs) for nearly all makes and models on the market.'
  },
  {
    question: 'Do you install smart locks?',
    answer: 'Yes, we are experts in modern smart lock technology. We can help you choose the best smart lock for your needs and handle the full installation and setup with your mobile device.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, DFW Rapid Locksmith is a fully licensed, bonded, and insured locksmith company. Our technicians undergo thorough background checks and continuous training to ensure the highest standards of service.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-brand-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Frequently Asked <span className="text-brand-gold">Questions</span>
            </h2>
            <p className="text-base text-gray-600">
              Find quick answers to the most common questions about our locksmith services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(index === openIndex ? null : index)}
                  className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-lg font-bold text-brand-navy pr-8">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${index === openIndex ? 'bg-brand-gold text-brand-navy' : 'bg-brand-bg text-brand-navy'}`}>
                    {index === openIndex ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {index === openIndex && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 pt-0 text-gray-600 leading-relaxed text-base border-t border-gray-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center p-6 bg-brand-navy rounded-3xl text-white">
            <h3 className="text-xl font-display font-bold mb-2">Still have questions?</h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto text-sm">
              Our support team is available 24/7 to provide estimates and answers to your security concerns.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:18005550199" className="bg-brand-gold text-brand-navy px-8 py-2.5 rounded-xl font-bold text-base hover:scale-105 transition-transform">
                Call (800) 555-0199
              </a>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-2.5 rounded-xl font-bold text-base transition-colors">
                Email Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
