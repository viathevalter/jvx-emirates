import React from 'react';

interface GoldAccentProps {
  className?: string;
  width?: string;
  direction?: 'horizontal' | 'vertical';
}

export const GoldLine: React.FC<GoldAccentProps> = ({ 
  className = '', 
  width = 'w-12',
  direction = 'horizontal'
}) => {
  if (direction === 'vertical') {
    return <div className={`w-[1px] bg-gradient-to-b from-gold-500/80 via-gold-500/40 to-transparent ${className}`} />;
  }
  return (
    <div className={`h-[1px] bg-gradient-to-r from-gold-500/80 via-gold-500/40 to-transparent ${width} ${className}`} />
  );
};

export const GoldBadge: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 text-[11px] font-medium tracking-ultra uppercase text-gold-400 bg-navy-900/90 border border-gold-500/30 rounded-full ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
      {children}
    </span>
  );
};
