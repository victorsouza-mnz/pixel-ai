import { useState } from 'react';

export interface FormInputProps {
  label: string;
  //TODO ta erradu adicionar o onChange como function aqui
  [key: string]: string;
}

const FormInput = ({ label, ...props }: FormInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative my-11">
      <input
        className={`group form-input text-lg p-[10px_10px_10px_5px] block w-full appearance-none border-b border-gray-500 mb-[25px] focus:outline-none focus:border-black
            ${props.type === 'password' ? 'tracking-widest' : ''}
          `}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      ></input>
      {label && (
        <label
          className={`form-input-label text-gray-500 absolute left-1.5 top-2.5 text-base transition-all duration-300 ease-in-out ]
            ${props.value.length ? 'text-xs -top-3 text-black' : ''}
            ${isFocused ? 'text-xs -top-3 text-black' : ''}
            `}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
