import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SectionLabel } from './SectionLabel';

interface PageHeaderProps {
  badge: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  breadcrumbs: { label: string; href?: string }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  titleAccent,
  subtitle,
  breadcrumbs,
}) => {
  return (
    <div className="bg-[var(--color-ink)] text-white pt-32 pb-16 px-5 sm:px-8 relative overflow-hidden border-b border-[var(--color-gold)]/20">
      {/* Background Lighting Glow */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[300px] bg-[var(--color-gold)]/10 blur-[110px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-4">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-[0.78rem] text-white/50 mb-2">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-[var(--color-gold)]/60" />}
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-[var(--color-gold-bright)] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[var(--color-gold-bright)] font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        <SectionLabel light>{badge}</SectionLabel>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
          {title}{' '}
          {titleAccent && (
            <em className="italic text-[var(--color-gold-bright)] font-serif font-normal">
              {titleAccent}
            </em>
          )}
        </h1>

        <p className="text-[0.95rem] text-white/65 max-w-2xl leading-relaxed font-light">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
