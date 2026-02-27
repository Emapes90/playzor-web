'use client';

import { faqs } from '@/lib/data';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 bg-black border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Everything you need to know about our services.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-zinc-900/50 border-white/20' 
                  : 'bg-black border-white/5 hover:border-white/10'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left gap-3"
              >
                <span className={`font-bold text-sm sm:text-lg ${openIndex === index ? 'text-white' : 'text-zinc-300'}`}>
                  {faq.question}
                </span>
                <div className={`p-1.5 sm:p-2 rounded-full shrink-0 ${openIndex === index ? 'bg-white text-black' : 'bg-white/5 text-white'}`}>
                  {openIndex === index ? <Minus size={14} className="sm:hidden" /> : <Plus size={14} className="sm:hidden" />}
                  {openIndex === index ? <Minus size={16} className="hidden sm:block" /> : <Plus size={16} className="hidden sm:block" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-zinc-400 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
