import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Showreel: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="h-[1px] w-12 bg-electric-amber"></span>
            <span className="text-electric-amber text-sm font-bold tracking-widest uppercase">⏵ Latest Cut</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-white mb-4"
          >
            Featured Edits
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl"
          >
            A curated selection of our most recent client work and passion projects.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8 group cursor-pointer"
          >
            <div className="glass-card rounded-xl overflow-hidden relative aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80" 
                alt="Showreel 2026"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                 <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform bg-black/20">
                    <Play fill="white" className="ml-1 text-white" />
                 </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">DEE FILMS SHOWREEL 2026</h3>
                <p className="font-mono text-xs text-electric-amber flex items-center gap-3">
                  <span>2:34 MIN</span>
                  <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                  <span>4K</span>
                  <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                  <span>COLOR GRADED</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Secondary Stack */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {[
              { title: "Nike - Run Future", meta: "0:45 • COMMERCIAL", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80" },
              { title: "Travel Diaries: Japan", meta: "12:00 • VLOG", img: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&q=80" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
                className="glass-card rounded-xl overflow-hidden relative flex-1 group cursor-pointer h-[240px]"
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                   <Play fill="white" className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="font-mono text-xs text-white/60 mt-1">{item.meta}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Showreel;
