import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS, STATS } from '../constants';
import { Quote } from 'lucide-react';

const Clients: React.FC = () => {
  return (
    <section className="py-24 bg-cinema-charcoal relative">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Logo Carousel */}
        <div className="mb-24 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cinema-charcoal to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cinema-charcoal to-transparent z-10"></div>
          
          <p className="text-center text-sm font-mono text-white/40 mb-8 uppercase tracking-widest">Trusted by industry leaders</p>
          
          <div className="flex gap-16 items-center justify-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholder text for logos to avoid broken images if no logos available */}
             <span className="text-2xl font-bold font-serif text-white">RED BULL</span>
             <span className="text-2xl font-bold font-serif text-white">NATIONAL GEOGRAPHIC</span>
             <span className="text-2xl font-bold font-serif text-white">STRIPE</span>
             <span className="text-2xl font-bold font-serif text-white">ADIDAS</span>
             <span className="text-2xl font-bold font-serif text-white">TESLA</span>
          </div>
        </div>

        {/* Testimonial Slider (Simplified for single view) */}
        <div className="max-w-4xl mx-auto text-center relative">
          <Quote className="w-16 h-16 text-electric-amber/20 mx-auto mb-8" />
          
          <motion.div
            key={TESTIMONIALS[0].id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-4xl font-serif italic text-white/90 leading-tight mb-8">
              "{TESTIMONIALS[0].quote}"
            </p>
            <div>
              <h4 className="text-lg font-bold text-electric-amber">{TESTIMONIALS[0].author}</h4>
              <p className="text-sm text-white/50">{TESTIMONIALS[0].role}, {TESTIMONIALS[0].company}</p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 border-t border-white/5 pt-12">
          {STATS.map((stat) => (
            <div key={stat.id} className="text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold text-white mb-2 font-serif"
              >
                {stat.value}{stat.suffix}
              </motion.div>
              <p className="text-sm font-mono text-electric-amber uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;
