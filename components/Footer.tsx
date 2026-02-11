import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cinema-dark border-t border-white/10 pt-20 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-electric-amber mb-4">DEE FILMS</h2>
            <p className="text-white/50 text-sm mb-4">Cinematic Storytelling.<br/>Established 2026.</p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-mono text-xs text-white/40 uppercase mb-6 tracking-widest">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-mono text-xs text-white/40 uppercase mb-6 tracking-widest">Connect</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Instagram</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">YouTube</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">LinkedIn</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-mono text-xs text-white/40 uppercase mb-6 tracking-widest">Stay Updated</h3>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white w-full outline-none focus:border-electric-amber" />
              <button className="bg-electric-amber text-black px-4 py-2 rounded text-sm font-bold hover:bg-white transition-colors">OK</button>
            </div>
          </div>

        </div>

        {/* Credits */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
          <p className="font-mono text-[10px] text-white tracking-widest uppercase mb-4 md:mb-0">
            © 2026 DEE FILMS. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-white tracking-widest uppercase">
            Designed with intent.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
