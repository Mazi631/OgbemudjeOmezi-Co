import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  asAnchor = false,
  href,
  className = '',
  icon,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase rounded-xs transition-all duration-300 text-center cursor-pointer relative overflow-hidden select-none group';

  const variantStyles =
    variant === 'primary'
      ? 'bg-[var(--color-gold)] text-[var(--color-ink)] hover:bg-[var(--color-gold-bright)] hover:shadow-[0_8px_25px_rgba(184,136,42,0.35)] hover:-translate-y-0.5 font-bold'
      : variant === 'outline'
      ? 'border border-[var(--color-gold)]/40 text-white/90 hover:border-[var(--color-gold)] hover:text-[var(--color-gold-bright)] hover:bg-[var(--color-gold)]/10 backdrop-blur-xs'
      : 'text-[var(--color-gold)] hover:bg-[var(--color-gold)]/10';

  const combinedStyles = `${baseStyles} ${variantStyles} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      )}
    </>
  );

  if (asAnchor && href) {
    return (
      <a href={href} className={combinedStyles}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {content}
    </button>
  );
};
