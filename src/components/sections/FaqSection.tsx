import React, { useState } from 'react';
import { FAQ_ITEMS } from '../../constants/data';
import { SectionLabel } from '../ui/SectionLabel';
import { FaqItem } from '../cards/FaqItem';
import { Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 px-5 sm:px-8 bg-[var(--color-mist)]">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[var(--color-obsidian)] leading-tight">
              Frequently Asked <em className="italic text-[var(--color-champagne)] font-serif">Questions</em>
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search legal questions…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[var(--color-line)] rounded-xs text-[0.85rem] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[var(--color-champagne)] transition-colors shadow-xs"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {filteredFaqs.map((item, idx) => (
              <FaqItem key={idx} item={item} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-dashed border-gray-300 p-8 rounded-md text-center text-gray-500 text-sm">
            No questions found matching "{searchQuery}". Please contact us directly for assistance.
          </div>
        )}
      </div>
    </section>
  );
};
