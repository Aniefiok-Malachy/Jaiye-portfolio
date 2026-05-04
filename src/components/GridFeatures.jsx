import { motion } from 'motion/react';
import { Globe, Users, TrendingUp, Cpu, Coins } from 'lucide-react';

export default function GridFeatures() {
  return (
    <section className="section-container pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
        
        {/* Left Card: Designs that ship */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 glass-card flex flex-col justify-between overflow-hidden relative group min-h-[500px]"
        >
          <div className="relative z-10">
            <span className="micro-label">PRODUCT DESIGN</span>
            <h3 className="text-2xl font-display font-medium text-white mb-4">
              Designs that ship, not just concepts
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[280px]">
              I build production-ready interfaces for Web2 and Web3 products, focused on usability, structure, and real-world execution.
            </p>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none translate-y-12">
            <div className="relative">
               <Globe className="w-64 h-64 text-zinc-500" />
               <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/4 right-1/4 w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,1)]"
               />
               <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,1)]"
               />
            </div>
          </div>
        </motion.div>

        {/* Middle Card: Built for every environment */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-4 glass-card flex flex-col justify-between relative group overflow-hidden min-h-[500px]"
        >
          <div>
            <span className="micro-label">PRODUCT DESIGN</span>
            <h3 className="text-2xl font-display font-medium text-white mb-4">
              Built for every environment
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[280px]">
              From mobile to complex dashboards, I design systems that stay consistent, scalable, and easy to use across all platforms.
            </p>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-12">
             <div className="relative w-full aspect-square flex items-center justify-center">
                <div className="w-16 h-16 rounded-xl border-2 border-amber-500/50 flex items-center justify-center bg-zinc-900/80 z-20">
                   <Cpu className="text-amber-500" />
                </div>
                {/* SVG Connections */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200">
                   <path d="M40 40 L160 40 L160 160 L40 160 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                   <path d="M100 40 L100 160" stroke="currentColor" strokeWidth="1" />
                   <path d="M40 100 L160 100" stroke="currentColor" strokeWidth="1" />
                </svg>
             </div>
          </div>
        </motion.div>

        {/* Right Stack */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Top: Designer and Dev */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card flex-1 !p-6"
          >
            <div className="flex -space-x-3 mb-6">
               {[
                 "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=120&h=120&auto=format&fit=crop",
                 "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=120&h=120&auto=format&fit=crop",
                 "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=120&h=120&auto=format&fit=crop"
               ].map((src, i) => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-800 overflow-hidden shadow-xl">
                    <img src={src} alt="Team member" className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
            <h4 className="text-xl font-display font-medium mb-3">Designer and Dev for builders</h4>
            <p className="text-[13px] text-zinc-500 leading-relaxed font-sans font-light">
              My work is structured for real teams, clear flows, clean components, and decisions developers can implement without friction.
            </p>
          </motion.div>

          {/* Middle: Stats Row */}
          <div className="grid grid-cols-2 gap-6 min-h-[180px]">
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card !p-6 flex flex-col items-center justify-center text-center gap-3"
             >
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-display font-bold">5+</span>
                  <div className="h-1 w-8 bg-amber-500 rounded-full mt-1 opacity-50"></div>
                </div>
                <p className="text-[11px] text-zinc-500 font-sans leading-snug px-2 font-light">
                  Years designing products across Web2, Web3, and platform-based systems
                </p>
             </motion.div>
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card !p-6 flex flex-col items-center justify-center text-center gap-3"
             >
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-display font-bold">68%</span>
                  <div className="h-1 w-8 bg-amber-500 rounded-full mt-1 opacity-50"></div>
                </div>
                <p className="text-[11px] text-zinc-500 font-sans leading-snug px-2 font-light">
                  Boost in Client conversion
                </p>
             </motion.div>
          </div>

          {/* Bottom: Web3-native */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card !p-6 flex-1"
          >
            <div className="flex gap-2.5 mb-6">
                {[
                  { color: 'bg-indigo-500/20 text-indigo-400' },
                  { color: 'bg-emerald-500/20 text-emerald-400' },
                  { color: 'bg-amber-500/20 text-amber-500' },
                  { color: 'bg-blue-500/20 text-blue-400' },
                  { color: 'bg-zinc-800 text-zinc-400' }
                ].map((token, i) => (
                  <div key={i} className={`w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center ${token.color}`}>
                    <Coins className="w-4 h-4" />
                  </div>
                ))}
            </div>
            <h4 className="text-xl font-display font-medium mb-3">Web3-native thinking</h4>
            <p className="text-[13px] text-zinc-500 leading-relaxed font-sans font-light">
              Deep experience with wallets, transactions, DAOs, and on-chain flows, simplifying complex systems into usable products.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
