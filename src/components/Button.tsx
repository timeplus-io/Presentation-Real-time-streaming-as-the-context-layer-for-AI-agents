import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  destructive?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  destructive = false,
  disabled = false,
  icon,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "h-8 px-4 font-semibold text-sm rounded flex items-center justify-center gap-2 transition-colors cursor-pointer";
  
  let variantStyles = "";
  
  if (variant === 'primary') {
    if (destructive) {
      variantStyles = "bg-red-500 text-white hover:bg-red-400 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed";
    } else {
      variantStyles = "bg-pink-500 text-white hover:bg-pink-400 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed";
    }
  } else if (variant === 'secondary') {
    if (destructive) {
      variantStyles = "bg-white text-red-500 border border-gray-600 hover:bg-gray-900 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed";
    } else {
      variantStyles = "bg-white text-gray-200 border border-gray-600 hover:bg-gray-900 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed";
    }
  }

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="w-4 h-4 flex items-center justify-center">{icon}</span>}
      {children}
    </button>
  );
};
