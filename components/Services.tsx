import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Production Expertise</h2>
          <p className="text-white/60 max-w-2xl text-lg">From fast-paced social cuts to cinematic documentaries, our pipeline is optimized for quality and speed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-6 bg-white/5 w-14 h-14 rounded-full flex items-center justify-center border border-white/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-white/60 flex items-center gap-2">
                    <span className="w-1 h-1 bg-electric-amber rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-white/5">
                <p className="text-xs font-mono text-electric-amber/80">{service.priceAnchor}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workflow */}
        <div className="mt-24">
          <h3 className="text-2xl font-serif text-white mb-8 text-center">Our Workflow</h3>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {['Discovery', 'Rough Cut', 'Revisions', 'Delivery'].map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center group">
                  <div className="w-4 h-4 bg-cinema-black border-2 border-electric-amber rounded-full z-10 mb-4 transition-transform group-hover:scale-150"></div>
                  <h4 className="text-lg font-bold text-white mb-2">{step}</h4>
                  <p className="text-sm text-white/50 px-4">
                    {idx === 0 && "We align on vision and assets."}
                    {idx === 1 && "The narrative structure takes shape."}
                    {idx === 2 && "Fine-tuning details and pacing."}
                    {idx === 3 && "Final render in all formats."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
