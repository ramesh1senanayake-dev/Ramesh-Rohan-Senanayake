import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import { generateLabResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greetings. I am the Blurb Lab Assistant. Ask me about our technology or vision.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await generateLabResponse(userMsg.text);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
       setMessages(prev => [...prev, { role: 'model', text: "Connection interrupted. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={toggleChat}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group ${isOpen ? 'rotate-90 bg-slate-700 text-slate-300' : 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white'}`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
        {!isOpen && (
           <span className="absolute -top-12 right-0 bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-bold w-max opacity-0 group-hover:opacity-100 transition-opacity">
             Ask Blurb AI
           </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 md:right-8 w-[calc(100vw-3rem)] md:w-96 h-[500px] glass-panel bg-[#0f111a] rounded-2xl shadow-2xl border border-indigo-500/30 z-50 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="p-4 border-b border-white/10 bg-indigo-500/10 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-white tracking-wide">BLURB LAB TERMINAL</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-br-none' 
                    : 'bg-slate-800 text-slate-300 rounded-bl-none border border-slate-700'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-slate-800 rounded-2xl px-4 py-3 rounded-bl-none border border-slate-700 flex gap-1 items-center">
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-200"></div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/20">
            <div className="relative">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Query the lab..."
                className="w-full bg-slate-900 border border-slate-700 rounded-full pl-4 pr-12 py-2.5 text-sm text-white focus:ring-1 focus:ring-indigo-500 outline-none"
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="absolute right-1.5 top-1.5 p-1.5 bg-indigo-600 rounded-full text-white hover:bg-indigo-500 transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};