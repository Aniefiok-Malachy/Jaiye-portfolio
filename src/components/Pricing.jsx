import { motion } from 'motion/react';
import { PRICING_PLANS, SERVICES } from '../constants';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="section-container" id="services">
      <div className="mb-24">
        <span className="micro-label">SERVICES</span>
        <h2 className="display-heading mb-16 uppercase">MY SERVICES</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
           <div className="flex flex-col gap-8">
              <div className="flex items-center gap-8 mb-8">
                 <span className="micro-label mb-0">SERVICE HIGHLIGHTS</span>
                 <button className="pill-button">Let's Connect <ArrowUpRight className="w-4 h-4" /></button>
              </div>
              
              <div className="flex flex-col gap-3">
                {SERVICES.map((service, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 py-4 px-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800 transition-all duration-300 cursor-default"
                  >
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span className="text-[11px] font-mono font-medium tracking-[0.2em] text-zinc-400 hover:text-white uppercase">
                      {service.name}
                    </span>
                  </motion.div>
                ))}
              </div>
           </div>

           <div className="aspect-square bg-zinc-900 rounded-3xl overflow-hidden relative border border-zinc-800">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                alt="Workspace" 
                className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                  <span className="font-display text-2xl font-bold italic tracking-tighter opacity-50">JAIYE</span>
              </div>
           </div>
        </div>
      </div>

      <div className="pt-24 border-t border-zinc-800">
        <span className="micro-label">SERVICES</span>
        <h2 className="display-heading mb-24 uppercase">EXPLORE MY RATES AND PRICING</h2>

        <div className="flex flex-col gap-12">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-800 pb-12 last:border-0"
            >
              <div className="lg:col-span-4 flex flex-col justify-center">
                <span className="text-zinc-500 font-sans text-sm mb-4">
                  {plan.name} {plan.isPopular && <span className="text-amber-500 ml-2">⭐ Most Popular</span>}
                </span>
                <div className="flex flex-col gap-4">
                  <h3 className="text-5xl md:text-6xl font-display font-medium tracking-tight">
                    {plan.priceRange}
                  </h3>
                  <button className="flex items-center gap-2 text-amber-500 text-xs font-mono tracking-widest hover:text-amber-400 transition-colors">
                    BOOK A CALL <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                 {plan.features.map((feature, j) => (
                   <div key={j} className="flex items-center gap-4 py-4 px-6 rounded-xl border border-zinc-800/50 bg-zinc-900/20 group-hover:border-zinc-700 transition-all duration-500">
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      <span className="text-[9px] md:text-[10px] font-mono tracking-[0.1em] text-zinc-400 uppercase">
                        {feature}
                      </span>
                   </div>
                 ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
