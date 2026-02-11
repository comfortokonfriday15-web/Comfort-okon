import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80" 
                alt="Dee Reynolds" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-electric-amber/10 backdrop-blur-md rounded-full border border-electric-amber/20 -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-electric-amber text-sm font-bold tracking-widest uppercase mb-4 block">The Editor</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Dee Reynolds</h2>
            <p className="text-xl text-white/80 mb-6 italic font-serif">
              "Editing is the final rewrite. It's where the story truly finds its pulse."
            </p>
            <p className="text-white/60 mb-8 leading-relaxed">
              With over 10 years of experience in post-production, I've trained under Oscar-winning editors and developed a unique rhythm that blends cinematic tradition with modern, fast-paced storytelling. My goal is simple: to make the audience feel something.
            </p>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">Studio Arsenal</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-sm text-white/70">
                  <span className="block text-white font-semibold mb-1">Hardware</span>
                  Mac Studio M2 Ultra<br/>Target Reference Monitors
                </div>
                <div className="text-sm text-white/70">
                  <span className="block text-white font-semibold mb-1">Software</span>
                  DaVinci Resolve Studio<br/>Adobe Premiere Pro
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
