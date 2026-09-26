import React, { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../constants/data';

export const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Duplicated items for seamless looping
  const items = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;

    const autoScroll = () => {
      if (!isDragging && container) {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 0.8;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="testimonials" className="py-24 px-6 sm:px-10 bg-[#F5F2EB] border-b border-[#E6E1D5] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#B8860B]">
              Testimonials
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight">
              Client Endorsements &amp; Reviews
            </h2>
            <p className="text-base text-[#59544B] font-normal">
              Read what corporate executives and private clients say about our legal counsel.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-[#E6E1D5] hover:border-[#1A1A1A] bg-[#FCFBFA] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-[#E6E1D5] hover:border-[#1A1A1A] bg-[#FCFBFA] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container (Auto-scrolling continuously, no pause on hover) */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-6 overflow-x-auto no-scrollbar py-4 cursor-grab ${
            isDragging ? 'cursor-grabbing select-none' : ''
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((t, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[380px] shrink-0 bg-[#FCFBFA] border border-[#E6E1D5] p-8 rounded-xs shadow-xs space-y-6 flex flex-col justify-between hover:border-[#1A1A1A] transition-all duration-300 hover:shadow-lg"
            >
              <div className="space-y-4">
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#B8860B]">
                    {Array.from({ length: 5 }).map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E6E1D5]" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-[#2D2A26] leading-relaxed font-normal italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#E6E1D5] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#38291B] text-white font-serif font-bold flex items-center justify-center shrink-0">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1A1A1A]">
                    {t.author}
                  </h4>
                  <div className="text-xs text-[#59544B] font-normal">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
