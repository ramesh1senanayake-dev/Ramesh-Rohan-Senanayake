import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Forms } from './components/Forms';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Forms />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;