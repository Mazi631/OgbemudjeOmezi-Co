import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'dark';
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
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold tracking-wider uppercase rounded-xs transition-all duration-300 text-center cursor-pointer relative overflow-hidden select-none group shadow-md opacity-100';

  const variantStyles =
    variant === 'primary'
      ? 'bg-[#1A1A1A] text-white hover:bg-[#B8860B] font-bold border border-[#1A1A1A]'
      : variant === 'dark'
      ? 'bg-[#1A1A1A] text-white hover:bg-[#B8860B] font-bold border border-[#1A1A1A]'
      : variant === 'outline'
      ? 'bg-[#EBE6DC] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white border border-[#E6E1D5] font-bold'
      : 'bg-[#B8860B] text-[#1A1A1A] hover:bg-[#D4AF37] font-bold';

  const combinedStyles = `${baseStyles} ${variantStyles} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
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
