import React from 'react';
import { Twitter, Github, Linkedin, Disc, Hexagon, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Hexagon className="w-6 h-6 text-indigo-500" />
              <span className="text-xl font-display font-bold text-white">Blurb<span className="text-indigo-400">company</span></span>
            </div>
            <p className="text-slate-500 max-w-sm">
              Architecting the decentralized web through rigorous research, open-source collaboration, and scalable infrastructure.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Lab</h4>
            <ul className="space-y-2 text-slate-500">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Research</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Protocol Specs</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Audit Reports</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            
            <a href="mailto:contact@blurbcompany.com" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-6 group">
               <Mail className="w-4 h-4 group-hover:text-cyan-400" />
               <span className="text-sm">contact@blurbcompany.com</span>
            </a>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white transition-all">
                <Disc className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Blurbcompany Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
