import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

export default function FAQ() {
  const midPoint = Math.ceil(FAQS.length / 2);
  const leftColumn = FAQS.slice(0, midPoint);
  const rightColumn = FAQS.slice(midPoint);

  return (
    <section className="section-container" id="faq">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="micro-label">FAQ'S</span>
        <h2 className="display-heading mb-12 uppercase">FREQUENTLY ASKED QUESTIONS</h2>
      </motion.div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-12">
        {/* Vertical Divider */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-zinc-800 -translate-x-1/2"></div>
        
        <div className="flex flex-col">
          {leftColumn.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>
        
        <div className="flex flex-col">
          {rightColumn.map((faq, i) => (
            <FAQItem key={i + midPoint} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-zinc-800/60 py-10 first:border-t-0 lg:first:border-t-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-start gap-8 text-left group"
      >
        <h3 className="text-sm md:text-base font-display font-medium tracking-tight text-white group-hover:text-amber-500 transition-colors uppercase pr-4">
          {faq.question}
        </h3>
        <span className="flex-shrink-0 w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800/50 group-hover:border-zinc-700 transition-all">
          {isOpen ? <ChevronUp className="w-4 h-4 text-zinc-400" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-6 text-zinc-400 font-sans text-sm md:text-[15px] leading-relaxed max-w-[90%] font-light">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
