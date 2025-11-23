import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { InvestorFormData, CollaborationFormData, FormType } from '../types';
import { CheckCircle, ArrowRight, Mail } from 'lucide-react';

export const Forms: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FormType>(FormType.COLLABORATION);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Investor State
  const [investorData, setInvestorData] = useState<InvestorFormData>({
    name: '', email: '', organization: '', investmentRange: '', thesis: ''
  });

  // Collab State
  const [collabData, setCollabData] = useState<CollaborationFormData>({
    name: '', email: '', projectType: '', technicalRequirements: '', timeline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 3 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleInvestorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setInvestorData({ ...investorData, [e.target.name]: e.target.value });
  };

  const handleCollabChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setCollabData({ ...collabData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Connect with Blurbcompany" 
          subtitle="Whether you're looking to fuel our growth or build the next unicorn with us, we want to hear from you."
        />

        <div className="flex justify-center mb-8">
           <a href="mailto:contact@blurbcompany.com" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors bg-white/5 px-6 py-3 rounded-full border border-white/5 hover:border-cyan-500/30">
             <Mail className="w-5 h-5" />
             <span className="font-mono text-sm">contact@blurbcompany.com</span>
           </a>
        </div>

        <div className="flex justify-center mb-12">
          <div className="glass-panel p-1 rounded-full flex">
            <button 
              onClick={() => setActiveTab(FormType.COLLABORATION)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === FormType.COLLABORATION ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Collaboration
            </button>
            <button 
              id="investors"
              onClick={() => setActiveTab(FormType.INVESTOR)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === FormType.INVESTOR ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Investors
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto glass-panel p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
          
          {isSuccess && (
            <div className="absolute inset-0 bg-brand-dark/95 flex items-center justify-center z-20 flex-col animate-fade-in">
               <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
               <h3 className="text-2xl font-bold text-white">Message Sent</h3>
               <p className="text-slate-400 mt-2">We'll get back to your decentralized identity shortly.</p>
            </div>
          )}

          {activeTab === FormType.COLLABORATION ? (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input required name="name" value={collabData.name} onChange={handleCollabChange} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input required name="email" type="email" value={collabData.email} onChange={handleCollabChange} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="jane@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Project Type</label>
                <select name="projectType" value={collabData.projectType} onChange={handleCollabChange} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all">
                  <option value="">Select a type...</option>
                  <option value="defi">DeFi Protocol</option>
                  <option value="infrastructure">Infrastructure / Node</option>
                  <option value="nft">NFT / Metaverse</option>
                  <option value="research">Research Partnership</option>
                  <option value="audit">Security Audit</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Technical Requirements (Brief)</label>
                <textarea name="technicalRequirements" value={collabData.technicalRequirements} onChange={handleCollabChange} rows={3} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="React, Solidity, ZK-Rollups..." />
              </div>
              <Button type="submit" className="w-full group">
                {isSubmitting ? 'Transmitting...' : (
                   <span className="flex items-center gap-2">Send Collaboration Request <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                )}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Contact Name</label>
                  <input required name="name" value={investorData.name} onChange={handleInvestorChange} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Work Email</label>
                  <input required name="email" type="email" value={investorData.email} onChange={handleInvestorChange} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all" placeholder="john@vc.firm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Organization / Fund Name</label>
                <input required name="organization" value={investorData.organization} onChange={handleInvestorChange} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all" placeholder="Acme Ventures" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Capital Allocation Range</label>
                <select name="investmentRange" value={investorData.investmentRange} onChange={handleInvestorChange} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all">
                  <option value="">Select range...</option>
                  <option value="seed">Seed ($50k - $500k)</option>
                  <option value="seriesA">Series A ($1M - $5M)</option>
                  <option value="strategic">Strategic Partnership</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Investment Thesis / Notes</label>
                <textarea name="thesis" value={investorData.thesis} onChange={handleInvestorChange} rows={4} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all" placeholder="We focus on L2 scaling solutions..." />
              </div>
              <Button type="submit" variant="primary" className="w-full group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500">
                {isSubmitting ? 'Transmitting...' : (
                   <span className="flex items-center gap-2">Inquire for Deck <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
