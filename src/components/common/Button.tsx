import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  target,
  rel,
  icon,
  iconPosition = 'left',
  className = '',
  children,
  ...buttonProps
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs uppercase tracking-wider px-4 py-2 gap-1.5',
    md: 'text-sm uppercase tracking-wider px-6 py-3 gap-2',
    lg: 'text-base uppercase tracking-wider px-8 py-3.5 gap-2.5',
  }[size];

  const variantStyles = {
    primary: 'bg-forest-900 text-ivory-100 hover:bg-forest-800 hover:shadow-lg focus:ring-forest-700 active:bg-forest-950',
    secondary: 'bg-stone-200 text-charcoal-900 hover:bg-stone-300 hover:shadow-md focus:ring-stone-400',
    gold: 'bg-gold-500 text-white hover:bg-gold-600 hover:shadow-lg focus:ring-gold-400 active:bg-gold-700',
    outline: 'border border-forest-900/30 text-forest-900 hover:border-forest-900 hover:bg-forest-900/5 focus:ring-forest-700',
    ghost: 'text-forest-900 hover:bg-forest-900/5 focus:ring-forest-700',
    white: 'bg-white text-forest-900 hover:bg-ivory-100 hover:shadow-lg focus:ring-white',
  }[variant];

  const combinedStyles = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedStyles}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...buttonProps}>
      {content}
    </button>
  );
};
