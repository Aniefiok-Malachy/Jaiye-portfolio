import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { LOGO_SYMBOLS } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = {
    home: [
      { name: 'ABOUT ME', id: 'about' },
      { name: 'MY WORKS', id: 'portfolio' },
      { name: 'TESTIMONIALS', id: 'testimonials' }
    ],
    clients: ['VESTPI', 'VESTPAD', 'DATICKS', 'PUISNEXUS'],
    portfolio: [
      { name: 'UX RESEARCH', id: 'portfolio' },
      { name: 'MOBILE', id: 'portfolio' },
      { name: 'INFO ARCH', id: 'portfolio' },
      { name: 'LANDING PAGE', id: 'portfolio' }
    ],
    services: [
      'USER RESEARCH AND STRATEGY',
      'UX DESIGN',
      'UI DESIGN',
      'WIRE FRAMING AND PROTOTYPING',
      'USABILITY TESTING',
      'SOFTWARE REDESIGNS'
    ]
  };

  return (
    <footer className="relative mt-24">
      {/* Decorative Top Bar (Ticker) */}
      <div className="w-full overflow-hidden border-y border-zinc-800 bg-zinc-900/50 flex flex-col gap-4 py-8">
        <motion.div 
          animate={{ x: '-50%' }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          className="flex whitespace-nowrap gap-12 items-center"
        >
          {[...LOGO_SYMBOLS, ...LOGO_SYMBOLS].map((text, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <Sparkles className="w-3 h-3 text-amber-500 transition-transform group-hover:rotate-45" />
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] text-zinc-500 group-hover:text-white uppercase transition-colors">{text}</span>
            </div>
          ))}
        </motion.div>
        
        <motion.div 
          animate={{ x: '0%' }}
          initial={{ x: '-50%' }}
          transition={{ 
            duration: 45, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          className="flex whitespace-nowrap gap-12 items-center"
        >
          {[...LOGO_SYMBOLS, ...LOGO_SYMBOLS].map((text, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <Sparkles className="w-3 h-3 text-amber-500 transition-transform group-hover:rotate-45" />
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] text-zinc-500 group-hover:text-white uppercase transition-colors">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="section-container pt-32 pb-12 relative overflow-hidden">
        {/* Giant Bg Text */}
        <div className="absolute top-0 right-0 left-0 text-center pointer-events-none select-none opacity-[0.05] translate-y-12">
           <h2 
            className="text-[20vw] font-display font-bold whitespace-nowrap tracking-tighter"
            style={{ WebkitTextStroke: '1px white', color: 'transparent' }}
           >
            JAIYE DANIEL
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
          <div className="lg:col-span-5 flex flex-col justify-center">
             <div className="mb-12">
               <span className="micro-label max-w-[280px]">A MORE MEANINGFUL HOME FOR YOUR WEBSITES AND APPS</span>
             </div>
             <div className="flex flex-col gap-6">
                <div 
                  className="flex items-center gap-8 group cursor-pointer"
                  onClick={() => scrollToSection('about')}
                >
                  <h3 className="text-5xl md:text-7xl font-display font-medium tracking-tight hover:text-amber-500 transition-colors">LET'S</h3>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-amber-500 text-black px-10 py-4 rounded-full flex items-center gap-2 font-semibold shadow-[0_0_50px_-12px_rgba(245,158,11,0.5)]"
                  >
                    Let's Connect <ArrowUpRight className="w-5 h-5 shadow-2xl" />
                  </motion.div>
                </div>
                <h3 className="text-5xl md:text-7xl font-display font-medium tracking-tight">WORK TOGETHER</h3>
             </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
             <div>
                <h4 className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] mb-8 uppercase">Home</h4>
                <ul className="flex flex-col gap-4">
                  {links.home.map(link => (
                    <li key={link.id}><a onClick={() => scrollToSection(link.id)} className="text-[11px] font-display font-medium hover:text-amber-500 transition-colors uppercase cursor-pointer">{link.name}</a></li>
                  ))}
                </ul>
             </div>
             <div>
                <h4 className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] mb-8 uppercase">Clients</h4>
                <ul className="flex flex-col gap-4">
                  {links.clients.map(link => (
                    <li key={link}><a className="text-[11px] font-display font-medium hover:text-zinc-300 transition-colors uppercase cursor-not-allowed text-zinc-600">{link}</a></li>
                  ))}
                </ul>
             </div>
             <div>
                <h4 className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] mb-8 uppercase">Portfolio</h4>
                <ul className="flex flex-col gap-4">
                  {links.portfolio.map((link, idx) => (
                    <li key={idx}><a onClick={() => scrollToSection(link.id)} className="text-[11px] font-display font-medium hover:text-amber-500 transition-colors uppercase cursor-pointer">{link.name}</a></li>
                  ))}
                </ul>
             </div>
             <div>
                <h4 className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] mb-8 uppercase">Services</h4>
                <ul className="flex flex-col gap-4">
                  {links.services.map(link => (
                    <li key={link}><a onClick={() => scrollToSection('services')} className="text-[11px] font-display font-medium hover:text-amber-500 transition-colors uppercase cursor-pointer">{link}</a></li>
                  ))}
                </ul>
             </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex gap-8 text-[11px] text-zinc-500 font-sans">
              <a className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</a>
              <a className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
           </div>
           <p className="text-[11px] text-zinc-500 font-sans">
              © {currentYear} JAIYE . All rights reserved.
           </p>
        </div>
      </div>
    </footer>
  );
}
