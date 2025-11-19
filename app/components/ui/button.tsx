import React from 'react';
import { FiArrowUpRight, FiCheck, FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { Icons } from './icons';

interface ButtonProps {
  type?: 'button' | 'linkButton';
  variant?: 'primary' | 'secondary' | 'dark' | 'light';
  children: React.ReactNode;
  icon?: 'arrow' | 'arrowUpRight' | 'check' | 'chevronUp' | 'chevronDown';
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  href?: string;
  fullWidth?: boolean;
  className?: string;
}

const icons = {
  arrow: <Icons.Arrow />,
  arrowUpRight: <FiArrowUpRight size={20} />,
  check: <FiCheck size={20} />,
  chevronUp: <FiChevronUp size={20} />,
  chevronDown: <FiChevronDown size={20} />,
};

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant = 'primary',
  children,
  icon,
  iconPosition = 'right',
  onClick,
  href,
  fullWidth = false,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-4 px-8 py-4 rounded-full font-medium text-[20px] transition-all duration-200 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] cursor-pointer';
  
  const linkStyles = 'inline-flex items-center gap-2 text-lg font-medium transition-all duration-200 relative group';
  
  const variantStyles = {
    primary: 'bg-[#FFB9E5] hover:bg-pink-400 text-black',
    secondary: 'bg-white hover:bg-gray-50 text-black',
    dark: 'bg-gray-900 hover:bg-gray-800 text-pink-200 border-gray-900',
    light: 'bg-lime-300 hover:bg-lime-400 text-black border-black',
  };

  const linkVariantStyles = {
    primary: 'text-pink-200',
    secondary: 'text-black',
    dark: 'text-pink-200',
    light: 'text-black',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  const iconElement = icon && icons[icon];

  if (type === 'linkButton') {
    const Component = href ? 'a' : 'button';
    return (
      <Component
        className={`${linkStyles} ${linkVariantStyles[variant]} ${className}`}
        onClick={onClick}
        {...(href ? { href } : {})}
      >
        {iconElement && iconPosition === 'left' && iconElement}
        <span className="relative">
          {children}
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
        </span>
        {iconElement && iconPosition === 'right' && iconElement}
      </Component>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyle} ${className}`}
      onClick={onClick}
    >
      {iconElement && iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {iconElement && iconPosition === 'right' && iconElement}
    </button>
  );
};