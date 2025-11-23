import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyle = "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-lg shadow-indigo-500/20",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700",
    outline: "border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10",
    ghost: "text-slate-400 hover:text-white hover:bg-white/5"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};