import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-gradient-to-r from-indigo-500 to-cyan-500 mt-6 rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};