import React from 'react';
import { Button } from '@ogbemudje/ui';
import { Send, Sparkles } from 'lucide-react';

export const CareersSection: React.FC = () => {
  return (
    <section id="careers" className="py-24 px-5 sm:px-8 bg-[var(--color-obsidian)] text-white relative overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--color-champagne)]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 bg-[var(--color-surface)]/90 border border-[var(--color-border-subtle)] p-8 sm:p-14 rounded-md shadow-2xl backdrop-blur-md text-center space-y-6 hover:border-[var(--color-champagne)]/40 transition-colors">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-champagne)]/10 text-[var(--color-gold-bright)] border border-[var(--color-champagne)]/30 text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
          <Sparkles className="w-3.5 h-3.5" /> Career Opportunities
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
          Build Your <em className="italic text-[var(--color-champagne)] font-serif">Career With Us</em>
        </h2>

        <p className="text-[0.95rem] text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
          At Ogbemudje, Omezi &amp; Co., we foster a professional environment that encourages legal excellence, commercial innovation, and continuous development. We welcome passionate legal practitioners, researchers, and professional interns.
        </p>

        <div className="pt-4 flex justify-center">
          <Button
            asAnchor
            href="mailto:info@ogbemudjeomezi.com?subject=Career%20Application%20-%20Ogbemudje,%20Omezi%20%26%20Co."
            variant="primary"
            icon={<Send className="w-4 h-4" />}
          >
            Submit Application
          </Button>
        </div>
      </div>
    </section>
  );
};
