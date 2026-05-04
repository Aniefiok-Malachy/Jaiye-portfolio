import { motion } from 'motion/react';
import { JOURNEY } from '../constants';

export default function Journey() {
  return (
    <section className="section-container" id="journey">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="micro-label">JOURNEY</span>
        <h2 className="display-heading mb-12">JAIYE'S JOURNEY - A TIMELINE</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {JOURNEY.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative glass-card p-12 overflow-hidden flex flex-col gap-6"
          >
            {/* Background design element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-amber-500/10 transition-colors duration-500"></div>
            
            <h3 className="text-3xl md:text-4xl font-display font-medium group-hover:text-amber-500 transition-colors duration-300">
              YEAR - {item.year}
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base font-sans">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
