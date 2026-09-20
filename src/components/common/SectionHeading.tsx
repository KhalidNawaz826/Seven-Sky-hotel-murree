import React from 'react';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
  className = ''
}) => {
  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  }[align];

  return (
    <div className={`flex flex-col ${alignStyles} max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${className}`}>
      {subtitle && (
        <span className={`text-xs uppercase tracking-widest font-semibold mb-3 ${light ? 'text-gold-300' : 'text-gold-600'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight ${light ? 'text-white' : 'text-forest-950'}`}>
        {title}
      </h2>
      <div className={`w-12 h-0.5 mt-4 mb-4 ${light ? 'bg-gold-400' : 'bg-gold-500'}`} />
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? 'text-ivory-200' : 'text-stone-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
