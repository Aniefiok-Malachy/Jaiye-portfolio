import { motion } from 'motion/react';
import { LOGO_SYMBOLS } from '../constants';
import { Sparkles } from 'lucide-react';

export default function Ticker() {
  // Duplicate for seamless loop
  const items = [...LOGO_SYMBOLS, ...LOGO_SYMBOLS];

  return (
    <div className="w-full overflow-hidden py-6 border-y border-zinc-800 bg-zinc-900/20">
      <motion.div 
        animate={{ x: '-50%' }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: 'linear' 
        }}
        className="flex whitespace-nowrap gap-12 items-center"
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4 group">
            <Sparkles className="w-4 h-4 text-amber-500 transition-transform group-hover:rotate-45" />
            <span className="text-xs md:text-sm font-mono font-medium tracking-[0.2em] text-zinc-500 hover:text-white uppercase">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
