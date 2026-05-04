/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import GridFeatures from './components/GridFeatures';
import About from './components/About';
import Journey from './components/Journey';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-black selection:bg-amber-500/30 selection:text-white text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-amber-500 origin-left z-[60]" 
        style={{ scaleX }} 
      />

      <Navbar />
      
      <main>
        <Hero />
        <Ticker />
        <GridFeatures />
        <About />
        <Journey />
        <Portfolio />
        <Pricing />
        <FAQ />
        <Testimonials />
      </main>

      <Footer />

      {/* Luxury grain overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] mix-blend-overlay">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  );
}
