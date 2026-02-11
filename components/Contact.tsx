import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import { ChevronDown, Mail, Instagram, Youtube, Linkedin } from 'lucide-react';

const FAQ_ITEMS = [
  { q: "What is your typical turnaround time?", a: "For short-form content, typically 24-48 hours. Long-form projects usually range from 5-10 business days depending on complexity." },
  { q: "Do you handle sound design?", a: "Absolutely. Every edit includes professional sound mixing, SFX selection, and audio balancing as standard." },
  { q: "How do revisions work?", a: "We offer 2 rounds of revisions for every project to ensure the final cut perfectly matches your vision." },
];

const Contact: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-cinema-black relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Form */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl text-white mb-2">Let's Create Something Cinematic</h2>
            <p className="text-white/60 mb-8">Fill out the form below or book a discovery call.</p>
            
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-900/20 border border-green-500/30 p-8 rounded-xl text-center"
              >
                <h3 className="text-2xl text-green-400 font-bold mb-2">Message Sent!</h3>
                <p className="text-white/80">We'll be in touch within 24 hours to discuss your project.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-electric-amber uppercase">Name</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-electric-amber outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-electric-amber uppercase">Email</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-electric-amber outline-none transition-colors" placeholder="john@company.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-electric-amber uppercase">Project Type</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-electric-amber outline-none transition-colors appearance-none">
                      <option className="bg-cinema-charcoal">Short-Form Content</option>
                      <option className="bg-cinema-charcoal">Documentary</option>
                      <option className="bg-cinema-charcoal">Commercial</option>
                      <option className="bg-cinema-charcoal">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-electric-amber uppercase">Budget Range</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-electric-amber outline-none transition-colors appearance-none">
                      <option className="bg-cinema-charcoal">$500 - $1k</option>
                      <option className="bg-cinema-charcoal">$1k - $5k</option>
                      <option className="bg-cinema-charcoal">$5k - $10k</option>
                      <option className="bg-cinema-charcoal">$10k+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-electric-amber uppercase">Message</label>
                  <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-electric-amber outline-none transition-colors" placeholder="Tell us about your project goals..."></textarea>
                </div>

                <Button type="submit" className="w-full" disabled={formState === 'submitting'}>
                  {formState === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
                </Button>
              </form>
            )}
          </div>

          {/* Right: Info & FAQ */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            
            {/* Direct Contacts */}
            <div className="glass-panel p-6 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-4">Direct Contact</h3>
              <a href="mailto:hello@deefilms.studio" className="flex items-center gap-3 text-white/70 hover:text-electric-amber transition-colors mb-4">
                <Mail size={20} /> hello@deefilms.studio
              </a>
              <div className="flex gap-4 mt-6">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-electric-amber hover:text-black transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-electric-amber hover:text-black transition-all">
                  <Youtube size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-electric-amber hover:text-black transition-all">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Common Questions</h3>
              <div className="space-y-4">
                {FAQ_ITEMS.map((item, idx) => (
                  <div key={idx} className="border border-white/5 rounded-lg overflow-hidden bg-white/5">
                    <button 
                      onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left text-white/90 hover:bg-white/5 transition-colors"
                    >
                      <span className="font-medium text-sm">{item.q}</span>
                      <ChevronDown size={16} className={`transition-transform ${activeAccordion === idx ? 'rotate-180 text-electric-amber' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeAccordion === idx && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-4 pb-4 text-sm text-white/60"
                        >
                          {item.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;