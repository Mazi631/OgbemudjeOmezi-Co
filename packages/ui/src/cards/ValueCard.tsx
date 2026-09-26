import React from 'react';

export interface ValueCardProps {
  title: string;
  description: string;
}

export const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white border border-[var(--color-line)] p-6 rounded-sm border-l-4 border-l-[var(--color-gold)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
      <h4 className="font-serif text-[1.15rem] font-semibold text-[var(--color-ink)] mb-1.5">{title}</h4>
      <p className="text-[0.82rem] text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};
