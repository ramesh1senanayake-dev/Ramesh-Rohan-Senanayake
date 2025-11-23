import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
          <Hexagon className="w-8 h-8 text-indigo-500 fill-indigo-500/20" />
          <span className="text-xl font-display font-bold tracking-tight">Blurb<span className="text-indigo-400">company</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Lab', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => scrollTo('investors')}
            className="px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all"
          >
            Invest
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 py-4 px-6 flex flex-col gap-4 shadow-2xl">
           {['About', 'Lab', 'Contact', 'Investors'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-left text-lg font-medium text-slate-300 hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};