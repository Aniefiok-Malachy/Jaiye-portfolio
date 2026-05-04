import { motion } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Star, Linkedin } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="section-container relative" id="testimonials">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 border-b border-zinc-800/50 pb-16"
      >
        <span className="micro-label">TESTIMONIALS</span>
        <h2 className="display-heading mb-8 uppercase">WHAT MY CLIENTS SAY</h2>
        <div className="flex flex-col gap-1">
           <span className="text-zinc-500 text-xs font-mono tracking-widest uppercase">Total Reviews</span>
           <span className="text-4xl font-display font-medium mt-2">3</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
        {TESTIMONIALS.map((testimonial, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group glass-card p-10 flex flex-col min-h-[350px] relative overflow-hidden"
          >
            {/* Design overlay */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-zinc-800/20 transition-colors pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h4 className="text-base font-display font-medium tracking-widest uppercase text-white">{testimonial.name}</h4>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">{testimonial.role}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-800 group-hover:border-zinc-700 transition-all">
                  <Linkedin className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors cursor-pointer" />
                </div>
              </div>

              <div className="flex gap-1.5 mb-8">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              <p className="text-zinc-400 font-sans leading-relaxed text-[15px] font-light">
                "{testimonial.content}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Outlined Signature Section from Image */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-end w-full"
      >
        <span className="micro-label mb-2 mr-0 text-zinc-600">DESIGN AND DEVELOPMENT BY</span>
        <h2 
          className="text-[12vw] font-display font-bold whitespace-nowrap tracking-tighter uppercase leading-[0.8]"
          style={{ 
            WebkitTextStroke: '2px #F59E0B', 
            color: 'transparent',
            letterSpacing: '-0.02em'
          }}
        >
          JAIYE DANIEL
        </h2>
      </motion.div>
    </section>
  );
}
