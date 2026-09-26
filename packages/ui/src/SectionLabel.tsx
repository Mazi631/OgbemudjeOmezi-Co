import React from 'react';

export interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ children, className = '', light = false }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.7rem] font-semibold tracking-[0.22em] uppercase border transition-all duration-300 ${
        light
          ? 'bg-[var(--color-gold)]/10 text-[var(--color-gold-bright)] border-[var(--color-gold)]/30 backdrop-blur-md'
          : 'bg-[var(--color-gold)]/10 text-[var(--color-gold)] border-[var(--color-gold)]/25'
      } mb-4 shadow-xs ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-bright)] animate-pulse" />
      <span>{children}</span>
    </div>
  );
};
