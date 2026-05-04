import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  return (
    <section className="section-container" id="portfolio">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="micro-label">PORTFOLIO</span>
        <h2 className="display-heading mb-12 uppercase">EXPLORE MY WORKS</h2>
      </motion.div>

      {/* Categories Group 1: User Research */}
      <div className="mb-20">
        <h3 className="text-xl font-display font-medium text-zinc-500 mb-8 border-b border-zinc-800 pb-4 uppercase tracking-[0.2em] text-[12px]">
          USER EXPERIENCE RESEARCH
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.filter(p => p.category === 'USER EXPERIENCE RESEARCH').map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Mobile Screens */}
      <div className="mb-20">
        <h3 className="text-xl font-display font-medium text-zinc-500 mb-8 border-b border-zinc-800 pb-4 uppercase tracking-[0.2em] text-[12px]">
          MOBILE SCREEN
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[1, 2, 3, 4].map((i) => (
             <motion.div 
               key={i}
               whileHover={{ y: -10 }}
               className="aspect-[9/19] rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden relative group"
             >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80 transition-all"></div>
                <div className="absolute bottom-4 left-4 right-4 text-[10px] uppercase font-mono tracking-widest text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Screen
                </div>
             </motion.div>
           ))}
        </div>
        <div className="mt-8 flex justify-between items-center text-[10px] font-mono tracking-[0.2em] text-zinc-500 uppercase">
           <span>QUICKPITCH / MAY 2025</span>
           <button className="flex items-center gap-2 hover:text-white transition-colors">
              VIEW PROJECT <ArrowUpRight className="w-3 h-3" />
           </button>
        </div>
      </div>

      {/* Landing Page / Dashboard */}
      <div className="mb-20">
        <h3 className="text-xl font-display font-medium text-zinc-500 mb-8 border-b border-zinc-800 pb-4 uppercase tracking-[0.2em] text-[12px]">
          LANDING PAGE/DASHBOARD
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {PROJECTS.filter(p => p.category === 'LANDING PAGE/DASHBOARD').map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="aspect-[16/10] bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 relative mb-6">
        <div className="absolute inset-0 flex items-center justify-center opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700">
           {/* Placeholder for project mockups */}
           <div className="w-3/4 h-3/4 bg-zinc-800 rounded-xl border border-zinc-700 shadow-2xl flex items-center justify-center">
              <span className="font-display text-4xl font-bold opacity-10">{project.title}</span>
           </div>
        </div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
      </div>
      <div className="flex justify-between items-end">
        <div>
           <span className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase">{project.title}</span>
           <h4 className="text-[11px] font-mono font-medium tracking-[0.1em] text-zinc-400 mt-1 uppercase">{project.date}</h4>
        </div>
        <button className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
          VIEW PROJECT <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>
    </motion.div>
  )
}
