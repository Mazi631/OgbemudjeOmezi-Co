import React, { useState } from 'react';
import type { FaqItemData } from '../../constants/data';
import { ChevronDown } from 'lucide-react';

interface FaqItemProps {
  item: FaqItemData;
}

export const FaqItem: React.FC<FaqItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-white border rounded-xs transition-all duration-300 ${
        isOpen
          ? 'border-[var(--color-champagne)] border-l-4 border-l-[var(--color-champagne)] shadow-md'
          : 'border-[var(--color-line)] hover:border-gray-300'
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4.5 font-serif text-[1.05rem] font-semibold text-left text-[var(--color-obsidian)] hover:text-[var(--color-champagne)] flex justify-between items-center gap-3 transition-colors cursor-pointer select-none"
      >
        <span>{item.question}</span>
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
            isOpen ? 'bg-[var(--color-champagne)] text-[var(--color-obsidian)]' : 'bg-stone-100 text-gray-500'
          }`}
        >
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-5 text-[0.86rem] text-gray-600 leading-relaxed border-t border-gray-100 pt-3.5 font-light animate-fadeIn">
          {item.answer}
        </div>
      )}
    </div>
  );
};
