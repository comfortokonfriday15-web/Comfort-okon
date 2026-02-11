import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../constants';
import { Play } from 'lucide-react';
import Button from './ui/Button';

const CATEGORIES = ["All Work", "Talking Head", "Shorts", "Promo", "Documentary", "Animation", "Explainer"];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All Work");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredItems = activeFilter === "All Work" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  const visibleItems = filteredItems.slice(0, visibleCount);

  return (
    <section id="work" className="py-20 bg-cinema-black/50 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl text-white mb-8">Selected Works</h2>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 sticky top-24 z-30 py-4 glass-panel inline-flex px-6 rounded-full mx-auto max-w-full overflow-x-auto">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeFilter === cat 
                    ? 'bg-electric-amber text-black font-bold' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <div className="glass-card rounded-lg overflow-hidden border border-white/5 bg-cinema-charcoal">
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-electric-amber flex items-center justify-center text-black transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                        <Play size={20} fill="currentColor" className="ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-mono text-white/80">
                      {project.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-electric-amber uppercase tracking-wider">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-electric-amber transition-colors">{project.title}</h3>
                    <p className="text-sm text-white/50">{project.client}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        {visibleItems.length < filteredItems.length && (
          <div className="mt-16 text-center">
            <Button variant="outline" onClick={() => setVisibleCount(prev => prev + 3)}>
              LOAD MORE WORK
            </Button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Portfolio;
