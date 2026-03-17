import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  disabled,
  required,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className={`text-xs ${error ? 'text-red-500' : disabled ? 'text-gray-500' : 'text-gray-300'}`}>
          {label}{required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <input
        disabled={disabled}
        className={`
          h-10 px-3 rounded text-sm font-normal
          ${disabled ? 'bg-gray-800 text-gray-500' : 'bg-white text-gray-100'}
          border ${error ? 'border-red-500' : 'border-gray-600'}
          focus:outline-none focus:border-gray-300
          placeholder:text-gray-600
          disabled:cursor-not-allowed
        `}
        {...props}
      />
    </div>
  );
};
