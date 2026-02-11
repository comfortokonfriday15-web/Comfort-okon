import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-amber/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-8"
        >
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-electric-amber text-sm font-bold tracking-[0.2em] uppercase"
            >
              ⏺ Now Showing
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-bold text-white tracking-tight"
            >
              DEE FILMS
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-white/90 font-light max-w-xl"
            >
              Cinematic Storytelling Through Expert Editing
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-white/70 max-w-md leading-relaxed"
            >
              We transform raw footage into emotionally resonant narratives for creators, agencies, and global brands.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth'})}>
              VIEW PORTFOLIO
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
              START A PROJECT
            </Button>
            <Button variant="text" icon={<Play size={16} fill="currentColor" />} className="ml-4 hover:translate-x-1 transition-transform">
              Watch Showreel
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 relative"
        >
          <div className="glass-panel p-2 rounded-2xl relative overflow-hidden group">
            {/* Mock Player UI */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80" 
                alt="Editing Suite" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-electric-amber flex items-center justify-center text-black shadow-[0_0_30px_rgba(255,184,0,0.4)]"
                >
                  <Play size={32} fill="currentColor" className="ml-1" />
                </motion.button>
              </div>
              
              {/* Fake UI Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="flex flex-col gap-1">
                  <div className="h-1 w-24 bg-white/50 rounded"></div>
                  <div className="h-1 w-16 bg-white/30 rounded"></div>
                </div>
                <div className="font-mono text-xs text-electric-amber">00:00:00:00</div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full border border-white/5 rounded-2xl"></div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-sm tracking-widest uppercase"
      >
        Scroll
      </motion.div>
    </section>
  );
};

export default Hero;
