import React from 'react';
import type { BlogPost } from '../../constants/data';
import { ArrowUpRight, Clock } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  isFeatured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, isFeatured = false }) => {
  return (
    <div
      className={`bg-white border border-[var(--color-line)] rounded-xs overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[var(--color-champagne)]/50 group flex flex-col ${
        isFeatured ? 'lg:grid lg:grid-cols-12 lg:gap-6' : 'h-full'
      }`}
    >
      <div
        className={`bg-gradient-to-br from-[var(--color-surface)] via-[#161c2b] to-[#0b0d14] flex items-center justify-center text-5xl shrink-0 relative overflow-hidden ${
          isFeatured ? 'lg:col-span-5 h-[220px] lg:h-full' : 'h-[180px]'
        }`}
      >
        <span className="group-hover:scale-110 transition-transform duration-500">{post.icon}</span>
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[0.68rem] tracking-[0.14em] uppercase text-[var(--color-gold-bright)] font-semibold border border-[var(--color-champagne)]/30">
          {post.tag}
        </div>
      </div>

      <div className={`p-6 flex flex-col flex-grow ${isFeatured ? 'lg:col-span-7 lg:p-8' : ''}`}>
        <div className="flex items-center gap-2 text-[0.72rem] text-gray-400 font-medium mb-3">
          <Clock className="w-3.5 h-3.5 text-[var(--color-champagne)]" /> 5 min read
        </div>

        <h3
          className={`font-serif font-semibold text-[var(--color-obsidian)] group-hover:text-[var(--color-champagne)] transition-colors mb-3 leading-snug ${
            isFeatured ? 'text-2xl sm:text-3xl' : 'text-[1.2rem]'
          }`}
        >
          {post.title}
        </h3>

        <p className="text-[0.84rem] text-gray-600 leading-relaxed mb-6 flex-grow font-light">
          {post.excerpt}
        </p>

        <a
          href="#contact"
          className="text-[0.78rem] font-bold tracking-[0.1em] uppercase text-[var(--color-champagne)] hover:text-[var(--color-obsidian)] inline-flex items-center gap-1.5 mt-auto transition-colors group/link"
        >
          <span>Read Analysis</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
};
