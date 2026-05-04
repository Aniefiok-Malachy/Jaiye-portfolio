import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none">
          <circle cx="400" cy="400" r="150" stroke="white" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="250" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="400" cy="400" r="350" stroke="white" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>

      <div className="section-container relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="micro-label">DESIGN AND DEVELOPMENT BY</span>
            <h1 className="font-display text-7xl md:text-9xl font-bold tracking-tight mb-8">
              JAIYE <br />
              <span className="text-zinc-400">DANIEL</span>
            </h1>
          </motion.div>
        </div>

        <div className="flex-1 text-left md:text-right">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start md:items-end"
          >
            <div className="flex items-center gap-6 flex-wrap md:flex-nowrap justify-start md:justify-end">
              <span className="font-display text-5xl md:text-7xl font-medium tracking-tight">LET'S</span>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-amber-500 text-black px-8 py-4 rounded-full flex items-center gap-2 font-bold shadow-[0_0_50px_-12px_rgba(245,158,11,0.5)]"
              >
                Let's Connect <ArrowUpRight className="w-5 h-5 shadow-2xl" />
              </motion.div>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-medium tracking-tight mt-4">WORK TOGETHER</h2>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-auto w-full"
      >
        {/* Ticker will be placed here in App.tsx */}
      </motion.div>
    </section>
  );
}
