import React from 'react';

export interface JvxLogoProps {
  /**
   * 'primary': Official colors from slide 1 (#042736 & #AF8848)
   * 'white-gold': Elegant negative for dark backgrounds (White & #AF8848)
   * 'white': Pure monochrome white
   */
  variant?: 'primary' | 'white-gold' | 'white';
  className?: string;
  height?: number | string;
}

export const JvxLogo: React.FC<JvxLogoProps> = ({
  variant = 'white-gold',
  className = 'h-9 w-auto',
  height,
}) => {
  const src = 
    variant === 'primary' 
      ? '/images/jvx-logo-official.png' 
      : variant === 'white' 
        ? '/images/jvx-logo-white.svg' 
        : '/images/jvx-logo-white-gold.svg';

  return (
    <img
      src={src}
      alt="JVX International Business"
      className={`select-none object-contain transition-opacity duration-300 ${className}`}
      style={height ? { height } : undefined}
      loading="eager"
    />
  );
};

export const JvxSymbol: React.FC<{
  variant?: 'primary' | 'white-gold';
  className?: string;
  height?: number | string;
}> = ({
  variant = 'white-gold',
  className = 'h-8 w-auto',
  height,
}) => {
  const src = 
    variant === 'primary'
      ? '/images/jvx-symbol.svg'
      : '/images/jvx-symbol-white-gold.svg';

  return (
    <img
      src={src}
      alt="JVX Symbol"
      className={`select-none object-contain ${className}`}
      style={height ? { height } : undefined}
      loading="eager"
    />
  );
};
