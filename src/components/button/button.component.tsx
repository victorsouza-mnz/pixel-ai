import React from 'react';
import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

interface ButtonProps {
  children: React.ReactNode;
  buttonType?: 'google' | 'inverted';
  onClick?: () => void;
}

const Button = ({ children, buttonType, ...otherProps }: ButtonProps) => {
  return (
    <button
      className={`button-container ${
        buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ''
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
