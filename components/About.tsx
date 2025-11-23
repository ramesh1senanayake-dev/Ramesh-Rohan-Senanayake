import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Cpu, Shield, Zap, Globe } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: "Zero-Knowledge Privacy",
      desc: "Building the next generation of privacy-preserving protocols for institutional DeFi."
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-400" />,
      title: "Layer 0 Scalability",
      desc: "Architecting the infrastructure that allows blockchains to communicate seamlessly."
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: "Smart Contract Audits",
      desc: "Automated AI-driven formal verification for mission-critical smart contracts."
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: "Decentralized Infrastructure",
      desc: "Providing robust node infrastructure and DePin solutions globally."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -left-64 top-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-64 bottom-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="The Lab" 
          subtitle="Blurbcompany is a blockchain research and development lab dedicated to solving the trilemma of decentralization, security, and scalability." 
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-display text-white">Engineering the Trustless Future</h3>
            <p className="text-slate-400 leading-relaxed">
              Founded in 2024, our team comprises distributed systems engineers, cryptographers, and white-hat security researchers. We don't just build dApps; we build the protocols that power them.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Our mission is to accelerate the adoption of Web3 technologies by making them faster, safer, and more accessible to enterprises and individuals alike.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors border border-white/5 group">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h4 className="text-lg font-semibold text-slate-200 mb-2">{f.title}</h4>
                <p className="text-sm text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};