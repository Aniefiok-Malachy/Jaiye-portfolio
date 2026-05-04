import { motion } from 'motion/react';
import { STATS } from '../constants';
import { Mail, Phone, Twitter, Linkedin } from 'lucide-react';

export default function About() {
  return (
    <section className="section-container" id="about">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="micro-label">ABOUT</span>
        <h2 className="display-heading mb-12">I AM JAIYE</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
        {STATS.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card flex flex-col justify-between py-6 px-6 h-40"
          >
            <span className="text-4xl font-display font-medium text-white">{stat.value}</span>
            <span className="text-[10px] md:text-xs font-mono uppercase text-zinc-500 tracking-wider font-semibold">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto"
        >
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
            alt="Jaiye Daniel" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-12"
        >
          <div className="glass-card">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-amber-500 text-2xl font-display italic">✦</span>
              <h3 className="text-2xl font-display font-medium">Introduction</h3>
            </div>
            <div className="space-y-6 text-zinc-400 leading-relaxed font-sans text-base md:text-lg">
              <p>
                Jaiye is a UI/UX designer focused on building clean, usable digital products, in Web2/Web3. Over the past few years, I've worked on things like dashboards, launchpads, and crypto platforms where the goal is always the same: make complex ideas simple and easy to use.
              </p>
              <p>
                I care a lot about structure, how users move through a product, how information is presented, and how everything connects. For me, good design isn't just about how it looks, it's about whether it actually works.
              </p>
              <p>
                I've been involved in different parts of the process, from early ideas to final design, and I enjoy working closely with teams to bring products to life. My focus is on creating interfaces that feel clear, reliable, and well thought out.
              </p>
            </div>
          </div>

          <div className="glass-card">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-amber-500 text-2xl font-display italic">✦</span>
              <h3 className="text-2xl font-display font-medium">Contact Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase block mb-2 tracking-widest">Email</span>
                <a href="mailto:bisayotishe@gmail.com" className="text-zinc-200 hover:text-white transition-colors">bisayotishe@gmail.com</a>
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase block mb-2 tracking-widest">Phone Number</span>
                <a href="tel:+2348026364572" className="text-zinc-200 hover:text-white transition-colors">+234 80 2636 4572</a>
              </div>
            </div>
            <div className="flex items-center justify-between">
               <div className="flex gap-4">
                  <motion.a whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <Twitter className="w-4 h-4" />
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
               </div>
               <button className="bg-zinc-800 hover:bg-zinc-700 px-8 py-3 rounded-full text-sm font-medium transition-colors">
                 Let's Work
               </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
