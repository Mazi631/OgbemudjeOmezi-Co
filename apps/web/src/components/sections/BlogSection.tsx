import React from 'react';
import { BLOG_POSTS } from '../../constants/data';
import { SectionLabel, BlogCard } from '@ogbemudje/ui';

export const BlogSection: React.FC = () => {
  const featuredPost = BLOG_POSTS[0];
  const secondaryPosts = BLOG_POSTS.slice(1);

  return (
    <section id="blog" className="py-24 px-5 sm:px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto space-y-10">
        <div>
          <SectionLabel>Legal Insights</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[var(--color-obsidian)] leading-tight">
            Publications &amp; <em className="italic text-[var(--color-champagne)] font-serif">Commentary</em>
          </h2>
          <p className="text-[0.95rem] text-gray-600 max-w-2xl leading-relaxed mt-2 font-light">
            Stay informed with expert analysis, regulatory updates, and commentary from our legal specialists in Nigeria.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-8">
            <BlogCard post={featuredPost} isFeatured />
          </div>
        )}

        {/* Secondary Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryPosts.map((post, idx) => (
            <BlogCard key={idx} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
