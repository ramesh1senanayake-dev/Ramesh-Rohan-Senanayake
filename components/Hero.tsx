import React from 'react';
import { Button } from './Button';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md">
          <span className="text-indigo-300 text-sm font-medium tracking-wide">SERIES A ROUND OPENING SOON</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight">
          Redefining <br/>
          <span className="gradient-text">Decentralization</span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Blurbcompany is a premier blockchain lab architecting the infrastructure for a trustless world. We build privacy, scalability, and security layers for the Web3 ecosystem.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={() => document.getElementById('investors')?.click()}>
            Partner With Us
          </Button>
          <Button variant="secondary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore The Lab
          </Button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-600">
          <ArrowDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};