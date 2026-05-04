import { motion, AnimatePresence } from 'motion/react';
import { Mail, Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About Me', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Services', id: 'services' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple intersection observer logic for active state
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 md:py-6 transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-zinc-800/50 py-4" : "bg-transparent py-6 md:py-8"
      )}
    >
      <div 
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => scrollToSection('hero')}
      >
        <span className="font-display text-2xl font-bold italic tracking-tighter">JAIYE</span>
      </div>

      <div className="hidden md:flex items-center bg-zinc-900/50 border border-zinc-800 p-1 rounded-full px-2">
        {navItems.map((item) => (
          <button 
            key={item.id} 
            onClick={() => scrollToSection(item.id)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeSection === item.id ? "text-white bg-zinc-800 shadow-sm" : "text-zinc-400 hover:text-white"
            )}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('about')}
          className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-sm transition-all"
        >
          <Mail className="w-4 h-4" />
          Contact Me
        </motion.button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-zinc-800 px-6 py-8 flex flex-col gap-6 md:hidden overflow-hidden"
          >
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-2xl font-display font-medium text-left transition-colors",
                  activeSection === item.id ? "text-amber-500" : "text-zinc-400"
                )}
              >
                {item.name}
              </button>
            ))}
            <button className="pill-button w-full justify-center">Let's Connect</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
