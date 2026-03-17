import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({ checked, onChange, disabled }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`
        relative w-9 h-5 rounded-full transition-colors
        ${disabled 
          ? (checked ? 'bg-pink-400' : 'bg-gray-500') 
          : (checked ? 'bg-pink-500' : 'bg-gray-600')
        }
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      <span
        className={`
          absolute top-[3px] w-[14px] h-[14px] rounded-full transition-transform
          ${disabled ? 'bg-gray-600' : 'bg-white'}
          ${checked ? 'translate-x-[16px] left-0' : 'left-[3px]'}
        `}
      />
    </button>
  );
};
