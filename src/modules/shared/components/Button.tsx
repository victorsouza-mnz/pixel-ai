import React from 'react';

const CLASSES_BY_TYPE = {
  google: 'bg-blue-500 hover:bg-blue-600 text-white',
  inverted:
    'bg-white text-black border border-black hover:bg-black hover:text-white',
  default:
    'border-black border bg-black text-white hover:bg-white hover:text-black',
};

interface ButtonProps {
  children: React.ReactNode;
  buttonType?: 'google' | 'inverted';
  onClick?: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Button = ({ children, buttonType, ...otherProps }: ButtonProps) => {
  return (
    <button
      className={`font-bold min-w-10 min-h-8 px-[20px] py-[6px] uppercase tracking-[1px] cursor-pointer flex justify-center items-center
            ${CLASSES_BY_TYPE[buttonType ? buttonType : 'default']} 
      `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
