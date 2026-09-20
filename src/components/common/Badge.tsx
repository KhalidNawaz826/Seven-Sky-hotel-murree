import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'forest' | 'stone' | 'white' | 'verified';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  size = 'md',
  icon,
  className = ''
}) => {
  const sizeStyles = {
    sm: 'text-[10px] px-2.5 py-0.5 tracking-wider',
    md: 'text-xs px-3 py-1 tracking-widest'
  }[size];

  const variantStyles = {
    gold: 'bg-gold-500/10 text-gold-700 border border-gold-500/30',
    forest: 'bg-forest-900/10 text-forest-900 border border-forest-900/20',
    stone: 'bg-stone-200 text-stone-800 border border-stone-300',
    white: 'bg-white/90 text-forest-900 shadow-sm backdrop-blur-sm border border-white/50',
    verified: 'bg-emerald-50 text-emerald-800 border border-emerald-300'
  }[variant];

  return (
    <span className={`inline-flex items-center gap-1.5 uppercase font-semibold rounded-full ${sizeStyles} ${variantStyles} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
